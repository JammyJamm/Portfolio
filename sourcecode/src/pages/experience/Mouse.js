import React from "react";
import ExperienceTimeline from "./ExperienceTimeline";

/**
 * Backwards compatibility wrapper for Mouse component
 */
const Mouse = ({ epic = [], activeIndex = 0, onSelect }) => {
  return (
    <ExperienceTimeline
      epic={epic}
      currentCompanyIndex={activeIndex}
      activeIndex={activeIndex}
      totalProjects={epic.length}
      onSelectCompany={onSelect}
    />
  );
};

export default Mouse;
