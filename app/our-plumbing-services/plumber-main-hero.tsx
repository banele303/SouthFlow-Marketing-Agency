"use client";

import React, { useState, useEffect } from "react";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

function PlumbingHero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 500);
  }, []);

  return (
    <motion.div
      className="relative w-full z-20 h-[60vh] md:h-[100vh]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5, duration: 1 }}
    >
      <Image
        src="/plumberimg1.png"
      fill
        objectFit="cover"
    
        className="w-full h-full  md:h-[400px]"
        alt="Gym hero image"
      />
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <motion.div
        initial={{ y: 0, opacity: 0 }}
        animate={{
          y: 100,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{ duration: 2, spring: 250 }} // Replaced "spring" with "easeInOut"
        className="text-center text-white"
      >
        <h1 className="text-2xl font-bold pt-[8rem]  text-center md:text-4xl lg:text-5xl">
          Your Best Plumbing Company <span className="text-blue-500">Burgeon Plumbing</span>
        </h1>
     
      </motion.div>

    </motion.div>
  );
}

export default PlumbingHero;
