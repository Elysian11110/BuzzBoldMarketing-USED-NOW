import Script from "next/script";
import NewHeader from "./components/NewHeader";
import Hero from "./components/Hero";
import ExampleWork from "./components/ExampleWork";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  const professionalServiceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "BuzzBold Marketing",
    url: "https://buzzboldmarketing.com",
    image: "https://buzzboldmarketing.com/og-image.jpg",
    description:
      "BuzzBold Marketing designs high-converting websites and SEO campaigns for UK tradesmen and home service businesses.",
    areaServed: {
      "@type": "Country",
      name: "United Kingdom",
    },
    serviceType: [
      "Tradesman website design",
      "Local SEO for home services",
      "Digital marketing for UK trades businesses",
    ],
    makesOffer: [
      {
        "@type": "Offer",
        name: "Website design & build",
        description: "Responsive, conversion-focused websites built with Next.js for UK trades and service brands.",
      },
      {
        "@type": "Offer",
        name: "Local SEO programmes",
        description:
          "Local SEO roadmaps covering on-page optimisation, Google Business Profile management, and review systems.",
      },
      {
        "@type": "Offer",
        name: "Always-on optimisation",
        description:
          "Ongoing conversion rate optimisation, landing page experimentation, and campaign reporting for trades companies.",
      },
    ],
    sameAs: [
      "https://www.instagram.com/buzzboldmarketing",
      "https://www.facebook.com/buzzbold",
      "https://www.linkedin.com/company/buzzboldmarketing",
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "BuzzBold Marketing",
    url: "https://buzzboldmarketing.com",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://buzzboldmarketing.com/?s={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <div className="min-h-screen bg-black">
      <Script id="schema-professional-service" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(professionalServiceSchema)}
      </Script>
      <Script id="schema-website" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(websiteSchema)}
      </Script>
      <NewHeader />
      <main>
        <div id="home">
          <Hero />
        </div>
        <div id="examples">
          <ExampleWork />
        </div>
        <div id="services">
          <Services />
        </div>
        <div id="portfolio">
          <Portfolio />
        </div>
        <Testimonials />
        <div id="contact">
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  );
}
