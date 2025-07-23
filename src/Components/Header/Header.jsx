"use client";
import React, { useState} from "react";
import "./Header.css";

import logo from "../../assets/svg/kritirai.svg";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "../context/ThemeToggle";
import { useTheme } from "../../app/context/ThemeContext";
const Header = () => {
const pathname = usePathname();
  const { theme } = useTheme();
  const [isActive, setIsActive] = useState(false);
  const handleClick = () => {
    setIsActive(!isActive);
  };
  return (
    <>
      <div className={`naverbar_m ${theme === 'dark' ? 'bg-dark' : 'bg-light'}`} >
          <div className="logo"><Image src={logo} width={120} height={100} alt="Kriti Rai is a skilled full stack web developer specializing in modern technologies like React, Node.js, and sql. View her portfolio and projects." />    <ThemeToggle /> </div>
   <label className="burger" htmlFor="burger">
           
          <input type="checkbox" id="burger" onClick={handleClick} />
          <span></span>
          <span></span>
          <span></span>
        </label>
      </div>
      
      <div className={isActive ? "nav-m-list active" : "nav-m-list"}>
        <ul className="m-list">

          <li>
            <Link className={`a ${theme === 'dark' ? 'cl-dark' : 'cl-light'}`} href="/about">About</Link>
          </li>
          <li>
            <Link className={`a ${theme === 'dark' ? 'cl-dark' : 'cl-light'}`} href="/services">Services</Link>
          </li>
          <li>
            <Link className={`a ${theme === 'dark' ? 'cl-dark' : 'cl-light'}`} href="/projects">Projects</Link>
          </li>
          <li>
            <Link className={`a ${theme === 'dark' ? 'cl-dark' : 'cl-light'}`} href="/contact">Contact</Link>
          </li>
             <li>
            <Link className={`a ${theme === 'dark' ? 'cl-dark' : 'cl-light'}`} href="/blog">Blog</Link>
          </li>
              <li>
          <div className="search-box1">
            <button><Link href="/login">Login</Link></button>
            
          </div>
          </li>
        </ul>
      </div>
      <div className={`navbar ${theme === 'dark' ? 'bg-dark' : 'bg-light'}`}>
        <div className="logo"><Image src={logo} width={120} height={120} alt="Kriti Rai - Expert Full Stack Web Developer specializing in React, Node.js, and Sql" /></div>
         <ul>
      
       <li className={pathname === "/about" ? "active-link" : ""}>
  <Link className={`a ${theme === 'dark' ? 'cl-dark' : 'cl-light'}`} href="/about">About</Link>
</li>
          <li>
            <Link className={`a ${theme === 'dark' ? 'cl-dark' : 'cl-light'}`} href="/services">Services</Link>
          </li>
          <li>
            <Link className={`a ${theme === 'dark' ? 'cl-dark' : 'cl-light'}`} href="/projects">Projects</Link>
          </li>
          <li>
            <Link className={`a ${theme === 'dark' ? 'cl-dark' : 'cl-light'}`} href="/contact">Contact</Link>
          </li>
             <li>
            <Link className={`a ${theme === 'dark' ? 'cl-dark' : 'cl-light'}`} href="/blog">Blog</Link>
          </li>
 
        </ul>
     
<ThemeToggle />
      </div>
    </>
  );
};
export default Header;
