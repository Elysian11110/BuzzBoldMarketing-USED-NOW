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
          const duration = 1400;
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

      gsap.fromTo(
        statsRef.current,
        { opacity: 0, y: 45 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power3.out",
          stagger: 0.12,
          scrollTrigger: { trigger: sectionRef.current, start: "top 75%" },
        },
      );
    });

    return () => ctx.revert();
  }, [hasAnimated]);

  const stats = [
    {
      icon: <Users className="h-6 w-6 text-orange-300" />,
      value: 120,
      suffix: "+",
      label: "Trades businesses supported",
      description: "Plumbers, electricians, builders, HVAC, and landscaping teams.",
    },
    {
      icon: <TrendingUp className="h-6 w-6 text-orange-300" />,
      value: 3,
      suffix: "x",
      label: "Average pipeline uplift",
      description: "Measured across launch + 90 day optimisation windows.",
    },
    {
      icon: <Award className="h-6 w-6 text-orange-300" />,
      value: 7,
      suffix: "d",
      label: "Typical go-live timeframe",
      description: "From kick-off workshop to polished public launch.",
    },
    {
      icon: <Rocket className="h-6 w-6 text-orange-300" />,
      value: 98,
      suffix: "%",
      label: "Client satisfaction rating",
      description: "Based on quarterly NPS-style feedback across retainers.",
    },
  ];

  return (
    <section ref={sectionRef} className="section-padding border-t border-white/5 bg-[#05070f]">
      <div className="container mx-auto container-padding">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-400">Proof points</p>
          <h2 className="mt-4 text-4xl font-black text-white md:text-5xl">What working with BuzzBold looks like.</h2>
          <p className="mt-4 text-base text-gray-400 md:text-lg">
            The numbers we track to make sure your website and marketing stack are pushing growth—not adding clutter.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              ref={(el) => {
                if (el) statsRef.current[index] = el;
              }}
              className="surface-card flex h-full flex-col gap-4 p-6 transition-transform duration-200 hover:-translate-y-1 hover:border-orange-400/40"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/5">{stat.icon}</div>
              <div>
                <span className="counter text-4xl font-semibold text-white md:text-5xl" data-target={stat.value} data-suffix={stat.suffix}>
                  0{stat.suffix}
                </span>
              </div>
              <h3 className="text-lg font-semibold text-white">{stat.label}</h3>
              <p className="text-sm text-gray-300">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
