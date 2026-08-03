import React from "react";
import Image from "next/image";
import styles from "./Certificate.module.css";
import Link from "next/link";
import { useTheme } from "../context/ThemeContext";
import Btn from "../ui/Btn/Btn";
import certificates from "./certificates.json";
import Heading from "../ui/Heading/Heading";
import { CalendarDays, Building2, ExternalLink } from "lucide-react";
const Certificate = () => {
  const { theme } = useTheme();
  return (
       <section className={styles.bg}>
    <div
      className={styles["certificate-section"]}
    >
      <div className={styles.container}>
        <Heading
          heading="Certificates"
          para="A collection of certifications that showcase my skills, continuous learning, and commitment to staying updated with modern technologies."
        />
        <div className={styles["certificates-cards"]}>
          {certificates.slice(0, 3).map((cert) => {
            const imagePath = require(`../../assets/image/${cert.image}`);
            return (
              <div className={styles["certificate-card"]} key={cert.id}>
                <div className={styles["card-inner"]}>
                  <div className={styles["certificate-images"]}>
                    <Image
                      src={imagePath}
                      alt={`Certificate ${cert.title}`}
                      className={styles["certificate-image"]}
                      width={500}
                      height={400}
                      priority={cert.id <= 1}
                    />
                    <div className={styles["certificate-overlay"]}>
                      <Link href={cert.credential} target="_blank">
                        <button className={styles["view-button"]}>
                          <ExternalLink size={16} /> View Certificate
                        </button>
                      </Link>
                    </div>
                  </div>
                  <div className={styles["certificate-text"]}>
                    <h3 className={styles["certificate-title"]}>
                      {cert.title}
                    </h3>
                    <p className={styles.meta}>
                      <Building2 size={16} /> {cert.org}
                    </p>
                    <p className={styles.date}>
                      <CalendarDays size={16} /> {cert.date}
                    </p>
                    <div className={styles["button"]}>
                      <Link
                        href={cert.credential}
                        target="_blank"
                        className={styles["link"]}
                      >
                        Verify Credential <ExternalLink size={14} />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className={styles["view-more-container"]}>
          <Link href="/certificates" passHref>
            <Btn name="View More Certificates" />
          </Link>
        </div>
      </div>
    </div>
    </section>
  );
};
export default Certificate;
