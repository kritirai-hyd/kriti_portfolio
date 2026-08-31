import React from "react";
import Link from "next/link";
import Contact from "../contact/Contact";
import useLenis from "../hooks/useLenis";
import { useTheme } from "../context/ThemeContext";
import styles from "./contacts.module.css";
import BreadCrumb from "../ui/breadCrumb/BreadCrumb";
const Contacts = () => {
  const { theme } = useTheme();
  useLenis();
  return (
    <>

   
    
      <BreadCrumb
        title="Get in Touch"
        path={[{ name: "Home", link: "/" }, { name: "Contact" }]}
      />

      <Contact />
    </>
  );
};
export default Contacts;
