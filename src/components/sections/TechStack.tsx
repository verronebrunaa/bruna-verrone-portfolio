"use client";

import React, { useEffect, useRef } from "react";
import { techData } from "@/data/techData";
import { TechCategoryProps, TechItemProps } from "@/types/techData";
import { useLanguage } from "@/contexts/LanguageContext";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const TechItem = ({ name, icon: Icon }: TechItemProps) => (
  <div className="tech-item">
    <div className="tech-icon-container">
      <Icon className="tech-icon text-4xl" />
    </div>
    <span className="tech-name">{name}</span>
  </div>
);

const TechCategory = ({ title, items }: TechCategoryProps) => (
  <div className="tech-category">
    <h3 className="tech-category-title">{title}</h3>
    <div className="tech-items-grid">
      {items.map((item) => (
        <TechItem key={item.name} {...item} />
      ))}
    </div>
  </div>
);

export default function TechStack() {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".tech-card",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.15,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.fromTo(
        ".tech-item",
        { scale: 0, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          stagger: { each: 0.04, from: "random" },
          duration: 0.5,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="tech-stack-section" ref={sectionRef}>
      <h2 className="tech-stack-title">
        {t('tech.title')}
      </h2>
      <div className="tech-stack-grid">
        <div className="tech-card">
          <TechCategory title={t('tech.languages')} items={techData.linguagens} />
          <TechCategory title={t('tech.frontend')} items={techData.frontend} />
        </div>

        <div className="tech-card">
          <TechCategory
            title={t('tech.tools')}
            items={techData.ferramentas}
          />
          <TechCategory
            title={t('tech.infra')}
            items={techData.infra}
          />
        </div>
      </div>
    </section>
  );
}
