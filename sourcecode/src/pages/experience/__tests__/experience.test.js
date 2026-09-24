import {
  normalizeEpicData,
  calculateCardTransform,
} from "../experienceUtils";

describe("Experience Schema & 3D Depth Utilities", () => {
  const sampleEpic = [
    {
      organization: "Acme Corp",
      role: "Lead Architect",
      endYear: "2024 - Present",
      location: "San Francisco, CA",
      AI: "Prompt Engineering | LLMs",
      Development: "React | TypeScript",
      projects: [
        {
          Project: "Project Alpha",
          link: "Alpha Link",
          href: "https://alpha.example.com",
          year: "2024",
          what_we_do: "Building autonomous systems",
          contribution: "Led architecture and development",
        },
        {
          Project: "Project Beta",
          link: "Beta Link",
          href: "https://beta.example.com",
          year: "2024",
          what_we_do: "Fleet telemetry",
          contribution: "Designed real-time telemetry dashboards",
        },
      ],
    },
    {
      organization: "Beta Systems",
      role: "Senior Engineer",
      endYear: "2022 - 2024",
      location: "Austin, TX",
      AI: "Tool Use | Agentic Workflows",
      Development: "NodeJS | GraphQL",
      projects: [
        {
          Project: "Project Gamma",
          link: "Gamma Link",
          href: "https://gamma.example.com",
          year: "2023",
          what_we_do: "Industrial cooling",
          contribution: "Refactored legacy pipelines",
        },
      ],
    },
  ];

  test("normalizeEpicData correctly flattens projects and preserves company metadata", () => {
    const projects = normalizeEpicData(sampleEpic);

    expect(projects.length).toBe(3);

    // First project check
    expect(projects[0].projectName).toBe("Project Alpha");
    expect(projects[0].organization).toBe("Acme Corp");
    expect(projects[0].role).toBe("Lead Architect");
    expect(projects[0].duration).toBe("2024 - Present");
    expect(projects[0].location).toBe("San Francisco, CA");
    expect(projects[0].aiSkills).toEqual(["Prompt Engineering", "LLMs"]);
    expect(projects[0].devSkills).toEqual(["React", "TypeScript"]);
    expect(projects[0].href).toBe("https://alpha.example.com");

    // Second project check (same company)
    expect(projects[1].projectName).toBe("Project Beta");
    expect(projects[1].organization).toBe("Acme Corp");

    // Third project check (second company)
    expect(projects[2].projectName).toBe("Project Gamma");
    expect(projects[2].organization).toBe("Beta Systems");
  });

  test("calculateCardTransform returns active front styles when offset === 0", () => {
    const activeStyle = calculateCardTransform(0, 0, 1200, false);
    expect(activeStyle.opacity).toBe(1);
    expect(activeStyle.zIndex).toBe(100);
    expect(activeStyle.transform).toContain("scale(1)");
    expect(activeStyle.transform).toContain("translate3d");
  });

  test("calculateCardTransform returns depth and smaller scale for upcoming projects (offset > 0)", () => {
    const depth1Style = calculateCardTransform(1, 1, 1200, false);
    expect(depth1Style.opacity).toBeLessThan(1);
    expect(depth1Style.zIndex).toBeLessThan(100);
    expect(depth1Style.transform).toContain("scale(");

    const depth2Style = calculateCardTransform(2, 2, 1200, false);
    expect(depth2Style.zIndex).toBeLessThan(depth1Style.zIndex);
  });

  test("calculateCardTransform handles past projects with fade and zoom out (offset < 0)", () => {
    const pastStyle = calculateCardTransform(-1, 0, 1200, false);
    expect(pastStyle.opacity).toBe(0);
    expect(pastStyle.pointerEvents).toBe("none");
  });

  test("calculateCardTransform respects prefers-reduced-motion", () => {
    const reducedActive = calculateCardTransform(0, 0, 1200, true);
    expect(reducedActive.transform).toBe("translate(-50%, -50%)");

    const reducedDepth = calculateCardTransform(1, 1, 1200, true);
    expect(reducedDepth.opacity).toBe(0);
    expect(reducedDepth.visibility).toBe("hidden");
  });
});
