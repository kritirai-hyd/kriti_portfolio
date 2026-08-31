import React from "react";
import Link from "next/link";
import Contact from "../contact/Contact";
import useLenis from "../hooks/useLenis";
import { useTheme } from "../context/ThemeContext";

const Getquote = () => {
  const { theme } = useTheme();
  useLenis();
  return (
    <>

      <Contact />
    </>
  );
};
export default Getquote;
