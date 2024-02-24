

"use client";
// Import necessary components and styles
import { Fragment } from 'react';

import OurStory from './our-story';
import { BackgroundGradient } from './ui/background-gradient';



const cardsData = [
  {
  
    title: 'Lead Volume',
    description: 'The more you are willing to spend, the more Leads we can get your business and wide are you work in the more',
  },
  {
   
    title: 'Service Area',
    description: 'More competitive areas of the country command higher Lead prices and low competitive Area command low',
  },
  {
  
    title: 'Service Category',
    description: 'The greater the value of a new customer is, the more expensive it is to get a Lead and if the lead is valuble is cheap so is the lead',
  },
];

export default function  CheckLeads () {
  return (
    <section className="py-12 z-20 dark:bg-white bg-black  dark:bg-dot-black/[0.2] bg-dot-white/[0.2]">
     
          <h2 className="text-[20px] text-center md:text-[40px] text-white font-bold mb-[3rem]">HOW MUCH WILL I PAY FOR <span className="text-[#1976d2]">LEADS? YOUR </span> </h2>
          <h2 className="text-[16px] text-center md:text-[20px] text-white font-bold mb-[3rem]">We give you the control and flexibility to grow your business, your way.</h2>
     
      <div className="container mx-auto ">
        <div className="grid grid-cols-1 md:grid-cols-3 z-20 gap-8 px-[2rem]">
          {cardsData.map((card, index) => (
            <Fragment key={index}>
                 <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-black ">
                 <div className="rounded-lg p-6 shadow-md">
                <div className="flex  mb-4">
                <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="blue"
              className="w-10 h-10"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
                </div>
                <h3 className="text-xl text-slate-300 font-semibold mb-2">{card.title}</h3>
                <p className="text-slate-400 text-[18px]">{card.description}</p>
              </div>
                 </BackgroundGradient>
             
            </Fragment>
          ))}
        </div>
      </div>
      <OurStory/>
    </section>
    
  );
};


