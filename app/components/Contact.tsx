"use client";

import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    if (sectionRef.current) {
      gsap.fromTo(
        sectionRef.current,
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        },
      );
    }
  }, []);

  return (
    <section ref={sectionRef} className="bg-black text-white py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Get More Customers?
          </h2>
          <p className="text-lg text-gray-400 mb-6">
            Let&apos;s chat about your business. No sales pitch, no pressure, just honest advice
            on how to get your phone ringing with real jobs.
          </p>
          <p className="text-md text-gray-500 mb-12">
            Email us directly at{" "}
            <a href="mailto:Support@buzzboldmarketing.com" className="text-orange-500 hover:text-orange-400 font-semibold">
              Support@buzzboldmarketing.com
            </a>
          </p>
        </div>
        <div className="max-w-xl mx-auto">
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label
                  htmlFor="name"
                  className="text-sm font-semibold text-gray-400"
                >
                  Full Name
                </Label>
                <Input
                  type="text"
                  id="name"
                  placeholder="John Doe"
                  className="bg-gray-900/50 border-2 border-gray-800 rounded-lg p-3 focus:border-red-500 transition-colors"
                />
              </div>
              <div className="space-y-2">
                <Label
                  htmlFor="email"
                  className="text-sm font-semibold text-gray-400"
                >
                  Email Address
                </Label>
                <Input
                  type="email"
                  id="email"
                  placeholder="your.email@example.com"
                  className="bg-gray-900/50 border-2 border-gray-800 rounded-lg p-3 focus:border-red-500 transition-colors"
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label
                htmlFor="message"
                className="text-sm font-semibold text-gray-400"
              >
                Your Message
              </Label>
              <Textarea
                id="message"
                placeholder="Tell us about your project..."
                rows={6}
                className="bg-gray-900/50 border-2 border-gray-800 rounded-lg p-3 focus:border-red-500 transition-colors"
              />
            </div>
            <div className="text-center">
              <Button
                type="submit"
                size="lg"
                className="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-10 rounded-full shadow-lg transform hover:scale-105 transition-transform duration-300"
              >
                Send Message
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
