"use client";

import ImageCarousel from "@/components/ui/ImageCarousel";
import { Project } from "@/types/project";

export interface ImageCarouselProps {
  imageNames: string[];
  folder: string;
}

export default function ProjectClient({ project }: { readonly project: Project }) {
  if (!project) {
    return null;
  }
  return (
    <div className="project-page flex-1">
      <div className="project-container">
        <h1 className="project-title-slug">{project.title}</h1>

        {project.images && project.images.length > 0 && (
          <div className="project-media-container">
            <ImageCarousel
              images={project.images.map((image) => ({
                src: image,
                alt: image,
              }))}
              showControls={true}
              autoPlay={false}
              interval={3000}
            />
          </div>
        )}

        <p className="project-description-slug">{project.description}</p>

        {(project.gitHubLink || project.liveLink) && (
          <div className="project-links">
            {project.gitHubLink && (
              <a
                href={project.gitHubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link github"
              >
                Ver no GitHub
              </a>
            )}
            {project.liveLink && (
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link live"
              >
                Ver Projeto Online
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
