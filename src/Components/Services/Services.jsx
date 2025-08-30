"use client";
import React from 'react';
import services from './Services.json';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import Image from 'next/image';
import s from "../../assets/svg/arrow.svg";
import { useTheme } from "../../app/context/ThemeContext";
// 💡 Import the module CSS file
import styles from './Services.module.css';

const Services = () => {
  const { theme } = useTheme();

  return (
    <section 
      id='services' 
      // 💡 Use styles.services and conditionally apply styles.servicesLight or styles.bgLDark
      className={`${styles.services} ${theme === 'dark' ? styles.bgLDark : styles.servicesLight}`}
      aria-label="Services offered"
    >
      <div className={styles.sTitle}>
        <motion.h2
          variants={fadeIn("up", 0.1)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.7 }}
          className={styles.skillsTitle}
        >
          Services
        </motion.h2>
      </div>
      <motion.div 
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true, amount: 0.5 }}
        className={styles.serviceContainer}
      >
        {services.map((item) => (
          <motion.div 
            key={item.id} 
            className={styles.servicesCard}
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <div className={styles.title}>
              <h3>{item.title}</h3>
            </div>
            <div className={styles.desc}>
              <p className={styles.des}>{item.desc}</p>
            </div>
            <div className={styles.btn}>
              <button className={styles.serviesBtn} aria-label={`Learn more about ${item.title}`}>
                <Link 
                  href="https://www.kritirai.com/services" 
                  title={`Explore ${item.title} services`}
                  prefetch={false}
                >
                  <span>{item.rbtn} &nbsp;</span>
                  <Image 
                    src={s} 
                    alt="" 
                    width={16} 
                    height={16}
                    loading="lazy"
                  />
                </Link>
              </button>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Services;