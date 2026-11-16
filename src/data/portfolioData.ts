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
  resumePath: "/Shubham_Durgude_Resume.pdf",
  profileImage: "/shubham.png",
  summary:
    "AI Engineer with 1.5+ years of experience building agentic AI workflows, RAG pipelines, and scalable Python backend services. Hands-on experience with LangChain, LangGraph, AutoGen, Flask, Celery, and AWS Bedrock, optimizing LLM latency and engineering reliable enterprise AI platforms. M.Sc. in Data Science & AI.",
  highlights: [
    { label: "Experience", value: "1.5+ Years" },
    { label: "Featured Projects", value: "5+ Systems" },
    { label: "Education", value: "M.Sc. DS & AI" },
    { label: "Core Focus", value: "Agentic AI & RAG" },
  ],
};

export const experiences: ExperienceItem[] = [
  {
    id: "ve3-global",
    company: "VE3 Global",
    position: "AI Engineer",
    location: "Pune, India",
    duration: "Oct 2025 – Present",
    type: "Full-Time",
    summary:
      "Contributing to MatchX, a modular AI-powered data quality platform (ingestion, profiling, rule library, cleaning, matching, validation, and verification) by developing backend services, agentic workflows, and latency optimizations.",
    contributions: [
      "Developed agentic AI workflows for data analysis and automated data cleaning using predefined rules and dynamic custom rule generation with revert/update capabilities.",
      "Designed and implemented custom agent tools for data quality analysis and cleaning, improving transformation efficiency and reliability.",
      "Developed hierarchical dataset matching supporting exact, deterministic, probabilistic, and fuzzy matching approaches with Celery background processing for high-volume tasks.",
      "Built connector-based ingestion for OneDrive, Amazon S3, and Google Sheets, supporting selective sheet ingestion from Excel files and handling CSV/JSON formats.",
      "Optimized backend performance by resolving memory leaks and refactoring code, significantly improving stability and resource efficiency.",
      "Optimized AI response times through prompt engineering, parameter tuning, smaller request payloads, and TOON format in place of JSON for flat data.",
      "Instrumented Flask APIs with Prometheus metrics to monitor request count, latency, and error rates in real-time.",
      "Built a data-quality scan API (Spark) running user-selected rules and validation rules in parallel with live progress tracking via Redis Pub/Sub.",
      "Implemented safe data cleaning runs that apply rules batch-by-batch and replace datasets only on 100% success, featuring audit trails and quality-score recalculations.",
      "Developed an asynchronous Excel export service with Redis job tracking, S3 download links, and AES-256 password protection for large datasets.",
      "Researched fine-tuning and alignment methods (SFT, LoRA/QLoRA, RLHF, GRPO, DPO, KTO, SimPO) and developed a Qwen3-0.6B SFT + DPO POC using Hugging Face and TRL.",
    ],
    keySkills: [
      "Agentic AI",
      "LangChain",
      "LangGraph",
      "Prompt Engineering",
      "Python",
      "Flask",
      "Celery",
      "Redis",
      "Apache Spark",
      "AWS Bedrock",
      "Docker",
      "Prometheus",
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
      "Developed multi-agent orchestration frameworks, document RAG pipelines, XBRL financial intelligence systems, and Model Context Protocol (MCP) servers.",
    contributions: [
      "Implemented OneDrive operations using Microsoft Graph API for automated file retrieval, download, metadata extraction, and upload.",
      "Contributed to Retrieval-Augmented Generation (RAG) pipelines to improve document retrieval precision and context synthesis.",
      "Developed collaborative multi-agent workflows using the AutoGen framework.",
      "Handled XBRL data extraction for financial SEC filings (10-K, 10-Q) to extract corporate financial metrics.",
      "Engineered social media data extraction and sentiment analysis workflows across LinkedIn, Twitter, Instagram, Facebook, and Reddit via RapidAPI.",
      "Built Model Context Protocol (MCP) servers for Google Maps and social media platform integrations.",
    ],
    keySkills: [
      "AutoGen",
      "RAG",
      "MCP",
      "OpenAI API",
      "Gemini API",
      "Cohere API",
      "Microsoft Graph API",
      "AstraDB",
      "Pydantic",
      "Python",
    ],
  },
];

export const skillGroups: SkillGroup[] = [
  {
    title: "Generative AI & LLMs",
    skills: [
      "LangChain",
      "LangGraph",
      "AutoGen",
      "RAG Pipelines",
      "Model Context Protocol (MCP)",
      "Multi-Agent Orchestration",
      "Prompt Engineering",
      "OpenAI & Gemini APIs",
      "Cohere",
      "Fine-Tuning (SFT, LoRA, DPO)",
    ],
  },
  {
    title: "Backend & Cloud",
    skills: [
      "Python",
      "Flask",
      "FastAPI",
      "Celery",
      "REST APIs",
      "asyncio",
      "Pydantic",
      "AWS Bedrock",
      "AWS S3 & SQS",
      "Docker",
      "Git & CI/CD",
    ],
  },
  {
    title: "AI, ML & Data Engineering",
    skills: [
      "Machine Learning",
      "Deep Learning (CNNs)",
      "NLP",
      "PyTorch",
      "TensorFlow",
      "Scikit-learn",
      "XGBoost",
      "Apache Spark",
      "Pandas & NumPy",
      "OpenCV",
    ],
  },
  {
    title: "Databases & Observability",
    skills: [
      "PostgreSQL",
      "Redis & Pub/Sub",
      "AstraDB (Vector)",
      "ChromaDB",
      "MongoDB",
      "MySQL",
      "Prometheus Metrics",
      "Pytest",
      "SonarQube",
    ],
  },
];

export const projects: Project[] = [
  {
    id: "ai-in-finance",
    title: "AI in Finance",
    subtitle: "RAG-Powered Financial & Market Intelligence Assistant",
    category: "Generative AI / RAG",
    description:
      "Developed an AI-driven financial assistant using LangFlow and Cohere LLM. Aggregates multi-source business intelligence (Tracxn, CBInsights, Forrester, IDC, LinkedIn) with embedding-based retrieval to provide company finances, investor activity, and job market trends.",
    features: [
      "Multi-source enterprise financial intelligence aggregation (Tracxn, CBInsights, LinkedIn).",
      "Embedding retrieval using AstraDB and ChromaDB vector databases.",
      "RAG-based financial reasoning for dynamic queries on funding, revenue, and labor trends.",
    ],
    technologies: ["LangFlow", "Cohere LLM", "AstraDB", "ChromaDB", "RAG", "Python"],
    metrics: "Multi-Source Vector RAG",
  },
  {
    id: "ai-chat-banking",
    title: "AI Chat for Banking Transactions",
    subtitle: "Conversational Bank Statement Querying with Google GenAI & SQL",
    category: "Agentic AI / NLP",
    description:
      "Designed and implemented an automated bank statement analysis application that parses financial statements from PDFs, generates dynamic SQL queries using Google GenAI, and enables natural-language financial querying via Gradio.",
    features: [
      "Automated tabular parsing and reconciliation from PDF bank statements via PyPDF2.",
      "Dynamic Text-to-SQL translation with Google GenAI for PostgreSQL.",
      "Interactive Gradio interface for conversational querying of financial transactions.",
    ],
    technologies: ["Python", "LangChain", "PostgreSQL", "Google GenAI", "Gradio", "PyPDF2"],
    metrics: "Natural Language -> SQL",
  },
  {
    id: "customer-segmentation",
    title: "Customer Segmentation in E-Commerce",
    subtitle: "Behavioral Clustering using K-Means & Hierarchical Models",
    category: "Machine Learning",
    description:
      "Implemented customer segmentation on UK retailer transactional data using K-Means and Hierarchical Clustering. Analyzed RFM (Recency, Frequency, Monetary) behavior to classify shoppers and optimize targeted marketing strategies.",
    features: [
      "RFM feature engineering, standardization, and outlier cleansing on retail transactions.",
      "K-Means and Hierarchical clustering with Silhouette, Davies-Bouldin, and Calinski evaluation.",
      "Actionable buyer persona classification to boost retention and marketing conversion.",
    ],
    technologies: ["Python", "Scikit-learn", "K-Means", "Clustering", "Pandas", "Matplotlib"],
    metrics: "Silhouette & Davies-Bouldin Evaluated",
  },
  {
    id: "brain-tumor-detection",
    title: "Brain Tumor Detection & Classification",
    subtitle: "CNN-based Medical Diagnostic Assistant with MRI Scans",
    category: "Deep Learning & CV",
    description:
      "Engineered a medical computer vision diagnostic pipeline using deep Convolutional Neural Networks (CNN) to detect and classify brain tumors from cranial MRI images to aid early clinical diagnosis.",
    features: [
      "Custom multiclass CNN architectures trained on cranial MRI datasets using TensorFlow.",
      "Medical image preprocessing including CLAHE, skull stripping, and data augmentation.",
      "High accuracy multiclass classification supporting clinical decision-making.",
    ],
    technologies: ["Python", "TensorFlow", "CNN", "Deep Learning", "OpenCV", "Image Processing"],
    metrics: "Multiclass Medical CNN",
  },
  {
    id: "walmart-sales-forecasting",
    title: "Walmart Sales Forecasting",
    subtitle: "Predictive Demand Modeling with XGBoost & Feature Engineering",
    category: "Machine Learning",
    description:
      "Built a predictive machine learning solution for Walmart store sales forecasting. Analyzed historical sales alongside markdown events, CPI, temperature, and unemployment indices to forecast store and department-level demand.",
    features: [
      "Extensive time-series feature engineering with promotional markdowns and economic indicators.",
      "Benchmarked Linear Regression vs. XGBoost gradient boosted decision trees.",
      "Error minimization (WMAE) for improved retail inventory and supply chain planning.",
    ],
    technologies: ["Python", "Machine Learning", "XGBoost", "Scikit-learn", "Pandas", "NumPy"],
    metrics: "Low Error XGBoost Model",
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
    highlight: "Image processing, OpenCV, object tracking & neural feature extractors",
  },
  {
    title: "AIML for GeoData Analysis",
    issuer: "IIRS / ISRO",
    highlight: "Indian Space Research Organisation — Satellite data modeling & spatial ML classification",
  },
];
