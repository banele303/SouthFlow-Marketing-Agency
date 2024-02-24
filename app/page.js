import { HomeHero } from "./components/home-hero";
import HomeSecond from "./components/home-second";
import LeadVolume from "./components/lead-volume";
import { LeadCardStack } from "./components/my-cardstack";
import { OurSytemem } from "./components/our-system";
import { StickyScrollRevealPayPerLead } from "./components/pay-perlead";
import Process from "./components/process";
import { Navbar, NavbarDemo } from "./components/ui/Navbar";
import { BackgroundBoxesCallToAction } from "./components/ui/call-toaction";
import { InfinityTrustedBy } from "./components/ui/infinity-trusted-by";
import { PayPerLead } from "./components/ui/pay-perLeads";
import { SmallNavbar } from "./components/ui/small-nav";
import { Stages } from "./components/ui/stages";
import { TrustedBy } from "./components/ui/trusted-by";
import Welcome from "./components/welcome";


export default function Home() {
  return (
   <>
  <Navbar/>
  <HomeHero/>
  <Stages/>
  <Welcome/>
  <PayPerLead/>
<OurSytemem/>
  <BackgroundBoxesCallToAction/>
  <LeadVolume/>
 

  <Process/>
  <HomeSecond/>
  
   </>
  );
}
