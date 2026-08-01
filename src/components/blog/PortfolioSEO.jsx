import React from "react";
import styles from "./ResponsiveDesign.module.css";
import Image from "next/image";
import portfolioSeoImage from "../../assets/image/seo-basics.png";

const PortfolioSEO = () => {
  return (
    <div className={styles.container}>
      {/* Header with gradient */}
      <header className={styles.blogHeader}>
        <div className={styles.categoryTag}>Web Development</div>
        <h1 className={styles.blogTitle}>Portfolio with SEO Optimization and Lighthouse 100 Score</h1>
      </header>

      {/* Featured Image */}
      <div className={styles.featuredImage}>
        <Image
          src={portfolioSeoImage}
          alt="Portfolio website with perfect Lighthouse scores and SEO optimization"
          width={1200}
          height={600}
          className={styles.blogImage}
          priority
        />
        <div className={styles.imageCaption}>
          A perfectly optimized portfolio achieving 100 Lighthouse scores across all metrics
        </div>
      </div>

      {/* Main Content */}
      <div className={styles.blogContent}>
        <div className={styles.intro}>
          <p className={styles.lead}>
            Achieving a perfect Lighthouse 100 score while maintaining excellent SEO is the holy grail of portfolio development. This guide shows you how to build a portfolio that not only showcases your skills but also performs flawlessly and ranks exceptionally well in search results.
          </p>
        </div>

        <section className={styles.content}>
          <h2>Why 100 Lighthouse Score Matters for Your Portfolio</h2>
          <p>
            A perfect Lighthouse score isn't just about technical bragging rights—it demonstrates your expertise in performance optimization, accessibility, and modern web standards. Employers and clients increasingly use these metrics to evaluate developer capabilities. Here's what each score represents:
          </p>
          <div className={styles.principlesGrid}>
            <div className={styles.Card}>
              <h3>Performance (100)</h3>
              <p>
                Shows mastery of Core Web Vitals: fast loading, smooth interactions, and visual stability. Critical for user retention and SEO rankings.
              </p>
            </div>
            <div className={styles.Card}>
              <h3>Accessibility (100)</h3>
              <p>
                Demonstrates commitment to inclusive design. Shows you can build websites usable by everyone, regardless of ability.
              </p>
            </div>
            <div className={styles.Card}>
              <h3>SEO (100)</h3>
              <p>
                Proves understanding of search engine optimization fundamentals. Essential for making your portfolio discoverable.
              </p>
            </div>
          </div>
        </section>

        <section className={styles.content}>
          <h2>Technical Architecture for Perfect Scores</h2>
          
          <div className={styles.example}>
            <h4>Optimal Project Structure</h4>
            <pre>{`portfolio/
├── public/
│   ├── images/          # Optimized WebP + fallbacks
│   │   ├── hero.webp
│   │   ├── hero.jpg
│   ├── icons/           # SVG icons
│   ├── favicon.ico
│   └── robots.txt
├── src/
│   ├── components/      # React components
│   ├── styles/          # CSS modules
│   ├── utils/           # Helper functions
│   └── pages/
├── next.config.js       # Next.js config
├── sitemap.xml.js       # Dynamic sitemap
└── package.json`}</pre>
          </div>

          <h3>Framework Choice: Next.js 14</h3>
          <p>
            Next.js provides built-in optimizations that make achieving perfect scores easier: automatic image optimization, font optimization, script optimization, and built-in performance monitoring.
          </p>
          
          <div className={styles.example}>
            <h4>Next.js Configuration for Performance</h4>
            <pre>{`// next.config.js
const nextConfig = {
  images: {
    formats: ['image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
  },
  compress: true,
  poweredByHeader: false,
  generateEtags: true,
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
  },
};

module.exports = nextConfig;`}</pre>
          </div>
        </section>

        <section className={styles.content}>
          <h2>SEO Optimization Strategy</h2>
          
          <div className={styles.principlesGrid}>
            <div className={styles.Card}>
              <h3>Structured Data</h3>
              <p>
                Implement JSON-LD for Person, Portfolio, and Project schema markup. Helps Google understand your content and enables rich snippets.
              </p>
            </div>
            <div className={styles.Card}>
              <h3>Dynamic Sitemap</h3>
              <p>
                Generate XML sitemap automatically with Next.js. Include all pages with proper priority and changefreq attributes.
              </p>
            </div>
            <div className={styles.Card}>
              <h3>Meta Tags Per Page</h3>
              <p>
                Custom title, description, and Open Graph tags for each portfolio page. Optimize for both search engines and social sharing.
              </p>
            </div>
          </div>
          
          <div className={styles.example}>
            <h4>JSON-LD Structured Data Example</h4>
            <pre>{`// components/StructuredData.js
export default function StructuredData() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Your Name",
    "url": "https://yourportfolio.com",
    "image": "https://yourportfolio.com/images/profile.jpg",
    "jobTitle": "Frontend Developer",
    "worksFor": {
      "@type": "Organization",
      "name": "Your Company"
    },
    "sameAs": [
      "https://github.com/yourusername",
      "https://linkedin.com/in/yourusername"
    ],
    "skills": ["React", "Next.js", "TypeScript", "CSS"]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
    />
  );
}`}</pre>
          </div>
        </section>

        <section className={styles.content}>
          <h2>Performance Optimization Techniques</h2>
          
          <div className={styles.Tables}>
            <div className={styles.tableHeader}>
              <span>Optimization</span>
              <span>Impact Score</span>
              <span>Implementation</span>
            </div>
            <div className={styles.tableRow}>
              <span>Image Optimization</span>
              <span>+20-30 points</span>
              <span>WebP format, lazy loading, responsive images</span>
            </div>
            <div className={styles.tableRow}>
              <span>Font Optimization</span>
              <span>+10-15 points</span>
              <span>Font display swap, subset fonts, preload critical fonts</span>
            </div>
            <div className={styles.tableRow}>
              <span>Code Splitting</span>
              <span>+15-20 points</span>
              <span>Dynamic imports, component-level code splitting</span>
            </div>
            <div className={styles.tableRow}>
              <span>Caching Strategy</span>
              <span>+10-15 points</span>
              <span>Service workers, CDN caching, proper cache headers</span>
            </div>
            <div className={styles.tableRow}>
              <span>Minification</span>
              <span>+5-10 points</span>
              <span>Minify HTML, CSS, JS, remove unused code</span>
            </div>
          </div>

          <h3>Critical CSS Implementation</h3>
          <div className={styles.example}>
            <pre>{`/* critical.css - Load inline in <head> */
/* Above-the-fold styles only */
.hero-section {
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  min-height: 100vh;
  display: flex;
  align-items: center;
}

/* Load rest of CSS asynchronously */
<link
  rel="preload"
  href="/styles/main.css"
  as="style"
  onload="this.onload=null;this.rel='stylesheet'"
/>
<noscript><link rel="stylesheet" href="/styles/main.css" /></noscript>`}</pre>
          </div>
        </section>

        <section className={styles.content}>
          <h2>Accessibility Best Practices</h2>
          
          <ul className={styles.List}>
            <li>
              <strong>Semantic HTML:</strong> Use proper heading hierarchy (h1-h6), landmark roles, and descriptive link text.
            </li>
            <li>
              <strong>Keyboard Navigation:</strong> Ensure all interactive elements are keyboard accessible with visible focus states.
            </li>
            <li>
              <strong>ARIA Labels:</strong> Use ARIA attributes for complex components but prefer native HTML semantics.
            </li>
            <li>
              <strong>Color Contrast:</strong> Maintain WCAG AA compliance (4.5:1 for normal text, 3:1 for large text).
            </li>
            <li>
              <strong>Screen Reader Testing:</strong> Test with NVDA, VoiceOver, or JAWS to ensure proper announcements.
            </li>
          </ul>
          
          <div className={styles.example}>
            <h4>Accessible Component Example</h4>
            <pre>{`// components/AccessibleButton.js
export default function AccessibleButton({ children, onClick, loading }) {
  return (
    <button
      className="btn-primary"
      onClick={onClick}
      disabled={loading}
      aria-busy={loading}
      aria-label={loading ? "Processing request" : undefined}
    >
      {loading ? (
        <>
          <span className="visually-hidden">Loading</span>
          <span aria-hidden="true">⌛</span>
        </>
      ) : (
        children
      )}
    </button>
  );
}

/* visually-hidden utility class */
.visually-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}`}</pre>
          </div>
        </section>

        <section className={styles.content}>
          <h2>Monitoring and Maintenance</h2>
          
          <div className={styles.principlesGrid}>
            <div className={styles.Card}>
              <h3>Continuous Testing</h3>
              <p>
                Set up Lighthouse CI in your workflow to test every commit. Use GitHub Actions to automate performance testing.
              </p>
            </div>
            <div className={styles.Card}>
              <h3>Real User Monitoring</h3>
              <p>
                Implement monitoring with tools like Vercel Analytics, Google Analytics 4, or Sentry to track real performance.
              </p>
            </div>
            <div className={styles.Card}>
              <h3>Regular Audits</h3>
              <p>
                Schedule monthly audits with Lighthouse, WebPageTest, and Chrome DevTools to catch regressions early.
              </p>
            </div>
          </div>
          
          <div className={styles.example}>
            <h4>GitHub Actions Lighthouse CI</h4>
            <pre>{`# .github/workflows/lighthouse.yml
name: Lighthouse CI
on: [push]
jobs:
  lighthouse:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
      - run: npm install
      - run: npm run build
      - run: npm start &
      - name: Run Lighthouse
        uses: treosh/lighthouse-ci-action@v9
        with:
          configPath: './lighthouserc.json'
          uploadArtifacts: true
          temporaryPublicStorage: true

# lighthouserc.json
{
  "ci": {
    "collect": {
      "url": ["http://localhost:3000"],
      "numberOfRuns": 3
    },
    "assert": {
      "assertions": {
        "categories:performance": ["error", { "minScore": 1 }],
        "categories:accessibility": ["error", { "minScore": 1 }],
        "categories:seo": ["error", { "minScore": 1 }]
      }
    }
  }
}`}</pre>
          </div>
        </section>

        <section className={styles.content}>
          <h2>Perfect Portfolio Checklist</h2>
          <div className={styles.Tables}>
            <div className={styles.tableHeader}>
              <span>Category</span>
              <span>Requirement</span>
              <span>Status</span>
            </div>
            <div className={styles.tableRow}>
              <span>Performance</span>
              <span>LCP &lt; 2.5s, FID &lt; 100ms, CLS &lt; 0.1</span>
              <span>✅ Must pass</span>
            </div>
            <div className={styles.tableRow}>
              <span>SEO</span>
              <span>Meta tags, sitemap, robots.txt, structured data</span>
              <span>✅ Must pass</span>
            </div>
            <div className={styles.tableRow}>
              <span>Accessibility</span>
              <span>WCAG 2.1 AA compliance, keyboard navigation</span>
              <span>✅ Must pass</span>
            </div>
            <div className={styles.tableRow}>
              <span>Mobile</span>
              <span>Responsive design, touch targets, mobile menu</span>
              <span>✅ Must pass</span>
            </div>
            <div className={styles.tableRow}>
              <span>Content</span>
              <span>3-5 projects, about section, contact info</span>
              <span>✅ Must pass</span>
            </div>
          </div>
        </section>

        <section className={styles.content}>
          <h2>Common Pitfalls & Solutions</h2>
          
          <div className={styles.principlesGrid}>
            <div className={styles.Card}>
              <h3> Unoptimized Images</h3>
              <p>
                <strong>Solution:</strong> Use Next.js Image component with WebP format, implement lazy loading, and provide appropriate sizes.
              </p>
            </div>
            <div className={styles.Card}>
              <h3> Render-blocking Resources</h3>
              <p>
                <strong>Solution:</strong> Defer non-critical CSS/JS, use async/defer attributes, and implement code splitting.
              </p>
            </div>
            <div className={styles.Card}>
              <h3> Missing Meta Tags</h3>
              <p>
                <strong>Solution:</strong> Implement dynamic meta tags per page, including Open Graph and Twitter Card tags.
              </p>
            </div>
            <div className={styles.Card}>
              <h3> Poor Accessibility</h3>
              <p>
                <strong>Solution:</strong> Use semantic HTML, proper ARIA labels, keyboard navigation, and automated testing.
              </p>
            </div>
          </div>
        </section>

        <section className={styles.blogconclusion}>
          <h2>Conclusion</h2>
          <p>
            Building a portfolio with perfect Lighthouse scores and excellent SEO isn't just about ticking boxes—it's about demonstrating mastery of modern web development. By combining Next.js optimizations with careful attention to performance, accessibility, and SEO fundamentals, you create a portfolio that not only showcases your projects but also serves as living proof of your technical expertise. Remember that a perfect score is a journey, not a destination. Regular monitoring, continuous improvement, and staying updated with web standards will ensure your portfolio remains a cutting-edge showcase of your skills. Your portfolio should be your best project—make it one you're genuinely proud to share with potential employers and clients.
          </p>
        </section>

        {/* Tags */}
        <div className={styles.bgbtns}>
          <span className={styles.bgbtn}>Portfolio</span>
          <span className={styles.bgbtn}>SEO</span>
          <span className={styles.bgbtn}>Performance</span>
          <span className={styles.bgbtn}>Lighthouse</span>
          <span className={styles.bgbtn}>Next.js</span>
          <span className={styles.bgbtn}>Accessibility</span>
        </div>
      </div>
    </div>
  );
};

export default PortfolioSEO;