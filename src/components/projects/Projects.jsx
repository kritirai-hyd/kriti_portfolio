import React from "react";
import styles from "./projects.module.css";
import Image from "next/image";
import project from "./Project";
import Heading from "../ui/heading/Heading";
export default function Projects() {
  return (
    <div className={styles.bg}>      <Heading
          heading="My Recent Work"
          para="Explore some of my latest projects, where I combine modern design, clean development, and user-focused experiences to create websites that are fast, responsive, and built to deliver real results."
        />      <br />
      <div className={styles.creationsList}>
  
        {project.map((item) => (
          <div
            key={item.id}
            className={`${styles.creationItem} ${
              item.isReversed ? styles.reverse : ""
            }`}
          >
            {item.isReversed ? (
              <>
                <div className={styles.creationMockup}>
                  <Image
                    className={styles.mockupImg}
                    src={item.image}
                    alt={item.alt}
                  />
                </div>
                <div className={styles.creationInfo}>
                  
                  <h3 className={styles.creationName}>{item.title}</h3>
                  <span className={styles.creationTag}>{item.tag}</span>
                  <a href={item.link} className={styles.btnCircleArrow}>
                    ↗
                  </a>
                </div>
              </>
            ) : (
              <>
                <div className={styles.creationInfo}>
               
                  <h3 className={styles.creationName}>{item.title}</h3>   <span className={styles.creationTag}>{item.tag}</span>
                  <a href={item.link} className={styles.btnCircleArrow}>
                    ↗
                  </a>
                </div>
                <div className={styles.creationMockup}>
                  <Image
                    className={styles.mockupImg}
                    src={item.image}
                    alt={item.alt}
                  />
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
