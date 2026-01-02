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
  );
}
