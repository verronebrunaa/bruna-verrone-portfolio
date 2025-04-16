import Link from "next/link";
import projectsData from "@/app/data/projects";
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
              <Link href={`/projects/${project.slug}`} className="project-link">
                <h2 className="project-title">{project.title}</h2>
                {project.description && (
                  <p className="project-description">{project.description}</p>
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