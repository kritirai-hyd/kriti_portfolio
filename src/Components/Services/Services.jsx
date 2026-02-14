"use client";
import React from "react";
<<<<<<< HEAD
import services from "./Service.json";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { useTheme } from "../context/ThemeContext";
import styles from "./Services.module.css";
import { SquareArrowOutUpRight } from "lucide-react";
import Heading from "../ui/Heading/Heading";
=======
import services from "./Services.json";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { useTheme } from "../../context/ThemeContext";
import styles from "./Services.module.css";
import { SquareArrowOutUpRight } from "lucide-react";
>>>>>>> 38539456c0d6ded47a8dd538a9d68180295bfbe0

const Services = () => {
  const { theme } = useTheme();

  return (
    <section
      id="services"
<<<<<<< HEAD
      className={styles.services}
      aria-label="Services offered"
    >
     
<Heading heading="Services" />
=======
      className={`${styles.services} ${
        theme === "dark" ? styles.bgLDark : styles.servicesLight
      }`}
      aria-label="Services offered"
    >
      <div className={styles.sTitle}>
        <motion.h2
          variants={fadeIn("up", 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.7 }}
          className={styles.skillsTitle}
        >
          Services
        </motion.h2>
      </div>

>>>>>>> 38539456c0d6ded47a8dd538a9d68180295bfbe0
      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.5 }}
        className={styles.serviceContainer}
      >
        {services.map((item) => (
          <motion.div
            key={item.id}
            className={styles.servicesCard}
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <div className={styles.title}>
              <h3>{item.title}</h3>
              <Link
<<<<<<< HEAD
                href={`${item.link}`}
=======
                href="https://www.kritirai.com/services"
>>>>>>> 38539456c0d6ded47a8dd538a9d68180295bfbe0
                title={`Explore ${item.title} services`}
                className={styles.servicesBtn}
              >
                <SquareArrowOutUpRight size={20} />
              </Link>
            </div>
            <div className={styles.desc}>
              <p className={styles.des}>{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Services;
