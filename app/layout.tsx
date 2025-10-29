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
  metadataBase: new URL('https://buzzbold.com'),
  title: {
    default: "BuzzBold | #1 Marketing Agency - Transform Your Brand",
    template: "%s | BuzzBold"
  },
  description:
    "Award-winning marketing agency specializing in brand strategy, digital marketing, and web development. We've helped 500+ brands achieve 250% average ROI. Let's create your success story.",
  keywords: [
    "marketing agency",
    "brand strategy",
    "digital marketing",
    "web development",
    "SEO services",
    "content marketing",
    "brand identity",
    "social media marketing",
    "PPC advertising",
    "growth marketing",
    "ROI optimization",
    "creative agency"
  ],
  authors: [{ name: "BuzzBold Team" }],
  creator: "BuzzBold",
  publisher: "BuzzBold Marketing Agency",
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
    title: "BuzzBold | #1 Marketing Agency - Transform Your Brand",
    description:
      "Award-winning marketing agency that delivers results. 500+ happy clients, 250% average ROI, 50+ industry awards.",
    type: "website",
    locale: "en_US",
    url: "https://buzzbold.com",
    siteName: "BuzzBold",
  },
  twitter: {
    card: "summary_large_image",
    title: "BuzzBold | #1 Marketing Agency",
    description:
      "Transform your brand with data-driven marketing strategies that drive exponential growth.",
    creator: "@buzzbold",
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
    name: 'BuzzBold',
    description: 'Award-winning marketing agency specializing in brand strategy, digital marketing, and web development.',
    url: 'https://buzzbold.com',
    logo: 'https://buzzbold.com/logo.png',
    sameAs: [
      'https://twitter.com/buzzbold',
      'https://facebook.com/buzzbold',
      'https://linkedin.com/company/buzzbold',
      'https://instagram.com/buzzbold'
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      email: 'hello@buzzbold.com'
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '500'
    },
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'US'
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white`}
      >
        {children}
      </body>
    </html>
  );
}
