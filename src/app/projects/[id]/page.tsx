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
  params: Promise<{ id: string }>;
} & Record<string, never>) {
  const { id } = await params;

  const project = projectTranslations.pt.find((p) => p.slug === id);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <ProjectClient
        project={{
          ...(project as Project),
          tags: [...((project as Project).tags ?? [])],
        }}
      />
      <Footer />
    </div>
  );
}
