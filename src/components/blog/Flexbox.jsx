import React from "react";
import styles from "./ResponsiveDesign.module.css";
import Image from "next/image";
import gridVsFlexboxImage from "../../assets/image/grid.png";

const GridVsFlexbox = () => {
  return (
    <div className={styles.container}>
      {/* Header with gradient */}
      <header className={styles.blogHeader}>
        <div className={styles.categoryTag}>CSS Layout</div>
        <h1 className={styles.blogTitle}>CSS Grid vs Flexbox: When to Use What</h1>
      </header>

      {/* Featured Image */}
      <div className={styles.featuredImage}>
        <Image
          src={gridVsFlexboxImage}
          alt="CSS Grid and Flexbox comparison illustration"
          width={1200}
          height={600}
          className={styles.blogImage}
          priority
        />
        <div className={styles.imageCaption}>
          Visual comparison of CSS Grid (two-dimensional) and Flexbox (one-dimensional) layouts
        </div>
      </div>

      {/* Main Content */}
      <div className={styles.blogContent}>
        <div className={styles.intro}>
          <p className={styles.lead}>
            Choosing between CSS Grid and Flexbox is one of the most common dilemmas modern web developers face. While both are powerful layout tools, understanding their distinct purposes and strengths is key to creating efficient, maintainable, and responsive designs.
          </p>
        </div>

        <section className={styles.content}>
          <h2>The Fundamental Difference</h2>
          <p>
            The core distinction lies in dimensionality: <strong>CSS Grid is two-dimensional</strong> (handles both rows and columns simultaneously), while <strong>Flexbox is one-dimensional</strong> (handles either rows OR columns at a time). This fundamental difference dictates their ideal use cases and applications in modern web development.
          </p>
        </section>

        <section className={styles.content}>
          <h2>When to Use CSS Grid</h2>
          <div className={styles.principlesGrid}>
            <div className={styles.Card}>
              <h3>Complex Page Layouts</h3>
              <p>
                Perfect for overall page structures with header, sidebar, main content, and footer. Grid's explicit row and column control makes it ideal for macro layouts.
              </p>
            </div>
            <div className={styles.Card}>
              <h3>Two-Dimensional Layouts</h3>
              <p>
                When you need precise control over both rows and columns simultaneously, like in dashboards, galleries, or card grids with strict alignment requirements.
              </p>
            </div>
            <div className={styles.Card}>
              <h3>Overlapping Elements</h3>
              <p>
                Grid excels at creating overlapping content areas using grid line placement, perfect for magazine-style layouts or creative designs with layered elements.
              </p>
            </div>
          </div>
          
          <div className={styles.example}>
            <h4>Grid Example: Holy Grail Layout</h4>
            <pre>{`.page-layout {
  display: grid;
  grid-template-areas:
    "header header header"
    "sidebar main ads"
    "footer footer footer";
  grid-template-columns: 200px 1fr 200px;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
}`}</pre>
          </div>
        </section>

        <section className={styles.content}>
          <h2>When to Use Flexbox</h2>
          <div className={styles.principlesGrid}>
            <div className={styles.Card}>
              <h3>Content-Driven Layouts</h3>
              <p>
                Ideal when you don't know how much content you'll have. Flexbox distributes space dynamically based on content size, making it perfect for navigation bars, toolbars, and form controls.
              </p>
            </div>
            <div className={styles.Card}>
              <h3>Single-Direction Layouts</h3>
              <p>
                Use Flexbox for layouts that flow in one direction (horizontal or vertical). Perfect for aligning items within a container, centering content, or creating flexible lists.
              </p>
            </div>
            <div className={styles.Card}>
              <h3>Component-Level Layouts</h3>
              <p>
                Excellent for smaller UI components like buttons, form groups, cards, and navigation menus where you need fine-grained control over alignment and distribution.
              </p>
            </div>
          </div>
          
          <div className={styles.example}>
            <h4>Flexbox Example: Navigation Bar</h4>
            <pre>{`.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
}

.nav-items {
  display: flex;
  gap: 2rem;
  align-items: center;
}`}</pre>
          </div>
        </section>

        <section className={styles.content}>
          <h2>Practical Comparison Table</h2>
          <div className={styles.Tables}>
            <div className={styles.tableHeader}>
              <span>Feature</span>
              <span>CSS Grid</span>
              <span>Flexbox</span>
            </div>
            <div className={styles.tableRow}>
              <span>Dimensionality</span>
              <span>Two-dimensional (rows & columns)</span>
              <span>One-dimensional (row OR column)</span>
            </div>
            <div className={styles.tableRow}>
              <span>Best For</span>
              <span>Macro layouts, page structure</span>
              <span>Micro layouts, content alignment</span>
            </div>
            <div className={styles.tableRow}>
              <span>Content vs Layout</span>
              <span>Layout-first approach</span>
              <span>Content-first approach</span>
            </div>
            <div className={styles.tableRow}>
              <span>Browser Support</span>
              <span>Modern browsers (2017+)</span>
              <span>Excellent (2012+)</span>
            </div>
            <div className={styles.tableRow}>
              <span>Overlap Control</span>
              <span>Native support</span>
              <span>Requires extra techniques</span>
            </div>
          </div>
        </section>

        <section className={styles.content}>
          <h2>The Golden Rule: Use Both!</h2>
          <p>
            Modern web development isn't about choosing one over the other—it's about using them together harmoniously. Here's the winning strategy:
          </p>
          
          <ul className={styles.List}>
            <li>
              <strong>Start with Grid for page layout:</strong> Use CSS Grid to create the overall page structure and define the major content areas.
            </li>
            <li>
              <strong>Use Flexbox for components:</strong> Within those Grid areas, use Flexbox to align and distribute content.
            </li>
            <li>
              <strong>Grid for outer, Flexbox for inner:</strong> Think of Grid as your skeleton and Flexbox as your muscles and tendons.
            </li>
            <li>
              <strong>Nest when needed:</strong> A Flexbox container can be a Grid item, and a Grid container can contain Flexbox items.
            </li>
          </ul>
          
          <div className={styles.example}>
            <h4>Combined Example: Product Grid</h4>
            <pre>{`/* Grid for the overall product grid */
.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  padding: 2rem;
}

/* Flexbox for individual product cards */
.product-card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
}

.product-content {
  flex: 1; /* Takes available space */
}

.product-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: auto;
}`}</pre>
          </div>
        </section>

        <section className={styles.content}>
          <h2>Common Pitfalls to Avoid</h2>
          <div className={styles.principlesGrid}>
            <div className={styles.Card}>
              <h3> Using Grid for Everything</h3>
              <p>
                Grid can do everything Flexbox does, but that doesn't mean it should. Simple alignment tasks are often easier with Flexbox.
              </p>
            </div>
            <div className={styles.Card}>
              <h3> Nesting Deep Flexbox Chains</h3>
              <p>
                Deeply nested Flexbox containers can lead to performance issues. Sometimes Grid offers a cleaner, more performant solution.
              </p>
            </div>
            <div className={styles.Card}>
              <h3> Ignoring Browser Support</h3>
              <p>
                While both are well-supported, consider your target audience. Use feature queries (<code>@supports</code>) for progressive enhancement.
              </p>
            </div>
          </div>
        </section>

        <section className={styles.blogconclusion}>
          <h2>Conclusion</h2>
          <p>
            CSS Grid and Flexbox are complementary tools, not competing technologies. Grid excels at defining the outer structure and two-dimensional layouts, while Flexbox shines at managing content distribution and alignment within those structures. By mastering both and understanding when to reach for each tool, you'll write cleaner, more efficient CSS and create more robust, maintainable layouts. Remember: <strong>Grid for layout, Flexbox for alignment</strong> is a good starting point, but the best developers know when to break this rule for optimal results.
          </p>
        </section>

        {/* Tags */}
        <div className={styles.bgbtns}>
          <span className={styles.bgbtn}>CSS Grid</span>
          <span className={styles.bgbtn}>Flexbox</span>
          <span className={styles.bgbtn}>Web Layout</span>
          <span className={styles.bgbtn}>Frontend</span>
          <span className={styles.bgbtn}>Best Practices</span>
        </div>
      </div>
    </div>
  );
};

export default GridVsFlexbox;