"use client";

import ImageCarousel from "@/components/ui/ImageCarousel";
import { Project } from "@/types/project";
import { useLanguage } from "@/contexts/LanguageContext";
import { projectTranslations } from "@/data/translations";

export interface ImageCarouselProps {
  imageNames: string[];
  folder: string;
}

export default function ProjectClient({ project }: { readonly project: Project }) {
  const { t, language } = useLanguage();
  
  if (!project) {
    return null;
  }

  const translatedProjects = projectTranslations[language];
  const translatedProject = translatedProjects.find(tp => tp.slug === project.slug);

  return (
    <div className="project-page flex-1">
      <div className="project-container">
        <h1 className="project-title-slug">
          {translatedProject?.title || project.title}
        </h1>

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

        <p className="project-description-slug">
          {translatedProject?.description || project.description}
        </p>

        {(project.gitHubLink || project.liveLink) && (
          <div className="project-links">
            {project.gitHubLink && (
              <a
                href={project.gitHubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link github"
              >
                {t('projects.github')}
              </a>
            )}
            {project.liveLink && (
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link live"
              >
                {t('projects.live')}
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
