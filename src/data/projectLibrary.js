import portfolioSource from "./old-portfolio-projects.json";
import candidateResearchSource from "./candidate-research.json";
import extendedLandscapeSource from "./extended-landscape.json";

const textFixes = [
  ["â€“", "–"],
  ["â€”", "—"],
  ["â€™", "’"],
  ["â€˜", "‘"],
  ["â€œ", "“"],
  ["â€", "”"],
  ["â€¦", "…"],
  ["Â", ""],
];

export function cleanText(value = "") {
  return textFixes.reduce(
    (result, [source, replacement]) => result.replaceAll(source, replacement),
    String(value),
  );
}

const technologyAliases = new Map([
  ["reactjs", "React"],
  ["react js", "React"],
  ["vuejs", "Vue.js"],
  ["nextjs", "Next.js"],
  ["nodejs", "Node.js"],
  ["node js", "Node.js"],
  ["javascript", "JavaScript"],
  ["java spring boot", "Spring Boot"],
  ["java spring boot ", "Spring Boot"],
  ["postgres", "PostgreSQL"],
  ["postgresql", "PostgreSQL"],
  ["mysql", "MySQL"],
  ["golang", "Go"],
  [".net core", ".NET Core"],
  ["google cloud", "Google Cloud"],
  ["gcp", "Google Cloud"],
  ["cloudfare", "Cloudflare"],
  ["cloufare", "Cloudflare"],
  ["websockets", "WebSockets"],
  ["github actions", "GitHub Actions"],
  ["jira", "Jira"],
  ["wordpress", "WordPress"],
  ["elasticsearch", "Elasticsearch"],
]);

function normalizeTechnology(value) {
  const cleaned = cleanText(value).trim();
  return technologyAliases.get(cleaned.toLowerCase()) ?? cleaned;
}

const technologyExpansions = new Map([
  ["stripe / flutterwave", ["Stripe", "Flutterwave"]],
  ["docker & kubernetes", ["Docker", "Kubernetes"]],
  ["docker / kubernetes", ["Docker", "Kubernetes"]],
  ["docker / nginx", ["Docker", "Nginx"]],
  ["docker, kubernetes, terraform, jenkins", ["Docker", "Kubernetes", "Terraform", "Jenkins"]],
  ["sql, tableau, power bi", ["SQL", "Tableau", "Power BI"]],
  ["tensorflow, pytorch, scala", ["TensorFlow", "PyTorch", "Scala"]],
  ["spark, kafka, airflow, hadoop", ["Spark", "Kafka", "Airflow", "Hadoop"]],
  ["aws + azure + gcp", ["AWS", "Azure", "Google Cloud"]],
  ["aws & nginx", ["AWS", "Nginx"]],
  ["python + java", ["Python", "Java"]],
  ["python + fastapi", ["Python", "FastAPI"]],
  ["ocr + nlp", ["OCR", "NLP"]],
  ["javascript / jquery", ["JavaScript", "jQuery"]],
  ["reactjs + redux", ["React", "Redux"]],
  ["lms / cms", ["LMS", "CMS"]],
  ["erp / crm", ["ERP", "CRM"]],
  ["elastic / solr", ["Elasticsearch", "Solr"]],
  ["google analytics / tag manager", ["Google Analytics", "Google Tag Manager"]],
  ["google tag manager & analytics", ["Google Tag Manager", "Google Analytics"]],
  ["moengage / outbrain", ["MoEngage", "Outbrain"]],
  ["zoom / slack", ["Zoom", "Slack"]],
  ["vimeo / gmail", ["Vimeo", "Gmail"]],
  ["livechat / zopim", ["LiveChat", "Zopim"]],
  ["mautic / ahrefs", ["Mautic", "Ahrefs"]],
  ["native ios & android", ["Native iOS", "Native Android"]],
  ["llm apis / image generation apis", ["LLM APIs", "Image Generation APIs"]],
]);

function expandTechnology(value) {
  const cleaned = cleanText(value).trim();
  const expanded = technologyExpansions.get(cleaned.toLowerCase()) ?? [cleaned];
  return expanded.map(normalizeTechnology);
}

