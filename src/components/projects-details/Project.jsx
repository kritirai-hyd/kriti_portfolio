
import React from "react";

import useLenis from "../hooks/useLenis";
import styles from "./projects.module.css";

import BreadCrumb from "../ui/breadCrumb/BreadCrumb";
import Projects from "../projects/Projects";

const Project = () => {
  useLenis();
  return (
<>
    <div className={styles.page}>
  
        <BreadCrumb
        title="Projects"
        path={[{ name: "Home", link: "/" }, { name: "Projects" }]}
      />

<Projects />
    </div>
</>
  );
};
export default Project;
