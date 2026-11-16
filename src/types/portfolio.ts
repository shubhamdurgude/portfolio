export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  description: string;
  features: string[];
  technologies: string[];
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
}

export interface SkillCategory {
  id: string;
  title: string;
  skills: string[];
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
  highlight: string;
}
