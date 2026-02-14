"use client";
import React from "react";
import styles from "./BreadCrumb.module.css";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import { useTheme } from "../../context/ThemeContext";
import Link from "next/link";

const BreadCrumb = ({ title = "Page Title", path = [{ name: "Home", link: "/" }, { name: "Page" }] }) => {
  const { theme } = useTheme(); 

  return (
    <section
      className={`${styles.breadcrumbSection} ${
        theme === "dark" ? styles.darkTheme : styles.lightTheme
      }`}
    >
      <div className="container">
        <motion.h1
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {title}
        </motion.h1>
        <motion.p
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {path.map((item, index) => (
            <span key={index}>
              {item.link ? <Link href={item.link}>{item.name}</Link> : item.name}
              {index < path.length - 1 && " / "}
            </span>
          ))}
        </motion.p>
      </div>
    </section>
  );
};

export default BreadCrumb;
