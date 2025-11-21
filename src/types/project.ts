export type ProjectCategory = 'personal' | 'academic' | 'professional';

export interface Project {
    id: number;
    slug: string;
    title: string;
    description: string;
    gitHubLink: string;
    liveLink?: string;
    images?: string[];
    tags?: string[];
    category: ProjectCategory;
  }
  