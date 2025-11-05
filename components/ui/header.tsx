import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo01 from "@/public/images/fintec_logo.svg";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-2 z-30 w-full md:top-6">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative flex h-14 items-center justify-between gap-3 rounded-2xl bg-white/90 px-3 shadow-lg shadow-black/[0.03] backdrop-blur-xs md:px-6">
          {/* Logo */}
          <div className="flex items-center">
          <a href="/" className="flex items-center">
    <Image src={Logo01} alt="Fintec Logo" width={140} height={16} />
  </a>
            {/* <Image src={Logo01} alt="Fintec Logo" width={140} height={16} /> */}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="block md:hidden p-2 rounded-md bg-gray-200"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰ {/* Hamburger icon */}
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex flex-1 items-center justify-end gap-8">
            <Link href="/" className="text-gray-800 hover:bg-gray-50">
              Home
            </Link>
            <Link href="#services" className="text-gray-800 hover:bg-gray-50">
              Products
            </Link>
            <Link href="#about" className="text-gray-800 hover:bg-gray-50">
              About Us
            </Link>
             <Link href="#news" className="text-gray-800 hover:bg-gray-50">
              News
            </Link>
            
            <Link href="#contact" className="btn-sm bg-blue-500 text-gray-100">
              Get in Touch
            </Link>
          </nav>

          {/* Mobile Dropdown Menu */}
          {menuOpen && (
            <div className="absolute top-16 right-4 w-48 bg-white shadow-lg rounded-lg md:hidden">
              <ul className="flex flex-col text-gray-800">
                <li>
                  <Link href="/" className="block px-4 py-2 hover:bg-gray-100">
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="#partners"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Our Partners
                  </Link>
                </li>
                <li>
                  <Link
                    href="#services"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="#test"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                   About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="#about"
                    className="block px-4 py-2 bg-blue-500 text-white text-center rounded-b-lg"
                  >
                    News
                  </Link>
                </li>
                  <li>
                  <Link
                    href="#about"
                    className="block px-4 py-2 bg-blue-500 text-white text-center rounded-b-lg"
                  >
                    Get in Touch
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
