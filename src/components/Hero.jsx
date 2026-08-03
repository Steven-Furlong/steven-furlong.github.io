import { useEffect, useState } from 'react'
import { profile } from '../data/content'

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [text, setText] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = profile.roles[roleIndex]
    const speed = deleting ? 35 : 65
    const pause = 1400

    if (!deleting && text === current) {
      const t = setTimeout(() => setDeleting(true), pause)
      return () => clearTimeout(t)
    }

    if (deleting && text === '') {
      setDeleting(false)
      setRoleIndex((i) => (i + 1) % profile.roles.length)
      return
    }

    const t = setTimeout(() => {
      setText((t0) =>
        deleting ? current.slice(0, t0.length - 1) : current.slice(0, t0.length + 1)
      )
    }, speed)
    return () => clearTimeout(t)
  }, [text, deleting, roleIndex])

  return (
    <section id="top" className="hero">
      <div className="hero__bg" aria-hidden="true">
        <div className="hero__grid" />
        <div className="hero__glow" />
      </div>

      <div className="container hero__inner">
        <p className="hero__eyebrow">
          <span className="dot" /> Available for roles in: IT / Information Systems / Cybersecurity / Computer Engineering
        </p>

        <h1 className="hero__name">{profile.name}</h1>

        <p className="hero__role">
          <span className="hero__prompt">$</span> {text}
          <span className="hero__cursor" aria-hidden="true" />
        </p>

        <p className="hero__summary">{profile.summary}</p>

        <div className="hero__actions">
          <a className="btn btn--primary" href="#projects">
            View Projects
          </a>
          <a className="btn btn--ghost" href="#contact">
            Get In Touch
          </a>
          <a className="btn btn--ghost" href={profile.resumeFile} download>
            Download Résumé
          </a>
        </div>

        <div className="hero__socials">
          <a href={`mailto:${profile.email}`} aria-label="Email">
            Email
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
            LinkedIn
          </a>
          <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub">
            GitHub
          </a>
        </div>
      </div>
    </section>
  )
}
