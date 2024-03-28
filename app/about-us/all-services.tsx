"use client"

import { motion } from "framer-motion";
import Image from "next/image";


export default function AllServices() {

    return (
        <div className="dark:bg-white bg-black  dark:bg-dot-black/[0.2] bg-dot-white/[0.2] px-[2rem] md:px-[4rem]">
            <h3 className="text-center font-Poppins text-2xl md:text-5xl pt-[8rem] leading-9 text-white font-bold">
                Gotcha Plumbing Services
            </h3>
           
           
           
           
           
            <div className="grid grid-cols-1 md:grid-cols-2 gap-9">
                <motion.div
                    className="container mx-auto  h-[50vh] w-full mt-8 md:mt-[6rem] rounded-md"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    <Image
                        src="/heroplumber.png" // the image file should be in the public folder
                        alt="southflow marketing agency no contract no set up fee"
                        width={300} // the original image width
                        height={400} // the original image height
                        layout="responsive" // this will make the image responsive
                        quality={95}
                        className="rounded-md " // this will reduce the image size and improve performance
                    />
                </motion.div>
                 <div className="mt-[-9rem] md:mt-[4rem]">
                    <h3 className="font-Poppins text-2xl md:text-3xl pt-[1rem] leading-9 text-white">
                        Elite Emergency Plumbers
                    </h3>
                    <p className="text-slate-300 mt-[1rem]  md:text-[17px] px-[.5rem] pb-[2rem]  leading-9">
                        When you require emergency services, it&apos;s crucial to ensure that the emergency plumber you call is

                        capable of handling the task. Our extensive experience in assisting distressed customers equips us to manage plumbing emergencies effectively. We swiftly diagnose issues and possess the necessary tools and expertise to promptly address your problems.
                        <br />

                        To prevent additional damage and costly repairs, it&apos;s essential to
                        address plumbing emergencies promptly. Whether it&apos;s a gas leak or an
                        overflowing toilet, our Elite Emergency Plumbers can efficiently and safely
                        resolve the issue, minimizing any further harm. 🛠️💧
                    </p>
                </div>
            </div>




               
               
               
               
               
               
               
               
               
               
               
                <div className="grid grid-cols-1 md:grid-cols-2 gap-9">
            <div className="mt-[4rem]">
                    <h3 className="font-Poppins text-2xl md:text-3xl pt-[1rem] leading-9 text-white">
                    Geyser Installation & Repair
                    </h3>
                    <p className="text-slate-300 mt-[1rem]  md:text-[17px] px-[.5rem] pb-[2rem]  leading-9">
                    There&apos;s nothing quite like the peace of mind that comes with knowing you have a reliable and efficient geyser in your home. But when things go wrong, it can be a real headache. That&apos;s where I come in! 

Whether you&apos;re dealing with the aftermath of a burst geyser or struggling with inconsistent water temperatures, I&apos;m here to help. With my expertise and quick response time, I can remove your old geyser and install a brand new one, ensuring you have access to hot water when you need it. 
<br/>

But my services don&apos;t stop there. I also offer routine maintenance and checks to ensure your geyser is running at its best. This includes adjusting the temperature settings to suit your needs, checking for any potential issues, and making necessary repairs before they become major problems. 

So why wait? Give me a call today and let me take the stress out of your geyser troubles. With my help, you can rest easy knowing your geyser is in good hands.🛠️💧
                    </p>
                </div>
 <motion.div
                    className="container mx-auto  h-[40vh] w-full md:w-3/4 mt-8 md:mt-[9rem] rounded-md"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    <Image
                        src="/img/geyser.jpeg" // the image file should be in the public folder
                        alt="southflow marketing agency no contract no set up fee"
                        width={300} // the original image width
                        height={400} // the original image height
                        layout="responsive" // this will make the image responsive
                        quality={95}
                        className="rounded-md " // this will reduce the image size and improve performance
                    />
                </motion.div>







            </div>







            <div className="grid grid-cols-1 md:grid-cols-2 gap-9 mt-[10rem] md:mt-0">
 <div className="mt-[4rem]">
                    <h3 className="font-Poppins text-2xl md:text-3xl pt-[1rem] leading-9 text-white">
                        BLOCKED DRAINS
                    </h3>
                    <p className="text-slate-300 mt-[1rem]  md:text-[17px] px-[.5rem] pb-[2rem]  leading-9">
                        Blocked drains and pipes present an unpleasant odour which usually lingers in and around your house. Some common symptoms include:
                        <br />
                        water rising in the toilet when you flush it
                        <br />
                        water pooling or bubbling in showers and bath drains
                        <br /><br />
                        Our plumbers use their many years of experience in dealing with blocked drains to assist you with this problem🛠️💧
                    </p>
                </div>
  <motion.div
                    className="container mx-auto  h-[40vh] w-full md:w-3/4 mt-3 md:mt-[6rem] rounded-md"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    <Image
                        src="/img/drainage.jpeg" // the image file should be in the public folder
                        alt="southflow marketing agency no contract no set up fee"
                        width={300} // the original image width
                        height={400} // the original image height
                        layout="responsive" // this will make the image responsive
                        quality={95}
                        className="rounded-md " // this will reduce the image size and improve performance
                    />
                </motion.div>
            </div>




           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
            <div className="grid grid-cols-1 md:grid-cols-2 gap-9 mt-[7rem]">
                 <div className="mt-[4rem]">
                    <h3 className="font-Poppins text-2xl md:text-3xl pt-[1rem] leading-9 text-white">
                        Same-Day Sewer Cleaning
                    </h3>
                    <p className="text-slate-300 mt-[1rem]  md:text-[17px] px-[.5rem] pb-[2rem]  leading-9">
                        When we discuss your sewers and drains, it’s easy to confuse their functions,
                        let alone keep their jobs straight in your mind. While they are both responsible
                        for removing wastewater from your home, they also connect your home to the public sewer
                        <br /> <br />
                        system. It’s important
                        to take care of your drains and sewer lines because when they are clean and reliable,
                        they keep your home waste removal system hygienic and safe.

                        A drainpipe functions to take water away from your plumbing fixtures. Drainpipes remove anything from moderately clean water to filthy wastewater. The level of contaminants in the water determines whether water is clean or dirty. Sewer cleaning services are required when the fluids and materials that go down your drain leave behind residue, grim, and dirt byproducts.
                        🛠️💧
                    </p>
                </div>



                <motion.div
                    className="container mx-auto  h-[20vh] w-full w-3/4 mt-8 md:mt-[6rem] rounded-md"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    <Image
                        src="/img/sewer.jpeg" // the image file should be in the public folder
                        alt="southflow marketing agency no contract no set up fee"
                        width={300} // the original image width
                        height={400} // the original image height
                        layout="responsive" // this will make the image responsive
                        quality={95}
                        className="rounded-md " // this will reduce the image size and improve performance
                    />
                </motion.div>

            </div>










            <div className="w-full h-[280px]  md:h-[400px] rounded-b-[10%]">

            </div>

            <div className="flex flex-col justify-center px-4  md:px-[4rem]">
                <button className="bg-slate-800 no-underline group md:w-[26rem] my-[6rem]  md:mt-[-10rem] items-center mx-auto cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6 text-white inline-block">
                    <span className="absolute inset-0 overflow-hidden rounded-full">
                        <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                    </span>
                    <div className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-4 px-4 ring-1 ring-white/10 ">
                        <span className="text-[16px] mx-auto text-center">
                            Get A FREE QUOTE
                        </span>
                        <svg
                            fill="none"
                            height="16"
                            viewBox="0 0 24 24"
                            width="16"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M10.75 8.75L14.25 12L10.75 15.25"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="1.5"
                            />
                        </svg>
                    </div>
                    <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
                </button>
              

               
            </div>
        </div>
    )
}
