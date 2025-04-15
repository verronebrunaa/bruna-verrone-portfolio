import React from "react";
import Image from "next/image";

const tecnologias = [
  { name: "ReactJS", logo: "/assets/icons/react.svg" },
  { name: "Next.js", logo: "/assets/icons/nextjs.svg" },
  { name: "Tailwind CSS", logo: "/assets/icons/tailwind.svg" },
];

const linguagens = [
  { name: "JavaScript", logo: "/assets/icons/javascript.svg" },
  { name: "TypeScript", logo: "/assets/icons/typescript.svg" },
  { name: "Java", logo: "/assets/icons/java.svg" },
  { name: "C#", logo: "/assets/icons/c-sharp.svg" },
];

export default function TechStack() {
  return (
    <section className="tech-stack-section" data-aos="fade-up">
      <div className="tech-stack-grid">
        <div className="tech-card">
          <h2 className="tech-card-title">Tecnologias</h2>
          <div className="tech-items-grid">
            {tecnologias.map((tech) => (
              <div key={tech.name} className="tech-item">
                <div className="tech-icon-container">
                  <Image
                    src={tech.logo}
                    alt={tech.name}
                    width={48}
                    height={48}
                    className="tech-icon"
                  />
                </div>
                <span className="tech-name">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="tech-card">
          <h2 className="tech-card-title">Linguagens</h2>
          <div className="lang-items-grid">
            {linguagens.map((lang) => (
              <div key={lang.name} className="tech-item">
                <div className="tech-icon-container">
                  <Image
                    src={lang.logo}
                    alt={lang.name}
                    width={48}
                    height={48}
                    className="tech-icon"
                  />
                </div>
                <span className="tech-name">{lang.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}