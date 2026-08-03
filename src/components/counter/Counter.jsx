import React from "react";
import { motion } from "framer-motion";
import Increment from "./Increment";
import { fadeIn } from "../variants";
import { useTheme } from "../context/ThemeContext";
import s from "./styles.module.css";
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
      className={s.counter}
    >
      <div className={s.container}>
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.7 }}
          className={s.wrapper}
        >
          {stats.map((item, index) => {
     
            return (
              <div
                key={index}
                className={s.card}
                style={{   border: `1px solid ${item.color}44` }}
              >
                <h2 className={s.num} style={{ color: item.color }}>
                  <Increment number={item.number} />+
                </h2>
                <p className={s.title}>{item.title}</p>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
export default Counter;
