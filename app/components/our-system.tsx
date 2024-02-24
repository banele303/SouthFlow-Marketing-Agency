"use client";
import React from "react";

import Image from "next/image";

import { TracingBeam } from "./ui/tracing-beam";
import { twMerge } from "tailwind-merge";

export function OurSytemem() {
  return (
    <TracingBeam className="">
      <div className="max-w-2xl mx-auto antialiased pt-4 relative ">
      <p className="text-2xl md:text-4xl pb-[4rem] text-center text-blue-800 font-bold relative z-20 bg-clip-text  bg-gradient-to-b from-neutral-200 to-neutral-500 pt-8">
     This Is How our system works
      </p>
        {dummyContent.map((item, index) => (
          <div key={`content-${index}`} className="mb-10">
          

            <p className={twMerge("text-2xl mb-4 text-center font-bold")}><span className="bg-blue-800 m-2 px-[1rem] py-[.6rem] rounded-full">{item.number}</span>{item.title}</p>

            <div className="text-sm  prose prose-sm dark:prose-invert">
              {item?.image && (
                <div className="container  mx-auto h-[25rem] w-[30rem]">
                  <Image
                    src={item.image}
                    alt="blog thumbnail"
                    height="400"
                    width="500"
                    layout="responsive"
                    quality={75}
                    className="rounded-lg mb-10 "
                  />
                </div>
              )}
              {item.description}
            </div>
          </div>
        ))}
      </div>
    </TracingBeam>
  );
}

const dummyContent = [
  {
    title: "We'll Drive Exclusive Leads to You",
    description: (
      <>
        <p className="text-[16px] md:text-[18px] opacity-80 leading-8">
        For service businesses, the phone still represents the preferred method of communication for potential customers. But these days, your customers are everywhere. It’s a full-time job trying to manage dozens upon dozens of marketing channels, track results, shift budget, etc.
        </p>
       
      </>
    ),
  
    image: "/leads-two.png",
    number: "1"
  },
  {
    title: "Tell Us How Much You Want to Pay for Leads",
    description: (
      <>
        <p className="text-[16px] md:text-[18px] opacity-80 leading-8">
        How much is a lead worth? We&apos;ve been doing this for over 15 years, and one thing we know for sure is the value of a lead depends on a company&apos;s ability to take that lead and turn it into revenue.
        </p>
      </>
    ),
  
    image: "/ppc.png",
    number: "2"
  },
  {
    title: "Well Drive Exclusive Leads to You",
    description: (
      <>
        <p className="text-[16px] md:text-[18px] opacity-80 leading-8">
        For service businesses, the phone still represents the preferred method of communication for potential customers. But these days, your customers are everywhere. It’s a full-time job trying to manage dozens upon dozens of marketing channels, track results, shift budget, etc.
        </p>
      </>
    ),
  
    image: "/stats-two.png",
    number: "3"
  },
  {
    title: "You Track Your ROI",
    description: (
      <>
        <p className="text-[16px] md:text-[18px] opacity-80 leading-8">
        Gone are the days you could write a check for a phone book ad once a year and then forget about your marketing expenses. These days, you need to be tracking everything you do and you need to be making informed decisions based on accurate data.
        </p>
      </>
    ),
  
    image: "/stats.png",
    number: "4"
  },
];
