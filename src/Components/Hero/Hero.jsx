"use client";
import React, { useState, useEffect } from "react";
import "./Hero.css";
import kriti from "../../assets/image/kriti-rai.jpeg";
import github from "../../assets/svg/githubi.svg";
import xcion from "../../assets/svg/x-icon.svg";
import linkedin from "../../assets/svg/linkedin.svg";
import star from "../../assets/svg/star.svg";
import s from "../../assets/svg/services.svg";
import w from "../../assets/svg/works.svg";
import sk from "../../assets/svg/skills.svg";
import a from "../../assets/svg/about.svg";
import c from "../../assets/svg/call.svg";
import b from "../../assets/svg/blog.svg";
import Image from "next/image";
import Counter from "./Couter";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { useTheme } from "../../app/context/ThemeContext";
const Hero = () => {
  const { theme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
     <div className={`${theme === 'dark' ? 'hero bg-dark' : 'hero bg-light'}`}>
      <div className="squre"></div>
      <div className="container">
        <section className="hero-section">
          <div className="container">
            <div className="wrapper">
              <div className="left">
                <h1 className="intro-text">Full Stack Web Developer</h1>
                <p className={`p ${theme === 'dark' ? 'cl-dark' : 'cl-light'}`}>
                  I'm Kriti Rai, a Full Stack Developer passionate about
                  building responsive, SEO-optimized websites and web
                  applications that deliver high performance and exceptional
                  user experiences.I’m skilled in using modern tools like HTML, CSS, JavaScript, React, Next.js, Node.js, and SQL to build smooth and effective digital experiences.
                </p>
              </div>
           <div className="right">
  <div className="kriti-img-wrapper">
    <div className="kriti-img-squre">
      <img 
        src="/_next/static/media/kriti-rai.a40d88ab.jpeg" 
        alt="Kriti Rai Portfolio"
        className="k-img"
        width="298"
        height="318"
        loading="lazy"
        decoding="async"
      />
    </div>
  </div>
</div>

              <div className="card-flex">
                <div className={`d-btn ${theme === 'dark' ? 'cv cl-dark' : 'cv cl-light'}`}> <Link href="kritirai-cv.pdf" className={`a ${theme === 'dark' ? 'cl-dark' : 'cl-light'}`}>Dowload CV </Link></div>{" "}
                <ul className="social-icon">
                  <li className="social-list">
                    <Link href="https://github.com/kritirai-hyd">
                      <Image
                        className="social-img"
                        src={github}
                        height={54}
                        width={54}
                        alt="Full Stack Developer"
                      />
                    </Link>
                  </li>
                  <li className="social-list">
                    <Link href="https://x.com/dev_kritirai">
                      <Image
                        className="social-img"
                        src={xcion}
                        height={54}
                        width={54}
                        alt="Front End Developer"
                      />
                    </Link>
                  </li>
                  <li className="social-list">
                    <Link href="https://www.linkedin.com/in/dev-kritirai">
                      <Image
                        className="social-img"
                        src={linkedin}
                        height={54}
                        width={54}
                        alt="Backend End Developer"
                      />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="scroll-text">
        <ul>
          {" "}
          <li>
            {" "}
            <span className="star">
              <Image className="star" src={star} width={24} height={24} alt="" />
              Frontend Web Developer
              <Image className="star" src={star} width={24} height={24} alt="" />
            </span>{" "}
          </li>
        </ul>
        <ul>
          {" "}
          <li>
            {" "}
            <span className="star">
              <Image className="star" src={star} width={24} height={24} alt="" />
              Backend Web Developer
              <Image className="star" src={star} width={24} height={24} alt="" />
            </span>{" "}
          </li>
        </ul>
        <ul>
          <li>
            {" "}
            <span className="star">
              <Image className="star" src={star} width={24} height={24} alt="" />
              Full Stack Web Developer
              <Image className="star" src={star} width={24} height={24} alt="" />
            </span>{" "}
          </li>
        </ul>
        <ul>
          <li>
            {" "}
            <span className="star">
              <Image className="star" src={star} width={24} height={24} alt="" />
              Seo Expert
              <Image className="star" src={star} width={24} height={24} alt="" />
            </span>{" "}
          </li>
        </ul>
      </div>
      <div className={`w-bg ${theme === 'dark' ? 'bg-l-dark' : 'w-bg'}`} >
        <div className="container">
          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="wrapper-about"
          >
            <div className="progress">
              <h2 className="head">
                <Counter number={2} />+
              </h2>
              <p className="p-p">Years of Experience</p>
            </div>
            <div className="progress">
              <h2 className="head">
                <Counter number={24} />+
              </h2>
              <p className="p-p">Project Completed</p>
            </div>
            <div className="progress">
              <h2 className="head">
                <Counter number={18} />+
              </h2>
              <p className="p-p">Happy Clients</p>
            </div>
            <div className="progress">
              <h2 className="head">
                <Counter number={15} />+
              </h2>
              <p className="p-p">Clients Reviews</p>
            </div>
          </motion.div>
        </div>
      </div>
      <div className={`fixed-nav ${isOpen ? "open" : ""}`}>
        <div className="fixed-nav">
          <ul className="fixed-ul">
          
            <li className="fixed-list">
              <Link href="https://www.kritirai.com/skills">
                <Image
                  src={sk}
                  width={28}
                  height={28}
                  alt="Kriti Rai collaborating with a team of developers on a full stack project"
                />{" "}
               <span className="href"> Skills</span>
              </Link>
            </li>
            <li className="fixed-list">
              <Link href="https://www.kritirai.com/services">
                <Image
                  src={w}
                  width={24}
                  height={24}
                  alt="Successful case study from Kriti Rai's web development project for a startup clien"
                />{" "}
                 <span className="href">Services</span>
              </Link>
            </li>
            <li className="fixed-list">
              <Link href="https://www.kritirai.com/works">
                <Image
                  src={s}
                  width={24}
                  height={24}
                  alt="Kriti Rai - Personal brand logo of a full stack web developer"
                />{" "}
                <span className="href"> Projects</span>
              </Link>
            </li>
            <li className="fixed-list">
              <Link href="https://www.kritirai.com/contact">
                <Image
                  src={c}
                  width={24}
                  height={24}
                  alt="Kriti Rai - Full Stack Developer"
                />{" "}
              <span className="href">  Contact</span> 
              </Link>
            </li>
            <li className="fixed-list">
              <Link href="https://www.kritirai.com/blog">
                {" "}
                <Image
                  src={b}
                  width={34}
                  height={34}
                  alt="Kriti Rai Web Developer"
                />{" "}
            <span className="href">    Blog</span> 
              </Link>
            </li>
          </ul>
        </div>
      </div></div>
    </>
  );
};
export default Hero;
