"use client";

import { useState, useRef } from "react";
import Image, { StaticImageData } from "next/image";
import { X } from "lucide-react";

import articleImg1 from "@/public/images/news-img.jpg";
import articleImg2 from "@/public/images/Thumbnail/Lankapay-collab.png";
import articleImg3 from "@/public/images/WeChat-Banner-2.jpg";
import articleImg4 from "@/public/images/Thumbnail/india.jpeg"; 

type Article = {
  id: number;
  title: string;
  desc: string;
  author?: string;
  date: string;
  image: StaticImageData;
  tag?: string;
  fullText: string;
  videoUrl?: string;
};

export default function NewsSection() {
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  const articles: Article[] = [
    {
      id: 1,
      title:
        "LankaPay partners UnionPay revolutionising cross-border ATM acceptance in Sri Lanka",
      desc: "The national payment network of Sri Lanka recently announced their partnership with UnionPay International (UPI).",
      author: "Read Full Article",
      date: "March 20,2024",
      image: articleImg1,
      tag: "Insight",
      fullText:
        "LankaPay, Sri Lanka's national payment network, has partnered with UnionPay International (UPI), a leading global payment network, to enable cross-border ATM connectivity. This collaboration allows UnionPay cardholders to access cash withdrawals at over 99% of ATMs across Sri Lanka, enhancing convenience for tourists, especially Chinese visitors, by eliminating the need for currency exchange. The partnership supports Sri Lanka’s tourism and economic growth by providing secure, reliable, and innovative payment solutions. Both organizations aim to promote digital payments, drive financial inclusion, and advance Sri Lanka’s digital economy.",
    },
    {
      id: 2,
      title:
        "LankaPay and Fintec Solutions Expand Partnership for Alipay+ Integration",
      desc: "LankaPay (Private) Limited, Sri Lanka's national payment network, has further strengthened its collaboration with Fintec Solutions (Private) Limited through Addendum No. 03 to their Software Agreement..",
      date: "May 14 2025",
      image: articleImg2,
      tag: "Insight",
      fullText:
        "LankaPay (Private) Limited, Sri Lanka's national payment network, has further strengthened its collaboration with Fintec Solutions (Private) Limited through Addendum No. 03 to their Software Agreement. This update, effective from May 14, 2025, introduces enhancements to enable Alipay+ acceptance at LANKAQR merchants via the LankaPay Common EFT Network, promoting seamless cross-border payments and supporting Sri Lanka's digital economy growth.",
    },
    {
      id: 3,
      title: "Fintec Solutions and LankaPay Partner to Enable WeChat Digital Payments",
      desc: "Fintech Solutions and LankaPay signs an agreement to enable LankaPay to Acquire weChat digital Payments",
      date: "10 Oct 2025",
      image: articleImg3,
      tag: "New",
      fullText:
        "Fintech Solutions and LankaPay signs an agreement to enable LankaPay to Acquire weChat digital Payments",
    },
      {
      id: 4,
      title: "Connecting India with Sri Lanka through Digital Payments",
      desc: "Fintec Solutions provided solution to acquire India NPCI compatible Digital Wallet to make payment at LankaPay QR merchant networks.",
      date: "15 Feb 2024",
      image: articleImg4,
      tag: "Update",
      fullText:
        "The fast-evolving world of fintech, staying ahead means anticipating user needs and integrating cutting-edge features before they become table stakes. While the QPay app—Fintec's flagship digital wallet—has long excelled in UPI-based transfers, bill payments, and merchant solutions, tap and pay (contactless NFC payments) remains one of the most requested enhancements. As of now, this feature isn't integrated, but with India's digital payments market projected to hit $10 trillion by 2026, the time to plan is now. This blog outlines a comprehensive roadmap for bringing tap and pay to QPay, drawing on industry best practices and Fintec's unique position in the ecosystem.",
      videoUrl: "https://www.youtube.com/embed/2gsEDChLDy8"
    },
  ];

  // Close modal when clicking outside
  const handleBackgroundClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      setSelectedArticle(null);
    }
  };

  return (
    <section className="py-20 bg-gray-50" id="news">
      <div className="mx-auto max-w-3xl pb-4 text-center md:pb-12">
        <h3 className="text-3xl font-bold text-gray-900 md:text-4xl md:pb-4">
          Latest News & Articles
        </h3>
        <p className="text-[15px] text-gray-700">
          Stay Informed with the Latest Updates & Insights
        </p>
      </div>

      <div className="container mx-auto px-6 lg:px-12">
        {/* Featured Article */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className="relative rounded-2xl overflow-hidden shadow-md">
            <Image
              src={articles[0].image}
              alt={articles[0].title}
              className="w-full h-80 object-cover"
            />
          </div>
          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-2 mb-3">
              <span className="bg-orange-100 text-orange-600 text-sm font-semibold px-3 py-1 rounded-full">
                {articles[0].tag}
              </span>
              <p className="text-gray-500 text-sm">{articles[0].date}</p>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-3">
              {articles[0].title}
            </h2>
            <p className="text-gray-600 mb-5">{articles[0].desc}</p>
            <button
              onClick={() => setSelectedArticle(articles[0])}
              className="text-blue-600 font-semibold hover:underline"
            >
              Read Article →
            </button>
          </div>
        </div>

        {/* Grid Articles */}
        <div className="grid sm:grid-cols-3 lg:grid-cols-3 gap-8">
          {articles.slice(1).map((article) => (
            <div
              key={article.id}
              className="bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300"
            >
              <Image
                src={article.image}
                alt={article.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-5">
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-orange-100 text-orange-600 text-xs font-semibold px-2 py-1 rounded-full">
                    {article.tag}
                  </span>
                  <p className="text-gray-500 text-xs">{article.date}</p>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {article.title}
                </h3>
                <p className="text-gray-600 text-sm mb-3">{article.desc}</p>
                {/* <button
                  onClick={() => setSelectedArticle(article)}
                  className="text-blue-600 text-sm font-semibold hover:underline"
                >
                  Read Article →
                </button> */}
                {article.videoUrl ? (
  <button
    onClick={() => setSelectedArticle(article)}
    className="text-blue-600 text-sm font-semibold hover:underline"
  >
    Watch Video →
  </button>
) : (
  <button
    onClick={() => setSelectedArticle(article)}
    className="text-blue-600 text-sm font-semibold hover:underline"
  >
    Read Article →
  </button>
)}

              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Popup Modal */}
  {selectedArticle && (
  <div
    className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
    onClick={handleBackgroundClick}
  >
    <div
      ref={modalRef}
      className="bg-white rounded-2xl max-w-2xl w-full shadow-xl overflow-hidden relative animate-fadeIn"
    >
      <button
        onClick={() => setSelectedArticle(null)}
        className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
      >
        <X size={24} />
      </button>

      {/* 👇 Conditional: video OR image */}
      {selectedArticle.videoUrl ? (
        <div className="relative w-full h-0 pb-[56.25%]">
          <iframe
            className="absolute top-0 left-0 w-full h-full rounded-t-2xl"
            src={selectedArticle.videoUrl}
            title={selectedArticle.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      ) : (
        <Image
          src={selectedArticle.image}
          alt={selectedArticle.title}
          className="w-full h-64 object-contain object-center"
        />
      )}

      {/* 👇 Content */}
      <div className="p-6">
        <div className="flex items-center gap-2 mb-2">
          <span className="bg-orange-100 text-orange-600 text-xs font-semibold px-2 py-1 rounded-full">
            {selectedArticle.tag}
          </span>
          <p className="text-gray-500 text-xs">{selectedArticle.date}</p>
        </div>

        <h3 className="text-2xl font-bold mb-3 text-gray-900">
          {selectedArticle.title}
        </h3>

        {/* Show article text only if not a video */}
        {!selectedArticle.videoUrl && (
          <p className="text-gray-600 mb-3">{selectedArticle.fullText}</p>
        )}

        {selectedArticle.author && (
          <a
            href="https://www.lankapay.net/en/news/lankapay-partners-with-unionpay-revolutionizing-cross-border-atm-acceptance-in-sri-lanka"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className="text-blue-500 text-sm italic underline">
              {selectedArticle.author}
            </p>
          </a>
        )}
      </div>
    </div>
  </div>
)}

      {/* Button: See all news 
      <div className="mt-12 flex justify-center">
        <a
          href="/news"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition"
        >
          See all news
        </a>
      </div>
      */}

    </section>
  );
}
