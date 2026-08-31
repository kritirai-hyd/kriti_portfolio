import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import github from "../../assets/svg/githubi.svg";
import xcion from "../../assets/svg/x-icon.svg";
import linkedin from "../../assets/svg/linkedin.svg";
import kriti from "../../assets/image/kritirai-2.jpeg";
import styles from "./styles.module.css";
import { useTheme } from "../context/ThemeContext";

const About = () => {
  const { theme } = useTheme();



  return (
    <div style={{ width: "100%", }} className={styles.bg}>
    

      <div className={styles.container}>
        <div className={styles.subcontainer}>
       <div className={styles.left}>
            <motion.div
              className={styles.profile}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className={styles.circle}>
                <div className={styles.light}></div>
                <div className={styles.border}></div>
                <Image
                  src={kriti}
                  alt="Kriti Rai - Full Stack Developer"
                  className={styles.image}
                  width={320}
                  height={340}
                  priority
                />
              </div>
            </motion.div>
          </div>
          <div className={styles.right}>
            <motion.h1
              className={styles.heading}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
             About Me
            </motion.h1>

            <motion.p
              className={styles.about}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
           I'm Kriti Rai, a Full Stack Developer who builds fast, modern, and SEO-optimized websites that help businesses grow online. Using technologies like HTML, CSS, JavaScript, React, Next.js, Node.js, and SQL, I create responsive, user-friendly, and high-performing web solutions that deliver great user experiences and real business results.       </motion.p>

        
              <motion.div className={styles.buttons}     initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}>
                <div className={styles.download}>
                  <Link
                    href="/kritirai-cv"
                    className={styles.link}
                  >
                    View CV
                  </Link>
                </div>
                <ul className={styles.social}>
                  <li className={styles.icons}>
                    <Link href="https://github.com/kritirai-hyd" target="_blank">
                      <Image src={github} width={34} height={34} alt="GitHub" />
                    </Link>
                  </li>
                  <li className={styles.icons}>
                    <Link href="https://x.com/dev_kritirai" target="_blank">
                      <Image src={xcion} width={34} height={34} alt="X" />
                    </Link>
                  </li>
                  <li className={styles.icons}>
                    <Link href="https://www.linkedin.com/in/dev-kritirai" target="_blank">
                      <Image src={linkedin} width={34} height={34} alt="LinkedIn" />
                    </Link>
                  </li>
                </ul>
              </motion.div>
     
          </div>

        

    
        </div>
      </div>
    </div>
  );
};

export default About;
