"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";

export default function NewHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      if (scrollTop > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = (target: string) => {
    const element = document.querySelector(target);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { label: "Home", target: "#home" },
    { label: "Services", target: "#services" },
    { label: "Example Work", target: "#examples" },
    { label: "Our Process", target: "#portfolio" },
    { label: "Contact", target: "#contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 z-50 w-full border-b border-white/10 transition-all duration-300 ${
          isScrolled ? "bg-[#05070f]/95 backdrop-blur" : "bg-[#05070f]/85"
        }`}
      >
        <div className="container mx-auto flex items-center justify-between px-4 py-4 md:px-6">
          <button
            type="button"
            onClick={() => handleScroll("#home")}
            className="flex items-center gap-2 text-left text-slate-200 transition-transform duration-200 hover:-translate-y-0.5"
          >
            <Logo size={28} className="shrink-0" />
            <div className="flex flex-col leading-tight">
              <span className="text-sm font-semibold uppercase tracking-[0.32em] text-orange-400">BuzzBold</span>
              <span className="text-base font-semibold text-slate-100 md:text-lg">Marketing</span>
            </div>
          </button>

          <NavigationMenu className="hidden lg:block">
            <NavigationMenuList className="flex gap-2">
              {navItems.map((item) => (
                <NavigationMenuItem key={item.label}>
                  <NavigationMenuLink
                    className="group relative rounded-full px-5 py-2 text-sm font-medium text-slate-300 transition-colors duration-200 hover:bg-white/8 hover:text-white"
                    onClick={() => handleScroll(item.target)}
                  >
                    {item.label}
                    <span className="absolute bottom-1 left-1/2 h-0.5 w-0 -translate-x-1/2 rounded-full bg-orange-400 transition-all duration-200 group-hover:w-1/2" />
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          <div className="hidden items-center gap-3 lg:flex">
            <Button onClick={() => handleScroll("#contact")} className="btn-primary px-5 py-3 text-sm">
              Talk to our team
            </Button>
            <a
              href="tel:02012345678"
              className="flex items-center gap-2 rounded-full border border-white/12 px-5 py-3 text-sm font-semibold text-slate-200 transition-colors duration-200 hover:border-orange-400/60 hover:text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
              020 1234 5678
            </a>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="rounded-lg p-2 text-slate-200 transition-colors hover:bg-white/10 lg:hidden"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-40 transition-all duration-300 lg:hidden ${
          isMobileMenuOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <div className="absolute inset-0 bg-[#05070f]/90 backdrop-blur" onClick={() => setIsMobileMenuOpen(false)} />

        <div className="relative flex h-full flex-col items-center justify-center gap-10 px-8 py-12">
          <nav className="flex flex-col items-center gap-4 text-center">
            {navItems.map((item, index) => (
              <button
                key={item.label}
                onClick={() => handleScroll(item.target)}
                className={`text-2xl font-semibold text-slate-200 transition-transform duration-200 hover:-translate-y-1 hover:text-white ${
                  isMobileMenuOpen ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
                }`}
                style={{ transitionDelay: isMobileMenuOpen ? `${index * 80}ms` : "0ms" }}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <Button onClick={() => handleScroll("#contact")} size="lg" className="btn-primary px-8 py-3 text-base">
            Book a strategy call
          </Button>
        </div>
      </div>
    </>
  );
}
