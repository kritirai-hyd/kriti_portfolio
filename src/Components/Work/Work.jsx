"use client";
import { useState, useEffect, useRef } from "react";
import styles from "./Work.module.css";
import Image from "next/image";

// Import images
import employeeImg from "../../assets/image/empolyee.png";
import employeeImgm from "../../assets/image/empolyee-m.png";
import project1Img from "../../assets/image/project-1.png";
import project1Imgm from "../../assets/image/project-1-m.png";
import couponsImg from "../../assets/image/couponszone-p1.png";
import couponsImgm from "../../assets/image/couponszone-p2-m.png";
import Heading from "../ui/Heading/Heading";
import Link from "next/link";
const projects = [
  {
    id: 1,
    title: "Car Rental Website",
    description:
      "Responsive car rental site built with Next.js and CSS, showcasing UI design and client-side routing.",
    image: project1Img,
    image1: project1Imgm,
    demo: "https://www.vkgoacarrental.com",
  },
  {
    id: 2,
    title: "Coupon Website",
    description:
      "Dynamic coupon-sharing platform using Next.js, Node.js, and React, with real-time deal updates and backend integration.",
    image: couponsImg,
    image1: couponsImgm,
    demo: "https://www.couponszone.co.in",
  },
  {
    id: 3,
    title: "Website Development",
    description: "A full-stack website project using Next.js and MongoDB.",
    image: employeeImg,
    image1: employeeImgm,
    demo: "https://www.creativecoder.net/",
  },
];

export default function Work() {
  const [active, setActive] = useState(0);
  const intervalRef = useRef();

  const next = () => setActive((prev) => (prev + 1) % projects.length);
  const prev = () =>
    setActive((prev) => (prev === 0 ? projects.length - 1 : prev - 1));

  // Auto-play
  useEffect(() => {
    intervalRef.current = setInterval(next, 3000);
    return () => clearInterval(intervalRef.current);
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  // Pause on hover
  const handleMouseEnter = () => clearInterval(intervalRef.current);
  const handleMouseLeave = () =>
    (intervalRef.current = setInterval(next, 3000));

  return (
    <div className={styles.bg}>
      <div className={styles.container}>

<Heading 
  heading="My Projects" 
  para="A showcase of my work where I’ve built responsive, user-friendly, and performance-driven web applications." 
/>
        {/* Project Title with demo link */}
        <h3 className={styles.title}>
          <a
            href={projects[active].demo}
            target="_blank"
            rel="noopener noreferrer"
          >
            {projects[active].title}
      

          </a>
            
        </h3>

        {/* Project Description */}
        
        {/* Project Preview */}
        <div
          className={styles.subcontainer}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <button onClick={prev} className={styles.arrow}>
            ←
          </button>

          <div className={styles.previewContainer}>
            {/* Laptop/Desktop */}
            <div className={styles.laptop}>
         <Link href={`${projects[active].demo}`}>     <Image
                src={projects[active].image}
                alt="project desktop"
                fill
                sizes="(max-width: 900px) 90vw, 800px"
                style={{ objectFit: "contain" }}
              /></Link>
            </div>

            {/* Mobile */}
            <div className={styles.mobile}>
             <Link href={`${projects[active].demo}`}>  <Image
                src={projects[active].image1}
                alt="project mobile"
                fill
                sizes="140px"
                style={{ objectFit: "cover" }}
              /></Link>
            </div>
          </div>

          <button onClick={next} className={styles.arrow}>
            →
          </button>
        </div>

        {/* Thumbnails */}
        <div className={styles.carousel}>
          {projects.map((item, index) => (
            <div
              key={item.id}
              className={`${styles.thumb} ${
                active === index ? styles.active : ""
              }`}
              onClick={() => setActive(index)}
            >
              <Image
                src={item.image}
                alt="thumb"
                fill
                style={{ objectFit: "contain" }}
              />
              <span className={styles.number}>{index + 1}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}