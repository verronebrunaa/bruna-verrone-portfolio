"use client";

import { useEffect, useRef } from "react";
import { FaWhatsapp } from "react-icons/fa";
import TechStack from "./TechStack";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { useLanguage } from "@/contexts/LanguageContext";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

export default function Hero() {
  const { t, language } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const avatarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const split = new SplitText(titleRef.current, { type: "chars" });

      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(
        split.chars,
        { y: 70, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.025, duration: 0.8 }
      )
        .fromTo(
          ".hero-subtitle",
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.5 },
          "-=0.4"
        )
        .fromTo(
          ".hero-description",
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, stagger: 0.15, duration: 0.6 },
          "-=0.2"
        )
        .fromTo(
          ".hero-whatsapp-button",
          { opacity: 0, scale: 0.8 },
          { opacity: 1, scale: 1, duration: 0.5, ease: "back.out(1.7)" },
          "-=0.2"
        )
        .fromTo(
          imageContainerRef.current,
          { opacity: 0, scale: 0.85, x: 40 },
          { opacity: 1, scale: 1, x: 0, duration: 0.8 },
          "-=1"
        );

      // Flutuação contínua do avatar
      gsap.to(avatarRef.current, {
        y: -14,
        duration: 2.4,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
      });

      // Parallax ao rolar: imagem desce mais devagar, texto esvanece
      gsap.to(imageContainerRef.current, {
        y: 100,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      gsap.to(".hero-content", {
        y: 60,
        opacity: 0.25,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "60% top",
          scrub: true,
        },
      });

      return () => split.revert();
    }, sectionRef);

    return () => ctx.revert();
  }, [language]);

  return (
    <section className="hero-section" ref={sectionRef}>
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title" ref={titleRef}>
            {t("hero.greeting")}
            <br />
            <span style={{ color: "#9333ea" }}>{t("hero.name")}</span>
          </h1>
          <TypeAnimation
            sequence={
              language === "en"
                ? [
                    "Full Stack Developer",
                    2000,
                    "focused on Front-end",
                    2000,
                  ]
                : [
                    "Desenvolvedora Full Stack",
                    2000,
                    "com foco em Front-end",
                    2000,
                  ]
            }
            wrapper="span"
            className="hero-subtitle"
            repeat={Infinity}
            key={language} // força re-render quando muda idioma
          />
          <p className="hero-description">{t("hero.description1")}</p>
          <p className="hero-description">{t("hero.description2")}</p>
          <div className="hero-actions">
            <a
              href="https://wa.me/+5511941779929"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-whatsapp-button"
            >
              <FaWhatsapp className="hero-whatsapp-icon" size={20} />
              {t("hero.whatsapp")}
            </a>
          </div>
        </div>

        <div className="hero-image-container" ref={imageContainerRef}>
          <div className="hero-avatar" ref={avatarRef}>
            <div className="hero-avatar-placeholder">
              <Image
                src="/assets/pictures/BrunaVerrone.jpg"
                alt="Bruna Verrone"
                width={400}
                height={600}
                className="hero-avatar-image"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="hero-tech-stack">
        <TechStack />
      </div>
    </section>
  );
}
