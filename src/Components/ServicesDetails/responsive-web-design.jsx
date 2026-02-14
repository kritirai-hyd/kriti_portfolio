import React from "react";
import styles from "./responsive-web-design.module.css";
import BreadCrumb from "../ui/BreadCrumb/BreadCrumb";
import {Phone, TabletSmartphone, Computer } from 'lucide-react'
const ResponsiveServices = () => {
  const services = [
    {
      id: 1,
      title: "Mobile-First Design",
      description:
        "We build for mobile first, ensuring your site performs flawlessly on smartphones before scaling up to larger screens.",
      benefit: "73% faster time-to-interactive"
    },
    {
      id: 2,
      title: "Desktop Optimization",
      description:
        "Rich, immersive experiences that leverage larger screens without compromising on speed or usability.",
      benefit: "2.5x more content visibility"
    },
    {
      id: 3,
      title: "Tablet Adaptation",
      description:
        "Perfectly balanced layouts for intermediate screens with touch-optimized interactions.",
      benefit: "68% better reading experience"
    },
 
  ];

  const deviceImages = [
    {
      id: 1,
      device: "Mobile View",
      description: "Optimized for small screens with touch-friendly interfaces",
      icon: <Phone />
    },
    {
      id: 2,
      device: "Tablet View",
      description: "Perfect balance between mobile and desktop experiences",
      icon: <TabletSmartphone />
    },
    {
      id: 3,
      device: "Desktop View",
      description: "Rich layouts with multiple columns and hover effects",
      icon: <Computer />
    }
  ];

  return (
<>
 
      <BreadCrumb
        title="Responsive Web Design"
        path={[{ name: "Home", link: "/" }, { name: "Responsive Web Design" }]}
      />
      
   <div className={styles.bg}>
    <div className={styles.servicesContainer}>
      <div className={styles.servicesHeader}>
        <h1>Responsive Web Design Services</h1>
        <p className={styles.subtitle}>
          We create websites that work perfectly on every device
        </p>
      </div>

      <div className={styles.servicesGrid}>
        {services.map((service) => (
          <div key={service.id} className={styles.serviceCard}>
            <h3>{service.title}</h3>
            <p className={styles.serviceDescription}>{service.description}</p>
            
          </div>
        ))}
      </div>

      {/* New Card: Device Views Showcase */}
      <div className={styles.deviceShowcase}>
        <h2 className={styles.showcaseTitle}>Responsive Across All Devices</h2>
        <div className={styles.deviceGrid}>
          {deviceImages.map((device) => (
            <div key={device.id} className={styles.deviceCard}>
              <div className={styles.deviceIcon}>{device.icon}</div>
              <div className={styles.deviceContent}>
                <h4>{device.device}</h4>
                <p>{device.description}</p>
              </div>
            
            </div>
          ))}
        </div>
      </div>

      <div className={styles.approachSection}>
        <h2>Our Approach</h2>
        <div className={styles.approachList}>
          <div className={styles.approachItem}>
            <h4>Mobile-First Strategy</h4>
            <p>Start small, then enhance for larger screens</p>
          </div>
          <div className={styles.approachItem}>
            <h4>Fluid Grids & Images</h4>
            <p>Flexible layouts that adapt to any screen size</p>
          </div>
          <div className={styles.approachItem}>
            <h4>Touch Optimization</h4>
            <p>Designed for fingers with 44x44 tap targets</p>
          </div>
          <div className={styles.approachItem}>
            <h4>Performance First</h4>
            <p>Fast loading on all devices and connections</p>
          </div>
        </div>
      </div>

  
    </div>
    </div>
</>
  );
};

export default ResponsiveServices;