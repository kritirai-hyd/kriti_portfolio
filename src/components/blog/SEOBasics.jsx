import React from "react";
import styles from "./ResponsiveDesign.module.css";
import Image from "next/image";
import seoImage from "../../assets/image/seo-basics.png";

const SEOBasics = () => {
  return (
    <div className={styles.container}>
      {/* Header with gradient */}
      <header className={styles.blogHeader}>
        <div className={styles.categoryTag}>Web Development</div>
        <h1 className={styles.blogTitle}>Basic SEO for Developers: Title, Meta Tags & Alt Text</h1>
      </header>

      {/* Featured Image */}
      <div className={styles.featuredImage}>
        <Image
          src={seoImage}
          alt="SEO optimization illustration showing search engine rankings"
          width={1200}
          height={600}
          className={styles.blogImage}
          priority
        />
        <div className={styles.imageCaption}>
          Essential SEO elements that every developer should implement: title tags, meta descriptions, and image alt text
        </div>
      </div>

      {/* Main Content */}
      <div className={styles.blogContent}>
        <div className={styles.intro}>
          <p className={styles.lead}>
            Search Engine Optimization (SEO) isn't just for marketers—it's a fundamental skill for developers. Implementing proper title tags, meta descriptions, and alt attributes can improve your website's visibility by up to 400%. Here's what every developer needs to know about these critical HTML elements.
          </p>
        </div>

        <section className={styles.content}>
          <h2>Why Developers Should Care About SEO</h2>
          <p>
            SEO is often misunderstood as purely a marketing concern, but technical SEO implementation falls squarely in the developer's domain. Properly structured HTML, optimized metadata, and accessible image handling directly impact search rankings, user experience, and website performance. As a developer, you control the foundation that all other SEO efforts build upon.
          </p>
        </section>

        <section className={styles.content}>
          <h2>1. Title Tags: Your Page's First Impression</h2>
          <div className={styles.principlesGrid}>
            <div className={styles.Card}>
              <h3>What It Is</h3>
              <p>
                The &lt;title&gt; element defines the document's title shown in browser tabs and search engine results. It's the most important on-page SEO element.
              </p>
            </div>
            <div className={styles.Card}>
              <h3>Optimal Length</h3>
              <p>
                50-60 characters maximum. Search engines typically display the first 50-60 characters in results. Longer titles get truncated with ellipses.
              </p>
            </div>
            <div className={styles.Card}>
              <h3>Best Practices</h3>
              <p>
                Include primary keyword, be descriptive, put important words first, keep it unique per page, and avoid keyword stuffing.
              </p>
            </div>
          </div>
          
          <div className={styles.example}>
            <h4>Good vs Bad Title Examples</h4>
            <pre>{`<!-- Good: Clear, concise, keyword-focused -->
<title>Responsive Web Design Guide: Best Practices 2024</title>

<!-- Bad: Too long, gets truncated -->
<title>How to Make Your Website Responsive on Mobile Devices and Desktop Computers</title>

<!-- Bad: Generic and unhelpful -->
<title>Page 1</title>

<!-- Bad: Keyword stuffed -->
<title>Web Design | Responsive Design | Mobile Design | CSS Design</title>

<!-- Good: Structured format -->
<title>Primary Keyword - Secondary Keyword | Brand Name</title>
<!-- Example: React Tutorial: State Management | CodeMaster</title>`}</pre>
          </div>
        </section>

        <section className={styles.content}>
          <h2>2. Meta Descriptions: Your Click-through Pitch</h2>
          <div className={styles.principlesGrid}>
            <div className={styles.Card}>
              <h3>What It Is</h3>
              <p>
                The &lt;meta name="description"&gt; tag provides a brief summary of the page content that appears in search results below the title.
              </p>
            </div>
            <div className={styles.Card}>
              <h3>Optimal Length</h3>
              <p>
                150-160 characters. While not a direct ranking factor, compelling descriptions significantly improve click-through rates.
              </p>
            </div>
            <div className={styles.Card}>
              <h3>Best Practices</h3>
              <p>
                Include primary keyword naturally, write for humans (persuasive), include a clear call-to-action, and make each page's description unique.
              </p>
            </div>
          </div>
          
          <div className={styles.example}>
            <h4>Effective Meta Description Examples</h4>
            <pre>{`<!-- Good: Clear value proposition with keyword -->
<meta name="description" content="Learn responsive web design with practical examples. Build mobile-friendly websites using CSS Grid, Flexbox, and modern techniques.">

<!-- Good: Action-oriented with benefits -->
<meta name="description" content="Master JavaScript fundamentals in 30 days. Our free course includes exercises, projects, and expert feedback to boost your skills.">

<!-- Bad: Too short, misses opportunity -->
<meta name="description" content="Web design tutorials">

<!-- Bad: Keyword stuffed and unnatural -->
<meta name="description" content="Best web design, responsive design, mobile design, CSS design tutorials for web designers and developers">

<!-- Good: Includes CTA and benefit -->
<meta name="description" content="Fix common CSS layout issues with our troubleshooting guide. Download free cheatsheets and start building better websites today!">`}</pre>
          </div>
        </section>

        <section className={styles.content}>
          <h2>3. Image Alt Text: Accessibility + SEO</h2>
          <div className={styles.principlesGrid}>
            <div className={styles.Card}>
              <h3>What It Is</h3>
              <p>
                The alt attribute describes an image for screen readers and search engines. It appears when images fail to load and helps with image search rankings.
              </p>
            </div>
            <div className={styles.Card}>
              <h3>Optimal Length</h3>
              <p>
                Be descriptive but concise. Typically 125 characters or less. Focus on accurately describing the image content and context.
              </p>
            </div>
            <div className={styles.Card}>
              <h3>Best Practices</h3>
              <p>
                Describe what's in the image, include keywords naturally, avoid "image of" or "picture of," be specific, and consider the image's purpose on the page.
              </p>
            </div>
          </div>
          
          <div className={styles.example}>
            <h4>Good vs Bad Alt Text Examples</h4>
            <pre>{`<!-- Good: Descriptive and includes context -->
<img src="responsive-design-example.png" 
     alt="CSS Grid layout showing responsive design across mobile, tablet, and desktop screens">

<!-- Good: Includes action and purpose -->
<img src="code-example.png" 
     alt="JavaScript function demonstrating array filtering with arrow syntax">

<!-- Bad: Too generic -->
<img src="hero-image.jpg" alt="Website banner">

<!-- Bad: Keyword stuffed -->
<img src="cat.jpg" alt="cat kittens cute cats kitty pet pets animal animals">

<!-- Bad: Missing alt text (accessibility failure) -->
<img src="chart.png">

<!-- Good: Decorative image (should be empty) -->
<img src="divider.png" alt="">

<!-- Good: Functional image with action -->
<img src="download-button.png" 
     alt="Download free CSS cheat sheet PDF">`}</pre>
          </div>
        </section>

        <section className={styles.content}>
          <h2>SEO Element Comparison Table</h2>
          <div className={styles.Tables}>
            <div className={styles.tableHeader}>
              <span>Element</span>
              <span>HTML Tag</span>
              <span>Optimal Length</span>
              <span>Primary Purpose</span>
              <span>Impact on SEO</span>
            </div>
            <div className={styles.tableRow}>
              <span>Title Tag</span>
              <span>&lt;title&gt;</span>
              <span>50-60 characters</span>
              <span>Browser tab & SERP title</span>
              <span>High (direct ranking factor)</span>
            </div>
            <div className={styles.tableRow}>
              <span>Meta Description</span>
              <span>&lt;meta name="description"&gt;</span>
              <span>150-160 characters</span>
              <span>SERP snippet</span>
              <span>Medium (CTR affects rankings)</span>
            </div>
            <div className={styles.tableRow}>
              <span>Image Alt Text</span>
              <span>alt attribute</span>
              <span>~125 characters</span>
              <span>Accessibility & image SEO</span>
              <span>Medium (indirect ranking factor)</span>
            </div>
          </div>
        </section>

        <section className={styles.content}>
          <h2>Common SEO Mistakes Developers Make</h2>
          
          <ul className={styles.List}>
            <li>
              <strong>Duplicate Title Tags:</strong> Using the same title across multiple pages confuses search engines and dilutes ranking potential.
            </li>
            <li>
              <strong>Missing Meta Descriptions:</strong> Letting search engines auto-generate snippets usually results in poor click-through rates.
            </li>
            <li>
              <strong>Ignoring Alt Text:</strong> Missing alt attributes hurt accessibility and miss image search traffic opportunities.
            </li>
            <li>
              <strong>Keyword Stuffing:</strong> Over-optimizing with repetitive keywords triggers spam filters and creates poor user experiences.
            </li>
            <li>
              <strong>Forgetting Mobile SEO:</strong> Not optimizing for mobile-first indexing, which Google has used since 2019.
            </li>
          </ul>
        </section>

        <section className={styles.content}>
          <h2>Implementation Tips for Different Frameworks</h2>
          
          <div className={styles.principlesGrid}>
            <div className={styles.Card}>
              <h3>React (Next.js)</h3>
              <pre>{`// Next.js App Router
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Page Title',
  description: 'Meta description',
  openGraph: {
    title: 'OG Title',
    description: 'OG Description',
  },
};`}</pre>
            </div>
            
            <div className={styles.Card}>
              <h3>Vue.js (Nuxt)</h3>
              <pre>{`<!-- Nuxt 3 -->
<script setup>
useHead({
  title: 'Page Title',
  meta: [
    { 
      name: 'description',
      content: 'Meta description'
    }
  ],
})
</script>`}</pre>
            </div>
            
            <div className={styles.Card}>
              <h3>Vanilla HTML</h3>
              <pre>{`<!-- Basic HTML template -->
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" 
        content="width=device-width, initial-scale=1.0">
  <title>Optimized Page Title</title>
  <meta name="description" 
        content="Compelling meta description">
</head>`}</pre>
            </div>
          </div>
        </section>

        <section className={styles.content}>
          <h2>Testing & Validation Tools</h2>
          
          <div className={styles.principlesGrid}>
            <div className={styles.Card}>
              <h3>Google Search Console</h3>
              <p>
                Free tool to monitor how Google sees your site. Check index status, find crawl errors, and see search queries that bring traffic.
              </p>
            </div>
            <div className={styles.Card}>
              <h3>SERP Preview Tools</h3>
              <p>
                Tools like Moz Title Tag Preview or Screaming Frog show how your title and description appear in search results before publishing.
              </p>
            </div>
            <div className={styles.Card}>
              <h3>Accessibility Validators</h3>
              <p>
                Use WAVE or axe DevTools to check alt text completeness and identify missing or empty alt attributes across your site.
              </p>
            </div>
          </div>
        </section>

        <section className={styles.content}>
          <h2>Quick SEO Checklist for Developers</h2>
          <div className={styles.Tables}>
            <div className={styles.tableHeader}>
              <span>Task</span>
              <span>Priority</span>
              <span>How to Check</span>
            </div>
            <div className={styles.tableRow}>
              <span>Unique title tags on every page</span>
              <span>High</span>
              <span>Manual review or crawling tool</span>
            </div>
            <div className={styles.tableRow}>
              <span>Meta descriptions for key pages</span>
              <span>High</span>
              <span>View page source or use SEO tool</span>
            </div>
            <div className={styles.tableRow}>
              <span>Alt text for all meaningful images</span>
              <span>High</span>
              <span>Accessibility audit tool</span>
            </div>
            <div className={styles.tableRow}>
              <span>Mobile-responsive design</span>
              <span>High</span>
              <span>Google Mobile-Friendly Test</span>
            </div>
            <div className={styles.tableRow}>
              <span>Fast page load speed</span>
              <span>Medium</span>
              <span>Google PageSpeed Insights</span>
            </div>
          </div>
        </section>

        <section className={styles.blogconclusion}>
          <h2>Conclusion</h2>
          <p>
            SEO implementation starts with proper HTML structure. Title tags, meta descriptions, and alt text are not optional "nice-to-haves"—they're essential elements that impact both search visibility and user experience. As a developer, you have the power to implement these basics correctly from the start, creating a solid foundation for all other SEO efforts. Remember: good SEO isn't about tricking search engines; it's about creating clear, accessible, and useful content that both humans and algorithms can understand. Start with these three fundamentals, and you'll be miles ahead of developers who treat SEO as someone else's problem.
          </p>
        </section>

        {/* Tags */}
        <div className={styles.bgbtns}>
          <span className={styles.bgbtn}>SEO</span>
          <span className={styles.bgbtn}>HTML</span>
          <span className={styles.bgbtn}>Web Development</span>
          <span className={styles.bgbtn}>Accessibility</span>
          <span className={styles.bgbtn}>Best Practices</span>
        </div>
      </div>
    </div>
  );
};

export default SEOBasics;