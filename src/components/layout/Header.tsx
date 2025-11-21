"use client";

import { useState } from "react";
import Link from "next/link";
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageSelector from "@/components/ui/LanguageSelector";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { t } = useLanguage();

  return (
    <header className="header">
      <div className="container header-container">
        <div className="header-content">
          <Link href="/" className="header-home-link">
            <h1 className="header-title">&lt;Bruna Verrone/&gt;</h1>
            <p className="header-subtitle">{t('header.subtitle')}</p>
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
            {t('nav.projects')}
          </Link>
          <Link href="/experience" className="header-link">
            {t('nav.experience')}
          </Link>
          <Link href="/courses" className="header-link">
            {t('nav.courses')}
          </Link>
          <Link href="/news" className="header-link">
            {t('nav.news')}
          </Link>
          <LanguageSelector />
        </nav>
      </div>
    </header>
  );
}
