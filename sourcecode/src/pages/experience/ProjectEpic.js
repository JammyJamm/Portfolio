import React from "react";
import { calculateCardTransform } from "./experienceUtils";

const ProjectEpic = ({
  project,
  index,
  activeIndex,
  total,
  viewportWidth = 1200,
  isReducedMotion = false,
  onSelect,
  onOpenDetails,
}) => {
  const offset = index - activeIndex;
  const isLeft = index % 2 === 0;
  const isActive = offset === 0;
  const isInteractive = offset > 0 && offset <= 2;

  // Calculate dynamic 3D transform, opacity, z-index from mathematical function
  const cardStyle = calculateCardTransform(
    offset,
    index,
    viewportWidth,
    isReducedMotion
  );

  const formattedIndex = String(index + 1).padStart(2, "0");

  const handleCardClick = (e) => {
    // If user clicked on a link or button, don't trigger card selection
    if (e.target.closest("a") || e.target.closest("button")) {
      return;
    }
    if (isInteractive && onSelect) {
      onSelect(index);
    }
  };

  // Preview only first 3 AI skills and first 4 Dev skills on the front card for clean visual balance
  const previewAiSkills = (project.aiSkills || []).slice(0, 3);
  const previewDevSkills = (project.devSkills || []).slice(0, 4);

  return (
    <article
      className={`project-epic ${isLeft ? "is-left" : "is-right"} ${
        isActive ? "is-active" : offset < 0 ? "is-past" : "is-upcoming"
      }`}
      style={cardStyle}
      onClick={handleCardClick}
      aria-hidden={!isActive}
      data-index={index}
      role={isInteractive ? "button" : undefined}
      tabIndex={isActive ? 0 : isInteractive ? 0 : -1}
      title={
        isInteractive
          ? `Click to bring ${project.projectName} forward`
          : undefined
      }
    >
      <div className="epic-content">
        {/* Top Header Row */}
        <div className="epic-header">
          <div className="epic-num-group">
            <span className="epic-number">{formattedIndex}</span>
            <span className="epic-total">/ {String(total).padStart(2, "0")}</span>
          </div>

          <div className="epic-badges-group">
            {project.year && (
              <span className="epic-badge year-badge">{project.year}</span>
            )}
            <span className="epic-badge side-badge">
              {isLeft ? "Left Deck" : "Right Deck"}
            </span>
          </div>
        </div>

        {/* Company & Role Meta */}
        <div className="epic-company-bar">
          <span className="epic-org-name">{project.organization}</span>
          {project.role && <span className="epic-role-name"> &bull; {project.role}</span>}
        </div>

        {project.duration && (
          <span className="epic-duration-meta">
            {project.duration} {project.location ? `&bull; ${project.location}` : ""}
          </span>
        )}

        {/* Project Title */}
        <h2 className="epic-project-title">{project.projectName}</h2>

        {/* Brief Overview / Description */}
        {project.description && (
          <p className="epic-description">{project.description}</p>
        )}

        {/* Skills Preview Tags (Active and nearby depth) */}
        {(previewAiSkills.length > 0 || previewDevSkills.length > 0) && (
          <div className="epic-skills-preview">
            {previewAiSkills.map((ai, aIdx) => (
              <span key={`ai-${aIdx}`} className="epic-chip ai-chip">
                {ai}
              </span>
            ))}
            {previewDevSkills.map((tech, tIdx) => (
              <span key={`tech-${tIdx}`} className="epic-chip tech-chip">
                {tech}
              </span>
            ))}
          </div>
        )}

        {/* Bottom Actions Row */}
        <div className="epic-card-actions">
          {isActive ? (
            <>
              <button
                type="button"
                className="epic-action-btn details-btn"
                onClick={() => onOpenDetails && onOpenDetails(project)}
                aria-label={`View full details for ${project.projectName}`}
              >
                <span>Read Full Case Study</span>
                <svg
                  viewBox="0 0 24 24"
                  width="15"
                  height="15"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </button>

              {project.href && (
                <a
                  href={project.href}
                  target="_blank"
                  rel="noreferrer"
                  className="epic-action-link"
                  title={`Open ${project.linkText || project.projectName} in new tab`}
                >
                  <span>{project.linkText || "Visit"}</span>
                  <svg
                    viewBox="0 0 24 24"
                    width="14"
                    height="14"
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
              )}

              <div className="epic-active-indicator" aria-hidden="true">
                <span className="pulse-dot"></span>
                <span>Active</span>
              </div>
            </>
          ) : (
            <div className="epic-depth-hint">
              <span>{isInteractive ? "Click to bring forward" : "In depth"}</span>
            </div>
          )}
        </div>
      </div>
    </article>
  );
};

export default ProjectEpic;
