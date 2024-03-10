"use client";

// components/OurStory.js

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import "../globals.css";
import { useInView } from "react-intersection-observer";
import { Testimonial } from "./testimonials";
import { BookCallAppointment } from "./ui/form";

export default function TestimonialSection () {
  const [ref, inView] = useInView({
    triggerOnce: false,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={{ opacity: inView ? 1 : 0 }}
      className="flex flex-col md:flex-row custom-negative-z-index gap-8 pt-[4rem] justify-center md:py-[5rem] px-[1rem]"
    >
     <div className="w=full md:w-1/2">
        <h3 className="text-blue-500 font-semibold text-2xl md:text-3xl px-[2rem]">THERE&apos;S A REASON WE HAVE
5 STAR REVIEWS!</h3>
        <p className="text-slate-700 pt-5 text-2xl md:text-2xl px-[2rem]">We’re the happiest plumbers in the interior because our customers love our work!
5 STAR REVIEWS!</p>
        <Testimonial/>
        
        </div>

<BookCallAppointment/>
 {/* Left Section */}

      
    </motion.div>
  );
};

