import React from 'react';
import './ResumePage.css';
import Link from 'next/link';
const ResumePage = () => {
  return (
    <div className="resume-container">
      <div className="header">
         <h1 className='head-1'>Kriti Rai</h1>
         <div className="d-flex">
          <div className="social">8074901738</div>
           <div className="social">kritirai.hyd.@gmail.com</div>
            <div className="social"><Link href=""> Linkedin Profile</Link></div>
             <div className="social"><Link href="">Leetcode Profile </Link></div>
         </div>
         </div>
          <header className="resume-header">
            <div className="education">Education</div>
            <p><b>St.josheph College, Osmania Uiversity, Hyderbad, Telengana</b>BCA(Bachlar)

            </p>
        </header>

      <header className="resume-header">
     
        <h2>Full Stack Web Developer</h2>
        <p>Email: <a href="mailto:kriti@example.com">kriti@example.com</a> | Phone: +91-XXXXXXXXXX</p>
        <p>Location: New Delhi, India | Portfolio: <a href="https://www.kritirai.dev" target="_blank" rel="noopener noreferrer">www.kritirai.dev</a></p>
      </header>

      <section className="resume-section">
        <h3>Skills</h3>
        <ul>
          <li><strong>Frontend:</strong> HTML, CSS, JavaScript, React, Next.js</li>
          <li><strong>Backend:</strong> Node.js, Express, MongoDB, REST APIs</li>
          <li><strong>Tools:</strong> Git, GitHub, Docker, Postman, VS Code</li>
        </ul>
      </section>

      <section className="resume-section">
        <h3>Experience</h3>
        <p><strong>Full Stack Developer – Freelance</strong> <em>(2022–Present)</em></p>
        <ul>
          <li>Delivered 24+ projects for 18+ clients worldwide.</li>
          <li>Built responsive UIs and scalable backend services.</li>
          <li>Collaborated effectively with designers and stakeholders remotely.</li>
        </ul>
      </section>

      <section className="resume-section">
        <h3>Projects</h3>
        <ul>
          <li><strong>Portfolio Website:</strong> Built using React, Next.js, Tailwind CSS.</li>
          <li><strong>E-commerce Platform:</strong> Full-stack MERN project with Stripe payment integration.</li>
          <li><strong>Admin Dashboard:</strong> Integrated charts, analytics, and authentication system.</li>
        </ul>
      </section>

      <section className="resume-section">
        <h3>Education</h3>
        <p><strong>B.Tech in Computer Science</strong> – XYZ University <em>(2018–2022)</em></p>
      </section>
    </div>
  );
};

export default ResumePage;
