import React from "react";

const ExperienceTimeline = ({
  epic = [],
  currentCompanyIndex = 0,
  activeIndex = 0,
  totalProjects = 0,
  onSelectCompany,
}) => {
  const isFirst = activeIndex === 0;
  const isLast = activeIndex === totalProjects - 1;

  let hintText = "Scroll down";
  if (isLast) {
    hintText = "Scroll up / End";
  } else if (!isFirst) {
    hintText = "Scroll up / down";
  }

  return (
    <nav className="experience-timeline ui-mouse" aria-label="Experience timeline">
      <div className="year">
        <div className="line"></div>
        <div className="col hori_center verti_center timeline-list-wrapper">
          {epic &&
            epic.map((company, index) => {
              const isActive = currentCompanyIndex === index;
              const duration =
                company.endYear ||
                (company.startYear && company.endYear
                  ? `${company.startYear} - ${company.endYear}`
                  : company.startYear || "");

              return (
                <button
                  type="button"
                  key={index}
                  className={`list ${isActive ? "active" : ""}`}
                  style={{
                    width: `${100 / (epic.length || 1)}%`,
                    cursor: "pointer",
                  }}
                  onClick={() => onSelectCompany && onSelectCompany(index)}
                  title={`Jump to ${company.organization}`}
                  aria-current={isActive ? "true" : undefined}
                >
                  <label>{company.organization}</label>
                  <p>{duration}</p>
                </button>
              );
            })}
        </div>
      </div>

      <div className="block">
        <div className="wheel" aria-hidden="true"></div>
        <p>{hintText}</p>
      </div>
    </nav>
  );
};

export default ExperienceTimeline;
