"use client";

import React from "react";
import { techData } from "@/data/techData";
import { TechCategoryProps, TechItemProps } from "@/types/techData";
import { useLanguage } from "@/contexts/LanguageContext";

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

  return (
    <section className="tech-stack-section" data-aos="fade-up">
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
