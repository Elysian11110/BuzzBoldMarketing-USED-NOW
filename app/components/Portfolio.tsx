"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/button";
import { ExternalLink, ArrowUpRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const portfolioItems = [
  {
    id: 1,
    title: "TechVision Rebrand",
    category: "Branding",
    imageUrl:
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop",
    description:
      "Complete brand identity overhaul for a Fortune 500 tech company",
    results: "300% increase in brand recognition",
    gradient: "from-orange-500 to-red-500",
  },
  {
    id: 2,
    title: "EcoCommerce Platform",
    category: "Web Design",
    imageUrl:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    description: "Award-winning e-commerce platform with sustainable focus",
    results: "150% conversion rate improvement",
    gradient: "from-green-500 to-teal-500",
  },
  {
    id: 3,
    title: "FinanceFlow Campaign",
    category: "Marketing",
    imageUrl:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    description: "Multi-channel marketing campaign for fintech startup",
    results: "$5M in new customer acquisition",
    gradient: "from-blue-500 to-indigo-500",
  },
  {
    id: 4,
    title: "HealthPlus Identity",
    category: "Branding",
    imageUrl:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=600&fit=crop",
    description: "Modern brand identity for healthcare innovation leader",
    results: "90% positive brand sentiment",
    gradient: "from-pink-500 to-purple-500",
  },
  {
    id: 5,
    title: "StartupHub Website",
    category: "Web Design",
    imageUrl:
      "https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&h=600&fit=crop",
    description: "Dynamic web platform for startup ecosystem",
    results: "500K+ monthly active users",
    gradient: "from-yellow-500 to-orange-500",
  },
  {
    id: 6,
    title: "GrowthLabs Launch",
    category: "Marketing",
    imageUrl:
      "https://images.unsplash.com/photo-1553484771-371a605b060b?w=800&h=600&fit=crop",
    description: "Product launch campaign reaching 10M+ impressions",
    results: "250% ROI in first quarter",
    gradient: "from-red-500 to-pink-500",
  },
];

const Portfolio = () => {
  const [filter, setFilter] = useState("All");
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const itemsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        },
      );

      // Items animation
      itemsRef.current.forEach((item, index) => {
        gsap.fromTo(
          item,
          {
            opacity: 0,
            scale: 0.8,
            y: 100,
          },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 0.8,
            ease: "back.out(1.2)",
            scrollTrigger: {
              trigger: item,
              start: "top 90%",
              toggleActions: "play none none none",
            },
            delay: (index % 3) * 0.1,
          },
        );
      });
    });

    return () => ctx.revert();
  }, [filter]);

  const categories = ["All", "Branding", "Web Design", "Marketing"];
  const filteredItems =
    filter === "All"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === filter);

  return (
    <section
      ref={sectionRef}
      className="section-padding bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />
      <div className="blur-gradient-red top-0 left-0" />
      <div className="blur-gradient-orange bottom-0 right-0" />

      <div className="container mx-auto container-padding relative z-10">
        {/* Section header */}
        <div ref={titleRef} className="text-center mb-12 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">
            Our <span className="gradient-text">Portfolio</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-400">
            Explore our latest work and see how we&apos;ve helped brands achieve
            remarkable results through innovative marketing strategies.
          </p>
        </div>

        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((category) => (
            <Button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                filter === category
                  ? "bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 text-white shadow-lg scale-105"
                  : "bg-gray-800/50 text-gray-400 hover:bg-gray-800 hover:text-white border border-gray-700"
              }`}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Portfolio grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              ref={(el) => {
                if (el) itemsRef.current[index] = el;
              }}
              className="group relative"
            >
              <div className="relative overflow-hidden rounded-2xl shadow-2xl h-[400px] bg-gray-900">
                {/* Image */}
                <div className="absolute inset-0">
                  <Image
                    src={item.imageUrl}
                    alt={item.title}
                    fill
                    className="object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-500" />
                </div>

                {/* Content overlay */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end z-10">
                  {/* Category badge */}
                  <div className="mb-4">
                    <span
                      className={`inline-block px-4 py-1 rounded-full text-sm font-bold bg-gradient-to-r ${item.gradient} text-white shadow-lg`}
                    >
                      {item.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 transform group-hover:translate-y-0 translate-y-2 transition-transform duration-300">
                    {item.title}
                  </h3>

                  {/* Description - shows on hover */}
                  <p className="text-gray-300 mb-2 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-75">
                    {item.description}
                  </p>

                  {/* Results - shows on hover */}
                  <p className="text-sm font-semibold gradient-text opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-100 mb-4">
                    {item.results}
                  </p>

                  {/* View project button - shows on hover */}
                  <div className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-150">
                    <button className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black font-bold hover:bg-gray-200 transition-colors">
                      View Project
                      <ArrowUpRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Animated border on hover */}
                <div
                  className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${item.gradient} blur-xl opacity-50`}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <div className="max-w-2xl mx-auto mb-8">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Create Your Success Story?
            </h3>
            <p className="text-gray-400 text-lg">
              Let&apos;s collaborate to build something extraordinary that
              drives real business results.
            </p>
          </div>
          <button
            onClick={() => {
              const element = document.querySelector("#contact");
              if (element) {
                element.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="px-10 py-5 rounded-full bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 text-white font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 inline-flex items-center gap-2"
          >
            Start Your Project
            <ExternalLink className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