const stackCategoryRules = [
  {
    label: "Frontend & mobile",
    match: /react|redux|angular|vue|next\.js|preact|javascript|jquery|html|bootstrap|handlebars|liquid|day\.js|flutter|native ios|native android|jsp/i,
  },
  {
    label: "Backend & APIs",
    match: /spring boot|\bjava\b|node\.js|\bpython\b|django|fastapi|\bphp\b|\.net|\bgo\b|graphql|websockets|socket\.io|delphi|rest api/i,
  },
  {
    label: "Data & AI",
    match: /mysql|postgres|\bsql\b|mongodb|redis|oracle|mssql|enterprise db|managed db|bigquery|elasticsearch|solr|spark|kafka|airflow|hadoop|ai\/ml|ai-powered|ai & automation|generative ai|\bllm\b|llm api|image generation|\bnlp\b|\bocr\b|icr|opencv|tensorflow|pytorch|vertex ai|gemini|claude|agent orchestration|python \(analytics\)/i,
  },
  {
    label: "Cloud & infrastructure",
    match: /\baws\b|aws s3|azure|google cloud|cloudflare|docker|kubernetes|terraform|nginx|apache|vercel|on-prem|data center|vmware|virtualbox|envoy|cedexis|godaddy|hosted/i,
  },
  {
    label: "Integrations & payments",
    match: /stripe|flutterwave|paypal|payu|razorpay|mastercard|metamask|smart contract|\bdefi\b|\bondc\b|whatsapp api|google maps api|firebase cloud messaging|disqus|moengage|outbrain|zoom|slack|livechat|zopim|vimeo|gmail|hubspot|google workspace|orthalis|doctolib|3shape|dentalmonitoring|kitview|\busps\b|webengage|chatwoot/i,
  },
  {
    label: "Delivery, quality & analytics",
    match: /jira|trello|asana|path\(pm tool\)|jenkins|github actions|azure devops|confluence|clickup|notion|google analytics|tag manager|mixpanel|amplitude|new relic|junit|lombok|a11y|wcag|vpat|web accessibility|ahrefs|mautic|meta pixels|google ads|webtrekk|power bi|tableau|yoast|lead generation/i,
  },
];

function buildStackGroups(technologies) {
  const buckets = new Map(stackCategoryRules.map(({ label }) => [label, []]));
  const platformLabel = "Platforms & domain technology";
  buckets.set(platformLabel, []);

  technologies.forEach((technology) => {
    const category = stackCategoryRules.find(({ match }) => match.test(technology))?.label ?? platformLabel;
    buckets.get(category).push(technology);
  });

  return [...buckets.entries()]
    .filter(([, items]) => items.length)
    .map(([label, items]) => ({ label, items }));
}

const domainRules = [
  {
    name: "Public Digital Infrastructure",
    match: /government|govt|nhm|hmis|disaster|grassroot|gram panchayat|msme|midc|mht?cet|admission regulatory|swachh bharat|forest department|bharat electronics|nsic|e-?governance|public sector/,
  },
  {
    name: "HealthTech",
    match: /health|medical|medicine|hospital|telemedicine|clinic|patient|pharmacy|ayur|dental|care plan/,
  },
  {
    name: "FinTech",
    match: /fintech|finance|bank|payment|payfi|bankfi|defi|blockchain|invoic|receivable|insurance|crypto|wallet|housing finance|xpay/,
  },
  {
    name: "Education",
    match: /education|edtech|student|school|college|learning|tuition|course|lms|teacher|admission|intern/,
  },
  {
    name: "Climate & Agriculture",
    match: /agri|farm|forest|climate|carbon|green future|earth engine|gis|sustainab/,
  },
  {
    name: "Commerce & Logistics",
    match: /shopify|woocommerce|commerce|marketplace|retail|shipping|logistics|fashion|cosmetic|supply|rental|delivery|restaurant|store|hospitality/,
  },
  {
    name: "AI & Data",
    match: /\bai\b|ai\/ml|generative ai|llm|nlp|machine learning|computer vision|opencv|vertex ai|tensorflow|pytorch|analytics|bigquery|spark|data intelligence/,
  },
  {
    name: "Enterprise Platforms",
    match: /enterprise|sap|erp|crm|saas|workplace|storage|accessibility|document|automation|cms|data platform/,
  },
];

