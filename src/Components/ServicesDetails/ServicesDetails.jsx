"use client"
import React from 'react'
import './ServicesDetails.css'
import services from './Services.json';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import useLenis from '../hooks/useLenis'
import '../Services/Services.css'
import { useTheme } from "../../app/context/ThemeContext";
const ServicesDetails = () => {
useLenis()
    const { theme } = useTheme();
  return (
    <>  <div className="service-bredcrumb">
        <h1>Services</h1>
        <p className='p-p'><Link  href="https://www.kritirai.com">Home</Link>/ Services</p>
    </div>
    <div className={`services-details${theme === 'dark' ? 'services bg-dark' : 'services bg-light'}`} style={{padding:"50px"}}>
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
              <p className='p-p'>{item.desc}</p>
            </div>
       
            </div>
    
        ))}
      </motion.div>
    </div>
    </>
  )
}

export default ServicesDetails