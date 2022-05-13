import React from 'react'
import styles from './Contact.module.scss'

const Contact = () => (
  <div className={styles.contact}>
    <h2>Get In Touch</h2>
    <p>
      Although I&rsquo;m not currently looking for any new opportunities, my
      inbox is always <br /> open. Whether you have a question, want to
      collaborate or just want to meet me, I&rsquo;ll get back to you ASAP!
    </p>
    <p className={styles.contact_phone}>
      Or you can reach me on mobile +216 53 29 57 02
    </p>
    <a
      href="mailto:hamzamohamedseifeddine@gmail.com"
      target="_blank"
      rel="noreferrer"
    >
      <button type="button">Say Hi!</button>
    </a>
  </div>
)

export default Contact
