import { Navbar } from "../components/ui/Navbar";
import { Stages } from "../components/ui/stages";
import AboutHero from "./aboutus-hero";
import AboutUswelcome from "./aboutus-welcome";
import CheckLeads from "./check-leads";
import RiskWeTake from "./risk-wetake";
import SertifiedBY from "./ui/sertified-by";


export default function AboutUs() {
    return (
     <>
    <Navbar/>
   
    <AboutHero/>
    <Stages/>
    <RiskWeTake/>
    <AboutUswelcome/>
    <CheckLeads/>
    <SertifiedBY/>
     </>
    );
  }