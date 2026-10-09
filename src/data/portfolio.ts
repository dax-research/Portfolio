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
      "An AI-powered research assistant for document ingestion, semantic search, and literature review workflows.",
    description:
      "ResearchOS is an experimental research assistant inspired by document-based AI workflows, designed to bring paper analysis, retrieval, and structured summaries into a single system.",
    repo: "https://github.com/dax-research/research-os",
    tech: ["Python", "RAG", "Embeddings", "PDF Processing"],
    highlights: [
      "PDF text extraction and document parsing",
      "Chunking and semantic indexing",
      "Embedding generation with BAAI/bge-small-en-v1.5",
      "RAG foundation for project research workflows",
      "Research assistant architecture for future iterations",
    ],
    overview:
      "ResearchOS explores a research workflow in which documents are processed, indexed, and searched semantically before being synthesized into insights. The project is designed around the practical needs of literature review and research discovery rather than only model demos.",
    problem:
      "Research workflows are often fragmented: papers exist in PDFs, notes are spread across files, and the extraction and meaning-making process is manual. When a research question is broad, finding the relevant context becomes slow and repetitive.",
    motivation:
      "The motivation is to build a system that works like an intelligent research companion: ingest documents, make them searchable, and support reasoning over large collections of source material.",
    architecture:
      "The project is structured around a document-processing pipeline: extraction, chunking, embedding, indexing, and retrieval. That foundation is intentionally created to support future semantic search, summarization, and literature review interactions.",
    implementation: [
      "Added PDF text extraction and article parsing workflows.",
      "Implemented chunking and text segmentation for downstream retrieval.",
      "Generated embeddings using a BAAI/bge-small-en-v1.5-based pipeline.",
      "Built the earliest RAG-style components for document grounding.",
    ],
    decisions: [
      "Focused on research workflow foundations before building a full autonomous agent layer.",
      "Built the retrieval pipeline to stay modular and extendable for future semantic search and evaluation work.",
      "Prioritized document-grounded reasoning and source traceability over overly generic AI outputs.",
    ],
    results:
      "The project is best understood as an infrastructure-heavy prototype and an active exploration of literature-aware AI workflows rather than a completed research platform.",
    challenges: [
      "Handling noisy or inconsistent PDF extraction.",
      "Designing chunking strategies that preserve context for downstream retrieval.",
      "Balancing the speed of retrieval with quality of evidence and reasoning.",
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
  {
    title: "First Step into Machine Learning: Linear Regression",
    description: "Understanding how a simple line can make powerful predictions.",
    date: "Draft / Not published",
    category: "Learning Notes",
    href: "https://medium.com/@dax1214b",
  },
];

export const allProjects = featuredProjects;
