import React from "react";
import { motion } from "framer-motion";
import Increment from "./Increment";
import { fadeIn } from "../variants";
import { useTheme } from "../context/ThemeContext";
import styles from "./Counter.module.css";
const Counter = () => {
  const { theme } = useTheme();
  const stats = [
    {
      number: 2,
      title: "Years of Experience",
      color: "#2563eb",
    },
    {
      number: 24,
      title: "Projects Completed",
      color: "#ab00df",
    },
    {
      number: 18,
      title: "Happy Clients",
      color: "#2fa700",
    },
    {
      number: 15,
      title: "Client Reviews",
      color: "#ff8018",
    },
  ];
  return (
    <section
      className={`${styles.counterSection} ${
        theme === "dark" ? styles.darkMode : styles.lightMode
      }`}
    >
      <div className={styles.container}>
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.7 }}
          className={styles.wrapper}
        >
          {stats.map((item, index) => {
     
            return (
              <div
                key={index}
                className={styles.statBlock}
                style={{   border: `1px solid ${item.color}44` }}
              >
                <h2 className={styles.statNumber} style={{ color: item.color }}>
                  <Increment number={item.number} />+
                </h2>
                <p className={styles.statDescription}>{item.title}</p>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
export default Counter;
