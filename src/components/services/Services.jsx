import React from "react";
import services from "./Service.json";
import Link from "next/link";
import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
import styles from "./Services.module.css";
import { ArrowRight, Sparkles } from "lucide-react";
import Heading from "../ui/Heading/Heading";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
  },

  show: {
    opacity: 1,
    transition: {
      duration: 0.4,
    },
  },
};

const Services = () => {
  const { theme } = useTheme();

  return (
    <section
      id="services"
      className={`${styles.services} ${
        theme === "dark" ? styles.dark : styles.light
      }`}
    >
      <div className={styles.wrapper}>
        <Heading
          heading="My Services"
          para="I offer a range of web development services focused on building modern, responsive, and high-performing digital solutions tailored to your needs."
        />

        <motion.div
          className={styles.serviceContainer}
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{
            once: true,
            amount: 0.2,
          }}
        >
          {services.map((item) => {
            return (
              <motion.div
                key={item.id}
                variants={cardVariants}
                className={styles.servicesCard}
                style={{ background: item.bg }}
              >
                <div className={styles.cardHeader}>
                  <h3 className={styles.cardTitle}>{item.title}</h3>
                </div>

                <div className={styles.descWrapper}>
                  <p className={styles.des}>{item.desc}</p>
                </div>

                <Link href={item.link || "#"} className={styles.cardBtn}>
                  Read More
                  <ArrowRight size={15} />
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
