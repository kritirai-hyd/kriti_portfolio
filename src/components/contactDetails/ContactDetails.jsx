import React from "react";
import Link from "next/link";
import Contact from "../contact/Contact";
import useLenis from "../hooks/useLenis";
import { useTheme } from "../../context/ThemeContext";
import styles from "./ContactDetails.module.css";
const ContactDetails = () => {
  const { theme } = useTheme();
  useLenis();
  return (
    <>
      <section
        className={`${styles.breadcrumb} ${
          theme === "dark" ? styles.darkTheme : styles.lightTheme
        }`}
      >
        <div className={styles.container}>
          <h1 className={styles.title}>Get in Touch</h1>
          <nav className={styles.url}>
            <Link href="https://www.kritirai.com" className={styles.link}>
              Home
            </Link>
            <span className={styles.division}>/</span>
            <span className={styles.latest}>Contact</span>
          </nav>
        </div>
      </section>
      <Contact />
    </>
  );
};
export default ContactDetails;
