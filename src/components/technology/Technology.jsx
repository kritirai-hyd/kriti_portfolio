import React from "react";
import {
  Code2,
  Braces,
  FileCode2,
  Rocket,
  Zap,
  Settings,
  Database,
  Github,
  GitBranch,
  Terminal,
  Globe,
  BarChart3,
  Search,
  Server,
  Cloud,
  Package,
} from "lucide-react";

import styles from "./styles.module.css";
import Heading from "../ui/Heading/Heading";

const Technology = () => {
  const frontend = [
    { text: "HTML", icon: FileCode2, color: "#E34F26" },
    { text: "CSS", icon: Braces, color: "#1572B6" },
    { text: "JavaScript", icon: Code2, color: "#F7DF1E" },
    { text: "React", icon: Code2, color: "#61DAFB" },
    { text: "Next.js", icon: Rocket, color: "#000000" },
    { text: "Node.js", icon: Zap, color: "#339933" },
    { text: "Express.js", icon: Settings, color: "#444444" },
    { text: "NPM", icon: Package, color: "#CB3837" },
    { text: "Tailwind CSS", icon: Code2, color: "#06B6D4" },
    { text: "Bootstrap", icon: Code2, color: "#7952B3" },
  ];

  const backend = [
    { text: "SQL", icon: Database, color: "#4479A1" },
    { text: "PostgreSQL", icon: Database, color: "#336791" },
    { text: "MongoDB", icon: Database, color: "#47A248" },
    { text: "Supabase", icon: Cloud, color: "#3ECF8E" },

    { text: "Git", icon: GitBranch, color: "#F05032" },
    { text: "GitHub", icon: Github, color: "#181717" },
    { text: "VS Code", icon: Terminal, color: "#007ACC" },
    { text: "Postman", icon: Server, color: "#FF6C37" },
    { text: "Vercel", icon: Globe, color: "#000000" },

    { text: "REST API", icon: Code2, color: "#2563EB" },

    { text: "Google Analytics", icon: BarChart3, color: "#F9AB00" },
    { text: "Google Search Console", icon: Search, color: "#4285F4" },
    { text: "Bing Webmaster Tools", icon: Search, color: "#008373" },
    { text: "cPanel", icon: Server, color: "#FF6C2C" },
  ];

  const ScrollRow = ({ items, reverse = false }) => (
    <div className={`${styles.scrollTrack} ${reverse ? styles.reverse : ""}`}>
      {[...items, ...items].map((item, index) => {
        const Icon = item.icon;

        return (
          <div key={index} className={styles.scrollItem}>
            <Icon
              size={24}
              strokeWidth={2}
              style={{
                color: item.color,
              }}
            />

            <span
              style={{
                color: item.color,
              }}
            >
              {item.text}
            </span>
          </div>
        );
      })}
    </div>
  );

  return (
<div className={styles.bg}>
      <section className={styles.section}>
      {/* Heading */}

      <div className={styles.header}>
        <Heading heading="Technologies I Use To Build Modern Websites" />

        <Heading para="I use powerful and reliable technologies to create fast, scalable, secure, and user-friendly digital experiences that help businesses grow online." />
      </div>

      {/* Technology Slider */}

      <div className={styles.wrapper}>
        <div className={styles.scrollBanner}>
          <ScrollRow items={frontend} />
        </div>

        <div className={styles.scrollBanner}>
          <ScrollRow items={backend} reverse />
        </div>
      </div>
    </section>
</div>
  );
};

export default Technology;
