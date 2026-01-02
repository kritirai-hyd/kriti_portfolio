import React from "react";
import Image from "next/image";
import styles from "./Certificate.module.css";
import Link from "next/link";
import { useTheme } from '../../context/ThemeContext';
import Btn from "../ui/Btn/Btn";
import certificates from "./certificates.json";
import Heading from "../ui/Heading/Heading";
const Certificate = () => {
  const { theme } = useTheme();

  return (
    <section
      className={`${styles["certificate-section"]} ${
        theme === "dark" ? styles["dark-theme"] : styles["light-theme"]
      }`}
      id="certificates"
    >
      <div className={styles.container}>

        <Heading heading="Certificates" />

        <div className={styles["certificates-grid"]}>
          {certificates.slice(0, 3).map((c) => {
            const img = require(`../../assets/image/${c.image}`);
            return (
              <div className={styles["certificate-card"]} key={c.id}>
                <div className={styles["card-inner"]}>
                  <div className={styles["certificate-image-wrapper"]}>
                    <Image
                      src={img}
                      alt={`Kriti Rai | ${c.title} Certificate`}
                      className={styles["certificate-image"]}
                      width={500}
                      height={400}
                    />
                    <div className={styles["certificate-overlay"]}>
                      <Link href={`/certificates/${c.credential}`}>
                        {" "}
                        <button className={styles["view-button"]}>
                          View Certificate
                        </button>
                      </Link>
                    </div>
                  </div>

                  <div className={styles["certificate-content"]}>
                    <h3 className={styles["certificate-title"]}>{c.title}</h3>
                    <p
                      className={`${styles["certificate-org"]} ${
                        theme === "dark" ? styles.tDog : styles.tLog
                      }`}
                    >
                      {c.org}
                    </p>
                    <p
                      className={`${styles["certificate-date"]} ${
                        theme === "dark" ? styles.tDog : styles.tLog
                      }`}
                    >
                      {c.date}
                    </p>

                    <div className={styles["certificate-actions"]}>
                      <Link
                        href={`/certificates/${c.credential}`}
                        rel="noopener noreferrer"
                        className={`${styles["credential-link"]} ${
                          theme === "dark" ? styles.tDbtn : styles.tLbtn
                        }`}
                      >
                        Verify Credential
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <br />
      <Link href="/certificates">
        {" "}
        <Btn name="View More Certificate" />
      </Link>
    </section>
  );
};

export default Certificate;
