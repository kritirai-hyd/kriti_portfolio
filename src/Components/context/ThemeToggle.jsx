

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
  );
}
