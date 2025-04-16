"use client";

import { useState } from "react";
import Image from "next/image";
import { GrCaretNext, GrCaretPrevious } from "react-icons/gr";

interface ProjectImage {
  src: string;
  alt: string;
}

interface ProjectProps {
  project: {
    slug: string;
    title: string;
    description: string;
    gitHubLink?: string;
    liveLink?: string;
    images: ProjectImage[];
    hasGitHubLink: boolean;
    hasLiveLink: boolean;

  };
}

export default function ProjectClient({ project }: ProjectProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const hasMultipleImages = project.images.length > 1;

  const nextSlide = () => {
    setCurrentSlide((prev) =>
      prev === project.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? project.images.length - 1 : prev - 1
    );
  };

  return (
    <div className="project-page flex-1">
      <div className="project-container">
        <h1 className="project-title-slug">{project.title}</h1>

        {/* Seção de mídia */}
        {project.images.length > 0 && (
          <div className="project-media-container">
            {hasMultipleImages ? (
              <div className="project-carousel">
                <div
                  className="carousel-inner"
                  style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                  {project.images.map((img, index) => (
                    <div key={index} className="carousel-item">
                      <Image
                        src={img.src}
                        alt={img.alt}
                        fill
                        className="project-image"
                        priority={index === 0}
                      />
                    </div>
                  ))}
                </div>
                <button className="carousel-control prev" onClick={prevSlide}>
                  <GrCaretPrevious />
                </button>
                <button className="carousel-control next" onClick={nextSlide}>
                  <GrCaretNext />
                </button>
              </div>
            ) : (
              <div className="project-image-container">
                <Image
                  src={project.images[0].src}
                  alt={project.images[0].alt}
                  fill
                  className="project-image"
                  priority
                />
              </div>
            )}
          </div>
        )}

        <p className="project-description-slug">{project.description}</p>

        {(project.hasGitHubLink || project.hasLiveLink) && (
          <div className="project-links">
            {project.hasGitHubLink && (
              <a
                href={project.gitHubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link github"
              >
                Ver no GitHub
              </a>
            )}
            {project.hasLiveLink && (
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
