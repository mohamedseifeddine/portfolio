/* eslint-disable prettier/prettier */
import React from 'react'
import { skills } from 'helpers'
import styles from './About.module.scss'

const About = () => (
    <div className={styles.about}>
        <img src='developer.jpg' width='350' height='380' alt='me' />
        <div className={styles.about_description}>
            <h2>About me</h2>
            <p>
            Hey ! i &rsquo; m Mohamed seifeddine Hamza I’m a JavaScript developer, currently working as a full time Fullstack JS Developer,
                my focus is always on building the best secure, reliable, and good User Experience websites.<br />I love learning new things and sharing my discoveries
                with others through experiments and projects.
            </p>
            <p>
                Here are a few technologies I&apos;ve been working with recently:
            </p>
            <div className={styles.about_description_skills}>
                {skills.map(skill =>
                    // eslint-disable-next-line react/jsx-key
                    <ul>
                        <li>{skill}</li>
                    </ul>
                )}

            </div>
        </div>
    </div >
)

export default About
