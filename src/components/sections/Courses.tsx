"use client";

import { coursesData } from "@/data/translations";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Course() {
  const { t, language } = useLanguage();
  const courses = coursesData[language];
  
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
          <h2 className="section-title">{t('courses.title')}</h2>

          <div className="publications-grid">
            {courses.map((course, idx) => (
              <motion.div
                key={idx}
                className="publication-card"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="card-content">
                  <h3>{course.name}</h3>
                  <p className="course-school">
                    {course.school}
                  </p>
                  <p className="course-period">
                    {course.period}
                  </p>
                  <div className="card-links">
                    {course.link.map((l, i) => (
                      <motion.a
                        key={i}
                        href={l.src}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="card-link"
                        whileHover={{ scale: 1.05 }}
                      >
                        {t('courses.certificate')}
                      </motion.a>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
