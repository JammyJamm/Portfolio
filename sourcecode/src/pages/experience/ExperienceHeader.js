import React from "react";

const ExperienceHeader = ({ activeProject, totalProjects, activeIndex }) => {
  return (
    <header className="experience-header" role="banner">
      <div className="header-meta">
        <span className="header-tag">Experience &amp; Work</span>
        <div className="header-active-context">
          {activeProject?.organization && (
            <span className="header-org">
              {activeProject.organization}
            </span>
          )}
          {activeProject?.role && (
            <span className="header-role">
              {" "}&bull; {activeProject.role}
            </span>
          )}
        </div>
      </div>

      <div className="header-instruction">
        <span className="instruction-badge">
          <svg
            className="instruction-icon"
            viewBox="0 0 24 24"
            width="14"
            height="14"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="5" y="2" width="14" height="20" rx="7" />
            <line x1="12" y1="6" x2="12" y2="10" />
          </svg>
          Scroll or swipe to explore
        </span>
      </div>
    </header>
  );
};

export default ExperienceHeader;
