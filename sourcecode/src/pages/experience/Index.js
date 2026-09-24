import React from "react";
import ExperienceContainer from "./ExperienceContainer";
import "./style.scss";

function Experience() {
  // const epic = [
  //   {
  //     startYear: "2017",
  //     endYear: "2019",
  //     organization: "Randstad",
  //     role: "Frontend Developer",
  //   },
  //   {
  //     startYear: "2019",
  //     endYear: "2021",
  //     organization: "Lennox International",
  //     role: "UI Engineer",
  //   },
  //   {
  //     startYear: "2021",
  //     endYear: "2023",
  //     organization: "TCS",
  //     role: "Senior UI Developer",
  //   },
  //   {
  //     startYear: "2023",
  //     endYear: "2025",
  //     organization: "Creative",
  //     role: "Lead UI Architect",
  //   },
  // ];
  const epic = [
    {
      endYear: "21/Dec/2023 - Present",
      organization: "Creative Synergies Group",
      role: "Seniour Software Engineer",
      location: "Brigade Tech Park, Bangalore, India",
      AI: "Prompt Engineering | LLM Application Development              | Function Calling / Tool Use | Structured Outputs | AI Agents & Agentic Workflows"[
        {
          Project: "Waymo Automation",
          link: "https://www.waymo.com/",
          year: "2024",
          what_we_do:
            "First fully autonomous ride on public roads. We explored what self-driving cars could be with the Firefly. These cars had custom sensors, computers, steering, and braking, with no steering wheel or pedals. That year, our friend Steven Mahan took the world’s first fully self-driving ride on public roads in Austin, TX. Steve is legally blind.",
          contribution:
            "Contributed to the Waymo autonomous-driving and ride-hailing project, focusing on UI/UX design and frontend development for responsive, data-driven dashboards and applications. Designed wireframes, layouts, prototypes, and reusable ReactJS and Material UI components, ensuring usability, accessibility, responsiveness, and visual consistency.Developed workflows using Node-RED, REST APIs, and SQL for data processing and dynamic data presentation. Leveraged AI-assisted development and documentation to improve technical documentation of UI components, workflows, APIs, and requirements, while collaborating with developers, QA engineers, designers, and stakeholders across development, testing, debugging, and production support.Technology Stack: ReactJS | JavaScript / TypeScript | Material UI | Node-RED | SQL | REST APIs | HTML5 | CSS3 | UX/UI Design | Responsive Design | AI-Assisted Development | Prompt Engineering | LLM Applications | AI-Assisted Documentation | Generative AI | Git/GitHub",
        }
      ],
    },
  ];
  return (
    <div className="ui-experience">
      <ExperienceContainer epic={epic} />
    </div>
  );
}

export default Experience;
