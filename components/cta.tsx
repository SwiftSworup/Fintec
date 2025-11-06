"use client";
import React from "react";

export default function CTA() {
  return (
    <section
      id="contact"
      className="mx-auto max-w-6xl px-4 sm:px-6 mt-32 mb-32"
    >
      <div
        className="relative overflow-hidden rounded-2xl shadow-xl before:pointer-events-none before:absolute before:inset-0 before:-z-10 before:rounded-2xl before:bg-gradient-to-br before:from-gray-900 before:to-blue-900"
        data-aos="zoom-y-out"
      >
        {/* Glow effect */}
        <div
          className="absolute bottom-0 left-1/2 -z-10 -translate-x-1/2 translate-y-1/2"
          aria-hidden="true"
        >
          <div className="h-64 w-[480px] rounded-full border-[20px] border-blue-500 blur-3xl animate-pulse" />
        </div>

        {/* Content */}
        <div className="px-4 py-12 md:px-12 md:py-20 flex flex-col items-center text-center">
          <h2 className="mb-6 border-y text-3xl font-bold text-gray-100 [border-image:linear-gradient(to_right,transparent,--theme(--color-blue-500/.7),transparent)1] md:mb-12 md:text-4xl animate-[fadeIn_1s_ease-in-out]">
            Contact Us
          </h2>

          <div
            className="max-w-3xl space-y-8"
            data-aos="fade-right"
            data-aos-delay="200"
          >
            <h3 className="text-2xl font-semibold text-gray-200">
              Reach Out to Fintec Solutions
            </h3>
            <p className="text-lg text-gray-300">
              We’re here to help you with innovative payment solutions. Connect
              with us today!
            </p>

            {/* Contact Details - Row */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20 mt-8">
              {/* Location */}
              <article className="flex items-center gap-3 text-left">
                <svg
                  className="w-5 h-5 fill-blue-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z" />
                </svg>
                <div>
                  <h4 className="text-lg font-medium text-gray-200">
                    Location
                  </h4>
                  <p className="text-gray-400">Kathmandu, Nepal</p>
                </div>
              </article>

              {/* Phone */}
              <article className="flex items-center gap-3 text-left">
                <svg
                  className="w-5 h-5 fill-blue-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.24 1.02l-2.2 2.2z" />
                </svg>
                <a href="https://wa.me/9801011137" target="_blank">
                <div>
                  <h4 className="text-lg font-medium text-gray-200">
                    Phone Number
                  </h4>
                  <p className="text-gray-400">+977 9801011137</p>
                </div>
                </a>
              </article>

              {/* Email */}
              <article className="flex items-center gap-3 text-left">
                <svg
                  className="w-5 h-5 fill-blue-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
                <a href="mailto:info@fintec.com.np" target="_blank">
                  <div>
                  <h4 className="text-lg font-medium text-gray-200">Email</h4>
                  <p className="text-gray-400">info@fintec.com.np</p>
                </div>
                </a>
                
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
