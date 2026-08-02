import { experience } from '../data/content'

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <h2 className="section__title">
          <span className="section__index">02.</span> Experience
        </h2>

        <ol className="timeline">
          {experience.map((job) => (
            <li key={job.company} className="timeline__item">
              <div className="timeline__marker" aria-hidden="true" />
              <div className="timeline__card">
                <div className="timeline__head">
                  <div>
                    <h3>
                      {job.role} <span className="timeline__at">@ {job.company}</span>
                    </h3>
                    <p className="timeline__meta">
                      {job.type} · {job.location}
                    </p>
                  </div>
                  <span className="timeline__period">{job.period}</span>
                </div>
                <ul className="timeline__bullets">
                  {job.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
