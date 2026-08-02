import { projects } from '../data/content'

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="section__title">
          <span className="section__index">03.</span> Projects
        </h2>
        <p className="section__lede">
          Draft entries built from real work — swap in repos, screenshots, and live demos as they
          go public.
        </p>

        <div className="projects-grid">
          {projects.map((project) => (
            <article key={project.title} className="project-card">
              {project.placeholder && <span className="badge">Placeholder</span>}
              <h3>{project.title}</h3>
              <p className="project-card__tagline">{project.tagline}</p>
              <p className="project-card__desc">{project.description}</p>

              <ul className="project-card__tags">
                {project.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>

              <div className="project-card__links">
                <a href={project.repo}>Repo &rarr;</a>
                {project.demo && <a href={project.demo}>Live Demo &rarr;</a>}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
