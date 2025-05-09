"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full flex items-center justify-between px-8 py-4 bg-white shadow-md mb-8 relative">
      <div className="flex items-center gap-3">
        <Link href="/">
          <Image src="/logo.png" alt="Panenka Logo" width={40} height={40} className="rounded-full hover:opacity-80 transition-opacity" />
        </Link>
        <span className="font-bold text-xl tracking-tight text-sky-600">Panenka Goal</span>
      </div>
      {/* Desktop nav */}
      <ul className="hidden md:flex gap-8 text-lg font-medium">
        <li><Link href="/" className="text-sky-700 hover:text-sky-500 transition-colors">Home</Link></li>
        <li><Link href="/about" className="text-sky-700 hover:text-sky-500 transition-colors">About</Link></li>
        <li><Link href="/podcast" className="text-sky-700 hover:text-sky-500 transition-colors">Podcast</Link></li>
        <li><Link href="/shorts" className="text-sky-700 hover:text-sky-500 transition-colors">Shorts</Link></li>
      </ul>
      {/* Mobile menu button */}
      <button
        className="md:hidden flex flex-col justify-center items-center w-10 h-10 rounded focus:outline-none focus:ring-2 focus:ring-sky-500"
        aria-label="Open menu"
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span className={`block w-6 h-0.5 bg-sky-700 mb-1 transition-all ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
        <span className={`block w-6 h-0.5 bg-sky-700 mb-1 transition-all ${menuOpen ? 'opacity-0' : ''}`}></span>
        <span className={`block w-6 h-0.5 bg-sky-700 transition-all ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
      </button>
      {/* Mobile nav dropdown */}
      {menuOpen && (
        <ul className="absolute top-full right-8 mt-2 bg-white shadow-lg rounded-lg flex flex-col gap-4 p-6 text-lg font-medium md:hidden z-50 border border-sky-100">
          <li><Link href="/" className="text-sky-700 hover:text-sky-500 transition-colors" onClick={() => setMenuOpen(false)}>Home</Link></li>
          <li><Link href="/about" className="text-sky-700 hover:text-sky-500 transition-colors" onClick={() => setMenuOpen(false)}>About</Link></li>
          <li><Link href="/podcast" className="text-sky-700 hover:text-sky-500 transition-colors" onClick={() => setMenuOpen(false)}>Podcast</Link></li>
          <li><Link href="/shorts" className="text-sky-700 hover:text-sky-500 transition-colors" onClick={() => setMenuOpen(false)}>Shorts</Link></li>
        </ul>
      )}
    </nav>
  );
} 