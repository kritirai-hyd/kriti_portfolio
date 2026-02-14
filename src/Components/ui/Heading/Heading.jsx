"use client";
import React from "react";
import styles from "./Heading.module.css";
<<<<<<< HEAD
import { useTheme } from "../../context/ThemeContext";
=======
import { useTheme } from "../../../context/ThemeContext";
>>>>>>> 38539456c0d6ded47a8dd538a9d68180295bfbe0

const Heading = ({ heading, para }) => {
  const { theme } = useTheme();

  return (
    <div className={styles.sectionHeader}>
      <h2
<<<<<<< HEAD
        className={styles.sectionTitle}
=======
        className={`${styles.sectionTitle} ${
          theme === "dark" ? styles.tDark : styles.tLight
        }`}
>>>>>>> 38539456c0d6ded47a8dd538a9d68180295bfbe0
      >
        {heading}
      </h2>
      {para && <p className={styles.subTitle}>{para}</p>}
    </div>
  );
};

export default Heading;