const domainAccents = {
  "Public Digital Infrastructure": "green",
  HealthTech: "green",
  FinTech: "orange",
  Education: "blue",
  "Climate & Agriculture": "green",
  "Commerce & Logistics": "orange",
  "AI & Data": "blue",
  "Enterprise Platforms": "ink",
};

const featuredDetails = {
  "LeXi AI": {
    shortTitle: "LeXi AI",
    kicker: "Legal intelligence",
    summary:
      "A legal-intelligence platform spanning contract lifecycle management and litigation preparation, combining structured workflows with LLM and NLP capabilities.",
    scale: "CLM + litigation",
    responsibilities: [
      "Connected stakeholder discovery to a modular product roadmap across contract and litigation workflows.",
      "Guided the technical product shape across React, FastAPI, LLM/NLP services, and MongoDB.",
      "Balanced AI capability, workflow usability, delivery risk, and release readiness across disciplines.",
    ],
    lenses: ["CTO", "Product"],
  },
  "Telemedicine Services - NHM, MP Govt.": {
    shortTitle: "Statewide Telemedicine",
    kicker: "Digital public health",
    summary:
      "A statewide hub-and-spoke telemedicine program connecting medical colleges and primary health centers for specialist consultations, digital records, e-prescriptions, and centralized monitoring.",
    scale: "6 colleges · 1,206 PHCs",
    responsibilities: [
      "Governed the rollout across software, on-premises infrastructure, kiosks, IoT kits, and clinical stakeholders.",
      "Aligned scope, risks, dependencies, delivery cadence, and reporting across a multi-site public-health program.",
      "Supported an interoperable care journey spanning consultations, records, prescriptions, and monitoring.",
    ],
    lenses: ["Program", "Project", "CTO"],
  },
  "HMIS - MP Govt.": {
    shortTitle: "Statewide HMIS",
    kicker: "Hospital operations",
    summary:
      "A hospital management platform spanning patient registration, OPD/IPD, pharmacy, laboratory, radiology, billing, inventory, EHR, citizen services, and command-center monitoring.",
    scale: "Care + operations + command center",
    responsibilities: [
      "Structured the program around interoperable hospital workflows, operational controls, and citizen-facing services.",
      "Coordinated application, infrastructure, integration, and governance dependencies across a statewide platform.",
      "Maintained executive visibility through milestones, risks, KPIs, and structured delivery reviews.",
    ],
    lenses: ["CTO", "Program"],
  },
  "Disaster & Rescue Management - Uttrakhand Govt.": {
    shortTitle: "Disaster & Rescue",
    kicker: "Public safety intelligence",
    summary:
      "A smart-response platform combining drone surveillance, thermal and LiDAR sensing, AI-driven analysis, GIS mapping, and command-center coordination for landslides and cloudbursts.",
    scale: "Drones · LiDAR · AI · GIS",
    responsibilities: [
      "Shaped an integrated operating model across field sensing, analytics, mapping, and command-center response.",
      "Coordinated hardware, software, data, and public-sector delivery dependencies around emergency use cases.",
      "Translated complex surveillance and geospatial capabilities into governed, decision-ready workflows.",
    ],
    lenses: ["CTO", "Program", "Project"],
  },
  "Digitization for Grassroot Governance": {
    shortTitle: "Grassroot Governance",
    kicker: "Rural digital infrastructure",
    summary:
      "A connected-governance program extending reliable digital access from state headquarters to Gram Panchayats through VSAT, broadband, applications, and command-center coordination.",
    scale: "Village-to-state connectivity",
    responsibilities: [
      "Shaped the hub-and-spoke delivery model across village connectivity, applications, on-premises infrastructure, and command-center operations.",
      "Coordinated technology and governance dependencies spanning VSAT, broadband, rural e-services, and state-level monitoring.",
      "Translated inclusive-access goals into phased delivery, operational controls, and measurable service readiness.",
    ],
    lenses: ["CTO", "Program", "Project"],
  },
  Scallop: {
    shortTitle: "Scallop / E Money",
    kicker: "BankFi + PayFi",
    summary:
      "A banking and digital-asset ecosystem connecting a user-facing financial experience with a modular blockchain foundation for compliant services.",
    scale: "BankFi + PayFi ecosystem",
    responsibilities: [
      "Aligned the product and platform view across user experience, financial services, integrations, and blockchain foundations.",
      "Guided architecture and delivery decisions across React, Spring Boot, PostgreSQL, AWS, blockchain, and DeFi contexts.",
      "Balanced innovation, interoperability, operational risk, and release governance in a regulated domain.",
    ],
    lenses: ["CTO", "Product"],
  },
  "ArealYou.ai": {
    shortTitle: "ArealYou.ai",
    kicker: "Computer vision care",
    summary:
      "An AI-enabled personal-care product using video analysis to assess hair and scalp attributes and generate individualized care insights.",
    scale: "Video analysis · personalized insights",
    responsibilities: [
      "Translated a computer-vision capability into a clear assessment journey and prioritized product experience.",
      "Aligned React, Django, OpenCV, MySQL, and AWS decisions with usability and delivery constraints.",
      "Coordinated discovery, requirements, validation, release planning, and stakeholder feedback.",
    ],
    lenses: ["Product", "CTO"],
  },
  "Paper ID": {
    shortTitle: "Paper.id",
    kicker: "SME finance operations",
    summary:
      "A FinTech SaaS platform for SME invoicing, receivables, payables, reconciliation, reminders, supplier workflows, and collections across more than 30 payment methods.",
    scale: "30+ payment methods",
    responsibilities: [
      "Connected finance workflow needs to product priorities across invoicing, reconciliation, reminders, and collections.",
      "Coordinated platform, analytics, cloud, and integration decisions around an SME-focused operating model.",
      "Balanced adoption, payment experience, delivery risk, and release sequencing across stakeholder groups.",
    ],
    lenses: ["Product", "Program"],
  },
  BigShip: {
    shortTitle: "BigShip",
    kicker: "Commerce logistics",
    summary:
      "A multi-channel shipping and e-commerce operations platform for social sellers, marketplace merchants, shop owners, and high-volume commerce businesses.",
    scale: "Web + mobile + event-driven services",
    responsibilities: [
      "Coordinated end-to-end delivery across merchant workflows, carrier integrations, mobile experiences, and operations.",
      "Managed scope, dependencies, risks, release readiness, and support across a distributed technology stack.",
      "Aligned product priorities with platform reliability, operational visibility, and merchant experience.",
    ],
    lenses: ["Product", "Project"],
  },
  EduSpark: {
    shortTitle: "EduSpark",
    kicker: "Professional learning",
    summary:
      "A professional-learning product for school leaders and teachers with interactive courses, progress analytics, learner portfolios, subscriptions, and pay-per-course options.",
    scale: "Learning + analytics + commerce",
    responsibilities: [
      "Shaped the learning journey around discoverability, progression, portfolio evidence, and flexible access models.",
      "Aligned web, mobile, LMS, analytics, and payment priorities into coordinated release plans.",
      "Maintained stakeholder alignment across product requirements, user experience, delivery, and support.",
    ],
    lenses: ["Product", "Project"],
  },
};

