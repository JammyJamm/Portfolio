/**
 * Utility functions for Experience data normalization and 3D cascade calculations
 */

/**
 * Normalizes the raw epic data structure into a flat list of project items
 * while preserving full parent company metadata.
 *
 * @param {Array} epic - The raw epic array from Index.js
 * @returns {Array} Flat list of normalized project objects
 */
export const normalizeEpicData = (epic = []) => {
  if (!Array.isArray(epic) || epic.length === 0) {
    return [];
  }

  const flattened = [];

  epic.forEach((company, compIndex) => {
    const organization = company.organization || "Independent";
    const role = company.role || "";
    const duration =
      company.endYear ||
      (company.startYear && company.endYear
        ? `${company.startYear} - ${company.endYear}`
        : company.startYear || "");
    const location = company.location || "";

    // Parse AI skills string or array
    const aiSkills = Array.isArray(company.AI)
      ? company.AI
      : typeof company.AI === "string"
      ? company.AI.split("|")
          .map((s) => s.trim())
          .filter(Boolean)
      : [];

    // Parse Development skills string or array
    const devSkills = Array.isArray(company.Development)
      ? company.Development
      : typeof company.Development === "string"
      ? company.Development.split("|")
          .map((s) => s.trim())
          .filter(Boolean)
      : [];

    const projects = Array.isArray(company.projects) ? company.projects : [];

    if (projects.length > 0) {
      projects.forEach((proj, projIndex) => {
        flattened.push({
          id: `proj-${compIndex}-${projIndex}`,
          companyIndex: compIndex,
          projectIndexInCompany: projIndex,
          organization,
          role,
          duration,
          location,
          aiSkills,
          devSkills,
          projectName: proj.Project || proj.name || `Project ${projIndex + 1}`,
          year: proj.year || "",
          description: proj.what_we_do || proj.description || "",
          contribution: proj.contribution || "",
          linkText: proj.link || proj.Project || "Visit Project",
          href: proj.href || "",
          totalProjectsInCompany: projects.length,
        });
      });
    } else {
      // Graceful fallback if a company entry does not contain a projects array
      flattened.push({
        id: `comp-${compIndex}`,
        companyIndex: compIndex,
        projectIndexInCompany: 0,
        organization,
        role,
        duration,
        location,
        aiSkills,
        devSkills,
        projectName: company.organization,
        year: duration,
        description: company.description || "Company experience and overview.",
        contribution: company.contribution || "",
        linkText: company.organization,
        href: company.href || "",
        totalProjectsInCompany: 1,
      });
    }
  });

  return flattened;
};

/**
 * Calculates dynamic CSS 3D transform properties for a card based on its offset
 * relative to the activeIndex.
 *
 * Requirements:
 * - Active project: large / front, visually dominant
 * - Projects behind it: progressively smaller, medium/deep/deeper
 * - Alternate left/right positions (Project 1 -> left, Project 2 -> right, Project 3 -> left...)
 * - On wheel down: active project zooms toward center/front, scales up, fades out
 *
 * @param {number} offset - (projectIndex - activeIndex)
 * @param {number} projectIndex - 0-indexed position in project list
 * @param {number} viewportWidth - window.innerWidth
 * @param {boolean} isReducedMotion - prefers-reduced-motion flag
 * @returns {Object} Inline CSS style object
 */
