"use client";

import React from "react";
import Image from "next/image";
import { BookCallAppointment } from "../components/ui/form";
import { ButtonCallToAction } from "../components/ui/button-call-to-action";


export default function CustomerSetisfication() {
    return (
        <div className="px-[2rem] py-[3rem]">
            <h3 className="font-Poppins text-center text-2xl md:text-3xl pt-[1rem] leading-9 text-slate-900 md:px-[6rem]">
                We Strive For Customer&apos;s Satisfaction
            </h3>

            <p className="text-slate-700 mt-[1rem]  md:text-[17px] px-[.5rem] pb-[2rem]  leading-9 md:px-[5rem]">
                Our goal is to offer 100% customer satisfaction every time we operate. Our service objective is to reach all clients no matter the timeline, not leaving their properties vulnerable. In addition, we provide immediate feedback across all touchpoints.
       
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                <div>
                    <h3 className="text-2xl md:text-3xl pt-[1rem] leading-9 text-slate-800 pt-[4rem]">
                        ABOUT US
                    </h3>

                    <p className="text-slate-700 mt-[1rem]  md:text-[17px] px-[.5rem] pb-[2rem]  leading-9">
Gotcha Plumbing is a locally owned and operated plumbing business in the Pretoria, Sandton and Johanesburg North. It started as a dependable, reliable and friendly way to get your service work done.
                        <br />
                        That’s our approach to an industry leading plumbing service.  <br/><br/>
                         🛠️💧
                    </p>
<div className="max-w-[22rem]">
<ButtonCallToAction/></div>

                </div>

                <div>
                    <h3 className="font-Poppins text-2xl md:text-3xl pt-[1rem] leading-9 text-white">
                        CONTACT US
                    </h3>

                    <BookCallAppointment />
                </div>


            </div>

        </div>
    );
}
