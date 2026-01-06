"use client";

import Link from "next/link";
import { projectTranslations } from "@/data/translations";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import { useState } from "react";
import { ProjectCategory } from "@/types/project";

export default function ProjectsPage() {
  const { t, language } = useLanguage();
  const translatedProjects = projectTranslations[language];
  const [activeFilter, setActiveFilter] = useState<ProjectCategory | 'all'>('all');
  
  const filteredProjects = activeFilter === 'all' 
    ? translatedProjects 
    : translatedProjects.filter(project => project.category === activeFilter);

  const filters: Array<{key: ProjectCategory | 'all', label: string}> = [
    { key: 'all', label: t('projects.filter.all') },
    { key: 'personal', label: t('projects.filter.personal') },
    { key: 'academic', label: t('projects.filter.academic') },
    { key: 'professional', label: t('projects.filter.professional') },
  ];
  
  return (
    <>
      <Header />
      <div className="projects-page">
        <div className="projects-container">
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

          <ul className="projects-grid">
            {filteredProjects.map((project) => {
              const translatedProject = translatedProjects.find(tp => tp.slug === project.slug);
              
              return (
                <li key={project.slug} className={`project-card category-${project.category}`}>
                  <Link
                    href={`/projects/${project.slug}`}
                    className="project-link"
                  >
                    <h2 className="project-title">
                      {translatedProject?.title || project.title}
                    </h2>
                    {(translatedProject?.description || project.description) && (
                      <p className="project-description">
                        {translatedProject?.description || project.description}
                      </p>
                    )}
                    {project.tags && project.tags.length > 0 && (
                      <div className="project-tags">
                        {project.tags.map((tag, index) => (
                          <span key={index} className="project-tag">
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>

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
