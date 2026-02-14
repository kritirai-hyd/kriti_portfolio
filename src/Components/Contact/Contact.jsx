import React, { useState } from "react";
import styles from "./Contact.module.css";
import email from "../../assets/svg/email.svg";
import loc from "../../assets/svg/location.svg";
import phone from "../../assets/svg/phone.svg";
import send from "../../assets/svg/send.svg";
import Image from "next/image";
<<<<<<< HEAD
import { useTheme } from "../context/ThemeContext";
import { Facebook, Github, Linkedin, Twitter } from "lucide-react";
import Heading from "../ui/Heading/Heading";
=======
import { useTheme } from "../../context/ThemeContext";
import { Github, Linkedin, Twitter } from "lucide-react";
import Heading from "../ui/Heading/Heading";

>>>>>>> 38539456c0d6ded47a8dd538a9d68180295bfbe0
const Contact = () => {
  const { theme } = useTheme();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
<<<<<<< HEAD
  const onSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    const formData = new FormData(event.target);
    formData.append("access_key", "f9a52860-113e-4c0b-bc85-581bc2af8241");
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);
=======

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    const formData = new FormData(event.target);
    formData.append("access_key", "f9a52860-113e-4c0b-bc85-581bc2af8241");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

>>>>>>> 38539456c0d6ded47a8dd538a9d68180295bfbe0
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      }).then((res) => res.json());
<<<<<<< HEAD
=======

