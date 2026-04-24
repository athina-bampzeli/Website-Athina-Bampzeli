// app/layout.tsx

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Navbar";
import CookieBanner from "@/components/CookieBanner";
import { Analytics } from "@vercel/analytics/react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://athinabampzeli.com"),
  title: {
    default: "Athina Bampzeli | Chemical Engineer & Researcher",
    template: "%s | Athina Bampzeli",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  description:
    "Official portfolio of Athina Bampzeli, Chemical Engineer specializing in process systems engineering, machine learning, and research projects.",

  keywords: [
    "Athina Bampzeli",
    "Athina Babzeli",
    "Αθηνά Μπαμπζέλη",
    "Athina Bampzeli chemical engineer",
    "Athina Bampzeli researcher",
    "Athina Bampzeli portfolio",
    "chemical engineer machine learning",
    "χημικός μηχανικός μηχανική μάθηση",
  ],
  openGraph: {
    title: "Athina Bampzeli | Chemical Engineer & Researcher",
    description:
      "Chemical Engineer focused on process systems engineering and machine learning.",
    url: "https://athinabampzeli.com",
    siteName: "Athina Bampzeli Portfolio",
    images: [
      {
        url: "/profile.jpg", 
        width: 800,
        height: 800,
      },
    ],
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
  },

  twitter: {
    card: "summary_large_image",
    title: "Athina Bampzeli",
    description:
      "Chemical Engineer focused on process systems engineering and machine learning.",
    images: ["https://athinabampzeli.com/profile.jpg"],
  },
  alternates: {
  canonical: "/",
},
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <Header />

        <main className="flex-1">{children}</main>

        <Footer />

        <Analytics />

        <CookieBanner />
      </body>
    </html>
  );
}


