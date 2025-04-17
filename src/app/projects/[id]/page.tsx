import { projectsData } from "@/data/projects";
import { notFound } from "next/navigation";
import ProjectClient from "@/components/sections/Project";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const dynamicParams = true;

export function generateStaticParams() {
  return projectsData.map((project) => ({
    id: project.slug,
  }));
}

export default async function ProjectPage({
  params,
}: {
  params: { id: string };
} & Record<string, never>) {
  const { id } = params;

  const project = projectsData.find((p) => p.slug === id);

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
      <ProjectClient project={{ ...project, images: projectImages }} />
      <Footer />
    </div>
  );
}
