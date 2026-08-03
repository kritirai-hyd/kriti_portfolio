import React from "react";
import { motion } from "framer-motion";
import s from "./styles.module.css";
import Heading from "../ui/Heading/Heading";
import Link from "next/link";
import client from "./Problem.js";
import { ArrowRight } from "lucide-react";
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
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
      ease: "easeOut",
    },
  },
};
export const Problems = () => {
  return (
    <section className={s.bg}>
      <section className={s.problem}>
        <div className={s.header}>
          <Heading
            heading="Website Problems I Help Solve"
            para="I help businesses overcome slow load speeds, poor search visibility, outdated layouts, and low enquiry rates by building modern, high-converting websites."
          />
        </div>
        <div className={s.container}>
          {client.map((p) => {
            return (
              <div
                key={p.id}
                className={s.card}
                style={{
                  "--item-color": p.color,
                  "--item-glow": `${p.color}33`,
                  border: `1px solid ${p.color}33`,
                }}
              >
                <div className={s.top}>
                  <div className={s.icon}>{p.icon}</div>
                  <h3 className={s.title}>{p.title}</h3>
                  <p className={s.description}>{p.description}</p>
                </div>
                <div className={s.bottom}>
                  <button className={s.button}>
                    <span>Learn More</span>
                    <ArrowRight size={16} />
                  </button>
                </div>{" "}
              </div>
            );
          })}
        </div>
        <button className={s.button}>
          <Link href="/contact" className={s.link}>
            <span>Fix Your Website Today</span>
            <ArrowRight size={16} />{" "}
          </Link>
        </button>
      </section>
    </section>
  );
};
export default Problems;
