"use client";
import React from "react";
import Image from "next/image";
import styles from "./ViewCertificates.module.css";
export const ViewCertificates = ({ title, img }) => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.responsive}>
          <h1 className={styles.heading}>{title}</h1>
          <Image src={img} alt="Full stack developer" />
        </div>
      </div>
    </>
  );
};
