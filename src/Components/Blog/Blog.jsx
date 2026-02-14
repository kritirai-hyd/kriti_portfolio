<<<<<<< HEAD

=======
"use client";
>>>>>>> 38539456c0d6ded47a8dd538a9d68180295bfbe0
import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./Blog.module.css";
import blog from './Blog.json'
<<<<<<< HEAD
import BreadCrumb from "../ui/BreadCrumb/BreadCrumb";
=======
>>>>>>> 38539456c0d6ded47a8dd538a9d68180295bfbe0


const Blog = () => {
  return (
    <>
<<<<<<< HEAD
    <div className={styles.bg}>
     <BreadCrumb
        title="Blog"
        path={[{ name: "Home", link: "/" }, { name: "Blog" }]}
      />
=======
      <div className={styles.breadcrumb}>
        <h1>Blog</h1>
        <p className={styles.breadcrumbText}>
          <Link href="https://www.kritirai.com">Home</Link>/ Blog
        </p>
      </div>
>>>>>>> 38539456c0d6ded47a8dd538a9d68180295bfbe0

      <div className={styles.container}>
        {blog.map((post, index) => {
          const image = require(`../../assets/image/${post.img}`);
        return (  <div className={styles.card} key={index}>
            <Image src={image} alt={post.alt} width={500} height={250} />
            <div className={styles.cardContent}>
              <h3>{post.title}</h3>
              <p>{post.desc}</p>
<<<<<<< HEAD
              <Link href={`/blog/${post.link}`} style={{margin: "0 auto"}}>Read More</Link>
=======
              <Link href={`/blog/${post.link}`}>Read More</Link>
>>>>>>> 38539456c0d6ded47a8dd538a9d68180295bfbe0
            </div>
          </div>
        )})}
      </div>
<<<<<<< HEAD
      </div>
=======
>>>>>>> 38539456c0d6ded47a8dd538a9d68180295bfbe0
    </>
  );
};

export default Blog;
