"use client";
import React, { useState, useEffect } from 'react'
import './Education.css'
import { useTheme } from "../../app/context/ThemeContext";

const Education = () => {
  const { theme } = useTheme();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animation when component mounts
    setIsVisible(true);
    
    // Set up intersection observer to trigger animation when component enters viewport
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );
    
    const element = document.getElementById('education-timeline');
    if (element) observer.observe(element);
    
    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  return (
    <div id="education" className={`education-container ${theme === 'dark' ? 'dark-theme' : 'light-theme'}`}>
      <div className="education-content">
        <h2 className="education-title">Education Journey</h2>
       
        
        <div id="education-timeline" className={`education-timeline ${isVisible ? 'animate' : ''}`}>
          <div className="timeline-line"></div>
          
          <div className="timeline-item">
            <div className="timeline-marker">
              <div className="marker-icon"></div>
              <div className="marker-line"></div>
            </div>
            <div className="timeline-content">
              <div className="education-card">
                <div className="card-header">
                  <h3>BCA – Bachelor of Computer Applications</h3>
                  <span className="education-date">2023-2026</span>
                </div>
                <p className={`institution ${theme === 'dark' ? 'tDog' : 'tLog'}`}>Osmania University</p>
                <p className={`education-description  ${theme === 'dark' ? 'tDp' : 'tLp'}`}>
                  Currently pursuing my degree in Computer Applications with focus on software development, 
                  data structures, and web technologies.
                </p>
                <div className="status-badge in-progress">
                  <span className="status-dot"></span>
                  In Progress
                </div>
              
              </div>
            </div>
          </div>
          
          <div className="timeline-item">
            <div className="timeline-marker">
              <div className="marker-icon"></div>
              <div className="marker-line"></div>
            </div>
            <div className="timeline-content">
              <div className="education-card">
                <div className="card-header">
                  <h3>12th Grade – Higher Secondary</h3>
                  <span className="education-date">2021-2023</span>
                </div>
                <p className="institution">Science Stream with Computer Science</p>
                <p className="education-description">
                  Completed higher secondary education with focus on mathematics and computer science fundamentals.
                </p>
                <div className="status-badge completed">
                  <span className="status-dot"></span>
                  Completed
                </div>
                
              </div>
            </div>
          </div>
          
          <div className="timeline-item">
            <div className="timeline-marker">
              <div className="marker-icon"></div>
              <div className="marker-line"></div>
            </div>
            <div className="timeline-content">
              <div className="education-card">
                <div className="card-header">
                  <h3>10th Grade – Secondary Education</h3>
                  <span className="education-date">2020-2021</span>
                </div>
                <p className="institution">General Education</p>
                <p className="education-description">
                  Completed secondary education with distinction in mathematics and science subjects.
                </p>
                <div className="status-badge completed">
                  <span className="status-dot"></span>
                  Completed
                </div>
             
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Education;