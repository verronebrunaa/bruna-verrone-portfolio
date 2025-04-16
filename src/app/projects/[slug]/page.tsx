import projectsData from "@/app/data/projects";
import { notFound } from "next/navigation";
import ProjectClient from "@/components/sections/Project";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface Project {
  id: number;
  slug: string;
  title: string;
  description: string;
  gitHubLink?: string;
  liveLink?: string;
  image?: string;
  images?: (string | { src: string; alt?: string })[];
}

export const dynamicParams = false;

export function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug
  }));
}

// Corrigido: Adicionado async/await mesmo para dados locais
export async function generateMetadata({ params }: { params: { slug: string } }) {
  // Adicionado await para compatibilidade com Next.js 15
  const { slug } = await Promise.resolve(params);
  const project = projectsData.find((p) => p.slug === slug);

  return {
    title: project?.title ?? "Projeto não encontrado",
    description: project?.description,
  };
}

export default async function ProjectPage({ params }: { params: { slug: string } }) {
  const { slug } = await Promise.resolve(params);
  const project = projectsData.find((p) => p.slug === slug);
  
  if (!project) {
    notFound();
  }

  const normalizeImage = (img: string | { src: string; alt?: string }) => {
    return typeof img === 'string' 
      ? { src: img, alt: project.title } 
      : { ...img, alt: img.alt ?? project.title };
  };

  const projectImages = project.images
    ? project.images.map(normalizeImage)
    : project.image
    ? [normalizeImage(project.image)]
    : [];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <ProjectClient
        project={{
          ...project,
          images: projectImages,
          hasGitHubLink: !!project.gitHubLink,
          hasLiveLink: !!project.liveLink,
        }}
      />
      <Footer />
    </div>
  );
}