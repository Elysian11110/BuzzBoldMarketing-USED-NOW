'use client';

import React, { useState } from 'react';
import { Zap, Phone, Mail, MapPin, Clock, Shield, Award, CheckCircle, AlertTriangle, Star, ChevronDown, ChevronUp, Menu, X, Lightbulb, Home, Wrench, Briefcase, Users, FileText, MessageSquare, ArrowRight, AlertCircle, BadgeCheck, Settings, Sparkles, Building2, Gauge, Plug, Battery, Sun, ThermometerSun, Car, ShoppingBag } from 'lucide-react';

export default function BrightWaveElectricalPage() {
  const [currentPage, setCurrentPage] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    postcode: '',
    service: '',
    message: '',
    isEmergency: false
  });

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your enquiry! We will contact you shortly.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      postcode: '',
      service: '',
      message: '',
      isEmergency: false
    });
  };

  const navigation = [
    { name: 'Home', id: 'home', icon: Home },
    { name: 'Services', id: 'services', icon: Wrench },
    { name: 'About', id: 'about', icon: Users },
    { name: 'Projects', id: 'projects', icon: Briefcase },
    { name: 'Contact', id: 'contact', icon: Phone }
  ];

  const services = [
    {
      title: 'Domestic Repairs',
      icon: Home,
      price: 'From £80',
      description: 'Fast, reliable electrical repairs for your home. We fix sockets, switches, lights, and track down electrical faults quickly and safely.',
      features: [
        'Socket & switch replacement',
        'Light fitting installation',
        'Fault finding & diagnostics',
        'Electrical safety checks',
        'Fuse board repairs',
        'Appliance installation'
      ]
    },
    {
      title: 'Rewires & Upgrades',
      icon: Settings,
      price: 'From £2,500',
      description: 'Complete or partial rewiring services. Upgrade old wiring systems to modern safety standards with new consumer units and circuits.',
      features: [
        'Full house rewires',
        'Partial rewiring',
        'Consumer unit upgrades',
        'New circuit installation',
        'EICR testing & certification',
        'Bringing properties to 18th Edition standards'
      ]
    },
    {
      title: 'Smart Home Solutions',
      icon: Sparkles,
      price: 'From £250',
      description: 'Transform your home with smart electrical systems. From intelligent lighting to EV charging points, we install the latest technology.',
      features: [
        'Smart lighting systems',
        'Smart thermostats',
        'Home automation',
        'EV charging point installation',
        'Smart switches & dimmers',
        'Voice-controlled systems'
      ]
    },
    {
      title: 'Commercial Electrical',
      icon: Building2,
      price: 'Custom Quote',
      description: 'Professional electrical services for businesses. Office fit-outs, testing, maintenance contracts, and emergency commercial repairs.',
      features: [
        'Office electrical fit-outs',
        'PAT testing services',
        'Emergency lighting',
        'Periodic inspection & testing',
        'Maintenance contracts',
        'Commercial installations'
      ]
    }
  ];

  const projects = [
    {
      title: 'Victorian House Full Rewire',
      category: 'Rewire',
      image: 'fuse-board',
      problem: 'Outdated wiring in a 4-bed Victorian property with no RCD protection, failing electrical safety inspection for house sale.',
      solution: 'Complete rewiring over 2 weeks including new consumer unit, LED lighting throughout, and additional sockets in every room.',
      result: 'Property passed EICR with zero defects. New owners delighted with modern electrical system. 2-year workmanship guarantee provided.',
      certification: 'EICR Certificate, Part P Building Regulations Compliance'
    },
    {
      title: 'Smart Home Transformation',
      category: 'Smart Home',
      image: 'smart-lighting',
      problem: 'Homeowner wanted voice-controlled lighting and heating in modern extension but existing wiring incompatible.',
      solution: 'Installed smart lighting circuits, Nest thermostat integration, and voice-activated switches throughout ground floor.',
      result: 'Fully integrated smart home system controllable via phone and voice. Energy consumption reduced by 30%.',
      certification: 'Installation Certificate, Smart System Configuration Documentation'
    },
    {
      title: 'Emergency Consumer Unit Replacement',
      category: 'Emergency',
      image: 'consumer-unit',
      problem: 'Total power failure at 10pm due to failed consumer unit. Family with young children left without electricity or heating.',
      solution: 'Arrived within 45 minutes, diagnosed failed main switch, installed new 18th Edition consumer unit with RCBO protection.',
      result: 'Power restored by midnight. All circuits tested and certified safe. Follow-up inspection booked for next week.',
      certification: 'Emergency Works Certificate, Minor Works Certificate'
    },
    {
      title: 'Office Electrical Fit-Out',
      category: 'Commercial',
      image: 'office-wiring',
      problem: 'New office space needed complete electrical installation including data points, emergency lighting, and three-phase supply for server room.',
      solution: 'Designed and installed full electrical system with 45 workstations, LED panel lighting, emergency lighting, and dedicated IT circuits.',
      result: 'Office fully operational on time and within budget. Passed all commercial electrical testing. 12-month maintenance contract agreed.',
      certification: 'Commercial EICR, Emergency Lighting Certificate, PAT Testing Schedule'
    },
    {
      title: 'EV Charging Point Installation',
      category: 'Smart Home',
      image: 'ev-charger',
      problem: 'Customer purchased electric vehicle but existing garage supply insufficient for home charging point installation.',
      solution: 'Upgraded garage supply with dedicated circuit from consumer unit, installed 7kW smart charging point with app control.',
      result: 'Vehicle charges overnight at low tariff rates. Smart charger tracks energy usage and cost. OZEV grant applied successfully.',
      certification: 'EV Charging Installation Certificate, Building Regulations Compliance'
    }
  ];

  const faqs = [
    {
      question: 'Are you qualified and certified electricians?',
      answer: 'Yes, all our electricians are NICEIC approved contractors and Part P certified. We are fully qualified to 18th Edition wiring regulations and carry £5 million public liability insurance. Every job comes with the appropriate certification.'
    },
    {
      question: 'Do you offer 24/7 emergency electrical services?',
      answer: 'Absolutely. We provide 24-hour emergency callout services 365 days a year. If you have an electrical emergency such as power failure, burning smells, or sparking outlets, call us immediately on 020 1234 5678. Emergency callout from £95.'
    },
    {
      question: 'What areas do you cover?',
      answer: 'We cover all London postcodes and surrounding areas including SW, SE, W, E, N, NW postcodes. We also serve parts of Hertfordshire and Essex. Call us to confirm coverage for your specific postcode.'
    },
    {
      question: 'Do you provide electrical certificates?',
      answer: 'Yes, we provide all necessary certification including EICR (Electrical Installation Condition Report), Minor Works Certificates, and Part P Building Regulations compliance certificates. All work is notified to Building Control as required.'
    },
    {
      question: 'How much does rewiring a house cost?',
      answer: 'A full house rewire typically starts from £2,500 for a small property and can range to £6,000+ for larger homes. The cost depends on property size, number of circuits, and specification. We offer free, no-obligation quotes after a site visit.'
    },
    {
      question: 'Can you install EV charging points?',
      answer: 'Yes, we are qualified EV charging point installers. We install all major brands and can advise on OZEV grant eligibility. Installation includes dedicated circuit, RCD protection, and full certification. Prices from £800 including standard installation.'
    },
    {
      question: 'What is an EICR and do I need one?',
      answer: 'An EICR (Electrical Installation Condition Report) is a safety inspection of your electrical system. Landlords must have one every 5 years by law. Homeowners should have one every 10 years or when buying/selling property. We provide comprehensive EICRs from £180.'
    },
    {
      question: 'Do you offer guarantees on your work?',
      answer: 'Yes, all our electrical work comes with a 2-year workmanship guarantee as standard. We also provide manufacturer warranties on all parts and equipment installed. Our NICEIC approval provides additional consumer protection.'
    }
  ];

  const serviceCoverage = [
    { area: 'Central London', postcodes: 'EC, WC, SW1' },
    { area: 'West London', postcodes: 'W1-W14, TW' },
    { area: 'South West London', postcodes: 'SW2-SW20' },
    { area: 'South East London', postcodes: 'SE1-SE28' },
    { area: 'East London', postcodes: 'E1-E18' },
    { area: 'North London', postcodes: 'N1-N22' },
    { area: 'North West London', postcodes: 'NW1-NW11' },
    { area: 'Hertfordshire', postcodes: 'Selected areas - call to confirm' }
  ];

  const certifications = [
    { name: 'NICEIC Approved Contractor', icon: BadgeCheck },
    { name: 'Part P Certified', icon: Shield },
    { name: '18th Edition BS7671', icon: Award },
    { name: '£5M Public Liability', icon: CheckCircle }
  ];

  const stats = [
    { value: '15+', label: 'Years Experience' },
    { value: '2,500+', label: 'Jobs Completed' },
    { value: '24/7', label: 'Emergency Service' },
    { value: '2 Year', label: 'Guarantee' }
  ];

  const renderHome = () => (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#1E1E1E] via-[#2A2A2A] to-[#1E1E1E] text-white py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#FFA700] rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#0066FF] rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-[#FFA700] rounded-full mb-6">
              <Zap className="w-10 h-10 text-[#1E1E1E]" strokeWidth={2.5} />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              BrightWave Electrical
            </h1>
            <p className="text-xl md:text-2xl mb-4 text-gray-300">
              London's Trusted Electrical Experts
            </p>
            <p className="text-lg mb-8 text-gray-400 max-w-2xl mx-auto">
              NICEIC approved electricians providing safe, reliable electrical services across London. From emergency repairs to complete rewires, smart home installations to commercial projects.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <a href="tel:02012345678" className="bg-[#FFA700] hover:bg-[#FF9500] text-[#1E1E1E] px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform hover:scale-105">
                <Phone className="w-5 h-5" />
                020 1234 5678
              </a>
              <button
                onClick={() => setCurrentPage('contact')}
                className="bg-white hover:bg-gray-100 text-[#1E1E1E] px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center justify-center gap-2 shadow-lg"
              >
                Get Free Quote
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>

            {/* Certifications */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
              {certifications.map((cert, index) => {
                const Icon = cert.icon;
                return (
                  <div key={index} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4 flex flex-col items-center gap-2">
                    <Icon className="w-8 h-8 text-[#FFA700]" />
                    <span className="text-sm font-medium text-center">{cert.name}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-[#FFA700]">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-[#1E1E1E] mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  {stat.value}
                </div>
                <div className="text-[#1E1E1E] font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#1E1E1E] mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Why Choose BrightWave?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Safety-first electrical services from qualified professionals
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 rounded-xl p-8 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-[#FFA700] rounded-full flex items-center justify-center mb-6">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#1E1E1E] mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Safety First
              </h3>
              <p className="text-gray-600 mb-4">
                All work completed to 18th Edition standards with full certification. NICEIC approved and Part P certified for your peace of mind.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-[#FFA700] flex-shrink-0 mt-0.5" />
                  <span>£5M public liability insurance</span>
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-[#FFA700] flex-shrink-0 mt-0.5" />
                  <span>DBS checked engineers</span>
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-[#FFA700] flex-shrink-0 mt-0.5" />
                  <span>Full risk assessments & method statements</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 rounded-xl p-8 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-[#0066FF] rounded-full flex items-center justify-center mb-6">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#1E1E1E] mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Fast Response
              </h3>
              <p className="text-gray-600 mb-4">
                24/7 emergency callout service with rapid response times. We understand electrical emergencies can't wait.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-[#0066FF] flex-shrink-0 mt-0.5" />
                  <span>24-hour emergency service</span>
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-[#0066FF] flex-shrink-0 mt-0.5" />
                  <span>Same-day appointments available</span>
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-[#0066FF] flex-shrink-0 mt-0.5" />
                  <span>Emergency callout from £95</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 rounded-xl p-8 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-[#FFA700] rounded-full flex items-center justify-center mb-6">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#1E1E1E] mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Quality Guaranteed
              </h3>
              <p className="text-gray-600 mb-4">
                Every job backed by our 2-year workmanship guarantee. We take pride in delivering exceptional quality that lasts.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-[#FFA700] flex-shrink-0 mt-0.5" />
                  <span>2-year workmanship guarantee</span>
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-[#FFA700] flex-shrink-0 mt-0.5" />
                  <span>Premium parts & materials</span>
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-[#FFA700] flex-shrink-0 mt-0.5" />
                  <span>Full testing & certification</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#1E1E1E] mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive electrical solutions for homes and businesses
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mb-12">
            {services.slice(0, 4).map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group">
                  <div className="bg-gradient-to-br from-[#1E1E1E] to-[#2A2A2A] p-8 text-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-[#FFA700] transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                    <Icon className="w-12 h-12 text-[#FFA700] group-hover:text-[#1E1E1E] mx-auto mb-4 relative z-10 transition-colors duration-300" />
                    <h3 className="text-xl font-bold text-white group-hover:text-[#1E1E1E] relative z-10 transition-colors duration-300" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                      {service.title}
                    </h3>
                    <p className="text-[#FFA700] group-hover:text-[#1E1E1E] font-bold mt-2 relative z-10 transition-colors duration-300">
                      {service.price}
                    </p>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.slice(0, 3).map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                          <CheckCircle className="w-4 h-4 text-[#FFA700] flex-shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-center">
            <button
              onClick={() => setCurrentPage('services')}
              className="bg-[#FFA700] hover:bg-[#FF9500] text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 inline-flex items-center gap-2 shadow-lg hover:shadow-xl"
            >
              View All Services
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Service Coverage */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#1E1E1E] mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Service Coverage
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Serving London and surrounding areas
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {serviceCoverage.map((area, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 rounded-lg p-6 hover:border-[#FFA700] transition-all duration-300">
                <div className="flex items-start gap-3">
                  <MapPin className="w-6 h-6 text-[#FFA700] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-[#1E1E1E] mb-1">{area.area}</h3>
                    <p className="text-sm text-gray-600">{area.postcodes}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">Not sure if we cover your area?</p>
            <a href="tel:02012345678" className="text-[#0066FF] hover:text-[#0052CC] font-semibold inline-flex items-center gap-2">
              <Phone className="w-5 h-5" />
              Call us on 020 1234 5678
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#1E1E1E] via-[#2A2A2A] to-[#1E1E1E] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-64 h-64 bg-[#FFA700] rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-80 h-80 bg-[#0066FF] rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Need an Electrician Today?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Get a free, no-obligation quote for your electrical work. Fast, reliable service guaranteed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:02012345678" className="bg-[#FFA700] hover:bg-[#FF9500] text-[#1E1E1E] px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 inline-flex items-center justify-center gap-2 shadow-lg hover:shadow-xl">
              <Phone className="w-5 h-5" />
              Call Now: 020 1234 5678
            </a>
            <button
              onClick={() => setCurrentPage('contact')}
              className="bg-white hover:bg-gray-100 text-[#1E1E1E] px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 inline-flex items-center justify-center gap-2 shadow-lg"
            >
              Request Callback
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );

  const renderServices = () => (
    <div className="min-h-screen bg-gray-50">
      {/* Services Hero */}
      <section className="bg-gradient-to-br from-[#1E1E1E] via-[#2A2A2A] to-[#1E1E1E] text-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Electrical Services
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Professional electrical solutions for every need - from simple repairs to complete installations
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 max-w-7xl mx-auto">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="bg-white rounded-xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300">
                  {/* Service Header with Gradient Placeholder */}
                  <div className="relative h-64 bg-gradient-to-br from-[#1E1E1E] to-[#2A2A2A] flex items-center justify-center overflow-hidden group">
                    <div className="absolute inset-0 bg-[#FFA700] opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                    <div className="relative z-10 text-center">
                      <Icon className="w-24 h-24 text-[#FFA700] mx-auto mb-4" />
                      <h2 className="text-3xl font-bold text-white" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                        {service.title}
                      </h2>
                      <p className="text-2xl font-bold text-[#FFA700] mt-2">{service.price}</p>
                    </div>
                  </div>

                  {/* Service Content */}
                  <div className="p-8">
                    <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                      {service.description}
                    </p>

                    <h3 className="font-bold text-[#1E1E1E] mb-4 text-xl" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                      What's Included:
                    </h3>
                    <ul className="space-y-3 mb-6">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <CheckCircle className="w-6 h-6 text-[#FFA700] flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="bg-[#FFA700]/10 border-l-4 border-[#FFA700] p-4 rounded">
                      <div className="flex items-start gap-3">
                        <Shield className="w-6 h-6 text-[#FFA700] flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="font-semibold text-[#1E1E1E] mb-1">Safety & Certification</p>
                          <p className="text-sm text-gray-700">
                            All work completed to 18th Edition standards with full certification and 2-year guarantee
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-[#1E1E1E] mb-12 text-center" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Additional Services
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="border-2 border-gray-200 rounded-lg p-6 hover:border-[#FFA700] transition-all duration-300">
                <Plug className="w-12 h-12 text-[#FFA700] mb-4" />
                <h3 className="text-xl font-bold text-[#1E1E1E] mb-3" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  EICR Testing
                </h3>
                <p className="text-gray-700 mb-3">Comprehensive electrical safety inspections for landlords and homeowners.</p>
                <p className="text-[#FFA700] font-bold">From £180</p>
              </div>

              <div className="border-2 border-gray-200 rounded-lg p-6 hover:border-[#FFA700] transition-all duration-300">
                <Battery className="w-12 h-12 text-[#FFA700] mb-4" />
                <h3 className="text-xl font-bold text-[#1E1E1E] mb-3" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  Emergency Lighting
                </h3>
                <p className="text-gray-700 mb-3">Commercial emergency lighting installation and testing services.</p>
                <p className="text-[#FFA700] font-bold">Custom Quote</p>
              </div>

              <div className="border-2 border-gray-200 rounded-lg p-6 hover:border-[#FFA700] transition-all duration-300">
                <Gauge className="w-12 h-12 text-[#FFA700] mb-4" />
                <h3 className="text-xl font-bold text-[#1E1E1E] mb-3" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  PAT Testing
                </h3>
                <p className="text-gray-700 mb-3">Portable appliance testing for businesses and landlords.</p>
                <p className="text-[#FFA700] font-bold">From £2 per item</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Information */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1E1E1E] mb-6 text-center" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Transparent Pricing
            </h2>
            <p className="text-gray-700 text-center mb-8 text-lg">
              No hidden fees, no surprises. Just honest, upfront pricing for quality electrical work.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="border-2 border-[#FFA700] rounded-lg p-6">
                <h3 className="font-bold text-[#1E1E1E] mb-4 flex items-center gap-2">
                  <Clock className="w-6 h-6 text-[#FFA700]" />
                  Standard Callout
                </h3>
                <p className="text-3xl font-bold text-[#FFA700] mb-2">From £80</p>
                <p className="text-gray-600">
                  Includes first hour of labour. Additional work charged at £60/hour.
                </p>
              </div>

              <div className="border-2 border-red-500 rounded-lg p-6 bg-red-50">
                <h3 className="font-bold text-[#1E1E1E] mb-4 flex items-center gap-2">
                  <AlertTriangle className="w-6 h-6 text-red-600" />
                  Emergency Callout
                </h3>
                <p className="text-3xl font-bold text-red-600 mb-2">From £95</p>
                <p className="text-gray-700">
                  24/7 emergency service. Rapid response for urgent electrical issues.
                </p>
              </div>
            </div>

            <div className="bg-[#FFA700]/10 border-l-4 border-[#FFA700] p-6 rounded">
              <h3 className="font-bold text-[#1E1E1E] mb-3">What's Included:</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-[#FFA700] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Free, no-obligation quotes for larger projects</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-[#FFA700] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">All necessary certification included</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-[#FFA700] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">2-year workmanship guarantee</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-[#FFA700] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Clean & tidy service - we respect your property</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-[#1E1E1E] to-[#2A2A2A] text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Contact us today for a free quote on any electrical service
          </p>
          <button
            onClick={() => setCurrentPage('contact')}
            className="bg-[#FFA700] hover:bg-[#FF9500] text-[#1E1E1E] px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 inline-flex items-center gap-2 shadow-lg hover:shadow-xl"
          >
            Get Your Free Quote
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>
    </div>
  );

  const renderAbout = () => (
    <div className="min-h-screen bg-gray-50">
      {/* About Hero */}
      <section className="bg-gradient-to-br from-[#1E1E1E] via-[#2A2A2A] to-[#1E1E1E] text-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              About BrightWave
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Your trusted electrical partner across London - qualified, insured, and committed to safety
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-[#1E1E1E] to-[#2A2A2A] rounded-xl p-12 mb-12 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#FFA700] opacity-20 rounded-full blur-3xl"></div>
              <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  Our Story
                </h2>
                <p className="text-lg text-gray-300 mb-4 leading-relaxed">
                  BrightWave Electrical was founded on a simple principle: electrical work should be safe, reliable, and stress-free for our customers. With over 15 years of experience serving London homeowners and businesses, we've built our reputation on quality workmanship and exceptional customer service.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  As NICEIC approved contractors, we maintain the highest standards in every job we undertake. From emergency repairs to complex commercial installations, our team of qualified electricians brings expertise, professionalism, and a safety-first approach to every project.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 rounded-lg p-8">
                <Zap className="w-12 h-12 text-[#FFA700] mb-4" />
                <h3 className="text-2xl font-bold text-[#1E1E1E] mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  Our Mission
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  To provide London with the most reliable, safe, and professional electrical services. We aim to exceed expectations on every job while maintaining the highest safety standards and customer satisfaction.
                </p>
              </div>

              <div className="bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 rounded-lg p-8">
                <Award className="w-12 h-12 text-[#0066FF] mb-4" />
                <h3 className="text-2xl font-bold text-[#1E1E1E] mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  Our Values
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Safety, quality, and integrity guide everything we do. We treat every property as if it were our own and never compromise on workmanship or materials. Your safety is our top priority.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Qualifications & Certifications */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-[#1E1E1E] mb-6 text-center" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Qualified Team
            </h2>
            <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
              Every member of our team holds the highest industry qualifications and certifications
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-[#FFA700] rounded-full flex items-center justify-center mx-auto mb-4">
                  <BadgeCheck className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-[#1E1E1E] mb-2">NICEIC Approved</h3>
                <p className="text-sm text-gray-600">
                  Approved contractor status ensuring highest industry standards
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-[#0066FF] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-[#1E1E1E] mb-2">Part P Certified</h3>
                <p className="text-sm text-gray-600">
                  Building Regulations compliance for all domestic work
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-[#FFA700] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-[#1E1E1E] mb-2">18th Edition</h3>
                <p className="text-sm text-gray-600">
                  Latest BS7671 wiring regulations qualified
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-[#0066FF] rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-[#1E1E1E] mb-2">DBS Checked</h3>
                <p className="text-sm text-gray-600">
                  All engineers fully vetted and background checked
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-xl p-8 md:p-12">
              <h3 className="text-2xl font-bold text-[#1E1E1E] mb-6 text-center" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Insurance & Safety
              </h3>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="border-l-4 border-[#FFA700] pl-6">
                  <h4 className="font-bold text-[#1E1E1E] mb-3 flex items-center gap-2">
                    <Shield className="w-6 h-6 text-[#FFA700]" />
                    £5 Million Public Liability Insurance
                  </h4>
                  <p className="text-gray-700">
                    Comprehensive insurance coverage protects you and your property throughout every job. Full documentation available on request.
                  </p>
                </div>

                <div className="border-l-4 border-[#0066FF] pl-6">
                  <h4 className="font-bold text-[#1E1E1E] mb-3 flex items-center gap-2">
                    <FileText className="w-6 h-6 text-[#0066FF]" />
                    Method Statements & Risk Assessments
                  </h4>
                  <p className="text-gray-700">
                    Every job is risk-assessed before we start. We provide full method statements and PPE for all engineers on site.
                  </p>
                </div>
              </div>

              <div className="bg-[#FFA700]/10 border-2 border-[#FFA700] rounded-lg p-6">
                <h4 className="font-bold text-[#1E1E1E] mb-4 text-center">Our Safety Commitment</h4>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-[#FFA700] flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">Full PPE on every job</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-[#FFA700] flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">Safe isolation procedures</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-[#FFA700] flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">Comprehensive testing</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-[#FFA700] flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">Site safety reviews</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-[#FFA700] flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">Clean working practices</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-[#FFA700] flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">Full certification</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-[#1E1E1E] mb-12 text-center" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Why Choose BrightWave?
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-[#FFA700] rounded-full flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-[#1E1E1E] mb-2 text-xl">15+ Years Experience</h3>
                  <p className="text-gray-700">
                    Over a decade serving London with professional electrical services. We've seen it all and know how to handle any electrical challenge.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-[#0066FF] rounded-full flex items-center justify-center">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-[#1E1E1E] mb-2 text-xl">24/7 Emergency Service</h3>
                  <p className="text-gray-700">
                    Electrical emergencies don't wait for business hours. We're available around the clock for urgent electrical issues.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-[#FFA700] rounded-full flex items-center justify-center">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-[#1E1E1E] mb-2 text-xl">2-Year Guarantee</h3>
                  <p className="text-gray-700">
                    Every job backed by our comprehensive 2-year workmanship guarantee. We stand behind our work with complete confidence.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-[#0066FF] rounded-full flex items-center justify-center">
                    <Star className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-[#1E1E1E] mb-2 text-xl">Customer Focused</h3>
                  <p className="text-gray-700">
                    Your satisfaction is our priority. We communicate clearly, respect your property, and ensure you're completely happy with our work.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-[#FFA700] rounded-full flex items-center justify-center">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-[#1E1E1E] mb-2 text-xl">Safety First</h3>
                  <p className="text-gray-700">
                    We never cut corners on safety. Every job completed to current regulations with full testing and certification.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-[#0066FF] rounded-full flex items-center justify-center">
                    <Lightbulb className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-[#1E1E1E] mb-2 text-xl">Expert Advice</h3>
                  <p className="text-gray-700">
                    Not sure what you need? We'll provide honest, expert advice to help you make the right decision for your property and budget.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-gradient-to-br from-[#1E1E1E] to-[#2A2A2A] text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              BrightWave by Numbers
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-5xl font-bold text-[#FFA700] mb-2">2,500+</div>
                <div className="text-gray-300">Jobs Completed</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-[#FFA700] mb-2">15+</div>
                <div className="text-gray-300">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-[#FFA700] mb-2">100%</div>
                <div className="text-gray-300">Certified Work</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-[#FFA700] mb-2">24/7</div>
                <div className="text-gray-300">Available</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-[#1E1E1E] mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Ready to Work With Us?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Experience the BrightWave difference - professional, safe, reliable electrical services
          </p>
          <button
            onClick={() => setCurrentPage('contact')}
            className="bg-[#FFA700] hover:bg-[#FF9500] text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 inline-flex items-center gap-2 shadow-lg hover:shadow-xl"
          >
            Get in Touch
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>
    </div>
  );

  const renderProjects = () => (
    <div className="min-h-screen bg-gray-50">
      {/* Projects Hero */}
      <section className="bg-gradient-to-br from-[#1E1E1E] via-[#2A2A2A] to-[#1E1E1E] text-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Recent Projects
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Real projects, real results - see how we've helped customers across London
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto space-y-16">
            {projects.map((project, index) => (
              <div key={index} className="bg-white rounded-xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300">
                <div className="grid md:grid-cols-2 gap-0">
                  {/* Project Image Placeholder */}
                  <div className="relative h-80 md:h-auto bg-gradient-to-br from-[#1E1E1E] to-[#2A2A2A] flex items-center justify-center overflow-hidden group">
                    <div className="absolute inset-0 bg-[#FFA700] opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                    <div className="relative z-10 text-center p-8">
                      {project.category === 'Rewire' && <Settings className="w-24 h-24 text-[#FFA700] mx-auto mb-4" />}
                      {project.category === 'Smart Home' && <Sparkles className="w-24 h-24 text-[#FFA700] mx-auto mb-4" />}
                      {project.category === 'Emergency' && <AlertTriangle className="w-24 h-24 text-[#FFA700] mx-auto mb-4" />}
                      {project.category === 'Commercial' && <Building2 className="w-24 h-24 text-[#FFA700] mx-auto mb-4" />}
                      <p className="text-white text-sm opacity-75">{project.image}</p>
                    </div>
                    <div className="absolute top-4 right-4">
                      <span className="bg-[#FFA700] text-[#1E1E1E] px-4 py-2 rounded-full text-sm font-bold">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className="p-8 md:p-10">
                    <h2 className="text-3xl font-bold text-[#1E1E1E] mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                      {project.title}
                    </h2>

                    <div className="space-y-6">
                      <div>
                        <h3 className="font-bold text-[#1E1E1E] mb-2 flex items-center gap-2">
                          <AlertCircle className="w-5 h-5 text-red-600" />
                          The Problem
                        </h3>
                        <p className="text-gray-700 leading-relaxed pl-7">
                          {project.problem}
                        </p>
                      </div>

                      <div>
                        <h3 className="font-bold text-[#1E1E1E] mb-2 flex items-center gap-2">
                          <Wrench className="w-5 h-5 text-[#0066FF]" />
                          Our Solution
                        </h3>
                        <p className="text-gray-700 leading-relaxed pl-7">
                          {project.solution}
                        </p>
                      </div>

                      <div>
                        <h3 className="font-bold text-[#1E1E1E] mb-2 flex items-center gap-2">
                          <CheckCircle className="w-5 h-5 text-green-600" />
                          The Result
                        </h3>
                        <p className="text-gray-700 leading-relaxed pl-7">
                          {project.result}
                        </p>
                      </div>

                      <div className="bg-[#FFA700]/10 border-l-4 border-[#FFA700] p-4 rounded">
                        <h3 className="font-bold text-[#1E1E1E] mb-2 flex items-center gap-2">
                          <Award className="w-5 h-5 text-[#FFA700]" />
                          Certification Provided
                        </h3>
                        <p className="text-sm text-gray-700">
                          {project.certification}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Categories */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-[#1E1E1E] mb-12 text-center" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Project Categories
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 rounded-lg p-6 hover:border-[#FFA700] transition-all duration-300 text-center">
                <Settings className="w-12 h-12 text-[#FFA700] mx-auto mb-4" />
                <h3 className="font-bold text-[#1E1E1E] mb-2">Rewiring</h3>
                <p className="text-sm text-gray-600">Complete and partial rewires to modern standards</p>
              </div>

              <div className="bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 rounded-lg p-6 hover:border-[#FFA700] transition-all duration-300 text-center">
                <Sparkles className="w-12 h-12 text-[#FFA700] mx-auto mb-4" />
                <h3 className="font-bold text-[#1E1E1E] mb-2">Smart Home</h3>
                <p className="text-sm text-gray-600">Modern smart electrical installations</p>
              </div>

              <div className="bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 rounded-lg p-6 hover:border-[#FFA700] transition-all duration-300 text-center">
                <AlertTriangle className="w-12 h-12 text-[#FFA700] mx-auto mb-4" />
                <h3 className="font-bold text-[#1E1E1E] mb-2">Emergency</h3>
                <p className="text-sm text-gray-600">24/7 emergency electrical repairs</p>
              </div>

              <div className="bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 rounded-lg p-6 hover:border-[#FFA700] transition-all duration-300 text-center">
                <Building2 className="w-12 h-12 text-[#FFA700] mx-auto mb-4" />
                <h3 className="font-bold text-[#1E1E1E] mb-2">Commercial</h3>
                <p className="text-sm text-gray-600">Business electrical fit-outs and maintenance</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-[#1E1E1E] mb-12 text-center" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              What Our Customers Say
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#FFA700] text-[#FFA700]" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">
                  "Excellent service from start to finish. Our full house rewire was completed on time and to a very high standard. Highly recommended!"
                </p>
                <p className="font-bold text-[#1E1E1E]">Sarah M., Wimbledon</p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-8">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#FFA700] text-[#FFA700]" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">
                  "Called them out for an emergency at 11pm. They arrived quickly, fixed the problem, and were very professional. Great emergency service."
                </p>
                <p className="font-bold text-[#1E1E1E]">James T., Clapham</p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-8">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#FFA700] text-[#FFA700]" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">
                  "Fantastic smart home installation. The team really knew their stuff and the system works perfectly. Very happy with the result."
                </p>
                <p className="font-bold text-[#1E1E1E]">Rachel K., Fulham</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-[#1E1E1E] to-[#2A2A2A] text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Start Your Project Today
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Whether it's a small repair or a major installation, we're here to help
          </p>
          <button
            onClick={() => setCurrentPage('contact')}
            className="bg-[#FFA700] hover:bg-[#FF9500] text-[#1E1E1E] px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 inline-flex items-center gap-2 shadow-lg hover:shadow-xl"
          >
            Get Your Free Quote
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>
    </div>
  );

  const renderContact = () => (
    <div className="min-h-screen bg-gray-50">
      {/* Contact Hero */}
      <section className="bg-gradient-to-br from-[#1E1E1E] via-[#2A2A2A] to-[#1E1E1E] text-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Contact Us
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Get in touch for a free quote or emergency electrical service
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            {/* Emergency Banner */}
            <div className="bg-gradient-to-r from-red-600 to-red-700 text-white rounded-xl p-8 mb-12 shadow-2xl">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                    <AlertTriangle className="w-8 h-8 text-red-600" />
                  </div>
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                      24/7 Emergency Electrician
                    </h2>
                    <p className="text-red-100">
                      Power failure? Burning smell? Sparking outlets? Call us now for immediate help
                    </p>
                  </div>
                </div>
                <a href="tel:02012345678" className="bg-white hover:bg-gray-100 text-red-600 px-8 py-4 rounded-lg font-bold text-xl transition-all duration-300 flex items-center gap-2 shadow-lg whitespace-nowrap">
                  <Phone className="w-6 h-6" />
                  020 1234 5678
                </a>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="bg-white rounded-xl shadow-xl p-8">
                <h2 className="text-3xl font-bold text-[#1E1E1E] mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  Get a Free Quote
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-[#1E1E1E] mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#FFA700] focus:outline-none transition-colors"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-[#1E1E1E] mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#FFA700] focus:outline-none transition-colors"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-[#1E1E1E] mb-2">
                      Phone *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#FFA700] focus:outline-none transition-colors"
                      placeholder="020 1234 5678"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-[#1E1E1E] mb-2">
                      Postcode *
                    </label>
                    <input
                      type="text"
                      name="postcode"
                      value={formData.postcode}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#FFA700] focus:outline-none transition-colors"
                      placeholder="SW1A 1AA"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-[#1E1E1E] mb-2">
                      Service Required *
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#FFA700] focus:outline-none transition-colors"
                    >
                      <option value="">Select a service...</option>
                      <option value="domestic-repair">Domestic Repair</option>
                      <option value="rewire">Rewire / Upgrade</option>
                      <option value="smart-home">Smart Home Installation</option>
                      <option value="commercial">Commercial Electrical</option>
                      <option value="eicr">EICR Testing</option>
                      <option value="ev-charging">EV Charging Point</option>
                      <option value="emergency">Emergency Callout</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-[#1E1E1E] mb-2">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#FFA700] focus:outline-none transition-colors resize-none"
                      placeholder="Please describe your electrical needs..."
                    ></textarea>
                  </div>

                  <div className="bg-red-50 border-2 border-red-200 rounded-lg p-4">
                    <label className="flex items-start gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        name="isEmergency"
                        checked={formData.isEmergency}
                        onChange={(e) => setFormData(prev => ({ ...prev, isEmergency: e.target.checked }))}
                        className="mt-1 w-5 h-5 text-red-600 border-red-300 rounded focus:ring-red-500"
                      />
                      <div>
                        <span className="font-bold text-red-900">This is an emergency</span>
                        <p className="text-sm text-red-700 mt-1">
                          If you have an electrical emergency, please call us directly on 020 1234 5678 for immediate assistance
                        </p>
                      </div>
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#FFA700] hover:bg-[#FF9500] text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
                  >
                    <MessageSquare className="w-5 h-5" />
                    Send Enquiry
                  </button>

                  <p className="text-sm text-gray-600 text-center">
                    We'll respond to your enquiry within 2 hours during business hours
                  </p>
                </form>
              </div>

              {/* Contact Information */}
              <div className="space-y-8">
                <div className="bg-white rounded-xl shadow-xl p-8">
                  <h2 className="text-2xl font-bold text-[#1E1E1E] mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    Contact Information
                  </h2>

                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-[#FFA700] rounded-full flex items-center justify-center flex-shrink-0">
                        <Phone className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-[#1E1E1E] mb-1">Phone</h3>
                        <a href="tel:02012345678" className="text-[#0066FF] hover:text-[#0052CC] font-semibold">
                          020 1234 5678
                        </a>
                        <p className="text-sm text-gray-600 mt-1">24/7 Emergency Line</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-[#0066FF] rounded-full flex items-center justify-center flex-shrink-0">
                        <Mail className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-[#1E1E1E] mb-1">Email</h3>
                        <a href="mailto:info@brightwaveelectrical.co.uk" className="text-[#0066FF] hover:text-[#0052CC] font-semibold">
                          info@brightwaveelectrical.co.uk
                        </a>
                        <p className="text-sm text-gray-600 mt-1">We reply within 2 hours</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-[#FFA700] rounded-full flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-[#1E1E1E] mb-1">Service Area</h3>
                        <p className="text-gray-700">All London postcodes</p>
                        <p className="text-sm text-gray-600 mt-1">Plus Hertfordshire & Essex</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-[#0066FF] rounded-full flex items-center justify-center flex-shrink-0">
                        <Clock className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-[#1E1E1E] mb-1">Opening Hours</h3>
                        <p className="text-gray-700">Mon-Fri: 8am - 6pm</p>
                        <p className="text-gray-700">Sat: 9am - 5pm</p>
                        <p className="text-gray-700">Sun: Emergency only</p>
                        <p className="text-sm text-[#FFA700] font-semibold mt-1">24/7 Emergency Service</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Certifications */}
                <div className="bg-gradient-to-br from-[#1E1E1E] to-[#2A2A2A] rounded-xl shadow-xl p-8 text-white">
                  <h2 className="text-2xl font-bold mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    Accreditations
                  </h2>
                  <div className="grid grid-cols-2 gap-4">
                    {certifications.map((cert, index) => {
                      const Icon = cert.icon;
                      return (
                        <div key={index} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4 flex flex-col items-center gap-2 text-center">
                          <Icon className="w-8 h-8 text-[#FFA700]" />
                          <span className="text-sm font-medium">{cert.name}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-[#1E1E1E] mb-6 text-center" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 text-center mb-12">
              Got questions? We've got answers
            </p>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="border-2 border-gray-200 rounded-lg overflow-hidden hover:border-[#FFA700] transition-all duration-300">
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full px-6 py-5 flex items-center justify-between gap-4 bg-white hover:bg-gray-50 transition-colors text-left"
                  >
                    <span className="font-bold text-[#1E1E1E] text-lg">{faq.question}</span>
                    {openFaq === index ? (
                      <ChevronUp className="w-6 h-6 text-[#FFA700] flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-6 h-6 text-gray-400 flex-shrink-0" />
                    )}
                  </button>
                  {openFaq === index && (
                    <div className="px-6 py-5 bg-gray-50 border-t-2 border-gray-200">
                      <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );

  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: 'Roboto, sans-serif' }}>
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "BrightWave Electrical",
          "image": "https://www.brightwaveelectrical.co.uk/logo.png",
          "description": "NICEIC approved electricians providing safe, reliable electrical services across London. From emergency repairs to complete rewires and smart home installations.",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "London",
            "addressLocality": "London",
            "addressRegion": "Greater London",
            "postalCode": "SW1A 1AA",
            "addressCountry": "GB"
          },
          "telephone": "020 1234 5678",
          "email": "info@brightwaveelectrical.co.uk",
          "url": "https://www.brightwaveelectrical.co.uk",
          "priceRange": "££",
          "openingHoursSpecification": [
            {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
              "opens": "08:00",
              "closes": "18:00"
            },
            {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": "Saturday",
              "opens": "09:00",
              "closes": "17:00"
            }
          ],
          "sameAs": [
            "https://www.facebook.com/brightwaveelectrical",
            "https://www.instagram.com/brightwaveelectrical",
            "https://twitter.com/brightwave_elec"
          ],
          "areaServed": {
            "@type": "GeoCircle",
            "geoMidpoint": {
              "@type": "GeoCoordinates",
              "latitude": "51.5074",
              "longitude": "-0.1278"
            },
            "geoRadius": "25000"
          },
          "hasCredential": [
            {
              "@type": "EducationalOccupationalCredential",
              "credentialCategory": "certification",
              "recognizedBy": {
                "@type": "Organization",
                "name": "NICEIC"
              }
            },
            {
              "@type": "EducationalOccupationalCredential",
              "credentialCategory": "certification",
              "recognizedBy": {
                "@type": "Organization",
                "name": "Part P Building Regulations"
              }
            }
          ],
          "serviceType": ["Domestic Electrical", "Commercial Electrical", "Emergency Electrician", "Rewiring", "Smart Home", "EICR Testing"],
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "127"
          }
        })}
      </script>

      {/* Emergency Banner - Fixed at top */}
      <div className="bg-gradient-to-r from-red-600 to-red-700 text-white py-3 px-6 shadow-lg sticky top-0 z-50">
        <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 animate-pulse" />
            <span className="font-bold text-sm sm:text-base">24/7 Emergency Electrician Available</span>
          </div>
          <a href="tel:02012345678" className="bg-white hover:bg-gray-100 text-red-600 px-6 py-2 rounded-full font-bold text-sm sm:text-base transition-all duration-300 flex items-center gap-2 shadow-lg">
            <Phone className="w-4 h-4" />
            Call Now: 020 1234 5678
          </a>
        </div>
      </div>

      {/* Header */}
      <header className="bg-[#1E1E1E] text-white shadow-lg sticky top-[52px] z-40">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-3 cursor-pointer" onClick={() => setCurrentPage('home')}>
              <div className="w-12 h-12 bg-[#FFA700] rounded-full flex items-center justify-center">
                <Zap className="w-7 h-7 text-[#1E1E1E]" strokeWidth={2.5} />
              </div>
              <div>
                <h1 className="text-2xl font-bold" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  BrightWave
                </h1>
                <p className="text-xs text-gray-400">NICEIC Approved Electricians</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {navigation.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setCurrentPage(item.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${
                    currentPage === item.id
                      ? 'bg-[#FFA700] text-[#1E1E1E]'
                      : 'text-white hover:bg-white/10'
                  }`}
                >
                  <item.icon className="w-5 h-5" />
                  {item.name}
                </button>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <nav className="md:hidden mt-4 pb-4 border-t border-white/20 pt-4">
              {navigation.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setCurrentPage(item.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg font-semibold transition-all duration-300 mb-2 ${
                    currentPage === item.id
                      ? 'bg-[#FFA700] text-[#1E1E1E]'
                      : 'text-white hover:bg-white/10'
                  }`}
                >
                  <item.icon className="w-5 h-5" />
                  {item.name}
                </button>
              ))}
            </nav>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main>
        {currentPage === 'home' && renderHome()}
        {currentPage === 'services' && renderServices()}
        {currentPage === 'about' && renderAbout()}
        {currentPage === 'projects' && renderProjects()}
        {currentPage === 'contact' && renderContact()}
      </main>

      {/* Footer */}
      <footer className="bg-[#1E1E1E] text-white pt-16 pb-8">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            {/* Company Info */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-[#FFA700] rounded-full flex items-center justify-center">
                  <Zap className="w-7 h-7 text-[#1E1E1E]" strokeWidth={2.5} />
                </div>
                <h3 className="text-xl font-bold" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  BrightWave
                </h3>
              </div>
              <p className="text-gray-400 mb-4">
                NICEIC approved electricians serving London with safe, reliable electrical services since 2008.
              </p>
              <div className="flex gap-3">
                {certifications.slice(0, 2).map((cert, index) => {
                  const Icon = cert.icon;
                  return (
                    <div key={index} className="w-10 h-10 bg-[#FFA700] rounded-full flex items-center justify-center" title={cert.name}>
                      <Icon className="w-5 h-5 text-[#1E1E1E]" />
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-bold mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Quick Links
              </h3>
              <ul className="space-y-3">
                {navigation.map((item) => (
                  <li key={item.id}>
                    <button
                      onClick={() => setCurrentPage(item.id)}
                      className="text-gray-400 hover:text-[#FFA700] transition-colors flex items-center gap-2"
                    >
                      <ArrowRight className="w-4 h-4" />
                      {item.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-bold mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Services
              </h3>
              <ul className="space-y-3">
                <li className="text-gray-400 flex items-center gap-2">
                  <ArrowRight className="w-4 h-4 text-[#FFA700]" />
                  Domestic Repairs
                </li>
                <li className="text-gray-400 flex items-center gap-2">
                  <ArrowRight className="w-4 h-4 text-[#FFA700]" />
                  Rewires & Upgrades
                </li>
                <li className="text-gray-400 flex items-center gap-2">
                  <ArrowRight className="w-4 h-4 text-[#FFA700]" />
                  Smart Home
                </li>
                <li className="text-gray-400 flex items-center gap-2">
                  <ArrowRight className="w-4 h-4 text-[#FFA700]" />
                  Commercial Electrical
                </li>
                <li className="text-gray-400 flex items-center gap-2">
                  <ArrowRight className="w-4 h-4 text-[#FFA700]" />
                  EICR Testing
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-lg font-bold mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Contact
              </h3>
              <ul className="space-y-4">
                <li>
                  <a href="tel:02012345678" className="flex items-start gap-3 text-gray-400 hover:text-[#FFA700] transition-colors">
                    <Phone className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold text-white">020 1234 5678</div>
                      <div className="text-sm">24/7 Emergency</div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="mailto:info@brightwaveelectrical.co.uk" className="flex items-start gap-3 text-gray-400 hover:text-[#FFA700] transition-colors">
                    <Mail className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <div className="text-sm break-all">info@brightwaveelectrical.co.uk</div>
                  </a>
                </li>
                <li className="flex items-start gap-3 text-gray-400">
                  <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <div className="text-sm">
                    Serving all London postcodes
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/20 pt-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-gray-400 text-sm text-center md:text-left">
                &copy; 2025 BrightWave Electrical. All rights reserved. | NICEIC Approved Contractor | Part P Certified
              </p>
              <div className="flex gap-6 text-sm text-gray-400">
                <a href="#" className="hover:text-[#FFA700] transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-[#FFA700] transition-colors">Terms of Service</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}