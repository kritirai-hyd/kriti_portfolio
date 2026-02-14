<<<<<<< HEAD
import React from 'react';
import styles from './Footer.module.css';
import { useTheme } from '../context/ThemeContext';

const Footer = () => {
  const { theme } = useTheme();

  return (
    <footer className={`${styles.footer} ${styles[theme]}`}>
=======

import React from 'react';
import styles from './Footer.module.css';
import { useTheme } from '../../context/ThemeContext';
import clsx from 'clsx';

const Footer = () => {
  const { theme } = useTheme(); 

  return (
    <footer className={clsx(styles.footer, styles[theme])}>
>>>>>>> 38539456c0d6ded47a8dd538a9d68180295bfbe0
      <div className={styles.content}>
        <p className={styles.text}>
          &copy; {new Date().getFullYear()} Kriti Rai. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

<<<<<<< HEAD

=======
>>>>>>> 38539456c0d6ded47a8dd538a9d68180295bfbe0
export default Footer;
