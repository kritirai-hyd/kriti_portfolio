"use client";
import React from "react";
import styles from "./Heading.module.css";
import { useTheme } from "../../context/ThemeContext";

const Heading = ({ heading, para }) => {
  const { theme } = useTheme();

  return (
    <div className={styles.sectionHeader}>
      <h2
        className={styles.sectionTitle}
      >
        {heading}
      </h2>
      {para && <p className={styles.subTitle}>{para}</p>}
    </div>
  );
};

export default Heading;
