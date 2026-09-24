import React, { useState, useRef, useEffect, useCallback } from "react";
import ProjectStack from "./ProjectStack";
import Mouse from "./Mouse";

const ExperienceContainer = ({ epic = [] }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const containerRef = useRef(null);
  const isLockedRef = useRef(false);
  const lockTimerRef = useRef(null);
  const lastTriggerTimeRef = useRef(0);
  const activeIndexRef = useRef(0);
  const touchStartYRef = useRef(null);
  const touchStartXRef = useRef(null);

  // Synchronize ref with current state for event listener callbacks
  activeIndexRef.current = activeIndex;

  const goToProject = useCallback(
    (targetIndex) => {
      if (!epic || epic.length === 0) return;
      if (targetIndex < 0 || targetIndex >= epic.length) return;
      if (targetIndex === activeIndexRef.current) return;

      isLockedRef.current = true;
      lastTriggerTimeRef.current = Date.now();
      setActiveIndex(targetIndex);

      if (lockTimerRef.current) {
        clearTimeout(lockTimerRef.current);
      }

      lockTimerRef.current = setTimeout(() => {
        isLockedRef.current = false;
      }, 850);
    },
    [epic]
  );

  const nextProject = useCallback(() => {
    const cur = activeIndexRef.current;
    if (cur < epic.length - 1) {
      goToProject(cur + 1);
    }
  }, [epic.length, goToProject]);

  const prevProject = useCallback(() => {
    const cur = activeIndexRef.current;
    if (cur > 0) {
      goToProject(cur - 1);
    }
  }, [goToProject]);

  // Non-passive wheel event listener to strictly lock transitions and prevent page scrolling
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleWheel = (e) => {
      // Prevent browser default scroll/zoom behavior
      e.preventDefault();

      // Filter out small jitter or inertia noise
      if (Math.abs(e.deltaY) < 20) {
        return;
      }

      const now = Date.now();

      // If animation is in progress or within debounce lock duration, ignore event
      if (isLockedRef.current || now - lastTriggerTimeRef.current < 850) {
        return;
      }

      if (e.deltaY > 0) {
        // Wheel Down -> Next project
        nextProject();
      } else if (e.deltaY < 0) {
        // Wheel Up -> Previous project
        prevProject();
      }
    };

    container.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      container.removeEventListener("wheel", handleWheel);
    };
  }, [nextProject, prevProject]);

  // Touch gesture support for mobile / tablet devices
  const handleTouchStart = (e) => {
    if (!e.touches || e.touches.length === 0) return;
    touchStartYRef.current = e.touches[0].clientY;
    touchStartXRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (touchStartYRef.current === null) return;
    const touchEndY = e.changedTouches[0].clientY;
    const touchEndX = e.changedTouches[0].clientX;

    const diffY = touchStartYRef.current - touchEndY;
    const diffX = touchStartXRef.current - touchEndX;

    touchStartYRef.current = null;
    touchStartXRef.current = null;

    // Detect predominantly vertical swipe with minimum 35px travel
    if (Math.abs(diffY) > Math.abs(diffX) && Math.abs(diffY) > 35) {
      if (diffY > 0) {
        // Swipe Up -> Next
        nextProject();
      } else {
        // Swipe Down -> Prev
        prevProject();
      }
    }
  };

  // Keyboard navigation for accessibility (Arrow keys / Page keys)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowDown" || e.key === "PageDown") {
        e.preventDefault();
        nextProject();
      } else if (e.key === "ArrowUp" || e.key === "PageUp") {
        e.preventDefault();
        prevProject();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [nextProject, prevProject]);

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (lockTimerRef.current) {
        clearTimeout(lockTimerRef.current);
      }
    };
  }, []);

  return (
    <div
      className="experience-container"
      ref={containerRef}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <ProjectStack
        epic={epic}
        activeIndex={activeIndex}
        onSelectProject={goToProject}
        onNext={nextProject}
        onPrev={prevProject}
      />

      <Mouse
        epic={epic}
        activeIndex={activeIndex}
        onSelect={goToProject}
      />
    </div>
  );
};

export default ExperienceContainer;
