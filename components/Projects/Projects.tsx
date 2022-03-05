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
    <section className={styles.projectSection}>
      <h2>Personal projects</h2>
      <div className={styles.projects}>
        {projects.map((project) => (
          <div key={project} className={styles.projects_project}>
            <p>{project.fullname}</p>
            <Link href={project.html_url}>
              <a className={styles.projects_project_link} target="_blank">
                <img
                  className={styles.projects_project_github}
                  src="icons/social-icon/icon-active/github.svg"
                  alt={project.name}
                />

                <h3>{project.name}</h3>
              </a>
            </Link>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
export default Projects
