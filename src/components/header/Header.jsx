import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import s from "./header.module.css";
import Toggle from "../context/ThemeToggle";
import logo from "../../assets/image/logo.png";
export default function Header() {
  const [active, setactive] = useState(false);
  const [scroll, setscroll] = useState(false);
  const url = usePathname();
  const toggle = () => setactive(!active);
  const close = () => setactive(false);
  useEffect(() => {
    const scrolling = () => setscroll(window.scrollY > 10);
    window.addEventListener("scroll", scrolling);
    return () => window.removeEventListener("scroll", scrolling);
  }, []);
  useEffect(() => {
    setactive(false);
  }, [url]);
  const menu = [
    {
      name: "About",
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
      name: "Resume",
      link: "/resume",
    },
    {
      name: "Contact",
      link: "/contact",
    },
  ];
  return (
    <header className={`${s.header} ${scroll ? s.scroll : ""}`}>
      <div className={s.left}>
        <Link href="/">
          <Image
            src={logo}
            width={140}
            height={50}
            className={s.logo}
            alt="Kriti Rai"
          />
        </Link>
      </div>
      <nav className={`${s.nav} ${active ? s.open : ""}`}>
        <ul className={s.list}>
          {menu.map((page) => (
            <li key={page} className={url === `${page.link}` ? s.active : ""}>
              <Link href={`${page.link}`} onClick={close}>
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
        className={`${s.menu} ${active ? s.open : ""}`}
        onClick={toggle}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </header>
  );
}
