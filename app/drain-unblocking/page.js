import { Navbar } from "../components/ui/Navbar";
import Footer from "../our-plumbing-services/ui/footer";
import CustomerSetisfication from "../our-plumbing-services/we-strive-satifaction";
import Drainsunblock from "./drains-unblock";
import WelcomeBlockedDrains from "./welcome-blockeddrains";




export default function Home() {
  return (
    <>
    <Navbar/>
   <WelcomeBlockedDrains/>
   <Drainsunblock/>
    <div className="mb-[3rem]"></div>
    <CustomerSetisfication/>
     <Footer/>
    
    </>
  );
}
