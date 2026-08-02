import { skills } from '../data/content'

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <h2 className="section__title">
          <span className="section__index">04.</span> Skills
        </h2>

        <div className="skills-grid">
          {skills.map((group) => (
            <div key={group.category} className="skills-card">
              <h3>{group.category}</h3>
              <ul>
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
