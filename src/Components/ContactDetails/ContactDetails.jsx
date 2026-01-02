"use client";
import React from "react";
import Link from "next/link";
import Contact from "../Contact/Contact";
import useLenis from "../hooks/useLenis";
import { useTheme } from "../../context/ThemeContext";
import styles from "./ContactDetails.module.css";

const ContactDetails = () => {
  const { theme } = useTheme();
  useLenis();

  return (
    <>
      <section
        className={`${styles.contactBreadcrumb} ${
          theme === "dark" ? styles.darkTheme : styles.lightTheme
        }`}
        aria-label="Contact page breadcrumb"
      >
        <div className={styles.breadcrumbContainer}>
          <h1 className={styles.breadcrumbTitle}>Get in Touch</h1>
          <nav className={styles.breadcrumbPath} aria-label="Breadcrumb">
            <Link href="https://www.kritirai.com" className={styles.breadcrumbLink}>
              Home
            </Link>
            <span className={styles.breadcrumbSeparator}>/</span>
            <span className={styles.breadcrumbCurrent} aria-current="page">
              Contact
            </span>
          </nav>
        </div>
      </section>
      <Contact />
    </>
  );
};

export default ContactDetails;
