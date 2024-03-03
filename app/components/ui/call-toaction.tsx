"use client";
import React from "react";
import { Boxes } from "./background-boxes";
import { cn } from "../utils/cn";


export function BackgroundBoxesCallToAction() {
  return (
    <div className="relative py-[3rem] w-full mx-auto overflow-hidden bg-slate-900 flex flex-col align-center items-center justify-center">
      <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

      <Boxes />
      <h1 className={cn("md:text-4xl text-xl text-white relative pb-5 z-20")}>
        Stop Wasting Money on Business Listings
      </h1>
      <p className="text-center text-2xl mt-2 text-blue-400 relative z-20">
        Congratulations on taking the first step in growing your business.
      </p> 
      <p className="text-center text-[17px] mt-2 text-slate-300 leading-9  relative px-[2rem] pt-3 z-20">
        We specialize in helping Plumbing, roofing, Med Spa and HVAC companies easily get 
        more qualified plumbing jobs, as well as close more high value customers. 
         Our proven online marketing strategies specifically developed for Plumbing ,roofing
         and HVAC owners will take their businesses to the next level.  Stop wasting your 
         time and money on tired old strategies which no longer work or dealing with marketing
          agencies who DON’T know the Plumbing, roofing & HVAC space.  Let us focus on your marketing and getting you 
        more customers while you focus on operating your business.
      </p>
      <button className="bg-slate-800 no-underline group cursor-pointer mt-5 relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6  text-white inline-block">
      <span className="absolute inset-0 overflow-hidden rounded-full">
        <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      </span>
      <div className="relative flex space-x-2  items-center z-10 rounded-full bg-zinc-950 py-4 px-8 ring-1 ring-white/10 ">
        <span  className="text-[16px]">
        I want More Leads
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
    </div>
  );
}
