import Image from "next/image";
import { useTheme } from "./ThemeContext";
import light from "../../assets/svg/toggle-l.svg";
import dark from "../../assets/svg/toggle-d.svg";
export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  return (
    <button
      onClick={toggleTheme}
      style={{ background: "none", border: "none", cursor: "pointer" }}
    >
      <Image
        src={theme === "light" ? dark : light}
        alt="Toggle Theme"
        width={25}
        height={25}
      />
    </button>
  );
}
