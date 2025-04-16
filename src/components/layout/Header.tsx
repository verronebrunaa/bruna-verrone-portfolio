"use client";

import { useState } from "react";
import Link from "next/link";
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="container header-container">
        <div className="flex items-center justify-between w-full">
          <Link href="/" className="header-home-link">
            <h1 className="header-title">&lt;Bruna Verrone/&gt;</h1>
            <p className="header-subtitle">Front-end Developer</p>
          </Link>

          <button
            className="hamburger"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            {menuOpen ? <RxCross1 size={24} /> : <RxHamburgerMenu size={24} />}
          </button>
        </div>

        <nav className={`header-links ${menuOpen ? "open" : ""}`}>
          <Link href="/projects" className="header-link">
            Projetos
          </Link>
          <Link href="/experience" className="header-link">
            Experiência
          </Link>
          <Link href="/news" className="header-link">
            Notícias e Publicações
          </Link>
        </nav>
      </div>
    </header>
  );
}
