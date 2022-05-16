import React from 'react'
import styles from 'shared/styles/Home.module.scss'
import Landing from './landing'

export default function Home() {
  return (
    <>
      <div className={styles.container}>
        {' '}
        <Landing />
      </div>
    </>
  )
}
