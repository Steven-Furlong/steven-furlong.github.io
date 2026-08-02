import { profile } from '../data/content'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p>
          Designed &amp; built by {profile.name} · {new Date().getFullYear()}
        </p>
        <div className="footer__links">
          <a href={profile.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href="#top">Back to top &uarr;</a>
        </div>
      </div>
    </footer>
  )
}
