// app/layout.tsx

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Athina Bampzeli",
  description:
    "Chemical Engineer focused on process systems engineering and machine learning.",

  openGraph: {
    title: "Athina Bampzeli",
    description:
      "Chemical Engineer focused on process systems engineering and machine learning.",
    url: "https://your-domain.com",
    siteName: "Athina Bampzeli Portfolio",
    images: [
      {
        url: "https://your-domain.com/profile.jpg", 
        width: 800,
        height: 800,
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Athina Bampzeli",
    description:
      "Chemical Engineer focused on process systems engineering and machine learning.",
    images: ["https://your-domain.com/profile.jpg"],
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
        
        {/* ✅ Navbar visible everywhere */}
        <Header />

        {/* ✅ Page content */}
        <main className="flex-1">
          {children}
        </main>

        {/* ✅ Footer everywhere */}
        <Footer />

      </body>
    </html>
  );
}


