import Link from "next/link";
import Image from "next/image";
import Logo01 from "@/public/images/fintec_logo.svg";

export default function Footer({ border = false }: { border?: boolean }) {
  return (
    <footer>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Top area: Blocks */}
        <div
          className={`grid gap-10 py-8 sm:grid-cols-12 md:py-12 ${border ? "border-t [border-image:linear-gradient(to_right,transparent,var(--color-slate-200),transparent)1]" : ""}`}
        >
          {/* 1st block */}
          <div className="space-y-2 sm:col-span-12 lg:col-span-4">
            <div>
            <Image src={Logo01} alt="Fintec Logo" width={140} height={16} />
            </div>
            <div className="text-sm text-gray-600">
              2025 &copy; Fintec Solutions - All rights reserved
            </div>
          </div>

          {/* 2nd block */}
          <div className="space-y-2 sm:col-span-6 md:col-span-3 lg:col-span-3">
            <h3 className="text-sm font-medium">Products & Services</h3>

            <div className="products flex-col">
              <div className="left">
                  
                <ul className="space-y-2 text-sm">
              <li>
                <p className="text-gray-600 transition hover:text-gray-900">
                &bull; QR Payment Acquring Integration
                </p>
               
              </li>
              <li>
                <p className="text-gray-600 transition hover:text-gray-900">
                &bull; Physical & Virtual Card Issuance
                </p>
               
              </li>
              <li>
                <p className="text-gray-600 transition hover:text-gray-900">
                &bull; Scan To Order
                </p>
              </li>
             
              <li>
                <p className="text-gray-600 transition hover:text-gray-900">
                 &bull; POS Acquring
                </p>
               
              </li>
              
              
              <li>
                <p className="text-gray-600 transition hover:text-gray-900">
                &bull; Unified Checkout Payment Integration
                </p>
               
              </li>
              <li>
                <p className="text-gray-600 transition hover:text-gray-900">
                &bull; QR Payment Acquiring
                </p>
               
              </li>
                <li>
                <p className="text-gray-600 transition hover:text-gray-900">
                &bull; AliPay QR Payment Acquiring Solution
                </p>
               
              </li>
              <li>
                <p className="text-gray-600 transition hover:text-gray-900">
                &bull; WeChat Payment Acquiring Solution
                </p>
               
              </li>
              <li>
                <p className="text-gray-600 transition hover:text-gray-900">
                &bull; NPCI QR Payment Acquiring Solution
                </p>
               
              </li>
            </ul>
              </div>
              
            </div>

           
            
          </div>

          {/* 3rd block */}
          <div className="space-y-2 sm:col-span-6 md:col-span-3 lg:col-span-3">
            <h3 className="text-sm font-medium">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  className="text-gray-600 transition hover:text-gray-900"
                  href="#contact"
                >
                  Phone:+977 9801011137
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-600 transition hover:text-gray-900"
                  href="#contact"
                >
                  Mail:info@fintec.com.np
                </Link>
              </li>
              <li>
               
              </li>
              <li>
              
              </li>
              <li>
                
              </li>
            </ul>
          </div>

      

          {/* 5th block */}
          <div className="space-y-2 sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h3 className="text-sm font-medium">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  className="text-gray-600 transition hover:text-gray-900"
                  href="#about"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-600 transition hover:text-gray-900"
                  href="#about"
                >
                  Who are we?
                </Link>
              </li>
              <li>
               
              </li>
              <li>
              
              </li>
              <li>
                
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Big text */}
      <div className="relative -mt-16 h-60 w-full" aria-hidden="true">
        <div className="pointer-events-none absolute left-1/2 -z-10 -translate-x-1/2 text-center text-[348px] font-bold leading-none before:bg-linear-to-b before:from-gray-200 before:to-gray-100/30 before:to-80% before:bg-clip-text before:text-transparent before:content-['Fintec'] after:absolute after:inset-0 after:bg-gray-300/70 after:bg-clip-text after:text-transparent after:mix-blend-darken after:content-['Fintec'] after:[text-shadow:0_1px_0_white]"></div>
        {/* Glow */}
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-2/3"
          aria-hidden="true"
        >
          <div className="h-56 w-56 rounded-full border-[20px] border-blue-700 blur-[80px]"></div>
        </div>
      </div>
    </footer>
  );
}
