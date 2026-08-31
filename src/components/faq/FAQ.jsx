import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import styles from "./FAQ.module.css";
import Heading from "../ui/Heading/Heading";
import faqs from "./Faqs";
const FAQ = () => {
  const [active, setActive] = useState(null);
  const toggleFAQ = (index) => {
    setActive(active === index ? null : index);
  };
  return (
    <section className={styles.bg}>
      <div className={styles.faq}>
        <div className={styles.wrapper}>
          <Heading
            heading="Frequently Asked Questions"
            para="Find answers to common questions about my website design and development services."
          />
          <div className={styles.container}>
            {faqs.map((item, index) => (
              <div
                key={index}
                className={`${styles.card} ${
                  active === index ? styles.active : ""
                }`}
              >
                <button
                  className={styles.question}
                  onClick={() => toggleFAQ(index)}
                >
                  <span>{item.question}</span>
                  <ChevronDown size={22} className={styles.icon} />
                </button>
                <div className={styles.answer}>
                  <p>{item.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default FAQ;
