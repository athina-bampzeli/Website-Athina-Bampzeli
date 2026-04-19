// components/CookieBanner.tsx

"use client";

import { useEffect, useState } from "react";
import Script from "next/script";
import { GiCookie } from "react-icons/gi";

export default function CookieBanner() {
  const [consent, setConsent] = useState<string | null>(null);

  useEffect(() => {
    const savedConsent = localStorage.getItem("cookie-consent");
    setConsent(savedConsent);
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setConsent("accepted");
  };

  const declineCookies = () => {
    localStorage.setItem("cookie-consent", "declined");
    setConsent("declined");
  };

  const resetConsent = () => {
    localStorage.removeItem("cookie-consent");
    setConsent(null);
  };

  return (
    <>
      {consent === "accepted" && (
        <>
          <Script
            src="https://www.googletagmanager.com/gtag/js?id=G-BE5K0YYK7G"
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){window.dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-BE5K0YYK7G', {
                anonymize_ip: true
              });
            `}
          </Script>
        </>
      )}

      {consent === null && (
        <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg border-t p-4 z-50">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-700">
              This website uses analytics cookies to understand visitor traffic.
            </p>

            <div className="flex gap-2">
              <button
                onClick={declineCookies}
                className="px-4 py-2 rounded border text-gray-700"
              >
                Decline
              </button>
              <button
                onClick={acceptCookies}
                className="px-4 py-2 rounded bg-black text-white"
              >
                Accept
              </button>
            </div>
          </div>
        </div>
      )}


      {consent && (
        <button
          onClick={resetConsent}
          className="fixed bottom-4 right-4 text-gray-700 p-3 hover:bg-gray-100 z-50"
          aria-label="Cookie Settings"
        >
          <GiCookie className="w-7 h-7" />
        </button>
      )}
    </>
  );
}