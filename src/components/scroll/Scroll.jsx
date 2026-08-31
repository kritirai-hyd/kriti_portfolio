import React from "react";
import {
  Search,
  Zap,
  Smartphone,
  TrendingUp,
  Code2,
  BarChart3,
  Globe,
  ShieldCheck,
  Rocket,
  Users,
  Settings,
} from "lucide-react";
import styles from "./scroll.module.css";
const Scroll = () => {
  const features = [
    {
      text: "Scalable Web Applications",
      icon: Rocket,
      color: "#003097",
    },
    {
      text: "High-Performance Engineering",
      icon: Zap,
      color: "#8b00b6",
    },
    {
      text: "SEO-Ready Architecture",
      icon: Search,
      color: "#2a9400",
    },
    {
      text: "Conversion-Focused Products",
      icon: TrendingUp,
      color: "#d86100",
    },
    {
      text: "React & Next.js Engineering",
      icon: Code2,
      color: "#00133b",
    },
    {
      text: "Secure Production Systems",
      icon: ShieldCheck,
      color: "#b40000",
    },
    {
      text: "Mobile-First Experiences",
      icon: Smartphone,
      color: "#e0ac00",
    },
    {
      text: "Business-Driven Solutions",
      icon: BarChart3,
      color: "#006fb9",
    },
    {
      text: "Custom SaaS Development",
      icon: Settings,
      color: "#b80056",
    },
    {
      text: "Modern Full-Stack Development",
      icon: Globe,
      color: "#00a365",
    },
    {
      text: "Seamless User Experiences",
      icon: Users,
      color: "#c50063",
    },
    {
      text: "Built to Scale",
      icon: Rocket,
      color: "#020003",
    },
  ];
  return (
    <div className={styles.bg}>
      <div className={styles.scroll}>
        <div className={styles.line}>
          {[...features].map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className={styles.text}>
                <Icon
                  style={{ color: item.color }}
                  size={22}
                  strokeWidth={2}
                  className={styles.icon}
                />
                <span style={{ color: item.color }}>{item.text}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default Scroll;
