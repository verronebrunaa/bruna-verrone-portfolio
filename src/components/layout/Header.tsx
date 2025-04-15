import Link from 'next/link'

export default function Header() {
  return (
    <header className="header">
      <div className="container header-container">
        <div>
          <Link href="/" className="header-home-link">
            <h1 className="header-title">&lt;Bruna Verrone/&gt;</h1>
          <p className="header-subtitle">Front-end Developer</p>
          </Link>
        </div>
        
        <div className="header-links">
          <Link href="/projects" className="header-link">
            Projetos
          </Link>
          <Link href="/experience" className="header-link">
            Experiência
          </Link>
          <Link href="/news" className="header-link">
            Notícias e Publicações
          </Link>
        </div>
      </div>
    </header>
  )
}