/* eslint-disable prettier/prettier */
import React from 'react'
import Link from 'next/link'

import styles from './Sociallinks.module.scss'

const SocialLinks = () => {
  return (<div className={styles.socialLinks}>
    <Link href="https://github.com/mohamedseifeddine">
      <a className={styles.socialLinks_github}> </a>
    </Link>
    <Link href="https://www.linkedin.com/in/mohamed-seifeddine-hamza/">
      <a className={styles.socialLinks_linkedin}> </a>
    </Link>
  </div>)
}

export default SocialLinks
