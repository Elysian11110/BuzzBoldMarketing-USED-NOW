
"use client";
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const cards = cardsRef.current;
    cards.forEach((card, index) => {
      gsap.fromTo(card, 
        { opacity: 0, y: 50 }, 
        {
          opacity: 1, 
          y: 0, 
          duration: 1, 
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none none"
          }
        }
      );
    });
  }, []);

  return (
    <section ref={sectionRef} className="bg-white text-black py-20">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div ref={el => cardsRef.current[0] = el} className="bg-black text-white p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-red-500 mb-4">Branding</h3>
            <p>We build bold brands that stand out from the crowd. We help you define your identity, your voice, and your story.</p>
          </div>
          <div ref={el => cardsRef.current[1] = el} className="bg-black text-white p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-red-500 mb-4">Marketing</h3>
            <p>We create marketing strategies that get results. We use data and creativity to reach your target audience and grow your business.</p>
          </div>
          <div ref={el => cardsRef.current[2] = el} className="bg-black text-white p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-red-500 mb-4">Web Design</h3>
            <p>We design and build beautiful and functional websites. We create user-friendly experiences that convert visitors into customers.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
