import React from "react";

const ProjectNavigation = ({
  activeIndex = 0,
  totalProjects = 0,
  onNext,
  onPrev,
}) => {
  const isFirst = activeIndex === 0;
  const isLast = activeIndex === totalProjects - 1;

  return (
    <aside className="project-navigation" aria-label="Project navigation controls">
      <button
        type="button"
        className={`nav-arrow-btn prev-btn ${isFirst ? "disabled" : ""}`}
        onClick={onPrev}
        disabled={isFirst}
        aria-label="Previous project (ArrowUp or ArrowLeft)"
        title="Previous project (ArrowUp or ArrowLeft)"
      >
        <svg
          viewBox="0 0 24 24"
          width="20"
          height="20"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>

      <button
        type="button"
        className={`nav-arrow-btn next-btn ${isLast ? "disabled" : ""}`}
        onClick={onNext}
        disabled={isLast}
        aria-label="Next project (ArrowDown or ArrowRight)"
        title="Next project (ArrowDown or ArrowRight)"
      >
        <svg
          viewBox="0 0 24 24"
          width="20"
          height="20"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </button>
    </aside>
  );
};

export default ProjectNavigation;
