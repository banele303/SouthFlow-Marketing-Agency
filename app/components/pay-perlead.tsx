"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

const content = [
  {
    title: "We’ll Drive Exclusive Leads to You",
    description:
      "For service businesses, the phone still represents the preferred method of communication for potential customers. But these days, your customers are everywhere. It’s a full-time job trying to manage dozens upon dozens of marketing channels, track results, shift budget, etc.",
  },
  {
    title: "Tell Us How Much You Want to Pay for Leads",
    description:
      "How much is a lead worth? We’ve been doing this for over 15 years, and one thing we know for sure is the value of a lead depends on a company’s ability to take that lead and turn it into revenue.",
  },
  {
    title: "We&apos;ll Drive Exclusive Leads to You",
    description:
      "For service businesses, the phone still represents the preferred method of communication for potential customers. But these days, your customers are everywhere. It’s a full-time job trying to manage dozens upon dozens of marketing channels, track results, shift budget, etc.",
  },
  {
    title: "You Track Your ROI",
    description:
      "Gone are the days you could write a check for a phone book ad once a year and then forget about your marketing expenses. These days, you need to be tracking everything you do and you need to be making informed decisions based on accurate data.",
  },
];
export function StickyScrollRevealPayPerLead() {
  return (
    <div className="">
      <StickyScroll content={content} />
    </div>
  );
}
