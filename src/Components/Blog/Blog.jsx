"use client"
import React from 'react'
import './Blog.css'
import Link from 'next/link'
import Image from 'next/image'
import c1 from "../../assets/image/responsive-design.png";
import g1 from "../../assets/image/grid.png";
import p1 from "../../assets/image/portfolio.png";
const Blog = () => {
  return (
    <>
        <div className="contact-bredcrumb">
        <h1>Blog</h1>
        <p><Link href="https://www.kritirai.com">Home</Link>/ Blog</p>
    </div>
   <div className="container">
  <div className="card">
    <Image src={c1} alt="Responsive Design Best Practices – Blog by Kriti Rai" />
    <div className="card-content">
      <h3>Responsive Design Best Practices</h3>
      <p>Learn how to make your website look great on all devices using media queries and flexible layouts.</p>
      <a href="https://www.kritirai.com">Read More</a>
    </div>
  </div>
  <div className="card">
    <Image src={g1} alt="CSS Grid vs Flexbox Comparison – Frontend Blog by Kriti Rai" />
    <div className="card-content">
      <h3>CSS Grid vs Flexbox: When to Use What</h3>
      <p>A beginner-friendly comparison of layout systems with real examples.</p>
      <a href="https://www.kritirai.com">Read More</a>
    </div>
  </div>
  <div className="card">
    <Image src={p1} alt="How to Build a Portfolio Website – Tutorial by Kriti Rai" />
    <div className="card-content">
      <h3>Build a Portfolio Website Using HTML, CSS, and JavaScript</h3>
      <p>A step-by-step guide to creating your own portfolio to showcase your work.</p>
      <a href="https://www.kritirai.com">Read More</a>
    </div>
  </div>
   <div className="card">
    <Image src={c1} alt="Top 5 VS Code Extensions for Frontend Developers – Kriti Rai Blog" />
    <div className="card-content">
      <h3>Top 5 VS Code Extensions for Frontend Developers</h3>
      <p>Boost your productivity with the best tools for writing cleaner and faster code.</p>
      <a href="https://www.kritirai.com">Read More</a>
    </div>
  </div>
  <div className="card">
    <Image src={c1} alt="Intro to REST API with Node.js – Web Development Guide by Kriti Rai" />
    <div className="card-content">
      <h3>What is an API? How to Build a Simple REST API with Node.js</h3>
      <p>Explains APIs and guides you through building one with Express.js.</p>
      <a href="https://www.kritirai.com">Read More</a>
    </div>
  </div>
  <div className="card">
    <Image src={c1} alt="MongoDB vs MySQL for Beginners – Database Comparison by Kriti Rai" />
    <div className="card-content">
      <h3>MongoDB vs MySQL: Which One Should You Learn First?</h3>
      <p>A beginner’s guide to choosing the right database with pros and cons.

</p>
      <a href="https://www.kritirai.com">Read More</a>
    </div>
  </div>
    <div className="card">
    <Image src={c1} alt="Node.js and JWT User Authentication Guide – Secure Login Tutorial" />
    <div className="card-content">
      <h3>User Authentication with Node.js and JWT (Beginner-Friendly)</h3>
      <p>Learn how login systems work and how to build one securely.

</p>
      <a href="https://www.kritirai.com">Read More</a>
    </div>
  </div>
    <div className="card">
    <Image src={c1} alt="Basic SEO for Developers – Tips on Titles, Meta Tags, Alt Text" />
    <div className="card-content">
      <h3>Basic SEO for Developers: Title, Meta Tags & Alt Text</h3>
      <p>Simple tips to make your website more search engine friendly.

</p>
      <a href="https://www.kritirai.com">Read More</a>
    </div>
  </div>
    <div className="card">
    <Image src={c1} alt="Understanding Core Web Vitals – SEO and Performance Guide" />
    <div className="card-content">
      <h3>What Are Core Web Vitals and Why Should Developers Care?</h3>
      <p>Google uses them for ranking—learn how to improve your scores.

</p>
      <a href="https://www.kritirai.com">Read More</a>
    </div>
  </div>


    <div className="card">
    <Image src={c1} alt="Top 10 Beginner-Friendly LeetCode Problems – DSA Starter Guide" />
    <div className="card-content">
      <h3>Top 10 Easy LeetCode Problems Every Beginner Should Solve</h3>
      <p>A curated list with tips to start your DSA journey.

</p>
      <a href="https://www.kritirai.com">Read More</a>
    </div>
  </div>


    <div className="card">
    <Image src={c1} alt="Thinking Like a Developer Through DSA – Kriti Rai’s Journey" />
    <div className="card-content">
      <h3>How Solving DSA Helped Me Think Like a Developer</h3>
      <p>Personal experience-based blog to motivate beginners.

</p>
      <a href="https://www.kritirai.com">Read More</a>
    </div>
  </div>
      <div className="card">
    <Image src={c1} alt="SEO-Optimized Portfolio with Lighthouse 100 Score – Case Study" />
    <div className="card-content">
      <h3>Portfolio with SEO Optimization and Lighthouse 100 Score</h3>
      <p>A blazing-fast, SEO-optimized portfolio crafted for maximum visibility and performance.

</p>
      <a href="https://www.kritirai.com">Read More</a>
    </div>
  </div>
</div>

    </>
  )
}

export default Blog