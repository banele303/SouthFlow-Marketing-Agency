import React from "react";

export function PayPerLead() {
  return (
   
 <div className="w-full dark:bg-white bg-black py-[5rem]  dark:bg-dot-black/[0.2] bg-dot-white/[0.2] relative flex flex-col items-center justify-center px-[2rem] md:px-[10rem]">
      {/* Radial gradient for the container to give a faded look */}
      <div className="flex flex row gap-15 absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-white bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,white)]"></div>
      <p className="text-2xl md:text-4xl text-blue-800 font-bold relative z-20 bg-clip-text  bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
      HERE&apos;S WHAT OUR PAY PER CALL CLIENTS ARE SAYING
      </p>
      <p className="text-[18px] sm:text-xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-2">
       With any marketing service, success should be measured in Rands.
      </p>
    
    <div className="flex flex-row justify-center items-center gap-20">
       <div className="flex flex-col">
       <p className="text-6xl pt-2 text-blue-800 font-extrabold relative z-20 bg-clip-text  bg-gradient-to-b from-neutral-200 to-neutral-500 py-2">
       9.5X
      </p>
       <p className="text-[16px] sm:text-xl  text-blue-400 relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 pt-4 ">
       Average Return On <br/> Investment
      </p>
       </div>
       <div className="flex flex-col">
       <p className="text-[68px] text-blue-800  font-extrabold  relative z-20 bg-clip-text  bg-gradient-to-b from-neutral-200 to-neutral-500 py-2">
       32
      </p>
       <p className="text-[16px] sm:text-xl text-blue-400  relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 ">
       Average Leads Delivered <br/> per Month
      </p>
       </div>
       <div className="flex flex-col">
       <p className="text-[68px]  text-blue-800 font-extrabold relative z-20 bg-clip-text  bg-gradient-to-b from-neutral-200 to-neutral-500 py-2">
       84%
      </p>
       <p className="text-[16px] sm:text-xl  relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500">
       Average Appointment <br/>Rate on Leads
      </p>
       </div>
       
    </div>

    </div>
   
   
  );
}
