'use client';

import React, { useState } from 'react';
import { Leaf, Trees, Fence, Droplets, Phone, Mail, MapPin, Clock, Star, Award, Shield, CheckCircle, Menu, X, ChevronDown, ChevronUp, Facebook, Instagram, ExternalLink, Hammer, Palette, Lightbulb, Waves } from 'lucide-react';

type Page = 'home' | 'services' | 'why-choose-us' | 'portfolio' | 'contact';

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  priceFrom: string;
}

interface PortfolioItem {
  id: number;
  title: string;
  location: string;
  category: string;
  description: string;
  image: string;
  beforeAfter?: boolean;
}

interface FAQ {
  question: string;
  answer: string;
}

export default function GreenFrameLandscapes() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);
  const [lightboxImage, setLightboxImage] = useState<PortfolioItem | null>(null);
  const [portfolioFilter, setPortfolioFilter] = useState<string>('all');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    postcode: '',
    service: '',
    message: '',
    siteVisit: false
  });

  const services: Service[] = [
    {
      icon: <Fence className="w-12 h-12" />,
      title: 'Decking & Fencing',
      description: 'Premium FSC-certified timber decking and fencing installations that enhance privacy and extend your living space outdoors.',
      features: [
        'FSC-certified sustainable timber',
        'Composite and hardwood options',
        'Custom designs and layouts',
        'Professional installation',
        '25-year timber guarantee'
      ],
      priceFrom: 'From £150 per sq m'
    },
    {
      icon: <Hammer className="w-12 h-12" />,
      title: 'Patios & Paving',
      description: 'Transform your outdoor space with beautiful natural stone or porcelain paving, expertly laid to last for decades.',
      features: [
        'Natural stone and porcelain',
        'Indian sandstone specialists',
        'Pattern and design options',
        'Full groundwork preparation',
        'Drainage and edging included'
      ],
      priceFrom: 'From £80 per sq m'
    },
    {
      icon: <Palette className="w-12 h-12" />,
      title: 'Garden Design',
      description: 'Complete garden transformation from concept to completion, including 3D renders and detailed planting plans.',
      features: [
        'Free initial consultation',
        '3D visualization renders',
        'Detailed planting plans',
        'Sustainable design approach',
        'Project management included'
      ],
      priceFrom: 'From £2,800'
    },
    {
      icon: <Lightbulb className="w-12 h-12" />,
      title: 'Lighting & Features',
      description: 'Enhance your garden with professional outdoor lighting and elegant water features for year-round enjoyment.',
      features: [
        'LED garden lighting systems',
        'Water features and ponds',
        'Solar lighting options',
        'Feature wall installation',
        'Electrical certification'
      ],
      priceFrom: 'From £450'
    },
    {
      icon: <Trees className="w-12 h-12" />,
      title: 'Planting & Turfing',
      description: 'Expert planting design and installation, including lawn turfing, borders, and year-round seasonal displays.',
      features: [
        'Soil preparation and enrichment',
        'Premium turf installation',
        'Seasonal planting schemes',
        'Native plant specialists',
        'Aftercare advice included'
      ],
      priceFrom: 'From £35 per sq m'
    },
    {
      icon: <Droplets className="w-12 h-12" />,
      title: 'Drainage Solutions',
      description: 'Professional drainage systems to protect your garden investment from waterlogging and surface water issues.',
      features: [
        'French drain installation',
        'Soakaway systems',
        'Surface water management',
        'Gutter and downpipe solutions',
        'Flooding prevention'
      ],
      priceFrom: 'From £550'
    }
  ];

  const portfolioItems: PortfolioItem[] = [
    {
      id: 1,
      title: 'Contemporary Garden Transformation',
      location: 'Richmond, TW9',
      category: 'patio',
      description: 'Complete garden redesign featuring Indian sandstone patio, cedar raised beds, and integrated LED lighting system.',
      image: 'linear-gradient(135deg, #2D6A4F 0%, #A7C957 100%)',
      beforeAfter: true
    },
    {
      id: 2,
      title: 'Victorian Townhouse Garden',
      location: 'Kew, TW9',
      category: 'complete',
      description: 'Traditional design with York stone paving, herbaceous borders, and bespoke trellis fencing.',
      image: 'linear-gradient(135deg, #52796F 0%, #84A98C 100%)',
      beforeAfter: false
    },
    {
      id: 3,
      title: 'Modern Composite Deck',
      location: 'Kingston, KT1',
      category: 'decking',
      description: 'Low-maintenance composite decking with glass balustrade and built-in planters.',
      image: 'linear-gradient(135deg, #354F52 0%, #52796F 100%)',
      beforeAfter: true
    },
    {
      id: 4,
      title: 'Family Garden Makeover',
      location: 'Teddington, TW11',
      category: 'complete',
      description: 'Child-friendly lawn area, porcelain patio for entertaining, and wildlife pond with waterfall feature.',
      image: 'linear-gradient(135deg, #A7C957 0%, #6A994E 100%)',
      beforeAfter: true
    },
    {
      id: 5,
      title: 'Porcelain Patio Installation',
      location: 'Hampton, TW12',
      category: 'patio',
      description: 'Large format porcelain tiles in wood-effect finish with pergola and outdoor kitchen.',
      image: 'linear-gradient(135deg, #BC4749 0%, #A7C957 100%)',
      beforeAfter: false
    },
    {
      id: 6,
      title: 'Cedar Privacy Screening',
      location: 'Twickenham, TW1',
      category: 'fencing',
      description: 'Custom-designed cedar screening with integrated planters and climbing plant framework.',
      image: 'linear-gradient(135deg, #2D6A4F 0%, #52796F 100%)',
      beforeAfter: false
    },
    {
      id: 7,
      title: 'Wildlife-Friendly Garden',
      location: 'Richmond Park, TW10',
      category: 'complete',
      description: 'Naturalistic planting scheme with native species, log pile habitat, and rainwater harvesting.',
      image: 'linear-gradient(135deg, #6A994E 0%, #A7C957 100%)',
      beforeAfter: true
    },
    {
      id: 8,
      title: 'Hardwood Deck & Pergola',
      location: 'St Margarets, TW1',
      category: 'decking',
      description: 'Premium Ipe hardwood decking with matching pergola structure and integrated lighting.',
      image: 'linear-gradient(135deg, #354F52 0%, #A7C957 100%)',
      beforeAfter: false
    },
    {
      id: 9,
      title: 'Cottage Garden Revival',
      location: 'Hampton Hill, TW12',
      category: 'planting',
      description: 'Traditional cottage garden with reclaimed brick paths, herbaceous borders, and fruit tree planting.',
      image: 'linear-gradient(135deg, #84A98C 0%, #CAD2C5 100%)',
      beforeAfter: true
    }
  ];

  const faqs: FAQ[] = [
    {
      question: 'What areas do you cover?',
      answer: 'We serve Richmond, Kew, Kingston, Twickenham, Teddington, Hampton, and surrounding areas within a 10-mile radius. Coverage includes postcodes: TW1, TW2, TW9, TW10, TW11, TW12, KT1, KT2, KT3, SW13, SW14, and SW15. Contact us to confirm if your postcode is covered.'
    },
    {
      question: 'Do you provide free quotes?',
      answer: 'Yes, we offer free, no-obligation quotes for all our services. We can provide initial estimates over the phone or email, and detailed fixed-price quotes following a site visit. Our quotes are comprehensive with no hidden costs.'
    },
    {
      question: 'How long does a typical project take?',
      answer: 'Project timelines vary: patios typically take 3-7 days, decking 2-5 days, and complete garden transformations 2-4 weeks. We provide accurate timescales during the quote process and keep you informed throughout.'
    },
    {
      question: 'What guarantees do you offer?',
      answer: 'We provide a 5-year workmanship guarantee on all installations. Materials come with manufacturer warranties (up to 25 years on quality timber). We are fully insured with public liability coverage up to £5 million.'
    },
    {
      question: 'Do you use eco-friendly materials?',
      answer: 'Absolutely. We prioritize FSC-certified timber, locally-sourced natural stone, and sustainable practices throughout. We can advise on reclaimed materials, rainwater harvesting, and wildlife-friendly planting schemes for environmentally conscious clients.'
    },
    {
      question: 'Can you help with planning permission?',
      answer: 'Most garden landscaping projects don\'t require planning permission, though some may need building regulations approval. We advise on all requirements and can recommend planning consultants if needed for larger projects or listed properties.'
    },
    {
      question: 'What happens if it rains during my project?',
      answer: 'We monitor weather closely and plan accordingly. Some work (like paving) requires dry conditions, so we schedule appropriately. If weather delays occur, we communicate immediately and adjust timescales. Your project timeline always includes weather contingency.'
    },
    {
      question: 'Do you offer maintenance services?',
      answer: 'Yes, we provide ongoing maintenance packages including decking treatment, patio cleaning, seasonal planting, lawn care, and hedge trimming. Annual maintenance helps protect your investment and keeps your garden looking its best year-round.'
    }
  ];

  const filteredPortfolio = portfolioFilter === 'all'
    ? portfolioItems
    : portfolioItems.filter(item => item.category === portfolioFilter);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your enquiry! We will contact you within 24 hours.');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const toggleFAQ = (index: number) => {
    setExpandedFAQ(expandedFAQ === index ? null : index);
  };

  const openLightbox = (item: PortfolioItem) => {
    setLightboxImage(item);
  };

  const closeLightbox = () => {
    setLightboxImage(null);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'services':
        return <ServicesPage />;
      case 'why-choose-us':
        return <WhyChooseUsPage />;
      case 'portfolio':
        return <PortfolioPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage />;
    }
  };

  const HomePage = () => (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#2D6A4F] to-[#52796F] text-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center">
                  <Leaf className="w-10 h-10 text-[#2D6A4F]" />
                </div>
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold">GreenFrame Landscapes</h1>
                  <p className="text-[#A7C957] text-lg">Transforming Outdoor Spaces</p>
                </div>
              </div>
              <p className="text-xl mb-8 leading-relaxed">
                Award-winning garden landscaping across Richmond, Kingston, and surrounding areas. From contemporary patios to traditional garden designs, we create beautiful outdoor spaces built to last.
              </p>
              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => setCurrentPage('contact')}
                  className="bg-[#A7C957] text-[#2E2E2E] px-8 py-4 rounded-lg font-semibold hover:bg-[#88a644] transition-colors"
                >
                  Get Free Quote
                </button>
                <button
                  onClick={() => setCurrentPage('portfolio')}
                  className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/20 transition-colors border border-white/30"
                >
                  View Portfolio
                </button>
              </div>
              <div className="mt-8 flex flex-wrap gap-6">
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-[#A7C957]" />
                  <span className="text-sm">5-Year Guarantee</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-[#A7C957]" />
                  <span className="text-sm">Fully Insured</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-[#A7C957]" />
                  <span className="text-sm">FSC Certified</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl" style={{ background: 'linear-gradient(135deg, #2D6A4F 0%, #A7C957 100%)' }}>
                <div className="w-full h-full flex items-center justify-center">
                  <Trees className="w-32 h-32 text-white/30" />
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white text-[#2D6A4F] p-6 rounded-xl shadow-xl">
                <div className="flex items-center gap-3">
                  <Star className="w-8 h-8 fill-[#A7C957] text-[#A7C957]" />
                  <div>
                    <div className="font-bold text-2xl">4.9/5</div>
                    <div className="text-sm text-gray-600">150+ Reviews</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-[#F5F5F5] py-12 px-4 border-b border-gray-200">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-[#2D6A4F] mb-2">15+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#2D6A4F] mb-2">850+</div>
              <div className="text-gray-600">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#2D6A4F] mb-2">100%</div>
              <div className="text-gray-600">FSC Certified</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#2D6A4F] mb-2">5-Year</div>
              <div className="text-gray-600">Workmanship Warranty</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#2E2E2E] mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Professional landscaping services tailored to your needs, from design to installation
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.slice(0, 6).map((service, index) => (
              <div key={index} className="bg-[#F5F5F5] p-8 rounded-xl hover:shadow-lg transition-shadow">
                <div className="text-[#2D6A4F] mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold text-[#2E2E2E] mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <div className="text-[#2D6A4F] font-bold text-lg mb-4">{service.priceFrom}</div>
                <button
                  onClick={() => setCurrentPage('services')}
                  className="text-[#2D6A4F] font-semibold hover:text-[#A7C957] transition-colors flex items-center gap-2"
                >
                  Learn More <ExternalLink className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <button
              onClick={() => setCurrentPage('services')}
              className="bg-[#2D6A4F] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#1f4838] transition-colors"
            >
              View All Services
            </button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Preview */}
      <section className="py-20 px-4 bg-gradient-to-br from-[#2D6A4F] to-[#52796F] text-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Choose GreenFrame?</h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Local expertise, sustainable practices, and quality you can trust
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-[#A7C957]" />
              </div>
              <h3 className="text-xl font-bold mb-2">Local Experts</h3>
              <p className="text-white/80">15+ years serving Richmond and surrounding areas</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Leaf className="w-8 h-8 text-[#A7C957]" />
              </div>
              <h3 className="text-xl font-bold mb-2">Eco-Friendly</h3>
              <p className="text-white/80">FSC timber and sustainable materials only</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-[#A7C957]" />
              </div>
              <h3 className="text-xl font-bold mb-2">Fixed Pricing</h3>
              <p className="text-white/80">No hidden costs, transparent quotes</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-[#A7C957]" />
              </div>
              <h3 className="text-xl font-bold mb-2">5-Year Guarantee</h3>
              <p className="text-white/80">Comprehensive workmanship warranty</p>
            </div>
          </div>
          <div className="text-center mt-12">
            <button
              onClick={() => setCurrentPage('why-choose-us')}
              className="bg-[#A7C957] text-[#2E2E2E] px-8 py-4 rounded-lg font-semibold hover:bg-[#88a644] transition-colors"
            >
              Learn More About Us
            </button>
          </div>
        </div>
      </section>

      {/* Service Area Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#2E2E2E] mb-4">Areas We Serve</h2>
            <p className="text-xl text-gray-600">
              Professional landscaping services across South West London
            </p>
          </div>
          <div className="bg-[#F5F5F5] p-8 rounded-xl">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-[#2E2E2E] mb-4">Coverage Areas</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-start gap-2">
                    <MapPin className="w-5 h-5 text-[#2D6A4F] mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-semibold">Richmond</div>
                      <div className="text-sm text-gray-600">TW9, TW10</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <MapPin className="w-5 h-5 text-[#2D6A4F] mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-semibold">Kew</div>
                      <div className="text-sm text-gray-600">TW9</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <MapPin className="w-5 h-5 text-[#2D6A4F] mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-semibold">Kingston</div>
                      <div className="text-sm text-gray-600">KT1, KT2, KT3</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <MapPin className="w-5 h-5 text-[#2D6A4F] mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-semibold">Twickenham</div>
                      <div className="text-sm text-gray-600">TW1, TW2</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <MapPin className="w-5 h-5 text-[#2D6A4F] mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-semibold">Teddington</div>
                      <div className="text-sm text-gray-600">TW11</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <MapPin className="w-5 h-5 text-[#2D6A4F] mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-semibold">Hampton</div>
                      <div className="text-sm text-gray-600">TW12</div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[#2E2E2E] mb-4">Postcode Coverage</h3>
                <p className="text-gray-600 mb-4">
                  We serve the following postcodes within a 10-mile radius of Richmond:
                </p>
                <div className="flex flex-wrap gap-2">
                  {['TW1', 'TW2', 'TW9', 'TW10', 'TW11', 'TW12', 'KT1', 'KT2', 'KT3', 'SW13', 'SW14', 'SW15'].map((postcode) => (
                    <span key={postcode} className="bg-[#2D6A4F] text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {postcode}
                    </span>
                  ))}
                </div>
                <p className="text-sm text-gray-600 mt-4">
                  Not sure if we cover your area? Contact us to check availability.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="py-20 px-4 bg-[#F5F5F5]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#2E2E2E] mb-4">Recent Projects</h2>
            <p className="text-xl text-gray-600">
              Follow our latest garden makeovers on Instagram and Facebook
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {portfolioItems.slice(0, 6).map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
                onClick={() => openLightbox(item)}
              >
                <div className="aspect-[4/3]" style={{ background: item.image }}>
                  <div className="w-full h-full flex items-center justify-center">
                    <Trees className="w-16 h-16 text-white/30" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#2E2E2E] mb-2">{item.title}</h3>
                  <p className="text-[#2D6A4F] text-sm mb-2 flex items-center gap-1">
                    <MapPin className="w-4 h-4" /> {item.location}
                  </p>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                  {item.beforeAfter && (
                    <div className="mt-3">
                      <span className="bg-[#A7C957] text-[#2E2E2E] px-3 py-1 rounded-full text-xs font-semibold">
                        Before & After
                      </span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <button
              onClick={() => setCurrentPage('portfolio')}
              className="bg-[#2D6A4F] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#1f4838] transition-colors"
            >
              View Full Portfolio
            </button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#2E2E2E] mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">
              Everything you need to know about our landscaping services
            </p>
          </div>
          <div className="space-y-4">
            {faqs.slice(0, 6).map((faq, index) => (
              <div key={index} className="bg-[#F5F5F5] rounded-xl overflow-hidden">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-200 transition-colors"
                >
                  <span className="font-semibold text-[#2E2E2E] pr-4">{faq.question}</span>
                  {expandedFAQ === index ? (
                    <ChevronUp className="w-5 h-5 text-[#2D6A4F] flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-[#2D6A4F] flex-shrink-0" />
                  )}
                </button>
                {expandedFAQ === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-[#2D6A4F] to-[#52796F] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Garden?</h2>
          <p className="text-xl mb-8 text-white/90">
            Get your free, no-obligation quote today. Fixed pricing with no hidden costs.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button
              onClick={() => setCurrentPage('contact')}
              className="bg-[#A7C957] text-[#2E2E2E] px-8 py-4 rounded-lg font-semibold hover:bg-[#88a644] transition-colors"
            >
              Get Free Quote
            </button>
            <a
              href="tel:02089401234"
              className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/20 transition-colors border border-white/30 flex items-center gap-2"
            >
              <Phone className="w-5 h-5" />
              020 8940 1234
            </a>
          </div>
        </div>
      </section>
    </div>
  );

  const ServicesPage = () => (
    <div>
      {/* Services Hero */}
      <section className="bg-gradient-to-br from-[#2D6A4F] to-[#52796F] text-white py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Comprehensive landscaping services from design to installation. All work completed to the highest standards with FSC-certified materials and eco-friendly practices.
          </p>
        </div>
      </section>

      {/* Detailed Services */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div key={index} className={`grid md:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                  <div className="aspect-[4/3] rounded-2xl" style={{ background: `linear-gradient(135deg, #2D6A4F 0%, #A7C957 100%)` }}>
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="text-white/30">
                        {service.icon}
                      </div>
                    </div>
                  </div>
                </div>
                <div className={index % 2 === 1 ? 'md:order-1' : ''}>
                  <div className="text-[#2D6A4F] mb-4">{service.icon}</div>
                  <h2 className="text-3xl font-bold text-[#2E2E2E] mb-4">{service.title}</h2>
                  <p className="text-gray-600 mb-6 text-lg">{service.description}</p>
                  <div className="mb-6">
                    <div className="text-2xl font-bold text-[#2D6A4F] mb-4">{service.priceFrom}</div>
                    <ul className="space-y-3">
                      {service.features.map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-[#A7C957] mt-1 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <button
                    onClick={() => setCurrentPage('contact')}
                    className="bg-[#2D6A4F] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#1f4838] transition-colors"
                  >
                    Request Quote
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Information */}
      <section className="py-20 px-4 bg-[#F5F5F5]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#2E2E2E] mb-4">Transparent Pricing</h2>
            <p className="text-xl text-gray-600">
              Fixed quotes with no hidden costs. All prices include materials, labor, and cleanup.
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-[#2E2E2E] mb-4">What's Included</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#A7C957] mt-1 flex-shrink-0" />
                    <span>Free initial consultation and site survey</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#A7C957] mt-1 flex-shrink-0" />
                    <span>Detailed fixed-price quote</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#A7C957] mt-1 flex-shrink-0" />
                    <span>All materials and labor</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#A7C957] mt-1 flex-shrink-0" />
                    <span>Full site cleanup and waste removal</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#A7C957] mt-1 flex-shrink-0" />
                    <span>5-year workmanship warranty</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[#2E2E2E] mb-4">Payment Terms</h3>
                <ul className="space-y-3 text-gray-700">
                  <li>• 25% deposit to secure booking</li>
                  <li>• Progress payments for larger projects</li>
                  <li>• Final payment on completion</li>
                  <li>• All major payment methods accepted</li>
                  <li>• Finance options available on request</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-gradient-to-br from-[#2D6A4F] to-[#52796F] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 text-white/90">
            Contact us today for a free, no-obligation quote on your landscaping project.
          </p>
          <button
            onClick={() => setCurrentPage('contact')}
            className="bg-[#A7C957] text-[#2E2E2E] px-8 py-4 rounded-lg font-semibold hover:bg-[#88a644] transition-colors"
          >
            Get Free Quote
          </button>
        </div>
      </section>
    </div>
  );

  const WhyChooseUsPage = () => (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#2D6A4F] to-[#52796F] text-white py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">Why Choose GreenFrame?</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Local expertise, sustainable practices, and exceptional quality. Here's what sets us apart.
          </p>
        </div>
      </section>

      {/* Main Benefits */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-[#F5F5F5] p-8 rounded-xl">
              <div className="w-16 h-16 bg-[#2D6A4F] rounded-full flex items-center justify-center mb-6">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-[#2E2E2E] mb-4">Local Team with Proven Track Record</h2>
              <p className="text-gray-600 mb-4">
                Based in Richmond for over 15 years, we've completed 850+ successful projects across South West London. Our team knows the local area, soil conditions, and planning requirements inside out.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#A7C957] mt-1 flex-shrink-0" />
                  <span>15+ years serving Richmond and surrounding areas</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#A7C957] mt-1 flex-shrink-0" />
                  <span>850+ completed projects with 4.9/5 rating</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#A7C957] mt-1 flex-shrink-0" />
                  <span>Expert knowledge of local conditions and regulations</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#A7C957] mt-1 flex-shrink-0" />
                  <span>References available from local clients</span>
                </li>
              </ul>
            </div>

            <div className="bg-[#F5F5F5] p-8 rounded-xl">
              <div className="w-16 h-16 bg-[#2D6A4F] rounded-full flex items-center justify-center mb-6">
                <Leaf className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-[#2E2E2E] mb-4">Eco-Friendly Materials & Practices</h2>
              <p className="text-gray-600 mb-4">
                We're committed to sustainable landscaping. All timber is FSC-certified, we source materials locally where possible, and incorporate wildlife-friendly planting in every design.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#A7C957] mt-1 flex-shrink-0" />
                  <span>100% FSC-certified timber as standard</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#A7C957] mt-1 flex-shrink-0" />
                  <span>Locally-sourced natural stone and materials</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#A7C957] mt-1 flex-shrink-0" />
                  <span>Wildlife-friendly and native plant schemes</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#A7C957] mt-1 flex-shrink-0" />
                  <span>Recycling and waste reduction programs</span>
                </li>
              </ul>
            </div>

            <div className="bg-[#F5F5F5] p-8 rounded-xl">
              <div className="w-16 h-16 bg-[#2D6A4F] rounded-full flex items-center justify-center mb-6">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-[#2E2E2E] mb-4">Fixed Pricing with No Hidden Costs</h2>
              <p className="text-gray-600 mb-4">
                We believe in transparent pricing. Our detailed quotes break down all costs, and we stick to the agreed price - no nasty surprises or hidden extras.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#A7C957] mt-1 flex-shrink-0" />
                  <span>Detailed, itemized quotations</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#A7C957] mt-1 flex-shrink-0" />
                  <span>Price guarantee - no hidden extras</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#A7C957] mt-1 flex-shrink-0" />
                  <span>All materials and labor included</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#A7C957] mt-1 flex-shrink-0" />
                  <span>Free site surveys and consultations</span>
                </li>
              </ul>
            </div>

            <div className="bg-[#F5F5F5] p-8 rounded-xl">
              <div className="w-16 h-16 bg-[#2D6A4F] rounded-full flex items-center justify-center mb-6">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-[#2E2E2E] mb-4">5-Year Workmanship Warranties</h2>
              <p className="text-gray-600 mb-4">
                We stand behind our work with comprehensive 5-year workmanship guarantees on all installations. Plus full public liability insurance up to £5 million for complete peace of mind.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#A7C957] mt-1 flex-shrink-0" />
                  <span>5-year workmanship guarantee as standard</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#A7C957] mt-1 flex-shrink-0" />
                  <span>Up to 25-year manufacturer warranties on materials</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#A7C957] mt-1 flex-shrink-0" />
                  <span>£5 million public liability insurance</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#A7C957] mt-1 flex-shrink-0" />
                  <span>Ongoing support and maintenance advice</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-20 px-4 bg-[#F5F5F5]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#2E2E2E] mb-4">Accreditations & Certifications</h2>
            <p className="text-xl text-gray-600">
              Fully qualified, insured, and certified for your peace of mind
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-xl text-center">
              <div className="w-16 h-16 bg-[#2D6A4F] rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-[#2E2E2E] mb-2">FSC Certified</h3>
              <p className="text-sm text-gray-600">100% certified sustainable timber</p>
            </div>
            <div className="bg-white p-6 rounded-xl text-center">
              <div className="w-16 h-16 bg-[#2D6A4F] rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-[#2E2E2E] mb-2">Fully Insured</h3>
              <p className="text-sm text-gray-600">£5M public liability cover</p>
            </div>
            <div className="bg-white p-6 rounded-xl text-center">
              <div className="w-16 h-16 bg-[#2D6A4F] rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-[#2E2E2E] mb-2">Checkatrade</h3>
              <p className="text-sm text-gray-600">Verified member 4.9/5</p>
            </div>
            <div className="bg-white p-6 rounded-xl text-center">
              <div className="w-16 h-16 bg-[#2D6A4F] rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-[#2E2E2E] mb-2">Trust Mark</h3>
              <p className="text-sm text-gray-600">Government endorsed</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#2E2E2E] mb-4">Our Process</h2>
            <p className="text-xl text-gray-600">
              From initial consultation to final completion, we make it simple
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#2D6A4F] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-bold text-[#2E2E2E] mb-2">Consultation</h3>
              <p className="text-gray-600">Free site visit to discuss your vision and requirements</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#2D6A4F] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-bold text-[#2E2E2E] mb-2">Design & Quote</h3>
              <p className="text-gray-600">Detailed design plan with fixed-price quotation</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#2D6A4F] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-bold text-[#2E2E2E] mb-2">Installation</h3>
              <p className="text-gray-600">Professional installation by our expert team</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#2D6A4F] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                4
              </div>
              <h3 className="text-xl font-bold text-[#2E2E2E] mb-2">Aftercare</h3>
              <p className="text-gray-600">5-year guarantee and ongoing maintenance support</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-gradient-to-br from-[#2D6A4F] to-[#52796F] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Experience the GreenFrame Difference</h2>
          <p className="text-xl mb-8 text-white/90">
            Join 850+ satisfied customers across Richmond and South West London.
          </p>
          <button
            onClick={() => setCurrentPage('contact')}
            className="bg-[#A7C957] text-[#2E2E2E] px-8 py-4 rounded-lg font-semibold hover:bg-[#88a644] transition-colors"
          >
            Get Your Free Quote
          </button>
        </div>
      </section>
    </div>
  );

  const PortfolioPage = () => (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#2D6A4F] to-[#52796F] text-white py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">Our Portfolio</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
            Explore our recent garden transformations across Richmond and South West London. Follow our latest garden makeovers on Instagram and Facebook.
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="https://instagram.com/greenframelandscapes"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/20 transition-colors border border-white/30 flex items-center gap-2"
            >
              <Instagram className="w-5 h-5" />
              Follow on Instagram
            </a>
            <a
              href="https://facebook.com/greenframelandscapes"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/20 transition-colors border border-white/30 flex items-center gap-2"
            >
              <Facebook className="w-5 h-5" />
              Follow on Facebook
            </a>
          </div>
        </div>
      </section>

      {/* Filter */}
      <section className="py-8 px-4 bg-[#F5F5F5] border-b border-gray-200">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap gap-4 justify-center">
            <button
              onClick={() => setPortfolioFilter('all')}
              className={`px-6 py-2 rounded-full font-semibold transition-colors ${
                portfolioFilter === 'all'
                  ? 'bg-[#2D6A4F] text-white'
                  : 'bg-white text-[#2E2E2E] hover:bg-gray-100'
              }`}
            >
              All Projects
            </button>
            <button
              onClick={() => setPortfolioFilter('patio')}
              className={`px-6 py-2 rounded-full font-semibold transition-colors ${
                portfolioFilter === 'patio'
                  ? 'bg-[#2D6A4F] text-white'
                  : 'bg-white text-[#2E2E2E] hover:bg-gray-100'
              }`}
            >
              Patios
            </button>
            <button
              onClick={() => setPortfolioFilter('decking')}
              className={`px-6 py-2 rounded-full font-semibold transition-colors ${
                portfolioFilter === 'decking'
                  ? 'bg-[#2D6A4F] text-white'
                  : 'bg-white text-[#2E2E2E] hover:bg-gray-100'
              }`}
            >
              Decking
            </button>
            <button
              onClick={() => setPortfolioFilter('complete')}
              className={`px-6 py-2 rounded-full font-semibold transition-colors ${
                portfolioFilter === 'complete'
                  ? 'bg-[#2D6A4F] text-white'
                  : 'bg-white text-[#2E2E2E] hover:bg-gray-100'
              }`}
            >
              Complete Gardens
            </button>
            <button
              onClick={() => setPortfolioFilter('fencing')}
              className={`px-6 py-2 rounded-full font-semibold transition-colors ${
                portfolioFilter === 'fencing'
                  ? 'bg-[#2D6A4F] text-white'
                  : 'bg-white text-[#2E2E2E] hover:bg-gray-100'
              }`}
            >
              Fencing
            </button>
            <button
              onClick={() => setPortfolioFilter('planting')}
              className={`px-6 py-2 rounded-full font-semibold transition-colors ${
                portfolioFilter === 'planting'
                  ? 'bg-[#2D6A4F] text-white'
                  : 'bg-white text-[#2E2E2E] hover:bg-gray-100'
              }`}
            >
              Planting
            </button>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {filteredPortfolio.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
                onClick={() => openLightbox(item)}
              >
                <div className="aspect-[4/3] relative" style={{ background: item.image }}>
                  <div className="w-full h-full flex items-center justify-center">
                    <Trees className="w-20 h-20 text-white/30" />
                  </div>
                  {item.beforeAfter && (
                    <div className="absolute top-4 right-4">
                      <span className="bg-[#A7C957] text-[#2E2E2E] px-3 py-1 rounded-full text-xs font-semibold">
                        Before & After
                      </span>
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#2E2E2E] mb-2">{item.title}</h3>
                  <p className="text-[#2D6A4F] text-sm mb-3 flex items-center gap-1">
                    <MapPin className="w-4 h-4" /> {item.location}
                  </p>
                  <p className="text-gray-600 text-sm mb-4">{item.description}</p>
                  <button className="text-[#2D6A4F] font-semibold hover:text-[#A7C957] transition-colors flex items-center gap-2">
                    View Details <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social CTA */}
      <section className="py-20 px-4 bg-gradient-to-br from-[#2D6A4F] to-[#52796F] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Follow Our Latest Garden Makeovers</h2>
          <p className="text-xl mb-8 text-white/90">
            See our projects in progress, design inspiration, and seasonal gardening tips on social media.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="https://instagram.com/greenframelandscapes"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#A7C957] text-[#2E2E2E] px-8 py-4 rounded-lg font-semibold hover:bg-[#88a644] transition-colors flex items-center gap-2"
            >
              <Instagram className="w-5 h-5" />
              @greenframelandscapes
            </a>
            <a
              href="https://facebook.com/greenframelandscapes"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/20 transition-colors border border-white/30 flex items-center gap-2"
            >
              <Facebook className="w-5 h-5" />
              GreenFrame Landscapes
            </a>
          </div>
        </div>
      </section>
    </div>
  );

  const ContactPage = () => (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#2D6A4F] to-[#52796F] text-white py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">Get In Touch</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Ready to transform your garden? Contact us for a free, no-obligation quote.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-[#2E2E2E] mb-6">Request a Free Quote</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-[#2E2E2E] mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2D6A4F]"
                    placeholder="John Smith"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#2E2E2E] mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2D6A4F]"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#2E2E2E] mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2D6A4F]"
                    placeholder="020 8940 1234"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#2E2E2E] mb-2">
                    Postcode *
                  </label>
                  <input
                    type="text"
                    name="postcode"
                    required
                    value={formData.postcode}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2D6A4F]"
                    placeholder="TW9 1AB"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#2E2E2E] mb-2">
                    Service Required *
                  </label>
                  <select
                    name="service"
                    required
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2D6A4F]"
                  >
                    <option value="">Select a service...</option>
                    <option value="decking">Decking & Fencing</option>
                    <option value="patio">Patios & Paving</option>
                    <option value="design">Garden Design</option>
                    <option value="lighting">Lighting & Features</option>
                    <option value="planting">Planting & Turfing</option>
                    <option value="drainage">Drainage Solutions</option>
                    <option value="other">Other / Multiple Services</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#2E2E2E] mb-2">
                    Project Details
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2D6A4F]"
                    placeholder="Please describe your project requirements..."
                  />
                </div>

                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    name="siteVisit"
                    id="siteVisit"
                    checked={formData.siteVisit}
                    onChange={handleInputChange}
                    className="mt-1 w-5 h-5 text-[#2D6A4F] border-gray-300 rounded focus:ring-[#2D6A4F]"
                  />
                  <label htmlFor="siteVisit" className="text-sm text-gray-700">
                    I would like to arrange a free site visit for a detailed quote
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#2D6A4F] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#1f4838] transition-colors"
                >
                  Request Free Quote
                </button>

                <p className="text-sm text-gray-600 text-center">
                  We'll respond within 24 hours. No spam, no hidden costs.
                </p>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold text-[#2E2E2E] mb-6">Contact Information</h2>

              <div className="bg-[#F5F5F5] p-8 rounded-xl mb-8">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#2D6A4F] rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-[#2E2E2E] mb-1">Phone</h3>
                      <a href="tel:02089401234" className="text-[#2D6A4F] hover:text-[#A7C957]">
                        020 8940 1234
                      </a>
                      <p className="text-sm text-gray-600 mt-1">Mon-Fri: 8am-6pm, Sat: 9am-4pm</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#2D6A4F] rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-[#2E2E2E] mb-1">Email</h3>
                      <a href="mailto:info@greenframelandscapes.co.uk" className="text-[#2D6A4F] hover:text-[#A7C957]">
                        info@greenframelandscapes.co.uk
                      </a>
                      <p className="text-sm text-gray-600 mt-1">We respond within 24 hours</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#2D6A4F] rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-[#2E2E2E] mb-1">Service Area</h3>
                      <p className="text-gray-700">Richmond, Kew, Kingston,</p>
                      <p className="text-gray-700">Twickenham & Surrounding Areas</p>
                      <p className="text-sm text-gray-600 mt-1">10-mile radius coverage</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#2D6A4F] rounded-full flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-[#2E2E2E] mb-1">Opening Hours</h3>
                      <p className="text-gray-700">Monday - Friday: 8:00 - 18:00</p>
                      <p className="text-gray-700">Saturday: 9:00 - 16:00</p>
                      <p className="text-gray-700">Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="bg-gradient-to-br from-[#2D6A4F] to-[#52796F] p-8 rounded-xl text-white">
                <h3 className="text-2xl font-bold mb-4">Follow Our Work</h3>
                <p className="text-white/90 mb-6">
                  See our latest garden transformations and get design inspiration on social media.
                </p>
                <div className="flex gap-4">
                  <a
                    href="https://instagram.com/greenframelandscapes"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-white/10 backdrop-blur-sm px-4 py-3 rounded-lg hover:bg-white/20 transition-colors flex items-center justify-center gap-2"
                  >
                    <Instagram className="w-5 h-5" />
                    <span className="font-semibold">Instagram</span>
                  </a>
                  <a
                    href="https://facebook.com/greenframelandscapes"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-white/10 backdrop-blur-sm px-4 py-3 rounded-lg hover:bg-white/20 transition-colors flex items-center justify-center gap-2"
                  >
                    <Facebook className="w-5 h-5" />
                    <span className="font-semibold">Facebook</span>
                  </a>
                </div>
              </div>

              {/* Emergency/Quick Response */}
              <div className="mt-8 bg-[#A7C957] p-6 rounded-xl">
                <h3 className="text-xl font-bold text-[#2E2E2E] mb-2">Quick Response Guarantee</h3>
                <p className="text-[#2E2E2E]/90">
                  All enquiries are responded to within 24 hours. For urgent matters, please call us directly during business hours.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 bg-[#F5F5F5]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#2E2E2E] mb-4">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold text-[#2E2E2E] pr-4">{faq.question}</span>
                  {expandedFAQ === index ? (
                    <ChevronUp className="w-5 h-5 text-[#2D6A4F] flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-[#2D6A4F] flex-shrink-0" />
                  )}
                </button>
                {expandedFAQ === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );

  return (
    <div className="min-h-screen bg-white">
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "GreenFrame Landscapes",
          "image": "https://greenframelandscapes.co.uk/logo.png",
          "@id": "https://greenframelandscapes.co.uk",
          "url": "https://greenframelandscapes.co.uk",
          "telephone": "020-8940-1234",
          "priceRange": "££-£££",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Richmond",
            "addressLocality": "London",
            "postalCode": "TW9",
            "addressCountry": "GB"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 51.4613,
            "longitude": -0.3037
          },
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
              "closes": "16:00"
            }
          ],
          "sameAs": [
            "https://facebook.com/greenframelandscapes",
            "https://instagram.com/greenframelandscapes"
          ],
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "150"
          }
        })}
      </script>

      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center gap-3 cursor-pointer" onClick={() => setCurrentPage('home')}>
              <div className="w-12 h-12 bg-[#2D6A4F] rounded-lg flex items-center justify-center">
                <Leaf className="w-8 h-8 text-white" />
              </div>
              <div>
                <div className="text-xl font-bold text-[#2E2E2E]">GreenFrame Landscapes</div>
                <div className="text-xs text-[#A7C957]">Transforming Outdoor Spaces</div>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <button
                onClick={() => setCurrentPage('home')}
                className={`font-semibold transition-colors ${
                  currentPage === 'home' ? 'text-[#2D6A4F]' : 'text-gray-600 hover:text-[#2D6A4F]'
                }`}
              >
                Home
              </button>
              <button
                onClick={() => setCurrentPage('services')}
                className={`font-semibold transition-colors ${
                  currentPage === 'services' ? 'text-[#2D6A4F]' : 'text-gray-600 hover:text-[#2D6A4F]'
                }`}
              >
                Services
              </button>
              <button
                onClick={() => setCurrentPage('why-choose-us')}
                className={`font-semibold transition-colors ${
                  currentPage === 'why-choose-us' ? 'text-[#2D6A4F]' : 'text-gray-600 hover:text-[#2D6A4F]'
                }`}
              >
                Why Choose Us
              </button>
              <button
                onClick={() => setCurrentPage('portfolio')}
                className={`font-semibold transition-colors ${
                  currentPage === 'portfolio' ? 'text-[#2D6A4F]' : 'text-gray-600 hover:text-[#2D6A4F]'
                }`}
              >
                Portfolio
              </button>
              <button
                onClick={() => setCurrentPage('contact')}
                className="bg-[#2D6A4F] text-white px-6 py-2 rounded-lg font-semibold hover:bg-[#1f4838] transition-colors"
              >
                Get Quote
              </button>
              <a
                href="tel:02089401234"
                className="flex items-center gap-2 text-[#2D6A4F] font-semibold hover:text-[#A7C957] transition-colors"
              >
                <Phone className="w-5 h-5" />
                020 8940 1234
              </a>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-[#2E2E2E] p-2"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-200">
              <nav className="flex flex-col gap-4">
                <button
                  onClick={() => {
                    setCurrentPage('home');
                    setMobileMenuOpen(false);
                  }}
                  className={`text-left font-semibold py-2 ${
                    currentPage === 'home' ? 'text-[#2D6A4F]' : 'text-gray-600'
                  }`}
                >
                  Home
                </button>
                <button
                  onClick={() => {
                    setCurrentPage('services');
                    setMobileMenuOpen(false);
                  }}
                  className={`text-left font-semibold py-2 ${
                    currentPage === 'services' ? 'text-[#2D6A4F]' : 'text-gray-600'
                  }`}
                >
                  Services
                </button>
                <button
                  onClick={() => {
                    setCurrentPage('why-choose-us');
                    setMobileMenuOpen(false);
                  }}
                  className={`text-left font-semibold py-2 ${
                    currentPage === 'why-choose-us' ? 'text-[#2D6A4F]' : 'text-gray-600'
                  }`}
                >
                  Why Choose Us
                </button>
                <button
                  onClick={() => {
                    setCurrentPage('portfolio');
                    setMobileMenuOpen(false);
                  }}
                  className={`text-left font-semibold py-2 ${
                    currentPage === 'portfolio' ? 'text-[#2D6A4F]' : 'text-gray-600'
                  }`}
                >
                  Portfolio
                </button>
                <button
                  onClick={() => {
                    setCurrentPage('contact');
                    setMobileMenuOpen(false);
                  }}
                  className="bg-[#2D6A4F] text-white px-6 py-3 rounded-lg font-semibold text-center"
                >
                  Get Quote
                </button>
                <a
                  href="tel:02089401234"
                  className="flex items-center gap-2 text-[#2D6A4F] font-semibold py-2"
                >
                  <Phone className="w-5 h-5" />
                  020 8940 1234
                </a>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main>
        {renderPage()}
      </main>

      {/* Footer */}
      <footer className="bg-[#2E2E2E] text-white py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-[#2D6A4F] rounded-lg flex items-center justify-center">
                  <Leaf className="w-6 h-6 text-white" />
                </div>
                <div className="text-lg font-bold">GreenFrame Landscapes</div>
              </div>
              <p className="text-gray-400 text-sm mb-4">
                Award-winning garden landscaping across Richmond and South West London.
              </p>
              <div className="flex gap-3">
                <a
                  href="https://instagram.com/greenframelandscapes"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="https://facebook.com/greenframelandscapes"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                >
                  <Facebook className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4">Services</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><button onClick={() => setCurrentPage('services')} className="hover:text-white transition-colors">Decking & Fencing</button></li>
                <li><button onClick={() => setCurrentPage('services')} className="hover:text-white transition-colors">Patios & Paving</button></li>
                <li><button onClick={() => setCurrentPage('services')} className="hover:text-white transition-colors">Garden Design</button></li>
                <li><button onClick={() => setCurrentPage('services')} className="hover:text-white transition-colors">Lighting & Features</button></li>
                <li><button onClick={() => setCurrentPage('services')} className="hover:text-white transition-colors">Planting & Turfing</button></li>
                <li><button onClick={() => setCurrentPage('services')} className="hover:text-white transition-colors">Drainage Solutions</button></li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><button onClick={() => setCurrentPage('why-choose-us')} className="hover:text-white transition-colors">Why Choose Us</button></li>
                <li><button onClick={() => setCurrentPage('portfolio')} className="hover:text-white transition-colors">Portfolio</button></li>
                <li><button onClick={() => setCurrentPage('contact')} className="hover:text-white transition-colors">Contact</button></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms & Conditions</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4">Contact</h3>
              <ul className="space-y-3 text-gray-400 text-sm">
                <li className="flex items-start gap-2">
                  <Phone className="w-4 h-4 mt-1 flex-shrink-0" />
                  <a href="tel:02089401234" className="hover:text-white transition-colors">
                    020 8940 1234
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <Mail className="w-4 h-4 mt-1 flex-shrink-0" />
                  <a href="mailto:info@greenframelandscapes.co.uk" className="hover:text-white transition-colors">
                    info@greenframelandscapes.co.uk
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                  <span>Richmond, London TW9</span>
                </li>
                <li className="flex items-start gap-2">
                  <Clock className="w-4 h-4 mt-1 flex-shrink-0" />
                  <span>Mon-Fri: 8am-6pm<br />Sat: 9am-4pm</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Trust Badges */}
          <div className="border-t border-gray-700 pt-8 mb-8">
            <div className="flex flex-wrap justify-center gap-8 text-center">
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-[#A7C957]" />
                <span className="text-sm">FSC Certified</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-[#A7C957]" />
                <span className="text-sm">£5M Insured</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-[#A7C957]" />
                <span className="text-sm">5-Year Guarantee</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-[#A7C957]" />
                <span className="text-sm">4.9/5 Rating</span>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; 2025 GreenFrame Landscapes. All rights reserved.</p>
            <p className="mt-2">Registered in England & Wales. Company No. 12345678</p>
          </div>
        </div>
      </footer>

      {/* Portfolio Lightbox */}
      {lightboxImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <div className="max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            <div className="bg-white rounded-2xl overflow-hidden">
              <div className="aspect-[4/3] relative" style={{ background: lightboxImage.image }}>
                <div className="w-full h-full flex items-center justify-center">
                  <Trees className="w-32 h-32 text-white/30" />
                </div>
                <button
                  onClick={closeLightbox}
                  className="absolute top-4 right-4 w-10 h-10 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
                {lightboxImage.beforeAfter && (
                  <div className="absolute top-4 left-4">
                    <span className="bg-[#A7C957] text-[#2E2E2E] px-4 py-2 rounded-full text-sm font-semibold">
                      Before & After Available
                    </span>
                  </div>
                )}
              </div>
              <div className="p-8">
                <h3 className="text-3xl font-bold text-[#2E2E2E] mb-3">{lightboxImage.title}</h3>
                <p className="text-[#2D6A4F] mb-4 flex items-center gap-2">
                  <MapPin className="w-5 h-5" /> {lightboxImage.location}
                </p>
                <p className="text-gray-600 text-lg mb-6">{lightboxImage.description}</p>
                <div className="flex gap-4">
                  <button
                    onClick={() => setCurrentPage('contact')}
                    className="bg-[#2D6A4F] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#1f4838] transition-colors"
                  >
                    Request Similar Quote
                  </button>
                  <button
                    onClick={closeLightbox}
                    className="bg-gray-200 text-[#2E2E2E] px-6 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-colors"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}