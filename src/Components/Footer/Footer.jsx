'use client';
import React from 'react';
import styles from './Footer.module.css';
import { useTheme } from '../../app/context/ThemeContext';
import clsx from 'clsx';

const Footer = () => {
  const { theme } = useTheme(); // theme is likely 'light' or 'dark'

  return (
    <footer className={clsx(styles.footer, styles[theme])}>
      <div className={styles.content}>
        <p className={styles.text}>
          &copy; {new Date().getFullYear()} Kriti Rai. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
