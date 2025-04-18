"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function News() {
  return (
    <section className="experience-section">
      <div className="experience-container">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="publications-container"
        >
          <h2 className="section-title">Notícias e Publicações</h2>

          <div className="publications-grid">
            <motion.div
              className="publication-card"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <div className="card-image">
                <Image
                  src={"/assets/pictures/news/women-tech-generation-brazil-sumup.avif"}
                  width={687}
                  height={200}
                  alt={"Women in tech SumUp"}
                  className="project-image"
                />
              </div>
              <div className="card-content">
                <h3>Destaque na SumUp</h3>
                <p>
                  Fui mencionada na reportagem &quot;Women in Tech Generation
                  Brazil&quot; da SumUp, que destaca a importância da
                  diversidade e inclusão na tecnologia.
                </p>
                <div className="card-links">
                  <motion.a
                    href="https://www.sumup.com/careers/women-tech-generation-brazil/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="card-link"
                    whileHover={{ scale: 1.05 }}
                  >
                    Leia a reportagem
                  </motion.a>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="publication-card"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <div className="card-image">
                <Image
                  src={"/assets/pictures/news/Facens-grupoIluminação.jpg"}
                  width={687}
                  height={200}
                  alt={"Women in tech SumUp"}
                  className="project-image"
                />
              </div>
              <div className="card-content">
                <h3>Projeto Acadêmico Publicado</h3>
                <p>
                  Sistema de Manutenção de Iluminações Públicas publicado na
                  revista Joins.
                </p>
                <div className="card-links">
                  <motion.a
                    href="https://joins.emnuvens.com.br/joins/article/view/846/548"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="card-link"
                    whileHover={{ scale: 1.05 }}
                  >
                    Veja o artigo
                  </motion.a>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="publication-card"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <div className="card-image">
                <Image
                  src={"/assets/pictures/news/Facens-GrupoTijolo.jpg"}
                  width={687}
                  height={200}
                  alt={"Facens - Grupo Tijolo Ecológico"}
                  className="project-image"
                />
              </div>
              <div className="card-content">
                <h3>Projeto Acadêmico Publicado</h3>
                <p>
                  Tijolo ecológico a base de fibra de coco para reaproveitamento
                  de resíduos sólidos.
                </p>
                <div className="card-links">
                  <motion.a
                    href="https://joins.emnuvens.com.br/joins/article/view/290/239"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="card-link"
                    whileHover={{ scale: 1.05 }}
                  >
                    Veja o artigo
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