const contributionTemplates = {
  "Public Digital Infrastructure": [
    "Translated policy and operational needs into governed digital workflows and measurable delivery milestones.",
    "Coordinated application, infrastructure, integration, vendor, and stakeholder dependencies.",
    "Maintained visibility across scope, RAID, compliance, release readiness, and operational handover.",
  ],
  HealthTech: [
    "Mapped care and operations workflows into a prioritized product and delivery plan.",
    "Aligned application, data, integration, privacy, and infrastructure decisions across teams.",
    "Coordinated validation, release readiness, stakeholder communication, and support planning.",
  ],
  FinTech: [
    "Aligned financial journeys, platform capabilities, integrations, and risk controls around customer outcomes.",
    "Guided architecture and delivery trade-offs across payments, data, APIs, and cloud services.",
    "Coordinated dependencies, release governance, operational readiness, and stakeholder decisions.",
  ],
  Education: [
    "Turned learner and administrator needs into prioritized journeys, workflows, and release increments.",
    "Aligned web, mobile, content, analytics, and integration decisions with adoption goals.",
    "Coordinated requirements, delivery cadence, stakeholder reviews, and post-release support.",
  ],
  "Climate & Agriculture": [
    "Connected field, data, geospatial, and operational requirements into a coherent platform roadmap.",
    "Aligned sensor, analytics, application, and cloud dependencies around usable decision workflows.",
    "Coordinated delivery risk, stakeholder reviews, validation, and rollout readiness.",
  ],
  "Commerce & Logistics": [
    "Prioritized customer and operational journeys across discovery, transaction, fulfillment, and support.",
    "Aligned storefront, payment, integration, analytics, and platform decisions around conversion and reliability.",
    "Coordinated cross-functional delivery, release readiness, change control, and production support.",
  ],
  "AI & Data": [
    "Translated an AI-enabled opportunity into clear user workflows, delivery boundaries, and success signals.",
    "Aligned model, data, API, application, cloud, and observability decisions across disciplines.",
    "Governed validation, delivery risk, release readiness, and stakeholder expectations.",
  ],
  "Enterprise Platforms": [
    "Connected business processes, platform capabilities, integrations, and operating controls into a delivery roadmap.",
    "Guided architecture choices across applications, data, APIs, cloud, and enterprise systems.",
    "Coordinated governance, dependencies, adoption, release readiness, and support transition.",
  ],
};

