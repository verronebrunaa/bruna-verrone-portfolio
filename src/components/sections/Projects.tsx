"use client";

import { useEffect, useRef } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { projectTranslations } from "@/data/translations";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  const { language } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  const projects = projectTranslations[language];
  const featuredProjects = [
    ...projects.filter((p) => p.category === "professional"),
    ...projects.filter((p) => p.category !== "professional"),
  ].slice(0, 3);

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      const getDistance = () => track.scrollWidth - window.innerWidth;

      if (getDistance() <= 0) return;

      const tween = gsap.to(track, {
        x: () => -getDistance(),
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${getDistance()}`,
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
          anticipatePin: 1,
          onUpdate: (self) => {
            if (progressRef.current) {
              progressRef.current.style.width = `${self.progress * 100}%`;
            }
          },
        },
      });

      cardsRef.current.forEach((card) => {
        if (!card) return;
        gsap.fromTo(
          card,
          { opacity: 0, scale: 0.9 },
          {
            opacity: 1,
            scale: 1,
            duration: 0.6,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              containerAnimation: tween,
              start: "left 80%",
              toggleActions: "play none none reverse",
            },
          },
        );
      });
    });

    mm.add("(max-width: 767px)", () => {
      cardsRef.current.forEach((card, index) => {
        if (!card) return;
        gsap.fromTo(
          card,
          { opacity: 0, x: 50 },
          {
            opacity: 1,
            x: 0,
            duration: 0.6,
            delay: index * 0.08,
            ease: "power3.out",
            scrollTrigger: {
              trigger: section,
              start: "top 20%",
              toggleActions: "play none none reverse",
            },
          },
        );
      });
    });

    ScrollTrigger.refresh();

    return () => mm.revert();
  }, [language]);

  return (
    <section ref={sectionRef} className="projects-pin-section">
      <div className="projects-pin-header">
        <h2 className="section-title">
          {language === "pt" ? "Meus Projetos" : "My Projects"}
        </h2>
      </div>

      <div className="projects-track" ref={trackRef}>
        {featuredProjects.map((project, index) => {
          const featuredImage =
            "images" in project &&
            Array.isArray(project.images) &&
            project.images.length > 0
              ? project.images[0]
              : null;

          return (
            <div key={project.id} className="project-slide">
              <div
                ref={(el) => {
                  cardsRef.current[index] = el;
                }}
                className="project-card project-feature-card"
              >
                <Link
                  href={`/projects/${project.slug}`}
                  className="project-card-link project-card-link--featured"
                  style={
                    featuredImage
                      ? { backgroundImage: `url(${featuredImage})` }
                      : undefined
                  }
                >
                  <div className="project-card-content project-card-content--featured">
                    <h3 className="project-card-title">{project.title}</h3>

                    <span className="project-view-more project-view-more--button">
                      {language === "pt" ? "Ver mais →" : "View more →"}
                    </span>
                  </div>
                </Link>
              </div>
            </div>
          );
        })}

        <div className="project-slide">
          <div
            ref={(el) => {
              cardsRef.current[featuredProjects.length] = el;
            }}
            className="project-card project-view-all-card"
          >
            <Link href="/projects" className="project-view-all-link">
              <div className="project-view-all-content">
                <h3 className="view-all-title">
                  {language === "pt" ? "Ver Todos" : "View All"}
                </h3>
                <p className="view-all-count">
                  {projects.length}{" "}
                  {language === "pt" ? "projetos" : "projects"}
                </p>
                <span className="view-all-arrow">→</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
