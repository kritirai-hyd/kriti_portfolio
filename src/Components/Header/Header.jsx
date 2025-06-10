"use client"
import React, { useState } from "react";
import "./Header.css";
import logo1 from "../../assets/image/college-career.png";
import t_l from "../../assets/svg/toggle-l.svg";
import t_d from "../../assets/svg/toggle-d.svg";
import Image from "next/image";
import Link from "next/link";
const Header = () => {
  const [theme, setTheme] = useState("light");
  const togglemode = () => {
    theme == "light" ? setTheme("dark") : setTheme("light");
  };
  const [isActive, setIsActive] = useState(false);
  const handleClick = () => {
    setIsActive(!isActive);
  };
  return (
    <>
      <div className="naverbar_m">
         <h1 className="logo">Kriti Rai</h1>
        <label className="burger" htmlFor="burger">
          <input type="checkbox" id="burger" onClick={handleClick} />
          <span></span>
          <span></span>
          <span></span>
        </label>
        {/* <img src={logo1} alt="" className="logo" /> */}
        
      </div>
      <div className={isActive ? "nav-m-list active" : "nav-m-list"}>
        <ul className="m-list">
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Contact</li>
          <div className="search-box1">
            <button>Login</button>
          </div>
        </ul>
      </div>
      <div className="navbar">
        {/* <Image  src={theme == "light" ? logo1 : logo1} alt="" className="logo" /> */}
        <h1 className="logo">Kriti Rai</h1>
        <ul>
      
                    <li><Link href="">Services</Link></li>
                     <li><Link href="">About Me</Link></li>
                    <li><Link href="">Works</Link></li>
                    <li><Link href="">Resume</Link></li>
                    <li><Link href="">Skills</Link></li>
                     <li><Link href="">Testmonials</Link></li>
                        <li><Link href="">Contact</Link></li>
        </ul>
        <div className="search-box">
          <button>Login</button>
        </div>
        <img
          src={theme == "light" ? t_d : t_l}
          onClick={() => {
            togglemode();
          }}
          alt="Kriti Rai, Full Stack Developer"
          className="toggle-icon"
        />
      </div>
   

    </>
  );
};
export default Header;
