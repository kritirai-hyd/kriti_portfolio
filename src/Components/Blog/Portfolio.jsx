import React from "react";
import styles from "./ResponsiveDesign.module.css";
import Image from "next/image";
import portfolioImage from "../../assets/image/portfolio.png";

const PortfolioTutorial = () => {
  return (
    <div className={styles.container}>
      {/* Header with gradient */}
      <header className={styles.blogHeader}>
        <div className={styles.categoryTag}>Web Development</div>
        <h1 className={styles.blogTitle}>Build a Portfolio Website Using HTML, CSS, and JavaScript</h1>
      </header>

      {/* Featured Image */}
      <div className={styles.featuredImage}>
        <Image
          src={portfolioImage}
          alt="Modern portfolio website design"
          width={1200}
          height={600}
          className={styles.blogImage}
          priority
        />
        <div className={styles.imageCaption}>
          A clean, modern portfolio website showcasing projects and skills
        </div>
      </div>

      {/* Main Content */}
      <div className={styles.blogContent}>
        <div className={styles.intro}>
          <p className={styles.lead}>
            Your portfolio website is your digital business card in today's competitive tech landscape. In this comprehensive guide, we'll build a modern, responsive portfolio from scratch using only HTML, CSS, and vanilla JavaScript—no frameworks required.
          </p>
        </div>

        <section className={styles.content}>
          <h2>Why Build Your Own Portfolio?</h2>
          <p>
            While templates and website builders are convenient, building your portfolio from scratch demonstrates your coding skills, allows complete customization, and gives you full control over performance and SEO. This project will showcase your abilities in the three core web technologies that every frontend developer must master.
          </p>
          <div className={styles.principlesGrid}>
            <div className={styles.Card}>
              <h3>Skill Demonstration</h3>
              <p>
                Shows potential employers your actual coding abilities, not just your ability to use a template.
              </p>
            </div>
            <div className={styles.Card}>
              <h3>Complete Control</h3>
              <p>
                Full customization over design, animations, and functionality without template limitations.
              </p>
            </div>
            <div className={styles.Card}>
              <h3>Performance Optimization</h3>
              <p>
                Zero framework overhead means faster load times and better Core Web Vitals scores.
              </p>
            </div>
          </div>
        </section>

        <section className={styles.content}>
          <h2>Project Structure & Setup</h2>
          <p>Let's start by organizing our project files efficiently:</p>
          
          <div className={styles.example}>
            <h4>File Structure</h4>
            <pre>{`portfolio-website/
├── index.html
├── styles/
│   ├── main.css
│   ├── responsive.css
│   └── animations.css
├── scripts/
│   └── main.js
├── assets/
│   ├── images/
│   ├── icons/
│   └── projects/
└── README.md`}</pre>
          </div>

          <h3>HTML5 Boilerplate</h3>
          <p>Start with a semantic HTML5 structure:</p>
          
          <div className={styles.example}>
            <pre>{`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Your Name | Portfolio</title>
    <link rel="stylesheet" href="styles/main.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="icon" type="image/x-icon" href="assets/favicon.ico">
</head>
<body>
    <!-- Navigation -->
    <nav class="navbar">
        <!-- We'll build this in CSS/JS -->
    </nav>
    
    <!-- Main Content -->
    <main>
        <!-- Sections will go here -->
    </main>
    
    <!-- Footer -->
    <footer>
        <!-- Footer content -->
    </footer>
    
    <script src="scripts/main.js"></script>
</body>
</html>`}</pre>
          </div>
        </section>

        <section className={styles.content}>
          <h2>Key Components to Build</h2>
          
          <div className={styles.principlesGrid}>
            <div className={styles.Card}>
              <h3>1. Hero Section</h3>
              <p>
                Create an impactful first impression with your name, title, and a call-to-action. Include subtle animations to draw attention.
              </p>
            </div>
            <div className={styles.Card}>
              <h3>2. Projects Gallery</h3>
              <p>
                Showcase 3-5 of your best projects with images, descriptions, technologies used, and links to live demos/GitHub.
              </p>
            </div>
            <div className={styles.Card}>
              <h3>3. Skills Section</h3>
              <p>
                Display your technical skills with progress bars or category grouping. Keep it visual and easy to scan.
              </p>
            </div>
            <div className={styles.Card}>
              <h3>4. Contact Form</h3>
              <p>
                Build a functional contact form with validation. Connect it to a service like Formspree or Netlify Forms.
              </p>
            </div>
          </div>
        </section>

        <section className={styles.content}>
          <h2>Modern CSS Techniques</h2>
          
          <h3>CSS Grid for Layout</h3>
          <p>Use CSS Grid for complex layout sections like the projects gallery:</p>
          
          <div className={styles.example}>
            <pre>{`.projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    padding: 2rem 0;
}

.project-card {
    background: var(--card-bg);
    border-radius: 12px;
    overflow: hidden;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.project-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0,0,0,0.15);
}`}</pre>
          </div>

          <h3>Flexbox for Alignment</h3>
          <p>Use Flexbox for navigation and skill bars:</p>
          
          <div className={styles.example}>
            <pre>{`.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 5%;
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 1000;
}

.skill-bar {
    width: 100%;
    height: 8px;
    background: #e0e0e0;
    border-radius: 4px;
    overflow: hidden;
    margin-top: 0.5rem;
}

.skill-progress {
    height: 100%;
    background: linear-gradient(90deg, var(--primary), var(--secondary));
    transition: width 1.5s ease-out;
}`}</pre>
          </div>

          <h3>CSS Variables for Consistency</h3>
          
          <div className={styles.example}>
            <pre>{`:root {
    --primary: #2563eb;
    --secondary: #7c3aed;
    --text: #1f2937;
    --light-text: #6b7280;
    --bg: #ffffff;
    --card-bg: #f8fafc;
    --shadow: 0 4px 6px rgba(0,0,0,0.1);
    
    /* Typography */
    --font-main: 'Inter', system-ui, sans-serif;
    --font-mono: 'Fira Code', monospace;
}

@media (prefers-color-scheme: dark) {
    :root {
        --text: #f9fafb;
        --light-text: #d1d5db;
        --bg: #111827;
        --card-bg: #1f2937;
    }
}`}</pre>
          </div>
        </section>

        <section className={styles.content}>
          <h2>JavaScript Functionality</h2>
          
          <div className={styles.principlesGrid}>
            <div className={styles.Card}>
              <h3>Smooth Scrolling</h3>
              <p>
                Implement smooth navigation between sections with scroll behavior polyfill for cross-browser compatibility.
              </p>
            </div>
            <div className={styles.Card}>
              <h3>Form Validation</h3>
              <p>
                Create real-time form validation with helpful error messages and success feedback.
              </p>
            </div>
            <div className={styles.Card}>
              <h3>Interactive Elements</h3>
              <p>
                Add interactive features like project filtering, dark mode toggle, and animated skill bars on scroll.
              </p>
            </div>
          </div>

          <div className={styles.example}>
            <h4>JavaScript: Smooth Scroll Implementation</h4>
            <pre>{`// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if(targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if(targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.classList.add('animate-in');
        }
    });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.skill-bar, .project-card').forEach(el => {
    observer.observe(el);
});`}</pre>
          </div>
        </section>

        <section className={styles.content}>
          <h2>Responsive Design Checklist</h2>
          <div className={styles.Tables}>
            <div className={styles.tableHeader}>
              <span>Breakpoint</span>
              <span>Target Devices</span>
              <span>Key Adjustments</span>
            </div>
            <div className={styles.tableRow}>
              <span>Mobile: &lt; 768px</span>
              <span>Smartphones</span>
              <span>Stack all sections, hamburger menu, larger touch targets</span>
            </div>
            <div className={styles.tableRow}>
              <span>Tablet: 768px - 1024px</span>
              <span>Tablets</span>
              <span>2-column grids, adjusted font sizes, tablet-optimized navigation</span>
            </div>
            <div className={styles.tableRow}>
              <span>Desktop: &gt; 1024px</span>
              <span>Desktops & Laptops</span>
              <span>Multi-column layouts, hover effects, desktop navigation</span>
            </div>
          </div>

          <div className={styles.example}>
            <h4>Mobile-First Media Queries</h4>
            <pre>{`/* Base styles (mobile first) */
.container {
    padding: 1rem;
    width: 100%;
}

.nav-menu {
    display: none;
}

/* Tablet */
@media (min-width: 768px) {
    .container {
        padding: 2rem;
        max-width: 720px;
        margin: 0 auto;
    }
    
    .projects-grid {
        grid-template-columns: repeat(2, 1fr);
    }
}

/* Desktop */
@media (min-width: 1024px) {
    .container {
        max-width: 1200px;
        padding: 2rem 4rem;
    }
    
    .projects-grid {
        grid-template-columns: repeat(3, 1fr);
    }
    
    .nav-menu {
        display: flex;
    }
    
    .hamburger {
        display: none;
    }
}`}</pre>
          </div>
        </section>

        <section className={styles.content}>
          <h2>Performance Optimization</h2>
          <ul className={styles.List}>
            <li>
              <strong>Image Optimization:</strong> Use WebP format with JPEG/PNG fallbacks. Implement lazy loading with the <code>loading="lazy"</code> attribute.
            </li>
            <li>
              <strong>Code Splitting:</strong> Separate CSS for critical and non-critical styles. Use <code>preload</code> for essential resources.
            </li>
            <li>
              <strong>Minification:</strong> Minify HTML, CSS, and JavaScript files for production. Remove unused CSS with tools like PurgeCSS.
            </li>
            <li>
              <strong>Caching:</strong> Implement proper cache headers and consider Service Workers for offline functionality.
            </li>
          </ul>
        </section>

        <section className={styles.content}>
          <h2>Deployment Options</h2>
          <div className={styles.principlesGrid}>
            <div className={styles.Card}>
              <h3>GitHub Pages (Free)</h3>
              <p>
                Perfect for beginners. Push your code to a GitHub repository and enable GitHub Pages in settings.
              </p>
            </div>
            <div className={styles.Card}>
              <h3>Netlify (Free Tier)</h3>
              <p>
                Drag-and-drop deployment with continuous deployment from Git. Includes forms, analytics, and HTTPS.
              </p>
            </div>
            <div className={styles.Card}>
              <h3>Vercel (Free Tier)</h3>
              <p>
                Excellent performance with edge network. Automatic SSL and easy integration with modern frameworks.
              </p>
            </div>
          </div>
        </section>

        <section className={styles.blogconclusion}>
          <h2>Next Steps & Enhancement Ideas</h2>
          <p>
            Once your basic portfolio is live, consider these enhancements: Add a blog section to showcase your knowledge, implement a dark/light mode toggle, integrate a CMS like Sanity or Strapi for easy content updates, add performance monitoring with Google Analytics, or implement PWA features for app-like experience. Remember to regularly update your portfolio with new projects and skills—a stagnant portfolio is almost as bad as no portfolio at all!
          </p>
          <p className={styles.lead} style={{ marginTop: '2rem' }}>
            Your portfolio is never truly "finished." It's a living document of your growth as a developer. Start simple, ship quickly, and iterate based on feedback and new skills you acquire.
          </p>
        </section>

        {/* Tags */}
        <div className={styles.bgbtns}>
          <span className={styles.bgbtn}>HTML5</span>
          <span className={styles.bgbtn}>CSS3</span>
          <span className={styles.bgbtn}>JavaScript</span>
          <span className={styles.bgbtn}>Portfolio</span>
          <span className={styles.bgbtn}>Web Development</span>
          <span className={styles.bgbtn}>Beginner Friendly</span>
        </div>
      </div>
    </div>
  );
};

export default PortfolioTutorial;