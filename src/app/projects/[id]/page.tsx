import { projectTranslations } from "@/data/translations";
import { notFound } from "next/navigation";
import ProjectClient from "@/components/sections/Project";
import Header from "@/components/layout/Header";
import { Project } from "@/types/project";
import Footer from "@/components/layout/Footer";

export const dynamicParams = true;

export function generateStaticParams() {
  return projectTranslations.pt.map((project) => ({
    id: project.slug,
  }));
}

export default async function ProjectPage({
  params,
}: {
  params: { id: string };
} & Record<string, never>) {
  const { id } = params;

  const project = projectTranslations.pt.find((p) => p.slug === id);

  if (!project) {
    notFound();
  }

  const normalizeImage = (img: string | { src: string; alt?: string }) => {
    return typeof img === "string"
      ? img 
      : { ...img, alt: img.alt ?? project.title };
  };
  
  const projectImages = project.images?.map(normalizeImage) || [];

  return ( 
    <div className="min-h-screen flex flex-col">
      <Header />
      <ProjectClient project={{ ...(project as Project), tags: [...project.tags], images: projectImages }} />
      <Footer />
    </div>
  );
}
