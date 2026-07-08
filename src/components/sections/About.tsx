"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { GrCaretNext, GrCaretPrevious } from "react-icons/gr";
import { useLanguage } from "@/contexts/LanguageContext";
import { aboutTranslations } from "@/data/translations";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { t, language } = useLanguage();
  const aboutContent = aboutTranslations[language];
  const sectionRef = useRef<HTMLElement>(null);

  const nextSlide = () => {
    setCurrentSlide(
      currentSlide === aboutContent.images.length - 1 ? 0 : currentSlide + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide(
      currentSlide === 0 ? aboutContent.images.length - 1 : currentSlide - 1
    );
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".about-title",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.fromTo(
        ".about-carousel-wrapper",
        { x: -70, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.fromTo(
        ".about-description",
        { x: 70, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Parallax sutil na foto enquanto a seção atravessa a tela
      gsap.fromTo(
        ".about-carousel-container",
        { y: 40 },
        {
          y: -40,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, [language]);

  return (
    <section className="about" ref={sectionRef}>
      <div className="container">
        <h2 className="about-title">{t("about.title")}</h2>

        <div className="about-content-wrapper">
          {aboutContent.images && aboutContent.images.length > 0 && (
            <div className="about-carousel-wrapper">
              <div className="about-carousel-container">
                <div
                  className="about-carousel-slide"
                  style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                  {aboutContent.images.map((img) => (
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

                {aboutContent.images.length > 1 && (
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

          <p className="about-description">
            {aboutContent.description}
            <a
              href={aboutContent.freelanceLink.url}
              target="_blank"
              rel="noopener noreferrer"
              className="freelance-link"
            >
              {aboutContent.freelanceLink.text}
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
