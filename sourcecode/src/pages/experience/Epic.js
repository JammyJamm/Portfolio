import React from "react";
import ExperienceContainer from "./ExperienceContainer";
import ProjectCascade from "./ProjectCascade";
import ProjectEpic from "./ProjectEpic";
import ExperienceTimeline from "./ExperienceTimeline";
import ProjectDetails from "./ProjectDetails";
import ProjectProgress from "./ProjectProgress";
import ProjectNavigation from "./ProjectNavigation";
import ProjectStack from "./ProjectStack";

const Epic = ({ epic }) => {
  return <ExperienceContainer epic={epic} />;
};

export {
  ProjectCascade,
  ProjectEpic,
  ExperienceContainer,
  ExperienceTimeline,
  ProjectDetails,
  ProjectProgress,
  ProjectNavigation,
  ProjectStack,
};
export default Epic;
