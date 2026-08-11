import { ArrowSquareOut } from "@phosphor-icons/react";

export function LandscapeCard({ record, index }) {
  return (
    <article className="landscape-card">
      <div className="landscape-card__meta">
        <span>{String(index + 1).padStart(2, "0")}</span>
        <div>
          {record.domains.map((domain) => (
            <span key={domain}>{domain}</span>
          ))}
        </div>
      </div>
      <h3>{record.name}</h3>
      {record.aliases.length ? <p className="landscape-card__alias">Listed as {record.aliases.join(", ")}</p> : null}
      <p>{record.summary}</p>
      <a href={record.source} target="_blank" rel="noreferrer">
        Public product source
        <ArrowSquareOut aria-hidden="true" />
      </a>
    </article>
  );
}
