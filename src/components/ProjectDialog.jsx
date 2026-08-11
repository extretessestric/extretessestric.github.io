import { useEffect, useRef } from "react";
import {
  ArrowSquareOut,
  CheckCircle,
  Stack,
  X,
} from "@phosphor-icons/react";

export function ProjectDialog({ project, activeLens, onClose }) {
  const dialogRef = useRef(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (project && !dialog.open) dialog.showModal();
    if (!project && dialog.open) dialog.close();
  }, [project]);

  if (!project) return null;

  const activeContribution = project.lenses.includes(activeLens)
    ? `${activeLens} leadership`
    : project.lenses.map((lens) => `${lens} leadership`).join(" · ");

  return (
    <dialog
      ref={dialogRef}
      className="project-dialog"
      onClose={onClose}
      onCancel={onClose}
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
      aria-labelledby="project-dialog-title"
    >
      <article className="project-dialog__panel">
        <button
          className="icon-button project-dialog__close"
          type="button"
          onClick={onClose}
          aria-label="Close project details"
        >
          <X aria-hidden="true" />
        </button>

        <div className="project-dialog__image-wrap">
          <div className="project-dialog__media-frame">
            <img src={project.image} alt="" className="project-dialog__image" decoding="async" />
          </div>
          <span className={`domain-badge domain-badge--${project.accent}`}>{project.domain}</span>
        </div>

        <div className="project-dialog__content">
          <p className="eyebrow">{project.kicker}</p>
          <h2 id="project-dialog-title">{project.shortTitle}</h2>
          <p className="project-dialog__summary">{project.summary}</p>

          <div className="project-dialog__meta">
            <div>
              <span>Leadership focus</span>
              <strong>{activeContribution}</strong>
            </div>
            <div>
              <span>Engagement signal</span>
              <strong>{project.scale}</strong>
            </div>
          </div>

          <section aria-labelledby="contribution-heading">
            <div className="section-label">
              <CheckCircle aria-hidden="true" weight="duotone" />
              <h3 id="contribution-heading">Contribution areas</h3>
            </div>
            <ul className="contribution-list">
              {project.responsibilities.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <section aria-labelledby="stack-heading">
            <div className="section-label">
              <Stack aria-hidden="true" weight="duotone" />
              <h3 id="stack-heading">Technology context</h3>
            </div>
            <div className="project-stack-grid">
              {project.stackGroups.map((group) => (
                <article className="project-stack-group" key={group.label}>
                  <h4>{group.label}</h4>
                  <p>{group.items.join(" · ")}</p>
                </article>
              ))}
            </div>
          </section>

          <footer className="project-dialog__footer">
            <p>
              Contribution framing is based on the supplied leadership résumés; technology context preserves the previously published portfolio record.
            </p>
            {project.link ? (
              <a className="text-link" href={project.link} target="_blank" rel="noreferrer">
                Visit product
                <ArrowSquareOut aria-hidden="true" />
              </a>
            ) : null}
          </footer>
        </div>
      </article>
    </dialog>
  );
}
