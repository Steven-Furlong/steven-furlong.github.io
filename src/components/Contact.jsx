import { useState } from 'react'
import { profile } from '../data/content'

export default function Contact() {
  const [copied, setCopied] = useState(false)

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    } catch {
      // Clipboard API unavailable — user can still click the mailto link.
    }
  }

  return (
    <section id="contact" className="section">
      <div className="container">
        <h2 className="section__title">
          <span className="section__index">06.</span> Contact
        </h2>

        <div className="contact">
          <p className="contact__lede">
            Looking for a junior IT support, helpdesk, or cybersecurity hire? I'd like to hear
            from you.
          </p>

          <div className="contact__grid">
            <a className="contact__item" href={`mailto:${profile.email}`}>
              <span className="contact__label">Email</span>
              <span className="contact__value">{profile.email}</span>
            </a>

            <a className="contact__item" href={`tel:${profile.phone.replace(/[^+\d]/g, '')}`}>
              <span className="contact__label">Phone</span>
              <span className="contact__value">{profile.phone}</span>
            </a>

            <a
              className="contact__item"
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              <span className="contact__label">LinkedIn</span>
              <span className="contact__value">stevendominic-furlong</span>
            </a>

            <button type="button" className="contact__item contact__item--button" onClick={copyEmail}>
              <span className="contact__label">Quick Copy</span>
              <span className="contact__value">{copied ? 'Copied!' : 'Copy email address'}</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
