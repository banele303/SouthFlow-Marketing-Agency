"use client";

import React, { useState, useEffect } from "react";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default  function PlumberHero () {
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
        src="plumber-bg.png"
      fill
        objectFit="cover"
       
        className="w-full h-[90vh]  md:h-[100vh]"
        alt="Gym hero image"
      />
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <motion.div
        initial={{ y: -200, opacity: 0 }}
        animate={{
          y: 200,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{ duration: 2, spring: 250 }} // Replaced "spring" with "easeInOut"
        className="text-center text-white"
      >
        <h1 className="text-4xl font-bold  md:py-[3rem] text-center md:text-6xl lg:text-7xl">
          Welcome to our <span className="text-blue-500">Plumbing Company</span>
        </h1>
      </motion.div>
      
    </motion.div>
  );
}

