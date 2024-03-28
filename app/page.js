


import RiskWeTake from "./about-us/risk-wetake";
import { RealForm } from "./api/send/real-form";
import HomeHero from "./components/home-hero";
import TestimonialSection from "./components/testimonial-section";
import TypeOfWork from "./components/type-of-work";
import { Navbar } from "./components/ui/Navbar";
import ContactInfo from "./components/ui/contact-info";
import Welcome from "./components/welcome";
import Footer from "./our-plumbing-services/ui/footer";
import AllServices from "./plumber/all-services";



export default function Home() {
  return (
    <>
      <Navbar/>
      <HomeHero/>
      <Welcome/>
    <div className="bg-white">
        <ContactInfo/>
      <RiskWeTake/>
      <TypeOfWork/>
     <AllServices/>
     <TestimonialSection/>
    </div>
  
    
     <Footer/>
    
    </>
  );
}
