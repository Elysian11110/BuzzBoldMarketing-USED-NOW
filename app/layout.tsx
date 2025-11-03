import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://buzzboldmarketing.com'),
  title: {
    default: "BuzzBold Marketing | Get Found. Get Booked. - SEO & Websites for Tradesmen",
    template: "%s | BuzzBold Marketing"
  },
  description:
    "BuzzBold Marketing helps UK tradesmen dominate their local market with professional websites, powerful SEO, and social media that brings in real customers. Founded by Zineb Akki & Riley Dias. Get your website live in 7 days.",
  keywords: [
    "tradesman marketing",
    "tradesman websites",
    "plumber SEO",
    "electrician website",
    "builder marketing",
    "local SEO for tradesmen",
    "Google My Business setup",
    "tradesman social media",
    "roofer website design",
    "HVAC marketing",
    "landscaper SEO",
    "trade business marketing UK",
    "get more customers tradesman",
    "tradesman lead generation",
    "trade business websites"
  ],
  authors: [{ name: "Zineb Akki" }, { name: "Riley Dias" }],
  creator: "BuzzBold Marketing",
  publisher: "BuzzBold Marketing",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: "BuzzBold Marketing | Get Found. Get Booked. - SEO & Websites for Tradesmen",
    description:
      "Professional websites, powerful SEO, and social media for UK tradesmen. Get your website live in 7 days. Founded by Zineb Akki & Riley Dias.",
    type: "website",
    locale: "en_GB",
    url: "https://buzzboldmarketing.com",
    siteName: "BuzzBold Marketing",
  },
  twitter: {
    card: "summary_large_image",
    title: "BuzzBold Marketing | Get Found. Get Booked.",
    description:
      "We help UK tradesmen dominate their local market with websites, SEO, and social media that brings in real customers.",
    creator: "@buzzboldmarketing",
  },
  verification: {
    google: "google-site-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'BuzzBold Marketing',
    alternateName: 'BuzzBold',
    description: 'BuzzBold Marketing helps UK tradesmen dominate their local market with professional websites, powerful SEO, and social media management. Founded by Zineb Akki & Riley Dias.',
    url: 'https://buzzboldmarketing.com',
    logo: 'https://buzzboldmarketing.com/logo.png',
    slogan: 'Get Found. Get Booked. Get BuzzBold.',
    founder: [
      {
        '@type': 'Person',
        name: 'Zineb Akki',
        jobTitle: 'Co-Founder & Tech Expert'
      },
      {
        '@type': 'Person',
        name: 'Riley Dias',
        jobTitle: 'Co-Founder & Sales Expert'
      }
    ],
    areaServed: 'GB',
    serviceArea: {
      '@type': 'Country',
      name: 'United Kingdom'
    },
    knowsAbout: ['SEO', 'Web Design', 'Social Media Marketing', 'Google My Business', 'Local SEO for Tradesmen'],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      email: 'Support@buzzboldmarketing.com',
      availableLanguage: 'English'
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5',
      reviewCount: '100',
      bestRating: '5'
    },
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'GB'
    }
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white`}
      >
        {children}
      </body>
    </html>
  );
}
