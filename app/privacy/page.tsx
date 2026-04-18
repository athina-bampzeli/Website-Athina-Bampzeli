import Link from "next/link";

export default function PrivacyPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>

      <section className="space-y-6 text-gray-700 leading-relaxed">

        <p>
          This website uses Google Analytics, a web analytics service provided by Google,
          to better understand how visitors interact with the site.
        </p>

        <p>
          Google Analytics may collect anonymized information such as:
        </p>

        <ul className="list-disc pl-6">
          <li>Pages visited</li>
          <li>Time spent on pages</li>
          <li>Browser type</li>
          <li>Device type</li>
          <li>Approximate geographic region</li>
          <li>Referring website</li>
        </ul>

        <p>
          IP anonymization is enabled, meaning your IP address is shortened before being processed.
        </p>

        <p>
          Analytics cookies are used only after you provide consent through the cookie banner.
        </p>

        <p>
          These analytics cookies may remain active for up to 2 years unless deleted by the user.
        </p>

        <p>
          You may withdraw or change your cookie preferences at any time through the cookie settings option.
        </p>

        <p>
          For more information, please review Google's privacy policy:
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