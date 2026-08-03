import { useState } from 'react'
import { profile, education } from '../data/content'

const facts = [
  { label: 'Location', value: profile.location },
  { label: 'Education', value: `${education.degree}, ${education.year}` },
  { label: 'Focus', value: 'Computer Engineering · Information Sysatems · Cybersecurity' },
  { label: 'Status', value: 'Open to new roles'},
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
            <p>
              My path into tech started with a hands-on curiosity for how hardware and software meet.
              From wiring up microcontrollers, to then learning the systems and networking fundamentals to
              back it up through a Computer Information Systems degree at the University of the Fraser Valley.
              That mix now shows up daily at Syntaxis, where I build embedded firmware for Arduino and
              Raspberry Pi-based products while also fielding remote support for customers across Windows
              and Linux-based systems. I'm currently looking for a role in IT, information systems,
              cybersecurity, or computer engineering where I can apply concepts I've learned while also
              growing my individual skillset by learning from industry leaders.
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
