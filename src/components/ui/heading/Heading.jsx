import React from "react";
import styles from "./heading.module.css";

const Heading = ({ heading, para }) => {
  return (
    <>
      <h2 className={styles.heading}>{heading}</h2>
      <p className={styles.para}>{para}</p>
    </>
  );
};

export default Heading;
