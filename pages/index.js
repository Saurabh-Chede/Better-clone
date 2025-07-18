import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Questions from "@/components/Questions";
import Testimonial from "@/components/Testimonial";

export default function Home() {
  return (
    <div>
     <Navbar/>
     <Hero/>
     <Testimonial/>
     <Questions/>
     <Footer/>
    </div>
  );
}
