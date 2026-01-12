"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import styles from "./Header.module.css";
import ThemeToggle from "../context/ThemeToggle";
import logo from "../../assets/svg/kritirai.svg";

export default function Header() {
  const [isActive, setIsActive] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef(null);
  const pathname = usePathname();

  const handleClick = () => setIsActive((prev) => !prev);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ✅ Close menu on route change
  useEffect(() => {
    setIsActive(false);
  }, [pathname]);

  // ✅ Close menu on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isActive &&
        navRef.current &&
        !navRef.current.contains(event.target) &&
        !event.target.closest(`.${styles.burger}`)
      ) {
        setIsActive(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isActive]);

  return (
    <header className={clsx(styles.header, scrolled && styles.scrolled)}>
      <div className={styles["header-left"]}>
        <Link href="/" className={styles["logo-link"]}>
          <Image
            src={logo}
            width={140}
            height={80}
            className={styles.logo}
            alt="Kriti Rai | Kriti"
          />
        </Link>
      </div>

      <nav className={clsx(styles.nav, isActive && styles.open)} ref={navRef}>
        <ul className={styles["nav-list"]}>
          {["about", "services", "projects", "contact", "blog"].map((page) => (
            <li
              key={page}
              className={clsx(
                pathname === `/${page}` && styles["active-link"]
              )}
            >
              <Link href={`/${page}`} className={styles["nav-link"]}>
                {page.charAt(0).toUpperCase() + page.slice(1)}
              </Link>
            </li>
          ))}
        </ul>

        <div className={styles["nav-theme-toggle"]}>
          <ThemeToggle />
        </div>
      </nav>

      <div className={styles["mobile-controls"]}>
        <ThemeToggle />
        <button
          className={clsx(styles.burger, isActive && styles.open)}
          onClick={handleClick}
          aria-label="Toggle navigation"
          aria-expanded={isActive}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
