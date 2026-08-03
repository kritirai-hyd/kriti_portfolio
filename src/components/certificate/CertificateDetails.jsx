import React from "react";
import Image from "next/image";
import styles from "./Certificate.module.css";
import Link from "next/link";
import { useTheme } from "../context/ThemeContext";
import certificates from "./certificates.json";
import BreadCrumb from "../ui/BreadCrumb/BreadCrumb";
const CertificateDetails = () => {
  const { theme } = useTheme();
  return (
    <>
      {" "}
      <BreadCrumb
        title="Certificates"
        path={[{ name: "Home", link: "/" }, { name: "Certificates" }]}
      />
      <section className={styles.bg}>
      <div className={styles["certificate-section"]}>
        <div className={styles.container}>
          <div className={styles["section-header"]}>
            <h2 className={styles.title}>Certificates</h2>
          </div>
          <div className={styles["certificates-cards"]}>
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
                        <Link href={`${c.credential}`}>
                          {" "}
                          <button className={styles["view-button"]}>
                            View Certificate
                          </button>
                        </Link>
                      </div>
                    </div>
                    <div className={styles["certificate-text"]}>
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
                      <div className={styles["button"]}>
                        <Link
                          href={`${c.credential}`}
                          rel="noopener noreferrer"
                          className={`${styles["link"]} ${
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
      </div></section>
    </>
  );
};
export default CertificateDetails;