>>>>>>> 38539456c0d6ded47a8dd538a9d68180295bfbe0
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
<<<<<<< HEAD
  return (
    <section
      id="contact"
      className={styles["contact-section"]}
=======

  return (
    <section
      id="contact"
      className={`${styles["contact-section"]} ${
        theme === "dark" ? styles["dark-theme"] : styles["light-theme"]
      }`}
>>>>>>> 38539456c0d6ded47a8dd538a9d68180295bfbe0
    >
      <div className={styles["contact-container"]}>
        <Heading
          heading="Get In Touch"
          para="Let's create something amazing together"
        />
<<<<<<< HEAD
=======

>>>>>>> 38539456c0d6ded47a8dd538a9d68180295bfbe0
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
                    className={`styles['section-title']} ${
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
                <form onSubmit={onSubmit} className={styles["contact-form"]}>
                  <div className={styles["form-row"]}>
                    <div className={styles["input-group"]}>
<<<<<<< HEAD
                      <label htmlFor="firstName" className={styles.inputLabel}>
                        First Name
                      </label>
=======
                       <label htmlFor="firstName" className={styles.inputLabel}>
        First Name
      </label>
>>>>>>> 38539456c0d6ded47a8dd538a9d68180295bfbe0
                      <input
                        type="text"
                        name="firstName"
                        className={styles["form-input"]}
                        required
                      />
<<<<<<< HEAD
                    </div>
                    <div className={styles["input-group"]}>
                      <label htmlFor="lastName" className={styles.inputLabel}>
                        Last Name
                      </label>
=======
                     
                    </div>
                    <div className={styles["input-group"]}>
                       <label htmlFor="lastName" className={styles.inputLabel}>
        Last Name
      </label>
>>>>>>> 38539456c0d6ded47a8dd538a9d68180295bfbe0
                      <input
                        type="text"
                        name="lastName"
                        className={styles["form-input"]}
                        required
                      />
<<<<<<< HEAD
                    </div>
                  </div>
                  <div className={styles["input-group"]}>
                    <label htmlFor="email" className={styles.inputLabel}>
                      Email Address
                    </label>
=======
                     </div>
                  </div>

                  <div className={styles["input-group"]}>
                     <label htmlFor="email" className={styles.inputLabel}>
      Email Address
    </label>
>>>>>>> 38539456c0d6ded47a8dd538a9d68180295bfbe0
                    <input
                      type="email"
                      name="email"
                      className={styles["form-input"]}
                      required
                    />
<<<<<<< HEAD
                  </div>
                  <div className={styles["input-group"]}>
                    <label htmlFor="phone" className={styles.inputLabel}>
                      Phone Number
                    </label>
=======
                   
                  </div>

                  <div className={styles["input-group"]}>
                     <label htmlFor="phone" className={styles.inputLabel}>
      Phone Number
    </label>
>>>>>>> 38539456c0d6ded47a8dd538a9d68180295bfbe0
                    <input
                      type="text"
                      name="phone"
                      className={styles["form-input"]}
                    />
<<<<<<< HEAD
                  </div>
                  <div className={styles["input-group"]}>
                    <label htmlFor="message" className={styles.inputLabel}>
                      Message
                    </label>
=======
                   
                  </div>

                  <div className={styles["input-group"]}>
                     <label htmlFor="message" className={styles.inputLabel}>
      Message
    </label>
>>>>>>> 38539456c0d6ded47a8dd538a9d68180295bfbe0
                    <textarea
                      name="message"
                      rows={5}
                      className={`${styles["form-input"]} ${styles.textarea}`}
                      required
                    ></textarea>
                  </div>
<<<<<<< HEAD
=======

>>>>>>> 38539456c0d6ded47a8dd538a9d68180295bfbe0
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
                            alt="Full Stack Developer | Kriti Rai"
                          />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </>
            )}
          </div>
<<<<<<< HEAD
          <div className={styles["contact-info"]}>
            <h3
              className={styles['info-title']}
=======

          <div className={styles["contact-info"]}>
            <h3
              className={`styles['info-title']} ${
                theme === "dark" ? styles.tDark : styles.tLight
              }`}
>>>>>>> 38539456c0d6ded47a8dd538a9d68180295bfbe0
            >
              Contact Information
            </h3>
            <p className={styles["info-subtitle"]}>
              Reach out through any of these channels
            </p>
<<<<<<< HEAD
=======

>>>>>>> 38539456c0d6ded47a8dd538a9d68180295bfbe0
            <div className={styles["info-items"]}>
              <div className={styles["info-item"]}>
                <div className={styles["info-icon"]}>
                  <Image
                    src={email}
                    width={24}
                    height={24}
                    alt="Send an email to Kriti Rai"
                  />
                </div>
                <div className={styles["info-content"]}>
                  <p className={styles["info-label"]}>Email</p>
                  <a
                    href="mailto:kritirai.hyd@gmail.com"
                    className={styles["info-value"]}
                  >
                    Send me an email
                  </a>
                </div>
              </div>
<<<<<<< HEAD
=======

>>>>>>> 38539456c0d6ded47a8dd538a9d68180295bfbe0
              <div className={styles["info-item"]}>
                <div className={styles["info-icon"]}>
                  <Image
                    src={loc}
                    width={24}
                    height={24}
                    alt="Full Stack Developer | Kriti Rai in Hyderabad, India"
                  />
                </div>
                <div className={styles["info-content"]}>
                  <p className={styles["info-label"]}>Location</p>
                  <span className={styles["info-value"]}>Hyderabad, India</span>
                </div>
              </div>
<<<<<<< HEAD
=======

>>>>>>> 38539456c0d6ded47a8dd538a9d68180295bfbe0
              <div className={styles["info-item"]}>
                <div className={styles["info-icon"]}>
                  <Image
                    src={phone}
                    width={24}
                    height={24}
                    alt="Websites developer"
                  />
                </div>
                <div className={styles["info-content"]}>
                  <p className={styles["info-label"]}>Phone</p>
                  <span className={styles["info-value"]}>
                    Available upon request
                  </span>
                </div>
              </div>
            </div>
<<<<<<< HEAD
=======

>>>>>>> 38539456c0d6ded47a8dd538a9d68180295bfbe0
            <div className={styles["social-links"]}>
              <p className={styles["social-title"]}>Follow me on</p>
              <div className={styles["social-icons"]}>
                <a
                  href="https://www.linkedin.com/in/dev-kritirai"
                  className={styles["social-link"]}
                  aria-label="LinkedIn profile"
                >
                  <Linkedin />
                </a>
                <a
                  href="https://github.com/kritirai-hyd"
                  className={styles["social-link"]}
                  aria-label="Github profile"
                >
                  <Github />
                </a>
<<<<<<< HEAD
=======
                
>>>>>>> 38539456c0d6ded47a8dd538a9d68180295bfbe0
                <a
                  href="https://x.com/dev_kritirai"
                  className={styles["social-link"]}
                  aria-label="Twitter profile"
                >
                  <Twitter />
                </a>
<<<<<<< HEAD
                 <a
                  href="https://www.facebook.com/kritirai.dev"
                  className={styles["social-link"]}
                  aria-label="Facebook profile"
                >
                  <Facebook />
                </a>
=======
>>>>>>> 38539456c0d6ded47a8dd538a9d68180295bfbe0
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
<<<<<<< HEAD
=======

>>>>>>> 38539456c0d6ded47a8dd538a9d68180295bfbe0
export default Contact;
