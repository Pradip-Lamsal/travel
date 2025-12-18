"use client";

import { HeroCarousel } from "@/components/HeroCarousel";
import { Footer } from "@/components/molecule/Footer";
import { Header } from "@/components/molecule/Header";
import { TripFilter } from "@/components/TripFilter";
import landingData from "@/lib/landing.json";
import { FeaturedPackagesSection } from "./components/FeaturedPackagesSection";
import { FinalCTASection } from "./components/FinalCTASection";
import { NewsletterSection } from "./components/NewsletterSection";
import { WhyChooseUsSection } from "./components/WhyChooseUsSection";

export default function LandingPage() {
  return (
    <>
      <Header
        menuItems={[
          { label: "Home", href: "/" },
          { label: "Packages", href: "/packages" },
          { label: "Destinations", href: "/destinations" },
          { label: "About", href: "/about-us" },
          { label: "Contact", href: "/contact" },
        ]}
        logoUrl="Devaaya"
      />

      {/* Hero Carousel Section */}
      <HeroCarousel slides={landingData.carousel} autoplayInterval={5000} />

      {/* Trip Filter Section */}
      <TripFilter options={landingData.filterOptions} />

      {/* Featured Packages Section */}
      <FeaturedPackagesSection packages={landingData.featuredPackages} />

      {/* Why Choose Us Section */}
      <WhyChooseUsSection features={landingData.whyChooseUs} />

      {/* Newsletter Section */}
      <NewsletterSection />

      {/* Final CTA Section */}
      <FinalCTASection />

      <Footer
        contactInfo={landingData.footer.contactInfo}
        socialLinks={landingData.footer.socialLinks}
        companyName="Devaaya Holidays"
        tagline="Your Journey Beyond Nepal Begins Here"
      />
    </>
  );
}
