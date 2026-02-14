
import React from 'react';
import { motion } from 'framer-motion';
import Increment from './Increment';
import { fadeIn } from "../variants";
import { useTheme } from '../context/ThemeContext';
import styles from './Counter.module.css';

const Counter = () => {
  const { theme } = useTheme();

  return (
    <section className={`${styles.counterSection} ${theme === 'dark' ? styles.darkMode : styles.lightMode}`}>
      <div className={styles.container}>
        <motion.div
          variants={fadeIn('up', 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.7 }}
          className={styles.wrapper}
        >
          <div className={styles.statBlock}>
            <h2 className={styles.statNumber}>
              <Increment number={2} />+
            </h2>
            <p className={styles.statDescription}>
              Years of Experience
            </p>
          </div>
          <div className={styles.statBlock}>
            <h2 className={styles.statNumber}>
              <Increment number={24} />+
            </h2>
            <p className={styles.statDescription}>
              Projects Completed
            </p>
          </div>
          <div className={styles.statBlock}>
            <h2 className={styles.statNumber}>
              <Increment number={18} />+
            </h2>
            <p className={styles.statDescription}>
              Happy Clients
            </p>
          </div>
          <div className={styles.statBlock}>
            <h2 className={styles.statNumber}>
              <Increment number={15} />+
            </h2>
            <p className={styles.statDescription}>
              Client Reviews
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Counter;