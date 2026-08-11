import { useEffect, useMemo, useState } from "react";
import {
  ArrowDown,
  ArrowRight,
  ArrowSquareOut,
  Briefcase,
  Buildings,
  DownloadSimple,
  EnvelopeSimple,
  GithubLogo,
  GlobeHemisphereWest,
  List,
  MagnifyingGlass,
  MapPin,
  Phone,
  Pulse,
  Sparkle,
  Strategy,
  TrendUp,
  X,
} from "@phosphor-icons/react";
import "@xyflow/react/dist/style.css";
import { ImpactAtlas } from "./components/ImpactAtlas.jsx";
import { LandscapeCard } from "./components/LandscapeCard.jsx";
import { ProjectCard } from "./components/ProjectCard.jsx";
import { ProjectDialog } from "./components/ProjectDialog.jsx";
import {
  capabilities,
  featuredProjects,
  landscapeDomains,
  landscapeDuplicates,
  landscapeMethod,
  landscapeProjects,
  landscapeReviewQueue,
  lensConfig,
  projectDomains,
  projects,
} from "./data/projectLibrary.js";

const navigation = [
  { label: "Profile", href: "#profile" },
  { label: "Projects", href: "#projects" },
  { label: "Landscape", href: "#landscape" },
  { label: "Capabilities", href: "#capabilities" },
  { label: "Contact", href: "#contact" },
];

const metrics = [
  {
    icon: Briefcase,
    value: "10+",
    unit: "years",
    text: "technology leadership across domains and systems",
    accent: "orange",
  },
  {
    icon: Sparkle,
    value: "30–40%",
    unit: "less manual work",
    text: "through automation in targeted business processes",
    accent: "blue",
  },
  {
    icon: TrendUp,
    value: "+18%",
    unit: "transaction success",
    text: "across payment-integration improvements",
    accent: "green",
  },
];

const technologyGroups = [
  {
    label: "Application platforms",
    items: ["Java & Spring Boot", "Python & FastAPI", "Node.js", "React", "Angular", "Flutter"],
  },
  {
    label: "Cloud & delivery",
    items: ["AWS", "Azure", "Google Cloud", "Docker", "Kubernetes", "CI/CD"],
  },
  {
    label: "Architecture & systems",
    items: ["REST APIs", "Data platforms", "AI/ML & LLM", "Payments", "IoT", "SAP / ERP / CRM"],
  },
];

function movePortrait(event) {
  const bounds = event.currentTarget.getBoundingClientRect();
  const horizontal = ((event.clientX - bounds.left) / bounds.width - 0.5) * 2;
  const vertical = ((event.clientY - bounds.top) / bounds.height - 0.5) * 2;
  event.currentTarget.style.setProperty("--portrait-x", horizontal.toFixed(3));
  event.currentTarget.style.setProperty("--portrait-y", vertical.toFixed(3));
}

function resetPortrait(event) {
  event.currentTarget.style.setProperty("--portrait-x", "0");
  event.currentTarget.style.setProperty("--portrait-y", "0");
}

function Header({ mobileOpen, setMobileOpen }) {
  return (
    <header className="site-header">
      <a className="brand" href="#profile" aria-label="Gaurav Jain home">
        GJ<span>.</span>
      </a>
      <nav className="desktop-nav" aria-label="Primary navigation">
        {navigation.map((item, index) => (
          <a key={item.href} className={index === 0 ? "is-active" : ""} href={item.href}>
            {item.label}
          </a>
        ))}
      </nav>
      <button
        type="button"
        className="icon-button mobile-menu-button"
        onClick={() => setMobileOpen((open) => !open)}
        aria-expanded={mobileOpen}
        aria-controls="mobile-navigation"
        aria-label={mobileOpen ? "Close navigation" : "Open navigation"}
      >
        {mobileOpen ? <X aria-hidden="true" /> : <List aria-hidden="true" />}
      </button>
      <nav
        id="mobile-navigation"
        className={`mobile-nav ${mobileOpen ? "is-open" : ""}`}
        aria-label="Mobile navigation"
      >
        {navigation.map((item) => (
          <a key={item.href} href={item.href} onClick={() => setMobileOpen(false)}>
            {item.label}
            <ArrowRight aria-hidden="true" />
          </a>
        ))}
      </nav>
    </header>
  );
}

function LeadershipLens({ activeLens, setActiveLens }) {
  return (
    <div className="lens-control" aria-label="View through a leadership lens">
      <p>View through a leadership lens</p>
      <div role="tablist" aria-label="Leadership lenses">
        {Object.keys(lensConfig).map((lens) => (
          <button
            key={lens}
            type="button"
            role="tab"
            aria-selected={activeLens === lens}
            className={activeLens === lens ? "is-active" : ""}
            onClick={() => setActiveLens(lens)}
          >
            {lens}
          </button>
        ))}
      </div>
      <span>{lensConfig[activeLens].statement}</span>
    </div>
  );
}

