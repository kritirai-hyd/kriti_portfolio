import React from "react";
import styles from "./ui-ux-design.module.css";
import BreadCrumb from "../ui/BreadCrumb/BreadCrumb";
const UIUXServices = () => {

  const service = [
    {
      title: "UX Research & Strategy",
      description:
        "Understanding your users through research to create experiences that truly resonate",
      services: [
        "User Interviews & Surveys",
        "Competitive Analysis",
        "User Personas",
        "Journey Mapping",
        "Heuristic Evaluation",
      ],
    },
    {
      title: "Visual UI Design",
      description: "Crafting beautiful, on-brand interfaces that users love",
      services: [
        "Design Systems",
        "Color Strategy",
        "Typography",
        "Iconography",
        "Component Libraries",
      ],
    },
    {
      title: "Usability Testing",
      description: "Validating designs with real users to continuously improve",
      services: [
        "Moderated Testing",
        "Unmoderated Testing",
        "A/B Testing",
        "Heatmap Analysis",
        "Accessibility Testing",
      ],
    },
    {
      title: "Mobile App Design",
      description: "Creating native and cross-platform mobile experiences",
      services: [
        "iOS Design (HIG)",
        "Android Design (Material)",
        "Touch Optimization",
        "Gesture Design",
        "Offline States",
      ],
    },
    {
      title: "Website Design",
      description: "Building responsive websites that engage and convert",
      services: [
        "Landing Pages",
        "Corporate Websites",
        "E-commerce Design",
        "Blog & Content",
        "Dashboard Design",
      ],
    },
    {
      title: "Accessibility (WCAG)",
      description: "Designing inclusive experiences that work for everyone",
      services: [
        "Color Contrast",
        "Keyboard Navigation",
        "Screen Reader Support",
        "Focus Indicators",
        "Accessible Forms",
      ],
    },
  ];

  const process = [
    { name: "Discover", description: "Research users, market, and goals" },
    {
      name: "Define",
      description: "Synthesize findings into clear requirements",
    },
    { name: "Ideate", description: "Explore multiple solutions" },
    { name: "Prototype", description: "Create interactive mockups" },
    { name: "Test", description: "Validate with real users" },
    {
      name: "Deliver",
      description: "Provide detailed designs for development",
    },
  ];
  return (
    <>
      <BreadCrumb
        title="UI/UX Design"
        path={[{ name: "Home", link: "/" }, { name: "UI/UX Design" }]}
      />
      <div className={styles.bg}>
        <div className={styles.container}>
          <div className={styles.header}>
            <h1>UI/UX Design Services</h1>
            <p className={styles.des}>
              We create intuitive, beautiful digital experiences that users
              love. Our human-centered approach combines aesthetic excellence
              with functional usability.
            </p>
          </div>
          <div className={styles.services}>
            <h2>Our UI/UX Design Services</h2>
            <div className={styles.servicesContainer}>
              {service.map((category, index) => (
                <div key={index} className={styles.card}>
                  <h3>{category.title}</h3>
                  <p className={styles.servicedesc}>{category.description}</p>
                  <ul className={styles.serviceul}>
                    {category.services.map((service, idx) => (
                      <li key={idx}>{service}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.processContainer}>
            <h2>Our Design Process</h2>
            <div className={styles.processcard}>
              {process.map((step, index) => (
                <div key={index} className={styles.processCard}>
                  <h3>{step.name}</h3>
                  <p>{step.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.impContainer}>
            <h2>Why Choose Us?</h2>
            <div className={styles.impCard}>
              <div className={styles.impCardtext}>
                <h3>User-Centered</h3>
                <p>
                  Every decision validated through user research and testing
                </p>
              </div>
              <div className={styles.impCardtext}>
                <h3>Data-Driven</h3>
                <p>Combining insights with data to achieve business goals</p>
              </div>
              <div className={styles.impCardtext}>
                <h3>Cross-Platform</h3>
                <p>Expertise in web, mobile, and emerging platforms</p>
              </div>
              <div className={styles.impCardtext}>
                <h3>Accessibility First</h3>
                <p>Designing inclusive experiences that work for everyone</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default UIUXServices;
