"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import useLenis from "../hooks/useLenis";
import styles from "./WorkDetails.module.css";
import c1 from "../../assets/image/creative-coder-p1.png";
import c2 from "../../assets/image/creative-coder-p2.png";
import c3 from "../../assets/image/creative-coder-p3.png";
import cz1 from "../../assets/image/couponszone-p1.png";
import cz2 from "../../assets/image/couponszone-p2.png";
import cz3 from "../../assets/image/couponszone-p3.png";
import c4 from "../../assets/image/creative-coder-p4.png";
import c5 from "../../assets/image/creative-coder-p5.png";
import c6 from "../../assets/image/creative-coder-p6.png";
import BreadCrumb from "../ui/BreadCrumb/BreadCrumb";
const projects = [
  {
    title: "Car Rental Website",
    type: "Personal Project • 2024",
    images: [c1, c2, c3],
    description: [
      "Fully responsive car rental platform with real-time availability checking.",
      "Client-side routing for seamless navigation and booking flow.",
      "Optimized performance achieving 95+ Lighthouse score for mobile devices.",
      "Integrated Google Maps API for location-based car search functionality.",
      "Designed and implemented a clean, modern UI with CSS Grid and Flexbox.",
    ],
    tech: "Next.js 14, React, CSS Modules, Google Maps API, Responsive Design",
    demo: "#",
    code: "#",
  },
  {
    title: "Coupon Website",
    type: "Personal Project • 2024",
    images: [cz1, cz2, cz3],
    description: [
      "Dynamic coupon-sharing platform with real-time deal updates from multiple sources.",
      "RESTful API backend with user authentication and admin dashboard.",
      "Optimized database queries for handling thousands of coupon entries.",
      "Implemented role-based access control and analytics dashboard.",
    ],
    tech: "Next.js, Node.js, Express.js, MongoDB, JWT Auth, REST API",
    demo: "#",
    code: "#",
  },
  {
    title: "Employee Management System",
    type: "Academic Project • 2024",
    images: [c4, c5, c6],
    description: [
      "Comprehensive employee management system with secure authentication.",
      "Role-based access control with NextAuth.js.",
      "Dashboard with data visualization using Chart.js.",
      "File uploads via Cloudinary for employee documents.",
      "Real-time notifications for updates and announcements.",
    ],
    tech: "Next.js 13, NextAuth.js, MongoDB, Mongoose, Chart.js, Cloudinary",
    demo: "#",
    code: "#",
  },
];
const WorkDetails = () => {
  useLenis();
  return (
<>
    <div className={styles.page}>
  
        <BreadCrumb
        title="Projects"
        path={[{ name: "Home", link: "/" }, { name: "Projects" }]}
      />
      <section className={styles.works}>
        <div className={styles.worksContainer}>
          {projects.map((project, i) => (
            <motion.div
              key={i}
              variants={fadeIn("up", 0.2 + i * 0.1)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              className={styles.projectCard}
            >
              <div className={styles.projectHeader}>
                <h2 className={styles.projectTitle}>{project.title}</h2>
                <span className={styles.projectType}>{project.type}</span>
              </div>
              <div className={styles.wContainer}>
                <div className={styles.workGallery}>
                  {project.images.map((img, idx) => (
                    <div key={idx} className={styles.workCard}>
                      <Image
                        src={img}
                        alt={`${project.title} screenshot ${idx + 1}`}
                        fill
                        className={styles.workImg}
                      />
                    </div>
                  ))}
                </div>
                <div className={styles.projectDescription}>
                  <ul className={styles.featureList}>
                    {project.description.map((desc, idx) => (
                      <li key={idx}>{desc}</li>
                    ))}
                  </ul>
                  <p>
                    <b>Technologies:</b> {project.tech}
                  </p>
                </div>
                <div className={styles.projectActions}>
                  {project.demo && (
                    <Link href={project.demo} className={styles.submitBtn}>
                      View Demo
                    </Link>
                  )}
                  {project.code && (
                    <Link href={project.code} className={styles.outlineBtn}>
                      Source Code
                    </Link>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
</>
  );
};
export default WorkDetails;
