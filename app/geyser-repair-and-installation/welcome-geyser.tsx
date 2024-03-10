
"use client"

import { motion } from "framer-motion";
import Image from "next/image";
import { BookCallAppointment } from "../components/ui/form";
import { ButtonCallToAction } from "../components/ui/button-call-to-action";

export default function WelcomeGeyser() {

    return (
        <div className="dark:bg-white bg-black mb-[3rem] pb-8  md:pt-[1px] dark:bg-dot-black/[0.2] bg-dot-white/[0.2] px-[2rem] md:px-[4rem] ">

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 md:pt-[8rem]">


                <div>
                    <p className="font-Poppins text-xl md:text-2xl pt-5 opacity-80  text-white font-semibold">
                        Enjoy the great benefits of having a solar geyser
                    </p>
                    <p className="text-[15px] md:text-[17px] pt-4 opacity-80  text-white leading-8">
                        <span className="text-blue-800 px-3 font-bold"> - </span>   Have hot water, even during load shedding.
                        <br />
                        <span className="text-blue-800 px-3 font-bold"> - </span>   Reduce the grid load <br />
                        <span className="text-blue-800 px-3 font-bold"> - </span>     We offer a free technical consultation.<br />
                        <span className="text-blue-800 px-3 font-bold"> - </span>    Save up to 38% of your electricity cost.<br />
                        <span className="text-blue-800 px-3 font-bold"> - </span>    	Increase the value of your home.<br />
                        <span className="text-blue-800 px-3 font-bold"> - </span>         Guaranteed solar heating products & workmanship.
                    </p>
                </div>







                <motion.div
                    className="container mx-auto  h-[50vh] md:w-1/2 mt-8 md:mt-[2rem] rounded-md"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    <Image
                        src="/img/geyser2.jpeg" // the image file should be in the public folder
                        alt="southflow marketing agency no contract no set up fee"
                        width={300} // the original image width
                        height={400} // the original image height
                        layout="responsive" // this will make the image responsive
                        quality={95}
                        className="rounded-md " // this will reduce the image size and improve performance
                    />
                </motion.div>



            </div>




            <div>
                <h3 className="font-Poppins text-xl md:text-2xl pt-5 opacity-80  text-white font-semibold">
                    Geyser Repair & Replacement
                </h3>

                <p className="text-slate-400 mt-[1rem]  md:text-[17px] px-[.5rem] pb-[2rem]  leading-9">
                    A minor to severe leak from a geyser in the ceiling can not only be
                    a nuisance but can also inflict significant harm to ceilings,
                    carpets, and appliances. If a geyser is improperly installed, it could
                    pose a serious risk, potentially leading to an &quot;explosion&quot; in your roof.
                    Hence, it&apos;s crucial that a geyser is installed by skilled and certified plumbers,
                    equipped with the required pressure reducing valves, appropriate safety valves, a
                    geyser tray with an external overflow pipe, and a Certificate of Compliance.
                    <br />      🛠️💧
                    <br />      Gotcha Plumbing is equipped to provide and set up geysers of any capacity, be it 50L, 100L, 150L, 200L, or 250L. We will suggest and substitute the geyser size that best fits your hot water needs. All geysers have the flexibility to be
                    installed in either a horizontal or vertical orientation.🛠️💧
                </p>

                <h3 className="font-Poppins text-xl md:text-2xl pt-5 opacity-80  text-white font-semibold">
                    South Africa&apos;s Best Drainage & Emergency Plumbing
                </h3>



                <p className="text-slate-400 mt-[1rem]  md:text-[17px] px-[.5rem] pb-[2rem]  leading-9">
                    Deciphering the issues with your geyser can be challenging, which underscores the importance of having a plumbing specialist who is well-versed in the complexities of geysers. Each member of our team possesses an in-depth knowledge of geysers and their integration with the overall home plumbing system. This expertise, coupled with our reputation for speedy and dependable service, positions us as your go-to choice for geyser repairs.
                    🛠️💧<br />
                    <br />
                    Our skilled team can assess what&apos;s best for your property and deliver prompt service, allowing you to resume your daily routine. We provide a broad array of top-notch geysers, designed to accommodate various homes and lifestyles. Your part is simply to choose one, and we can have it delivered and installed at your place within the day

                </p>





                <div className="flex flex-col w-full lg:flex-row">
                    <div className="grid flex-grow  card bg-base-300 rounded-box place-items-center p-[1rem] md:p-[2rem]">
                        <h3 className="font-Poppins text-xl md:text-2xl pt-5 opacity-80  text-slate-900 font-semibold">
                            Have a Burst Geyser? Contact the Geyser Experts Now!
                        </h3>
                        <p className="text-slate-800 mt-[1rem]  md:text-[17px] px-[.5rem] pb-[2rem]  leading-9">
                            When you least expect it, a **burst geyser** can catch you off guard, often striking when you&apos;re fast asleep. Without proper maintenance and care, your geyser becomes a ticking time bomb, ready to disrupt your rest.


                            <br />
                            <br />
                            At **The Geyser Connection**, our excellent plumbers specialize in geyser servicing. Should the unthinkable 2 a.m. geyser burst become a part of your life, our **emergency plumbers** are standing by to fix the plumbing problem.


                            <br />
                            <br />
                            To prevent a geyser burst and the consequent damage to your home, consider having a professional qualified plumber service your geyser at least every three to four years. All you need to do is **contact The Geyser Connection**, and we&apos;ll handle all the technical aspects you&apos;d rather not deal with. That’s what we’re here for! 🛠️🔧¹.


                            <br />
                            <br />
                            Our skilled team can assess what&apos;s best for your property and deliver prompt service, allowing you to resume your daily routine. We provide a broad array of top-notch geysers, designed to accommodate various homes and lifestyles. Your part is simply to choose one, and we can have it delivered and installed at your place within the day."

                        </p>

                        <ButtonCallToAction />
                    </div>


                </div>
            </div>


        </div>
    )
}