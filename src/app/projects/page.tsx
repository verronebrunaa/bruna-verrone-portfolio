import Link from "next/link";
import { projectsData } from "@/data/projects";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function ProjectsPage() {
  return (
    <>
      <Header />
      <div className="projects-page">
        <div className="projects-container">
          <h1 className="section-title">Meus Projetos</h1>
          <ul className="projects-grid">
            {projectsData.map((project) => (
              <li key={project.slug} className="project-card">
                <Link
                  href={`/projects/${project.slug}`}
                  className="project-link"
                >
                  <h2 className="project-title">{project.title}</h2>
                  {project.description && (
                    <p className="project-description">{project.description}</p> //gostaria de limitar 
                  )}
                  {project.tags && project.tags.length > 0 && (
                    <div className="project-tags">
                      {project.tags.map((tag, index) => (
                        <span key={index} className="project-tag">
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
}
