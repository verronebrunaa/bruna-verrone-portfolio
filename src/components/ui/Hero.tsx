'use client'

import { motion } from 'framer-motion'
import { FaWhatsapp } from 'react-icons/fa'
import TechStack from './TechStack'

export default function Hero() {
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
            Olá, eu sou <span style={{ color: '#9333ea' }}>Bruna Verrone</span>
          </h1>
          <h2 className="hero-subtitle">
            Desenvolvedora Front-end
          </h2>
          <p className="hero-description">
            Especializada em criar experiências web modernas e responsivas com React e Next.js.
          </p>
          <div className="hero-actions">
            <a
              href="https://wa.me/+5511941779929" 
              target="_blank"
              rel="noopener noreferrer"
              className="hero-whatsapp-button"
            >
              <FaWhatsapp className="hero-whatsapp-icon" size={20} />
              Contato via WhatsApp
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
              {/* Substitua pela sua foto */}
              <span>Sua Foto</span>
            </div>
          </div>
        </motion.div>
      </div>
      <div className="hero-tech-stack">
        <TechStack />
      </div>
    </section>
  )
}