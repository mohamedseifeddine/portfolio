/* eslint-disable react/jsx-key */
/* eslint-disable prettier/prettier */
import React, { useEffect } from 'react'
import { Experiences } from 'helpers'
import styles from './TimeLine.module.scss'

const TimeLine = () => (
    < div className={styles.timeLine}>
        <section className={styles.timeLine_notification_section}>
            <div className={styles.timeLine_group_header}>
                <div className={styles.timeLine_group_title}>Experiences Professionnel</div>
            </div>

            {Experiences.map((key, experience) =>
                <div className={styles.timeLine_notification_grid}>
                    <div className={styles.timeLine_avatar}>
                        <img src="https://source.unsplash.com/MTZTGvDsHFY" alt="hi" />
                    </div>
                    <div className={styles.timeLine_notification_card}>
                        <div className={styles.timeLine_notification_header}>

                            <div className={styles.timeLine_notification_title}>{experience.role}</div>
                            <div className={styles.timeLine_notification_time}>{experience.duration}</div>
                        </div>
                        <div className={styles.timeLine_notification_content}>
                            <ul>
                                <li>{experience.tasks}</li>
                            </ul>
                            <ul>
                                <li>{experience.environments}</li>
                            </ul>

                        </div>
                    </div>
                </div>)}
        </section>

    </div>
)

export default TimeLine
