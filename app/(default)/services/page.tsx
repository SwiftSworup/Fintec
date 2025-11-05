import DemoSection from "@/components/DemoSection";

export const metadata = {
  title: "Our Services - Fintec Solutions",
  description: "Learn more about our services like Scan to Order and Tap n Pay",
};

export default function ServicesPage() {
  return (
    <section className="bg-gray-900 text-gray-200 min-h-screen py-8">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16">
        <h1 className="text-4xl font-bold mb-6">Our Services</h1>
        <p className="text-gray-400 mb-8">
          Explore our services designed to simplify payments for businesses and customers.
        </p>
      </div>
    </section>
  );
}
