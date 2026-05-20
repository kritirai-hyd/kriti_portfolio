"use client";
import React, { useState, useRef } from "react";
import styles from "./Contact.module.css";
import Image from "next/image";
import email from "../../assets/svg/email.svg";
import loc from "../../assets/svg/location.svg";
import phone from "../../assets/svg/phone.svg";

import send from "../../assets/svg/send.svg";
import github from "../../assets/svg/githubi.svg";
import xcion from "../../assets/svg/x-icon.svg";
import linkedin from "../../assets/svg/linkedin.svg";
import facebook from "../../assets/svg/facebook.svg";
import Heading from "../ui/Heading/Heading";
import { useTheme } from "../context/ThemeContext";

const Contact = () => {
  const { theme } = useTheme();

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // ✅ message state
  const [message, setMessage] = useState("");

  // ✅ ref for focus
  const textareaRef = useRef(null);

const handleSubmit = async (e) => {
  e.preventDefault();

  const payload = new FormData();

  payload.append("access_key", "f9a52860-113e-4c0b-bc85-581bc2af8241");
  payload.append("fullName", formData.fullName);
  payload.append("email", formData.email);
  payload.append("phone", formData.phone);
  payload.append("location", formData.location);
  payload.append("experience", formData.experience);
  payload.append("skills", formData.skills);
  payload.append("message", formData.message);

  if (formData.resume) {
    payload.append("resume", formData.resume);
  }

  try {
    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: payload,
    });

    const data = await res.json();

    if (data.success) {
      alert("Application submitted successfully!");
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        location: "",
        experience: "",
        skills: "",
        resume: null,
        message: "",
      });
    } else {
      alert("Submission failed!");
    }
  } catch (error) {
    console.error(error);
    alert("Something went wrong!");
  }
};

  return (
    <section id="contact" className={styles["contact-section"]}>
      <div className={styles["contact-container"]}>
        <Heading
          heading="Get In Touch"
          para="Let's create something amazing together"
        />

        <div className={styles["contact-grid"]}>
          <div className={styles["contact-form-wrapper"]}>
            {isSubmitted ? (
              <div className={styles["success-message"]}>
                <div className={styles["success-icon"]}>✓</div>
                <h3>Message Sent Successfully!</h3>
                <p>Thank you for reaching out. I'll get back to you soon.</p>
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
                    className={`${
                      theme === "dark" ? styles.tDark : styles.tLight
                    }`}
                  >
                    Let's work together!
                  </h2>
                  <p>
                    I design and code beautifully simple things, and I love what
                    I do.
                  </p>

                </div>

                <form onSubmit={handleSubmit} className={styles["contact-form"]}>
                  <div className={styles["form-row"]}>
                    <div className={styles["input-group"]}>
                      <label className={styles.inputLabel}>
                        First Name
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        className={styles["form-input"]}
                        required
                      />
                    </div>

                    <div className={styles["input-group"]}>
                      <label className={styles.inputLabel}>
                        Last Name
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        className={styles["form-input"]}
                        required
                      />
                    </div>
                  </div>

                  <div className={styles["input-group"]}>
                    <label className={styles.inputLabel}>
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      className={styles["form-input"]}
                      required
                    />
                  </div>

                  <div className={styles["input-group"]}>
                    <label className={styles.inputLabel}>
                      Phone Number
                    </label>
                    <input
                      type="text"
                      name="phone"
                      className={styles["form-input"]}
                    />
                  </div>
{/* ✅ Quick Action Buttons with Green Circles */}
<div
  style={{
    marginTop: "1rem",
    display: "flex",
    gap: "1rem",
    flexWrap: "wrap",
  }}
>
  <button
    type="button"
    className={styles["quick-btn3"]}
    onClick={() =>
      handleQuickMessage(
        "Hi there,\n\nI’m currently open to new opportunities and would love to connect with you if you’re looking to hire. Let’s chat!\n\n"
      )
    }
  >
    <span style={{
      display: "inline-block",
      width: "10px",
      height: "10px",
      backgroundColor: "#3654b8",
      borderRadius: "50%",
      marginRight: "5px"
    }}></span>
  
    Open to Hire
  </button>

  <button
    type="button"
    className={styles["quick-btn2"]}
    onClick={() =>
      handleQuickMessage(
        "Hello,\n\nI’m looking to explore exciting projects or roles. Please let me know if there’s a fit—I’d love to discuss!\n\n"
      )
    }
  >
    <span style={{
      display: "inline-block",
      width: "10px",
      height: "10px",
      backgroundColor: "#86fa58",
      borderRadius: "50%",
      marginRight: "5px"
    }}></span>
 
    Project / Role Talk
  </button>
  
<button
  type="button"
  className={styles["quick-btn1"]}
  onClick={() =>    handleQuickMessage(
     ""  )   }
>
  <span style={{
      display: "inline-block",
      width: "10px",
      height: "10px",
      backgroundColor: "#2e2e2e",
      borderRadius: "50%",
      marginRight: "5px"
    }}></span>
  Custom Message
</button>
</div>

                  <div className={styles["input-group"]}>
                    <label className={styles.inputLabel}>
                      Message
                    </label>
                    <textarea
                      ref={textareaRef}
                      name="message"
                      rows={5}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className={`${styles["form-input"]} ${styles.textarea}`}
                      required
                    ></textarea>
                  </div>


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
                          <Image
                            src={send}
                            width={20}
                            height={20}
                            alt="Send"
                          />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </>
            )}
          </div>

          {/* Contact Info (unchanged) */}
          <div className={styles["contact-info"]}>
            <h3 className={styles["info-title"]}>Contact Information</h3>
            <p className={styles["info-subtitle"]}>
              Reach out through any of these channels
            </p>

            <div className={styles["info-items"]}>
              <div className={styles["info-item"]}>
                <div className={styles["info-icon"]}>
                  <Image src={email} width={24} height={24} alt="Email" />
                </div>
                <div>
                  <p>Email</p>
                  <a href="mailto:kritirai.hyd@gmail.com">
                    Send me an email
                  </a>
                </div>
              </div>

              <div className={styles["info-item"]}>
                <div className={styles["info-icon"]}>
                  <Image src={loc} width={24} height={24} alt="Location" />
                </div>
                <span>Hyderabad, India</span>
              </div>

              <div className={styles["info-item"]}>
                <div className={styles["info-icon"]}>
                  <Image src={phone} width={24} height={24} alt="Phone" />
                </div>
                <span>Available upon request</span>
              </div>
            </div>

            <div className={styles["social-icons"]}>
              <a href="https://www.linkedin.com/in/dev-kritirai" className={styles.socialLink}>
                <Image src={linkedin} width={30} height={30} alt="LinkedIn" />
              </a>
              <a href="https://github.com/kritirai-hyd" className={styles.socialLink}>
                <Image src={github} width={30} height={30} alt="GitHub" />
              </a>
              <a href="https://x.com/dev_kritirai" className={styles.socialLink}>
                <Image src={xcion} width={30} height={30} alt="X" />
              </a>
              <a href="https://www.facebook.com/kritirai.dev" className={styles.socialLink}>
                <Image src={facebook} width={30} height={30} alt="Facebook" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;