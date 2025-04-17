export interface ExperienceImage {
  src: string;
  alt: string;
}

export interface Experience {
  company: string;
  period: string;
  position: string;
  description: string;
  images: ExperienceImage[];
}
