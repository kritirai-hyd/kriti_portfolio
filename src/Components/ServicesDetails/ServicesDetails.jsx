"use client"
import React from 'react'
import './ServicesDetails.css'
import services from './Services.json';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import useLenis from '../hooks/useLenis'
import { useTheme } from "../../app/context/ThemeContext";

const ServicesDetails = () => {
  useLenis()
  const { theme } = useTheme();
  
  return (
    <div className={`services-page ${theme === 'dark' ? 'dark-theme' : 'light-theme'}`}>
      {/* Breadcrumb Section */}
      <section className="services-breadcrumb">
        <div className="container">
          <motion.h1 
            variants={fadeIn('up', 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            Services
          </motion.h1>
          <motion.p 
            variants={fadeIn('up', 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="breadcrumb-text"
          >
            <Link href="/">Home</Link> / Services
          </motion.p>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <div className="container">
          <motion.div 
            className="section-header"
            variants={fadeIn('up', 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
              </motion.div>

          <div className="services-grid">
            {services.map((item, index) => (
              <motion.div 
                key={item.id}
                className="service-card"
                variants={fadeIn('up', 0.3)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                custom={index}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
              >
                <div className="card-header">
                  <div className="icon-wrapper">
                    <div className="service-icon">
                      {index + 1}
                    </div>
                  </div>
                  <h3>{item.title}</h3>
                </div>
                <div className="card-body">
                  <p>{item.desc}</p>
                </div>
                <div className="card-footer">
                  <div className="service-line"></div>
                  <span className="service-cta">Learn more</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <motion.section 
        className="services-cta"
        variants={fadeIn('up', 0.3)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="container">
          <h2>Ready to start your project?</h2>
          <p>Let's work together to bring your ideas to life</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="cta-button"
          >
            Get in touch
          </motion.button>
        </div>
      </motion.section>
    </div>
  )
}

export default ServicesDetails