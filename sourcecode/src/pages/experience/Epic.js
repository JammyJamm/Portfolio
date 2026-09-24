import React, { useEffect, useRef, useState } from "react";
import "./style.scss";

const Epic = ({ epic }) => {
  const projectRefs = useRef([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.dataset.index);
            setActiveIndex(index);
          }
        });
      },
      {
        threshold: 0.6,
      },
    );

    projectRefs.current.forEach((project) => {
      if (project) observer.observe(project);
    });

    return () => observer.disconnect();
  }, [epic]);

  return (
    <div className="epic-wrapper">
      {epic.map((project, index) => (
        <section
          key={index}
          data-index={index}
          ref={(el) => {
            projectRefs.current[index] = el;
          }}
          className={`epic-project ${activeIndex === index ? "active" : ""}`}
        >
          <div className="epic-content">
            <span className="epic-number">
              {String(index + 1).padStart(2, "0")}
            </span>

            <span className="epic-years">
              {project.startYear} — {project.endYear}
            </span>

            <h2>{project.organization}</h2>
          </div>
        </section>
      ))}
    </div>
  );
};

export default Epic;
