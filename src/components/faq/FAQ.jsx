import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import styles from "./FAQ.module.css";
import Heading from "../ui/Heading/Heading";

const faqData = [
  {
    question: "How long does it take to build a website?",
    answer:
      "The timeline depends on the project size and requirements. A standard business website usually takes around 2–4 weeks."
  },
  {
    question: "Will my website work on mobile devices?",
    answer:
      "Yes. Every website I build is fully responsive and optimized for mobile phones, tablets, and desktops."
  },
  {
    question: "Do you provide SEO optimization?",
    answer:
      "Yes. I build websites with SEO-friendly structure, optimized performance, and best practices to improve visibility."
  },
  {
    question: "Can you redesign my existing website?",
    answer:
      "Yes. I can redesign outdated websites with a modern layout, improved user experience, and better performance."
  },
  {
    question: "Do you provide website maintenance?",
    answer:
      "Yes. I offer ongoing maintenance, updates, security improvements, and performance optimization."
  },
  {
    question: "How much does a website cost?",
    answer:
      "Pricing depends on your requirements, features, and project complexity. Contact me for a custom quote."
  }
];


const FAQ = () => {

  const [active, setActive] = useState(null);


  const toggleFAQ = (index) => {

    setActive(active === index ? null : index);

  };


  return (

    <section className={styles.faqSection}>


      <div className={styles.wrapper}>


        <Heading

          heading="Frequently Asked Questions"

          para="Find answers to common questions about my website design and development services."

        />



        <div className={styles.faqContainer}>


          {
            faqData.map((item,index)=>(

              <div

                key={index}

                className={`${styles.faqItem} ${
                  active === index ? styles.active : ""
                }`}

              >


                <button

                  className={styles.question}

                  onClick={()=>toggleFAQ(index)}

                >

                  <span>
                    {item.question}
                  </span>


                  <ChevronDown

                    size={22}

                    className={styles.icon}

                  />


                </button>



                <div className={styles.answer}>

                  <p>
                    {item.answer}
                  </p>

                </div>


              </div>


            ))
          }


        </div>


      </div>


    </section>

  );

};


export default FAQ;