

"use client";
// Import necessary components and styles
import { Fragment } from 'react';
import { BackgroundGradient } from '../about-us/ui/background-gradient';
import Image from "next/image";


import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";



const cardsData = [
  {

    title: 'General Plumbing',
    description: 'I have the experience to help keep your plumbing system running smoothly. I offer the highest quality customer service and will treat your home or commercial space as if it were my own. There is no problem I cant handle - form a leaking tap to a burst geyser. I will take care of it swiftly and neatly',
  },
  {

    title: 'Leak Detection',
    description: 'Is something in your place not working right, such as having water where it doesnt belong? Leak Detection issues can be tricky and expensive to solve. Finding out where the problem is before it causes excessive damage is something Ive mastered. Let me help you, before the problem gets any worse!',
  },
  {

    title: 'General Maintenance',
    description: 'In addition to being a qualified plumber, I have also renovated a few homes by myself. So if you have some building or maintenance to do around the house, and you just dont have the time or energy to get to it, give me a call and I will help you get it done!, We do all the plumbing you need fast and realible',
  },
  {

    title: 'Drain Cleaning',
    description: 'Youre a busy person — dont let plumbing problems get in your way. There are a plethora of reasons problems can occur, and Gotcha Plumbing and Leak Detection has the proper equipment and experience to locate, repair and/or replace the issue quickly and effectively. Call me to take care of your Drain Cleaning needs today.',
  },
  {

    title: 'Geyser Installation & Repair',
    description: 'There are view things worse than getting home and seeing tell-tale signs of a burst geyser...water everywhere, wet floors and droopy ceilings. That is where I come in! Give me a call and I will be there in a flash to help you remove the old geyser and install a brand new one. Or if you notice your water temperature is a bit low or too high, I will sort that out with ease!',
  },
];

export default function AllServices() {
  return (
    <section className="py-12 z-20 dark:bg-white bg-black  dark:bg-dot-black/[0.2] bg-dot-white/[0.2]">

      <h2 className="text-[20px] text-center md:text-[40px] text-white font-bold mb-[3rem]">We Cover All Of Your  <span className="text-[#1976d2]">Plumbing Needs</span> </h2>
      <h2 className="text-[16px] text-center md:text-[20px] text-white font-bold mb-[3rem]">We give you the control and flexibility to grow your business, your way.</h2>

      <div className="container mx-auto ">
        <div className="grid grid-cols-1 md:grid-cols-3 z-20 gap-8 px-[2rem]">
          {cardsData.map((card, index) => (
            <Fragment key={index}>
              <BackgroundGradient className="rounded-[22px] max-w-sm  sm:p-10 bg-black ">
                <div className="rounded-lg  shadow-md px-6 md:px-0">
                  <div className="flex  mb-4 pt-7">
                  <motion.div
            className="container  h-[100px] w-[100px] px-4 md:px-1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <Image
              src="/plumber/crossedplumber.png" // the image file should be in the public folder
              alt="southflow marketing agency you control your cost"
              width={50} // the original image width
              height={50} // the original image height
              layout="responsive" // this will make the image responsive
              quality={75} 
              className="r"// this will reduce the image size and improve performance
            />
          </motion.div>
   

    
    </div>
                  <h3 className="text-xl text-slate-300 font-semibold mb-2">{card.title}</h3>
                    <p className="text-slate-400 text-[16px] pb-5">{card.description}</p>
                  </div>
              </BackgroundGradient>

            </Fragment>
          ))}
        </div>
      </div>

    </section>

  );
};


