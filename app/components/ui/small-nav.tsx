"use client";
import React, { useState } from "react";
import { Menu2, MenuItem2,HoveredLink2 } from "../ui/smallnavbar-menu";
import { cn } from "../utils/cn";


export  function SmallNavbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-0 inset-x-0 max-w-full  z-50", className)}
    >
     
      <Menu2 setActive={setActive} >
        <MenuItem2 setActive={setActive} active={active} item="Menu">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink2 href="/web-dev">Web Development</HoveredLink2>
            <HoveredLink2 href="/interface-design">Interface Design</HoveredLink2>
            <HoveredLink2 href="/seo">Search Engine </HoveredLink2>
            <HoveredLink2 href="/branding">Branding</HoveredLink2>
          </div>
        </MenuItem2>
      
      </Menu2>
    </div>
  );
}
