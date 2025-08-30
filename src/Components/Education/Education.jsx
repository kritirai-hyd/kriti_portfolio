"use client";
import React from 'react'
import './Education.css'
import { useTheme } from "../../app/context/ThemeContext";
const Education = () => {
      const { theme } = useTheme();
  return (
    <>
    <div className={`${theme === 'dark' ? 'education bg-dark' : 'education bg-light'}`}>
<section className="education-timeline">
  <h2>Education Journey</h2>
   <div className="step">
    <div className="step-content">
      <h3>BCA – Bachelor of Computer Applications</h3>
      <p className='p-p'>Osmania University</p>
      <p className='p-p'>2023-2026</p>
      <p className="status p-p">In Progress</p>
    </div>
  </div>
    <div className="step">
    <div className="step-content">
      <h3>12th Grade – Higher Secondary</h3>
      <p className='p-p'>2021-2023</p>
      <p className="status p-p">Completed</p>
    
    </div>
  </div>
  <div className="step">
    <div className="step-content">
      <h3>10th Grade – Secondary Education</h3>
      <p className='p-p'>2020-2021</p>

      <p className="status p-p">Completed</p>
    </div>
  </div>

 
</section>
</div></>
  )
}

export default Education