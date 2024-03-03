import NavbarTwo from "../about-us/nav-app";
import RiskWeTake from "../about-us/risk-wetake";
import HomeSecond from "../components/home-second";
import Process from "../components/process";
import { BackgroundBoxesCallToAction } from "../components/ui/call-toaction";
import { Navbar } from "../components/ui/Navbar";
import { Stages } from "../components/ui/stages";
import OurStystems from "./our-systems";
import PlumbingHero from "./plumber-main-hero";

export default function PlumberHome() {
  return (
    <>
      <NavbarTwo />
      <PlumbingHero />
      <Stages />
      <RiskWeTake />
      <OurStystems />
      <Process />

      <HomeSecond />
      <BackgroundBoxesCallToAction />
    </>
  );
}
