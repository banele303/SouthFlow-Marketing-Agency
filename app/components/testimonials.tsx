"use client";

import { CardStack } from "./ui/card-stack";
import { AnimatedTooltip } from "./utils/animated-tooltip";
import { cn } from "./utils/cn";

import React from "react";





export function Testimonial() {
  return (
    <div className="flex items-center mt-[5rem] justify-center w-full">
      <CardStack items={CARDS} />

    </div>
  );
}

// Small utility to highlight the content of specific section of a testimonial content
export const Highlight = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <span
      className={cn(
        "font-bold bg-emerald-100 text-emerald-700 dark:bg-emerald-700/[0.2] dark:text-emerald-500 px-1 py-0.5",
        className
      )}
    >
      {children}
    </span>
  );
};

const CARDS = [
  {
    id: 0,
    name: "Anje Claassen",
    designation: "Home Owner",
    content: (
      <p>
        Outstanding service! Gotcha plumbing delivered exceptionally neat work. Highly recommend for
        their professionalism and top-notch results. Five stars!
      </p>
    ),
  },
  {
    id: 1,
    name: "bernardt oschman",
    designation: "Home Owner",
    content: (
      <p className="text-slate-400">
        Excellent Service from Walter and his team from Gotcha.
        Had a vacuum breaker that was leaking and in a difficult angle
        in the roof, they came few minutes
        and the problem was resolved. Thanks for the great service.
      </p>
    ),
  },
  {
    id: 2,
    name: "Annelie Forbes",
    designation: "Home Owner",
    content: (
      <p>
     We have had the good fortune to use the services of Gotcha Plumbing three times during the last month, each time for another plumbing issue.
The company is responsive and responsible and also provides an excellent service at a fair tariff, which is hard to find these days.  

      </p>
    ),
  },
  {
    id: 3,
    name: "Gerrit Loubser",
    designation: "Home Owner",
    content: (
      <p>
    Excellent responsiveness, communication, good value and professional repair done on time! Can highly recommend for all your plumbing needs!
      </p>
    ),
  },
];
