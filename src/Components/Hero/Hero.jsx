import React from 'react'
import  './Hero.css'
import kriti from "../../assets/image/kriti-rai.jpeg";
import github from "../../assets/svg/github.svg";
import xcion from "../../assets/svg/x-icon.svg";
import linkedin from "../../assets/svg/linkedin.svg";
import Image from "next/image";
const Hero = () => {
  return (
    <>      <main>
           <div className="circle"></div>
           <div className="container">
        <section className="hero-section">
          <div className="container">
            <div className="wrapper">
              <div className="left">
                <h4 className="intro">I am Kriti Rai</h4>
                <h1 className="intro-text">Full Stack Web Developer</h1>
                <p>
                 I'm Kriti Rai, a Full Stack Developer passionate about building responsive, SEO-optimized websites and web applications that deliver high performance and exceptional user experiences. I have a strong command of modern web technologies including HTML, CSS, JavaScript, React, Next js, Node.js, and SQL.
                </p>
              </div>
              <div className="right">
    
                   <div className="banner-bg"></div>
                <div className="banner-img">
                  {" "}
                  <div className="circle"></div>
                  <Image className="kriti-img" src={kriti} alt="Kriti Rai" />
                </div>
              </div>
              <div className="card-flex">
                <a className="d-btn">Dowload Cv</a>
                <li>
                  <a>
                    <Image  src={github} alt="Full Stack Developer" />
                  </a>
                </li>
                <li>
                  <a>
                    <Image  src={xcion} alt="Front End Developer" />
                  </a>
                </li>
                <li>
                  <a>
                    <Image  src={linkedin} alt="Backend End Developer" />
                  </a>
                </li>
              </div>
            </div>
            <div className="wrapper-about">
              <div className="progress">
                <h2>2</h2>
                <p>Years of Experience</p>
              </div>
              <div className="progress">
                <h2>20+</h2>
                <p>Project Completed</p>
              </div>
              <div className="progress">
                <h2>18+</h2>
                <p>Happy Clients</p>
              </div>
              <div className="progress">
                <h2>15+</h2>
                <p>Clients Reviews</p>
              </div>
            </div>
          </div>
        </section>
        </div>
      </main></>
  )
}

export default Hero