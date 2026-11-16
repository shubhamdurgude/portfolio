export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'GenAI & RAG' | 'Agentic & NLP' | 'Machine Learning' | 'Deep Learning & CV';
  description: string;
  features: string[];
  technologies: string[];
  metrics?: string;
  architectureHighlights?: string[];
  iconName?: string;
}

export interface ExperienceItem {
  id: string;
  company: string;
  position: string;
  location: string;
  duration: string;
  type: string;
  summary: string;
  contributions: string[];
  keySkills: string[];
  highlights?: { label: string; value: string }[];
}

export interface SkillCategory {
  id: string;
  title: string;
  description: string;
  icon: string;
  skills: { name: string; level?: 'Core' | 'Advanced' | 'Proficient'; highlighted?: boolean }[];
}

export interface EducationItem {
  degree: string;
  field: string;
  institution: string;
  location?: string;
  duration: string;
  badge?: string;
  description?: string;
}

export interface CertificationItem {
  title: string;
  issuer: string;
  credentialUrl?: string;
  highlight?: string;
  icon: string;
}
