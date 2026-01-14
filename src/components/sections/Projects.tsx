"use client";

import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { projectTranslations } from "@/data/translations";
import gsap from "gsap";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Projects() {
  const { language } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const projects = projectTranslations[language];
  const featuredProjects = projects.slice(0, 8);

  const getCategoryLabel = (category: string) => {
    if (category === "personal") {
      return language === "pt" ? "Pessoal" : "Personal";
    }
    if (category === "academic") {
      return language === "pt" ? "Acadêmico" : "Academic";
    }
    return language === "pt" ? "Profissional" : "Professional";
  };

  const checkScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400;
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      cardsRef.current.forEach((card, index) => {
        if (card) {
          gsap.from(card, {
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
            opacity: 0,
            x: 50,
            duration: 0.6,
            delay: index * 0.08,
            ease: "power3.out",
          });
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [language]);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      checkScroll();
      container.addEventListener("scroll", checkScroll);
      return () => container.removeEventListener("scroll", checkScroll);
    }
  }, []);

  return (
    <section ref={sectionRef} className="projects-horizontal-section">
      <div className="projects-horizontal-wrapper">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="projects-horizontal-header"
        >
          <h2 className="section-title">
            {language === "pt" ? "Meus Projetos" : "My Projects"}
          </h2>
        </motion.div>

        <div className="projects-scroll-wrapper">
          {canScrollLeft && (
            <button
              onClick={() => scroll("left")}
              className="scroll-button scroll-button-left"
              aria-label="Scroll left"
            >
              ←
            </button>
          )}

          <div 
            ref={scrollContainerRef} 
            className="projects-horizontal-container"
          >
            <div className="projects-horizontal-track">
              {featuredProjects.map((project, index) => (
                <div
                  key={project.id}
                  ref={(el) => {
                    cardsRef.current[index] = el;
                  }}
                  className="project-horizontal-card"
                >
                  <Link href={`/projects/${project.slug}`} className="project-card-link">
                    {'images' in project && project.images?.length && project.images.length > 0 && (
                      <div className="project-horizontal-image-wrapper">
                        <Image
                          src={project.images[0]}
                          alt={project.title}
                          className="project-horizontal-image"
                          width={400}
                          height={300}
                          loading="lazy"
                        />
                        <div className="project-card-overlay"></div>
                      </div>
                    )}

                    <div className="project-horizontal-content">
                      <h3 className="project-horizontal-title">{project.title}</h3>

                      <p className="project-horizontal-description">
                        {project.description}
                      </p>

                      {"tags" in project && Array.isArray(project.tags) && project.tags.length > 0 && (
                        <div className="project-card-tags">
                          {project.tags.slice(0, 3).map((tag) => (
                            <span key={tag} className="project-tag">
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}

                      <div className="project-horizontal-footer">
                        {'category' in project && (
                          <span className="project-category">
                            {getCategoryLabel(project.category)}
                          </span>
                        )}
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
              
              <div className="project-horizontal-card project-view-all-card">
                <Link href="/projects" className="project-view-all-link">
                  <div className="project-view-all-content">
                    <h3 className="view-all-title">
                      {language === "pt" ? "Ver Todos" : "View All"}
                    </h3>
                    <p className="view-all-count">
                      {projects.length} {language === "pt" ? "projetos" : "projects"}
                    </p>
                    <span className="view-all-arrow">→</span>
                  </div>
                </Link>
              </div>
            </div>
          </div>

          {canScrollRight && (
            <button
              onClick={() => scroll("right")}
              className="scroll-button scroll-button-right"
              aria-label="Scroll right"
            >
              →
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
