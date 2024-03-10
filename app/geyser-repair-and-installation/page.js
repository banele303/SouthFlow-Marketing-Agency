import { Navbar } from "../components/ui/Navbar";
import Footer from "../our-plumbing-services/ui/footer";
import CustomerSetisfication from "../our-plumbing-services/we-strive-satifaction";
import Geyser from "./geyse";
import WelcomeGeyser from "./welcome-geyser";



export default function Home() {
  return (
    <>
    <Navbar/>
    <Geyser/>
    <WelcomeGeyser/>
    <div className="mb-[3rem]"></div>
    <CustomerSetisfication/>
     <Footer/>
    
    </>
  );
}
