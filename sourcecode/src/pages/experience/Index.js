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
      organization: "Creative Synergies Group",
      endYear: "21/Dec/2023 - Present",
      role: "Senior Software Engineer",
      location: "Brigade Tech Park, Bangalore, India",

      AI: "Prompt Engineering | LLM Application Development | Function Calling / Tool Use | Structured Outputs | AI Agents & Agentic Workflows",

      Development:
        "VS Code | ReactJS | Material UI | Tailwind CSS | GitHub | Git Bash | SourceTree | TypeScript | React Native | NodeJS | Jira | Azure",

      projects: [
        {
          Project: "Waymo",
          link: "Waymo - Self-Driving Cars - Autonomous Vehicles - Ride-Hail",
          href: "https://www.waymo.com/",
          year: "2024",

          what_we_do:
            "Waymo develops autonomous driving technology and ride-hailing services designed to provide fully autonomous transportation. Its technology combines custom sensors, onboard computing, perception, mapping, planning, steering, and braking systems to enable self-driving vehicles without traditional driver controls.",

          contribution:
            "Contributed to the Waymo autonomous-driving and ride-hailing project, focusing on UX/UI design and frontend development for responsive, data-driven dashboards and applications. Designed wireframes, layouts, prototypes, and reusable ReactJS and Material UI components, ensuring usability, accessibility, responsiveness, and visual consistency. Developed workflows using Node-RED, REST APIs, and SQL for data processing and dynamic data presentation. Leveraged AI-assisted development and documentation to improve technical documentation of UI components, workflows, APIs, and requirements. Collaborated with developers, QA engineers, designers, and stakeholders throughout requirements analysis, development, testing, debugging, and production support. Technology Stack: ReactJS | JavaScript / TypeScript | Material UI | Node-RED | SQL | REST APIs | HTML5 | CSS3 | UX/UI Design | Responsive Design | AI-Assisted Development | Prompt Engineering | LLM Applications | AI-Assisted Documentation | Generative AI | Git/GitHub",
        },

        {
          Project: "Wigginslift",
          link: "Wiggins Lift Co., Inc. | Manufacturer of custom, high-capacity forklifts",
          href: "https://wigginslift.com/",
          year: "2024",

          what_we_do:
            "Wiggins Lift Co. develops and manufactures high-capacity, specialized material-handling equipment and forklifts for demanding applications. Its products support marine and marina operations, agriculture, mining, construction, and military applications, including Marina Bull, Yard Bull, electric forklifts, tire manipulators, telehandlers, and multi-purpose trucks. The company focuses on customized equipment designed around lifting capacity, stability, safety, durability, maneuverability, and customer-specific requirements.",

          contribution:
            "Contributed to the UX design and UI development of a web-based fleet and asset management platform for Wiggins Lift. Designed intuitive, data-driven interfaces for monitoring and managing connected vehicles and operational information. Designed dashboard experiences, organization lists, organization details, asset lists, asset details, fault history, trip history, and trip-view screens, with emphasis on information hierarchy, navigation, data visibility, usability, and efficient user workflows.",
        },

        {
          Project: "Wenzel",
          link: "WENZEL Group - Industrial Measurement Technology",
          href: "https://www.wenzel-group.com/",
          year: "2025 - 2026",

          what_we_do:
            "WENZEL Group is a global provider of industrial measurement and quality-assurance solutions serving industries including automotive, aerospace, mechanical engineering, medical technology, and defense. Its portfolio includes 3D coordinate measuring machines, gear and shaft measuring systems, industrial CT systems, optical and tactile sensors, mobile measurement solutions, and measurement software used for dimensional inspection, quality assurance, and manufacturing optimization.",

          contribution:
            "Contributed to the UX design and UI development of the WENZEL Group web application, focusing on creating a consistent, intuitive, and responsive experience across key application modules. Designed and developed landing pages, login pages, user management, change-password workflows, interface layouts, and build-up pages, translating business requirements and UX concepts into clean and user-friendly interfaces. Established and maintained a structured UI style guide and design system covering typography, spacing, components, buttons, forms, colors, layouts, interaction patterns, and responsive behavior. Developed reusable UI components and consistent themes to improve visual consistency, scalability, accessibility, and maintainability across the application.",
        },
      ],
    },

    {
      organization: "Infoville Solutions India Private Limited",
      endYear: "27/Sep/2021 - 31/Oct/2023",
      role: "Software Engineer",
      location: "HRBR Layout, Bangalore, India",

      AI: "Prompt Engineering | LLM Application Development | Function Calling / Tool Use | Structured Outputs | AI Agents & Agentic Workflows",

      Development:
        "VS Code | ReactJS | Material UI | Tailwind CSS | GitHub | Git Bash | SourceTree | TypeScript | React Native | NodeJS | Jira | Azure",

      projects: [
        {
          Project: "Hyfra",
          link: "Hyfra",
          href: "https://www.hyfra.com/de/",
          year: "2022",

          what_we_do:
            "HYFRA is a specialist in customized industrial process-cooling solutions, developing and manufacturing cooling systems for demanding industrial applications. Its solutions support industries including laser technology, machine tools, filtration, automotive, aerospace, metal processing, additive manufacturing, hydrogen applications, and battery energy storage. HYFRA provides compact chillers and customized cooling systems designed to maintain precise temperatures, improve process stability, reduce energy consumption, and increase production efficiency.",

          contribution:
            "Contributed to UX design and UI development for SAP Hybris 6.4 B2B/B2C e-commerce applications, delivering responsive, intuitive, and reusable storefront experiences. Designed wireframes, page layouts, navigation flows, mockups, prototypes, and UI components. Developed and customized CMS components, content slots, product listing/detail pages, search and navigation, checkout flows, forms, account pages, email templates, responsive grid systems, and reusable frontend modules using Bootstrap 3.6+. Customized OOTB Hybris functionality, JSP/WCMS templates, automatic template merging, and reusable UI patterns. Configured and customized Product Cockpit, CMS Cockpit, SmartEdit, and Backoffice. Implemented Hybris AddOns and extensions including SmartEdit, Captcha, Customer Interests, and Wishlist functionality. Integrated SAP Hybris with SAP ERP and third-party systems using REST APIs and OCC. Collaborated with UX designers, backend developers, QA engineers, architects, and business stakeholders throughout requirements analysis, implementation, testing, debugging, code reviews, performance optimization, deployment, documentation, and production support. Technical Skill Set: SAP Hybris 6.4 | B2B/B2C E-commerce | CMS | WCMS | Product Cockpit | CMS Cockpit | SmartEdit | Backoffice | OOTB Customization | AddOns & Extensions | JSP | OCC | REST APIs",
        },

        {
          Project: "KYSOR Warren",
          link: "Kysor Warren",
          href: "https://www.kysorwarren.com/en",
          year: "2023",

          what_we_do:
            "Kysor Warren is a commercial refrigeration company that designs and manufactures refrigerated display cases, refrigeration systems, and related equipment for supermarkets, grocery stores, convenience stores, foodservice businesses, and other retailers across North America. Its solutions support the storage and merchandising of dairy, meat, frozen foods, produce, beverages, and prepared foods, with emphasis on reliability, energy efficiency, sustainability, and flexible store layouts.",

          contribution:
            "Contributed to the Kysor Warren digital application and e-commerce platform, focusing on UX design and ReactJS-based UI development. Designed intuitive, responsive, and user-friendly interfaces for refrigeration and retail-focused business workflows. Created wireframes, page layouts, navigation flows, reusable components, forms, dashboards, data-driven screens, and responsive designs with emphasis on usability, accessibility, consistency, and performance. Developed scalable UI components using ReactJS, JavaScript/TypeScript, Material UI, Bootstrap 3.6+, HTML5, and CSS3 using component-based architecture and reusable design patterns. Integrated frontend interfaces with REST APIs and backend services for dynamic product, customer, and operational data. Collaborated with UX designers, backend developers, QA engineers, product owners, and business stakeholders throughout requirements analysis, UX/UI design, development, testing, debugging, code reviews, and production support. Technical Skill Set: ReactJS | JavaScript | TypeScript | Material UI | Bootstrap 3.6+ | HTML5 | CSS3 | REST APIs | Responsive Web Design | UX/UI Design | Wireframing | Prototyping | Design Systems | Component-Based Architecture | API Integration | Cross-Browser Compatibility | Git | Jira | VS Code",
        },
      ],
    },

    {
      organization: "Lennox India Technology Centre Private Limited",
      endYear: "03/Sep/2018 - 31/Aug/2021",
      role: "Associate Web Developer",
      location: "Ascendas Tech Park, Chennai, India",

      Development:
        "ReactJS | JavaScript | TypeScript | Material UI | Bootstrap 3.6+ | HTML5 | CSS3 | SAP Hybris 6.4 | SmartEdit | WCMS | JSP | REST APIs | Git | Azure DevOps | VS Code | Grunt | SourceTree | Git Bash",

      UX: "UX/UI Design | User-Centered Design | UX Research | User Flows | Information Architecture | Wireframing | Mockups | Prototyping | Responsive Design | Design Systems | Style Guides | Usability | Accessibility | Visual & Interaction Design | Design Handoff | Stakeholder Collaboration",

      projects: [
        {
          Project: "Heatcraft Refrigeration - Middle East",
          link: "Heatcraft Refrigeration",
          href: "https://www.heatcraftrpd.com/",
          year: "2019",

          what_we_do:
            "Heatcraft Refrigeration Products develops and manufactures commercial and industrial refrigeration systems used across foodservice, supermarkets, cold storage, and industrial environments. Its portfolio includes unit coolers, condensing units, condensers, refrigeration racks, packaged systems, refrigeration controls, and related components.",

          contribution:
            "Contributed to UX design and UI development for B2B/B2C e-commerce solutions using SAP Hybris. Developed responsive storefront pages, CMS components, content slots, forms, navigation, email templates, and reusable UI components. Customized Product Cockpit, CMS Cockpit, SmartEdit, Backoffice, WCMS, JSP templates, and OOTB functionality. Integrated SAP ERP and third-party systems using REST APIs and OCC. Collaborated with UX designers, backend developers, QA engineers, and business stakeholders across requirements analysis, UX/UI implementation, API integration, testing, debugging, code reviews, deployment, and production support. Technical Skill Set: SAP Hybris 6.4 | B2B/B2C E-commerce | CMS | WCMS | SmartEdit | Backoffice | Product Cockpit | CMS Cockpit | JSP | OCC | ReactJS | JavaScript | TypeScript | HTML5 | CSS3 | Bootstrap 3.6+ | Material UI | REST APIs | Responsive Web Design | UX/UI Design | Git | Azure DevOps | VS Code",
        },

        {
          Project: "Heatcraft - intelliGen",
          link: "Heatcraft intelliGen",
          href: "https://intelligen.heatcraftrpd.com/",
          year: "2020",

          what_we_do:
            "intelliGen is Heatcraft's electronic refrigeration control platform designed for temperature management, automated defrost, evaporator fan and superheat control, system monitoring, data logging, alerts, and equipment servicing. The platform supports remote monitoring and integration capabilities for refrigeration systems and Building Management Systems.",

          contribution:
            "Contributed to UX design and UI development of the intelliGen refrigeration control platform. Designed responsive dashboards, monitoring screens, equipment and status views, alerts, configuration pages, forms, and reusable UI components. Developed CMS components, content slots, JSP/WCMS templates, and OOTB customizations with focus on usability, accessibility, responsive design, visual consistency, and component reusability. Collaborated with UX designers, developers, QA engineers, and stakeholders throughout the development lifecycle. Technical Skill Set: ReactJS | JavaScript | TypeScript | Material UI | Bootstrap 3.6+ | HTML5 | CSS3 | SAP Hybris 6.4 | CMS | WCMS | SmartEdit | JSP | REST APIs | Responsive Web Design | UX/UI Design | Wireframing | Prototyping | Design Systems | Git | Azure DevOps | VS Code",
        },

        {
          Project: "Heatcraft - Brazil",
          link: "Heatcraft Refrigeration",
          href: "https://www.heatcraftrpd.com/",
          year: "2021",

          what_we_do:
            "Heatcraft provides refrigeration and climate-control equipment for foodservice, supermarket, cold-storage, and industrial markets, including remote condensers, evaporators, condensing units, integrated systems, and other refrigeration solutions.",

          contribution:
            "Contributed to UX design and UI development for Heatcraft's commercial refrigeration platforms. Designed responsive product catalogs, product detail pages, dashboards, configuration tools, search and filter experiences, forms, and support workflows. Developed reusable UI components using ReactJS, JavaScript/TypeScript, Material UI, Bootstrap, HTML5, and CSS3, focusing on usability, accessibility, consistency, responsiveness, and performance. Collaborated with UX, development, QA, and business teams across wireframing, prototyping, UI development, API integration, testing, debugging, and production support.",
        },
      ],
    },

    {
      organization: "Randstad India Private Limited",
      endYear: "16/Aug/2017 - 31/Aug/2018",
      role: "Web Developer",
      location: "Inner Ring Road, Chennai, India",

      UX: "UX/UI Design | User-Centered Design | Wireframing | User Flows | Information Architecture | Mockups | Prototyping | Responsive Design | Design Systems | Style Guides | Usability | Accessibility | Visual & Interaction Design | UI Development | Reusable Components | Frontend Development | Cross-Browser Compatibility | Frontend Performance | Stakeholder Collaboration | Designer & Developer Collaboration | Requirements Analysis | Design Reviews | Code Reviews | Testing | Debugging | Documentation",

      Development:
        "JavaScript | TypeScript | HTML5 | CSS3 | Bootstrap | ReactJS | jQuery | Sass | GraphQL | Firebase | Grunt | Responsive Web Design | Reusable UI Components | Component-Based Architecture | REST API Integration | Cross-Browser Compatibility | Frontend Performance Optimization | Git | SourceTree | VS Code | Azure DevOps",

      projects: [
        {
          Project: "Lennox India - Website",
          link: "Lennox India",
          href: "https://www.lennoxindia.com/",
          year: "2017 - 2018",

          what_we_do:
            "Lennox India is a technology and engineering organization supporting Lennox's global HVAC business through product engineering, software development, digital solutions, R&D, and technology services related to heating, ventilation, air conditioning, climate control, connected HVAC systems, monitoring, automation, and data-driven technologies.",

          contribution:
            "Contributed to the end-to-end UX design and UI development of the Lennox India company website, delivering a modern, responsive, intuitive, and visually consistent experience across desktop, tablet, and mobile devices. Defined user flows, information architecture, navigation patterns, page layouts, wireframes, mockups, interactive prototypes, and reusable UI components. Established design patterns for typography, spacing, grids, forms, buttons, navigation, content sections, and responsive layouts. Collaborated with UX designers, product owners, business stakeholders, and backend developers throughout the design and development lifecycle. Conducted design reviews and usability validation and iterated designs based on stakeholder and user feedback. As a Trainee, also supported hand-drawn sketches, wireframes, layouts, mockups, templates, final UI designs, storytelling, user flows, usability testing, information architecture, content strategy, responsive designs, animations/transitions, and frontend implementation.",
        },

        {
          Project: "Lennox India - S40 | E30 Smart Thermostat",
          link: "Lennox India",
          href: "https://www.lennoxindia.com/",
          year: "2018",

          what_we_do:
            "Lennox develops advanced HVAC and climate-control solutions, including smart thermostats and connected home-comfort systems. These products provide touchscreen controls, Wi-Fi connectivity, programmable temperature management, geofencing, system communication, and intelligent comfort control.",

          contribution:
            "Contributed primarily to UX design for Lennox smart HVAC and thermostat solutions, focusing on intuitive experiences for temperature control, system monitoring, scheduling, and connected-device management. Conducted UX activities including user flows, information architecture, hand-drawn sketches, wireframes, page layouts, mockups, and interactive prototypes. Focused on navigation, content hierarchy, spacing, usability, accessibility, responsive design, and simplifying complex HVAC controls. Collaborated with product stakeholders, UX/UI designers, business teams, and developers to understand requirements, translate user needs into design solutions, conduct design reviews and usability testing, and refine experiences based on feedback. Supported design handoff with layouts, interaction details, and implementation specifications.",
        },
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
