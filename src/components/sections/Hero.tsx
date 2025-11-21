"use client";

import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import TechStack from "./TechStack";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Hero() {
  const { t, language } = useLanguage();

  return (
    <section className="hero-section">
      <div className="hero-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="hero-content"
        >
          <h1 className="hero-title">
            {t('hero.greeting')}
            <br />
            <span style={{ color: "#9333ea" }}>{t('hero.name')}</span>
          </h1>
          <TypeAnimation
            sequence={
              language === 'en' 
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
          <p className="hero-description">
            {t('hero.description1')}
          </p>
          <p className="hero-description">
            {t('hero.description2')}
          </p>
          <div className="hero-actions">
            <a
              href="https://wa.me/+5511941779929"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-whatsapp-button"
            >
              <FaWhatsapp className="hero-whatsapp-icon" size={20} />
              {t('hero.whatsapp')}
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hero-image-container"
        >
          <div className="hero-avatar">
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
        </motion.div>
      </div>
      <div className="hero-tech-stack">
        <TechStack />
      </div>
    </section>
  );
}