function inferDomain(project) {
  const haystack = [
    project.name,
    project.description,
    ...(project.technologies ?? []),
  ]
    .join(" ")
    .toLowerCase();
  return domainRules.find((rule) => rule.match.test(haystack))?.name ?? "Enterprise Platforms";
}

function deriveLenses(domain, projectName) {
  const featured = featuredDetails[projectName]?.lenses;
  if (featured) return featured;
  if (domain === "Public Digital Infrastructure") return ["Program", "Project", "CTO"];
  if (domain === "AI & Data") return ["Product", "CTO"];
  if (domain === "FinTech") return ["CTO", "Product", "Program"];
  if (domain === "Commerce & Logistics") return ["Product", "Project"];
  if (domain === "Education") return ["Product", "Project"];
  return ["CTO", "Program", "Project"];
}

function projectImage(project) {
  const source = project.imagePaths?.[0] ?? "";
  const filename = source.split("/").pop();
  return filename ? `/project-images/${filename}` : "/assets/atlas-paper-texture.png";
}

export const projects = portfolioSource.projects.map((sourceProject) => {
  const project = {
    ...sourceProject,
    name: cleanText(sourceProject.name),
    description: cleanText(sourceProject.description),
    technologies: [...new Set((sourceProject.technologies ?? []).flatMap(expandTechnology))],
  };
  const domain = inferDomain(project);
  const featured = featuredDetails[project.name];
  return {
    ...project,
    id: `project-${project.sourceOrder}`,
    image: projectImage(project),
    domain,
    accent: domainAccents[domain] ?? "ink",
    lenses: deriveLenses(domain, project.name),
    responsibilities: featured?.responsibilities ?? contributionTemplates[domain],
    summary: featured?.summary ?? project.description,
    shortTitle: featured?.shortTitle ?? project.name,
    kicker: featured?.kicker ?? domain,
    scale: featured?.scale ?? `${project.technologies.length} technology touchpoints`,
    imagePresentation:
      project.name === "Digitization for Grassroot Governance" ? "artwork" : "logo",
    stackGroups: buildStackGroups(project.technologies),
    featured: Boolean(featured),
  };
});

const featuredOrder = [
  "LeXi AI",
  "Telemedicine Services - NHM, MP Govt.",
  "Disaster & Rescue Management - Uttrakhand Govt.",
  "Scallop",
  "Digitization for Grassroot Governance",
  "HMIS - MP Govt.",
  "ArealYou.ai",
  "Paper ID",
  "BigShip",
  "EduSpark",
];

export const featuredProjects = featuredOrder
  .map((name) => projects.find((project) => project.name === name))
  .filter(Boolean);

export const projectDomains = [
  "All",
  "AI & Data",
  "Public Digital Infrastructure",
  "HealthTech",
  "FinTech",
  "Commerce & Logistics",
  "Education",
  "Climate & Agriculture",
  "Enterprise Platforms",
];

