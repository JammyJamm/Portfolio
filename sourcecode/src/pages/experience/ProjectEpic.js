import React from "react";

const ProjectEpic = ({ project, index, activeIndex, total, onSelect }) => {
  const delta = index - activeIndex;
  const isLeft = index % 2 === 0;
  const sideClass = isLeft ? "is-left" : "is-right";

  let statusClass = "is-active";
  let depthClass = "is-depth-0";

  if (delta < 0) {
    statusClass = "is-past";
    depthClass = Math.abs(delta) === 1 ? "is-past-1" : "is-past-far";
  } else if (delta > 0) {
    statusClass = "is-upcoming";
    if (delta === 1) depthClass = "is-depth-1";
    else if (delta === 2) depthClass = "is-depth-2";
    else if (delta === 3) depthClass = "is-depth-3";
    else depthClass = "is-depth-far";
  }

  const isInteractive = delta > 0 && delta <= 2;

  const handleClick = () => {
    if (isInteractive && onSelect) {
      onSelect();
    }
  };

  const formattedIndex = String(index + 1).padStart(2, "0");

  return (
    <div
      className={`project-epic ${sideClass} ${statusClass} ${depthClass}`}
      style={{
        "--delta": delta,
        "--index": index,
      }}
      onClick={handleClick}
      aria-hidden={delta !== 0}
      data-index={index}
      role={isInteractive ? "button" : undefined}
      tabIndex={delta === 0 ? 0 : -1}
      title={isInteractive ? `Click to view ${project.organization}` : undefined}
    >
      <div className="epic-content">
        <div className="epic-header">
          <span className="epic-number">{formattedIndex}</span>
          <span className="epic-badge">
            {isLeft ? "Project / Left" : "Project / Right"}
          </span>
        </div>

        <span className="epic-years">
          {project.startYear} — {project.endYear}
        </span>

        <h2 className="epic-organization">{project.organization}</h2>

        {project.role && <p className="epic-role">{project.role}</p>}
        {project.description && (
          <p className="epic-description">{project.description}</p>
        )}

        {delta === 0 && (
          <div className="epic-active-indicator">
            <span className="pulse-dot"></span> Active Project
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectEpic;
