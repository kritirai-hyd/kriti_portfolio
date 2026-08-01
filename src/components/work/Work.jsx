import React from "react";
import { CheckCircle2, ArrowRight } from "lucide-react";
import styles from "./Work.module.css";
import a from '../../assets/image/project-1.png';
import b from '../../assets/image/creative-coder-p1.png';
import c from '../../assets/image/couponszone-p1.png';
import Image from "next/image";
const projects = [
  {
    id: 1,
    title: "Car Rental Website",
    industry: "Transportation",
    image: a,
    challenge:
      "The client needed a modern, responsive website to showcase rental vehicles and simplify the booking process.",
    solutions: [
      "Next.js",
      "React",
      "CSS Modules",
      "SEO Optimization",
    ],
    features: [
      "Responsive Design",
      "Vehicle Listings",
      "Booking Inquiry",
      "Client-side Routing",
    ],
  },
  {
    id: 2,
    title: "Creative Coder",
    industry: "Software Development",
    image: b,
    challenge:
      "The company required a professional website to present its software development services and portfolio while generating quality leads.",
    solutions: [
      "Next.js",
      "React",
      "CSS Modules",
      "Performance Optimization",
    ],
    features: [
      "Service Showcase",
      "Project Portfolio",
      "Contact Form",
      "Responsive Layout",
    ],
  },
  {
    id: 3,
    title: "SRS Security System",
    industry: "Security Solutions",
    image: c,
    challenge:
      "The business needed a trustworthy online presence to display security products and installation services.",
    solutions: [
      "Next.js",
      "React",
      "CSS Modules",
      "Fast Loading Pages",
    ],
    features: [
      "Product Showcase",
      "Service Information",
      "Contact & Inquiry",
      "Mobile Responsive",
    ],
  },
];

export const ProjectsSection = () => {
  return (
    <section className={styles.section}>
      {/* Header */}
      <div className={styles.header}>
        <span className={styles.badge}>Portfolio</span>
        <h2 className={styles.title}>My Recent Work</h2>
      </div>

      {/* 3-Column Grid */}
      <div className={styles.grid}>
        {projects.map((project) => (
          <div key={project.id} className={styles.card}>
            {/* Image & Industry Badge */}
            <div className={styles.imageWrapper}>
              <Image
                src={project.image}
                alt={project.title}
                className={styles.image}
                loading="lazy"
              />
              <span className={styles.industryBadge}>{project.industry}</span>
            </div>

            {/* Card Body */}
            <div className={styles.content}>
              <div>
                <h3 className={styles.projectTitle}>{project.title}</h3>

                {/* Challenge */}
                <div className={styles.block}>
                  <div className={styles.blockLabel}>Challenge</div>
                  <p className={styles.challengeText}>{project.challenge}</p>
                </div>

                {/* Solution */}
                <div className={styles.block}>
                  <div className={styles.blockLabel}>Solution</div>
                  <div className={styles.solutionList}>
                    {project.solutions.map((item, index) => (
                      <div key={index} className={styles.solutionItem}>
                        <CheckCircle2 size={16} className={styles.checkIcon} />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Key Features */}
                <div className={styles.block}>
                  <div className={styles.blockLabel}>Key Features</div>
                  <div className={styles.featureTags}>
                    {project.features.map((feature, index) => (
                      <span key={index} className={styles.tag}>
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* View Case Study Button */}
              <div className={styles.btnWrapper}>
                <button className={styles.caseStudyBtn}>
                  <span>View Case Study</span>
                  <ArrowRight size={16} className={styles.btnIcon} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;