export const lensConfig = {
  CTO: {
    label: "CTO",
    eyebrow: "Technology direction",
    centerLines: ["Strategy", "Architecture", "Delivery"],
    statement:
      "Shape the technology system: priorities, architecture, risk, investment, and delivery accountability.",
    projectNames: [
      "LeXi AI",
      "Disaster & Rescue Management - Uttrakhand Govt.",
      "Scallop",
      "HMIS - MP Govt.",
    ],
  },
  Product: {
    label: "Product",
    eyebrow: "Outcome discovery",
    centerLines: ["Discover", "Prioritize", "Learn"],
    statement:
      "Connect customer needs, business outcomes, technical feasibility, and adoption into a clear product direction.",
    projectNames: ["LeXi AI", "ArealYou.ai", "Paper ID", "EduSpark"],
  },
  Program: {
    label: "Program",
    eyebrow: "Portfolio orchestration",
    centerLines: ["Align", "Govern", "Scale"],
    statement:
      "Coordinate portfolios through dependencies, risk, budgets, governance cadence, and executive visibility.",
    projectNames: [
      "Telemedicine Services - NHM, MP Govt.",
      "HMIS - MP Govt.",
      "Disaster & Rescue Management - Uttrakhand Govt.",
      "Digitization for Grassroot Governance",
    ],
  },
  Project: {
    label: "Project",
    eyebrow: "Delivery control",
    centerLines: ["Plan", "Execute", "Land"],
    statement:
      "Turn scope into shipped outcomes through planning, RAID control, cross-functional execution, and release readiness.",
    projectNames: [
      "Telemedicine Services - NHM, MP Govt.",
      "MHCET",
      "Swachh Bharat Mission - DDM, ELoader, Tricycle",
      "BigShip",
    ],
  },
};

export const capabilities = [
  {
    number: "01",
    title: "Technology strategy",
    text: "Portfolio direction, architecture decisions, cloud and platform modernization, AI enablement, security, and executive reporting.",
  },
  {
    number: "02",
    title: "Technical product leadership",
    text: "Discovery, outcome definition, prioritization, roadmap and release planning, product KPIs, adoption, and change governance.",
  },
  {
    number: "03",
    title: "Program governance",
    text: "Multi-project alignment, budgets, dependencies, RAID, stakeholder cadence, procurement context, and benefits tracking.",
  },
  {
    number: "04",
    title: "Project delivery",
    text: "Requirements, estimates, schedules, cross-functional coordination, release readiness, production support, and accountable closure.",
  },
];

export const resumeVariants = [
  {
    title: "Leadership profile",
    subtitle: "Cross-role résumé",
    href: "/resumes/gaurav-jain-resume.pdf",
  },
  {
    title: "CTO / Head of Technology",
    subtitle: "Technology strategy and architecture",
    href: "/resumes/gaurav-jain-cto-resume.pdf",
  },
  {
    title: "Technical Product Manager",
    subtitle: "Discovery, roadmap, outcomes",
    href: "/resumes/gaurav-jain-product-resume.pdf",
  },
  {
    title: "Technical Program Manager",
    subtitle: "Portfolio governance and scale",
    href: "/resumes/gaurav-jain-program-resume.pdf",
  },
  {
    title: "Technical Project Manager",
    subtitle: "Execution, control, delivery",
    href: "/resumes/gaurav-jain-project-resume.pdf",
  },
];

export const researchedCandidates = candidateResearchSource.records.map((record) => ({
  ...record,
  candidate: cleanText(record.candidate),
  publicSummary: cleanText(record.publicSummary),
}));

export const landscapeProjects = extendedLandscapeSource.records.map((record, index) => ({
  ...record,
  id: `landscape-${index + 1}`,
  name: cleanText(record.name),
  summary: cleanText(record.summary),
  aliases: (record.aliases ?? []).map(cleanText),
  domains: (record.domains ?? []).map(cleanText),
}));

export const landscapeDomains = [
  "All",
  ...[...new Set(landscapeProjects.flatMap((record) => record.domains))].sort((a, b) =>
    a.localeCompare(b),
  ),
];

export const landscapeReviewQueue = extendedLandscapeSource.reviewQueue;
export const landscapeDuplicates = extendedLandscapeSource.duplicates;
export const landscapeMethod = cleanText(extendedLandscapeSource.method);
