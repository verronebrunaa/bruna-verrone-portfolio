import projectsData from "@/app/data/projects";
import { notFound } from "next/navigation";
import ProjectClient from "@/components/sections/Project";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export async function generateStaticParams() {
  return projectsData.map((project) => ({ slug: project.slug }));
}

interface Params {
  slug: string;
}

export default function ProjectPage({ params }: { params: Params }) {
  const project = projectsData.find((proj) => proj.slug === params.slug);
  if (!project) return notFound();

  const projectImages = project.images 
    ? project.images.map(img => typeof img === 'string' ? { src: img, alt: project.title } : img)
    : project.image 
    ? [{ src: project.image, alt: project.title }]
    : [];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <ProjectClient 
        project={{
          ...project,
          images: projectImages,
          hasGitHubLink: !!project.gitHubLink,
          hasLiveLink: !!project.liveLink
        }}
      />
      <Footer />
    </div>
  );
}