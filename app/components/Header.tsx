
"use client";
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

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
    <header ref={headerRef} className="fixed top-0 left-0 w-full bg-transparent text-white p-4 z-10">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold text-red-500">BuzzBold</div>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#home" onClick={(e) => handleScroll(e, "#home")} className="hover:text-red-500">Home</a></li>
            <li><a href="#services" onClick={(e) => handleScroll(e, "#services")} className="hover:text-red-500">Services</a></li>
            <li><a href="#portfolio" onClick={(e) => handleScroll(e, "#portfolio")} className="hover:text-red-500">Portfolio</a></li>
            <li><a href="#contact" onClick={(e) => handleScroll(e, "#contact")} className="hover:text-red-500">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
