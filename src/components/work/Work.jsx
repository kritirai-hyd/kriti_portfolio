import React from "react";
import { CheckCircle2, ArrowRight } from "lucide-react";
import styles from "./Work.module.css";
import projects from "./Works";
import Image from "next/image";
export const ProjectsSection = () => {
  return (
    <section className={styles.bg}>
      <div className={styles.section}>
        <div className={styles.header}>
          <h2 className={styles.title}>My Recent Work</h2>
        </div>
        <div className={styles.projects}>
          {projects.map((project) => (
            <div key={project.id} className={styles.card}>
              <div className={styles.images}>
                <Image
                  src={project.image}
                  alt={project.title}
                  className={styles.image}
                  loading="lazy"
                />
              </div>
              <div className={styles.top}>
                <div>
                  <h3 className={styles.title}>{project.title}</h3>
                  <div className={styles.solution}>
                    <div className={styles.label}>Challenge</div>
                    <p className={styles.text}>{project.challenge}</p>
                  </div>
                  <div className={styles.solution}>
                    <div className={styles.label}>Solution</div>
                    <div className={styles.solutionList}>
                      {project.solutions.map((item, index) => (
                        <div key={index} className={styles.solutionItem}>
                          <CheckCircle2
                            size={16}
                            className={styles.checkIcon}
                          />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className={styles.solution}>
                    <div className={styles.label}>Key Features</div>
                    <div className={styles.feature}>
                      {project.features.map((feature, index) => (
                        <span key={index} className={styles.tag}>
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className={styles.bottom}>
                  <button className={styles.button}>
                    <span>View Case Study</span>
                    <ArrowRight size={16} className={styles.icon} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default ProjectsSection;
