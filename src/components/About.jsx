import { profile, education } from '../data/content'

const facts = [
  { label: 'Location', value: profile.location },
  { label: 'Education', value: `${education.degree}, ${education.year}` },
  { label: 'Focus', value: 'IT Support · Helpdesk · Cybersecurity' },
  { label: 'Status', value: 'Open to junior roles' },
]

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <h2 className="section__title">
          <span className="section__index">01.</span> About
        </h2>

        <div className="about">
          <div className="about__text">
            <p>{profile.summary}</p>
            <p>
              My path here runs through hands-on embedded firmware work, direct customer
              troubleshooting, and a CIS degree focused on operating systems, networking, and
              cybersecurity fundamentals. I like problems with a clear root cause to find — and I
              like documenting the fix so nobody has to solve it twice.
            </p>
          </div>

          <dl className="about__facts">
            {facts.map((fact) => (
              <div key={fact.label} className="about__fact">
                <dt>{fact.label}</dt>
                <dd>{fact.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
