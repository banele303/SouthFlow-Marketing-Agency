"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "../ui/navbar-menu";
import { cn } from "../utils/cn";
import { ButtonCallToAction } from "./button-call-to-action";
import { SmallButtonCall } from "./button-small";
import Link from 'next/link';
import Logo from "../../our-plumbing-services/ui/Logo";


export  function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed  top-0 inset-x-0 max-w-full bg-red  z-50", className)}
    >
      <div className="flex flex-row md:hidden justify-between pb-4  dark:bg-white bg-black  dark:bg-dot-black/[0.2] bg-dot-white/[0.2]">
      <div className="md:hidden flex flex-start justify-start  pt-4"><Link href="/"><Logo/></Link></div>
      <div className="md:hidden"><SmallButtonCall/></div>
      </div>
     <div className="flex  justify-end items-center md:flex-row ">


     <div className="hidden md:block flex sm:flex-start justify-start md:justify-center md:pr-[1rem] pt-4"><Link href="/"><Logo/></Link></div>
      <div className="mx-auto">
        <Menu setActive={setActive} >
       
        <HoveredLink  href="/about-us"> <MenuItem  setActive={setActive} active={active} item="About"></MenuItem></HoveredLink>
        
        <HoveredLink  href="/our-plumbing-services"> <MenuItem  setActive={setActive} active={active} item="Services"></MenuItem></HoveredLink>
        <HoveredLink  href="/geyser-repair-and-installation"> <MenuItem  setActive={setActive} active={active} item="Geysers"></MenuItem></HoveredLink>
        <HoveredLink  href="/drain-unblocking"> <MenuItem  setActive={setActive} active={active} item="Drain"></MenuItem></HoveredLink>
        
        
    {/*<MenuItem  setActive={setActive} active={active} item="Gysers">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/web-dev">Web Development</HoveredLink>
            <HoveredLink href="/interface-design">Interface Design</HoveredLink>
            <HoveredLink href="/seo">Search Engine Optimization</HoveredLink>
            <HoveredLink href="/branding">Branding</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Services">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/web-dev">Web Development</HoveredLink>
            <HoveredLink href="/interface-design">Interface Design</HoveredLink>
            <HoveredLink href="/seo">Search Engine Optimization</HoveredLink>
            <HoveredLink href="/branding">Branding</HoveredLink>
          </div>
        </MenuItem>  */}    
        
      </Menu></div>
      <div className="hidden md:block"><ButtonCallToAction/></div>
     </div>
      
      
    </div>
  );
}
