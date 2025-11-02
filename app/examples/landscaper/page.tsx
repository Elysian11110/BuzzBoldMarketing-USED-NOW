'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Leaf, ChevronDown, Menu, X, Check, Clock, Shield, Wrench } from 'lucide-react';

export default function GreenFrameLandscapes() {
  const [currentPage, setCurrentPage] = useState<'home' | 'services' | 'why-us' | 'portfolio' | 'contact'>('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [portfolioFilter, setPortfolioFilter] = useState('all');
  const [lightboxImage, setLightboxImage] = useState<number | null>(null);

  const navigation = [
    { name: 'Home', page: 'home' as const },
    { name: 'Services', page: 'services' as const },
    { name: 'Why Choose Us', page: 'why-us' as const },
    { name: 'Portfolio', page: 'portfolio' as const },
    { name: 'Contact', page: 'contact' as const },
  ];

  const services = [
    {
      id: 'decking',
      title: 'Decking & Fencing',
      image: 'photo-1600585152915-d208bec867a1',
      alt: 'Beautiful timber decking installation with contemporary outdoor furniture',
      description: 'Transform your outdoor space with premium timber or composite decking. We design and build custom decks that complement your home and lifestyle.',
      materials: 'Pressure-treated softwood, composite boards, hardwood timber, stainless steel fixings',
      timeline: '3-7 days depending on size and complexity',
      care: 'Annual treatment recommended for timber. Composite requires minimal maintenance - occasional cleaning with soapy water.'
    },
    {
      id: 'patios',
      title: 'Patios & Paving',
      image: 'photo-1600607687920-4e2a09cf159d',
      alt: 'Contemporary patio area with natural stone paving and integrated planting',
      description: 'Expert patio installation using natural stone, porcelain, or block paving. Professional groundwork ensures longevity and drainage.',
      materials: 'Natural sandstone, limestone, porcelain slabs, granite setts, block paving',
      timeline: '5-10 days including excavation and sub-base preparation',
      care: 'Seal annually for best protection. Power wash in spring to remove algae and debris.'
    },
    {
      id: 'design',
      title: 'Garden Design',
      image: 'photo-1585320806297-9794b3e4eeae',
      alt: 'Professional planting scheme with mixed perennials and architectural plants',
      description: 'Complete garden transformation from concept to completion. We create cohesive outdoor spaces that balance aesthetics with practicality.',
      materials: 'Planting plans, architectural features, lawn installation, raised beds',
      timeline: '2-4 weeks for complete garden builds',
      care: 'Seasonal pruning and mulching. Irrigation systems available for low-maintenance options.'
    },
    {
      id: 'lighting',
      title: 'Lighting & Water Features',
      image: 'photo-1600607687644-c7171b42498b',
      alt: 'Garden lighting installation highlighting pathways and feature plants at dusk',
      description: 'Professional outdoor lighting and water features. LED systems for energy efficiency and ambiance that extends garden enjoyment into evening.',
      materials: 'LED spike lights, wall washers, pond pumps, water feature reservoirs',
      timeline: '2-4 days for lighting installation, 3-5 days for water features',
      care: 'LED systems last 10+ years. Water features require seasonal cleaning and pump maintenance.'
    }
  ];

  const portfolioItems = [
    { id: 1, image: 'photo-1558618666-fcd25c85cd64', alt: 'Modern garden patio transformation with outdoor dining area', category: 'patios', caption: 'Contemporary Patio Build', outcome: 'Transformed overgrown garden into modern entertaining space with porcelain paving and integrated lighting' },
    { id: 2, image: 'photo-1600585152915-d208bec867a1', alt: 'Multi-level timber decking with glass balustrade', category: 'decking', caption: 'Multi-Level Decking Project', outcome: 'Created functional zones with composite decking and frameless glass panels for uninterrupted views' },
    { id: 3, image: 'photo-1585320806297-9794b3e4eeae', alt: 'Complete garden redesign with mixed planting borders', category: 'complete', caption: 'Full Garden Transformation', outcome: 'Complete redesign including patio, planting scheme, and lawn installation for family-friendly space' },
    { id: 4, image: 'photo-1600607687920-4e2a09cf159d', alt: 'Natural stone patio with built-in seating area', category: 'patios', caption: 'Sandstone Patio & Walls', outcome: 'Installed Indian sandstone patio with matching retaining walls and raised planting beds' },
    { id: 5, image: 'photo-1600607687644-c7171b42498b', alt: 'Garden pathway with integrated LED lighting system', category: 'lighting', caption: 'Lighting Installation', outcome: 'Complete outdoor lighting scheme with pathway lights, uplighting, and automated timer system' },
    { id: 6, image: 'photo-1600585152220-9f8b0e8c3b51', alt: 'Contemporary fence panels with horizontal slats', category: 'fencing', caption: 'Modern Fencing Installation', outcome: 'Replaced old panel fencing with contemporary slatted design for improved privacy and aesthetics' },
    { id: 7, image: 'photo-1585320806297-9794b3e4eeae', alt: 'Lush border planting with perennials and grasses', category: 'planting', caption: 'Planting Scheme', outcome: 'Designed and installed low-maintenance perennial borders with year-round interest and structure' },
    { id: 8, image: 'photo-1558618666-fcd25c85cd64', alt: 'Garden redesign with raised beds and seating', category: 'complete', caption: 'Urban Garden Makeover', outcome: 'Maximised small garden space with raised beds, built-in seating, and vertical planting' },
    { id: 9, image: 'photo-1600607687920-4e2a09cf159d', alt: 'Large format porcelain patio with outdoor kitchen', category: 'patios', caption: 'Entertaining Space Creation', outcome: 'Large porcelain patio with outdoor kitchen area, pergola, and integrated heating for year-round use' }
  ];

  const faqs = [
    {
      question: 'Do you offer free design consultations?',
      answer: 'Yes, we provide complimentary site visits and initial consultations. We\'ll assess your space, discuss your requirements, and provide professional advice on materials and design options before preparing a detailed quote.'
    },
    {
      question: 'What areas do you cover?',
      answer: 'We serve Surrey and Kent, covering postcodes: GU, KT, RH, CR, and SM. This includes Guildford, Kingston, Reigate, Croydon, Sutton, and surrounding areas. Contact us to confirm if we cover your specific location.'
    },
    {
      question: 'How long does a typical patio project take?',
      answer: 'Most patio installations take 5-10 days from start to finish. This includes excavation, sub-base preparation, laying, and finishing. Larger or more complex projects may take longer. We\'ll provide an accurate timeline in your quote.'
    },
    {
      question: 'Do you handle planning permission?',
      answer: 'Most garden projects don\'t require planning permission, but we\'ll advise if your project needs approval. We can guide you through the application process and ensure all work complies with building regulations where applicable.'
    },
    {
      question: 'What warranty do you provide?',
      answer: 'All our work comes with a comprehensive 5-year warranty covering materials and workmanship. This gives you complete peace of mind that your investment is protected. We also provide care guides to help maintain your new garden features.'
    },
    {
      question: 'Do you use eco-friendly materials?',
      answer: 'Absolutely. We source FSC-certified timber, offer permeable paving options for sustainable drainage, and use composite materials made from recycled content. We\'re committed to environmentally responsible landscaping practices.'
    },
    {
      question: 'Can you work in phases?',
      answer: 'Yes, we understand that budget and timing considerations may require phased work. We can create a master plan and complete your project in stages, ensuring each phase is finished to the same high standard.'
    },
    {
      question: 'Do you offer maintenance plans?',
      answer: 'We provide ongoing maintenance services including seasonal pruning, patio cleaning, decking treatment, and general garden care. We can create a custom maintenance schedule to keep your garden looking its best year-round.'
    }
  ];

  const filteredPortfolio = portfolioFilter === 'all'
    ? portfolioItems
    : portfolioItems.filter(item => item.category === portfolioFilter);

  const Header = () => (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2 cursor-pointer" onClick={() => setCurrentPage('home')}>
            <div className="w-10 h-10 bg-[#2D6A4F] rounded flex items-center justify-center">
              <Leaf className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-[#111111]">GreenFrame Landscapes</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <button
                key={item.page}
                onClick={() => setCurrentPage(item.page)}
                className={`text-sm font-medium transition-colors ${
                  currentPage === item.page
                    ? 'text-[#2D6A4F] border-b-2 border-[#2D6A4F]'
                    : 'text-[#2E2E2E] hover:text-[#2D6A4F]'
                }`}
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-[#2E2E2E]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <nav className="px-4 py-4 space-y-2">
            {navigation.map((item) => (
              <button
                key={item.page}
                onClick={() => {
                  setCurrentPage(item.page);
                  setMobileMenuOpen(false);
                }}
                className={`block w-full text-left px-4 py-2 rounded text-sm font-medium transition-colors ${
                  currentPage === item.page
                    ? 'bg-[#2D6A4F] text-white'
                    : 'text-[#2E2E2E] hover:bg-gray-100'
                }`}
              >
                {item.name}
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  );

  const HomePage = () => (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[600px] bg-white">
        <Image
          src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1800&q=80"
          alt="Modern garden patio with contemporary seating and lush planting"
          width={1800}
          height={1200}
          priority={true}
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-4">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Gardens designed for living.
            </h1>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => setCurrentPage('contact')}
                className="bg-[#2D6A4F] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#1f4a37] transition-colors min-h-[44px]"
              >
                Book a site visit
              </button>
              <button
                onClick={() => setCurrentPage('contact')}
                className="bg-white text-[#2D6A4F] px-8 py-3 rounded-lg font-semibold border-2 border-white hover:bg-gray-50 transition-colors min-h-[44px]"
              >
                Get your free quote
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Value Points Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#A7C957] rounded-full flex items-center justify-center mx-auto mb-4">
                <Leaf className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#111111] mb-2">Expert Design</h3>
              <p className="text-[#2E2E2E]">Tailored solutions that complement your home and lifestyle</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#A7C957] rounded-full flex items-center justify-center mx-auto mb-4">
                <Wrench className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#111111] mb-2">Quality Build</h3>
              <p className="text-[#2E2E2E]">Premium materials and expert craftsmanship on every project</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#A7C957] rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#111111] mb-2">5-Year Warranty</h3>
              <p className="text-[#2E2E2E]">Comprehensive coverage on all materials and workmanship</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#A7C957] rounded-full flex items-center justify-center mx-auto mb-4">
                <Check className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#111111] mb-2">Aftercare</h3>
              <p className="text-[#2E2E2E]">Maintenance plans to keep your garden looking pristine</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-[#111111] text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <div key={service.id} className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow cursor-pointer" onClick={() => setCurrentPage('services')}>
                <div className="relative h-48">
                  <Image
                    src={`https://images.unsplash.com/${service.image}?w=600&q=80`}
                    alt={service.alt}
                    width={600}
                    height={400}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#111111] mb-2">{service.title}</h3>
                  <p className="text-[#2E2E2E]">{service.description.substring(0, 100)}...</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-[#111111] text-center mb-12">Recent Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {portfolioItems.slice(0, 3).map((item) => (
              <div key={item.id} className="relative h-80 rounded-lg overflow-hidden group cursor-pointer" onClick={() => setCurrentPage('portfolio')}>
                <Image
                  src={`https://images.unsplash.com/${item.image}?w=800&q=80`}
                  alt={item.alt}
                  width={800}
                  height={600}
                  className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <div className="p-6 text-white">
                    <h3 className="text-xl font-bold mb-1">{item.caption}</h3>
                    <p className="text-sm text-white/90">{item.outcome.substring(0, 80)}...</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <button
              onClick={() => setCurrentPage('portfolio')}
              className="bg-[#2D6A4F] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#1f4a37] transition-colors min-h-[44px]"
            >
              View All Projects
            </button>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-[#111111] text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-lg bg-white">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-6 py-4 flex justify-between items-center text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold text-[#111111]">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#2E2E2E] transition-transform ${
                      openFaq === index ? 'transform rotate-180' : ''
                    }`}
                  />
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-4">
                    <p className="text-[#2E2E2E]">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-white border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-[#111111] mb-6">Ready to transform your garden?</h2>
          <p className="text-xl text-[#2E2E2E] mb-8">Book a free site visit and get your detailed quote</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setCurrentPage('contact')}
              className="bg-[#2D6A4F] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#1f4a37] transition-colors min-h-[44px]"
            >
              Book a site visit
            </button>
            <button
              onClick={() => setCurrentPage('contact')}
              className="bg-white text-[#2D6A4F] px-8 py-3 rounded-lg font-semibold border-2 border-[#2D6A4F] hover:bg-gray-50 transition-colors min-h-[44px]"
            >
              Get your free quote
            </button>
          </div>
        </div>
      </section>
    </div>
  );

  const ServicesPage = () => (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-5xl font-bold text-[#111111] text-center mb-4">Our Services</h1>
        <p className="text-xl text-[#2E2E2E] text-center mb-16 max-w-3xl mx-auto">
          From design to installation, we deliver exceptional outdoor spaces built to last.
        </p>

        <div className="space-y-16">
          {services.map((service, index) => (
            <div key={service.id} className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 items-center`}>
              <div className="lg:w-1/2">
                <div className="relative h-96 rounded-lg overflow-hidden">
                  <Image
                    src={`https://images.unsplash.com/${service.image}?w=1200&q=80`}
                    alt={service.alt}
                    width={1200}
                    height={800}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
              <div className="lg:w-1/2">
                <h2 className="text-3xl font-bold text-[#111111] mb-4">{service.title}</h2>
                <p className="text-lg text-[#2E2E2E] mb-6">{service.description}</p>

                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-[#111111] mb-2">Materials Used</h3>
                    <p className="text-[#2E2E2E]">{service.materials}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#111111] mb-2 flex items-center gap-2">
                      <Clock className="w-5 h-5 text-[#2D6A4F]" />
                      Typical Timeline
                    </h3>
                    <p className="text-[#2E2E2E]">{service.timeline}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#111111] mb-2">Care Instructions</h3>
                    <p className="text-[#2E2E2E]">{service.care}</p>
                  </div>
                </div>

                <button
                  onClick={() => setCurrentPage('contact')}
                  className="mt-6 bg-[#2D6A4F] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#1f4a37] transition-colors min-h-[44px]"
                >
                  Get a Quote
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const WhyUsPage = () => (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-5xl font-bold text-[#111111] text-center mb-4">Why Choose GreenFrame?</h1>
        <p className="text-xl text-[#2E2E2E] text-center mb-16 max-w-3xl mx-auto">
          Professional service, exceptional results, and complete peace of mind.
        </p>

        {/* 4-Step Process */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-[#111111] mb-8 text-center">Our Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#2D6A4F] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-bold text-[#111111] mb-2">Site Visit</h3>
              <p className="text-[#2E2E2E]">We visit your property to assess the space, discuss your vision, and take measurements.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#2D6A4F] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-bold text-[#111111] mb-2">Design & Quote</h3>
              <p className="text-[#2E2E2E]">Receive a detailed proposal with design options, materials breakdown, and fixed quote.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#2D6A4F] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-bold text-[#111111] mb-2">Installation</h3>
              <p className="text-[#2E2E2E]">Our expert team completes the work to the highest standards with minimal disruption.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#2D6A4F] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                4
              </div>
              <h3 className="text-xl font-bold text-[#111111] mb-2">Aftercare</h3>
              <p className="text-[#2E2E2E]">We provide care guides and ongoing maintenance support to protect your investment.</p>
            </div>
          </div>
        </section>

        {/* 5-Year Warranty */}
        <section className="mb-16 bg-white border border-gray-200 rounded-lg p-8">
          <div className="flex items-start gap-4">
            <Shield className="w-12 h-12 text-[#2D6A4F] flex-shrink-0" />
            <div>
              <h2 className="text-3xl font-bold text-[#111111] mb-4">5-Year Warranty</h2>
              <p className="text-lg text-[#2E2E2E] mb-4">
                Every project comes with our comprehensive 5-year warranty covering both materials and workmanship.
                This demonstrates our confidence in the quality of our work and gives you complete peace of mind.
              </p>
              <ul className="space-y-2 text-[#2E2E2E]">
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-[#2D6A4F] flex-shrink-0 mt-0.5" />
                  <span>Full coverage on all materials and installation</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-[#2D6A4F] flex-shrink-0 mt-0.5" />
                  <span>Fast response to any warranty claims</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-[#2D6A4F] flex-shrink-0 mt-0.5" />
                  <span>Transferable if you sell your property</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-[#2D6A4F] flex-shrink-0 mt-0.5" />
                  <span>Extended warranties available on request</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* References Policy */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-[#111111] mb-4">References Available</h2>
          <p className="text-lg text-[#2E2E2E] mb-4">
            We&apos;re proud of our reputation and happy to provide references from recent clients.
            Many of our customers come from recommendations, and we have numerous 5-star reviews
            from satisfied homeowners across Surrey and Kent.
          </p>
          <p className="text-lg text-[#2E2E2E]">
            Ask us for contact details of recent projects similar to yours, or visit our portfolio
            to see the quality of our completed work.
          </p>
        </section>

        {/* Health & Safety */}
        <section className="bg-white border border-gray-200 rounded-lg p-8">
          <h2 className="text-3xl font-bold text-[#111111] mb-4">Health & Safety Commitment</h2>
          <p className="text-lg text-[#2E2E2E] mb-4">
            We take health and safety seriously. All our team members are trained in safe working
            practices, and we carry comprehensive public liability insurance.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-start gap-2">
              <Check className="w-5 h-5 text-[#2D6A4F] flex-shrink-0 mt-0.5" />
              <span className="text-[#2E2E2E]">£10 million public liability insurance</span>
            </div>
            <div className="flex items-start gap-2">
              <Check className="w-5 h-5 text-[#2D6A4F] flex-shrink-0 mt-0.5" />
              <span className="text-[#2E2E2E]">Risk assessments for every project</span>
            </div>
            <div className="flex items-start gap-2">
              <Check className="w-5 h-5 text-[#2D6A4F] flex-shrink-0 mt-0.5" />
              <span className="text-[#2E2E2E]">Certified team members</span>
            </div>
            <div className="flex items-start gap-2">
              <Check className="w-5 h-5 text-[#2D6A4F] flex-shrink-0 mt-0.5" />
              <span className="text-[#2E2E2E]">Site safety measures and barriers</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );

  const PortfolioPage = () => (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-5xl font-bold text-[#111111] text-center mb-4">Our Portfolio</h1>
        <p className="text-xl text-[#2E2E2E] text-center mb-12">
          Explore our recent garden transformations across Surrey and Kent.
        </p>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {[
            { label: 'All Projects', value: 'all' },
            { label: 'Patios', value: 'patios' },
            { label: 'Decking', value: 'decking' },
            { label: 'Complete Gardens', value: 'complete' },
            { label: 'Fencing', value: 'fencing' },
            { label: 'Planting', value: 'planting' }
          ].map((filter) => (
            <button
              key={filter.value}
              onClick={() => setPortfolioFilter(filter.value)}
              className={`px-6 py-2 rounded-lg font-semibold transition-colors min-h-[44px] ${
                portfolioFilter === filter.value
                  ? 'bg-[#2D6A4F] text-white'
                  : 'bg-white text-[#2E2E2E] border-2 border-gray-300 hover:border-[#2D6A4F]'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPortfolio.map((item) => (
            <div
              key={item.id}
              className="relative h-80 rounded-lg overflow-hidden group cursor-pointer"
              onClick={() => setLightboxImage(item.id)}
            >
              <Image
                src={`https://images.unsplash.com/${item.image}?w=800&q=80`}
                alt={item.alt}
                width={800}
                height={600}
                className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-6 text-white">
                  <h3 className="text-xl font-bold mb-1">{item.caption}</h3>
                  <p className="text-sm text-white/90">{item.outcome}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {lightboxImage !== null && (
          <div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setLightboxImage(null)}
          >
            <button
              className="absolute top-4 right-4 text-white hover:text-gray-300"
              onClick={() => setLightboxImage(null)}
            >
              <X className="w-8 h-8" />
            </button>
            {portfolioItems.find(item => item.id === lightboxImage) && (
              <div className="max-w-5xl w-full">
                <div className="relative h-[600px] mb-4">
                  <Image
                    src={`https://images.unsplash.com/${portfolioItems.find(item => item.id === lightboxImage)?.image}?w=1600&q=80`}
                    alt={portfolioItems.find(item => item.id === lightboxImage)?.alt || ''}
                    width={1600}
                    height={1200}
                    className="object-contain w-full h-full"
                  />
                </div>
                <div className="text-center text-white">
                  <h3 className="text-2xl font-bold mb-2">
                    {portfolioItems.find(item => item.id === lightboxImage)?.caption}
                  </h3>
                  <p className="text-lg">
                    {portfolioItems.find(item => item.id === lightboxImage)?.outcome}
                  </p>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );

  const ContactPage = () => (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-5xl font-bold text-[#111111] text-center mb-4">Get In Touch</h1>
        <p className="text-xl text-[#2E2E2E] text-center mb-16">
          Ready to start your garden transformation? Contact us for a free quote.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-[#111111] mb-6">Request a Quote</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-[#111111] mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2D6A4F] focus:border-transparent text-[#111111] min-h-[44px]"
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-[#111111] mb-2">
                  Phone *
                </label>
                <input
                  type="tel"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2D6A4F] focus:border-transparent text-[#111111] min-h-[44px]"
                  placeholder="Your phone number"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-[#111111] mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2D6A4F] focus:border-transparent text-[#111111] min-h-[44px]"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-[#111111] mb-2">
                  Postcode *
                </label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2D6A4F] focus:border-transparent text-[#111111] min-h-[44px]"
                  placeholder="e.g., GU1 1AA"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-[#111111] mb-2">
                  Service Required
                </label>
                <select
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2D6A4F] focus:border-transparent text-[#111111] min-h-[44px]"
                >
                  <option>Decking & Fencing</option>
                  <option>Patios & Paving</option>
                  <option>Garden Design</option>
                  <option>Lighting & Water Features</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-[#111111] mb-2">
                  Message *
                </label>
                <textarea
                  required
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2D6A4F] focus:border-transparent text-[#111111]"
                  placeholder="Tell us about your project..."
                />
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="siteVisit"
                  className="w-4 h-4 text-[#2D6A4F] border-gray-300 rounded focus:ring-[#2D6A4F]"
                />
                <label htmlFor="siteVisit" className="text-sm text-[#2E2E2E]">
                  I would like to request a free site visit
                </label>
              </div>
              <button
                type="submit"
                className="w-full bg-[#2D6A4F] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#1f4a37] transition-colors min-h-[44px]"
              >
                Send Enquiry
              </button>
            </form>
          </div>

          {/* Contact Info & Service Area */}
          <div className="space-y-8">
            {/* NAP */}
            <div className="bg-white border border-gray-200 rounded-lg p-8">
              <h2 className="text-2xl font-bold text-[#111111] mb-6">Contact Details</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-[#111111] mb-1">GreenFrame Landscapes</h3>
                  <p className="text-[#2E2E2E]">
                    Unit 12, Green Business Park<br />
                    Guildford Road<br />
                    Guildford, Surrey<br />
                    GU2 7XH
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-[#111111] mb-1">Phone</h3>
                  <p className="text-[#2E2E2E]">01483 555 777</p>
                </div>
                <div>
                  <h3 className="font-semibold text-[#111111] mb-1">Email</h3>
                  <p className="text-[#2E2E2E]">info@greenframelandscapes.co.uk</p>
                </div>
                <div>
                  <h3 className="font-semibold text-[#111111] mb-1">Business Hours</h3>
                  <p className="text-[#2E2E2E]">
                    Monday - Friday: 8:00am - 6:00pm<br />
                    Saturday: 9:00am - 5:00pm<br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>

            {/* Service Area */}
            <div className="bg-white border border-gray-200 rounded-lg p-8">
              <h2 className="text-2xl font-bold text-[#111111] mb-6">Service Area</h2>
              <p className="text-[#2E2E2E] mb-4">
                We serve homeowners across Surrey and Kent, covering the following postcode areas:
              </p>
              <div className="grid grid-cols-2 gap-2 mb-4">
                <div className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-[#2D6A4F]" />
                  <span className="text-[#2E2E2E]">GU (Guildford)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-[#2D6A4F]" />
                  <span className="text-[#2E2E2E]">KT (Kingston)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-[#2D6A4F]" />
                  <span className="text-[#2E2E2E]">RH (Reigate)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-[#2D6A4F]" />
                  <span className="text-[#2E2E2E]">CR (Croydon)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-[#2D6A4F]" />
                  <span className="text-[#2E2E2E]">SM (Sutton)</span>
                </div>
              </div>
              <p className="text-sm text-[#2E2E2E]">
                Not sure if we cover your area? Contact us with your postcode and we&apos;ll confirm.
              </p>
            </div>

            {/* Social Links */}
            <div className="bg-white border border-gray-200 rounded-lg p-8">
              <h2 className="text-2xl font-bold text-[#111111] mb-4">Follow Us</h2>
              <div className="flex gap-4">
                <a
                  href="https://facebook.com/greenframelandscapes"
                  className="text-[#2D6A4F] hover:text-[#1f4a37] font-semibold"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Facebook
                </a>
                <a
                  href="https://instagram.com/greenframelandscapes"
                  className="text-[#2D6A4F] hover:text-[#1f4a37] font-semibold"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const Footer = () => (
    <footer className="bg-white border-t border-gray-200 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-[#2D6A4F] rounded flex items-center justify-center">
              <Leaf className="w-5 h-5 text-white" />
            </div>
            <span className="text-sm text-[#2E2E2E]">© 2025 GreenFrame Landscapes. All rights reserved.</span>
          </div>
          <div className="flex gap-6 text-sm text-[#2E2E2E]">
            <a href="#" className="hover:text-[#2D6A4F]">Privacy Policy</a>
            <a href="#" className="hover:text-[#2D6A4F]">Terms of Service</a>
            <a href="#" className="hover:text-[#2D6A4F]">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );

  return (
    <>
      <head>
        <title>GreenFrame Landscapes | Patios, Decking, Garden Design</title>
        <meta name="description" content="Premium patios, decking, and garden builds. Fixed quotes on request. Book a visit." />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "GreenFrame Landscapes",
              "image": "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Unit 12, Green Business Park, Guildford Road",
                "addressLocality": "Guildford",
                "addressRegion": "Surrey",
                "postalCode": "GU2 7XH",
                "addressCountry": "GB"
              },
              "telephone": "01483 555 777",
              "email": "info@greenframelandscapes.co.uk",
              "openingHours": [
                "Mo-Fr 08:00-18:00",
                "Sa 09:00-17:00"
              ],
              "sameAs": [
                "https://facebook.com/greenframelandscapes",
                "https://instagram.com/greenframelandscapes"
              ],
              "priceRange": "£££"
            })
          }}
        />
      </head>

      <div className="min-h-screen flex flex-col bg-white">
        <Header />
        <main className="flex-grow">
          {currentPage === 'home' && <HomePage />}
          {currentPage === 'services' && <ServicesPage />}
          {currentPage === 'why-us' && <WhyUsPage />}
          {currentPage === 'portfolio' && <PortfolioPage />}
          {currentPage === 'contact' && <ContactPage />}
        </main>
        <Footer />
      </div>
    </>
  );
}
