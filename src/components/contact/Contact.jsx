"use client";
import React, { useState, useRef } from "react";
import styles from "./Contact.module.css";
import Image from "next/image";
import emailIcon from "../../assets/svg/email.svg";
import locIcon from "../../assets/svg/location.svg";
import phoneIcon from "../../assets/svg/phone.svg";
import sendIcon from "../../assets/svg/send.svg";
import githubIcon from "../../assets/svg/githubi.svg";
import xIcon from "../../assets/svg/x-icon.svg";
import linkedinIcon from "../../assets/svg/linkedin.svg";
import facebookIcon from "../../assets/svg/facebook.svg";
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
    <section id="contact" className={styles["contact-section"]}>
      <div className={styles["contact-container"]}>
        <Heading
          heading="Get In Touch"
          para="Let's create something amazing together"
        />

        <div className={styles["contact-cards"]}>
          {/* Form Side */}
          <div className={styles["contact-form-wrapper"]}>
            {isSubmitted ? (
              <div className={styles["success-card"]}>
                <div className={styles["success-icon"]}>✓</div>
                <h3>Message Sent Successfully!</h3>
                <p>Thank you for reaching out. I'll get back to you shortly.</p>
                <button
                  className={styles["submit-btn"]}
                  onClick={() => setIsSubmitted(false)}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <>
                <div className={styles["form-header"]}>
                  <h2
                    className={
                      theme === "dark" ? styles.tDark : styles.tLight
                    }
                  >
                    Let's work together!
                  </h2>
                  <p>
                    I design and code beautifully simple things, and I love what
                    I do.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className={styles["contact-form"]}>
                  <div className={styles["form-grid"]}>
                    {/* First Name */}
                    <div className={styles["floating-group"]}>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        placeholder=" "
                        className={styles["form-input"]}
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                      />
                      <label htmlFor="firstName" className={styles["floating-label"]}>
                        First Name
                      </label>
                    </div>

                    {/* Last Name */}
                    <div className={styles["floating-group"]}>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        placeholder=" "
                        className={styles["form-input"]}
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
                      />
                      <label htmlFor="lastName" className={styles["floating-label"]}>
                        Last Name
                      </label>
                    </div>
                  </div>

                  {/* Email */}
                  <div className={styles["floating-group"]}>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder=" "
                      className={styles["form-input"]}
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                    <label htmlFor="email" className={styles["floating-label"]}>
                      Email Address
                    </label>
                  </div>

                  {/* Phone */}
                  <div className={styles["floating-group"]}>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      placeholder=" "
                      className={styles["form-input"]}
                      value={formData.phone}
                      onChange={handleInputChange}
                    />
                    <label htmlFor="phone" className={styles["floating-label"]}>
                      Phone Number (Optional)
                    </label>
                  </div>

                  {/* Quick Preset Buttons */}
                  <div className={styles["quick-actions"]}>
                    <span className={styles["quick-title"]}>Select Template:</span>
                    <div className={styles["quick-pills"]}>
                      <button
                        type="button"
                        className={`${styles["quick-btn"]} ${
                          activeTemplate === "hire" ? styles["quick-btn-active"] : ""
                        }`}
                        onClick={() =>
                          handleQuickMessage(
                            "Hi there,\n\nI’m currently open to new opportunities and would love to connect with you if you’re looking to hire. Let’s chat!\n\n",
                            "hire"
                          )
                        }
                      >
                        <span className={`${styles.dot} ${styles.dotBlue}`}></span>
                        Open to Hire
                      </button>

                      <button
                        type="button"
                        className={`${styles["quick-btn"]} ${
                          activeTemplate === "project" ? styles["quick-btn-active"] : ""
                        }`}
                        onClick={() =>
                          handleQuickMessage(
                            "Hello,\n\nI’m looking to explore exciting projects or roles. Please let me know if there’s a fit—I’d love to discuss!\n\n",
                            "project"
                          )
                        }
                      >
                        <span className={`${styles.dot} ${styles.dotGreen}`}></span>
                        Project / Role
                      </button>

                      <button
                        type="button"
                        className={`${styles["quick-btn"]} ${
                          activeTemplate === "custom" ? styles["quick-btn-active"] : ""
                        }`}
                        onClick={() => handleQuickMessage("", "custom")}
                      >
                        <span className={`${styles.dot} ${styles.dotDark}`}></span>
                        Custom
                      </button>
                    </div>
                  </div>

                  {/* Textarea */}
                  <div className={styles["floating-group"]}>
                    <textarea
                      ref={textareaRef}
                      id="message"
                      name="message"
                      rows={4}
                      placeholder=" "
                      value={formData.message}
                      onChange={handleInputChange}
                      className={`${styles["form-input"]} ${styles.textarea}`}
                      required
                    ></textarea>
                    <label htmlFor="message" className={styles["floating-label"]}>
                      Your Message
                    </label>
                  </div>

                  {/* Submit Button */}
                  <div className={styles["submit-wrapper"]}>
                    <button
                      type="submit"
                      className={`${styles["submit-btn"]} ${
                        isLoading ? styles.loading : ""
                      }`}
                      disabled={isLoading}
                    >
                      {isLoading ? (
                        <div className={styles.spinner}></div>
                      ) : (
                        <>
                          <span>Send Message</span>
                          <Image src={sendIcon} width={18} height={18} alt="Send" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </>
            )}
          </div>

          {/* Contact Info Side */}
          <div className={styles["contact-info"]}>
            <h3 className={styles["info-title"]}>Contact Information</h3>
            <p className={styles["info-subtitle"]}>
              Reach out directly or stay connected through my socials
            </p>

            <div className={styles["info-items"]}>
              <div className={styles["info-item"]}>
                <div className={styles["info-icon"]}>
                  <Image src={emailIcon} width={22} height={22} alt="Email" />
                </div>
                <div className={styles["info-content"]}>
                  <span className={styles["info-label"]}>Email</span>
                  <a href="mailto:kritirai.hyd@gmail.com" className={styles["info-value"]}>
                    kritirai.hyd@gmail.com
                  </a>
                </div>
              </div>

              <div className={styles["info-item"]}>
                <div className={styles["info-icon"]}>
                  <Image src={locIcon} width={22} height={22} alt="Location" />
                </div>
                <div className={styles["info-content"]}>
                  <span className={styles["info-label"]}>Location</span>
                  <span className={styles["info-value"]}>Hyderabad, India</span>
                </div>
              </div>

              <div className={styles["info-item"]}>
                <div className={styles["info-icon"]}>
                  <Image src={phoneIcon} width={22} height={22} alt="Phone" />
                </div>
                <div className={styles["info-content"]}>
                  <span className={styles["info-label"]}>Phone</span>
                  <span className={styles["info-value"]}>Available upon request</span>
                </div>
              </div>
            </div>

            <div className={styles["social-section"]}>
              <p className={styles["social-title"]}>Connect with me</p>
              <div className={styles["social-icons"]}>
                <a
                  href="https://www.linkedin.com/in/dev-kritirai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                  aria-label="LinkedIn Profile"
                >
                  <Image src={linkedinIcon} width={22} height={22} alt="LinkedIn" />
                </a>
                <a
                  href="https://github.com/kritirai-hyd"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                  aria-label="GitHub Profile"
                >
                  <Image src={githubIcon} width={22} height={22} alt="GitHub" />
                </a>
                <a
                  href="https://x.com/dev_kritirai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                  aria-label="X Profile"
                >
                  <Image src={xIcon} width={22} height={22} alt="X" />
                </a>
                <a
                  href="https://www.facebook.com/kritirai.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                  aria-label="Facebook Profile"
                >
                  <Image src={facebookIcon} width={22} height={22} alt="Facebook" />
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