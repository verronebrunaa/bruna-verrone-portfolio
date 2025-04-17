"use client";

import { experiences } from "@/data/experience";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { GrCaretNext, GrCaretPrevious } from "react-icons/gr";

export default function Experience() {
  const [currentSlides, setCurrentSlides] = useState(experiences.map(() => 0));

  const nextSlide = (index: number) => {
    setCurrentSlides((prev) => {
      const newSlides = [...prev];
      newSlides[index] =
        newSlides[index] === experiences[index].images.length - 1
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
          ? experiences[index].images.length - 1
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
          <h2 className="section-title">Experiência Profissional</h2>

          {experiences.map((exp, index) => (
            <div key={index} className="experience-card">
              <div className="experience-card-header">
                <h3>{exp.company}</h3>
                <p className="data">{exp.period}</p>
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
                </motion.div>

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
                      {exp.images.map((img, imgIndex) => (
                        <Image
                          key={imgIndex}
                          src={img.src}
                          alt={img.alt}
                          width={400}
                          height={250}
                          className="carousel-image"
                        />
                      ))}
                    </div>

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
                  </div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
