export interface Project {
  id: string;
  number: string;
  title: string;
  displayName?: string;
  tagline: string;
  description: string;
  category: 'AI / ML' | 'Full-Stack' | 'Embedded / ECE' | 'Computer Vision' | 'System Architecture';
  featured: boolean;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  metrics?: string[];
  architectureHighlights?: string[];
}

export interface Experience {
  id: string;
  company: string;
  division?: string;
  position: string;
  duration: string;
  period: string;
  location?: string;
  description: string;
  keyResponsibilities: string[];
  project?: {
    name: string;
    description: string;
    liveUrl?: string;
  };
}

export interface EducationInfo {
  institution: string;
  degree: string;
  major: string;
  year: string;
  expectedGraduation: string;
  cgpa: string;
  academicStatus: string;
  location: string;
  coreFocus: string[];
}

export interface SkillCategory {
  title: string;
  description: string;
  iconName: string;
  skills: {
    name: string;
    highlight?: boolean;
    level?: string;
  }[];
}

export interface TimelineEvent {
  year: string;
  month?: string;
  title: string;
  type: 'Education' | 'Internship' | 'Hackathon' | 'Patent' | 'Project';
  subtitle?: string;
  description?: string;
  badge?: string;
}

export interface Achievement {
  id: string;
  title: string;
  category: string;
  organization: string;
  year: string;
  summary: string;
  details?: string;
  isPatent?: boolean;
  featured?: boolean;
}
