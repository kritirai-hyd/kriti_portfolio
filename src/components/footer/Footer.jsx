import React from "react";
import Image from "next/image";
import Link from "next/link";
// import {
//   FaFacebookF,
//   FaLinkedinIn,
//   FaYoutube,
//   FaGithub,
//   FaInstagram,
//   FaGoogle,
// } from "react-icons/fa";

// import { MdEmail, MdPhone } from "react-icons/md";

import styles from "./footer.module.css";
import { useTheme } from "../context/ThemeContext";
import logo from '../../assets/image/logo.png';
import e from '../../assets/image/email.png';
import l from '../../assets/image/loc.png';
import n from '../../assets/image/call.png';

const Footer = () => {
  const { theme } = useTheme();

  return (
  <footer className={`${styles.footer} ${styles[theme] || ""}`}>
  <div className={styles.container}>

    {/* Top Main Section */}
    <div className={styles.topSection}>

      {/* Brand Info Column */}
      <div className={`${styles.column} ${styles.brandCol}`}>
        <div className={styles.logoWrapper}>
          <Image
            src={logo}
            alt="Kriti Rai - Full Stack Developer"
            width={36}
            height={36}
          />
        </div>

        <p className={styles.brandDesc}>
          I help startups, founders, and growing businesses build fast,
          scalable, and high-performing websites, web applications, and
          mobile apps. I focus on modern technology, seamless user
          experiences, SEO-ready architecture, and reliable solutions
          built to grow with your business.
        </p>
      </div>

      {/* Quick Links Column */}
      <div className={styles.column}>
        <h3>Quick Links</h3>

        <ul className={styles.linkList}>
          <li>
            <Link href="/">Home</Link>
          </li>

          <li>
            <Link href="/about">About</Link>
          </li>

          <li>
            <Link href="/services">Services</Link>
          </li>

          <li>
            <Link href="/resume">Resume</Link>
          </li>
       
        </ul>
      </div>

      <div className={styles.column}>
        <h3>Useful Links</h3>

      <li>
            <Link href="/projects">Projects</Link>
          </li>

          <li>
            <Link href="/blogs">Blogs</Link>
          </li>

          <li>
            <Link href="/contact">Contact</Link>
          </li>

          <li>
            <Link href="/faq">FAQ</Link>
          </li>
      </div>

      {/* Contact Column */}
      <div className={styles.column}>
        <h3>Contact Me</h3>

        <ul className={styles.contactList}>

          <li>
            <span className={styles.iconBox}>
          <Image
            src={e}
            alt="Kriti Rai - Full Stack Developer"
            width={30}
            height={30}
          />
            </span>

            <a href="mailto:support@creativecoder.net">
              support@creativecoder.net
            </a>
          </li>

          <li>
            <span className={styles.iconBox}>
  <Image
            src={l}
            alt="Kriti Rai - Full Stack Developer"
          width={30}
            height={30}
          />
            </span>

           
             Hyderabad, Telangana
         
          </li>

          <li>
            <span className={styles.iconBox}>
             <Image
            src={n}
            alt="Kriti Rai - Full Stack Developer"
         width={30}
            height={30}
          />
            </span>

            <a href="tel:+918074901738">
              +91 8074901738
            </a>
          </li>

        </ul>

        {/* Social Icons */}
        {/*
        <div className={styles.socials}>
          <a href="#" aria-label="LinkedIn">
            <FaLinkedinIn />
          </a>

          <a href="#" aria-label="GitHub">
            <FaGithub />
          </a>

          <a href="#" aria-label="Instagram">
            <FaInstagram />
          </a>

          <a href="#" aria-label="YouTube">
            <FaYoutube />
          </a>
        </div>
        */}
      </div>

    </div>

    {/* SEO Keywords Text */}
    <p className={styles.seoKeywords}>
      full stack developer in Hyderabad, web developer in Hyderabad,
      website development company in Hyderabad, web application development
      in Hyderabad, React.js developer in Hyderabad, Next.js developer in
      Hyderabad, Node.js developer in Hyderabad, full stack web development
      services, custom website development, web application development,
      mobile app development, SaaS development, React development, Next.js
      development, Node.js development, SEO-friendly website development,
      high-performance web applications, responsive website development,
      custom software development, professional web development services
      in India
    </p>

    {/* Bottom Bar */}
    <div className={styles.bottomBar}>

      <p>
        © {new Date().getFullYear()}. All Rights Reserved by Kriti Rai. Full Stack Developer.
      </p>

      <div className={styles.bottomLinks}>
        <Link href="/sitemap">
          Sitemap
        </Link>

        <Link href="/privacy-policy">
      Privacy Policy
        </Link>

        <Link href="/terms-and-conditions">
          Terms & Conditions
        </Link>
      </div>

    </div>

  </div>
</footer>
  );
};

export default Footer;