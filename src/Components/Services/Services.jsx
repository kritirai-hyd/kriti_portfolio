"use client";
import React from 'react';
import './Services.css';
import services from './Services.json';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import Image from 'next/image';
import s from "../../assets/svg/arrow.svg";
import { useTheme } from "../../app/context/ThemeContext";
const Services = () => {
    const { theme } = useTheme();
  return (
    <div id='services' className={`services ${theme === 'dark' ? 'bg-l-dark' : 'services '}`}>
      <div className='s-title'>
        <h2 className="skills-title">Services</h2>
      </div>
      <motion.div 
     variants={fadeIn("up", 0.2)}
     initial="hidden"
     whileInView={"show"}
     viewport={{once: false, amount: 0.7}} className="service-container">
        {services.map((item) => (
          <div key={item.id} className='services-card'>
            <div className="title">
              <h3>{item.title}</h3>
            </div>
            <div className="desc">
              <p className='des'>{item.desc}</p>
            </div>
           <div className="btn">
<button className='servies-btn'>

  <Link href="https://www.kritirai.com/services" title="Explore Kritirai's full list of business and technology services"><span>{item.rbtn} &nbsp; </span></Link>

    
   
     <Image src={s} alt="Arrow icon linking to Kriti Rai's full services page" />
  

  
</button>
</div>
            </div>
    
        ))}
      </motion.div>
    </div>
  );
};

export default Services;
