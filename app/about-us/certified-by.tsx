"use client";
import { motion } from "framer-motion";
import Image from "next/image";

import React, { useEffect, useState } from "react";
import { cn } from "../components/utils/cn";


export const InfinityCertifiedBy = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: {
    quote: string;
    name: string;
    title: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  }, []);
  const [start, setStart] = useState(false);
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };
  return (
    <section >
    <h3 className="text-[18px] md:text-[35px] text-blue-400 text-bold text-center mb-6 py-8">
      We Are Trusted By And Work With
    </h3>
    <div 
     ref={containerRef}
     className={cn(
       "scroller relative z-20  md:max-w-8xl overflow-hidden  [mask-image:linear-gradient(to_right,transparent,white_10%,white_80%,transparent)] grid grid-cols-1 mx-auto md:grid-cols-4 gap-8 px-[2rem] md:px-[4rem]",
       className
     )}
   >
      <motion.div
        className="container mx-auto  h-[500px] w-[300px] rounded-md"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Image
          src="/verified-by.png" // the image file should be in the public folder
          alt="southflow marketing agency no contract no set up fee"
          width={300} // the original image width
          height={400} // the original image height
          layout="responsive" // this will make the image responsive
          quality={75}
          className="rounded-md " // this will reduce the image size and improve performance
        />
      </motion.div>

      <motion.div
        className="container mx-auto  h-[500px] w-[300px] rounded-md"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Image
          src="/verified-bytree.png" // the image file should be in the public folder
          alt="southflow marketing agency no contract no set up fee"
          width={300} // the original image width
          height={400} // the original image height
          layout="responsive" // this will make the image responsive
          quality={75}
          className="rounded-md " // this will reduce the image size and improve performance
        />
      </motion.div>
      <motion.div
        className="container mx-auto  h-[500px] w-[300px] rounded-md"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Image
          src="/tecknology.png" // the image file should be in the public folder
          alt="southflow marketing agency no contract no set up fee"
          width={300} // the original image width
          height={400} // the original image height
          layout="responsive" // this will make the image responsive
          quality={75}
          className="rounded-md " // this will reduce the image size and improve performance
        />
      </motion.div>
      <motion.div
        className="container mx-auto  h-[500px] w-[300px] rounded-md"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Image
          src="/work-with.png" // the image file should be in the public folder
          alt="southflow marketing agency no contract no set up fee"
          width={300} // the original image width
          height={400} // the original image height
          layout="responsive" // this will make the image responsive
          quality={75}
          className="rounded-md " // this will reduce the image size and improve performance
        />
      </motion.div>
    </div>
  </section>
  );
};
