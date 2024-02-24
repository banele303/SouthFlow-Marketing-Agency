
"use client"

import { LeadCardStack } from "./my-cardstack";
import Image from 'next/image'
import { motion } from 'framer-motion'
export default function LeadVolume() {
    return (
        <section className="flex flex-col w-full dark:bg-black bg-white  dark:bg-dot-white/[0.2] bg-dot-black/[0.2] md:flex-row px-[2rem] justify-center items-center md:px-[5rem]">
            <div>
            <LeadCardStack/>
            </div>
            <motion.div
      className="container mx-auto h-[400px] w-[300px]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Image
        src="/leads.png" // the image file should be in the public folder
        alt="My image"
        width={300} // the original image width
        height={400} // the original image height
        layout="responsive" // this will make the image responsive
        quality={75} // this will reduce the image size and improve performance
      />
    </motion.div>
     </section>
    )
}