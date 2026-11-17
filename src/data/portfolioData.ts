import { Project, ExperienceItem, SkillGroup, EducationItem, CertificationItem } from '../types/portfolio';

export const personalInfo = {
  name: "Shubham Durgude",
  role: "AI Engineer",
  tagline: "Building Intelligent AI Solutions",
  location: "Pune, Maharashtra, India",
  email: "shubhamdurgude5@gmail.com",
  phone: "+91-8767978456",
  linkedin: "https://www.linkedin.com/in/shubham-durgude-aa1618217/",
  github: "https://github.com/shubhamdurgude",
  instagram: "https://www.instagram.com/imshubhamdurgude?obrf=MzJzcDBmbXdwbXpy",
  profileImage: "/shubham.png",
  summary:
    "AI Engineer specializing in autonomous Agentic workflows, enterprise RAG pipelines, and high-performance Python backends. Experienced with LangChain, LangGraph, AutoGen, Celery, and AWS Bedrock.",
  highlights: [
    { label: "Experience", value: "1.5+ Years" },
    { label: "AI Systems", value: "5+ Built" },
    { label: "Education", value: "M.Sc. DS & AI" },
  ],
};

export const experiences: ExperienceItem[] = [
  {
    id: "ve3-global",
    company: "VE3 Global",
    position: "Software Engineer (AI)",
    location: "Pune, India",
    duration: "Oct 2025 – Present",
    type: "Full-Time",
    summary:
      "Core AI contributor to MatchX, an enterprise AI-powered data quality platform spanning ingestion, profiling, rule generation, cleaning, and verification.",
    contributions: [
      "Architected autonomous agentic workflows and custom agent tools for automated data profiling, validation, and dynamic transformation rule generation.",
      "Engineered high-throughput connector ingestion pipelines (OneDrive, Amazon S3, Google Sheets) and asynchronous Celery/Redis background worker queues.",
      "Built Spark-based parallel data quality scans with live Redis Pub/Sub tracking and secure AES-256 encrypted export services.",
      "Optimized LLM inference efficiency through prompt compression and conducted alignment research with LoRA/QLoRA and DPO on open-source models.",
    ],
    keySkills: [
      "Agentic AI",
      "LangGraph",
      "LangChain",
      "Python",
      "Flask & FastAPI",
      "Celery",
      "Apache Spark",
      "AWS Bedrock",
      "Redis",
    ],
  },
  {
    id: "disruptivenext",
    company: "DisruptiveNext (Phoenixgen)",
    position: "Generative AI Engineer Intern",
    location: "Pune, India",
    duration: "Dec 2024 – May 2025",
    type: "Internship",
    summary:
      "Developed multi-agent orchestration frameworks, document RAG systems, and Model Context Protocol (MCP) integrations.",
    contributions: [
      "Engineered collaborative multi-agent autonomous workflows using AutoGen for complex task decomposition.",
      "Built production RAG pipelines with AstraDB vector database for high-precision semantic retrieval across financial filings.",
      "Developed Model Context Protocol (MCP) servers and Microsoft Graph API connectors for automated data retrieval.",
    ],
    keySkills: [
      "AutoGen",
      "RAG Pipelines",
      "Model Context Protocol (MCP)",
      "AstraDB",
      "OpenAI & Gemini APIs",
      "Python",
    ],
  },
];

export const skillGroups: SkillGroup[] = [
  {
    title: "Generative AI & Autonomous Agents",
    skills: [
      "LangGraph",
      "AutoGen",
      "LangChain",
      "RAG Pipelines",
      "Vector DBs (AstraDB, ChromaDB)",
      "Model Context Protocol (MCP)",
      "Prompt Engineering",
      "Fine-Tuning (LoRA, DPO)",
      "OpenAI & Gemini APIs",
    ],
  },
  {
    title: "Backend & Distributed Systems",
    skills: [
      "Python",
      "FastAPI & Flask",
      "Celery Task Queues",
      "Redis & Pub/Sub",
      "REST APIs & asyncio",
      "AWS Bedrock",
      "AWS S3",
      "Docker",
      "Prometheus Metrics",
    ],
  },
  {
    title: "Machine Learning & Data Engineering",
    skills: [
      "PyTorch & TensorFlow",
      "Apache Spark",
      "PostgreSQL",
      "Scikit-learn",
      "XGBoost",
      "Computer Vision (OpenCV)",
      "Pandas & NumPy",
    ],
  },
];

