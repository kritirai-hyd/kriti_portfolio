"use client";
import React from "react";
import Image from "next/image";
import styles from "./Certificate.module.css";
import Link from "next/link";
import { useTheme } from "../../context/ThemeContext";
import Btn from "../ui/Btn/Btn";
import certificates from "./certificates.json";
const CertificateDetails = () => {
  const { theme } = useTheme();

  return (
    <section
      className={`${styles["certificate-section"]} ${
        theme === "dark" ? styles["dark-theme"] : styles["light-theme"]
      }`}
      id="certificates"
    >
      <div className={styles.container}>
        <div className={styles["section-header"]}>
          <h2
            className={`${styles.groupTitle} ${
              theme === "dark" ? styles.tDark : styles.tLight
            }`}
          >
            Certificates
          </h2>
        </div>

        <div className={styles["certificates-grid"]}>
          {certificates.map((c) => {
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
    </section>
  );
};

export default CertificateDetails;
