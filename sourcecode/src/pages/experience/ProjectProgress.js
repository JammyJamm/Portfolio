import React from "react";

const ProjectProgress = ({
  activeIndex = 0,
  totalProjects = 0,
  projects = [],
  onSelectProject,
}) => {
  const currentFormatted = String(activeIndex + 1).padStart(2, "0");
  const totalFormatted = String(totalProjects).padStart(2, "0");

  return (
    <div className="project-progress" aria-label="Project progression">
      <div className="progress-counter">
        <span className="current-step">{currentFormatted}</span>
        <span className="step-separator">/</span>
        <span className="total-steps">{totalFormatted}</span>
      </div>

      <div className="progress-track" role="tablist">
        {projects.map((proj, idx) => {
          const isActive = idx === activeIndex;
          const isPassed = idx < activeIndex;

          return (
            <button
              key={proj.id || idx}
              type="button"
              className={`progress-pip ${isActive ? "active" : ""} ${
                isPassed ? "passed" : ""
              }`}
              onClick={() => onSelectProject && onSelectProject(idx)}
              title={`Jump to ${proj.projectName}`}
              aria-label={`Jump to project ${idx + 1}: ${proj.projectName}`}
              aria-selected={isActive}
              role="tab"
            >
              <span className="pip-label">{idx + 1}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default ProjectProgress;
