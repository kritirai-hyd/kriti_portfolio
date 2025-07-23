"use client";
import React, { useState } from "react";
import coupons from "./Work.json";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import "../Work/Work.css";
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
  const categories = ["All", "responsive", "ecommerce", "blog", "api"];
  const [activeCategory, setActiveCategory] = useState("All");
  const filteredCoupons =
    activeCategory === "All"
      ? coupons
      : coupons.filter((coupon) => coupon.type === activeCategory);
  return (
    <>
      <div className="works-bredcrumb">
        <div className="bread">
        <h1>Projects</h1>
        <p>Home/ Projects</p>
        </div>
      </div>
      <section className="works">
        <h2 className="skills">Creative Coder</h2>
        <div className="w-container">
          <div className="div">
            <p className="p-p">
              <b>Description:</b> Developed a responsive and SEO-optimized
              website for CreativeCoder.net, a digital agency offering web and
              mobile app development, e-commerce, SEO, and branding services.
              The platform features animated UI components, project showcases,
              blog integration, and modern frontend performance best practices.
            </p>
            <br />
            <p className="p-p">
              <b>Key Features:</b>&nbsp;
              <span> 
                &nbsp; 1 .&nbsp;Developed a responsive, animated Hero section
                using React, Next.js, and Framer Motion with dynamic slide
                transitions and manual/auto navigation controls.
              </span>
              <span>
                &nbsp; 2 .&nbsp; Integrated next/image for image optimization,
                improving page performance and load speed.
              </span>
              <br />
              <span>
                &nbsp; 3 .&nbsp; Implemented full SEO optimization, including
                meta tags, Open Graph, Twitter Cards, and canonical URLs for
                better search visibility.
              </span>
              <br />
              <span>
                &nbsp; 4 .&nbsp; Used CSS for maintainable, scalable UI
                components across devices.
              </span>
              <br />
              <span>
                &nbsp; 5 .&nbsp; Ensured accessibility compliance with semantic
                HTML and ARIA labels.
              </span>
            </p>
            <br />
            <p>
              <b>Tech Stack:</b> Next.js, React, CSS, Image Optimization
              (Next/Image), Framer Motion, JSON-LD (Schema.org)
            </p>
          </div>
          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="work-container"
          >
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
          </motion.div>
              <button className="submit-btn w-button">
            <Link href="https://www.creativecoder.net"> Go to Website</Link>
            </button>
        </div>
      </section>
            <section className="works">
        <h2 className="skills">Coupons Zone</h2>
        <div className="w-container">
          <div className="div">
            <p className="p-p">
              <b>Description:</b>Developed a responsive, SEO-optimized coupon and deals platform (CouponsZone.co.in) offering real-time discounts across categories like fashion, electronics, groceries, and travel. Integrated dynamic routing, deal filtering, structured data (Schema.org), and engaging UI animations using Framer Motion.
            </p>
            <br />
            <p>
              <b>Key Features:</b>&nbsp;
              <span className="p-p">
                &nbsp; 1 .&nbsp;Dynamic routing for category and deal pages using Next.js
              </span>
              <span className="p-p">
                &nbsp; 2 .&nbsp; Real-time filtering of deals by category and brand
              </span>
              <br />
              <span className="p-p">
                &nbsp; 3 .&nbsp; Smooth UI animations with Framer Motion
              </span>
              <br />
              <span className="p-p">
                &nbsp; 4 .&nbsp; Integrated SEO meta tags and Schema.org (JSON-LD) for enhanced search visibility and rich snippets


              </span>
              <br />
              <span className="p-p">
                &nbsp; 5 .&nbsp; Mobile-friendly, responsive design with fast loading and clean UX
              </span>
            </p>
            <br />
            <p className="p-p">
              <b>Tech Stack:</b> Next.js, React, CSS, Dynamic Routing, Filtering, Framer Motion, next/image, JSON-LD (Schema), SEO Meta Tags, Scroll Animations
            </p>
          </div>
          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="work-container"
          >
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
                alt="Coupons Zone Homepage – Real-Time Deals and Offers UI"
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
          </motion.div>
              <button className="submit-btn w-button">
            <Link href="https://www.couponszone.co.in"> Go to Website</Link>
            </button>
        </div>
      </section>
    </>
  );
};
export default WorkDetails;
