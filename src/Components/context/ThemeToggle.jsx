<<<<<<< HEAD


import Image from "next/image";
import { useTheme } from "./ThemeContext";

import lightIcon from "../../assets/svg/toggle-l.svg";
import darkIcon from "../../assets/svg/toggle-d.svg";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      style={{ background: "none", border: "none", cursor: "pointer" }}
      aria-label="Toggle Theme"
    >
      <Image
        src={theme === "light" ? darkIcon : lightIcon}
        alt="Toggle Theme"
        width={28}
        height={28}
      />
    </button>
=======
// /Components/context/ThemeToggle.js
"use client";

import Image from "next/image";
import { useTheme } from "../../context/ThemeContext";
import t_l from "../../assets/svg/toggle-l.svg";
import t_d from "../../assets/svg/toggle-d.svg";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const icon = theme === "light" ? t_d : t_l;

  return (
    <div onClick={toggleTheme} style={{ cursor: "pointer" }}>
      <Image src={icon} width={40} height={40} alt="Toggle Theme" />
    </div>
>>>>>>> 38539456c0d6ded47a8dd538a9d68180295bfbe0
  );
}
