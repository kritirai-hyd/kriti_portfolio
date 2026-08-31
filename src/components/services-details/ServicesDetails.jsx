
import React from "react";
import useLenis from "../hooks/useLenis";
import { useTheme } from "../context/ThemeContext";

import styles from "./ServicesDetails.module.css";
import BreadCrumb from "../ui/BreadCrumb/BreadCrumb";
import Services from "../services/Services";
const ServicesDetails = () => {
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
export default ServicesDetails;
