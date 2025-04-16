import React from "react";
import Image from "next/image";

const techData = {
  linguagens: [
    { name: "JavaScript", logo: "/assets/icons/javascript.svg" },
    { name: "TypeScript", logo: "/assets/icons/typescript.svg" },
    { name: "Java", logo: "/assets/icons/java.svg" },
    { name: "C#", logo: "/assets/icons/c-sharp.svg" },
    { name: "Elixir", logo: "/assets/icons/elixir.svg" },
  ],
  frontend: [
    { name: "React.js", logo: "/assets/icons/react.svg" },
    { name: "Next.js", logo: "/assets/icons/nextjs.svg" },
    { name: "Tailwind CSS", logo: "/assets/icons/tailwind.svg" },
    { name: "Three.js", logo: "/assets/icons/threejs.svg" },
  ],
  ferramentas: [
    { name: "Git e GitHub", logo: "/assets/icons/GitHub.svg" },
    { name: "Figma", logo: "/assets/icons/figma.svg" },
    { name: "Postman", logo: "/assets/icons/postman.svg" },
    { name: "Jest", logo: "/assets/icons/jest.svg" },
    { name: "Cypress", logo: "/assets/icons/cypress.svg" },
  ],
  infra: [
    { name: "Docker", logo: "/assets/icons/docker.svg" },
    { name: "Vercel", logo: "/assets/icons/vercel.svg" },
    { name: "MySQL", logo: "/assets/icons/mysql.svg" },
    { name: "MongoDB", logo: "/assets/icons/mongodb.svg" },
  ],
};

interface TechItemProps {
  name: string;
  logo: string;
}

const TechItem = ({ name, logo }: TechItemProps) => (
  <div className="tech-item">
    <div className="tech-icon-container">
      <Image
        src={logo}
        alt={`Logo ${name}`}
        width={48}
        height={48}
        className="tech-icon"
        loading="lazy"
      />
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
