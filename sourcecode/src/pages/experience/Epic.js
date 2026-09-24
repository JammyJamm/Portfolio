import React from "react";
import ExperienceContainer from "./ExperienceContainer";
import ProjectStack from "./ProjectStack";
import ProjectEpic from "./ProjectEpic";

const Epic = ({ epic, activeIndex, onSelectProject }) => {
  // If activeIndex is provided externally, render ProjectStack directly;
  // otherwise manage complete experience via ExperienceContainer.
  if (typeof activeIndex === "number") {
    return (
      <ProjectStack
        epic={epic}
        activeIndex={activeIndex}
        onSelectProject={onSelectProject}
      />
    );
  }

  return <ExperienceContainer epic={epic} />;
};

export { ProjectStack, ProjectEpic, ExperienceContainer };
export default Epic;
