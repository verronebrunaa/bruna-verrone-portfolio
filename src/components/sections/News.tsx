"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";

export default function News() {
  const { t } = useLanguage();
  
  return (
    <section className="experience-section">
      <div className="experience-container">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="publications-container"
        >
          <h2 className="section-title">{t('news.title')}</h2>

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
                <h3>{t('news.sumup.title')}</h3>
                <p>
                  {t('news.sumup.description')}
                </p>
                <div className="card-links">
                  <motion.a
                    href="https://www.sumup.com/careers/women-tech-generation-brazil/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="card-link"
                    whileHover={{ scale: 1.05 }}
                  >
                    {t('news.sumup.link')}
                  </motion.a>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="publication-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              whileHover={{ y: -5 }}
            >
              <div className="card-image">
                <Image
                  src="/assets/pictures/news/Facens-grupoIluminação.jpg"
                  width={687}
                  height={200}
                  alt="Sistema de Iluminação"
                  className="project-image"
                />
              </div>
              <div className="card-content">
                <h3>{t('news.lighting.title')}</h3>
                <p>
                  {t('news.lighting.description')}
                </p>
                <div className="card-links">
                  <motion.a
                    href="https://joins.emnuvens.com.br/joins/article/view/846/548"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="card-link"
                    whileHover={{ scale: 1.05 }}
                  >
                    {t('news.lighting.link')}
                  </motion.a>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="publication-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              whileHover={{ y: -5 }}
            >
              <div className="card-image">
                <Image
                  src="/assets/pictures/news/Facens-GrupoTijolo.jpg"
                  width={687}
                  height={200}
                  alt="Tijolo Ecológico"
                  className="project-image"
                />
              </div>
              <div className="card-content">
                <h3>{t('news.brick.title')}</h3>
                <p>
                  {t('news.brick.description')}
                </p>
                <div className="card-links">
                  <motion.a
                    href="https://joins.emnuvens.com.br/joins/article/view/290/239"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="card-link"
                    whileHover={{ scale: 1.05 }}
                  >
                    {t('news.brick.link')}
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
