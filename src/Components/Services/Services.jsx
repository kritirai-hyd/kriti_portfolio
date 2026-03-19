
import React from "react";
import services from "./Service.json";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { useTheme } from "../context/ThemeContext";
import styles from "./Services.module.css";
import { ArrowLeft, ArrowRight, SquareArrowOutUpRight } from "lucide-react";
import Heading from "../ui/Heading/Heading";

const Services = () => {
  const { theme } = useTheme();

  return (
    <section
      id="services"
      className={styles.services}
      aria-label="Services offered"
    >
     
<Heading 
  heading="My Services" 
  para="I offer a range of web development services focused on building modern, responsive, and high-performing digital solutions tailored to your needs." 
/>
      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.5 }}
        className={styles.serviceContainer}
      >
        {services.map((item) => (
          <motion.div
            key={item.id}
            className={styles.servicesCard}
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }} style={{ background: item.bg }}
          >
            <div className={styles.title}>
              <h3>{item.title}</h3>
        
         
            </div>
            <div className={styles.desc}>
              <p className={styles.des}>{item.desc}</p>
            </div>
              <Link
                href={`${item.link}`}
                title={`Explore ${item.title} services`}
               className={styles.downloadBtn}
              >
                    Read More <ArrowRight size={13} />    </Link>
          </motion.div>
     
        ))}
      </motion.div>
    </section>
  );
};

export default Services;
