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
      const tx = isLeft ? "calc(-50% - 7vw)" : "calc(-50% + 7vw)";
      const ry = isLeft ? 3.5 : -3.5;
      return {
        transform: `translate3d(${tx}, -50%, 0px) scale(1) rotateY(${ry}deg)`,
        opacity: 1,
        zIndex: 100,
        filter: "none",
        pointerEvents: "auto",
        visibility: "visible",
      };
    }

    // Desktop
    const tx = isLeft ? "calc(-50% - 15vw)" : "calc(-50% + 15vw)";
    const ry = isLeft ? 5 : -5;
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
      // Just exited project
      const tz = isMobile ? 180 : isTablet ? 260 : 340;
      const scale = isMobile ? 1.15 : isTablet ? 1.22 : 1.3;
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
    const tz = isMobile ? 320 : isTablet ? 450 : 580;
    const scale = isMobile ? 1.25 : 1.45;
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
    // Simplified 3D vertical cascade on mobile to prevent going off-screen
    const ty = `calc(-50% - ${depthLevel * 14}px)`;
    const tz = -depthLevel * 85;
    const scale = Math.max(0.68, 1 - offset * 0.09);
    const opacity =
      offset === 1 ? 0.65 : offset === 2 ? 0.35 : offset === 3 ? 0.15 : 0;
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
    const sideMultiplier = isLeft ? -1 : 1;
    const tx = `calc(-50% + ${sideMultiplier * (7 + depthLevel * 2)}vw)`;
    const ty = `calc(-50% - ${depthLevel * 10}px)`;
    const tz = -depthLevel * 150;
    const scale = Math.max(0.6, 1 - offset * 0.12);
    const ry = sideMultiplier * (3.5 + depthLevel * 0.8);
    const opacity =
      offset === 1 ? 0.65 : offset === 2 ? 0.38 : offset === 3 ? 0.18 : 0;
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
  const sideMultiplier = isLeft ? -1 : 1;
  const tx = `calc(-50% + ${sideMultiplier * (15 + depthLevel * 2.2)}vw)`;
  const ty = `calc(-50% - ${depthLevel * 12}px)`;
  const tz = -depthLevel * 185;
  const scale = Math.max(0.55, 1 - offset * 0.13);
  const ry = sideMultiplier * (5 + depthLevel * 1);
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