export const calculateCardTransform = (
  offset,
  projectIndex,
  viewportWidth = 1200,
  isReducedMotion = false
) => {
  // If user requests reduced motion, disable 3D depth and use a simple fade/layer
  if (isReducedMotion) {
    if (offset === 0) {
      return {
        transform: "translate(-50%, -50%)",
        opacity: 1,
        zIndex: 100,
        filter: "none",
        pointerEvents: "auto",
        visibility: "visible",
      };
    }
    return {
      transform: "translate(-50%, -50%)",
      opacity: 0,
      zIndex: 50,
      pointerEvents: "none",
      visibility: "hidden",
    };
  }

  const isLeft = projectIndex % 2 === 0;
  const isMobile = viewportWidth < 768;
  const isTablet = viewportWidth >= 768 && viewportWidth < 1024;

  // ==========================================
  // 1. ACTIVE PROJECT (offset === 0)
  // ==========================================
  if (offset === 0) {
    if (isMobile) {
      // Mobile: Centered, 100% visible inside viewport
      return {
        transform: "translate3d(-50%, -50%, 0px) scale(1) rotateY(0deg)",
        opacity: 1,
        zIndex: 100,
        filter: "none",
        pointerEvents: "auto",
        visibility: "visible",
      };
    }

    if (isTablet) {
      // Tablet: Reduced depth and horizontal movement
      const tx = isLeft ? "calc(-50% - 3.5vw)" : "calc(-50% + 3.5vw)";
      const ry = isLeft ? 2.5 : -2.5;
      return {
        transform: `translate3d(${tx}, -50%, 0px) scale(1) rotateY(${ry}deg)`,
        opacity: 1,
        zIndex: 100,
        filter: "none",
        pointerEvents: "auto",
        visibility: "visible",
      };
    }

    // Desktop: Smooth responsive horizontal offset (moderate at 1024-1280px, full at 1280px+)
    const desktopShift = viewportWidth < 1280 ? 9 : 14;
    const ryBase = viewportWidth < 1280 ? 4 : 5;
    const tx = isLeft
      ? `calc(-50% - ${desktopShift}vw)`
      : `calc(-50% + ${desktopShift}vw)`;
    const ry = isLeft ? ryBase : -ryBase;
    return {
      transform: `translate3d(${tx}, -50%, 0px) scale(1) rotateY(${ry}deg)`,
      opacity: 1,
      zIndex: 100,
      filter: "none",
      pointerEvents: "auto",
      visibility: "visible",
    };
  }

  // ==========================================
  // 2. PAST PROJECT (offset < 0)
  // Zoom toward center/front, scale up, fade / move away
  // ==========================================
  if (offset < 0) {
    const absOffset = Math.abs(offset);

    if (absOffset === 1) {
      // Just exited project: zooms forward into center and fades
      const tz = isMobile ? 160 : isTablet ? 240 : 320;
      const scale = isMobile ? 1.12 : isTablet ? 1.2 : 1.28;
      return {
        transform: `translate3d(-50%, -50%, ${tz}px) scale(${scale}) rotateY(0deg)`,
        opacity: 0,
        zIndex: 120,
        filter: "blur(5px)",
        pointerEvents: "none",
        visibility: "visible",
      };
    }

    // Older exited projects
    const tz = isMobile ? 280 : isTablet ? 400 : 520;
    const scale = isMobile ? 1.2 : 1.4;
    return {
      transform: `translate3d(-50%, -50%, ${tz}px) scale(${scale}) rotateY(0deg)`,
      opacity: 0,
      zIndex: 50,
      filter: "blur(8px)",
      pointerEvents: "none",
      visibility: "hidden",
    };
  }

  // ==========================================
  // 3. UPCOMING PROJECTS (offset > 0)
  // Stack progressively in depth behind active card
  // ==========================================
  const depthLevel = Math.min(offset, 4);

  if (isMobile) {
    // Mobile: Simplified centered 3D vertical cascade behind active card
    const ty = `calc(-50% - ${depthLevel * 10}px)`;
    const tz = -depthLevel * 65;
    const scale = Math.max(0.74, 1 - offset * 0.08);
    const opacity =
      offset === 1 ? 0.6 : offset === 2 ? 0.3 : offset === 3 ? 0.12 : 0;
    const zIndex = 100 - offset * 10;
    const blur = offset * 0.8;

    return {
      transform: `translate3d(-50%, ${ty}, ${tz}px) scale(${scale}) rotateY(0deg)`,
      opacity,
      zIndex,
      filter: blur > 0 ? `blur(${blur}px)` : "none",
      pointerEvents: offset <= 2 ? "auto" : "none",
      visibility: offset > 3 ? "hidden" : "visible",
      cursor: offset <= 2 ? "pointer" : "default",
    };
  }

  if (isTablet) {
    // Tablet: Reduced depth and gentle alternating horizontal tilt
    const sideMultiplier = isLeft ? -1 : 1;
    const tx = `calc(-50% + ${sideMultiplier * (3.5 + depthLevel * 1.5)}vw)`;
    const ty = `calc(-50% - ${depthLevel * 8}px)`;
    const tz = -depthLevel * 110;
    const scale = Math.max(0.65, 1 - offset * 0.1);
    const ry = sideMultiplier * (2.5 + depthLevel * 0.6);
    const opacity =
      offset === 1 ? 0.65 : offset === 2 ? 0.36 : offset === 3 ? 0.16 : 0;
    const zIndex = 100 - offset * 10;
    const blur = offset * 1;

    return {
      transform: `translate3d(${tx}, ${ty}, ${tz}px) scale(${scale}) rotateY(${ry}deg)`,
      opacity,
      zIndex,
      filter: blur > 0 ? `blur(${blur}px)` : "none",
      pointerEvents: offset <= 2 ? "auto" : "none",
      visibility: offset > 3 ? "hidden" : "visible",
      cursor: offset <= 2 ? "pointer" : "default",
    };
  }

  // Desktop: Full 3D Cascade with alternating left/right positions
  const desktopShift = viewportWidth < 1280 ? 9 : 14;
  const ryBase = viewportWidth < 1280 ? 4 : 5;
  const sideMultiplier = isLeft ? -1 : 1;
  const tx = `calc(-50% + ${sideMultiplier * (desktopShift + depthLevel * 2)}vw)`;
  const ty = `calc(-50% - ${depthLevel * 12}px)`;
  const tz = -depthLevel * 185;
  const scale = Math.max(0.55, 1 - offset * 0.13);
  const ry = sideMultiplier * (ryBase + depthLevel * 0.9);
  const opacity =
    offset === 1 ? 0.65 : offset === 2 ? 0.38 : offset === 3 ? 0.18 : 0;
  const zIndex = 100 - offset * 10;
  const blur = offset * 1.2;

  return {
    transform: `translate3d(${tx}, ${ty}, ${tz}px) scale(${scale}) rotateY(${ry}deg)`,
    opacity,
    zIndex,
    filter: blur > 0 ? `blur(${blur}px)` : "none",
    pointerEvents: offset <= 2 ? "auto" : "none",
    visibility: offset > 3 ? "hidden" : "visible",
    cursor: offset <= 2 ? "pointer" : "default",
  };
};
