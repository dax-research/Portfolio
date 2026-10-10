export type Project = {
  slug: string;
  title: string;
  category: string;
  status: string;
  shortDescription: string;
  description: string;
  repo: string;
  demo?: string;
  tech: string[];
  highlights: string[];
  workflow: { label: string; detail: string }[];
  overview: string;
  problem: string;
  motivation: string;
  architecture: string;
  implementation: string[];
  decisions: string[];
  results: string;
  challenges: string[];
};

export type Article = {
  title: string;
  description: string;
  date: string;
  category: string;
  href: string;
};

export const profileLinks = {
  github: "https://github.com/dax-research",
  linkedin: "https://www.linkedin.com/in/dax-patel-b26926323/",
  medium: "https://medium.com/@dax1214b",
  leetcode: "https://leetcode.com/u/dax_2006/",
  email: "mailto:dax1214b@gmail.com",
  resume: "/resume.pdf",
};

export const education = [
  {
    period: "2024 - 2028",
    title: "B.Tech in Computer Engineering",
    institution: "Dharmsinh Desai University, Nadiad",
    detail: "CPI: 9.16",
  },
  {
    period: "2024",
    title: "Higher Secondary (HSC) & SSC",
    institution: "Sharda Mandir School, Nadiad",
    detail: "HSC: 91% | SSC: 94%",
  },
];

export const experience = [
  {
    period: "2025 - PRESENT",
    role: "AI/ML Team Member",
    organization: "Google Developers Groups, DDU - Nadiad",
    detail:
      "Working on machine learning concepts, model building, and AI-focused technical activities.",
  },
  {
    period: "2025",
    role: "Organizer Team",
    organization: "DUHACKS 5.0 Hackathon - Nadiad",
    detail:
      "Helped organize a national-level hackathon, coordinating teams, event flow, and technical logistics.",
  },
  {
    period: "2025",
    role: "Participant",
    organization: "Smart India Hackathon",
    detail:
      "Conceptualized an AI-powered solution focused on train traffic control to improve throughput and reduce delays.",
  },
];

export const skills = {
  languages: ["Python", "C", "C++", "Java"],
  ml: ["TensorFlow", "Scikit-learn", "Keras", "Pandas", "NumPy", "Matplotlib", "Seaborn", "SQL"],
  tools: ["GitHub", "Google Colab", "Kaggle", "Jupyter", "Docker"],
};

export const researchInterests = [
  "NLP and language understanding",
  "LLM reasoning and evaluation",
  "Retrieval-augmented generation",
  "Dataset quality and model reliability",
  "Applied ML for finance and health systems",
  "Research tooling and AI-assisted workflows",
];

