import {FaGithub}from 'react-icons/fa'
import {FiX}from 'react-icons/fi'

import styles from './styles.module.scss'

export function SignInButton() {
  const isUserLoggedIn = true;
  return isUserLoggedIn ? (
    (
      <button type="button"
      className={styles.signInButton}>
        <FaGithub color="var(--green-500)" />
        Pablo Giaccon
      <FiX color="#737380" className={styles.closeIcon} />
      </button>
    )
  ): (
    (
      <button type="button"
      className={styles.signInButton}>
        <FaGithub color="var(--yellow-500)" />
        Sign in with Github
  
      </button>
    )
  )
}