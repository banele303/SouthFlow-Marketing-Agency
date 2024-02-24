import RiskWeTake from "../about-us/risk-wetake";
import { Navbar } from "../components/ui/Navbar";
import { Stages } from "../components/ui/stages";
import OurStystems from "./our-systems";
import PlumbingHero from "./plumber-main-hero";


export default function PlumberHome() {
    return (
     <>
    <Navbar/>
   <PlumbingHero/>
   <Stages/>
   <RiskWeTake/>
   <OurStystems/>
     </>
    );
  }
  