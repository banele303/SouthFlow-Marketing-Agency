"use client";
import "../globals.css";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { HiBars3 } from "react-icons/hi2";
import { HiOutlineXMark } from "react-icons/hi2";
import { HiMiniBars3 } from "react-icons/hi2";

import Link from "next/link";
import {
  HoveredLink,
  Menu,
  MenuItem,
  ProductItem,
} from "../components/ui/navbar-menu";
import { cn } from "../components/utils/cn";
import { BackgroundBeams } from "./ui/background-beams";





export default function NavbarTwo ({ className }: { className?: string }) {
  
    const [active, setActive] = useState<string | null>(null);
    const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div>
      <div>
        <div
          className={
            scrolled
              ? "scrolled w-screen h-[80px] z-10  fixed drop-shadow-lg pt-[2rem] dark:bg-white bg-black  dark:bg-dot-black/[0.2] bg-dot-white/[0.2] pb-[2rem]"
              : " w-screen h-[80px] z-50  fixed drop-shadow-lg pt-[3rem] "
          }
        >
          <div className="px-2 flex justify-between items-center w-full h-full">
            <div className="flex items-center pl-6 realtive  md:pl-[4rem]">
              <Image
                src="/sectiona.png"
                alt="logo image"
                className="py-[1rem] absolute w-[22rem] h-[7rem]"
                width={200}
                height={50}
              />
            </div>
            <div className="hidden md:flex pr-4">


            <Menu setActive={setActive} >
        <MenuItem setActive={setActive} active={active} item="About Us">
          <div  className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/web-dev">Web Development</HoveredLink>
            <HoveredLink href="/interface-design">Interface Design</HoveredLink>
            <HoveredLink href="/seo">Search Engine Optimization</HoveredLink>
            <HoveredLink href="/branding">Branding</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Industries">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/web-dev">Web Development</HoveredLink>
            <HoveredLink href="/interface-design">Interface Design</HoveredLink>
            <HoveredLink href="/seo">Search Engine Optimization</HoveredLink>
            <HoveredLink href="/branding">Branding</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Mission">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/web-dev">Web Development</HoveredLink>
            <HoveredLink href="/interface-design">Interface Design</HoveredLink>
            <HoveredLink href="/seo">Search Engine Optimization</HoveredLink>
            <HoveredLink href="/branding">Branding</HoveredLink>
          </div>
        </MenuItem>
       
        <MenuItem setActive={setActive} active={active} item="Book A Call">
        </MenuItem>
      </Menu>



       {/*       <ul className="hidden md:flex ">
                <li className="md:ml-3 py-3  text-[19px] font-Poppins  px-6  border-5 border-sky-900 cursor-pointer text-white  font-bold">
                  <Link href="/">Home</Link>
                </li>
                <li className="md:ml-3 py-3 px-6 border-5 border-sky-900  text-[19px] font-Poppins cursor-pointer text-white font-bold">
                  <Link href="/gym">GYMS</Link>
                </li>
                <li className="md:ml-3 py-3 px-6 border-5 border-sky-900  text-[19px] font-Poppins cursor-pointer text-white font-bold">
                  <Link href="/about-us">About Us</Link>
                </li>
        </ul> */}
            </div>
            <div className="md:hidden flex items-center">
              <button
                onClick={handleClick}
                className="outline-none mobile-menu-button"
              >
                {nav ? (
                  <HiOutlineXMark className="h-6 w-6 text-white" />
                ) : (
                  <HiMiniBars3 className="h-6 w-6 text-white" />
                )}
              </button>
            </div>
          </div>
        </div>
        <div
          className={
            nav
              ? "mobile-menu flex flex-col items-center justify-center bg-sky-900 text-white h-screen w-screen fixed top-0 left-0 z-50"
              : "hidden"
          }
        >
          
      <Menu setActive={setActive} >
        <MenuItem setActive={setActive} active={active} item="About Us">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/web-dev">Web Development</HoveredLink>
            <HoveredLink href="/interface-design">Interface Design</HoveredLink>
            <HoveredLink href="/seo">Search Engine Optimization</HoveredLink>
            <HoveredLink href="/branding">Branding</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Industries">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/web-dev">Web Development</HoveredLink>
            <HoveredLink href="/interface-design">Interface Design</HoveredLink>
            <HoveredLink href="/seo">Search Engine Optimization</HoveredLink>
            <HoveredLink href="/branding">Branding</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Mision">
          <div className="  text-sm grid grid-cols-2 gap-10 p-4">
            <ProductItem
              title="Algochurn"
              href="https://algochurn.com"
              src="https://res.cloudinary.com/algochurn/image/upload/v1700109138/framer%20motion%20components/290shots_so_gruelx.png"
              description="Prepare for tech interviews like never before."
            />
            <ProductItem
              title="Tailwind Master Kit"
              href="https://tailwindmasterkit.com"
              src="https://res.cloudinary.com/algochurn/image/upload/v1700109138/framer%20motion%20components/155shots_so_acab66.png"
              description="Production ready Tailwind css components for your next project"
            />
            <ProductItem
              title="Moonbeam"
              href="https://gomoonbeam.com"
              src="https://res.cloudinary.com/algochurn/image/upload/v1700109138/framer%20motion%20components/53shots_so_wygjpf.png"
              description="Never write from scratch again. Go from idea to blog in minutes."
            />
            <ProductItem
              title="Rogue"
              href="https://userogue.com"
              src="https://res.cloudinary.com/algochurn/image/upload/v1700109139/framer%20motion%20components/356shots_so_hwpzvs.png"
              description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
            />
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Book A Call">
          <div className="flex flex-col space-y-4 text-sm md:text-md ">
            <HoveredLink href="/hobby">Hobby</HoveredLink>
            <HoveredLink href="/individual">Individual</HoveredLink>
            <HoveredLink href="/team">Team</HoveredLink>
            <HoveredLink href="/enterprise">Enterprise</HoveredLink>
          </div>
        </MenuItem>
      </Menu>
        </div>
      </div>
     
    </div>
  );
}
