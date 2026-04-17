// components/Navbar.tsx

"use client";

import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [openResearch, setOpenResearch] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="flex justify-between items-center p-4 max-w-6xl mx-auto">
        {/* Top-left: Name */}
        <a href="/" className="text-xl font-bold">
          Athina Bampzeli
        </a>

        {/* Top-right: Hamburger */}
        <button
          className="md:hidden p-2 rounded hover:bg-gray-100"
          onClick={() => setOpen(!open)}
        >
          {open ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
        </button>

        {/* Desktop links */}
        <nav className="hidden md:flex gap-6 items-center">
          <a href="/#about" className="hover:text-gray-500">About</a>
          
          {/* 🔽 Research Dropdown */}
          <div className="relative group">
            <button className="hover:text-gray-500">
              Research
            </button>

            <div className="absolute top-full left-0 mt-2 bg-white shadow-lg rounded-xl p-4 flex flex-col gap-2 min-w-[220px]
            opacity-0 invisible translate-y-2
            group-hover:opacity-100 group-hover:visible group-hover:translate-y-0
            transition-all duration-200 z-50">
              <a href="/#research-interests" className="hover:text-blue-600">
                Research Interests
              </a>
              <a href="/#publications" className="hover:text-blue-600">
                Publications
              </a>
              <Link href="/research/projects" className="hover:text-blue-600">
                Research Projects
              </Link>
              <Link href="/research/lexicon" className="hover:text-blue-600">
                Lexicon
              </Link>
            </div>
          </div>

          <a href="/#skills" className="hover:text-gray-500">Skills</a>
          <a href="/#services" className="hover:text-gray-500">Services</a>
          <Link href="/news" className="hover:text-gray-500">
            News
          </Link>
          <a href="/#contact" className="hover:text-gray-500">Contact</a>
        </nav>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white shadow-md border-t border-gray-200">
          <ul className="flex flex-col gap-4 p-4">
            <li><a href="#about" onClick={() => setOpen(false)}>About</a></li>
            <li>
              <button
                className="w-full text-left px-0 py-2 hover:text-gray-500 focus:outline-none"
                onClick={() => setOpenResearch(!openResearch)}
              >
                Research
              </button>

              {openResearch && (
                <ul className="flex flex-col gap-2 mt-2 pl-8">
                  <li>
                    <a href="/#research-interests" onClick={() => setOpen(false)}>
                      Research Interests
                    </a>
                  </li>
                  <li>
                    <a href="/#publications" onClick={() => setOpen(false)}>
                      Publications
                    </a>
                  </li>
                  <li>
                    <Link href="/research/projects" onClick={() => setOpen(false)}>
                      Research Projects
                    </Link>
                  </li>
                  <li>
                    <Link href="/research/lexicon" onClick={() => setOpen(false)}>
                      Lexicon
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            <li><a href="#skills" onClick={() => setOpen(false)}>Skills</a></li>
            <li><a href="#services" onClick={() => setOpen(false)}>Services</a></li>
            <li>
              <Link href="/news" onClick={() => setOpen(false)}>
                News
              </Link>
            </li>
            <li><a href="#contact" onClick={() => setOpen(false)}>Contact</a></li>
          </ul>
        </div>
      )}
    </header>
  );
}

