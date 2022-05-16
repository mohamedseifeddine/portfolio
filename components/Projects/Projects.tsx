import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Link from 'next/link'
import styles from './Projects.module.scss'

const Projects = () => {
  const [projects, setProjects] = useState([])
  useEffect(() => {
    axios
      .get('https://api.github.com/users/mohamedseifeddine/repos')
      .then((response) => setProjects(response.data))
  }, [])
  return (
    <section className={styles.section}>
      <h2>Some Things I’ve Built</h2>
      <div className={styles.projects}>
        {projects.map((project) => (
          <div key={project} className={styles.projects_project}>
            <div className={styles.projects_project_title}>
              <Link href={project.html_url}>
                <>
                  <img
                    className={styles.projects_project_github}
                    src="icons/social-icon/icon-active/github.svg"
                    alt={project.name}
                  />
                  <a target="_blank">
                    <h3>{project.name}</h3>
                  </a>
                </>
              </Link>
            </div>
            <p className={styles.projects_project_body}>
              {project.description}
            </p>
          </div>
        ))}
      </div>
      <div className={styles.btn}>
        <a
          className={styles.seeMore}
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className={styles.see}>See more</span>
          <span className={styles.arrow}>
            <img src="icons/arrow.svg" alt="see" />
          </span>
        </a>
      </div>
    </section>
  )
}
export default Projects
