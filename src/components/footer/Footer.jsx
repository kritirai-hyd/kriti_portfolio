import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./footer.module.css";
import { useTheme } from "../context/ThemeContext";
import logo from "../../assets/image/logo.png";
const Footer = () => {
  const { theme } = useTheme();
  return (
    <footer className={`${styles.footer} ${styles[theme]}`}>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={`${styles.link}`}>
            <div className={styles.logo}>
              <Image
                src={logo}
                alt="Kriti Rai - Full Stack Developer"
                width={36}
                height={36}
              />
            </div>
            <p className={styles.desc}>
              I help startups, founders, and growing businesses build fast,
              scalable, and high-performing websites, web applications, and
              mobile apps. I focus on modern technology, seamless user
              experiences, SEO-ready architecture, and reliable solutions built
              to grow with your business.
            </p>
          </div>
          <div className={styles.link}>
            <h3>Quick Links</h3>
            <ul className={styles.list}>
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
          <div className={styles.link}>
            <h3>Quick Links</h3>
            <li>
              <Link href="/projects">Projects</Link>
            </li>
            <li>
              <Link href="https://www.kritirai.com">Blogs</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
            <li>
              <Link href="/faq">FAQ</Link>
            </li>
          </div>
          <div className={styles.link}>
            <h3>Useful Links</h3>
            <li>
              <Link href="/sitemap">Sitemap</Link>
            </li>
            <li>
              <Link href="https://www.kritirai.com"> Terms & Conditions</Link>
            </li>
            <li>
              <Link href="https://www.kritirai.com">Privacy Policy</Link>
            </li>
            <li>
              <Link href="/gallery">Gallery</Link>
            </li>
          </div>
        </div>
        <h2 className={styles.details}>
          full stack developer in Hyderabad, full stack developer in Telangana,
          web developer in Hyderabad, web development company in Hyderabad, web
          development services in Hyderabad, full stack developer in Bengaluru,
          web developer in Bengaluru, web development company in Bengaluru, web
          development services in Bengaluru, full stack developer in Delhi, web
          developer in Delhi, web development company in Delhi, web development
          services in Delhi, full stack developer in Noida, web developer in
          Noida, web development company in Noida, web development services in
          Noida, full stack developer in Gurugram, web developer in Gurugram,
          web development company in Gurugram, web development services in
          Gurugram, full stack developer in Lucknow, web developer in Lucknow,
          web development company in Lucknow, web development services in
          Lucknow, full stack developer in Varanasi, web developer in Varanasi,
          web development company in Varanasi, web development services in
          Varanasi, full stack developer in Gorakhpur, web developer in
          Gorakhpur, web development company in Gorakhpur, web development
          services in Gorakhpur, React.js developer in Hyderabad, Next.js
          developer in Hyderabad, Node.js developer in Hyderabad, React.js
          development services, Next.js development services, Node.js
          development services, custom website development, web application
          development services, responsive website development, mobile app
          development, SaaS development services, custom software development,
          SEO-friendly website development, high-performance web development,
          professional web development services in India
        </h2>
        <div className={styles.bottom}>
          <p>
            © {new Date().getFullYear()}. All Rights Reserved by Kriti Rai. Full
            Stack Developer.
          </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
