import React from 'react'
import styles from './Footer.module.scss'

const Footer = () => (
  <div className={styles.footer}>
    <span>
      Designed and built with
      <span role="img" aria-label="heart">
        {' '}
        💙{' '}
      </span>
      by MSH
      <span role="img" aria-label="victory">
        ✌
      </span>{' '}
    </span>
    <br />
    <small>©2022</small>
  </div>
)

export default Footer
