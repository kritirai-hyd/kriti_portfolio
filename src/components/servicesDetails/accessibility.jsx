import React from 'react';
import styles from './accessibility.module.css';
import BreadCrumb from '../ui/BreadCrumb/BreadCrumb';

const AccessibilityServices = () => {
  // Main service categories
  const services = [
    {
      id: 1,
      title: "WCAG Compliance Audits",
      description: "Comprehensive accessibility audits against WCAG 2.1 AA standards",
 
      features: [
        "Full WCAG 2.1 AA compliance check",
        "Automated testing with industry tools",
        "Manual expert review",
        "Screen reader testing (NVDA, VoiceOver)",
        "Keyboard navigation assessment",
        "Detailed audit report with priorities"
      ],
      deliverables: [
        "Audit report with findings",
        "Priority-based remediation plan",
        "Code-level recommendations",
        "Compliance roadmap"
      ]
    },

    {
      id: 3,
      title: "Accessible Design Services",
      description: "Design with accessibility in mind from the start",
 
      features: [
        "Color contrast analysis",
        "Typography accessibility",
        "Focus indicator design",
        "Touch target sizing",
        "Form design best practices",
        "Animation and motion preferences"
      ],
      deliverables: [
        "Accessible design systems",
        "Color palette with contrast ratios",
        "Typography scale documentation",
        "Component accessibility specs"
      ]
    },
    {
      id: 4,
      title: "Screen Reader Optimization",
      description: "Optimize your site for all major screen readers",
  
      features: [
        "NVDA (Windows) optimization",
        "VoiceOver (Mac/iOS) optimization",
        "JAWS optimization",
        "TalkBack (Android) optimization",
        "ARIA landmark implementation",
        "Alternative text review"
      ],
      deliverables: [
        "Screen reader testing report",
        "ARIA implementation guide",
        "Alt text guidelines",
        "Custom announcements setup"
      ]
    },
    {
      id: 5,
      title: "Keyboard Navigation",
      description: "Ensure full functionality via keyboard only",

      features: [
        "Focus order optimization",
        "Focus indicator styling",
        "Skip link implementation",
        "Keyboard trap prevention",
        "Custom keyboard shortcuts",
        "Focus management for modals"
      ],
      deliverables: [
        "Keyboard testing report",
        "Focus management solution",
        "Keyboard shortcut documentation",
        "Custom component accessibility"
      ]
    },
    {
      id: 6,
      title: "Accessibility Training",
      description: "Train your team to build accessible websites",
  
      features: [
        "Developer workshops",
        "Designer training sessions",
        "Content creator guidelines",
        "QA testing methodology",
        "WCAG deep dive sessions",
        "Hands-on exercises"
      ],
      deliverables: [
        "Custom training materials",
        "Accessibility checklist",
        "Reference guides",
        "Certification of completion"
      ]
    },
    {
      id: 7,
      title: "Mobile Accessibility",
      description: "Make your mobile apps and websites accessible",
    
      features: [
        "iOS VoiceOver optimization",
        "Android TalkBack optimization",
        "Touch target sizing",
        "Gesture accessibility",
        "Mobile form accessibility",
        "Responsive accessibility"
      ],
      deliverables: [
        "Mobile accessibility report",
        "Platform-specific fixes",
        "Testing on real devices",
        "Mobile WCAG compliance"
      ]
    },
 
  ];

  // Key benefits overview
  const keyBenefits = [
    {
      value: "1.3B",
      label: "People with disabilities",
      description: "Global market reach"
    },
    {
      value: "$6.9T",
      label: "Disposable income",
      description: "Purple pound market"
    },
    {
      value: "70%",
      label: "Sites are inaccessible",
      description: "Competitive advantage"
    },
    {
      value: "25%",
      label: "Higher conversion",
      description: "From accessible sites"
    }
  ];

  // WCAG compliance levels
  const complianceLevels = [
    {
      level: "WCAG 2.1 AA",
      description: "Industry standard compliance",

      requirements: [
        "Contrast ratio 4.5:1",
        "Keyboard accessible",
        "Alt text on images",
        "Form labels",
        "ARIA landmarks"
      ]
    },
    {
      level: "Section 508",
      description: "US federal requirements",

      requirements: [
        "Federal agency compliance",
        "Procurement standards",
        "Technical standards",
        "ICT accessibility"
      ]
    },
    {
      level: "ADA Title III",
      description: "Public accommodations",
  
      requirements: [
        "Website accessibility",
        "Mobile app compliance",
        "Public access",
        "Legal protection"
      ]
    }
  ];

  // Testing tools we use
  const testingTools = [
    { name: "WAVE", purpose: "Visual accessibility evaluation"},
    { name: "axe DevTools", purpose: "Automated testing" },
    { name: "NVDA", purpose: "Screen reader (Windows)" },
    { name: "VoiceOver", purpose: "Screen reader (Mac/iOS)"},
    { name: "JAWS", purpose: "Screen reader (Professional)"},
    { name: "Color Contrast Analyzer", purpose: "Contrast checking"},
    { name: "Lighthouse", purpose: "Accessibility audits"},
    { name: "Keyboard testing", purpose: "Manual keyboard checks" }
  ];

  return (
    <>    <BreadCrumb
        title="Accessibility"
        path={[{ name: "Home", link: "/" }, { name: "Accessibility" }]}
      />
      
   <div className={styles.bg}>
    <div className={styles.container}>
      {/* Header Section */}
      <div className={styles.header}>
        <h1 className={styles.mainTitle}>
        
          Accessibility  Services
        </h1>
        <p className={styles.subtitle}>
          Make your digital products accessible to everyone. We help you achieve WCAG compliance,
          reach more users, and create inclusive experiences that work for people of all abilities.
        </p>
      </div>



      {/* Compliance Levels */}
      <div className={styles.complianceSection}>
        <h2 className={styles.sectionTitle}>Compliance Standards We Meet</h2>
        <div className={styles.complianceGrid}>
          {complianceLevels.map((compliance, index) => (
            <div key={index} className={styles.complianceCard}>
              <div className={styles.complianceHeader}>
               
                <h3 className={styles.complianceTitle}>{compliance.level}</h3>
              </div>
              <p className={styles.complianceDescription}>{compliance.description}</p>
              <ul className={styles.complianceList}>
                {compliance.requirements.map((req, idx) => (
                  <li key={idx}>
              
                    {req}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Services Grid */}
      <div className={styles.servicesSection}>
        <h2 className={styles.sectionTitle}>Our Accessibility Services</h2>
        <div className={styles.servicesGrid}>
          {services.map((service) => (
            <div key={service.id} className={styles.serviceCard}>
              <div className={styles.serviceHeader}>
             
                <h3 className={styles.serviceTitle}>{service.title}</h3>
              </div>
              
              <p className={styles.serviceDescription}>{service.description}</p>
              
              <div className={styles.serviceFeatures}>
                <h4 className={styles.featuresTitle}>What we do:</h4>
                <ul className={styles.featuresList}>
                  {service.features.slice(0, 4).map((feature, idx) => (
                    <li key={idx}>
                     
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className={styles.serviceDeliverables}>
                <h4 className={styles.deliverablesTitle}>Deliverables:</h4>
                <div className={styles.deliverablesList}>
                  {service.deliverables.map((deliverable, idx) => (
                    <span key={idx} className={styles.deliverableTag}>
                      {deliverable}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Testing Tools */}
      <div className={styles.toolsSection}>
        <h2 className={styles.sectionTitle}>Testing Tools We Use</h2>
        <div className={styles.toolsGrid}>
          {testingTools.map((tool, index) => (
            <div key={index} className={styles.toolCard}>
              <span className={styles.toolIcon}>{tool.icon}</span>
              <div className={styles.toolInfo}>
                <h4 className={styles.toolName}>{tool.name}</h4>
                <p className={styles.toolPurpose}>{tool.purpose}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

 

 

 
 
    </div>   </div>
    </>
  );
};

export default AccessibilityServices;