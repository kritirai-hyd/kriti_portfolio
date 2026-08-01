import React from "react";
import * as Icons from "lucide-react";
import { motion } from "framer-motion";
import styles from "./styles.module.css";
import Heading from "../ui/Heading/Heading";

export const clientProblems = [
  {
    id: 1,
    icon: "Zap",
    title: "Slow Website",
    description:
      "People don't like waiting. A slow website causes visitors to leave before seeing what your business offers.",
    color: "#F59E0B",
  },
  {
    id: 2,
    icon: "Search",
    title: "Hard to Find Online",
    description:
      "If customers can't find your business on search engines, they'll choose a competitor instead.",
    color: "#2563EB",
  },
  {
    id: 3,
    icon: "Palette",
    title: "Outdated Website",
    description:
      "An outdated design can make your business appear less trustworthy and discourage potential clients.",
    color: "#EC4899",
  },
  {
    id: 4,
    icon: "Smartphone",
    title: "Poor Mobile Experience",
    description:
      "Most visitors arrive on phones. Your website must look great and function smoothly on every screen size.",
    color: "#10B981",
  },
  {
    id: 5,
    icon: "PhoneCall",
    title: "Not Getting Enquiries",
    description:
      "If visitors don't know what action to take next, they leave without contacting your business.",
    color: "#8B5CF6",
  },
  {
    id: 6,
    icon: "TrendingDown",
    title: "Losing Potential Customers",
    description:
      "When visitors leave without taking action, you're losing valuable business opportunities every day.",
    color: "#EF4444",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const cardVariants = {
  hidden:{
    opacity:0
  },

  show:{
    opacity:1,
    transition:{
      duration:0.4,
      ease:"easeOut"
    }
  }
};

export const ClientProblems = () => {
  return (
    <section className={styles.section}>
      {/* Header */}
      <div className={styles.header}>
        <Heading
          heading="Website Problems I Help Solve"
          para="I help businesses overcome slow load speeds, poor search visibility, outdated layouts, and low enquiry rates by building modern, high-converting websites."
        />
      </div>

      {/* Grid */}
      <div
     className={styles.grid}

      >
        {clientProblems.map((problem) => {
          const IconComponent = Icons[problem.icon] || Icons.HelpCircle;

          return (
            <div
 key={problem.id}
 className={styles.card}
              style={{
                "--item-color": problem.color,
                "--item-glow": `${problem.color}33`,
                border: `1px solid ${problem.color}33`,
              }}
            >
              {/* Top Accent Line */}
              <div className={styles.topGlow} />

              {/* Glowing Icon Container */}
              <div className={styles.iconWrapper}>
                <IconComponent size={26} strokeWidth={2.2} />
              </div>

              {/* Title & Description */}
              <h3 className={styles.cardTitle}>{problem.title}</h3>
              <p className={styles.cardDescription}>{problem.description}</p>

              {/* Card Action Button */}
              <button className={styles.cardButton}>
                <span>Learn More</span>
                <Icons.ArrowRight size={16} className={styles.btnIcon} />
              </button>
            </div>
          );
        })}
      </div>

      {/* Bottom Main Call To Action */}
      <div className={styles.ctaWrapper}>
        <button className={styles.ctaButton}>
          <span>Fix Your Website Today</span>
          <Icons.ArrowRight size={20} className={styles.ctaIcon} />
        </button>
      </div>
    </section>
  );
};

export default ClientProblems;