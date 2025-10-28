
"use client";
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true
      }
    });

    tl.to(titleRef.current, { y: -100 }, 0);
    tl.to(subtitleRef.current, { y: -150 }, 0);

    const fadeInTl = gsap.timeline();
    fadeInTl.fromTo(titleRef.current, { opacity: 0, y: -50 }, { opacity: 1, y: 0, duration: 1 });
    fadeInTl.fromTo(subtitleRef.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1 }, "-=0.5");

  }, []);

  return (
    <section ref={heroRef} className="bg-black text-white h-screen flex items-center justify-center relative overflow-hidden">
      <div className="text-center z-10">
        <h1 ref={titleRef} className="text-6xl font-bold text-red-500">BuzzBold</h1>
        <p ref={subtitleRef} className="text-2xl mt-4">We build bold brands.</p>
      </div>
      <div className="absolute top-0 left-0 w-full h-full bg-black z-0" style={{ background: 'url(https://www.transparenttextures.com/patterns/asfalt-dark.png)' }}></div>
    </section>
  );
};

export default Hero;
