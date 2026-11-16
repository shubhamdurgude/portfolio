import { Project, ExperienceItem, SkillCategory, EducationItem, CertificationItem } from '../types/portfolio';

export const personalInfo = {
  name: "Shubham Durgude",
  role: "Software Engineer (AI)",
  tagline: "Building Intelligent AI Solutions",
  location: "Pune, Maharashtra, India",
  email: "shubhamdurgude5@gmail.com",
  phone: "+91-8767978456",
  linkedin: "https://www.linkedin.com/in/shubham-durgude-aa1618217/",
  github: "https://github.com/shubhamdurgude",
  resumePath: "/Shubham_Durgude_Resume.pdf",
  profileImage: "/shubham.png",
  summary:
    "Software Engineer (AI) with 1.5+ years of experience building agentic AI workflows, RAG pipelines, and scalable Python backend services. Hands-on experience with LangChain, LangGraph, AutoGen, Flask, Celery, AWS Bedrock, and modern LLM technologies.",
  highlights: [
    { label: "Experience", value: "1.5+ Years", detail: "Agentic AI & Backend" },
    { label: "Featured Projects", value: "5+ Built", detail: "End-to-end AI/ML systems" },
    { label: "Master's Degree", value: "M.Sc. DS & AI", detail: "Symbiosis International Univ." },
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
      "Working on MatchX, a modular AI-powered data quality platform covering ingestion, profiling, rule libraries, cleaning, matching, validation, and verification.",
    contributions: [
      "Developed agentic AI workflows for data analysis and automated data cleaning using predefined and dynamic custom rules.",
      "Implemented hierarchical dataset matching supporting exact, deterministic, probabilistic, and fuzzy approaches with Celery background processing.",
      "Optimized LLM response times by approximately 50% through prompt engineering, parameter tuning, and payload optimization.",
      "Built connector-based ingestion for OneDrive, Amazon S3, and Google Sheets with selective Excel sheet parsing.",
      "Built Spark-based data quality scan APIs with parallel rule execution and live Redis Pub/Sub tracking.",
      "Integrated Prometheus metrics into Flask APIs for request count, latency, and error monitoring.",
      "Developed asynchronous Excel export service with Redis job tracking, S3 download links, and AES-256 encryption.",
      "Researched alignment and fine-tuning methods (SFT, LoRA/QLoRA, RLHF, DPO) with Qwen3-0.6B POC.",
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
      "Developed multi-agent systems, document RAG pipelines, and Model Context Protocol (MCP) servers.",
    contributions: [
      "Implemented OneDrive file operations using Microsoft Graph API for automated retrieval and metadata extraction.",
      "Contributed to Retrieval-Augmented Generation (RAG) systems to enhance document search and processing.",
      "Developed agentic workflows using AutoGen for multi-agent execution.",
      "Extracted key financial insights from SEC 10-K and 10-Q filings via XBRL parsing.",
      "Built MCP servers for Google Maps and social media integrations via RapidAPI.",
      "Integrated OpenAI, Gemini, and Cohere APIs for sentiment and content extraction workflows.",
    ],
    keySkills: [
      "AutoGen",
      "RAG",
      "OpenAI API",
      "Gemini API",
      "Cohere API",
      "MCP",
      "Microsoft Graph API",
      "RapidAPI",
      "AstraDB",
      "NLP",
    ],
  },
];

export const skillCategories: SkillCategory[] = [
  {
    id: "genai",
    title: "Generative AI & LLMs",
    skills: [
      "LangChain",
      "LangGraph",
      "AutoGen",
      "RAG",
      "Model Context Protocol (MCP)",
      "Multi-Agent Orchestration",
      "Prompt Engineering",
      "OpenAI API",
      "Gemini API",
      "Cohere API",
      "LangFlow",
      "Gradio",
    ],
  },
  {
    id: "backend",
    title: "Backend & Distributed Systems",
    skills: [
      "Python",
      "Flask",
      "FastAPI",
      "Django",
      "REST APIs",
      "Celery",
      "asyncio",
      "Pydantic",
      "Microsoft Graph API",
      "Google APIs",
    ],
  },
  {
    id: "aiml",
    title: "AI & Machine Learning",
    skills: [
      "Machine Learning",
      "Deep Learning",
      "NLP",
      "Computer Vision",
      "PyTorch",
      "TensorFlow",
      "Scikit-learn",
      "XGBoost",
      "Hugging Face",
      "OpenCV",
    ],
  },
  {
    id: "data-db",
    title: "Data & Databases",
    skills: [
      "Apache Spark",
      "Pandas",
      "NumPy",
      "SQL",
      "PostgreSQL",
      "Redis",
      "AstraDB",
      "ChromaDB",
      "MongoDB",
      "MySQL",
    ],
  },
  {
    id: "cloud-devops",
    title: "Cloud & DevOps",
    skills: [
      "AWS Bedrock",
      "AWS S3",
      "AWS SQS",
      "Docker",
      "Git",
      "CI/CD",
      "Prometheus",
      "Pytest",
      "SonarQube",
    ],
  },
];

export const projects: Project[] = [
  {
    id: "ai-in-finance",
    title: "AI in Finance",
    subtitle: "RAG-Powered Financial Assistant",
    category: "GenAI & RAG",
    description:
      "An AI-driven financial assistant built with LangFlow and Cohere LLM. Aggregates multi-source enterprise intelligence (Tracxn, CBInsights, Forrester, IDC, LinkedIn) with AstraDB and ChromaDB vector retrieval.",
    features: [
      "Embedding-based retrieval using AstraDB and ChromaDB.",
      "RAG pipeline delivering company financials, investor activity, and job trends.",
      "Real-time interactive financial Q&A interface.",
    ],
    technologies: ["LangFlow", "Cohere", "AstraDB", "ChromaDB", "RAG"],
  },
  {
    id: "ai-chat-banking",
    title: "AI Chat for Banking Transactions",
    subtitle: "Conversational Financial Statement Querying",
    category: "Agentic AI & NLP",
    description:
      "Automated bank statement analysis tool that extracts transaction data from PDFs, dynamically generates SQL queries using Google GenAI, and enables natural language interaction.",
    features: [
      "Extracts tabular transaction data from PDF bank statements via PyPDF2.",
      "Dynamically synthesizes SQL queries with Google GenAI.",
      "Interactive Gradio interface for conversational account exploration.",
    ],
    technologies: ["Python", "LangChain", "PostgreSQL", "Google GenAI", "Gradio", "PyPDF2"],
  },
  {
    id: "customer-segmentation",
    title: "Customer Segmentation in E-Commerce",
    subtitle: "RFM Behavioral Clustering",
    category: "Machine Learning",
    description:
      "Customer segmentation pipeline applied on UK retailer transactional datasets using K-Means and Hierarchical Clustering to identify high-value customer cohorts.",
    features: [
      "RFM (Recency, Frequency, Monetary) feature engineering.",
      "Clustering evaluation using Silhouette Score, Davies-Bouldin, and Calinski-Harabasz indices.",
      "Actionable customer personas to boost retention and marketing conversion.",
    ],
    technologies: ["Python", "Scikit-learn", "K-Means", "Pandas", "NumPy", "Matplotlib"],
  },
  {
    id: "brain-tumor-detection",
    title: "Brain Tumor Detection & Classification",
    subtitle: "Medical Imaging Diagnostic Assistant",
    category: "Deep Learning & CV",
    description:
      "CNN-based deep learning solution for brain tumor detection and multiclass classification using cranial MRI scans to support early clinical decision-making.",
    features: [
      "Deep Convolutional Neural Network trained on cranial MRI datasets.",
      "Multiclass tumor pathology classification with high detection accuracy.",
      "Image preprocessing and data augmentation via OpenCV.",
    ],
    technologies: ["Python", "TensorFlow", "CNN", "Deep Learning", "Image Processing"],
  },
  {
    id: "walmart-sales-forecasting",
    title: "Walmart Sales Forecasting",
    subtitle: "Predictive Retail Demand Modeling",
    category: "Machine Learning",
    description:
      "Predictive machine learning model comparing Linear Regression and XGBoost to forecast store- and department-level demand taking into account holiday markdowns and seasonality.",
    features: [
      "Feature engineering with lag variables, economic indices, and markdowns.",
      "XGBoost achieved superior accuracy with minimized RMSE and WMAE.",
      "Supports strategic inventory planning and demand scheduling.",
    ],
    technologies: ["Python", "Machine Learning", "XGBoost", "Scikit-learn", "Pandas"],
  },
];

export const educationList: EducationItem[] = [
  {
    degree: "M.Sc. – Data Science & Artificial Intelligence",
    field: "Data Science & Artificial Intelligence",
    institution: "Symbiosis International University, Pune",
    duration: "2023 – 2025",
    badge: "Master's Degree",
  },
  {
    degree: "B.Sc. – Physics, Chemistry & Mathematics",
    field: "Physics, Chemistry & Mathematics",
    institution: "Savitribai Phule Pune University",
    duration: "2019 – 2022",
    badge: "Bachelor's Degree",
  },
  {
    degree: "12th – Physics, Chemistry & Mathematics",
    field: "Higher Secondary (PCM)",
    institution: "Vidya Pratishthan, Baramati",
    duration: "2017 – 2019",
    badge: "HSC",
  },
  {
    degree: "10th – Science",
    field: "Secondary School Certificate",
    institution: "SNVS & Junior College",
    duration: "2011 – 2017",
    badge: "SSC",
  },
];

export const certifications: CertificationItem[] = [
  {
    title: "Computer Vision with Python",
    issuer: "Udemy",
    highlight: "Image processing, OpenCV & neural feature extractors",
  },
  {
    title: "Data Visualization with Power BI Simplified",
    issuer: "Udemy",
    highlight: "DAX calculations & interactive business dashboards",
  },
  {
    title: "AIML for GeoData Analysis",
    issuer: "IIRS / ISRO",
    highlight: "Satellite data modeling & spatial machine learning",
  },
];
