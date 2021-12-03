/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react'
import { useIntl } from 'react-intl'
import Link from 'next/link'
import DropdownLanguages from 'components/DropdownLanguages/DropdownLanguages'
import SocialLinks from 'components/SocialLinks/SocialLinks'
import styles from './Topbar.module.scss'

const Topbar = () => {
  const { formatMessage } = useIntl()
  const f = (id: string) => formatMessage({ id })


  /*  const uiLocales = `ui_locales=${router.locale === 'ar' ? 'arabic' : router.locale
     }` */
  return (
    <div className={styles.topbar}>
      <div className={styles.topbar_container}>
        <div className={styles.topbar_section}>

          <Link href={'/'}>
            {/*  <img
              alt="me"
              className={styles.topbar_logo}
              src="/images/logo-kito.png"
              width="140"
              height="45"
            /> */}
            <a className={styles.topbar_title}>{f('topbarText')}</a>
          </Link>

          <div className={styles.topbar_buttons}>

            <Link href="/landing">
              <a className={styles.topbar_btn}> {f('topbarAboutBtn')}</a>
            </Link>
            <Link href="/landing">
              <a className={styles.topbar_btn}> {f('topbarExperienceBtn')}</a>
            </Link>
            <Link href="/landing">
              <a className={styles.topbar_btn}> {f('topbarProjectBtn')}</a>
            </Link>
            <Link href="/landing">
              <a className={styles.topbar_btn}> {f('topbarContactBtn')}</a>
            </Link>
          </div>

        </div>
        <DropdownLanguages />
      </div>
    </div>
  )
}
export default Topbar
