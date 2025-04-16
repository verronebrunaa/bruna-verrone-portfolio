import projectsData from "@/app/data/projects";
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

// Remova qualquer interface customizada e use esta sintaxe
export default async function ProjectPage({
  params,
}: {
  params: { id: string };
} & Record<string, never>) { // O & Record<string, never> ajuda a evitar conflitos
  const { id } = params;

  const project = projectsData.find((p) => p.slug === id);

  if (!project) {
    notFound();
  }

  const normalizeImage = (img: string | { src: string; alt?: string }) => {
    return typeof img === "string"
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