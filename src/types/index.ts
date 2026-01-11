import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";
import { ReactNode } from "react";

// Social media types
export type SocialPlatform = "GitHub" | "LinkedIn" | "X" | "Twitter" | "Instagram" | "Facebook" | "YouTube";

export type SocialLink = {
  name: SocialPlatform;
  url: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

// Contact information
export type ContactInfo = {
  email: string;
  phone?: string;
  social: ReadonlyArray<SocialLink>;
};

// Education
export type Education = {
  school: string;
  degree: string;
  start: string;
  end: string;
  description?: string;
  location?: string;
};

// Work experience
export type WorkExperience = {
  company: string;
  title: string;
  start: string;
  end: string;
  description: string;
  location?: string;
  details?: ReadonlyArray<string>;
  technologies?: ReadonlyArray<string>;
  highlights?: ReadonlyArray<string>;
};

// Qualifications
export type Qualification = {
  issuer: string;
  issuerlink: string;
  qualification: string;
  awarded: string;
  expiryDate?: string;
};

// Awards
export type Award = {
  issuer: string;
  award: string;
  awarded: string;
  what: string;
};

// Publications
export type Publication = {
  title: string;
  publisher: string;
  date: string;
  link: string;
  description?: string;
};

// Project
export type Project = {
  title: string;
  description: string;
  tags: ReadonlyArray<string>;
  link?: string;
  repoLink?: string;
  image?: string;
};

// Skills
export type Skill = string;

// Theme
export type ThemeColor = "default" | "blue" | "sepia";
export type ThemeMode = "light" | "dark" | "system";

// Timeline view mode
export type TimelineViewMode = "traditional" | "interactive";

// Resume data structure
export type ResumeData = {
  name: string;
  initials: string;
  location: string;
  locationLink?: string;
  about: string;
  summary: string;
  avatarUrl?: string;
  personalWebsiteUrl?: string;
  contact: ContactInfo;
  education: ReadonlyArray<Education>;
  qualifications: ReadonlyArray<Qualification>;
  work: ReadonlyArray<WorkExperience>;
  awards: ReadonlyArray<Award>;
  publications?: ReadonlyArray<Publication>;
  projects?: ReadonlyArray<Project>;
  skills: ReadonlyArray<Skill>;
}; 