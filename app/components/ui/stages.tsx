import React from "react";

export function Stages() {
  return (
   
 <div className="h-[6rem] w-full dark:bg-white bg-black  dark:bg-dot-black/[0.2] bg-dot-white/[0.2] relative flex items-center justify-between px-[2rem] md:px-[10rem]">
      {/* Radial gradient for the container to give a faded look */}
      <div className="flex flex row pt-3 absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-white bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,white)]"></div>
      <div className="text-[18px] flex flex-row justify-center  sm:text-xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-2">
      <div className="bg-green-500 text-white rounded-full p-2 mb-2 inline-block text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
          </div> <span className="pt-3 px-3">
          GENERATE MORE LEADS
          </span>
      </div>
      <div className="flex flex row pt-3 absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-white bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,white)]"></div>
      <div className="text-[18px] flex flex-row justify-center  sm:text-xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-2">
      <div className="bg-yellow-500 text-white rounded-full p-2 mb-2 inline-block text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
          </div> <span className="pt-3 px-3">
          BOOK MORE APPOINTMENTS
          </span>
      </div>
      <div className="flex flex row pt-3 absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-white bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,white)]"></div>
      <div className="text-[18px] flex flex-row justify-center  sm:text-xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-2">
      <div className="bg-blue-500 text-white rounded-full p-2 mb-2 inline-block text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
          </div> <span className="pt-3 px-3">
          CLOSE MORE SALES
          </span>
      </div>
    
    
    </div>
   
   
  );
}
