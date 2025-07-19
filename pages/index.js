import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Questions from "@/components/Questions";
import Testimonial from "@/components/Testimonial";
import { useRef } from "react";


export default function Home() {
  const heroRef = useRef(null);
  return (
    <div>
     <Navbar heroRef={heroRef}/>
     <Hero ref={heroRef}/>
     <Testimonial/>
     <Questions/>
     <Footer/>
    </div>
  );
}
