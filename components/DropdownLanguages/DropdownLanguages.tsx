/* eslint-disable prettier/prettier */
import React, { useState } from 'react'
import { useRouter } from 'next/router'

import styles from './DropdownLanguages.module.scss'

const options = [
  { value: 'ar', title: 'العربية' },
  { value: 'en', title: 'English' },
  { value: 'fr', title: 'Français' },
]

const DropdownLanguages = () => {
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()
  const toggling = () => setIsOpen(!isOpen)

  const getLanguage = (val) => options.find((d) => d.value === val)?.title

  const onOptionClicked = (value) => () => {
    router.push(router.pathname, router.pathname, { locale: value })
    setIsOpen(false)
  }
  return (
    <div className={styles.DropDown}>
      <div className={styles.DropDownContainer}>
        <div className={styles.DropDownHeader} onClick={toggling}>
          <img alt="lang" src="icons/languages.svg" width="19" height="19" />
          <div className={styles.DropDownHeader_title}>
            {getLanguage(router.locale)}
          </div>
        </div>
        {isOpen && (
          <div className={styles.DropDownListContainer}>
            <div className={styles.DropDownList}>
              {options.map((option, i) => (
                <div className={`${styles.ListItem} ${option.value === router.locale ? styles.active : ''}`}
                  onClick={onOptionClicked(option.value)}
                  key={i}
                >
                  {option.value === router.locale &&
                    <img
                      src="icons/checked.svg"
                      alt="me"
                      className={styles.ListItem_img}
                      width="16"
                      height="16"
                    />
                  }
                  {option.title}

                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default DropdownLanguages
