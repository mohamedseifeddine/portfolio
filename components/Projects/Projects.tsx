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
    <div className={styles.projects}>
      {projects.map((project) => (
        <div key={project} className={styles.projects_project}>
          <p>{project.fullname}</p>
          <h3>{project.name}</h3>
          <p>{project.description}</p>
          <Link href={project.html_url}>
            <a className={styles.projects_project_github} target="_blank">
              <p>Check </p>
              <img
                src="icons/social-icon/icon-active/github.svg"
                alt={project.name}
              />
            </a>
          </Link>
        </div>
      ))}
    </div>
  )
}
export default Projects
