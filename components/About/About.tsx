/* eslint-disable prettier/prettier */
import React from 'react'
import SocialLinks from 'components/SocialLinks'
import { skills } from 'helpers'
import styles from './About.module.scss'

const About = () => (
    <div className={styles.about}>
        <div className={styles.about_social}>
            <img src='developer.jpg' width='350' height='350' alt='me' />
            <SocialLinks />
        </div>

        <div className={styles.about_description}>
            <h2>Hey ! i' m mohamed seifeddine Hamza</h2>
            <p>
                I’m a JavaScript developer, currently working as a full time Frontend Developer,
                my focus is always on building the best secure, reliable, and good User Experience websites.<br />I love learning new things and sharing my discoveries
                with others through experiments and projects.
            </p>
            <div className={styles.about_description_skills}>
                {skills.map(skill =>
                    <div className={styles.about_description_categories} >
                        <h4>{skill.theme}</h4>

                        <div className={styles.about_description_category}>
                            {skill.skills.map(x =>

                                <span className={styles.about_description_skill}>
                                    {x}
                                </span>


                            )
                            }
                        </div>
                    </div>
                )}

            </div>



        </div>
    </div >
)

export default About
