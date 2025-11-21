"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'pt' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('pt');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('portfolio-language') as Language;
    if (savedLanguage && ['pt', 'en'].includes(savedLanguage)) {
      setLanguage(savedLanguage);
    }
  }, []);

  const handleSetLanguage = (newLanguage: Language) => {
    setLanguage(newLanguage);
    localStorage.setItem('portfolio-language', newLanguage);
  };

  const t = (key: string): string => {
    const translations = getTranslations(language);
    return translations[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

const getTranslations = (language: Language): Record<string, string> => {
  const translations = {
    pt: {
      'header.subtitle': 'Desenvolvedora Full Stack',
      
      'nav.home': 'Início',
      'nav.about': 'Sobre',
      'nav.experience': 'Experiência',
      'nav.projects': 'Projetos',
      'nav.courses': 'Cursos',
      'nav.news': 'Notícias',

      'hero.greeting': 'Olá, eu sou',
      'hero.name': 'Bruna Verrone',
      'hero.role1': 'Desenvolvedora Full Stack',
      'hero.role2': 'com foco em Front-end',
      'hero.description1': 'Apaixonada por tecnologia e movida por desafios. Tenho 25 anos, sou formada em Comércio Exterior e atualmente curso Engenharia da Computação na Facens em Sorocaba. Estou sempre buscando aprender mais e evoluir na área de tecnologia.',
      'hero.description2': 'Estou à disposição para conversar sobre projetos, colaborações ou oportunidades',
      'hero.whatsapp': 'Me chama no WhatsApp',

      'about.title': 'Sobre Mim',
      'about.description': 'Sou uma pessoa curiosa, amo ler, aprender coisas novas e compartilhar experiências. Para além do trabalho, gosto de viajar, explorar novas culturas e me conectar com pessoas. Amo ir a shows, ouvir música e cozinhar. As vezes faço freelas para o ',

      'experience.title': 'Experiência Profissional',

      'tech.title': 'Tecnologias e Ferramentas que utilizo',
      'tech.languages': 'Linguagens',
      'tech.frontend': 'Frontend',
      'tech.tools': 'Ferramentas e Testes',
      'tech.infra': 'Infraestrutura e Bancos de Dados',

      'projects.title': 'Meus Projetos',
      'projects.viewProject': 'Ver Projeto',
      'projects.github': 'Ver no GitHub',
      'projects.live': 'Ver Projeto Online',
      'projects.filter.all': 'Todos',
      'projects.filter.personal': 'Pessoais',
      'projects.filter.academic': 'Acadêmicos',
      'projects.filter.professional': 'Profissionais',

      'news.title': 'Notícias e Publicações',

      'courses.title': 'Cursos e Certificações',
      'courses.certificate': 'Veja o certificado',

      'news.sumup.title': 'Destaque na SumUp - Mulher em Tech',
      'news.sumup.description': 'Fui mencionada na reportagem "Women in Tech Generation Brazil" da SumUp, que destaca a importância da diversidade e inclusão na tecnologia.',
      'news.sumup.link': 'Leia a reportagem',
      'news.lighting.title': 'Projeto Acadêmico - Sistema de Manutenção de Iluminações Públicas',
      'news.lighting.description': 'Sistema de Manutenção de Iluminações Públicas publicado na revista Joins.',
      'news.lighting.link': 'Veja o artigo',
      'news.brick.title': 'Projeto Acadêmico - Tijolo ecológico a base de fibra de coco',
      'news.brick.description': 'Tijolo ecológico a base de fibra de coco para reaproveitamento de resíduos sólidos.',
      'news.brick.link': 'Veja o artigo',

      'footer.developedWith': 'Desenvolvido com ❤️ por',
      'footer.rights': 'Todos os direitos reservados',
    },
    en: {
      'header.subtitle': 'Full Stack Developer',
      
      'nav.home': 'Home',
      'nav.about': 'About',
      'nav.experience': 'Experience',
      'nav.projects': 'Projects',
      'nav.courses': 'Courses',
      'nav.news': 'News',

      'hero.greeting': 'Hello, I am',
      'hero.name': 'Bruna Verrone',
      'hero.role1': 'Full Stack Developer',
      'hero.role2': 'focused on Front-end',
      'hero.description1': 'Passionate about technology and driven by challenges. I am 25 years old, graduated in Foreign Trade and currently studying Computer Engineering at Facens in Sorocaba. I am always looking to learn more and evolve in the technology field.',
      'hero.description2': 'I am available to talk about projects, collaborations or opportunities',
      'hero.whatsapp': 'Contact me on WhatsApp',

      'about.title': 'About Me',
      'about.description': 'I am a curious person, I love reading, learning new things and sharing experiences. Beyond work, I like to travel, explore new cultures and connect with people. I love going to concerts, listening to music and cooking. Sometimes I do freelance work for ',

      'experience.title': 'Professional Experience',

      'tech.title': 'Technologies and Tools I Use',
      'tech.languages': 'Languages',
      'tech.frontend': 'Frontend',
      'tech.tools': 'Tools and Testing',
      'tech.infra': 'Infrastructure and Databases',

      'projects.title': 'My Projects',
      'projects.viewProject': 'View Project',
      'projects.github': 'View on GitHub',
      'projects.live': 'View Project Online',
      'projects.filter.all': 'All',
      'projects.filter.personal': 'Personal',
      'projects.filter.academic': 'Academic',
      'projects.filter.professional': 'Professional',
      'projects.noProjects': 'No projects found for this category.',

      'news.title': 'News and Publications',

      'courses.title': 'Courses and Certifications',
      'courses.certificate': 'View Certificate',

      'news.sumup.title': 'Featured at SumUp - Women in Tech',
      'news.sumup.description': 'I was mentioned in the "Women in Tech Generation Brazil" report by SumUp, which highlights the importance of diversity and inclusion in technology.',
      'news.sumup.link': 'Read the article',
      'news.lighting.title': 'Academic Project - Public Lighting Maintenance System',
      'news.lighting.description': 'Public Lighting Maintenance System published in the Joins journal.',
      'news.lighting.link': 'View the article',
      'news.brick.title': 'Academic Project - Ecological brick based on coconut fiber',
      'news.brick.description': 'Ecological brick based on coconut fiber for solid waste reuse.',
      'news.brick.link': 'View the article',

      'footer.developedWith': 'Developed with ❤️ by',
      'footer.rights': 'All rights reserved',
    }
  };

  return translations[language] || translations.pt;
};