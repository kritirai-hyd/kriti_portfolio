"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./Blog.module.css";
import blog from './Blog.json'


const Blog = () => {
  return (
    <>
      <div className={styles.breadcrumb}>
        <h1>Blog</h1>
        <p className={styles.breadcrumbText}>
          <Link href="https://www.kritirai.com">Home</Link>/ Blog
        </p>
      </div>

      <div className={styles.container}>
        {blog.map((post, index) => {
          const image = require(`../../assets/image/${post.img}`);
        return (  <div className={styles.card} key={index}>
            <Image src={image} alt={post.alt} width={500} height={250} />
            <div className={styles.cardContent}>
              <h3>{post.title}</h3>
              <p>{post.desc}</p>
              <Link href={`/blog/${post.link}`}>Read More</Link>
            </div>
          </div>
        )})}
      </div>
    </>
  );
};

export default Blog;
