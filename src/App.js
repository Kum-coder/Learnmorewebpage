import React from "react";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import TypingAnimation from "./TypingAnimation";
import Services from "./Services";
import ParallaxSection from "./ParallaxSection";
import AnimatedChart from "./AnimatedChart";
import ThreeDCard from "./ThreeDCard";
import Testimonials from "./Testimonials";
import AnimatedSection from "./AnimatedSection";
import FlipCard from "./FlipCard";
import ContactUs from "./ContactUs";
import Footer from "./Footer";

function App() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <TypingAnimation />
      <Services />
      <ParallaxSection />
      <AnimatedChart />
      <ThreeDCard />
      <Testimonials />
      <AnimatedSection />
      <FlipCard />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
