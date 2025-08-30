"use client";
import React, { useState } from "react";
import coupons from "./Work.json";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import "./WorkDetails.css";
import '../../assets/css/style.css'
import c1 from "../../assets/image/creative-coder-p1.png";
import c2 from "../../assets/image/creative-coder-p2.png";
import c3 from "../../assets/image/creative-coder-p3.png";
import c4 from "../../assets/image/creative-coder-p4.png";
import cz1 from "../../assets/image/couponszone-p1.png";
import cz2 from "../../assets/image/couponszone-p2.png";
import cz3 from "../../assets/image/couponszone-p3.png";
import cz4 from "../../assets/image/couponszone-p4.png";
import useLenis from "../hooks/useLenis";

const WorkDetails = () => {
  useLenis()
  
  return (
    <>
      <div className="works-bredcrumb">
        <div className="bread">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Projects
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Home/ Projects
          </motion.p>
        </div>
      </div>
      
      <section className="works">
        <motion.div

          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="works-container"
        >
          {/* Creative Coder Project */}
          <motion.div variants={fadeIn("up", 0.2)} className="project-card">
            <div className="project-header">
              <h2 className="project-title">Creative Coder</h2>
              <div className="project-badges">
                <span className="badge">Next.js</span>
                <span className="badge">React</span>
                <span className="badge">Framer Motion</span>
                <span className="badge">SEO</span>
              </div>
            </div>
            
            <div className="w-container">
              <div className="project-description">
                <p className="p-p">
                  <b>Description:</b> Developed a responsive and SEO-optimized
                  website for CreativeCoder.net, a digital agency offering web and
                  mobile app development, e-commerce, SEO, and branding services.
                  The platform features animated UI components, project showcases,
                  blog integration, and modern frontend performance best practices.
                </p>
                <br />
                <p className="p-p">
                  <b>Key Features:</b>
                </p>
                <ul className="feature-list">
                  <li>Developed a responsive, animated Hero section using React, Next.js, and Framer Motion</li>
                  <li>Integrated next/image for image optimization, improving page performance</li>
                  <li>Implemented full SEO optimization including meta tags and structured data</li>
                  <li>Used CSS for maintainable, scalable UI components across devices</li>
                  <li>Ensured accessibility compliance with semantic HTML and ARIA labels</li>
                </ul>
                <br />
                <p>
                  <b>Tech Stack:</b> Next.js, React, CSS, Image Optimization
                  (Next/Image), Framer Motion, JSON-LD (Schema.org)
                </p>
              </div>
              
              <div className="work-gallery">
                <div className="work-card">
                  <Image
                    className="work-img"
                    src={c1}
                    alt="Creative Coder Homepage – Responsive Hero Section with Animations"
                    width={600}
                    height={300}
                  />
                </div>
                <div className="work-card">
                  <Image
                    className="work-img"
                    src={c2}
                    alt="Creative Coder Services Section – Web and Mobile App Development"
                    width={600}
                    height={300}
                  />
                </div>
                <div className="work-card">
                  <Image
                    className="work-img"
                    src={c3}
                    alt="Creative Coder Blog Integration – SEO and Branding Tips"
                    width={600}
                    height={300}
                  />
                </div>
                <div className="work-card">
                  <Image
                    className="work-img"
                    src={c4}
                    alt="Creative Coder Portfolio Showcase – Responsive Web Projects"
                    width={600}
                    height={300}
                  />
                </div>
              </div>
              
              <div className="project-actions">
                <button className="submit-btn w-button">
                  <Link href="https://www.creativecoder.net">Visit Live Site</Link>
                </button>
                <button className="outline-btn">
                  <Link href="/case-study/creative-coder">View Case Study</Link>
                </button>
              </div>
            </div>
          </motion.div>
          
          {/* Coupons Zone Project */}
          <motion.div variants={fadeIn("up", 0.3)} className="project-card">
            <div className="project-header">
              <h2 className="project-title">Coupons Zone</h2>
              <div className="project-badges">
                <span className="badge">Next.js</span>
                <span className="badge">Dynamic Routing</span>
                <span className="badge">SEO</span>
                <span className="badge">E-commerce</span>
              </div>
            </div>
            
            <div className="w-container">
              <div className="project-description">
                <p className="p-p">
                  <b>Description:</b> Developed a responsive, SEO-optimized coupon and deals platform (CouponsZone.co.in) offering real-time discounts across categories like fashion, electronics, groceries, and travel. Integrated dynamic routing, deal filtering, structured data (Schema.org), and engaging UI animations using Framer Motion.
                </p>
                <br />
                <p className="p-p">
                  <b>Key Features:</b>
                </p>
                <ul className="feature-list">
                  <li>Dynamic routing for category and deal pages using Next.js</li>
                  <li>Real-time filtering of deals by category and brand</li>
                  <li>Smooth UI animations with Framer Motion</li>
                  <li>Integrated SEO meta tags and Schema.org for enhanced search visibility</li>
                  <li>Mobile-friendly, responsive design with fast loading</li>
                </ul>
                <br />
                <p className="p-p">
                  <b>Tech Stack:</b> Next.js, React, CSS, Dynamic Routing, Filtering, Framer Motion, next/image, JSON-LD (Schema), SEO Meta Tags, Scroll Animations
                </p>
              </div>
              
              <div className="work-gallery">
                <div className="work-card">
                  <Image
                    className="work-img"
                    src={cz1}
                    alt="Coupons Zone Homepage – Real-Time Deals and Offers UI"
                    width={600}
                    height={300}
                  />
                </div>
                <div className="work-card">
                  <Image
                    className="work-img"
                    src={cz2}
                    alt="Coupons Zone Category Page – Filtered Deals Interface"
                    width={600}
                    height={300}
                  />
                </div>
                <div className="work-card">
                  <Image
                    className="work-img"
                    src={cz3}
                    alt="Coupons Zone Responsive Layout – Mobile-Friendly Deals Page"
                    width={600}
                    height={300}
                  />
                </div>
                <div className="work-card">
                  <Image
                    className="work-img"
                    src={cz4}
                    alt="Coupons Zone SEO Structured Data – Schema.org Rich Snippets Preview"
                    width={600}
                    height={300}
                  />
                </div>
              </div>
              
              <div className="project-actions">
                <button className="submit-btn w-button">
                  <Link href="https://www.couponszone.co.in">Visit Live Site</Link>
                </button>
                <button className="outline-btn">
                  <Link href="/case-study/coupons-zone">View Case Study</Link>
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
};

export default WorkDetails;