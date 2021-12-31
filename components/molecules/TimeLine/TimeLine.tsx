/* eslint-disable react/jsx-key */
/* eslint-disable prettier/prettier */
import React from 'react'
import { Experiences } from 'helpers'
import styles from './TimeLine.module.scss'

const TimeLine = () => (
    <div className={styles.timeLine} >
        <section className={styles.timeLine_expereince_section}>
            <div className={styles.timeLine_group_header}>
                <div className={styles.timeLine_group_title}>
                    <h2>Experiences</h2>
                </div>
            </div>
            <div className={styles.timeLine_expereinces}>
                {Experiences.map((experience) =>
                    <div className={styles.timeLine_expereince_grid}>
                        <a className={styles.timeLine_avatar} href={experience.website} target="_blank" rel="noreferrer" >
                            <img src={experience.logo} alt="hi" />
                        </a>
                        <div className={styles.timeLine_expereince_card}>
                            <div className={styles.timeLine_expereince_header}>

                                <div className={styles.timeLine_expereince_title}>{experience.role}</div>
                                <div className={styles.timeLine_expereince_time}>{experience.duration}</div>
                            </div>
                            <div className={styles.timeLine_expereince_content}>
                                <ul className={styles.timeLine_expereince_content_tasks}>

                                    {experience.tasks.map(task =>
                                        <li className={styles.timeLine_expereince_content_task}>{task}</li>
                                    )}

                                </ul>

                                <div className={styles.timeLine_expereince_content_tools}>
                                    {experience.tools.map(tool =>
                                        <span className={styles.timeLine_expereince_content_tool}>{tool}</span>
                                    )}
                                </div>


                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section >

    </div >
)
export default TimeLine