export const projects: Project[] = [
  {
    id: "ai-in-finance",
    title: "AI in Finance",
    subtitle: "RAG-Powered Market Intelligence Assistant",
    category: "Generative AI / RAG",
    description:
      "Multi-source financial assistant that aggregates market intelligence using embedding retrieval on AstraDB and ChromaDB vector stores with Cohere LLM reasoning.",
    features: [
      "Aggregates intelligence from multi-source datasets (Tracxn, CBInsights, LinkedIn).",
      "Vector similarity search and semantic retrieval across financial reports.",
    ],
    technologies: ["LangFlow", "Cohere LLM", "AstraDB", "ChromaDB", "Python", "RAG"],
    metrics: "Vector RAG",
    repoUrl: "https://github.com/shubhamdurgude",
  },
  {
    id: "ai-chat-banking",
    title: "AI Chat for Banking Statements",
    subtitle: "Conversational Statement Querying with Google GenAI & SQL",
    category: "Agentic AI / NLP",
    description:
      "Automated financial statement parser that extracts transactions from PDFs, translates natural language into dynamic PostgreSQL queries via Google GenAI, and serves results in Gradio.",
    features: [
      "Automated PDF statement tabular parsing with PyPDF2.",
      "Natural-language Text-to-SQL query generation against PostgreSQL.",
    ],
    technologies: ["Python", "LangChain", "PostgreSQL", "Google GenAI", "Gradio"],
    metrics: "Text-to-SQL",
    repoUrl: "https://github.com/shubhamdurgude",
  },
  {
    id: "customer-segmentation",
    title: "Customer Segmentation Engine",
    subtitle: "Behavioral Clustering with RFM & K-Means",
    category: "Machine Learning",
    description:
      "Customer intelligence pipeline that analyzes transactional retail data using RFM feature engineering and K-Means clustering to identify high-value customer segments.",
    features: [
      "Recency, Frequency, and Monetary (RFM) behavioral feature extraction.",
      "Clustering validation with Silhouette and Davies-Bouldin metrics.",
    ],
    technologies: ["Python", "Scikit-learn", "K-Means", "Pandas", "Matplotlib"],
    metrics: "Clustering Model",
    repoUrl: "https://github.com/shubhamdurgude",
  },
  {
    id: "brain-tumor-detection",
    title: "Brain Tumor Detection CNN",
    subtitle: "Medical Computer Vision Diagnostic Assistant",
    category: "Deep Learning & CV",
    description:
      "Diagnostic computer vision pipeline using deep Convolutional Neural Networks (CNN) to detect and classify brain tumors from cranial MRI scans for early clinical assistance.",
    features: [
      "Multiclass CNN trained with TensorFlow on cranial MRI imaging.",
      "Medical image preprocessing including CLAHE and skull stripping.",
    ],
    technologies: ["Python", "TensorFlow", "CNN", "OpenCV"],
    metrics: "Medical CNN",
    repoUrl: "https://github.com/shubhamdurgude",
  },
  {
    id: "walmart-sales-forecasting",
    title: "Walmart Sales Demand Forecaster",
    subtitle: "Predictive Modeling with XGBoost & Economic Indicators",
    category: "Machine Learning",
    description:
      "Predictive machine learning model forecasting retail store demand by modeling historical sales against promotional markdowns, CPI, and economic factors.",
    features: [
      "Time-series feature engineering with economic indicators.",
      "High accuracy demand estimation minimizing WMAE loss.",
    ],
    technologies: ["Python", "XGBoost", "Scikit-learn", "Pandas", "NumPy"],
    metrics: "XGBoost Model",
    repoUrl: "https://github.com/shubhamdurgude",
  },
];

export const educationList: EducationItem[] = [
  {
    degree: "M.Sc. – Data Science & Artificial Intelligence",
    institution: "Symbiosis International University, Pune",
    location: "Pune, India",
    duration: "2023 – 2025",
    badge: "Master's Degree",
  },
  {
    degree: "B.Sc. – Physics, Chemistry & Mathematics",
    institution: "Savitribai Phule Pune University",
    location: "Pune, India",
    duration: "2019 – 2022",
    badge: "Bachelor's Degree",
  },
];

export const certifications: CertificationItem[] = [
  {
    title: "Computer Vision with Python",
    issuer: "Udemy",
    highlight: "OpenCV, neural feature extractors & object classification",
  },
  {
    title: "AIML for GeoData Analysis",
    issuer: "IIRS / ISRO",
    highlight: "Indian Space Research Organisation — Spatial ML classification",
  },
];
