import { Navbar } from "../components/ui/Navbar";
import Footer from "../our-plumbing-services/ui/footer";
import CustomerSetisfication from "../our-plumbing-services/we-strive-satifaction";
import AboutHero from "./aboutus-hero";
import AboutUswelcome from "./aboutus-welcome";
import AllServices from "./all-services";
import OwnerInfor from "./owner-info";
import RiskWeTake from "./risk-wetake";



export default function AboutUs() {
  return (
    <>
      <Navbar />

      <AboutHero />

      <RiskWeTake />
      <OwnerInfor />
      <AboutUswelcome />
      <AllServices />
      <CustomerSetisfication />
      <Footer />
    </>
  );
}