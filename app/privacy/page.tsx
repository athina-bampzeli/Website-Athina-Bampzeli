import Link from "next/link";

export const metadata = {
  title: "Privacy",
};

export default function PrivacyPage() {
  return (
    <main className="max-w-6xl mx-auto text-center px-6 py-30">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>

      <section className="space-y-6 mb-8 text-gray-700 leading-relaxed">

        <p>
          This website uses Vercel Analytics to collect anonymous usage statistics,
          such as page views, browser type, device type and approximate geographic
          region. This information is used solely to understand website traffic
          and improve the user experience. Vercel Analytics does not use cookies
          for basic analytics and does not identify individual visitors. For more
          information, please review Vercel's privacy policy:
          {" "}
          <a
            href="https://vercel.com/legal/privacy-policy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            Vercel Privacy Policy
          </a>
        </p>
        
        <p>
          This website uses Google Analytics, a web analytics service provided by Google,
          to better understand how visitors interact with the site. Google Analytics may
          collect anonymized information such as pages visited, time spent on
          pages, browser type, device type, approximate geographic region and
          referring website. IP anonymization is enabled, meaning your IP address is shortened
          before being processed. Analytics cookies are used only after you
          provide consent through the cookie banner. These analytics cookies
          may remain active for up to 2 years unless deleted by the user.
          You may withdraw or change your cookie preferences at any time through
          the cookie settings option. For more information, please review
          Google's privacy policy:
          {" "}
          <a
            href="https://policies.google.com/privacy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            Google Privacy Policy
          </a>
        </p>

      </section>
    </main>
  );
}