
"use client"
import About from "@/Components/About/About";
import Contact from "@/Components/Contact/Contact";
import Hero from "@/Components/Hero/Hero";
import Services from "@/Components/Services/Services";
import Work from "@/Components/Work/Work";
import '../assets/css/style.css'
import Education from "@/Components/Education/Education";
import Certificate from "@/Components/Certificate/Certificate";
import useLenis from "@/Components/hooks/useLenis";
export default function Home() {
  useLenis();
  return (
<>
    
 <Hero />
<About />
<Services />

<Work />

<Certificate />
<Education />
<Contact /> 

</>
  );
}
