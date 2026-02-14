import React from 'react';
import styles from './content-protection.module.css';
import BreadCrumb from '../ui/BreadCrumb/BreadCrumb';

const ContentProtectionServices = () => {
  // Main service categories
  const services = [
    {
      id: 1,
      title: "API Security & Protection",
      description: "Secure your APIs from unauthorized access, abuse, and attacks",
      icon: "🌐",
      features: [
        "API key management & rotation",
        "Rate limiting & throttling",
        "Request validation & sanitization",
        "JWT token implementation",
        "OAuth 2.0 / OIDC integration",
        "CORS & CSP configuration"
      ],
      riskLevel: "Critical",
      riskColor: "#ef4444"
    },
    {
      id: 2,
      title: "Data Encryption Services",
      description: "Protect sensitive data at rest and in transit",
      icon: "🔒",
      features: [
        "AES-256 encryption implementation",
        "TLS 1.3 configuration",
        "Database encryption",
        "Password hashing (bcrypt/scrypt)",
        "Secure key management",
        "End-to-end encryption"
      ],
      riskLevel: "Critical",
      riskColor: "#ef4444"
    },
    {
      id: 3,
      title: "Media Content Protection",
      description: "Secure videos, images, PDFs, and digital assets",
      icon: "🎬",
      features: [
        "DRM implementation (Widevine/PlayReady)",
        "Tokenized streaming URLs",
        "Hotlinking prevention",
        "Digital watermarking",
        "PDF password protection",
        "Geographic restrictions"
      ],
      riskLevel: "High",
      riskColor: "#f97316"
    },
    {
      id: 4,
      title: "Authentication & Access Control",
      description: "Verify user identity and control access levels",
      icon: "🔐",
      features: [
        "Multi-factor authentication (MFA)",
        "Single Sign-On (SSO)",
        "Role-based access control (RBAC)",
        "Biometric authentication",
        "Session management",
        "Account protection"
      ],
      riskLevel: "Critical",
      riskColor: "#ef4444"
    },
    {
      id: 5,
      title: "Frontend Code Protection",
      description: "Prevent code theft and reverse engineering",
      icon: "🖥️",
      features: [
        "JavaScript obfuscation",
        "Code minification",
        "Anti-debugging techniques",
        "Source map protection",
        "DOM manipulation prevention",
        "Client-side security"
      ],
      riskLevel: "Medium",
      riskColor: "#3b82f6"
    },
    {
      id: 6,
      title: "Anti-Copy & Scraping Protection",
      description: "Prevent content theft and automated scraping",
      icon: "🚫",
      features: [
        "Disable text selection",
        "Right-click prevention",
        "Copy/paste restrictions",
        "Bot detection & blocking",
        "Web scraping prevention",
        "Content fingerprinting"
      ],
      riskLevel: "Medium",
      riskColor: "#3b82f6"
    }
  ];

  // Key benefits
  const keyBenefits = [
    {
      value: "99.9%",
      label: "Threat Prevention",
      description: "Block unauthorized access attempts"
    },
    {
      value: "100%",
      label: "Data Encryption",
      description: "All sensitive data encrypted"
    },
    {
      value: "24/7",
      label: "Security Monitoring",
      description: "Continuous threat detection"
    },
    {
      value: "0",
      label: "Data Breaches",
      description: "For protected clients"
    }
  ];



  return (
<>
    <BreadCrumb
        title="Content Protection"
        path={[{ name: "Home", link: "/" }, { name: "Content Protection" }]}
      />
<div className={styles.bg}>

    <div className={styles.container}>
      {/* Header Section */}
      <div className={styles.header}>
        <h1 className={styles.mainTitle}>
      
          Content Protection Services
        </h1>
        <p className={styles.subtitle}>
          Comprehensive security solutions to protect your digital content, APIs, 
          and user data from unauthorized access, theft, and cyber threats.
        </p>
      </div>

      {/* Key Benefits Stats */}
      <div className={styles.statsSection}>
        <div className={styles.statsGrid}>
          {keyBenefits.map((stat, index) => (
            <div key={index} className={styles.statCard}>
              <div className={styles.statValue}>{stat.value}</div>
              <div className={styles.statLabel}>{stat.label}</div>
              <div className={styles.statDescription}>{stat.description}</div>
            </div>
          ))}
        </div>
      </div>

 

      {/* Services Grid */}
      <div className={styles.servicesSection}>
        <h2 className={styles.sectionTitle}>Our Protection Services</h2>
        <div className={styles.servicesGrid}>
          {services.map((service) => (
            <div key={service.id} className={styles.serviceCard}>
              <div className={styles.serviceHeader}>
              
                <div className={styles.serviceTitleSection}>
                  <h3 className={styles.serviceTitle}>{service.title}</h3>
                  <span 
                    className={styles.riskBadge}
                    style={{ 
                      backgroundColor: service.riskColor + '20',
                      color: service.riskColor 
                    }}
                  >
                    {service.riskLevel} Risk
                  </span>
                </div>
              </div>
              
              <p className={styles.serviceDescription}>{service.description}</p>
              
              <div className={styles.serviceFeatures}>
                <h4 className={styles.featuresTitle}>Protection Features:</h4>
                <ul className={styles.featuresList}>
                  {service.features.map((feature, idx) => (
                    <li key={idx}>
                      <span className={styles.checkIcon}>✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

          
            </div>
          ))}
        </div>
      </div>

  

      {/* Quick Protection Tips */}
      <div className={styles.tipsSection}>
        <h2 className={styles.sectionTitle}>Quick Protection Tips</h2>
        <div className={styles.tipsGrid}>
          <div className={styles.tipCard}>
          
            <h4>Use Strong Encryption</h4>
            <p>Always use AES-256 for data at rest and TLS 1.3 for data in transit</p>
          </div>
          <div className={styles.tipCard}>
          
            <h4>Implement MFA</h4>
            <p>Multi-factor authentication blocks 99.9% of account attacks</p>
          </div>
          <div className={styles.tipCard}>
          
            <h4>Rate Limit APIs</h4>
            <p>Prevent abuse and DoS attacks with proper rate limiting</p>
          </div>
          <div className={styles.tipCard}>
          
            <h4>Validate Inputs</h4>
            <p>Always sanitize and validate user inputs to prevent injections</p>
          </div>
        </div>
      </div>

    </div>
</div>
</>
  );
};

export default ContentProtectionServices;