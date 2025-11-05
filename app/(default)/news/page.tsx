import Image from "next/image";
import Link from "next/link";
import img1 from "@/public/images/news-img.jpg";
import img2 from "@/public/images/Thumbnail/Lankapay-collab.png";
import img3 from "@/public/images/Thumbnail/tap-and-pay.jpg";

export const metadata = {
  title: "News - Fintec Solutions",
  description: "All news and articles",
};

export default function NewsPage() {
  const articles = [
    {
      id: 1,
      title: "LankaPay partners UnionPay revolutionising cross-border ATM acceptance in Sri Lanka",
      date: "Mar 20, 2024",
      tag: "Insight",
      excerpt:
        "LankaPay has partnered with UnionPay to enable cross-border ATM connectivity—boosting convenience for tourists and supporting digital payments in Sri Lanka.",
      image: img1,
    },
    {
      id: 2,
      title: "LankaPay and Fintec Solutions Expand Partnership for Alipay+ Integration",
      date: "May 14, 2025",
      tag: "Update",
      excerpt:
        "Addendum No.03 enhances Alipay+ acceptance at LANKAQR merchants via the LankaPay EFT Network.",
      image: img2,
    },
    {
      id: 3,
      title: "Planning the Integration of Tap and Pay into the QPay App",
      date: "Oct 10, 2025",
      tag: "New",
      excerpt:
        "A roadmap for bringing contactless tap & pay to QPay, prioritising security, user experience and market fit.",
      image: img3,
    },
  ];

  return (
    <main className="py-20 bg-white">
      <div className="mx-auto max-w-5xl pb-4 text-center md:pb-12 px-6">
        <h1 className="text-3xl font-bold text-gray-900 md:text-4xl md:pb-4">News</h1>
        <p className="text-[15px] text-gray-700">All news and articles from Fintec.</p>
      </div>

      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((a) => (
            <article key={a.id} className="bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-md transition">
              <div className="relative h-44 w-full">
                <Image src={a.image} alt={a.title} className="object-cover w-full h-full" fill />
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between mb-3">
                  <span className="bg-orange-100 text-orange-600 text-xs font-semibold px-2 py-1 rounded-full">{a.tag}</span>
                  <p className="text-gray-500 text-xs">{a.date}</p>
                </div>
                <h2 className="text-lg font-semibold text-gray-900 mb-2">{a.title}</h2>
                <p className="text-gray-600 text-sm mb-4">{a.excerpt}</p>
                {/* <Link href={`/news/${a.id}`} className="text-blue-600 font-semibold hover:underline">Read more →</Link> */}
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
