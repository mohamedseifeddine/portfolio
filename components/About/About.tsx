/* eslint-disable prettier/prettier */
import SocialLinks from 'components/SocialLinks'
import React from 'react'
import styles from './About.module.scss'

const About = () => (
    <div className={styles.about}>
        <img src='developer.jpg' width='350' height='350' alt='me' />
        <div className={styles.about_description}>
            <h2>Hey! i' m mohamed seifeddine Hamza</h2>
            <p>
                I’m a JavaScript developer, currently working as a full time Frontend Developer,
                my focus is always on building the best secure, reliable, and good User Experience websites.<br />I love learning new things and sharing my discoveries
                with others through experiments and projects on Github.I'm currently exploring React and Node.
            </p>
            <p>You can find me here</p>
            <div className={styles.about_description_social}>
                <SocialLinks />
            </div>


        </div>
    </div>
)

export default About
