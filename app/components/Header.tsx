"use client";

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

const Header = () => {
  const headerRef = useRef(null);

  useEffect(() => {
    gsap.to(headerRef.current, {
      backgroundColor: "rgba(0, 0, 0, 0.8)",
      scrollTrigger: {
        trigger: "body",
        start: "top top",
        end: "top top",
        toggleActions: "play none none reverse"
      }
    });
  }, []);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, target: string) => {
    e.preventDefault();
    gsap.to(window, { duration: 1, scrollTo: target });
  };

  return (
    <header ref={headerRef} className="fixed top-0 left-0 w-full bg-transparent text-white p-4 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold text-red-500">BuzzBold</div>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <a 
                  href="#home" 
                  onClick={(e) => handleScroll(e, "#home")} 
                  className="hover:text-red-500 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Home
                </a>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <a 
                  href="#services" 
                  onClick={(e) => handleScroll(e, "#services")} 
                  className="hover:text-red-500 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Services
                </a>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <a 
                  href="#portfolio" 
                  onClick={(e) => handleScroll(e, "#portfolio")} 
                  className="hover:text-red-500 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Portfolio
                </a>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <a 
                  href="#contact" 
                  onClick={(e) => handleScroll(e, "#contact")} 
                  className="hover:text-red-500 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Contact
                </a>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </header>
  );
};

export default Header;