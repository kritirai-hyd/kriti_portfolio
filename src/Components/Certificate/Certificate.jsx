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
    <section
      className={`${styles["certificate-section"]} ${
        theme === "dark" ? styles["dark-theme"] : styles["light-theme"]
      }`}
      id="certificates"
    >
      <div className={styles.container}>
        <Heading heading="Certificates" />

        <div className={styles["certificates-grid"]}>
          {certificates.slice(0, 3).map((cert) => {
            // Use dynamic import for images
            const imagePath = require(`../../assets/image/${cert.image}`);

            return (
              <div className={styles["certificate-card"]} key={cert.id}>
                <div className={styles["card-inner"]}>
                  {/* Image */}
                  <div className={styles["certificate-image-wrapper"]}>
                    <Image
                      src={imagePath}
                      alt={`Certificate ${cert.title}`}
                      className={styles["certificate-image"]}
                      width={500}
                      height={400}
                      priority={cert.id <= 1} // Only prioritize first image
                    />

                    <div className={styles["certificate-overlay"]}>
                      <Link 
                        href={cert.credential} 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        <button className={styles["view-button"]}>
                          <ExternalLink size={16} /> View Certificate
                        </button>
                      </Link>
                    </div>
                  </div>

                  {/* Content */}
                  <div className={styles["certificate-content"]}>
                    <h3 className={styles["certificate-title"]}>
                      {cert.title}
                    </h3>

                    <p className={styles.meta}>
                      <Building2 size={16} /> {cert.org}
                    </p>

                    <p className={styles.metadate}>
                      <CalendarDays size={16} /> {cert.date}
                    </p>

                    <div className={styles["certificate-actions"]}>
                      <Link 
                        href={cert.credential}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles["credential-link"]}
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
    </section>
  );
};

export default Certificate;