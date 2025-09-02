"use client";

import { useState } from "react";
import { aboutData } from "@/data/about"; 
import Image from "next/image";
import { GrCaretNext, GrCaretPrevious } from "react-icons/gr";
import { motion } from "framer-motion";

export default function About() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide(currentSlide === aboutData.images.length - 1 ? 0 : currentSlide + 1);
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? aboutData.images.length - 1 : currentSlide - 1);
  };

  return (
    <section className="about">
      <div className="container">
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
        >
          <h2 className="about-title">{aboutData.title}</h2>
          <p className="about-description">
            {aboutData.description}
            <a
              href={aboutData.freelanceLink.url}
              target="_blank"
              rel="noopener noreferrer"
              className="freelance-link"
            >
              {aboutData.freelanceLink.text}
            </a>.
          </p>

          {aboutData.images && aboutData.images.length > 0 && (
            <div className="about-carousel-wrapper">
              <div className="about-carousel-container">
                <div
                  className="about-carousel-slide"
                  style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                  {aboutData.images.map((img) => (
                    <Image
                      key={img.src}
                      src={img.src}
                      alt={img.alt}
                      width={500}
                      height={500}
                      className="about-carousel-image"
                    />
                  ))}
                </div>

                {aboutData.images.length > 1 && (
                  <>
                    <button className="carousel-btn prev" onClick={prevSlide}>
                      <GrCaretPrevious />
                    </button>
                    <button className="carousel-btn next" onClick={nextSlide}>
                      <GrCaretNext />
                    </button>
                  </>
                )}
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}