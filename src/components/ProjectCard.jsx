import { ArrowUpRight } from "@phosphor-icons/react";

export function ProjectCard({ project, onOpen, compact = false }) {
  return (
    <article className={`project-card project-card--${project.accent} ${compact ? "project-card--compact" : ""}`}>
      <button type="button" className="project-card__button" onClick={() => onOpen(project)}>
        <div className="project-card__media">
          <img src={project.image} alt="" loading="lazy" />
          <span>{String(project.sourceOrder).padStart(2, "0")}</span>
        </div>
        <div className="project-card__body">
          <div className="project-card__meta">
            <span>{project.kicker}</span>
            <ArrowUpRight aria-hidden="true" />
          </div>
          <h3>{project.shortTitle}</h3>
          <p>{project.summary}</p>
          <div className="project-card__footer">
            <span>{project.technologies.join(" · ")}</span>
          </div>
        </div>
      </button>
    </article>
  );
}
