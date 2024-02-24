"use client";

// components/OurStory.js

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import "../globals.css";
import { useInView } from "react-intersection-observer";

export default function OurStory () {
  const [ref, inView] = useInView({
    triggerOnce: false,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={{ opacity: inView ? 1 : 0 }}
      className="flex flex-col md:flex-row custom-negative-z-index gap-8 pt-[4rem]  pb-[24rem] md:py-[5rem] px-[1rem]"
    >
     

      {/* Right Section */}
      <motion.div
        initial={{ y: 200 }}
        animate={{ y: inView ? 0 : 200 }}
        transition={{
          duration: 2,
          delay: 1,
          type: "spring",
          stiffness: 200,
          damping: 20,
        }}
        className="w-full flex flex-col justify-center items-center md:w-1/2 md:pl-8 px-[.5rem] md:px-[2rem]"
      >
        <motion.h2 className="text-[17px] md:text-[25px] font-bold mb-7 pt-[4rem] text-center text-blue-500">
        SEE HOW MANY LEADS WE HAVE IN YOUR AREA
        </motion.h2>
        <motion.p className="text-18 md:text-[24px] text-center text-gray-300 leading-9">
        <strong>Our Marketplace generates over 2,000,000 Phone Call Leads Across the United States each month.</strong>
          <br />
          <br />
          See how many we generated in your area last month!
        </motion.p>

        <button className="bg-slate-800 mt-[2rem] mx-auto no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6  text-white inline-block">
              <span className="absolute inset-0 overflow-hidden rounded-full">
                <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </span>
              <div className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-4 px-8 ring-1 ring-white/10 ">
                <span className="text-[16px] mx-auto text-center">
                  I WANT  ESTIMATE OF LEADS IN MY AREA
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
      </motion.div>
 {/* Left Section */}
 <motion.div
            className="container mx-auto md:mt-[10rem] h-[500px] w-[300px] rounded-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <Image
              src="/leads.png" // the image file should be in the public folder
              alt="southflow marketing agency no contract no set up fee"
              width={300} // the original image width
              height={400} // the original image height
              layout="responsive" // this will make the image responsive
              quality={75}
              className="rounded-md " // this will reduce the image size and improve performance
            />
          </motion.div>
      
    </motion.div>
  );
};

