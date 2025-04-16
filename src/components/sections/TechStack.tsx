import React from "react";
import { FaJava } from "react-icons/fa";
import {
  SiJavascript,
  SiTypescript,
  SiElixir,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiThreedotjs,
  SiGithub,
  SiFigma,
  SiPostman,
  SiJest,
  SiCypress,
  SiDocker,
  SiVercel,
  SiMysql,
  SiMongodb,
} from "react-icons/si";
import { PiFileCSharpDuotone } from "react-icons/pi";

const techData = {
  linguagens: [
    { name: "JavaScript", icon: SiJavascript },
    { name: "TypeScript", icon: SiTypescript },
    { name: "Java", icon: FaJava },
    { name: "C#", icon: PiFileCSharpDuotone},
    { name: "Elixir", icon: SiElixir },
  ],
  frontend: [
    { name: "React.js", icon: SiReact },
    { name: "Next.js", icon: SiNextdotjs },
    { name: "Tailwind CSS", icon: SiTailwindcss },
    { name: "Three.js", icon: SiThreedotjs },
  ],
  ferramentas: [
    { name: "Git e GitHub", icon: SiGithub },
    { name: "Figma", icon: SiFigma },
    { name: "Postman", icon: SiPostman },
    { name: "Jest", icon: SiJest },
    { name: "Cypress", icon: SiCypress },
  ],
  infra: [
    { name: "Docker", icon: SiDocker },
    { name: "Vercel", icon: SiVercel },
    { name: "MySQL", icon: SiMysql },
    { name: "MongoDB", icon: SiMongodb },
  ],
};

interface TechItemProps {
  name: string;
  icon: React.ElementType;
}

const TechItem = ({ name, icon: Icon }: TechItemProps) => (
  <div className="tech-item">
    <div className="tech-icon-container">
      <Icon className="tech-icon text-4xl" />
    </div>
    <span className="tech-name">{name}</span>
  </div>
);


interface TechCategoryProps {
  title: string;
  items: TechItemProps[];
}

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
  return (
    <section className="tech-stack-section" data-aos="fade-up">
      <h2 className="tech-stack-title">Minha Stack Tecnológica</h2>

      <div className="tech-stack-grid">
        <div className="tech-card">
          <TechCategory title="Linguagens" items={techData.linguagens} />
          <TechCategory title="Frontend" items={techData.frontend} />
        </div>

        <div className="tech-card">
          <TechCategory
            title="Ferramentas e Testes"
            items={techData.ferramentas}
          />
          <TechCategory
            title="Infraestrutura e Bancos de Dados"
            items={techData.infra}
          />
        </div>
      </div>
    </section>
  );
}
