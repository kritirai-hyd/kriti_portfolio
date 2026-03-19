"use client";
import styles from "./Education.module.css";
import { useTheme } from "../context/ThemeContext";
import Heading from "../ui/Heading/Heading";
import { useEffect, useRef, useState } from "react";
import { Calendar, Building2, Award, Clock } from "lucide-react";

const Education = () => {
  const { theme } = useTheme();
  const timelineRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(null);

  const journey = [
    {
      id: "1",
      name: "Bachelor of Computer Applications (BCA)",
      date: "2023-2026",
      org: "Osmania University",
      status: "In Progress",

    },
    {
      id: "2",
      name: "12th Grade – Higher Secondary",
      date: "2021-2023",
      org: "Science Stream (MPC)",
      status: "Completed",
     
    },
    {
      id: "3",
      name: "10th Grade – Secondary Education",
      date: "2020-2021",
      org: "General Education",
      status: "Completed",
     
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.animate);
            
  
            const items = entry.target.querySelectorAll(`.${styles.item}`);
            items.forEach((item, index) => {
              setTimeout(() => {
                item.classList.add(styles.visible);
              }, index * 200); 
            });
          }
        });
      },
      { threshold: 0.2, rootMargin: "50px" }
    );

    if (timelineRef.current) {
      observer.observe(timelineRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleCardClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
<div className={styles.bg}>
      <section
      className={`${styles.container}`}
      id="education"
    >
      <div className={styles.wrapper}>
      <Heading 
  heading="Education Journey" 
  para="A timeline of my academic background, showcasing the knowledge, skills, and foundation that shaped my career in technology." 
/>
        


        <div ref={timelineRef} className={styles.timeline}>
          {journey.map((item, index) => (
            <div 
              key={item.id} 
              className={`${styles.item} ${styles[`item-${index + 1}`]}`}
              onClick={() => handleCardClick(index)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  handleCardClick(index);
                }
              }}
              aria-expanded={activeIndex === index}
            >
              {/* Timeline Marker */}
              <div className={styles.marker}>
                <div className={styles.circle}>
                  <Award size={20} />
                </div>
                <div className={styles.line}></div>
              </div>

              {/* Content Card */}
              <div className={`${styles.card} ${activeIndex === index ? styles.expanded : ''}`}>
                <div className={styles.cardHeader}>
                  <div className={styles.headerLeft}>
                    <h3 className={styles.title}>{item.name}</h3>
                    <div className={styles.meta}>
                      <span className={styles.org}>
                        <Building2 size={14} />
&nbsp;
                        {item.org}
                      </span>
                      <span className={styles.date}>
                        <Calendar size={14} />&nbsp;
                        {item.date}
                      </span>
                    </div>
                  </div>
                  
                  <span 
                    className={`${styles.status} ${
                      item.status === "Completed" 
                        ? styles.completed 
                        : styles.progress
                    }`}
                  >
                    <Clock size={14} />
                    {item.status}
                  </span>
                </div>

            

           
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
</div>
  );
};

export default Education;