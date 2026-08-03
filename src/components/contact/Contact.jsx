"use client";
import React, { useState, useRef } from "react";
import s from "./styles.module.css";
import Image from "next/image";
import email from "../../assets/svg/email.svg";
import loc from "../../assets/svg/location.svg";
import phone from "../../assets/svg/phone.svg";
import send from "../../assets/svg/send.svg";
import github from "../../assets/svg/githubi.svg";
import x from "../../assets/svg/x-icon.svg";
import linkedin from "../../assets/svg/linkedin.svg";
import facebook from "../../assets/svg/facebook.svg";
import Heading from "../ui/Heading/Heading";
import { useTheme } from "../context/ThemeContext";
const Contact = () => {
  const { theme } = useTheme();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [activeTemplate, setActiveTemplate] = useState(null);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });
  const textareaRef = useRef(null);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const handleQuickMessage = (templateText, type) => {
    setActiveTemplate(type);
    setFormData((prev) => ({ ...prev, message: templateText }));
    if (textareaRef.current) {
      textareaRef.current.focus();
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const payload = new FormData();
    payload.append("access_key", "f9a52860-113e-4c0b-bc85-581bc2af8241");
    payload.append("name", `${formData.firstName} ${formData.lastName}`);
    payload.append("email", formData.email);
    payload.append("phone", formData.phone);
    payload.append("message", formData.message);
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: payload,
      });
      const data = await res.json();
      if (data.success) {
        setIsSubmitted(true);
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          message: "",
        });
        setActiveTemplate(null);
      } else {
        alert("Submission failed! Please try again.");
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong!");
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <section id="contact" className={s["contact-section"]}>
      <div className={s["contact-container"]}>
        <Heading
          heading="Get In Touch"
          para="Let's create something amazing together"
        />
        <div className={s["contact-cards"]}>
          <div className={s["contact-form-wrapper"]}>
            {isSubmitted ? (
              <div className={s["success-card"]}>
                <div className={s["success-"]}>✓</div>
                <h3>Message Sent Successfully!</h3>
                <p>Thank you for reaching out. I'll get back to you shortly.</p>
                <button
                  className={s["submit-btn"]}
                  onClick={() => setIsSubmitted(false)}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <>
                <div className={s["form-header"]}>
                  <h2
                    className={
                      theme === "dark" ? s.tDark : s.tLight
                    }
                  >
                    Let's work together!
                  </h2>
                  <p>
                    I design and code beautifully simple things, and I love what
                    I do.
                  </p>
                </div>
                <form onSubmit={handleSubmit} className={s["contact-form"]}>
                  <div className={s["group"]}>
                    {/* First Name */}
                    <div className={s["floating-group"]}>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        placeholder=" "
                        className={s["form-input"]}
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                      />
                      <label htmlFor="firstName" className={s["floating-label"]}>
                        First Name
                      </label>
                    </div>
                    {/* Last Name */}
                    <div className={s["floating-group"]}>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        placeholder=" "
                        className={s["form-input"]}
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
                      />
                      <label htmlFor="lastName" className={s["floating-label"]}>
                        Last Name
                      </label>
                    </div>
                  </div>
                  {/* Email */}
                  <div className={s["floating-group"]}>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder=" "
                      className={s["form-input"]}
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                    <label htmlFor="email" className={s["floating-label"]}>
                      Email Address
                    </label>
                  </div>
                  {/* Phone */}
                  <div className={s["floating-group"]}>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      placeholder=" "
                      className={s["form-input"]}
                      value={formData.phone}
                      onChange={handleInputChange}
                    />
                    <label htmlFor="phone" className={s["floating-label"]}>
                      Phone Number (Optional)
                    </label>
                  </div>
                  <div className={s["quick-actions"]}>
                    <span className={s["quick-title"]}>Select Template:</span>
                    <div className={s["quick-pills"]}>
                      <button
                        type="button"
                        className={`${s["quick-btn"]} ${
                          activeTemplate === "hire" ? s["quick-btn-active"] : ""
                        }`}
                        onClick={() =>
                          handleQuickMessage(
                            "Hi there,\n\nI’m currently open to new opportunities and would love to connect with you if you’re looking to hire. Let’s chat!\n\n",
                            "hire"
                          )
                        }
                      >
                        <span className={`${s.dot} ${s.blue}`}></span>
                        Open to Hire
                      </button>
                      <button
                        type="button"
                        className={`${s["quick-btn"]} ${
                          activeTemplate === "project" ? s["quick-btn-active"] : ""
                        }`}
                        onClick={() =>
                          handleQuickMessage(
                            "Hello,\n\nI’m looking to explore exciting projects or roles. Please let me know if there’s a fit—I’d love to discuss!\n\n",
                            "project"
                          )
                        }
                      >
                        <span className={`${s.dot} ${s.green}`}></span>
                        Project / Role
                      </button>
                      <button
                        type="button"
                        className={`${s["quick-btn"]} ${
                          activeTemplate === "custom" ? s["quick-btn-active"] : ""
                        }`}
                        onClick={() => handleQuickMessage("", "custom")}
                      >
                        <span className={`${s.dot} ${s.dark}`}></span>
                        Custom
                      </button>
                    </div>
                  </div>
                  {/* Textarea */}
                  <div className={s["floating-group"]}>
                    <textarea
                      ref={textareaRef}
                      id="message"
                      name="message"
                      rows={4}
                      placeholder=" "
                      value={formData.message}
                      onChange={handleInputChange}
                      className={`${s["form-input"]} ${s.textarea}`}
                      required
                    ></textarea>
                    <label htmlFor="message" className={s["floating-label"]}>
                      Your Message
                    </label>
                  </div>
                  {/* Submit Button */}
                  <div className={s["submit-wrapper"]}>
                    <button
                      type="submit"
                      className={`${s["submit-btn"]} ${
                        isLoading ? s.loading : ""
                      }`}
                      disabled={isLoading}
                    >
                      {isLoading ? (
                        <div className={s.spinner}></div>
                      ) : (
                        <>
                          <span>Send Message</span>
                          <Image src={send} width={18} height={18} alt="Send" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </>
            )}
          </div>
          {/* Contact Info Side */}
          <div className={s["contact-info"]}>
            <h3 className={s["info-title"]}>Contact Information</h3>
            <p className={s["info-subtitle"]}>
              Reach out directly or stay connected through my socials
            </p>
            <div className={s["info-items"]}>
              <div className={s["info-item"]}>
                <div className={s["info-"]}>
                  <Image src={email} width={22} height={22} alt="Email" />
                </div>
                <div className={s["info-content"]}>
                  <span className={s["info-label"]}>Email</span>
                  <a href="mailto:kritirai.hyd@gmail.com" className={s["info-value"]}>
                    kritirai.hyd@gmail.com
                  </a>
                </div>
              </div>
              <div className={s["info-item"]}>
                <div className={s["info-"]}>
                  <Image src={loc} width={22} height={22} alt="Location" />
                </div>
                <div className={s["info-content"]}>
                  <span className={s["info-label"]}>Location</span>
                  <span className={s["info-value"]}>Hyderabad, India</span>
                </div>
              </div>
              <div className={s["info-item"]}>
                <div className={s["info-"]}>
                  <Image src={phone} width={22} height={22} alt="Phone" />
                </div>
                <div className={s["info-content"]}>
                  <span className={s["info-label"]}>Phone</span>
                  <span className={s["info-value"]}>Available upon request</span>
                </div>
              </div>
            </div>
            <div className={s["social-section"]}>
              <p className={s["social-title"]}>Connect with me</p>
              <div className={s["social-icons"]}>
                <a
                  href="https://www.linkedin.com/in/dev-kritirai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={s.link}
                  aria-label="LinkedIn Profile"
                >
                  <Image src={linkedin} width={22} height={22} alt="LinkedIn" />
                </a>
                <a
                  href="https://github.com/kritirai-hyd"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={s.link}
                  aria-label="GitHub Profile"
                >
                  <Image src={github} width={22} height={22} alt="GitHub" />
                </a>
                <a
                  href="https://x.com/dev_kritirai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={s.link}
                  aria-label="X Profile"
                >
                  <Image src={x} width={22} height={22} alt="X" />
                </a>
                <a
                  href="https://www.facebook.com/dev.kriti"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={s.link}
                  aria-label="Facebook Profile"
                >
                  <Image src={facebook} width={22} height={22} alt="Facebook" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Contact;