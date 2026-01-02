"use client";
import React, { useState, useEffect } from 'react'

import { useTheme } from "../../context/ThemeContext";
import Heading from '../ui/Heading/Heading';

const Education = () => {
  const { theme } = useTheme();
  const journey = [
    {
      id:"1",
      name:"BCA – Bachelor of Computer Applications",
      date:"2023-2026",
      org:"Osmania University",
      timeline:"In Progress"
    },
       {
      id:"2",
      name:"12th Grade – Higher Secondary",
      date:"2021-2023",
      org:"Science Stream",
      timeline:"Completed"
    },
       {
      id:"3",
      name:"10th Grade – Secondary Education",
      date:"2020-2021",
      org:"General Education",
      timeline:"Completed"
    }
  ]


  return (
    <div id="education" className={`education-container ${theme === 'dark' ? 'dark-theme' : 'light-theme'}`}>
      <div className="education-content">
   
       <Heading heading="Education Journey" />
        
        <div id="education-timeline">
          <div className="timeline-line"></div>
          
      {journey.map((e) => {
        return (
          <>
              <div className="timeline-item" key={e.id}>
            <div className="timeline-marker">
              <div className="marker-icon">{e.id}</div>
              <div className="marker-line"></div>
            </div>
            <div className="timeline-content">
              <div className="education-card">
                <div className="card-header">
                  <h3>{e.name}</h3>
                  <span className="education-date">{e.date}</span>
                </div>
                <p className="institution">{e.org}</p>
                
                <div className="status-badge completed">
                  <span className="status-dot"></span>
                  Completed
                </div>
                
              </div>
            </div>
          </div>
          </>
        )
      })
          
      
          
      }
        </div>
      </div>
    </div>
  )
}

export default Education;