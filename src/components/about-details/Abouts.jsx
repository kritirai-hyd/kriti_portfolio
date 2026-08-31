import React from "react";
import useLenis from "../hooks/useLenis";
import { useTheme } from "../context/ThemeContext";
import styles from "./abouts.module.css";
import Certificate from "../certificate/Certificate";
import BreadCrumb from "../ui/breadCrumb/BreadCrumb";
import Counter from "../counter/Counter";
import About from "../about/About";
import Skills from "../skills/Skills";
import Badges from "../badges/Badges";
import Contact from "../contact/Contact";
import Education from "../education/Education";
import FAQ from "../faq/FAQ";
const Abouts = () => {
  useLenis();
  const { theme } = useTheme();
  return (
    <div className={styles.main}>
      <BreadCrumb
        title="Skills & Expertise"
        path={[{ name: "Home", link: "/" }, { name: "Skills & Expertise" }]}
      />
      <About />
      <Skills />
      <Counter />
      <Certificate />
   
      <Badges />   <Education />
      <FAQ />
      <Contact />
    </div>
  );
};
export default Abouts;
