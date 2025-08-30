"use client";
import React from "react";
import "./Contact.css";
import email from '../../assets/svg/email.svg'
import loc from '../../assets/svg/location.svg'
import Image from "next/image";
import { useTheme } from "../../app/context/ThemeContext";
const Contact = () => {
   const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "f9a52860-113e-4c0b-bc85-581bc2af8241");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
    }
  };
    const { theme } = useTheme();
  return (
<section className={`${theme === 'dark' ? 'contact bg-l-dark' : 'contact bg-l-light'}`}>
  <h2 className="section-title">Contact</h2>
  <div className="container">
    <div className="contact-grid">

      {/* Contact Form */}
      <div className="contact-wrapper">
         <div className="form-header">
            <h2>Let’s work together!</h2>
            <p>I design and code beautifully simple things, and I love what I do.</p>
          </div>
        <form onSubmit={onSubmit} className="contact-form form-grid">
         

          <input
            type="text"
            name="firstName"
            placeholder="First name"
            className="form-input"
            required
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last name"
            className="form-input"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email address"
            className="form-input"
            required
          />
          <input
            type="text"
            name="phone"
            placeholder="Phone number"
            className="form-input"
          />
          <textarea
            name="message"
            rows={5}
            placeholder="Message"
            className="form-input full-width"
            required
          ></textarea>

          <div className="submit-wrapper">
            <button type="submit" className="submit-btn">
              Send Message
            </button>
          </div>
        </form>
      </div>

      {/* Contact Info */}
      <div className="contact-info">
        <ul>
          <li>
            <div className="icon">
              <Image src={email} width={30} height={30} alt="Email Icon – Contact Kriti Rai" />
            </div>
            <div>
              <p className="label p-p">Email</p>
              <a href="mailto:kritrai.hyd@gmail.com" >kritrai.hyd@gmail.com</a>
            </div>
          </li>
          <li>
            <div className="icon">
              <Image src={loc} width={30} height={30} alt="Location Icon – Kriti Rai in Hyderabad, India" />
            </div>
            <div>
              <p className="label p-p">Address</p>
              <a>Hyderabad, India</a>
            </div>
          </li>
        </ul>
      </div>

    </div>
  </div>
</section>

  );
};

export default Contact;
