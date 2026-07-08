"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { GrCaretNext, GrCaretPrevious } from "react-icons/gr";
import { useLanguage } from "@/contexts/LanguageContext";
import { experienceTranslations, projectTranslations } from "@/data/translations";

interface ExperienceImage {
  src: string;
  alt: string;
}

interface Experience {
  company: string;
  period: string;
  position: string;
  type: string;
  description: string;
  images?: ExperienceImage[];
  projectSlugs?: string[];
}

export default function Experience() {
  const { t, language } = useLanguage();
  const experiences = experienceTranslations[
    language
  ] as unknown as Experience[];
  const projects = projectTranslations[language];
  const [currentSlides, setCurrentSlides] = useState(experiences.map(() => 0));

  const nextSlide = (index: number) => {
    setCurrentSlides((prev) => {
      const newSlides = [...prev];
      newSlides[index] =
        newSlides[index] === (experiences[index].images?.length ?? 0) - 1
          ? 0
          : newSlides[index] + 1;
      return newSlides;
    });
  };

  const prevSlide = (index: number) => {
    setCurrentSlides((prev) => {
      const newSlides = [...prev];
      newSlides[index] =
        newSlides[index] === 0
          ? (experiences[index].images?.length ?? 0) - 1
          : newSlides[index] - 1;
      return newSlides;
    });
  };

  return (
    <section className="experience-section">
      <div className="experience-container">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">{t("experience.title")}</h2>

          {experiences.map((exp, index) => (
            <div key={index} className="experience-card">
              <div className="experience-card-header">
                <h3>{exp.company}</h3>
                <p className="data">{exp.period}</p>
                <p className="type">{exp.type}</p>
              </div>
              <p className="company">{exp.position}</p>

              <div className="experience-content-wrapper">
                <motion.div
                  className="text-content"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <p className="description">{exp.description}</p>

                  {exp.projectSlugs && exp.projectSlugs.length > 0 && (
                    <div className="experience-projects">
                      <span className="experience-projects-label">
                        {t("experience.projects")}
                      </span>
                      <div className="experience-projects-badges">
                        {exp.projectSlugs.map((slug) => {
                          const project = projects.find(
                            (p) => p.slug === slug
                          );
                          if (!project) return null;
                          return (
                            <Link
                              key={slug}
                              href={`/projects/${slug}`}
                              className="experience-project-badge"
                            >
                              {project.title}
                              <span className="experience-project-badge-arrow">
                                →
                              </span>
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </motion.div>

                {exp.images && exp.images.length > 0 && (
                  <div className="carousel-wrapper">
                    <div className="carousel-container">
                      <div
                        className="carousel-slide"
                        style={{
                          transform: `translateX(-${
                            currentSlides[index] * 100
                          }%)`,
                        }}
                      >
                        {exp.images.map(
                          (img: ExperienceImage, imgIndex: number) => (
                            <Image
                              key={imgIndex}
                              src={img.src}
                              alt={img.alt}
                              width={400}
                              height={250}
                              className="carousel-image"
                            />
                          )
                        )}
                      </div>

                      {exp.images.length > 1 && (
                        <>
                          <button
                            className="carousel-btn prev"
                            onClick={() => prevSlide(index)}
                          >
                            <GrCaretPrevious />
                          </button>
                          <button
                            className="carousel-btn next"
                            onClick={() => nextSlide(index)}
                          >
                            <GrCaretNext />
                          </button>
                        </>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
