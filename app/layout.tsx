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
  title: "BuzzBold | #1 Marketing Agency - Transform Your Brand",
  description:
    "Award-winning marketing agency specializing in brand strategy, digital marketing, and web development. We've helped 500+ brands achieve 250% average ROI. Let's create your success story.",
  keywords: [
    "marketing agency",
    "brand strategy",
    "digital marketing",
    "web development",
    "SEO",
    "content marketing",
    "brand identity",
  ],
  authors: [{ name: "BuzzBold Team" }],
  openGraph: {
    title: "BuzzBold | #1 Marketing Agency - Transform Your Brand",
    description:
      "Award-winning marketing agency that delivers results. 500+ happy clients, 250% average ROI, 50+ industry awards.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "BuzzBold | #1 Marketing Agency",
    description:
      "Transform your brand with data-driven marketing strategies that drive exponential growth.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white`}
      >
        {children}
      </body>
    </html>
  );
}
