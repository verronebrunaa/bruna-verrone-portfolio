import projectsData from "@/app/data/projects";
import { notFound } from "next/navigation";
import Image from "next/image";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";

export async function generateStaticParams() {
  return projectsData.map((project) => ({ slug: project.slug }));
}

interface Params {
  slug: string;
}

export default function ProjectPage({ params }: Readonly<{ params: Params }>) {
  const project = projectsData.find((proj) => proj.slug === params.slug);

  if (!project) return notFound();

  return (
    <>
      <Header />
      <div className="project-page">
        <div className="project-container">
          <h1 className="project-title-slug">{project.title}</h1>

          {project.image && (
            <div className="project-image-container">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="project-image"
              />
            </div>
          )}

          <p className="project-description-slug">{project.description}</p>

          {project.gitHubLink && (
            <a
              href={project.gitHubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="project-github-link"
            >
              Ver no GitHub
            </a>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}
