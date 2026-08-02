import { certifications, education } from '../data/content'

export default function Certifications() {
  return (
    <section id="certifications" className="section">
      <div className="container">
        <h2 className="section__title">
          <span className="section__index">05.</span> Certifications &amp; Education
        </h2>

        <div className="cert-grid">
          {certifications.map((cert) => (
            <div key={cert.name} className="cert-card">
              <span className="cert-card__issuer">{cert.issuer}</span>
              <h3>{cert.name}</h3>
              <span className="cert-card__date">{cert.date}</span>
            </div>
          ))}

          <div className="cert-card cert-card--edu">
            <span className="cert-card__issuer">{education.school}</span>
            <h3>{education.degree}</h3>
            <span className="cert-card__date">
              {education.year} · {education.location}
            </span>
            <ul className="cert-card__coursework">
              {education.coursework.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
