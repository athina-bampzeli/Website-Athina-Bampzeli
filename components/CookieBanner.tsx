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
    delete (window as any)["ga-disable-G-BE5K0YYK7G"];
    localStorage.setItem("cookie-consent", "accepted");
    setConsent("accepted");
  };

  const declineCookies = () => {
    localStorage.setItem("cookie-consent", "declined");
    (window as any)["ga-disable-G-BE5K0YYK7G"] = true;
    (window as any).dataLayer = [];
    document.cookie = "_ga=; Max-Age=0; path=/";
    document.cookie = "_ga_BE5K0YYK7G=; Max-Age=0; path=/";
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
          <Script id="gtm" strategy="afterInteractive">
            {`
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-W76BDN5W');
            `}
          </Script>

          <noscript>
            <iframe
              src="https://www.googletagmanager.com/ns.html?id=GTM-W76BDN5W"
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            />
          </noscript>
        </>
      )}

      {consent === null && (
        <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg border-t p-4 z-50">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-700">
              This website uses analytics cookies to understand which research pages visitors find most
              useful, helping improve the site.
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