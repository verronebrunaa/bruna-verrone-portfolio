export type ProjectCategory = 'personal' | 'academic' | 'professional';

export interface Project {
  id: number;
  slug: string;
  title: string;
  description: string;
  gitHubLink: string;
  liveLink?: string;
  extraLinks?: { url: string; label: string }[];
  images?: Array<string | { src: string; alt?: string }>;
  tags?: string[];
  category: ProjectCategory;
}
