"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Card } from "@/components/ui/card";
import { ArrowRight, Globe, Target, TrendingUp, MessageSquare } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          scrollTrigger: { trigger: titleRef.current, start: "top 85%" },
        },
      );

      cardsRef.current.forEach((card, index) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: "power3.out",
            scrollTrigger: { trigger: card, start: "top 85%" },
            delay: index * 0.08,
          },
        );
      });
    });

    return () => ctx.revert();
  }, []);

  const services = [
    {
      icon: <Globe className="h-6 w-6 text-orange-300" />,
      title: "Website design & build",
      copy: [
        "Conversion-first site architecture and copywriting",
        "Responsive Next.js build optimised for speed",
        "Launch-ready asset library and CMS handover",
      ],
    },
    {
      icon: <Target className="h-6 w-6 text-orange-300" />,
      title: "Local SEO foundations",
      copy: [
        "Technical audit and on-page optimisation",
        "Google Business Profile clean-up and growth plan",
        "Review engine and citation management",
      ],
    },
    {
      icon: <TrendingUp className="h-6 w-6 text-orange-300" />,
      title: "Always-on optimisation",
      copy: [
        "Landing page and funnel experiments",
        "Monthly performance reviews with action steps",
        "Dashboards that highlight the numbers that matter",
      ],
    },
    {
      icon: <MessageSquare className="h-6 w-6 text-orange-300" />,
      title: "Content & campaign support",
      copy: [
        "Launch calendars and campaign playbooks",
        "Social and email assets ready to publish",
        "Paid boosts to keep visibility consistent",
      ],
    },
  ];

  return (
    <section ref={sectionRef} className="section-padding border-t border-white/5 bg-[#05070f]">
      <div className="container mx-auto container-padding">
        <div ref={titleRef} className="mx-auto mb-14 max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-400">Services</p>
          <h2 className="mt-4 text-4xl font-black text-white md:text-5xl">
            A focused team covering the essentials.
          </h2>
          <p className="mt-4 text-base text-gray-400 md:text-lg">
            Pick a single engagement or combine them for momentum. Either way you get clear deliverables and the same
            senior team driving execution.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <Card
              key={service.title}
              ref={(el) => {
                if (el) cardsRef.current[index] = el;
              }}
              className="surface-card flex h-full flex-col gap-4 p-6 transition-transform duration-200 hover:-translate-y-1 hover:border-orange-400/50"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/5">{service.icon}</div>
              <h3 className="mt-5 text-xl font-semibold text-white">{service.title}</h3>
              <ul className="mt-5 space-y-3 text-sm text-gray-300">
                {service.copy.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-orange-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="mb-5 text-sm text-gray-400 md:text-base">Not sure what mix you need? Let&apos;s map it out.</p>
          <button
            onClick={() => {
              const element = document.querySelector("#contact");
              if (element) {
                element.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="inline-flex items-center gap-2 rounded-full bg-orange-500 px-8 py-3 font-semibold text-black transition-transform duration-200 hover:-translate-y-1 hover:bg-orange-400"
          >
            Book a strategy call
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
