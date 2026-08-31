
import React from "react";
import useLenis from "../hooks/useLenis";
import { useTheme } from "../context/ThemeContext";

import styles from "./services.module.css";
import BreadCrumb from "../ui/breadCrumb/BreadCrumb";
import Services from "../services/Services";
const Service = () => {
  useLenis();
  const { theme } = useTheme();
  return (
    <div
      className={styles.servicesPage}
    >
      <BreadCrumb
        title="Services"
        path={[{ name: "Home", link: "/" }, { name: "Services" }]}
      />
     <Services />
    </div>
  );
};
export default Service;
