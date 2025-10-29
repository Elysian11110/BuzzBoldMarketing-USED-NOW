"use client";

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TrendingUp, Award, Users, Rocket } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const Stats = () => {
  const sectionRef = useRef(null);
  const statsRef = useRef<HTMLDivElement[]>([]);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const animateCounters = () => {
      statsRef.current.forEach((stat) => {
        const counter = stat.querySelector(".counter");
        if (counter) {
          const target = parseInt(counter.getAttribute("data-target") || "0");
          const suffix = counter.getAttribute("data-suffix") || "";
          const duration = 2000;
          const increment = target / (duration / 16);
          let current = 0;

          const updateCounter = () => {
            current += increment;
            if (current < target) {
              counter.textContent = Math.floor(current) + suffix;
              requestAnimationFrame(updateCounter);
            } else {
              counter.textContent = target + suffix;
            }
          };

          updateCounter();
        }
      });
    };

    const ctx = gsap.context(() => {
      // Animate stats on scroll
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top 70%",
        onEnter: () => {
          if (!hasAnimated) {
            animateCounters();
            setHasAnimated(true);
          }
        },
      });

      // Stagger animation for stat cards
      gsap.fromTo(
        statsRef.current,
        {
          opacity: 0,
          y: 100,
          scale: 0.8,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "back.out(1.4)",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            toggleActions: "play none none none",
          },
        },
      );
    });

    return () => ctx.revert();
  }, [hasAnimated]);

  const stats = [
    {
      icon: <Users className="w-8 h-8" />,
      value: 500,
      suffix: "+",
      label: "Happy Clients",
      description: "Brands we've helped succeed",
      gradient: "from-orange-500 to-red-500",
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      value: 250,
      suffix: "%",
      label: "Average ROI",
      description: "Growth for our clients",
      gradient: "from-red-500 to-pink-500",
    },
    {
      icon: <Award className="w-8 h-8" />,
      value: 50,
      suffix: "+",
      label: "Industry Awards",
      description: "Recognition for excellence",
      gradient: "from-pink-500 to-purple-500",
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      value: 1000,
      suffix: "+",
      label: "Campaigns Launched",
      description: "Successful projects delivered",
      gradient: "from-purple-500 to-indigo-500",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="section-padding bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />
      <div className="blur-gradient-red top-1/2 left-1/4" />
      <div className="blur-gradient-pink top-1/2 right-1/4" />

      <div className="container mx-auto container-padding relative z-10">
        {/* Section header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">
            Results That <span className="gradient-text">Speak Volumes</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-400">
            Numbers don&apos;t lie. Here&apos;s the impact we&apos;ve made for
            brands across the globe.
          </p>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              ref={(el) => {
                if (el) statsRef.current[index] = el;
              }}
              className="group relative"
            >
              <div className="h-full p-8 rounded-2xl bg-gradient-to-br from-gray-900/90 to-gray-900/50 border-2 border-gray-800 backdrop-blur-sm hover:border-transparent transition-all duration-500 relative overflow-hidden">
                {/* Gradient overlay on hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                />

                {/* Animated glow on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${stat.gradient} blur-2xl opacity-30`}
                  />
                </div>

                <div className="relative z-10">
                  {/* Icon */}
                  <div
                    className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${stat.gradient} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    {stat.icon}
                  </div>

                  {/* Counter */}
                  <div className="mb-2">
                    <span
                      className="counter text-5xl md:text-6xl font-black gradient-text block"
                      data-target={stat.value}
                      data-suffix={stat.suffix}
                    >
                      0{stat.suffix}
                    </span>
                  </div>

                  {/* Label */}
                  <h3 className="text-xl font-bold text-white mb-2">
                    {stat.label}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 text-sm">{stat.description}</p>
                </div>

                {/* Decorative corner */}
                <div className="absolute top-0 right-0 w-20 h-20 opacity-10 group-hover:opacity-20 transition-opacity">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} transform rotate-45 translate-x-10 -translate-y-10`}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom text */}
        <div className="mt-16 text-center">
          <p className="text-gray-500 text-sm max-w-2xl mx-auto">
            These metrics represent real results from our partnerships with
            leading brands. Your success story could be next.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Stats;
