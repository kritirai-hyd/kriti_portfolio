import React from "react";
import Image from "next/image";
import star from "../../assets/svg/star.svg";
import styles from "./Scroll.module.css";

const Scroll = () => {
  const scrollItems = [
    "Frontend Web Developer",
    "Backend Web Developer",
    "Full Stack Web Developer",
    "SEO Expert",
  ];

  return (
  <div className={styles.bg}>
      <div className={styles.scrollBanner}>
      {scrollItems.map((item, index) => (
        <div key={index} className={styles.scrollItem}>
          <Image
            className={styles.starIcon}
            src={star}
            width={20}
            height={20}
            alt="Star Icon"
          />
          <span>{item}</span>
          <Image
            className={styles.starIcon}
            src={star}
            width={20}
            height={20}
            alt="Star Icon"
          />
        </div>
      ))}
    </div>
  </div>
  );
};

export default Scroll;
