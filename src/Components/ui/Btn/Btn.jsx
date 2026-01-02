import React from 'react'
import styles from './Btn.module.css'
const Btn = ({ name }) => {
  return (
    <>
        <button className={styles.downlaod}>{name}</button>
    </>
  )
}

export default Btn