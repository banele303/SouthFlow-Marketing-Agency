
"use client"

import { motion } from "framer-motion";
import Image from "next/image";


export default function OwnerInfor() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-9 dark:bg-white bg-black  dark:bg-dot-black/[0.2] bg-dot-white/[0.2] px-[2rem]">

            <div className="mt-[4rem]">
                <h3 className="font-Poppins text-2xl md:text-3xl pt-[1rem] leading-9 text-white">
                    Ferdi Owner of Burgeon  Plumbing
                </h3>
                <p className="text-slate-300 mt-[1rem]  md:text-[17px] px-[.5rem] pb-[2rem]  leading-9">

                    My name is Ferdi and I&apos;ve been providing my services for almost 9 years, and in those years I’ve seen it all. From minor leaks to major mishaps in both residential and commercial properties, I can fix all your plumbing problems and more!


                    <br />
                    <br />
                    Burgeon  Plumbing is a full-service professional plumbing service. I&apos;ve created longstanding, trusting relationships with clients throughout South Africa.

                    🛠️💧
                </p>
            </div>
            <motion.div
                className="container mx-auto  h-[50vh] w-full mt-8 md:mt-[6rem] rounded-md"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <Image
                    src="/owner-image.png" // the image file should be in the public folder
                    alt="southflow marketing agency no contract no set up fee"
                    width={300} // the original image width
                    height={400} // the original image height
                    layout="responsive" // this will make the image responsive
                    quality={100}
                    className="rounded-md " // this will reduce the image size and improve performance
                />
            </motion.div>

        </div>
    );
}
