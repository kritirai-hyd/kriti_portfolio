import React, { useState } from "react";
import styles from "./FloatingNav.module.css";
import Link from "next/link";
import Image from "next/image";
import star from "../../assets/svg/star.svg";
import s from "../../assets/svg/services.svg";
import w from "../../assets/svg/works.svg";
import sk from "../../assets/svg/skills.svg";
import a from "../../assets/svg/about.svg";
import c from "../../assets/svg/call.svg";
import b from "../../assets/svg/blog.svg";

const FloatingNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => setIsOpen(!isOpen);

  return (
    <div className={`${styles.floatingNav} ${isOpen ? styles.open : ""}`}>
      <button
        className={styles.floatingNavToggle}
        onClick={toggleNav}
        aria-label="Toggle navigation"
        aria-expanded={isOpen}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <ul className={styles.floatingNavList}>
        <li className={styles.floatingNavItem}>
          <Link href="/skills" className={styles.floatingNavLink}>
            <Image src={sk} width={24} height={24} alt="Skills" />
            <span className={styles.navLabel}>Skills</span>
          </Link>
        </li>
        <li className={styles.floatingNavItem}>
          <Link href="/services" className={styles.floatingNavLink}>
            <Image src={w} width={24} height={24} alt="Services" />
            <span className={styles.navLabel}>Services</span>
          </Link>
        </li>
        <li className={styles.floatingNavItem}>
          <Link href="/works" className={styles.floatingNavLink}>
            <Image src={s} width={24} height={24} alt="Projects" />
            <span className={styles.navLabel}>Projects</span>
          </Link>
        </li>
        <li className={styles.floatingNavItem}>
          <Link href="/contact" className={styles.floatingNavLink}>
            <Image src={c} width={24} height={24} alt="Contact" />
            <span className={styles.navLabel}>Contact</span>
          </Link>
        </li>
        <li className={styles.floatingNavItem}>
          <Link href="/blog" className={styles.floatingNavLink}>
            <Image src={b} width={28} height={28} alt="Blog" />
            <span className={styles.navLabel}>Blog</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default FloatingNav;
