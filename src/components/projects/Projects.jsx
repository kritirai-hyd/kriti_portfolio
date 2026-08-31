import React from "react";
import styles from "./projects.module.css";
import Image from "next/image";
import project from "./Project";
import Heading from "../ui/heading/Heading";
import Link from "next/link";
export default function Projects() {
  return (
    <div className={styles.bg}>
      {" "}
      <Heading
        heading="My Recent Work"
        para="Explore some of my latest projects, where I combine modern design, clean development, and user-focused experiences to create websites that are fast, responsive, and built to deliver real results."
      />{" "}
      <br />
      <div className={styles.projects}>
        {project.map((item) => (
          <div
            key={item.id}
            className={`${styles.project} ${
              item.isreversed ? styles.reverse : ""
            }`}
          >
            {item.isreversed ? (
              <>
                <div className={styles.card}>
                  <Image
                    className={styles.image}
                    src={item.image}
                    alt={item.alt}
                  />
                </div>
                <div className={styles.details}>
                  <h3 className={styles.title}>{item.title}</h3>
                  <span className={styles.des}>{item.des}</span>
                  <br />
                  <Link href={item.link} className={styles.readmore}>
                    ↗
                  </Link>
                </div>
              </>
            ) : (
              <>
                <div className={styles.details}>
                  <h3 className={styles.title}>{item.title}</h3>{" "}
                  <span className={styles.des}>{item.des}</span>
                  <br />
                  <Link href={item.link} className={styles.readmore}>
                    ↗
                  </Link>
                </div>
                <div className={styles.card}>
                  <Image
                    className={styles.image}
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
