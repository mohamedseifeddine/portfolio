import React from 'react'

import styles from 'shared/styles/Home.module.scss'

import Topbar from 'components/Topbar/Topbar'

export default function Home() {
  return (
    <>
      <div className={styles.container}>
        {' '}
        <Topbar />
        <footer className={styles.footer}>
          <a target="_blank" rel="noopener noreferrer">
            Powered by Mohamed seifeddine
          </a>
        </footer>
      </div>

    </>
  )
}
