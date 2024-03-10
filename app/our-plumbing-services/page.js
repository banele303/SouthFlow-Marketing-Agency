
import AllServices from "../about-us/all-services";
import RiskWeTake from "../about-us/risk-wetake";
import { Navbar } from "../components/ui/Navbar";
import { Stages } from "../components/ui/stages";

import PlumbingHero from "./plumber-main-hero";
import Footer from "./ui/footer";
import CustomerSetisfication from "./we-strive-satifaction";

export default function PlumberHome() {
  return (
    <>
      <Navbar/>
      <PlumbingHero />
      <RiskWeTake />
     <AllServices/>
      <CustomerSetisfication/>
      <Footer/>
    </>
  );
}
