export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  description: string;
  features: string[];
  technologies: string[];
  metrics?: string;
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

export interface SkillGroup {
  title: string;
  skills: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  location?: string;
  duration: string;
  badge?: string;
}

export interface CertificationItem {
  title: string;
  issuer: string;
  highlight?: string;
}
