// components/Footer.tsx

import ShareButtons from "./ShareButtons";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 mt-10 py-6 px-6">

      <div className="max-w-6xl mx-auto flex flex-col items-center gap-3 text-center">

        {/* Copyright */}
        <p className="text-sm text-gray-600">
          © {new Date().getFullYear()} Athina Bampzeli. All rights reserved.
        </p>
        <p className="text-sm text-gray-600">Template by{" "}

                    <a
                      href="https://github.com/athina-bampzeli/Website-Athina-Bampzeli"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-gray-600 hover:underline"
                    >
                      Athina Bampzeli
                    </a>

        </p>

        {/* Share row */}
        <div className="flex items-center gap-3">
          <span className="text-sm text-gray-600">
            Share on:
          </span>

          <ShareButtons />
        </div>

        {/* Privacy Policy */}
        <Link href="/privacy" className="text-sm text-gray-600 hover:underline">
          Privacy Policy
        </Link>

      </div>
      
    </footer>
  );
}