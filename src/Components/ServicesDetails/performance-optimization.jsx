import React from 'react';
import styles from './performance-optimization.module.css';
import BreadCrumb from '../ui/BreadCrumb/BreadCrumb';
import Heading from '../ui/Heading/Heading';

const PerformanceServices = () => {
  // Main service categories
  const services = [
    {
      id: 1,
      title: "Frontend Performance Optimization",
      description: "Optimize your React application for faster loading and better user experience",
      icon: "🚀",
      techniques: [
        "Code splitting with React.lazy()",
        "Image optimization & lazy loading",
        "Bundle size reduction",
        "Critical CSS inlining",
        "Font optimization",
        "Tree shaking implementation"
      ],
      benefits: [
        "Faster page loads",
        "Better user experience",
        "Improved SEO rankings",
        "Lower bounce rates"
      ]
    },
    {
      id: 2,
      title: "Rendering Optimization",
      description: "Enhance component rendering performance for smoother interactions",
      icon: "⚡",
      techniques: [
        "React.memo implementation",
        "useMemo & useCallback optimization",
        "Virtualization for long lists",
        "Avoiding unnecessary re-renders",
        "Component composition patterns",
        "Key prop optimization"
      ],
      benefits: [
        "Smoother UI interactions",
        "Reduced CPU usage",
        "Better responsiveness",
        "Improved frame rates"
      ]
    },
    {
      id: 3,
      title: "Core Web Vitals Optimization",
      description: "Optimize for Google's Core Web Vitals and improve search rankings",
      icon: "🎯",
      techniques: [
        "Largest Contentful Paint (LCP) optimization",
        "First Input Delay (FID) improvement",
        "Cumulative Layout Shift (CLS) reduction",
        "Time to First Byte (TTFB) optimization",
        "Responsive image sizing",
        "Resource prioritization"
      ],
      benefits: [
        "Better Google rankings",
        "Improved user experience",
        "Higher conversion rates",
        "Mobile-friendliness"
      ]
    },
    {
      id: 4,
      title: "Network & Asset Optimization",
      description: "Optimize how your assets are delivered to users worldwide",
      icon: "🌐",
      techniques: [
        "CDN implementation",
        "HTTP/2 & HTTP/3 setup",
        "Gzip/Brotli compression",
        "Resource minification",
        "Preconnect & prefetch",
        "Cache strategy optimization"
      ],
      benefits: [
        "Faster global delivery",
        "Reduced bandwidth costs",
        "Better server load",
        "Offline capability"
      ]
    },
    {
      id: 5,
      title: "Memory & Runtime Optimization",
      description: "Prevent memory leaks and optimize runtime performance",
      icon: "💾",
      techniques: [
        "Event listener cleanup",
        "Subscription management",
        "Memory leak detection",
        "Garbage collection optimization",
        "Web Workers for heavy tasks",
        "Debouncing & throttling"
      ],
      benefits: [
        "Stable performance",
        "No memory leaks",
        "Better long-running apps",
        "Mobile device optimization"
      ]
    },
    {
      id: 6,
      title: "Build & Bundle Optimization",
      description: "Optimize your build process for smaller, faster bundles",
      icon: "📦",
      techniques: [
        "Webpack optimization",
        "Module federation",
        "Dynamic imports",
        "Chunk splitting",
        "Environment-specific builds",
        "Source map optimization"
      ],
      benefits: [
        "Smaller bundle sizes",
        "Faster builds",
        "Better caching",
        "Easier maintenance"
      ]
    }
  ];

  // Key benefits overview
  const keyBenefits = [
    {
      value: "2-3x",
      label: "Faster Loading",
      description: "Optimized sites load 2-3x faster"
    },
    {
      value: "40%",
      label: "Lower Bounce Rate",
      description: "Users stay longer on fast sites"
    },
    {
      value: "30%",
      label: "Higher Conversion",
      description: "Better performance = more sales"
    },
    {
      value: "50%",
      label: "Bandwidth Savings",
      description: "Optimized assets use less data"
    }
  ];

  // Process steps
  const processSteps = [
    {
      step: "01",
      title: "Performance Audit",
      description: "Comprehensive analysis of current performance metrics"
    },
    {
      step: "02",
      title: "Strategy Development",
      description: "Custom optimization plan based on audit findings"
    },
    {
      step: "03",
      title: "Implementation",
      description: "Systematic application of optimization techniques"
    },
    {
      step: "04",
      title: "Monitoring & Maintenance",
      description: "Continuous performance tracking and improvements"
    }
  ];

  return (
    <>
     <BreadCrumb
        title="Accessibility"
        path={[{ name: "Home", link: "/" }, { name: "Accessibility" }]}
      />
    <div className={styles.bg}>

    <div className={styles.container}>
      {/* Header Section */}
      <div className={styles.header}>
        <h1 className={styles.title}>
   
          Performance Optimization Services
        </h1>
        <p className={styles.subtitle}>
          Make your React applications lightning fast with our comprehensive 
          performance optimization services. We help you achieve better Core Web Vitals,
          faster load times, and improved user experience.
        </p>
      </div>

  
      <div className={styles.cardSection}>
        <div className={styles.card}>
          {keyBenefits.map((stat, index) => (
            <div key={index} className={styles.cardtext}>
              <div className={styles.cardnum}>{stat.value}</div>
              <div className={styles.cardtitle}>{stat.label}</div>
              <div className={styles.carddesc }>{stat.description}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Services Grid */}
      <div className={styles.services}>
    
        <Heading heading="Our Performance Services" />
        <div className={styles.servicesContainer}>
          {services.map((service) => (
            <div key={service.id} className={styles.serviceCard}>
              <div className={styles.header}>
              
                <h3 className={styles.title}>{service.title}</h3>
              </div>
              
              <p className={styles.des}>{service.description}</p>
              
              <div className={styles.text}>
                <h4 className={styles.subtitle}>Techniques we use:</h4>
                <ul className={styles.serviceul}>
                  {service.techniques.slice(0, 4).map((tech, idx) => (
                    <li key={idx} className={styles.list}>
                      <span className={styles.check}>✓</span>
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>

              <div className={styles.feature}>
                <h4 className={styles.ftitle}>Benefits:</h4>
                <div className={styles.flist}>
                  {service.benefits.map((benefit, idx) => (
                    <span key={idx} className={styles.fcard}>
                      {benefit}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Process Section */}
      <div className={styles.process}>
        <h2 className={styles.ptitle}>Our Optimization Process</h2>
        <div className={styles.processContainer}>
          {processSteps.map((step) => (
            <div key={step.step} className={styles.Card}>
          
              <h3 className={styles.title}>{step.title}</h3>
              <p className={styles.desc}>{step.description}</p>
            </div>
          ))}
        </div>
      </div>



    </div>
    </div>
        </>
  );
};

export default PerformanceServices;