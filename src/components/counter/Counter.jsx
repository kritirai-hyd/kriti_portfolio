import React from "react";
import { motion } from "framer-motion";
import Increment from "./Increment";
import { fadeIn } from "../variants";
import { useTheme } from "../context/ThemeContext";
import s from "./counter.module.css";
import Scroll from "../scroll/Scroll";
const Counter = () => {
  const { theme } = useTheme();
  const counter = [
    {
      number: 4,
      title: "Years of Experience",
      color: "#2563eb",
      symbol: "+"
    },
    {
      number: 24,
      title: "Applications Built",
      color: "#ab00df", symbol: "+"
    },
    {
      number: 100,
      title: "On-Time Delivery",
      color: "#2fa700", symbol: "%"
    },
    {
      number: 15,
      title: "Client Reviews",
      color: "#ff8018", symbol: "+"
    },
  ];
  return (
<>
 <Scroll />
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
          {counter.map((item, index) => {
     
            return (
              <div
                key={index}
                className={s.card}
                style={{  background: ` ${item.color}14`, border: `1px solid ${item.color}34` }}
              >
                <h2 className={s.num} style={{ color: item.color }}>
                  <Increment number={item.number} /> {item.symbol}
                </h2>
                <p className={s.title}>{item.title}</p>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
</>
  );
};
export default Counter;
