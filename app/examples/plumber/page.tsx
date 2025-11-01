"use client";

import React from "react";
import { Phone, Mail, MapPin, Clock, CheckCircle, Shield, Wrench } from "lucide-react";
import Link from "next/link";

const PlumberExample = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white">
      {/* Header explaining this is an example */}
      <div className="bg-gradient-to-r from-orange-600/20 via-red-600/20 to-pink-600/20 border-b border-white/10 backdrop-blur-sm py-8">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-black mb-4">
            This is an example of what we can build for you
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-6">
            Want a site like this for your business? Get in touch
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:02012345678"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              <Phone className="w-5 h-5" />
              Call Now: 020 1234 5678
            </a>
            <button
              onClick={() => {
                window.location.href = "/#contact";
              }}
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 text-white font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              <Mail className="w-5 h-5" />
              Get Your Free Audit
            </button>
          </div>
        </div>
      </div>

      {/* Plumber Website Preview */}
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section Example */}
        <div className="relative bg-gradient-to-br from-blue-900/50 to-cyan-900/50 border-2 border-blue-500/30 rounded-3xl p-8 md:p-16 mb-16 overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.05)_1px,transparent_1px)] bg-[size:50px_50px]" />

          <div className="relative z-10 text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/20 backdrop-blur-sm border border-blue-400/30 mb-6">
              <Shield className="w-4 h-4 text-blue-400" />
              <span className="text-sm font-medium text-blue-300">
                Licensed & Insured
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6">
              24/7 Emergency <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Plumbing</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Fast, Reliable Service in Your Area
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <button className="px-10 py-5 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold text-xl hover:shadow-2xl hover:scale-105 transition-all duration-300">
                <Phone className="inline-block w-6 h-6 mr-2" />
                Call Now: 020 1234 5678
              </button>
              <button className="px-10 py-5 rounded-full bg-white/10 backdrop-blur-sm border-2 border-white/20 text-white font-bold text-xl hover:bg-white/20 transition-all duration-300">
                Request Free Quote
              </button>
            </div>

            {/* Trust badges */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <div className="flex items-center justify-center gap-3 p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
                <CheckCircle className="w-6 h-6 text-blue-400" />
                <span className="font-semibold">Same-Day Service</span>
              </div>
              <div className="flex items-center justify-center gap-3 p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
                <CheckCircle className="w-6 h-6 text-blue-400" />
                <span className="font-semibold">Fixed Price Guarantee</span>
              </div>
              <div className="flex items-center justify-center gap-3 p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
                <CheckCircle className="w-6 h-6 text-blue-400" />
                <span className="font-semibold">12-Month Warranty</span>
              </div>
            </div>
          </div>
        </div>

        {/* Services Section Example */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-center mb-12">
            Our <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Plumbing Services</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Emergency Repairs", desc: "24/7 emergency callout service" },
              { title: "Boiler Installation", desc: "New boiler fitting & servicing" },
              { title: "Leak Detection", desc: "Fast leak finding & repair" },
              { title: "Bathroom Fitting", desc: "Complete bathroom renovations" },
              { title: "Drain Unblocking", desc: "Professional drain clearing" },
              { title: "Gas Safety Checks", desc: "Certified gas inspections" },
            ].map((service, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-gradient-to-br from-gray-900/90 to-gray-900/50 border-2 border-gray-800 hover:border-blue-500/50 transition-all duration-300"
              >
                <Wrench className="w-8 h-8 text-blue-400 mb-4" />
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-400">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Section Example */}
        <div className="bg-gradient-to-r from-blue-600/10 via-cyan-600/10 to-blue-600/10 border border-blue-500/20 rounded-3xl p-8 md:p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-black mb-4">
            Need a <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Plumber?</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Call us now for fast, reliable service across London
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
            <div className="flex items-center gap-3 text-lg">
              <Phone className="w-6 h-6 text-blue-400" />
              <span className="font-bold">020 1234 5678</span>
            </div>
            <div className="flex items-center gap-3 text-lg">
              <Clock className="w-6 h-6 text-blue-400" />
              <span>Available 24/7</span>
            </div>
            <div className="flex items-center gap-3 text-lg">
              <MapPin className="w-6 h-6 text-blue-400" />
              <span>Covering All London</span>
            </div>
          </div>

          <button className="px-10 py-5 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold text-xl hover:shadow-2xl hover:scale-105 transition-all duration-300">
            Book Your Service Now
          </button>
        </div>
      </div>

      {/* Bottom CTA to get in touch with BuzzBold */}
      <div className="border-t border-white/10 bg-gradient-to-r from-orange-600/10 via-red-600/10 to-pink-600/10 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-black mb-4">
            Love this design? <span className="bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 bg-clip-text text-transparent">We'll build it for you.</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            This is just one example. We create custom, conversion-focused websites for UK tradesmen.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:02012345678"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              <Phone className="w-5 h-5" />
              Call: 020 1234 5678
            </a>
            <button
              onClick={() => {
                window.location.href = "/#contact";
              }}
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 text-white font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              <Mail className="w-5 h-5" />
              Get Your Free Website Audit
            </button>
          </div>
        </div>
      </div>

      {/* Back to homepage link */}
      <div className="container mx-auto px-4 py-8 text-center">
        <Link
          href="/"
          className="text-gray-400 hover:text-white transition-colors inline-flex items-center gap-2"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Homepage
        </Link>
      </div>
    </div>
  );
};

export default PlumberExample;
