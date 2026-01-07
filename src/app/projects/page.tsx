"use client";

import Link from "next/link";
import { projectTranslations } from "@/data/translations";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import { useState, useEffect, useRef } from "react";
import { ProjectCategory } from "@/types/project";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ProjectsPage() {
  const { t, language } = useLanguage();
  const translatedProjects = projectTranslations[language];
  const [activeFilter, setActiveFilter] = useState<ProjectCategory | 'all'>('all');
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);
  
  const filteredProjects = activeFilter === 'all' 
    ? translatedProjects 
    : translatedProjects.filter(project => project.category === activeFilter);

  const filters: Array<{key: ProjectCategory | 'all', label: string}> = [
    { key: 'all', label: t('projects.filter.all') },
    { key: 'personal', label: t('projects.filter.personal') },
    { key: 'academic', label: t('projects.filter.academic') },
    { key: 'professional', label: t('projects.filter.professional') },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      cardsRef.current.forEach((card, index) => {
        if (card) {
          gsap.from(card, {
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
            opacity: 0,
            y: 60,
            duration: 0.8,
            delay: index * 0.05,
            ease: "power3.out",
          });
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [filteredProjects]);
  
  return (
    <>
      <Header />
      <div className="projects-page" ref={sectionRef}>
        <div className="container">
          <h1 className="section-title">{t('projects.title')}</h1>
          
          <div className="project-filters">
            {filters.map((filter) => (
              <button
                key={filter.key}
                onClick={() => setActiveFilter(filter.key)}
                className={`filter-btn ${activeFilter === filter.key ? 'active' : ''}`}
              >
                {filter.label}
              </button>
            ))}
          </div>

          <div className="projects-grid">
            {filteredProjects.map((project, index) => (
              <div
                key={project.slug}
                ref={(el) => {
                  cardsRef.current[index] = el;
                }}
                className="project-card"
              >
                <Link href={`/projects/${project.slug}`} className="project-card-link">
                  {project.images && project.images.length > 0 && (
                    <div className="project-card-image-wrapper">
                      <img
                        src={project.images[0]}
                        alt={project.title}
                        className="project-card-image"
                      />
                      <div className="project-card-overlay"></div>
                    </div>
                  )}

                  <div className="project-card-content">
                    <h3 className="project-card-title">{project.title}</h3>

                    <p className="project-card-description">
                      {project.description}
                    </p>

                    {project.tags && project.tags.length > 0 && (
                      <div className="project-card-tags">
                        {project.tags.map((tag, tagIndex) => (
                          <span key={tagIndex} className="project-tag">
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}

                    <div className="project-card-footer">
                      <span className="project-category">
                        {project.category === "personal"
                          ? language === "pt"
                            ? "Pessoal"
                            : "Personal"
                          : project.category === "academic"
                          ? language === "pt"
                            ? "Acadêmico"
                            : "Academic"
                          : language === "pt"
                          ? "Profissional"
                          : "Professional"}
                      </span>

                      <span className="project-view-more">
                        {language === "pt" ? "Ver mais →" : "View more →"}
                      </span>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="no-projects">
              <p>{t('projects.noProjects')}</p>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}
