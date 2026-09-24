import React from "react";
import ProjectCascade from "./ProjectCascade";

/**
 * Backwards compatibility wrapper for ProjectStack
 */
const ProjectStack = ({
  epic,
  activeIndex,
  onSelectProject,
  onOpenDetails,
  ...props
}) => {
  return (
    <ProjectCascade
      projects={epic}
      activeIndex={activeIndex}
      onSelectProject={onSelectProject}
      onOpenDetails={onOpenDetails}
      {...props}
    />
  );
};

export default ProjectStack;
