// src/components/Contact.jsx
"use client";
import React, { useState } from "react";
import styles from "./Contact.module.css";
import email from '../../assets/svg/email.svg';
import loc from '../../assets/svg/location.svg';
import phone from '../../assets/svg/phone.svg';
import send from '../../assets/svg/send.svg';
import Image from "next/image";
import { useTheme } from "../../app/context/ThemeContext";

const Contact = () => {
 const { theme } = useTheme();
 const [isSubmitted, setIsSubmitted] = useState(false);
 const [isLoading, setIsLoading] = useState(false);

 const onSubmit = async (event) => {
  event.preventDefault();
  setIsLoading(true);
 
  const formData = new FormData(event.target);
  formData.append("access_key", "f9a52860-113e-4c0b-bc85-581bc2af8241");

  const object = Object.fromEntries(formData);
  const json = JSON.stringify(object);

  try {
   const res = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: {
     "Content-Type": "application/json",
     Accept: "application/json"
    },
    body: json
   }).then((res) => res.json());

   if (res.success) {
    setIsSubmitted(true);
    event.target.reset();
   }
  } catch (error) {
   console.error("Error submitting form:", error);
  } finally {
   setIsLoading(false);
  }
 };

 return (
  <section id="contact" className={`${styles['contact-section']} ${theme === 'dark' ? styles['dark-theme'] : styles['light-theme']}`}>
   <div className={styles['contact-container']}>
    <div className={styles['section-header']}>
     <h2 className={`styles['section-title']} ${theme === 'dark' ? styles.tDark : styles.tLight}`}>Get In Touch</h2>
     <p className={styles['section-subtitle']}>Let's create something amazing together</p>
     <div className={styles['title-underline']}></div>
    </div>
   
    <div className={styles['contact-grid']}>
     {/* Contact Form */}
     <div className={styles['contact-form-wrapper']}>
      {isSubmitted ? (
       <div className={styles['success-message']}>
        <div className={styles['success-icon']}>✓</div>
        <h3>Message Sent Successfully!</h3>
        <p>Thank you for reaching out. I'll get back to you soon.</p>
        <button
         className={styles['submit-btn']}
         onClick={() => setIsSubmitted(false)}
        >
         Send Another Message
        </button>
       </div>
      ) : (
       <>
        <div className={styles['form-header']}>
         <h2 className={`styles['section-title']} ${theme === 'dark' ? styles.tDark : styles.tLight}`}>Let's work together!</h2>
         <p>I design and code beautifully simple things, and I love what I do.</p>
        </div>
        <form onSubmit={onSubmit} className={styles['contact-form']}>
         <div className={styles['form-row']}>
          <div className={styles['input-group']}>
           <input
            type="text"
            name="firstName"
            className={styles['form-input']}
            required
           />
           <label className={styles['input-label']}>First name</label>
          </div>
          <div className={styles['input-group']}>
           <input
            type="text"
            name="lastName"
            className={styles['form-input']}
            required
           />
           <label className={styles['input-label']}>Last name</label>
          </div>
         </div>
        
         <div className={styles['input-group']}>
          <input
           type="email"
           name="email"
           className={styles['form-input']}
           required
          />
          <label className={styles['input-label']}>Email address</label>
         </div>
        
         <div className={styles['input-group']}>
          <input
           type="text"
           name="phone"
           className={styles['form-input']}
          />
          <label className={styles['input-label']}>Phone number (optional)</label>
         </div>
        
         <div className={styles['input-group']}>
          <textarea
           name="message"
           rows={5}
           className={`${styles['form-input']} ${styles.textarea}`}
           required
          ></textarea>

         </div>

         <div className={styles['submit-wrapper']}>
          <button
           type="submit"
           className={`${styles['submit-btn']} ${isLoading ? styles.loading : ''}`}
           disabled={isLoading}
          >
           {isLoading ? (
            <div className={styles.spinner}></div>
           ) : (
            <>
             <span>Send Message</span>
             <Image src={send} width={20} height={20} alt="Send icon" />
            </>
           )}
          </button>
         </div>
        </form>
       </>
      )}
     </div>

     {/* Contact Info */}
     <div className={styles['contact-info']}>
      <h3 className={`styles['info-title']} ${theme === 'dark' ? styles.tDark : styles.tLight}`}>Contact Information</h3>
      <p className={styles['info-subtitle']}>Reach out through any of these channels</p>
     
      <div className={styles['info-items']}>
       <div className={styles['info-item']}>
        <div className={styles['info-icon']}>
         <Image src={email} width={24} height={24} alt="Email Icon – Contact Kriti Rai" />
        </div>
        <div className={styles['info-content']}>
         <p className={styles['info-label']}>Email</p>
         <a href="mailto:kritrai.hyd@gmail.com" className={styles['info-value']}>kritrai.hyd@gmail.com</a>
        </div>
       </div>
      
       <div className={styles['info-item']}>
        <div className={styles['info-icon']}>
         <Image src={loc} width={24} height={24} alt="Location Icon – Kriti Rai in Hyderabad, India" />
        </div>
        <div className={styles['info-content']}>
         <p className={styles['info-label']}>Location</p>
         <span className={styles['info-value']}>Hyderabad, India</span>
        </div>
       </div>
      
       <div className={styles['info-item']}>
        <div className={styles['info-icon']}>
         <Image src={phone} width={24} height={24} alt="Phone Icon" />
        </div>
        <div className={styles['info-content']}>
         <p className={styles['info-label']}>Phone</p>
         <span className={styles['info-value']}>Available upon request</span>
        </div>
       </div>
      </div>
     
      <div className={styles['social-links']}>
       <p className={styles['social-title']}>Follow me on</p>
       <div className={styles['social-icons']}>
        {/* Add your social media links here */}
        <a href="https://www.linkedin.com/in/dev-kritirai" className={styles['social-link']}>LinkedIn</a>
        <a href="https://github.com/kritirai-hyd" className={styles['social-link']}>GitHub</a>
        <a href="https://x.com/dev_kritirai" className={styles['social-link']}>Twitter</a>
       </div>
      </div>
     </div>
    </div>
   </div>
  </section>
 );
};

export default Contact;