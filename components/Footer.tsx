// components/Footer.tsx

import ShareButtons from "./ShareButtons";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 mt-10 py-6 px-6">

      <div className="max-w-6xl mx-auto flex flex-col items-center gap-3 text-center">

        {/* Copyright */}
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} Athina Bampzeli. All rights reserved.
        </p>

        {/* Share row */}
        <div className="flex items-center gap-3">
          <span className="text-sm text-gray-600">
            Share on:
          </span>

          <ShareButtons />
        </div>

      </div>
    </footer>
  );
}