import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import styles from "./Header.module.css";
import ThemeToggle from "../context/ThemeToggle";
import logo from "../../assets/svg/kritirai.svg";

export default function Header() {
  const [isActive, setIsActive] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const handleToggle = () => setIsActive(!isActive);
  const handleClose = () => setIsActive(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsActive(false);
  }, [pathname]);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.headerLeft}>
        <Link href="/">
          <Image
            src={logo}
            width={140}
            height={60}
            className={styles.logo}
            alt="Kriti Rai"
          />
        </Link>
      </div>

      <nav className={`${styles.nav} ${isActive ? styles.open : ""}`}>
        <ul className={styles.navList}>
          {["about", "services", "projects", "contact", "blog", "gallery"].map(
            (page) => (
              <li
                key={page}
                className={pathname === `/${page}` ? styles.active : ""}
              >
                <Link href={`/${page}`} onClick={handleClose}>
                  {page.charAt(0).toUpperCase() + page.slice(1)}
                </Link>
              </li>
            ),
          )}
        </ul>

        <div className={styles.navThemeToggle}>
          <ThemeToggle />
        </div>
      </nav>
<div className={styles.mnavThemeToggle}>
          <ThemeToggle />
        </div>
      <button
        className={`${styles.burger} ${isActive ? styles.open : ""}`}
        onClick={handleToggle}
        aria-label="Toggle Menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
       
    </header>
  );
}
