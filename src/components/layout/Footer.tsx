"use client";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Footer() {
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
            href="https://wa.me/SEUNUMERO"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
            aria-label="WhatsApp"
          >
            <FaWhatsapp size={20} />
          </a>
        </div>

        <p className="footer-copyright">
          © {new Date().getFullYear()} Bruna Verrone. Todos os direitos
          reservados.
        </p>
      </div>
    </footer>
  );
}
