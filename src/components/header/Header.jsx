import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import s from "./style.module.css";
import Toggle from "../context/ThemeToggle";
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

  const menu = [
    {
      name: "About Me",
      link: "/about-kriti-rai",
    },
    {
      name: "Services",
      link: "/services",
    },
    {
      name: "Projects",
      link: "/projects",
    },
    {
      name: "Contact",
      link: "/contact",
    },
    {
      name: "Blog",
      link: "/blog",
    },
  ];

  return (
    <header className={`${s.header} ${scrolled ? s.scrolled : ""}`}>
      <div className={s.left}>
        <Link href="/">
          <Image
            src={logo}
            width={140}
            height={60}
            className={s.logo}
            alt="Kriti Rai"
          />
        </Link>
      </div>

      <nav className={`${s.nav} ${isActive ? s.open : ""}`}>
        <ul className={s.list}>
          {menu.map((page) => (
            <li
              key={page}
              className={pathname === `${page.link}` ? s.active : ""}
            >
              <Link href={`${page.link}`} onClick={handleClose}>
                {page.name}
              </Link>
            </li>
          ))}
        </ul>

        <div className={s.toggle}>
          <Toggle />
        </div>
      </nav>
      <div className={s.mtoggle}>
        <Toggle />
      </div>
      <button
        className={`${s.menu} ${isActive ? s.open : ""}`}
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
