"use client";
import { useState } from "react";

export default function DemoSection() {
  const [openVideo, setOpenVideo] = useState<string | null>(null);

  // Each demo card
  const demos = [

     {
      title: "Cardless ATM Cash Withdrawal",
      description:
        "Cardless ATM Cash Withdrawal allows secure, contactless cash access via mobile apps or QR codes, no card needed, for a seamless global banking experience.",
      thumbnail: "/images/Thumbnail/cardless.jpeg",
      video: "https://www.youtube.com/embed/dZfzGJH4CTk?autoplay=1",
    },
    {
      title: "POS Acquiring Solution",
      description:
        "Our POS Acquiring Solution offers merchants fast, secure, and seamless payment acceptance from mobile wallets and contactless cards.",
      thumbnail: "/images/Thumbnail/pos.jpg",
      video: "https://www.youtube.com/embed/qbpGeLSEDE0?autoplay=",
    },
    {
      title: "Power Bank Rental Service",
      description:
        "Power Bank Rental Service offers convenient on-the-go charging via secure app-based rentals at stations worldwide, ensuring uninterrupted connectivity for travelers and urban users.",
      thumbnail: "/images/Thumbnail/powerbank.jpg",
      video: "https://www.youtube.com/embed/uVkjzJL4HIg?autoplay=1",
    },
    {
      title: "Scan to Order",
      description:
        "Our Scan to Order system allows customers to quickly scan QR codes to order and pay, making transactions seamless for businesses and consumers.",
      thumbnail: "/images/Thumbnail/scan-to-order.jpg",
      video: "https://www.youtube.com/embed/aDTU2FZZ8NU?autoplay=1",
    },
    {
      title: "Tap & Pay",
      description:
        "Tap n Pay allows users to make fast and secure payments via mobile wallets and contactless cards for a global transaction experience.",
      thumbnail: "/images/Thumbnail/tap-and-pay.jpg",
      video: "https://www.youtube.com/embed/hO6jIKOoito?autoplay=1",
    },
    
   
    
  ];

  return (
    <section className="py-16 bg-gray-800 text-gray-200">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Product Demo
        </h2>

        <div className="grid sm:grid-cols-3 gap-12">
          {demos.map((demo, index) => (
            <div key={index} className="space-y-4">
              <div className="relative group">
                <img
                  src={demo.thumbnail}
                  alt={demo.title}
                  className="w-full h-40 object-cover transition duration-300 group-hover:brightness-75 rounded"
                />
                <div
                  className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300 cursor-pointer"
                  onClick={() => setOpenVideo(demo.video ?? null)}
                >
                  <svg
                    className="w-12 h-12 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>

              <h3 className="text-2xl font-semibold mb-2">{demo.title}</h3>
              <p className="text-gray-400">{demo.description}</p>
              <button
                onClick={() => setOpenVideo(demo.video ?? null)}
                className="text-blue-400 underline underline-offset-4 hover:text-blue-300 transition cursor-pointer"
              >
                &#x1F782; Play Demo
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Video Modal */}
      {openVideo && (
        <div
          onClick={() => setOpenVideo(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/10 backdrop-blur-sm"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-[90%] max-w-3xl aspect-video bg-black rounded-xl overflow-hidden shadow-lg"
          >
            <iframe
              className="w-full h-full"
              src={openVideo}
              title="Product Demo"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>

            <button
              onClick={() => setOpenVideo(null)}
              className="absolute top-3 right-3 text-white text-xl hover:text-gray-300"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

