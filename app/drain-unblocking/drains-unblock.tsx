
"use client"

import { motion } from "framer-motion";
import Image from "next/image";
import { BookCallAppointment } from "../components/ui/form";
import { ButtonCallToAction } from "../components/ui/button-call-to-action";

export default function Drainsunblock() {

    return (
        <div className="dark:bg-white bg-black mb-[3rem] pb-8  md:pt-[1px] dark:bg-dot-black/[0.2] bg-dot-white/[0.2] px-[2rem] md:px-[4rem] ">

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 md:pt-[8rem]">


                <div>
                    <p className="font-Poppins text-xl md:text-2xl pt-5 opacity-80  text-white font-semibold">
                        Enjoy the great benefits of having a solar geyser
                    </p>
                    <p className="text-[15px] md:text-[17px] pt-4 opacity-80  text-white leading-8">
                    Fully understanding the cause of the blockage is useful as it not only enables us to fix the problem but can also help prevent it from reoccurring. We don&apos;t just focus on an immediate fix, we can deliver drain unblocking solutions that safeguard the longevity of your drains. Our local drain unblockers will unblock the drain as well as advise on the best practice moving forward to help you avoid the same problem.
There are many reasons why drainage systems become blocked and then require a drain clearance, and at LgeePlumb-All, we&apos;ve seen it all  from household waste build-ups to the most unusual artefacts obstructing pipes!
                  <br/>
Common Causes of Drainage Problems
                        <br />
                        <span className="text-blue-800 px-3 font-bold pt-5"> - </span>  Blocked Gully<br />
                        <span className="text-blue-800 px-3 font-bold"> - </span>Damaged & Broken Pipes<br />
                        <span className="text-blue-800 px-3 font-bold"> - </span> Tree Root Ingress<br />
                        <span className="text-blue-800 px-3 font-bold"> - </span> Household Waste Clogging Drains<br />
                        <span className="text-blue-800 px-3 font-bold"> - </span>Guaranteed solar heating products & workmanship.
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
                Unblocking Your Drain
                </h3>

                <p className="text-slate-400 mt-[1rem]  md:text-[17px] px-[.5rem] pb-[2rem]  leading-9">
                After determining the underlying issue of a clogged drain pipe, your neighborhood drain unblocking plumber will recommend the most effective solution for drain clearance. Utilizing cutting-edge technology, our expertly trained drain unblocking professionals are available 24/7 for emergency services or scheduled visits. We assure you that our drain cleaning 
                service has the expertise to resolve any issue you may encounter.
                   
                </p>

                <h3 className="font-Poppins text-xl md:text-2xl pt-5 opacity-80  text-white font-semibold">
                Blocked Drain Pipe? Call the Drain Clearance Experts
                </h3>



                <p className="text-slate-400 mt-[1rem]  md:text-[17px] px-[.5rem] pb-[2rem]  leading-9">
                Regrettably, a clogged drain will not resolve itself, and without proper drain service, the issue could potentially escalate. The symptoms of the problem will not only intensify, but the procedure to rectify it may become more intricate the longer it remains unresolved.
                🛠️💧<br />
                    <br />
                
Our community drain unblocker and drain clearance experts are available around the clock, all year round, delivering prompt and proficient drain unblocking solutions. As your neighborhood drain cleaning firm, our drain cleaning services cater to both residential and commercial needs.
                   

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
                            To prevent a geyser burst and the consequent damage to your home, consider having a professional qualified plumber service your geyser at least every three to four years. All you need to do is **contact The Geyser Connection**, and we&apos;ll handle all the technical aspects you&apos;d rather not deal with. That&apos;s what we&apos;re here for! 🛠️🔧¹.


                            <br />
                            <br />
                            Our skilled team can assess what&apos;s best for your property and deliver prompt service, allowing you to resume your daily routine. We provide a broad array of top-notch geysers, designed to accommodate various homes and lifestyles. Your part is simply to choose one, and we can have it delivered and installed at your place within the day.

                        </p>

                        <ButtonCallToAction />
                    </div>


                </div>
            </div>


        </div>
    )
}
