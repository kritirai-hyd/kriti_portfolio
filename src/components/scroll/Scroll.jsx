import React from "react";
import Image from "next/image";
import {
  Search,
  Zap,
  Smartphone,
  TrendingUp,
  Palette,
  Code2,
  BarChart3,
  Globe,
  ShieldCheck,
  Rocket,
  Users,
  Settings
} from "lucide-react";

import styles from "./Scroll.module.css";

const Scroll = () => {

  const scrollItems = [
    {
      text: "SEO Optimized Websites",
      icon: Search,
      color: "#003097"
    },
    {
      text: "Fast Loading Websites",
      icon: Zap,
       color: "#8b00b6"
    },
    {
      text: "Mobile First Design",
      icon: Smartphone, color: "#2a9400"
    },
    {
      text: "Business Growth Solutions",
      icon: TrendingUp, color: "#d86100"
    },
    {
      text: "Conversion Focused UI",
      icon: Palette, color: "#00133b"
    },
    {
      text: "Custom Web Development",
      icon: Code2, color: "#b40000"
    },
    {
      text: "Google Friendly Websites",
      icon: Globe, color: "#e0ac00"
    },
    {
      text: "Analytics & Performance",
      icon: BarChart3, color: "#006fb9"
    },
    {
      text: "Secure Web Solutions",
      icon: ShieldCheck, color: "#b80056"
    },
    {
      text: "Modern Web Applications",
      icon: Rocket, color: "#00a365"
    },
    {
      text: "Better User Experience",
      icon: Users, color: "#c50063"
    },
    {
      text: "Website Optimization",
      icon: Settings, color: "#020003"
    },
  ];


  return (

  <div className={styles.bg}>
        <div className={styles.scrollBanner}>

        <div className={styles.scrollTrack}>

          {[...scrollItems, ...scrollItems].map((item, index) => {

            const Icon = item.icon;

            return (
              <div 
                key={index}
                className={styles.scrollItem}
              >

                <Icon  style={{color: item.color}}
                  size={22}
                  strokeWidth={2}
                  className={styles.icon}
                />

                <span style={{color: item.color}}>
                  {item.text}
                </span>

              </div>
            );

          })}

        </div>

      </div>
  </div>


  );
};

export default Scroll;