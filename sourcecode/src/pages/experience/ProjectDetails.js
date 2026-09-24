import React, { useEffect, useRef } from "react";

const ProjectDetails = ({ project, isOpen, onClose }) => {
  const modalContentRef = useRef(null);

  // Close on Escape key
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  // Trap scroll/wheel inside the modal dialog so experience stack does not navigate
  const handleModalWheel = (e) => {
    e.stopPropagation();
  };

  if (!isOpen || !project) return null;

  return (
    <div
      className="project-details-overlay"
      role="dialog"
      aria-modal="true"
      aria-labelledby="details-project-title"
      onClick={onClose}
    >
      <div
        className="project-details-modal"
        ref={modalContentRef}
        onClick={(e) => e.stopPropagation()}
        onWheel={handleModalWheel}
      >
        <div className="modal-header">
          <div className="modal-title-group">
            <div className="modal-badges">
              <span className="badge-org">{project.organization}</span>
              {project.year && <span className="badge-year">{project.year}</span>}
              {project.role && <span className="badge-role">{project.role}</span>}
            </div>
            <h2 id="details-project-title" className="modal-project-title">
              {project.projectName}
            </h2>
            <div className="modal-meta-row">
              {project.duration && (
                <span className="meta-item">
                  <svg
                    viewBox="0 0 24 24"
                    width="14"
                    height="14"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                  {project.duration}
                </span>
              )}
              {project.location && (
                <span className="meta-item">
                  <svg
                    viewBox="0 0 24 24"
                    width="14"
                    height="14"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  {project.location}
                </span>
              )}
            </div>
          </div>

          <button
            type="button"
            className="modal-close-btn"
            onClick={onClose}
            aria-label="Close project details"
          >
            <svg
              viewBox="0 0 24 24"
              width="22"
              height="22"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        <div className="modal-body">
          {/* Project Link if available */}
          {project.href && (
            <div className="modal-link-bar">
              <a
                href={project.href}
                target="_blank"
                rel="noreferrer"
                className="project-ext-link"
              >
                <span>Visit {project.linkText || "Project Website"}</span>
                <svg
                  viewBox="0 0 24 24"
                  width="16"
                  height="16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
              </a>
            </div>
          )}

          {/* Section: Overview */}
          {project.description && (
            <section className="modal-section">
              <h3 className="section-title">Overview</h3>
              <p className="section-text">{project.description}</p>
            </section>
          )}

          {/* Section: Contribution */}
          {project.contribution && (
            <section className="modal-section">
              <h3 className="section-title">Key Contribution &amp; Responsibilities</h3>
              <p className="section-text contribution-text">{project.contribution}</p>
            </section>
          )}

          {/* Section: AI Skills */}
          {project.aiSkills && project.aiSkills.length > 0 && (
            <section className="modal-section">
              <h3 className="section-title">AI &amp; Generative Engineering</h3>
              <div className="skills-pill-wrap">
                {project.aiSkills.map((skill, sIdx) => (
                  <span key={sIdx} className="skill-pill ai-pill">
                    {skill}
                  </span>
                ))}
              </div>
            </section>
          )}

          {/* Section: Development Skills */}
          {project.devSkills && project.devSkills.length > 0 && (
            <section className="modal-section">
              <h3 className="section-title">Development &amp; Technology Stack</h3>
              <div className="skills-pill-wrap">
                {project.devSkills.map((tech, tIdx) => (
                  <span key={tIdx} className="skill-pill dev-pill">
                    {tech}
                  </span>
                ))}
              </div>
            </section>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
