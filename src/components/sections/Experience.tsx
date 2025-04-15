"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { GrCaretNext, GrCaretPrevious } from "react-icons/gr";

export default function Experience() {
  const experiences = [
    {
      company: "Codako | Grupo Amazonas",
      period: "04/2022 - 01/2024",
      position: "Desenvolvedora Front-end",
      description:
        "A Codako é um projeto de Startup do Grupo Amazonas, atuei como desenvolvedora front-end contribuindo para o desenvolvimento de soluções inovadoras e eficientes. Minha experiência inclui a criação de interfaces de usuário responsivas e intuitivas, utilizando tecnologias modernas como React e Next.js. Na Codako pude participar da entrega de projetos como: Consulta de Placas, desenvolvimento de um CMS, Site das Marcas e do Grupo Amazonas. Além disso, participei ativamente de reuniões de equipe e colaborei com a organização do inicio do projeto Codako.",
      images: [
        { src: "/assets/pictures/experience/Codako-AWS.jpg", alt: "Equipe Codako na AWS 2024" },
      ],
    },
    {
      company: "Sumup Bank",
      period: "04/2022 - 01/2024",
      position: "Desenvolvedora Generation",
      description:
        "Após concluir o bootcamp da Generation, fui uma das 11 pessoas da minha turma selecionadas para integrar o time de Engenharia e Tecnologia da SumUp. Durante meu tempo na empresa, desenvolvi habilidades no front-end e tive a oportunidade de aprender um pouco sobre back-end com Elixir. Participei de palestras, de dois hackathons internos e da HackWeek — uma imersão de uma semana realizada em 2023, na Bulgária.",
      images: [
        {
          src: "/assets/pictures/experience/Sumup-Apresentação.jpg",
          alt: "Apresentação na SumUp",
        },
        {
          src: "/assets/pictures/experience/Hackweek2023.jpg",
          alt: "HackWeek na Bulgária",
        },
        {
          src: "/assets/pictures/experience/HackweekProject.jpg",
          alt: "Projeto HackWeek 2023",
        },
        {
          src: "/assets/pictures/experience/SumupBank.jpg",
          alt: "Equipe Sumup Bank",
        },
      ],
    },
  ];

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
