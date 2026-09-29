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

  describe("Responsive Breakpoints & Layout Adaptations", () => {
    const mobileWidths = [320, 375, 390, 480];
    const tabletWidths = [768, 1023];
    const desktopWidths = [1024, 1280, 1440];

    mobileWidths.forEach((width) => {
      test(`Mobile at ${width}px keeps active card centered without horizontal offset or tilt`, () => {
        const style = calculateCardTransform(0, 0, width, false);
        expect(style.opacity).toBe(1);
        expect(style.zIndex).toBe(100);
        // Mobile must center horizontally: -50% and 0deg tilt
        expect(style.transform).toContain("-50%, -50%");
        expect(style.transform).toContain("rotateY(0deg)");
        expect(style.transform).toContain("scale(1)");
      });

      test(`Mobile at ${width}px stacks upcoming cards vertically in 3D depth without going off-screen`, () => {
        const depth1 = calculateCardTransform(1, 1, width, false);
        expect(depth1.opacity).toBeGreaterThan(0);
        expect(depth1.transform).toContain("rotateY(0deg)");
        expect(depth1.transform).toContain("-50%");
        expect(depth1.zIndex).toBeLessThan(100);
      });
    });

    tabletWidths.forEach((width) => {
      test(`Tablet at ${width}px uses reduced horizontal movement and reduced depth tilt`, () => {
        const leftStyle = calculateCardTransform(0, 0, width, false);
        const rightStyle = calculateCardTransform(0, 1, width, false);

        // Tablet uses reduced ±3.5vw shift instead of 14-15vw
        expect(leftStyle.transform).toContain("3.5vw");
        expect(rightStyle.transform).toContain("3.5vw");

        // Tablet uses reduced tilt ±2.5deg
        expect(leftStyle.transform).toContain("2.5deg");
        expect(rightStyle.transform).toContain("-2.5deg");
      });
    });

    desktopWidths.forEach((width) => {
      test(`Desktop at ${width}px preserves 3D depth effect and alternating decks`, () => {
        const leftDeck = calculateCardTransform(0, 0, width, false);
        const rightDeck = calculateCardTransform(0, 1, width, false);

        expect(leftDeck.opacity).toBe(1);
        expect(rightDeck.opacity).toBe(1);

        // Alternating positions
        expect(leftDeck.transform).toContain("-");
        expect(rightDeck.transform).toContain("+");

        // Upcoming depth
        const upcoming = calculateCardTransform(1, 1, width, false);
        expect(upcoming.opacity).toBeLessThan(1);
        expect(upcoming.transform).toContain("scale(");
      });
    });
  });
});

