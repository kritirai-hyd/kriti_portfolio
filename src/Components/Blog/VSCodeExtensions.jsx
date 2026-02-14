import React from "react";
import styles from "./ResponsiveDesign.module.css";
import Image from "next/image";
import vscodeImage from "../../assets/image/build-a-portfolio-website.png";

const VSCodeExtensions = () => {
  return (
    <div className={styles.container}>
      {/* Header with gradient */}
      <header className={styles.blogHeader}>
        <div className={styles.categoryTag}>Developer Tools</div>
        <h1 className={styles.blogTitle}>Top 5 VS Code Extensions for Frontend Developers</h1>
      </header>

      {/* Featured Image */}
      <div className={styles.featuredImage}>
        <Image
          src={vscodeImage}
          alt="VS Code Editor with extensions"
          width={1200}
          height={600}
          className={styles.blogImage}
          priority
        />
        <div className={styles.imageCaption}>
          Essential VS Code extensions that will supercharge your frontend development workflow
        </div>
      </div>

      {/* Main Content */}
      <div className={styles.blogContent}>
        <div className={styles.intro}>
          <p className={styles.lead}>
            The right VS Code extensions can transform your development experience from good to exceptional. After testing hundreds of extensions, here are the top 5 that consistently deliver value, boost productivity, and make frontend development more enjoyable and efficient.
          </p>
        </div>

        <section className={styles.content}>
          <h2>Why Extensions Matter</h2>
          <p>
            VS Code's real power lies in its extensibility. The right extensions can automate repetitive tasks, catch errors before runtime, enforce code consistency, and provide intelligent assistance that goes beyond basic syntax highlighting. For frontend developers working with HTML, CSS, JavaScript, and modern frameworks, these tools are game-changers.
          </p>
        </section>

        <section className={styles.content}>
          <h2>#1: ESLint</h2>
          <div className={styles.principlesGrid}>
            <div className={styles.Card}>
              <h3>What It Does</h3>
              <p>
                Identifies and fixes problematic patterns in JavaScript code. Catches bugs, enforces coding standards, and maintains code quality across your entire project.
              </p>
            </div>
            <div className={styles.Card}>
              <h3>Key Features</h3>
              <p>
                Real-time error detection, auto-fix on save, custom rule configuration, framework-specific rules (React, Vue, etc.), and TypeScript support.
              </p>
            </div>
            <div className={styles.Card}>
              <h3>Why It's Essential</h3>
              <p>
                Prevents runtime errors, enforces team consistency, and teaches best practices through immediate feedback. Saves hours of debugging time.
              </p>
            </div>
          </div>
          
          <div className={styles.example}>
            <h4>Example ESLint Configuration</h4>
            <pre>{`// .eslintrc.js
module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  rules: {
    'react/prop-types': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off'
  },
  settings: {
    react: {
      version: 'detect'
    }
  }
};`}</pre>
          </div>
        </section>

        <section className={styles.content}>
          <h2>#2: Prettier</h2>
          <div className={styles.principlesGrid}>
            <div className={styles.Card}>
              <h3>What It Does</h3>
              <p>
                An opinionated code formatter that automatically formats your code to ensure consistent styling across your entire codebase.
              </p>
            </div>
            <div className={styles.Card}>
              <h3>Key Features</h3>
              <p>
                Format on save, support for multiple languages (JS, TS, CSS, HTML, JSON, etc.), minimal configuration, and integration with ESLint.
              </p>
            </div>
            <div className={styles.Card}>
              <h3>Why It's Essential</h3>
              <p>
                Eliminates code formatting debates, saves time on manual formatting, and ensures consistency across teams and projects.
              </p>
            </div>
          </div>
          
          <div className={styles.example}>
            <h4>Prettier + ESLint Integration</h4>
            <pre>{`// Install these packages:
// prettier eslint-config-prettier eslint-plugin-prettier

// .prettierrc
{
  "semi": true,
  "trailingComma": "es5",
  "singleQuote": true,
  "tabWidth": 2,
  "printWidth": 80
}

// .eslintrc.js
module.exports = {
  extends: ['plugin:prettier/recommended']
};`}</pre>
          </div>
        </section>

        <section className={styles.content}>
          <h2>#3: Live Server</h2>
          <div className={styles.principlesGrid}>
            <div className={styles.Card}>
              <h3>What It Does</h3>
              <p>
                Launches a local development server with live reload feature for static and dynamic pages.
              </p>
            </div>
            <div className={styles.Card}>
              <h3>Key Features</h3>
              <p>
                One-click server launch, automatic browser refresh on file changes, support for multiple ports, and custom configuration options.
              </p>
            </div>
            <div className={styles.Card}>
              <h3>Why It's Essential</h3>
              <p>
                Provides instant feedback during development, eliminates manual browser refreshing, and speeds up the development workflow dramatically.
              </p>
            </div>
          </div>
          
          <div className={styles.example}>
            <h4>Usage Example</h4>
            <pre>{`// Right-click any HTML file and select:
// "Open with Live Server"

// Or use the command palette:
// Ctrl+Shift+P → "Live Server: Open with Live Server"

// Automatically opens browser at:
// http://localhost:5500/

// Changes to HTML, CSS, or JS files
// trigger automatic browser refresh`}</pre>
          </div>
        </section>

        <section className={styles.content}>
          <h2>#4: Auto Rename Tag</h2>
          <div className={styles.principlesGrid}>
            <div className={styles.Card}>
              <h3>What It Does</h3>
              <p>
                Automatically renames paired HTML/XML tags when you rename one of them.
              </p>
            </div>
            <div className={styles.Card}>
              <h3>Key Features</h3>
              <p>
                Works with HTML, JSX, Vue, XML, and PHP files, customizable trigger delay, and supports self-closing tags.
              </p>
            </div>
            <div className={styles.Card}>
              <h3>Why It's Essential</h3>
              <p>
                Saves countless clicks and keystrokes when refactoring HTML structure, prevents mismatched tags, and improves productivity when working with component-based frameworks.
              </p>
            </div>
          </div>
          
          <div className={styles.example}>
            <h4>Before & After Example</h4>
            <pre>{`// BEFORE: Manual rename (error-prone)
<div class="old-class">
  <p>Content here</p>
</dov>  // Oops, typo!

// WITH AUTO RENAME TAG:
<div class="new-class">
  <p>Content here</p>
</div>  // Automatically updates!

// Also works with component names:
<OldComponent /> → <NewComponent />
// Both opening and closing tags update`}</pre>
          </div>
        </section>

        <section className={styles.content}>
          <h2>#5: CSS Peek</h2>
          <div className={styles.principlesGrid}>
            <div className={styles.Card}>
              <h3>What It Does</h3>
              <p>
                Allows you to peek CSS definitions directly from HTML files and jump to their source code.
              </p>
            </div>
            <div className={styles.Card}>
              <h3>Key Features</h3>
              <p>
                Works with CSS, SCSS, Sass, and Less files, supports class and ID selectors, shows definitions inline, and allows quick navigation to source files.
              </p>
            </div>
            <div className={styles.Card}>
              <h3>Why It's Essential</h3>
              <p>
                Eliminates constant file switching, helps understand styling relationships, and speeds up debugging of CSS issues.
              </p>
            </div>
          </div>
          
          <div className={styles.example}>
            <h4>Usage Demonstration</h4>
            <pre>{`<!-- In your HTML/JSX file -->
<div className="card-container">
  <!-- Hover over className and press Ctrl+Shift+F12 -->
  <!-- Or right-click → "Peek Definition" -->
  <h2 class="card-title">Title</h2>
  <p class="card-content">Content</p>
</div>

// Peeks show:
// styles.css
.card-container {
  display: grid;
  gap: 1rem;
  padding: 1rem;
}

.card-title {
  font-size: 1.5rem;
  color: #333;
}

.card-content {
  line-height: 1.6;
}`}</pre>
          </div>
        </section>

        <section className={styles.content}>
          <h2>Extension Comparison Table</h2>
          <div className={styles.Tables}>
            <div className={styles.tableHeader}>
              <span>Extension</span>
              <span>Category</span>
              <span>Weekly Downloads</span>
              <span>Key Benefit</span>
            </div>
            <div className={styles.tableRow}>
              <span>ESLint</span>
              <span>Code Quality</span>
              <span>15M+</span>
              <span>Catch errors before runtime</span>
            </div>
            <div className={styles.tableRow}>
              <span>Prettier</span>
              <span>Formatting</span>
              <span>12M+</span>
              <span>Consistent code style</span>
            </div>
            <div className={styles.tableRow}>
              <span>Live Server</span>
              <span>Development</span>
              <span>8M+</span>
              <span>Instant browser refresh</span>
            </div>
            <div className={styles.tableRow}>
              <span>Auto Rename Tag</span>
              <span>Productivity</span>
              <span>6M+</span>
              <span>Faster HTML editing</span>
            </div>
            <div className={styles.tableRow}>
              <span>CSS Peek</span>
              <span>Navigation</span>
              <span>5M+</span>
              <span>Quick CSS inspection</span>
            </div>
          </div>
        </section>

        <section className={styles.content}>
          <h2>Honorable Mentions</h2>
          <p>
            While these didn't make the top 5, they're still incredibly valuable for specific workflows:
          </p>
          
          <ul className={styles.List}>
            <li>
              <strong>GitLens:</strong> Supercharges Git capabilities with blame annotations, history exploration, and code authorship tracking.
            </li>
            <li>
              <strong>Error Lens:</strong> Shows error messages inline as you type, making debugging more intuitive and immediate.
            </li>
            <li>
              <strong>Bracket Pair Colorizer:</strong> Colors matching brackets for better code readability, especially in nested structures.
            </li>
            <li>
              <strong>Path Intellisense:</strong> Autocompletes filenames in import statements, saving time on file path lookups.
            </li>
            <li>
              <strong>Thunder Client:</strong> Lightweight REST API client for testing endpoints directly from VS Code.
            </li>
          </ul>
        </section>

        <section className={styles.content}>
          <h2>Pro Tips for Extension Management</h2>
          <div className={styles.principlesGrid}>
            <div className={styles.Card}>
              <h3>Sync Across Devices</h3>
              <p>
                Enable Settings Sync in VS Code to automatically sync your extensions, settings, and keybindings across all your development machines.
              </p>
            </div>
            <div className={styles.Card}>
              <h3>Extension Profiles</h3>
              <p>
                Create different extension profiles for different types of projects (React, Vue, Node.js, etc.) to keep your workspace clean and focused.
              </p>
            </div>
            <div className={styles.Card}>
              <h3>Regular Audits</h3>
              <p>
                Every 3 months, review your installed extensions. Remove unused ones and update the keepers to maintain optimal VS Code performance.
              </p>
            </div>
          </div>
        </section>

        <section className={styles.blogconclusion}>
          <h2>Conclusion</h2>
          <p>
            The right VS Code extensions are like having a team of expert assistants who automate the mundane, catch mistakes early, and help you write better code faster. Start with these top 5 essentials—ESLint for code quality, Prettier for consistency, Live Server for instant feedback, Auto Rename Tag for HTML efficiency, and CSS Peek for styling navigation. Remember that while extensions boost productivity, they should enhance—not replace—your fundamental development skills. Install deliberately, customize thoughtfully, and regularly prune your extensions to keep your development environment fast and focused.
          </p>
        </section>

        {/* Tags */}
        <div className={styles.bgbtns}>
          <span className={styles.bgbtn}>VS Code</span>
          <span className={styles.bgbtn}>Developer Tools</span>
          <span className={styles.bgbtn}>Productivity</span>
          <span className={styles.bgbtn}>Frontend</span>
          <span className={styles.bgbtn}>Extensions</span>
        </div>
      </div>
    </div>
  );
};

export default VSCodeExtensions;