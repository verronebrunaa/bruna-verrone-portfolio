"use client";
import { FaGithub, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-links">
          <a
            href="https://github.com/verronebrunaa"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
            aria-label="GitHub"
          >
            <FaGithub size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/verronebruna/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={20} />
          </a>
          <a
            href="mailto:verronebruna@gmail.com"
            className="footer-link"
            aria-label="Email"
          >
            <MdEmail size={22} />
          </a>
          <a
            href="https://wa.me/+5511941779929"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
            aria-label="WhatsApp"
          >
            <FaWhatsapp size={20} />
          </a>
          <a
            href="https://www.instagram.com/verronebru/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
            aria-label="Instagram"
          >
            <FaInstagram size={20} />
          </a>
        </div>

        <p className="footer-copyright">
          {t('footer.developedWith')} <strong>Bruna Verrone</strong>
          <br />© {new Date().getFullYear()} - {t('footer.rights')}.
        </p>
      </div>
    </footer>
  );
}
