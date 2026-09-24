import React from "react";
import ProjectEpic from "./ProjectEpic";

const ProjectStack = ({
  epic,
  activeIndex,
  onSelectProject,
  onNext,
  onPrev,
}) => {
  return (
    <div className="project-stack" aria-live="polite">
      {/* 3D Stack of Projects */}
      <div className="project-stack-viewport">
        {epic.map((project, index) => (
          <ProjectEpic
            key={index}
            project={project}
            index={index}
            activeIndex={activeIndex}
            total={epic.length}
            onSelect={() => onSelectProject(index)}
          />
        ))}
      </div>

      {/* Floating Carousel Navigation Controls */}
      <div className="stack-controls">
        <button
          type="button"
          className={`control-btn prev-btn ${activeIndex === 0 ? "disabled" : ""}`}
          onClick={onPrev}
          disabled={activeIndex === 0}
          aria-label="Previous project"
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
          >
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </button>

        <div className="stack-pagination">
          <span className="current-num">
            {String(activeIndex + 1).padStart(2, "0")}
          </span>
          <span className="divider">/</span>
          <span className="total-num">
            {String(epic.length).padStart(2, "0")}
          </span>
        </div>

        <button
          type="button"
          className={`control-btn next-btn ${
            activeIndex === epic.length - 1 ? "disabled" : ""
          }`}
          onClick={onNext}
          disabled={activeIndex === epic.length - 1}
          aria-label="Next project"
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
          >
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ProjectStack;
