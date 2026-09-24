import React from "react";
import ProjectEpic from "./ProjectEpic";

const ProjectCascade = ({
  projects = [],
  activeIndex = 0,
  viewportWidth = 1200,
  isReducedMotion = false,
  onSelectProject,
  onOpenDetails,
}) => {
  return (
    <div
      className="project-cascade"
      aria-label="3D Depth Project Cascade"
      aria-live="polite"
    >
      <div className="project-cascade-viewport">
        {projects.map((project, index) => (
          <ProjectEpic
            key={project.id || index}
            project={project}
            index={index}
            activeIndex={activeIndex}
            total={projects.length}
            viewportWidth={viewportWidth}
            isReducedMotion={isReducedMotion}
            onSelect={onSelectProject}
            onOpenDetails={onOpenDetails}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectCascade;
