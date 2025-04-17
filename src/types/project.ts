export interface Project {
    id: number;
    slug: string;
    title: string;
    description: string;
    gitHubLink: string;
    liveLink?: string;
    images?: string[];
  }
  