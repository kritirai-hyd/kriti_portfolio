"use client";
import React from "react";
import Image from "next/image";
import styles from "./Certificate.module.css";
import Link from "next/link";
<<<<<<< HEAD
import { useTheme } from "../context/ThemeContext";
import Btn from "../ui/Btn/Btn";
import certificates from "./certificates.json";
import BreadCrumb from "../ui/BreadCrumb/BreadCrumb";
=======
import { useTheme } from "../../context/ThemeContext";
import Btn from "../ui/Btn/Btn";
import certificates from "./certificates.json";
>>>>>>> 38539456c0d6ded47a8dd538a9d68180295bfbe0
const CertificateDetails = () => {
  const { theme } = useTheme();

  return (
<<<<<<< HEAD
    <>    <BreadCrumb
  title="Certificates"
  path={[
    { name: "Home", link: "/" },
    { name: "Certificates" }
  ]}
/>
=======
>>>>>>> 38539456c0d6ded47a8dd538a9d68180295bfbe0
    <section
      className={`${styles["certificate-section"]} ${
        theme === "dark" ? styles["dark-theme"] : styles["light-theme"]
      }`}
      id="certificates"
    >
<<<<<<< HEAD
 

=======
>>>>>>> 38539456c0d6ded47a8dd538a9d68180295bfbe0
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
<<<<<<< HEAD
                      <Link href={`${c.credential}`}>
=======
                      <Link href={`/certificates/${c.credential}`}>
>>>>>>> 38539456c0d6ded47a8dd538a9d68180295bfbe0
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
<<<<<<< HEAD
    </section></>
=======
    </section>
>>>>>>> 38539456c0d6ded47a8dd538a9d68180295bfbe0
  );
};

export default CertificateDetails;
