 import React from "react";
import styles from "./Footer.module.css";
import { useTheme } from "../context/ThemeContext";
import a from "../../assets/copyscap.png";
import b from "../../assets/dmca.png";
import Image from "next/image";

const Footer = () => {
  const { theme } = useTheme();

  return (
    <footer className={`${styles.footer} ${styles[theme]}`}>
      <div className={styles.content}>
             <p className={styles.text}>
          © {new Date().getFullYear()} <span>Kriti Rai</span>. All rights reserved.
        </p>
        <div className={styles.badges}>
          <Image src={a} alt="Copyscape Protected" className={styles.img} />
          <Image src={b} alt="DMCA Protected" className={styles.img} />
        </div>

   

      </div>
    </footer>
  );
};

export default Footer;