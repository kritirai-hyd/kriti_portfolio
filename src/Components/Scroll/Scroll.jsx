import React from "react";
import Image from "next/image";
import star from "../../assets/star.png";
import styles from "./Scroll.module.css";


const Scroll = () => {
  const scrollItems = [
    "Frontend Web Developer",
    "Backend Web Developer",
    "Full Stack Web Developer",
    "SEO Expert",
   "Frontend Web Developer",
    "Backend Web Developer",
    "Full Stack Web Developer",
    "SEO Expert", "Frontend Web Developer",
    "Backend Web Developer",
    "Full Stack Web Developer",
    "SEO Expert", "Frontend Web Developer",
    "Backend Web Developer",
    "Full Stack Web Developer",
    "SEO Expert", "Frontend Web Developer",
    "Backend Web Developer",
    "Full Stack Web Developer",
    "SEO Expert",
  ];

  return (
<div className={styles.bg}>

  <div className={styles.scrollBanner}>
    <div className={styles.scrollTrack}>
      {scrollItems.map((item, index) => (
        <div key={index} className={styles.scrollItem}>
          <Image
          
            src={star}
            width={20}
            height={20}
            alt="Star Icon"
          />
          <span>{item}</span>
        
        </div>
      ))}
      {/* Duplicate for seamless loop */}
      {scrollItems.map((item, index) => (
        <div key={`dup-${index}`} className={styles.scrollItem}>
          <Image
          
            src={star}
            width={20}
            height={20}
            alt="Star Icon"
          />
          <span>{item}</span>
      
        </div>
      ))}
    </div>
  </div>
</div>
  );
};

export default Scroll;
