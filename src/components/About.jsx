import { useState } from 'react'
import { profile, education } from '../data/content'

const facts = [
  { label: 'Location', value: profile.location },
  { label: 'Education', value: `${education.degree}, ${education.year}` },
  { label: 'Focus', value: 'IT Support · Helpdesk · Cybersecurity' },
  { label: 'Status', value: 'Open to junior roles' },
]

const initials = profile.name
  .split(' ')
  .map((part) => part[0])
  .join('')

function AboutPhoto() {
  const [failed, setFailed] = useState(false)

  if (!profile.photo || failed) {
    return (
      <div className="about__photo about__photo--placeholder">
        <span>{initials}</span>
      </div>
    )
  }

  return (
    <img
      className="about__photo"
      src={profile.photo}
      alt={profile.name}
      onError={() => setFailed(true)}
    />
  )
}

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
              Computer Information Systems Graduate with hands-on experience in remote technical support,
              hardware/software troubleshooting, and embedded systems engineering.
              Currently supporting international customers in a startup environment across Windows and Linux platforms. 
              Seeking a role in IT support, information systems, or cybersecurity where I can apply my technical foundation
              to solve real problems.
            </p>
          </div>

          <div className="about__side">
            <AboutPhoto />

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
      </div>
    </section>
  )
}