export const featuredProjects: Project[] = [
  {
    slug: "mlcheck",
    title: "MLCheck",
    category: "Python library",
    status: "Currently building",
    shortDescription:
      "A Python library for dataset health analysis, issue detection, and ML pipeline quality checks.",
    description:
      "MLCheck is a lightweight Python toolkit designed to audit datasets before training and surface the issues that often compromise model quality.",
    repo: "https://github.com/dax-research/mlchecklib",
    tech: ["Python", "Pandas", "Data Quality", "ML Pipelines"],
    highlights: [
      "Missing values and duplicate detection",
      "Class imbalance and cardinality checks",
      "Leakage, dtypes, and outlier diagnostics",
      "Health scoring and remediation recommendations",
      "JSON, Markdown, and HTML export",
    ],
    workflow: [
      { label: "Dataset", detail: "Pass a pandas DataFrame for inspection." },
      { label: "Health checks", detail: "Evaluate common data-quality issues." },
      { label: "Report", detail: "Review findings, score, and recommendations." },
      { label: "Export", detail: "Save the report as JSON, Markdown, or HTML." },
    ],
    overview:
      "MLCheck is built around the idea that many model failures are visible earlier in the dataset than in the final training loop. The library gives practitioners a fast assessment of the most common data-health problems before a model is trained.",
    problem:
      "Datasets often contain subtle issues that are difficult to notice from a glance: class imbalance, duplicate rows, constant columns, outliers, high-cardinality text fields, and leakage across train/test splits. These issues can quietly degrade model performance before the training pipeline is even evaluated.",
    motivation:
      "The goal is to surface practical quality issues early and translate them into actionable feedback. This makes model development more reliable and more interpretable, especially in applied ML workflows.",
    architecture:
      "The library operates as a report generator built on top of pandas-based inspection. It evaluates a DataFrame against a set of data-health checks, aggregates the results into a structured report, and emits a concise summary with suggested actions.",
    implementation: [
      "Built a modular inspection workflow for pandas DataFrames.",
      "Added rule-based checks for missing values, duplicates, class balance, and constant columns.",
      "Computed a numerical health score and summarized the main findings for users.",
      "Included export features for Markdown, HTML, and JSON reports.",
    ],
    decisions: [
      "Prioritized fast, readable output over heavy dashboards or visual complexity.",
      "Kept the API simple enough for quick use in research and experimentation.",
      "Designed exportability so the output can be reviewed in notebooks, docs, or CI workflows.",
    ],
    results:
      "The project is actively in development and acts as a practical tool for early-stage data quality assessment rather than a finalized production platform.",
    challenges: [
      "Balancing thoroughness with a lightweight API.",
      "Making recommendations useful without being overly generic.",
      "Ensuring outputs remain readable for both technical and non-technical users.",
    ],
  },
  {
    slug: "research-os",
    title: "ResearchOS",
    category: "AI research assistant",
    status: "Currently building",
    shortDescription:
      "An early-stage research assistant project with verified PDF extraction and page-aware text chunking; retrieval remains on the roadmap.",
    description:
      "ResearchOS is an experimental research assistant project. Its inspected public source includes PDF text extraction and page-aware chunking; embeddings, indexing, semantic search, and response generation remain roadmap items.",
    repo: "https://github.com/dax-research/research-os",
    tech: ["Python", "PDF Processing", "Text Chunking", "Retrieval (planned)"],
    highlights: [
      "PDF text extraction with filename and page metadata",
      "Word-based chunking that retains page and chunk identifiers",
      "Optional overlap between adjacent text chunks",
      "Embeddings, vector storage, and semantic search remain on the roadmap",
    ],
    workflow: [
      { label: "PDF path", detail: "The example script passes a local PDF path to the reader." },
      { label: "Extract text", detail: "Read non-empty pages and retain filename and page metadata." },
      { label: "Chunk pages", detail: "Split page text into word-based chunks with optional overlap." },
      { label: "Future retrieval", detail: "Embeddings, indexing, search, and RAG are roadmap items." },
    ],
    overview:
      "ResearchOS is an early-stage project for exploring research-document workflows. The public source inspected for this portfolio contains a PDF reader and a page-aware chunker; later retrieval and generation stages are not represented as implemented here.",
    problem:
      "Research papers are commonly distributed as PDFs, which can make their text harder to process programmatically. The current code addresses PDF text extraction and chunk preparation, while search and synthesis remain future work.",
    motivation:
      "The project explores how document-processing foundations could support research workflows. The README lists embeddings, a vector database, semantic search, a RAG pipeline, and a research agent as roadmap stages.",
    architecture:
      "The verified source flow is a local PDF path passed to a PDF reader, followed by page-aware word chunking. Embeddings, vector storage, query processing, retrieval, and response generation are not implemented in the inspected source tree.",
    implementation: [
      "Implemented PDF text extraction for non-empty pages with filename and page-count metadata.",
      "Implemented word-based chunking that retains page numbers and sequential chunk IDs.",
      "Added optional overlap between adjacent chunks and tests for page-aware chunking.",
      "The inspected source does not contain embedding, vector database, search, or RAG implementations.",
    ],
    decisions: [
      "The reader returns filename and page information alongside extracted text.",
      "The chunker preserves page references and sequential chunk identifiers.",
      "Chunk overlap is optional rather than required.",
    ],
    results:
      "The public source verifies PDF reading and page-aware chunking. Retrieval and generation capabilities remain roadmap items, so no search, RAG, or model-performance results are claimed.",
    challenges: [
      "No browser-based PDF upload or query interface was present in the inspected source.",
      "No embedding model, vector index, semantic search, or response-generation code was present.",
    ],
  },
  {
    slug: "argus",
    title: "Argus",
    category: "Fraud detection system",
    status: "Verified implementation",
    shortDescription:
      "A full-stack fraud detection system combining rule-based checks with an ML risk engine and analyst workflows.",
    description:
      "Argus is a fraud-monitoring platform for transaction surveillance, designed to detect suspicious payments using both deterministic rules and machine learning-based risk scoring.",
    repo: "https://github.com/dax-research/argus-transaction-monitor",
    tech: ["Python", "Django", "DRF", "Machine Learning", "XGBoost", "SHAP"],
    highlights: [
      "Real-time transaction monitoring",
      "Two-tier rule engine and risk boosting",
      "Ensemble model using Random Forest + XGBoost + Meta Logistic Regression",
      "OTP challenge flow for medium-risk transactions",
      "Analyst dashboards and role-based investigation workflows",
    ],
    workflow: [
      { label: "Transaction", detail: "Submit a payment for evaluation." },
      { label: "Risk assessment", detail: "Combine rule signals and ML scoring." },
      { label: "Decision", detail: "Allow, challenge, or deny based on risk." },
      { label: "Review", detail: "Route suspicious activity to analyst workflows." },
    ],
    overview:
      "Argus is a real, layered fraud-detection project that combines transaction monitoring, compliance logic, explainable ML, and a dashboard-oriented investigation workflow. It is designed around risk management for financial transactions rather than only classification experiments.",
    problem:
      "Fraud detection requires both fast rule-based filtering and nuanced risk assessment. A system that only relies on static rules misses context, while a system without guardrails can generate noisy or risky decisions at high volume.",
    motivation:
      "The project explores how financial systems can combine deterministic business logic and probabilistic modeling to create a more robust transaction surveillance workflow.",
    architecture:
      "The system combines a customer-facing transaction flow with a Django REST API, a layered rule engine, a trained fraud model ensemble, and analyst dashboards. Suspicious transactions can trigger challenge flows and enter review workflows for investigation.",
    implementation: [
      "Built a Django-based transaction monitoring backend for risk evaluation.",
      "Included a rule engine for hard-block and soft-risk boosts.",
      "Integrated ML risk scoring through an ensemble design and explanation layer.",
      "Added analyst and auditor dashboards with role-based investigation flows.",
    ],
    decisions: [
      "Used a combined approach of rules plus ML so the system can catch obvious fraud patterns while still handling ambiguous cases.",
      "Included explainable AI to make flagged transactions easier for analysts to review.",
      "Separated customer, analyst, and auditor flows to reflect real-world operational constraints.",
    ],
    results:
      "Argus is a substantial project with verified implementation details documented in its public README, but it should be described as a project build with real system features rather than a production deployment claim.",
    challenges: [
      "Balancing low false positives against the needs of fast fraud detection.",
      "Designing operational workflows that remain understandable to analysts.",
      "Ensuring risk scoring remains explainable in a compliance-sensitive environment.",
    ],
  },
];

export const writingArticles: Article[] = [
  {
    title: "The AI Processor That's Changing Modern Computers",
    description: "How neural processing units are bringing AI directly to our devices.",
    date: "June 2026",
    category: "AI Systems",
    href: "https://medium.com/@dax1214b/the-ai-processor-thats-changing-modern-computers-70df9667155c",
  },
  {
    title: "Why Data Matters More Than Algorithm in Machine Learning",
    description:
      "Most AI models fail not because of bad code, but because of bad data.",
    date: "January 2026",
    category: "ML Fundamentals",
    href: "https://medium.com/@dax1214b/why-data-matters-more-than-algorithm-in-machine-learning-c3966451e933",
  },
];

export const allProjects = featuredProjects;

export function getProjectBySlug(slug: string): Project {
  const project = allProjects.find((item) => item.slug === slug);
  if (!project) {
    throw new Error(`Portfolio data is missing project "${slug}".`);
  }
  return project;
}
