"use client";

import useLenis from "@/Components/hooks/useLenis";
import Hero from "@/Components/Hero/Hero";
import About from "@/Components/About/About";
import Services from "@/Components/Services/Services";
import Work from "@/Components/Work/Work";
import Education from "@/Components/Education/Education";
import Certificate from "@/Components/Certificate/Certificate";
import Contact from "@/Components/Contact/Contact";
import Counter from "@/Components/Counter/Counter";
import Badges from "@/Components/Badges/Badges";
import Scroll from "@/Components/Scroll/Scroll";

export default function ClientWrapper() {
  useLenis();

  return (
    <>
      <Hero />
      <Scroll />
      <Counter />
      <About />
      <Services />
      <Work />
      <Certificate />
      <Badges />
      <Education />
      <Contact />
    </>
  );
}