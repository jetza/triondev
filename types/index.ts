export interface Project {
  id: string;
  title: string;
  description: string;
  type: "web" | "app" | "landing";
  images: string[];
  clientQuote: string;
  clientName: string;
  url?: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export interface Package {
  id: string;
  name: string;
  price: string;
  isFixed: boolean;
  features: string[];
  popular?: boolean;
}

export interface ProcessStep {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  projectType: "landing" | "website" | "app" | "other";
  hasExistingWebsite: boolean;
  hasLogo: boolean;
  hasContent: boolean;
  numberOfPages: string;
  languages: string[];
  needsAdmin: boolean;
  deadline: string;
  budget: string;
  needsSEO: boolean;
  needsMaintenance: boolean;
  description: string;
  acceptsPrivacy: boolean;
}

export type Language = "sr" | "en";
