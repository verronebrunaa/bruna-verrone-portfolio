export interface AboutImage {
  src: string;
  alt: string;
}

export interface AboutData {
  title: string;
  description: string;
  freelanceLink: {
    url: string;
    text: string;
  };
  images: AboutImage[];
}