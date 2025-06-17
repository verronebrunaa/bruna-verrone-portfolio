"use client";

import { courses } from "@/data/courses";
import { motion } from "framer-motion";

export default function Course() {
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
          <h2 className="section-title">Cursos</h2>

          <div className="publications-grid">
            {courses.map((course, idx) => (
              <motion.div
                key={idx}
                className="publication-card"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <div className="card-content">
                  <h3>{course.name}</h3>
                  <p>
                    {course.school} • {course.period}
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
                        Veja o certificado
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
