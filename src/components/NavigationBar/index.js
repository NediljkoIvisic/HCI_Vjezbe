import React from 'react'
 
import styles from './style.module.css'

const navTabs = ['Home', 'Accommodation', 'Photo Gallery', 'Contact']

const NavigationBar = () => (
    <nav className={styles.navigationBar}>
      {navTabs.map(tab => {
        if (tab === 'Home')
        return (
          <li className={styles.active}>
            {tab}
          </li>)
        else
          return <li>{tab}</li>
        }
      )}
    </nav>
)

export default NavigationBar