function MetricStrip() {
  return (
    <div className="metric-strip" aria-label="Selected career outcomes">
      {metrics.map(({ icon: Icon, value, unit, text, accent }) => (
        <article key={value} className={`metric metric--${accent}`}>
          <span className="metric__icon">
            <Icon aria-hidden="true" weight="duotone" />
          </span>
          <div>
            <strong>{value}</strong>
            <span>{unit}</span>
            <p>{text}</p>
          </div>
        </article>
      ))}
    </div>
  );
}

function SectionHeading({ eyebrow, title, text, count }) {
  return (
    <div className="section-heading">
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h2>{title}<span>.</span></h2>
      </div>
      <div className="section-heading__support">
        {count ? <span className="section-count">{count}</span> : null}
        <p>{text}</p>
      </div>
    </div>
  );
}

export function App() {
  const [activeLens, setActiveLens] = useState("CTO");
  const [selectedProject, setSelectedProject] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [activeDomain, setActiveDomain] = useState("All");
  const [visibleCount, setVisibleCount] = useState(12);
  const [landscapeQuery, setLandscapeQuery] = useState("");
  const [landscapeDomain, setLandscapeDomain] = useState("All");
  const [landscapeVisibleCount, setLandscapeVisibleCount] = useState(12);

  const filteredProjects = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    return projects.filter((project) => {
      const matchesDomain = activeDomain === "All" || project.domain === activeDomain;
      if (!matchesDomain) return false;
      if (!normalizedQuery) return true;
      const haystack = [
        project.name,
        project.summary,
        project.domain,
        ...project.technologies,
        ...project.lenses,
      ]
        .join(" ")
        .toLowerCase();
      return haystack.includes(normalizedQuery);
    });
  }, [activeDomain, query]);

  const filteredLandscape = useMemo(() => {
    const normalizedQuery = landscapeQuery.trim().toLowerCase();
    return landscapeProjects.filter((record) => {
      const matchesDomain = landscapeDomain === "All" || record.domains.includes(landscapeDomain);
      if (!matchesDomain) return false;
      if (!normalizedQuery) return true;
      return [record.name, record.summary, ...record.aliases, ...record.domains]
        .join(" ")
        .toLowerCase()
        .includes(normalizedQuery);
    });
  }, [landscapeDomain, landscapeQuery]);

  useEffect(() => {
    setVisibleCount(12);
  }, [activeDomain, query]);

  useEffect(() => {
    setLandscapeVisibleCount(12);
  }, [landscapeDomain, landscapeQuery]);

  useEffect(() => {
    document.body.classList.toggle("has-open-menu", mobileOpen);
    return () => document.body.classList.remove("has-open-menu");
  }, [mobileOpen]);

  return (
    <div className="site-shell">
      <Header mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />

      <main>
        <section id="profile" className="hero section-anchor">
          <div className="hero__copy">
            <h1>
              Building the systems behind real-world change<span>.</span>
            </h1>
            <p className="hero__intro">
              Technology leadership across AI, digital public infrastructure, FinTech, HealthTech, education, and commerce.
            </p>
            <p className="hero__location">
              <MapPin aria-hidden="true" weight="duotone" />
              Mumbai, Maharashtra, India
            </p>
            <div className="hero__actions">
              <a className="button button--primary" href="#projects">
                Explore projects
                <ArrowRight aria-hidden="true" />
              </a>
              <a className="button button--secondary" href="/resumes/gaurav-jain-resume.pdf" download>
                <DownloadSimple aria-hidden="true" />
                Download résumé
              </a>
            </div>

            <article className="identity-card">
              <div
                className="portrait-motion"
                onPointerMove={movePortrait}
                onPointerLeave={resetPortrait}
              >
                <div className="portrait-motion__surface">
                  <img
                    className="portrait-motion__texture"
                    src="/assets/atlas-paper-texture.png"
                    alt=""
                    aria-hidden="true"
                  />
                  <img
                    className="portrait-motion__person"
                    src="/assets/gaurav-jain-cutout.png"
                    alt="Gaurav Jain"
                  />
                </div>
              </div>
              <div className="identity-card__caption">
                <span aria-hidden="true" />
                <strong>Gaurav Jain</strong>
                <p>CTO · Product · Program · Project Leadership</p>
                <a href="mailto:jigerjain4.gj@gmail.com">
                  Start a conversation
                  <ArrowSquareOut aria-hidden="true" />
                </a>
              </div>
            </article>
          </div>

          <div className="hero__visual" id="impact-atlas">
            <ImpactAtlas activeLens={activeLens} onSelectProject={setSelectedProject} />
            <LeadershipLens activeLens={activeLens} setActiveLens={setActiveLens} />
            <MetricStrip />
          </div>
        </section>

        <section className="about section-block">
          <SectionHeading
            eyebrow="Profile"
            title="About me"
            text="I partner with leadership teams to turn complex ideas into resilient, scalable systems — from product direction and architecture to program governance and delivery."
          />
          <div className="about__grid">
            <blockquote>
              <span>“</span>
              The most useful technology leadership makes complexity legible — then gives people a practical path through it.
            </blockquote>
            <div className="about__narrative">
              <p>
                Across more than a decade at Technoark Solutions, I have led work spanning enterprise platforms, statewide government initiatives, healthcare, education, payments, commerce, AI-enabled products, SAP, cloud, and on-premises delivery.
              </p>
              <p>
                My operating range is deliberately broad: clarify the outcome, shape the system, align the people and dependencies, and keep delivery accountable through release and support.
              </p>
              <div className="about__signals">
                <span><GlobeHemisphereWest aria-hidden="true" /> Indian, US, and government stakeholders</span>
                <span><Strategy aria-hidden="true" /> Strategy through production support</span>
                <span><Pulse aria-hidden="true" /> KPI, risk, budget, and delivery governance</span>
              </div>
            </div>
          </div>
        </section>

        <section className="featured section-block section-anchor" id="projects">
          <SectionHeading
            eyebrow="Selected systems"
            title="Impact in context"
            count="10"
            text="Ten portfolio anchors show how strategy, architecture, product thinking, program governance, and delivery connect to real operating systems."
          />
          <div className="featured-grid">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} onOpen={setSelectedProject} />
            ))}
          </div>
        </section>

        <section className="project-library section-block">
          <SectionHeading
            eyebrow="Complete portfolio"
            title="Project library"
            count={String(projects.length).padStart(2, "0")}
            text="Every project from the previous portfolio, reorganized for discovery. Search by product, domain, leadership lens, or technology."
          />

          <div className="library-toolbar">
            <label className="search-field">
              <MagnifyingGlass aria-hidden="true" />
              <span className="sr-only">Search projects</span>
              <input
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search projects, domains, roles, or technology"
              />
              {query ? (
                <button type="button" onClick={() => setQuery("")} aria-label="Clear project search">
                  <X aria-hidden="true" />
                </button>
              ) : null}
            </label>
            <div className="filter-rail" aria-label="Filter projects by domain">
              {projectDomains.map((domain) => (
                <button
                  key={domain}
                  type="button"
                  className={activeDomain === domain ? "is-active" : ""}
                  onClick={() => setActiveDomain(domain)}
                >
                  {domain}
                </button>
              ))}
            </div>
          </div>

          <div className="library-status" aria-live="polite">
            <span>{filteredProjects.length} projects</span>
            <p>
              Responsibilities summarize the leadership contribution; technology lists preserve the original published portfolio context.
            </p>
          </div>

          {filteredProjects.length ? (
            <div className="library-grid">
              {filteredProjects.slice(0, visibleCount).map((project) => (
                <ProjectCard key={project.id} project={project} onOpen={setSelectedProject} compact />
              ))}
            </div>
          ) : (
            <div className="empty-state">
              <MagnifyingGlass aria-hidden="true" weight="duotone" />
              <h3>No project matches that view.</h3>
              <p>Try another technology, leadership lens, or domain.</p>
              <button
                className="button button--secondary"
                type="button"
                onClick={() => {
                  setQuery("");
                  setActiveDomain("All");
                }}
              >
                Reset filters
              </button>
            </div>
          )}

          {visibleCount < filteredProjects.length ? (
            <button
              className="load-more"
              type="button"
              onClick={() => setVisibleCount((count) => count + 12)}
            >
              Load more projects
              <ArrowDown aria-hidden="true" />
            </button>
          ) : null}
        </section>

        <section id="landscape" className="landscape section-block section-anchor">
          <div className="section-heading landscape-heading">
            <div>
              <p className="eyebrow">Extended landscape</p>
              <h2>Products beyond the archive<span>.</span></h2>
            </div>
            <div className="landscape-heading__details">
              <div className="section-heading__support">
                <span className="section-count">{String(landscapeProjects.length).padStart(2, "0")}</span>
                <p>The additional companies and products supplied for this portfolio, researched and organized by public product domain.</p>
              </div>
              <div className="landscape-note">
                <span>Source boundary</span>
                <p>{landscapeMethod}</p>
              </div>
            </div>
          </div>

          <div className="landscape-toolbar">
            <label className="search-field search-field--light">
              <MagnifyingGlass aria-hidden="true" />
              <span className="sr-only">Search the extended product landscape</span>
              <input
                type="search"
                value={landscapeQuery}
                onChange={(event) => setLandscapeQuery(event.target.value)}
                placeholder="Search products, companies, or domains"
              />
              {landscapeQuery ? (
                <button type="button" onClick={() => setLandscapeQuery("")} aria-label="Clear landscape search">
                  <X aria-hidden="true" />
                </button>
              ) : null}
            </label>
            <label className="landscape-domain-select">
              <span>Domain</span>
              <select value={landscapeDomain} onChange={(event) => setLandscapeDomain(event.target.value)}>
                {landscapeDomains.map((domain) => <option key={domain}>{domain}</option>)}
              </select>
            </label>
          </div>

          <div className="library-status library-status--landscape" aria-live="polite">
            <span>{filteredLandscape.length} sourced entries</span>
            <p>
              {landscapeDuplicates.length} supplied names already exist in the original project archive; {landscapeReviewQueue.length} ambiguous identities remain excluded until a precise URL is confirmed.
            </p>
          </div>

          {filteredLandscape.length ? (
            <div className="landscape-grid">
              {filteredLandscape.slice(0, landscapeVisibleCount).map((record, index) => (
                <LandscapeCard key={record.id} record={record} index={index} />
              ))}
            </div>
          ) : (
            <div className="empty-state empty-state--light">
              <MagnifyingGlass aria-hidden="true" weight="duotone" />
              <h3>No public product matches that view.</h3>
              <p>Try another company, product, or domain.</p>
              <button
                className="button button--secondary"
                type="button"
                onClick={() => {
                  setLandscapeQuery("");
                  setLandscapeDomain("All");
                }}
              >
                Reset landscape filters
              </button>
            </div>
          )}

          {landscapeVisibleCount < filteredLandscape.length ? (
            <button
              className="load-more load-more--light"
              type="button"
              onClick={() => setLandscapeVisibleCount((count) => count + 12)}
            >
              Load more research
              <ArrowDown aria-hidden="true" />
            </button>
          ) : null}
        </section>

        <section id="capabilities" className="capabilities section-block section-anchor">
          <SectionHeading
            eyebrow="Leadership system"
            title="Four lenses, one operating model"
            text="The role changes; the system stays connected. Each lens is designed to keep strategy, people, technology, risk, and outcomes moving together."
          />
          <div className="capability-grid">
            {capabilities.map((capability) => (
              <article key={capability.number}>
                <span>{capability.number}</span>
                <h3>{capability.title}</h3>
                <p>{capability.text}</p>
              </article>
            ))}
          </div>

          <div className="technology-board">
            <div>
              <p className="eyebrow">Technology context</p>
              <h3>Enough depth to make better decisions<span>.</span></h3>
              <p>
                Technical fluency is a leadership tool: it makes trade-offs clearer, dependencies visible, and delivery decisions more durable.
              </p>
            </div>
            <div className="technology-groups">
              {technologyGroups.map((group) => (
                <section key={group.label}>
                  <h4>{group.label}</h4>
                  <ul>
                    {group.items.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                </section>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="contact section-block section-anchor">
          <p className="eyebrow">Contact</p>
          <h2>Let’s make the complex<br />feel executable<span>.</span></h2>
          <p className="contact__intro">
            Open to technology leadership, technical product, program, and project mandates across India and global teams.
          </p>
          <div className="contact__links">
            <a href="mailto:jigerjain4.gj@gmail.com">
              <EnvelopeSimple aria-hidden="true" weight="duotone" />
              <span>Email</span>
              <strong>jigerjain4.gj@gmail.com</strong>
            </a>
            <a href="tel:+918097463214">
              <Phone aria-hidden="true" weight="duotone" />
              <span>Phone</span>
              <strong>+91 80974 63214</strong>
            </a>
            <a href="https://www.linkedin.com/in/extretessestric" target="_blank" rel="noreferrer">
              <Buildings aria-hidden="true" weight="duotone" />
              <span>LinkedIn</span>
              <strong>/in/extretessestric</strong>
            </a>
            <a href="https://github.com/extretessestric" target="_blank" rel="noreferrer">
              <GithubLogo aria-hidden="true" weight="duotone" />
              <span>GitHub</span>
              <strong>@extretessestric</strong>
            </a>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <a className="brand" href="#profile">GJ<span>.</span></a>
        <p>Technology leadership across strategy, architecture, product, program, and delivery.</p>
        <span>© {new Date().getFullYear()} Gaurav Jain</span>
      </footer>

      <ProjectDialog
        project={selectedProject}
        activeLens={activeLens}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}
