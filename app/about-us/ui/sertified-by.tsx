"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function SertifiedBY() {
  return (
    <section>
      <h3 className="text-[18px] md:text-[35px] text-blue-400 text-bold text-center mb-6 py-8">
        We Are Trusted By And Work With
      </h3>
      <div className="grid grid-cols-1 mx-auto md:grid-cols-4 gap-8 px-[2rem] md:px-[4rem]">
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
}
