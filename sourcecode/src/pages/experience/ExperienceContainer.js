import React, { useState, useRef, useEffect, useCallback, useMemo } from "react";
import ExperienceHeader from "./ExperienceHeader";
import ExperienceTimeline from "./ExperienceTimeline";
import ProjectCascade from "./ProjectCascade";
import ProjectDetails from "./ProjectDetails";
import ProjectProgress from "./ProjectProgress";
import ProjectNavigation from "./ProjectNavigation";
import { normalizeEpicData } from "./experienceUtils";

const ANIMATION_DURATION_MS = 800;
const WHEEL_DELTA_THRESHOLD = 25;

const ExperienceContainer = ({ epic = [] }) => {
  // Normalize epic data structure into flat projects list with company metadata
  const projects = useMemo(() => normalizeEpicData(epic), [epic]);

  // React state as requested in Requirement 6
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState(null); // 'next' | 'prev' | null

  // Details modal state
  const [activeModalProject, setActiveModalProject] = useState(null);
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);

  // Responsive and accessibility state
  const [viewportWidth, setViewportWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1200
  );
  const [isReducedMotion, setIsReducedMotion] = useState(false);

  // Refs for animation lock and event listener synchronizations
  const containerRef = useRef(null);
  const isLockedRef = useRef(false);
  const lockTimerRef = useRef(null);
  const lastTriggerTimeRef = useRef(0);
  const activeIndexRef = useRef(0);
  const isDetailsOpenRef = useRef(false);
  const touchStartYRef = useRef(null);
  const touchStartXRef = useRef(null);
  const touchStartTimeRef = useRef(0);

  // Keep refs in sync with current state
  activeIndexRef.current = activeIndex;
  isDetailsOpenRef.current = isDetailsOpen;

  // Listen for prefers-reduced-motion changes
  useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) return;
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setIsReducedMotion(mediaQuery.matches);

    const handleMotionChange = (e) => {
      setIsReducedMotion(e.matches);
    };

    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener("change", handleMotionChange);
      return () => mediaQuery.removeEventListener("change", handleMotionChange);
    } else {
      mediaQuery.addListener(handleMotionChange);
      return () => mediaQuery.removeListener(handleMotionChange);
    }
  }, []);

  // Listen for window resize to compute dynamic transforms accurately
  useEffect(() => {
    let resizeTimer = null;
    const handleResize = () => {
      if (resizeTimer) clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        setViewportWidth(window.innerWidth);
      }, 100);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      if (resizeTimer) clearTimeout(resizeTimer);
    };
  }, []);

  /**
   * Primary transition function with strict animation lock to ensure
   * one gesture = exactly one project transition without skipping.
   */
  const goToProject = useCallback(
    (targetIndex, navDirection = null) => {
      if (!projects || projects.length === 0) return;
      if (targetIndex < 0 || targetIndex >= projects.length) return;
      if (targetIndex === activeIndexRef.current) return;

      const inferredDirection =
        navDirection ||
        (targetIndex > activeIndexRef.current ? "next" : "prev");

      isLockedRef.current = true;
      lastTriggerTimeRef.current = Date.now();
      setIsAnimating(true);
      setDirection(inferredDirection);
      setActiveIndex(targetIndex);

      if (lockTimerRef.current) {
        clearTimeout(lockTimerRef.current);
      }

      lockTimerRef.current = setTimeout(() => {
        isLockedRef.current = false;
        setIsAnimating(false);
      }, ANIMATION_DURATION_MS);
    },
    [projects]
  );

  const nextProject = useCallback(() => {
    const cur = activeIndexRef.current;
    if (cur < projects.length - 1) {
      goToProject(cur + 1, "next");
    }
  }, [projects.length, goToProject]);

  const prevProject = useCallback(() => {
    const cur = activeIndexRef.current;
    if (cur > 0) {
      goToProject(cur - 1, "prev");
    }
  }, [goToProject]);

  // Jump to first project of a selected company in ExperienceTimeline
  const handleSelectCompany = useCallback(
    (companyIndex) => {
      const targetIdx = projects.findIndex(
        (p) => p.companyIndex === companyIndex
      );
      if (targetIdx !== -1) {
        goToProject(targetIdx);
      }
    },
    [projects, goToProject]
  );

  // Open/Close project details case study modal
  const handleOpenDetails = useCallback((project) => {
    setActiveModalProject(project);
    setIsDetailsOpen(true);
  }, []);

  const handleCloseDetails = useCallback(() => {
    setIsDetailsOpen(false);
  }, []);

  /**
   * Wheel interaction handler:
   * - One gesture = one project transition.
   * - Locks transitions while animation is running.
   * - Does NOT trap user when boundaries are reached (allows natural scrolling).
   * - Ignored when details modal is open.
   */
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleWheel = (e) => {
      // If project details modal is active, allow normal modal reading
      if (isDetailsOpenRef.current) {
        return;
      }

      // Ignore micro-jitters
      if (Math.abs(e.deltaY) < WHEEL_DELTA_THRESHOLD) {
        return;
      }

      const curIndex = activeIndexRef.current;
      const isAtStart = curIndex === 0;
      const isAtEnd = curIndex === projects.length - 1;

      // Check boundary conditions to avoid trapping the user in the Experience section
      if (isAtStart && e.deltaY < 0) {
        // Scrolling up at the very top: don't lock, let page handle
        return;
      }
      if (isAtEnd && e.deltaY > 0) {
        // Scrolling down at the very bottom: don't lock, let page handle
        return;
      }

      // Within valid project range, consume wheel event
      e.preventDefault();

      const now = Date.now();
      // If currently animating or within cooldown, swallow wheel event
      if (
        isLockedRef.current ||
        now - lastTriggerTimeRef.current < ANIMATION_DURATION_MS
      ) {
        return;
      }

      if (e.deltaY > 0) {
        nextProject();
      } else if (e.deltaY < 0) {
        prevProject();
      }
    };

    container.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      container.removeEventListener("wheel", handleWheel);
    };
  }, [nextProject, prevProject, projects.length]);

  /**
   * Keyboard navigation:
   * ArrowDown / ArrowRight -> next
   * ArrowUp / ArrowLeft -> previous
   */
  useEffect(() => {
    const handleKeyDown = (e) => {
      // Don't intercept when user is typing inside an input/textarea
      const tag = e.target?.tagName?.toLowerCase();
      if (tag === "input" || tag === "textarea") return;

      if (isDetailsOpenRef.current) return;

      if (e.key === "ArrowDown" || e.key === "ArrowRight" || e.key === "PageDown") {
        if (activeIndexRef.current < projects.length - 1) {
          e.preventDefault();
          nextProject();
        }
      } else if (
        e.key === "ArrowUp" ||
        e.key === "ArrowLeft" ||
        e.key === "PageUp"
      ) {
        if (activeIndexRef.current > 0) {
          e.preventDefault();
          prevProject();
        }
      } else if (e.key === "Home") {
        e.preventDefault();
        goToProject(0);
      } else if (e.key === "End") {
        e.preventDefault();
        goToProject(projects.length - 1);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [nextProject, prevProject, goToProject, projects.length]);

  /**
   * Mobile & Tablet Touch Navigation
   */
  const handleTouchStart = (e) => {
    if (isDetailsOpenRef.current) return;
    if (!e.touches || e.touches.length === 0) return;
    touchStartYRef.current = e.touches[0].clientY;
    touchStartXRef.current = e.touches[0].clientX;
    touchStartTimeRef.current = Date.now();
  };

  const handleTouchEnd = (e) => {
    if (isDetailsOpenRef.current) return;
    if (touchStartYRef.current === null || touchStartXRef.current === null) return;

    const touchEndY = e.changedTouches[0].clientY;
    const touchEndX = e.changedTouches[0].clientX;
    const diffY = touchStartYRef.current - touchEndY;
    const diffX = touchStartXRef.current - touchEndX;
    const elapsed = Date.now() - touchStartTimeRef.current;

    touchStartYRef.current = null;
    touchStartXRef.current = null;

    // Fast flick or clear swipe (> 35px in < 600ms)
    if (elapsed > 700) return;

    // Vertical swipe
    if (Math.abs(diffY) > Math.abs(diffX) && Math.abs(diffY) > 35) {
      if (diffY > 0) {
        nextProject();
      } else {
        prevProject();
      }
    }
    // Horizontal swipe
    else if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 40) {
      if (diffX > 0) {
        nextProject();
      } else {
        prevProject();
      }
    }
  };

  // Cleanup lock timer on unmount
  useEffect(() => {
    return () => {
      if (lockTimerRef.current) {
        clearTimeout(lockTimerRef.current);
      }
    };
  }, []);

  const activeProject = projects[activeIndex] || null;
  const currentCompanyIndex = activeProject ? activeProject.companyIndex : 0;

  return (
    <div
      className={`experience-container ${isAnimating ? "is-animating" : ""} ${
        direction ? `direction-${direction}` : ""
      }`}
      ref={containerRef}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Experience Header */}
      <ExperienceHeader
        activeProject={activeProject}
        totalProjects={projects.length}
        activeIndex={activeIndex}
      />

      {/* 3D Depth Project Cascade */}
      <ProjectCascade
        projects={projects}
        activeIndex={activeIndex}
        viewportWidth={viewportWidth}
        isReducedMotion={isReducedMotion}
        onSelectProject={goToProject}
        onOpenDetails={handleOpenDetails}
      />

      {/* Subtle Project Progress Indicator (01 / 04) */}
      <ProjectProgress
        activeIndex={activeIndex}
        totalProjects={projects.length}
        projects={projects}
        onSelectProject={goToProject}
      />

      {/* Project Navigation Controls (Prev / Next) */}
      <ProjectNavigation
        activeIndex={activeIndex}
        totalProjects={projects.length}
        onNext={nextProject}
        onPrev={prevProject}
      />

      {/* Experience Timeline & Scroll Hint */}
      <ExperienceTimeline
        epic={epic}
        currentCompanyIndex={currentCompanyIndex}
        activeIndex={activeIndex}
        totalProjects={projects.length}
        onSelectCompany={handleSelectCompany}
      />

      {/* Case Study Details Modal / Drawer */}
      <ProjectDetails
        project={activeModalProject}
        isOpen={isDetailsOpen}
        onClose={handleCloseDetails}
      />
    </div>
  );
};

export default ExperienceContainer;
