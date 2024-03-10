import Image from "next/image";
import { BookCallAppointment } from "../components/ui/form";

export default function WelcomeBlockedDrains() {

    return (
        <div className="dark:bg-white bg-black  pt-[5rem] md:pt-[1px] dark:bg-dot-black/[0.2] bg-dot-white/[0.2] px-[2rem] ">

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-[8rem] md:pl-[3rem] md:h-[580px]">
                <div>


                    <h1 className="font-Poppins text-2xl md:text-3xl pt-[1rem] md:pt-[3rem] leading-9 text-white font-bold">

                    Drain Unblocking

                    </h1>

                    <p className="font-Poppins text-xl md:text-2xl pt-9 opacity-80  text-white font-semibold">
                        THE Unblocking Drains PLUMBERS
                    </p>


                    <div className="flex flex-col justify-start mt-6 px-4 md:px-[4rem] ml-[-1rem] md:ml-[-4rem]">
                        <button className="bg-orange-500 no-underline group w-[16rem]   cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6 text-white inline-block">
                            <span className="absolute inset-0 overflow-hidden rounded-full">
                                <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                            </span>
                            <div className="relative flex space-x-2 items-center z-10 rounded-full bg-orange-600 py-4 px-4 ring-1 ring-white/10">
                                <span className="text-[19px] text-center pl-4">
                                    REQUEST SERVICE
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
                                        stroke="orange"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="1.5"
                                    />
                                </svg>
                            </div>
                            <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-yellow-400/0 via-yellow-400/90 to-yellow-400/0 transition-opacity duration-500 group-hover:opacity-40" />
                        </button>
                    </div>
                    <p className="font-Poppins text-xl md:text-2xl pt-8 opacity-80  text-white font-semibold">
                        24 Hours A Day. 7 Days A Week.
                    </p>

                </div>



                <div>
                    <div
                        className="container mx-auto md:h-[500px] md:mt-[-6rem]"

                    >
                        <BookCallAppointment />
                    </div>
                </div>

            </div>

        </div>
    )
}