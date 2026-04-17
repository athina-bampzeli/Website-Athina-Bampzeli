// components/ShareButtons.tsx

"use client";

import { useEffect, useState } from "react";
import {
  FaLinkedin,
  FaFacebook,
  FaWhatsapp,
  FaEnvelope,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function ShareButtons() {
  const [url, setUrl] = useState("");

  useEffect(() => {
    setUrl(window.location.href);
  }, []);

  const text = "Check out Athina Bampzeli’s website";

  if (!url) return null;

  return (
    <div className="flex items-center justify-center gap-4 mt-2">

      {/* LinkedIn */}
      <a
        href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="hover:scale-110 transition"
      >
        <FaLinkedin size={22} />
      </a>

      {/* Facebook */}
      <a
        href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="hover:scale-110 transition"
      >
        <FaFacebook size={22} />
      </a>

      {/* WhatsApp */}
      <a
        href={`https://wa.me/?text=${encodeURIComponent(text + " " + url)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="hover:scale-110 transition"
      >
        <FaWhatsapp size={22} />
      </a>

      {/* X (Twitter) */}
      <a
        href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="hover:scale-110 transition"
      >
        <FaXTwitter size={22} />
      </a>

      {/* Email */}
      <a
        href={`mailto:?subject=${encodeURIComponent("Check this website")}&body=${encodeURIComponent(text + " " + url)}`}
        className="hover:scale-110 transition"
      >
        <FaEnvelope size={22} />
      </a>

    </div>
  );
}