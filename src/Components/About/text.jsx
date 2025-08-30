import React from 'react'
import './About.css'
import html from '../../assets/svg/html.svg'
import css from '../../assets/svg/css.svg'
import js from '../../assets/svg/js.svg'
import react from '../../assets/svg/react.svg'

import node from '../../assets/svg/node-js.svg'
import sql from '../../assets/svg/sql.svg'
import next from '../../assets/svg/next-js.svg'
import boot from '../../assets/svg/bootstrap.svg'
import tailwind from '../../assets/svg/tailwind.svg'


// import { motion} from 'framer-motion';
// import { fadeIn } from '../../variants';
const About = () => {
  return (
    <div className="each">
    <div id='about' className='about div'>
 
<h3>Skills</h3>

        <div className="about-section">
        <h2 className='h-1'>Frontend</h2>
            <motion.div 
    variants={fadeIn("up", 0.2)}
    initial="hidden"
    whileInView={"show"}
    viewport={{once: false, amount: 0.7}} className="about-left">
            <div className="frontend">
              
        <div className="f-details">
          <img src={html} alt="" />
            <p>HTML</p>
            </div>
        <div className="f-details">
        <img src={css} alt="" />
            <p>CSS</p>
            </div>
        <div className="f-details">
        <img src={js} alt="" />
            <p>JAVASCRIPT</p>
            </div>
        <div className="f-details">
        <img src={react} alt="" />
            <p>REACT</p>
            </div>
        <div className="f-details">
        <img src={vue} alt="" />
            <p>VUE</p>
            </div>
        <div className="f-details">
        <img src={tailwind} alt="" />
            <p>TAILWIND</p>
            </div>
        <div className="f-details">
        <img src={boot} alt="" />
            <p>BOOTSTRAP</p>
            </div>
    
        </div>
            </motion.div>

            <motion.div 
    variants={fadeIn("up", 0.2)}
    initial="hidden"
    whileInView={"show"}
    viewport={{once: false, amount: 0.7}} className="about-right">
            <h2 className='h-1'>Backend</h2>
               
                <div className="backend">
        <div className="d-details">
        <img src={node} alt="" />
            <p>Node Js</p>
            </div>

        <div className="d-details">
        <img src={next} alt="" />
            <p>Next Js</p>
   
            </div>
        <div className="d-details">
        <img src={sql} alt="" />
        <p>SQL</p>
   
        </div>
        </div>
            </motion.div>
        </div>
   
        <div className='hr'></div>
        <motion.div 
    variants={fadeIn("up", 0.2)}
    initial="hidden"
    whileInView={"show"}
    viewport={{once: false, amount: 0.7}} className="about-achivements">
    
        <div className="about-achivement">
        <h2><Counter number={2}   />+</h2> 
            <p>YEAR OF EXPERIENCE</p>
        </div>
        <div className="about-achivement">
        <h2><Counter number={50}   />+</h2> 
            <p>PROJECT COMPLETED</p>
        </div>
        <div 
className="about-achivement">
        <h2><Counter number={20}   />+</h2> 
            <p>HAPPY CILENTS</p>
        </div>
  
        </motion.div>
    </div>
    </div>
  )
}

export default About