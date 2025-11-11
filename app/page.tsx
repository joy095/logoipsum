// app/page.tsx
import { Metadata } from "next";
import Clients from "@/components/Clients";
import Company from "@/components/Company";
import Hero from "@/components/Hero";
import HiringProcess from "@/components/HiringProcess";
import UserGuide from "@/components/UserGuide";
import WhyHire from "@/components/WhyHire";
import Hire from "@/components/Work";

// === DYNAMIC METADATA (SEO + SOCIAL) ===
export const metadata: Metadata = {
  // Core SEO
  title: "Hire Top Remote Talent in India | Fast, Vetted & Affordable",
  description:
    "Hire pre-vetted remote developers, designers, and marketers from India. Save 70% on costs with 48-hour matching. Trusted by 500+ global companies.",

  // Robots
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Open Graph (Facebook, LinkedIn, WhatsApp, etc.)
  openGraph: {
    title: "Hire Top Remote Talent in India | Save 70% on Costs",
    description:
      "Get matched with pre-vetted Indian remote talent in 48 hours. Developers, designers, marketers — all at 1/3rd the cost.",
    url: "https://logoipsum-pink-omega.vercel.app",
    siteName: "YourCompany",
    images: [
      {
        url: "https://logoipsum-pink-omega.vercel.app/home.png",
        width: 1200,
        height: 630,
        alt: "Hire Remote Indian Talent - Save 70% - 48hr Matching",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  // Twitter / X Cards
  twitter: {
    card: "summary_large_image",
    title: "Hire Vetted Indian Remote Talent in 48 Hours",
    description:
      "Save 70% on hiring. Pre-screened developers, designers & marketers.",
    images: ["https://logoipsum-pink-omega.vercel.app/twitter-card.jpg"],
    site: "@yourcompany",
    creator: "@yourfounder",
  },
};

// === STRUCTURED DATA (JSON-LD) ===
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "YourCompany",
  url: "https://logoipsum-pink-omega.vercel.app",
  logo: "https://logoipsum-pink-omega.vercel.app/logo.png",
  description:
    "Hire top remote talent from India. Pre-vetted developers, designers, and marketers at 70% lower costs.",
  sameAs: [
    "https://twitter.com/https://logoipsum-pink-omega.vercel.app",
    "https://linkedin.com/company/https://logoipsum-pink-omega.vercel.app",
    "https://facebook.com/https://logoipsum-pink-omega.vercel.app",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    email: "hello@https://logoipsum-pink-omega.vercel.app",
    contactType: "Customer Support",
  },
  address: {
    "@type": "PostalAddress",
    addressCountry: "IN",
  },
};

export default function Home() {
  return (
    <>
      {/* Inject Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <Hero />
      <Hire />
      <WhyHire />
      <Company />
      <HiringProcess />
      <UserGuide />
      <Clients />
    </>
  );
}
