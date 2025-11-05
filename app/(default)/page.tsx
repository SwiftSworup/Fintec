export const metadata = {
  title: "Fintec Solutions",
  description: "Page description",
};

import Hero from "@/components/hero-home";
import BusinessCategories from "@/components/business-categories";
import FeaturesPlanet from "@/components/features-planet";
import LargeTestimonial from "@/components/large-testimonial";
import Contact from "@/components/contact";
import Cta from "@/components/cta";
import NewsSection from "@/components/news"
import DemoSection from "@/components/DemoSection";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturesPlanet />
      <DemoSection />
      <Contact />
      <BusinessCategories />
      <NewsSection />
      {/* <LargeTestimonial /> */}
      <Cta />
    </>
  );
}
