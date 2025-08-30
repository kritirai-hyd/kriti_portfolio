"use client";
import React, { useState, useEffect, useRef } from "react";
import styles from "./Header.module.css";

import logo from "../../assets/svg/kritirai.svg";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "../context/ThemeToggle";
import { useTheme } from "../../app/context/ThemeContext";
import clsx from "clsx";

const Header = () => {
const pathname = usePathname();
const { theme } = useTheme();
const [isActive, setIsActive] = useState(false);
const [scrolled, setScrolled] = useState(false);
const navRef = useRef(null);

const handleClick = () => {
setIsActive(!isActive);
};

// Close mobile menu when route changes
useEffect(() => {
setIsActive(false);
}, [pathname]);

// Add scroll effect to header
useEffect(() => {
const handleScroll = () => {
setScrolled(window.scrollY > 10);
};

window.addEventListener("scroll", handleScroll);
return () => window.removeEventListener("scroll", handleScroll);
}, []);

// Close menu when clicking outside
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

// Prevent body scroll when menu is open
useEffect(() => {
if (isActive) {
document.body.style.overflow = "hidden";
} else {
document.body.style.overflow = "unset";
}

return () => {
document.body.style.overflow = "unset";
};
}, [isActive]);

return (
<header
className={clsx(
styles.header,
styles[theme],
scrolled && styles.scrolled
)}
>
<div className={styles.container}>
<div className={styles["header-left"]}>
<Link href="/" className={styles["logo-link"]}>
<Image
src={logo}
width={140}
height={80}
alt="Kriti Rai Logo"
className={styles.logo}
priority
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
<Link
className={clsx(
styles["nav-link"],
theme === "dark" ? styles["cl-dark"] : styles["cl-light"]
)}
href={`/${page}`}
>
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
<div className={styles["mobile-theme-toggle"]}>
<ThemeToggle />
</div>
<button
className={clsx(styles.burger, isActive && styles.open)}
onClick={handleClick}
aria-label="Toggle navigation"
aria-expanded={isActive}
>
<span></span>
<span></span>
<span></span>
</button>
</div>
</div>
</header>
);
};

export default Header;