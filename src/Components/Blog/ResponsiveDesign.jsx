import React from "react";
import styles from "./ResponsiveDesign.module.css";
import Image from "next/image";
import a from "../../assets/image/responsivedesign.png";
const ResponsiveDesign = () => {
  return (
    <div className={styles.container}>
      {/* Header with gradient */}
      <header className={styles.blogHeader}>
        <div className={styles.categoryTag}>Web Development</div>
        <h1 className={styles.blogTitle}>Responsive Web Design</h1>
      </header>
      {/* Featured Image */}
      <div className={styles.featuredImage}>
        <Image
          src={a}
          alt="Responsive Design Illustration"
          width={1200}
          height={600}
          className={styles.blogImage}
          priority
        />
        <div className={styles.imageCaption}>
          Modern responsive design patterns across different devices
        </div>
      </div>
      {/* Main Content */}
      <div className={styles.blogContent}>
        <div className={styles.intro}>
          <p className={styles.lead}>
         In today's world where everyone uses more than one device, the need to create responsive designs should not even be a discussion—it should be the norm. This is because more than 54% of web traffic comes from mobile devices.
          </p>
        </div>
        <section className={styles.content}>
          <h2>The Evolution of Responsive Design</h2>
          <p>
     Responsive web design has come quite a distance in earnest since Ethan Marcotte
The term was first coined in 2010 by Rivera et al. An approach that originated merely as a
approach that relied on fluid grids and media queries has now evolved into a
Complex art that also includes CSS Grid, Flexbox, and modern
JavaScript frameworks.
          </p>
        </section>
        <section className={styles.content}>
          <h2>Core Principles of Modern Responsive Design</h2>
          <div className={styles.principlesGrid}>
            <div className={styles.Card}>
              <h3>Mobile-First Approach</h3>
              <p>
                Start designing for the smallest screen and progressively
                enhance for larger devices. This ensures core content is
                accessible to all users.
              </p>
            </div>
            <div className={styles.Card}>
              <h3>Performance First</h3>
              <p>
                Responsive design must consider performance. Use adaptive
                images, lazy loading, and code splitting to maintain fast load
                times.
              </p>
            </div>
            <div className={styles.Card}>
              <h3>User-Centric</h3>
              <p>
                Design for real users and their contexts. Consider touch
                targets, readable text sizes, and intuitive navigation patterns.
              </p>
            </div>
          </div>
        </section>
        <section className={styles.content}>
          <h2>Modern Techniques and Best Practices</h2>
          <h3>1. CSS Grid and Flexbox</h3>
          <p>
           CSS Grid offers two-dimensional layout features, ideal for complex responsive designs. Flexbox is great for one-dimensional layouts and aligning content. Using both gives developers strong tools for building adaptable interfaces.
          </p>
          <div className={styles.example}>
            <pre>{`.container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
}`}</pre>
          </div>
          <h3>2. Container Queries</h3>
          <p>
     The innovative @container rule enables elements to adjust according to the size of their container instead of the viewport. This makes responsive design genuinely modular and component-driven.
          </p>
        </section>
        <section className={styles.content}>
          <h2>Performance Considerations</h2>
          <p>
            Responsive design impacts performance significantly. Here are key
            metrics to monitor:
          </p>
          <div className={styles.Tables}>
            <div className={styles.tableHeader}>
              <span>Metric</span>
              <span>Mobile Target</span>
              <span>Desktop Target</span>
            </div>
            <div className={styles.tableRow}>
              <span>First Contentful Paint</span>
              <span>&lt; 1.8s</span>
              <span>&lt; 1.0s</span>
            </div>
            <div className={styles.tableRow}>
              <span>Largest Contentful Paint</span>
              <span>&lt; 2.5s</span>
              <span>&lt; 1.5s</span>
            </div>
            <div className={styles.tableRow}>
              <span>Cumulative Layout Shift</span>
              <span>&lt; 0.1</span>
              <span>&lt; 0.1</span>
            </div>
          </div>
        </section>
        <section className={styles.content}>
          <h2>The Future of Responsive Design</h2>
          <p>
            Looking ahead, we're moving toward more intelligent, context-aware
            designs. Artificial intelligence and machine learning will play
            larger roles in adaptive interfaces. Features like:
          </p>
          <ul className={styles.List}>
            <li>
              <strong>Adaptive Color Schemes:</strong> Based on ambient light
              and user preferences
            </li>
            <li>
              <strong>Motion Adaptation:</strong> Reduced motion for
              accessibility
            </li>
            <li>
              <strong>AI-Powered Layouts:</strong> Dynamic content arrangement
              based on user behavior
            </li>
            <li>
              <strong>Cross-Device Continuity:</strong> Seamless experiences
              across multiple devices
            </li>
          </ul>
        </section>
        <section className={styles.blogconclusion}>
          <h2>Conclusion</h2>
          <p>
           The way things look on websites is changing. Responsive design is getting better and better. It is not, about how things are laid out on the page anymore. Responsive design continues to evolve it is moving beyond layout.

adjustments to become a comprehensive approach to user experience

across all devices. By embracing modern techniques and maintaining a

We should focus on the performance of the web and the accessibility of the web. This will help us create a web. The performance of the web and the accessibility of the web are very important. We need to make sure the web is easy to use and works well.

* The performance of the web is important

* The accessibility of the web is also important

We can create a web by focusing on the performance of the web and the accessibility of the web.

experiences that are not only responsive but truly resilient and

user-centric.
          </p>
        </section>
        {/* Tags */}
        <div className={styles.bgbtns}>
          <span className={styles.bgbtn}>Web Design</span>
          <span className={styles.bgbtn}>CSS</span>
          <span className={styles.bgbtn}>Responsive</span>
          <span className={styles.bgbtn}>Frontend</span>
        </div>
      </div>
    </div>
  );
};
export default ResponsiveDesign;
