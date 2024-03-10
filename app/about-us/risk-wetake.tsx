"use client";

import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

export default function RiskWeTake() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: false });
  const [refCards, inViewCards] = useInView({ triggerOnce: false });
  const cardsControls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    }
    if (inViewCards) {
      cardsControls.start({ opacity: 1, y: 0 });
    }
  }, [controls, inView, cardsControls, inViewCards]);

  const parallaxVariants = {
    initial: { opacity: 0, y: -50 },
    animate: { opacity: 1, y: 0 },
  };

  const headingVariants = {
    initial: { y: -100, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  const textVariants = {
    initial: { y: 100, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  const imageVariants = {
    initial: { opacity: 0, scale: 1.2, filter: "brightness(1)" },
    animate: { opacity: 1, scale: 1, filter: "brightness(0.8)" },
  };

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 500);
  }, []);

  return (
    <motion.div
      ref={ref}
      initial="initial"
      animate={inView ? "animate" : "initial"}
      variants={parallaxVariants}
      transition={{ duration: 3, spring: 250 }}
      className="mx-auto mt-16 px-[2rem] md:px-[4rem] mb-[10rem]"
    >
      {/* Top Heading */}
      <motion.h2
        variants={headingVariants}
        transition={{ duration: 3, spring: 250 }}
        className="text-center text-3xl md:text-3xl lg:text-3xl font-semibold text-blue-500"
      >
       QUALIFIED PLUMBER
      </motion.h2>

      {/* Single-Column Section with Cool Animation */}
      <motion.div className="text-center mt-8">
        <motion.p
          variants={headingVariants}
          transition={{ duration: 3, spring: 250 }}
          className="text-[20px] text-gray-600 mb-6"
        >
          Get Quality Plumbing Service
        </motion.p>
        <button className="bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6 text-white inline-block">
          <span className="absolute inset-0 overflow-hidden rounded-full">
            <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          </span>
          <div className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-4 px-4 ring-1 ring-white/10 ">
            <span className="text-[16px] mx-auto text-center">
             get A free Quote
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

      {/* Three-Part Section with Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
        {/* Part 1: Feature 1 */}
        <motion.div
          variants={textVariants}
          transition={{ duration: 2, spring: 250 }}
          className="text-center"
        >
          <motion.div
            className="container mx-auto h-[100px] w-[100px] mb-[7rem]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <Image
              src="/about/tap.png" // the image file should be in the public folder
              alt="southflow marketing agency no contract no set up fee"
              width={100} // the original image width
              height={100} // the original image height
              layout="responsive" // this will make the image responsive
              quality={75} // this will reduce the image size and improve performance
            />
          </motion.div>
          <h3 className="text-lg font-bold text-gray-800 mt-[-4rem] mb-2">
         Get A free quote
          </h3>
          <p className="text-gray-600 text-[17px]">
           Fill the form and tell us more about your services and then will send you a free quote
          </p>
        </motion.div>

        {/* Part 2: Feature 2 */}
        <motion.div
          variants={textVariants}
          transition={{ duration: 2, spring: 250 }}
          className="text-center "
        >
          <motion.div
            className="container mx-auto h-[100px] w-[100px] mb-[7rem]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <Image
              src="/about/cropper.png" // the image file should be in the public folder
              alt="southflow marketing agency you control your cost"
              width={100} // the original image width
              height={100} // the original image height
              layout="responsive" // this will make the image responsive
              quality={95} // this will reduce the image size and improve performance
            />
          </motion.div>
          <h3 className="text-lg font-bold text-gray-800 mt-[-4rem] mb-2">
          Professional Plumbers
          </h3>
          <p className="text-gray-600 text-[17px]">
          We have reliable top notch qualified plumbers for alll your plumbing neeeds around Gauteng
          </p>
        </motion.div>

        {/* Part 3: Feature 3 */}
        <motion.div
          variants={textVariants}
          transition={{ duration: 2, spring: 250 }}
          className="text-center"
        >
          <motion.div
            className="container mx-auto h-[200px] w-[200px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <Image
              src="/about/no-contract.png" // the image file should be in the public folder
              alt="southflow marketing agency no contract image"
              width={300} // the original image width
              height={400} // the original image height
              layout="responsive" // this will make the image responsive
              quality={75} // this will reduce the image size and improve performance
            />
          </motion.div>
          <h3 className="text-lg font-bold text-gray-800 mt-[-4rem] mb-2">
          Reduce your Electricty Bill
          </h3>
          <p className="text-gray-600 text-[17px]">
       By installing solar geyser you will reduce your electricity billl by 38%
          </p>
        </motion.div>

      </div>
    </motion.div>
  );
}
