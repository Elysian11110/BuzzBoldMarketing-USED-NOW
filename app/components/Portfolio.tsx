
"use client";
import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Portfolio = () => {
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
    <section ref={sectionRef} className="bg-black text-white py-20">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Our Work</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div ref={el => cardsRef.current[0] = el} className="bg-white text-black rounded-lg">
            <Image src="https://via.placeholder.com/600x400" alt="Project 1" width={600} height={400} className="rounded-t-lg" />
            <div className="p-8">
              <h3 className="text-2xl font-bold text-red-500 mb-4">Project 1</h3>
              <p>A bold and beautiful website for a leading tech company.</p>
            </div>
          </div>
          <div ref={el => cardsRef.current[1] = el} className="bg-white text-black rounded-lg">
            <Image src="https://via.placeholder.com/600x400" alt="Project 2" width={600} height={400} className="rounded-t-lg" />
            <div className="p-8">
              <h3 className="text-2xl font-bold text-red-500 mb-4">Project 2</h3>
              <p>A stunning brand identity for a new startup.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
