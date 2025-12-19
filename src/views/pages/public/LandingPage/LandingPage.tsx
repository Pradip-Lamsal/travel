"use client";

import HeroSection from "@/components/HeroCarousel";
import { Footer } from "@/components/molecule/Footer";
import { Header } from "@/components/molecule/Header";
import CombineRetreat from "./components/CombineRetreat";
import CricketWorldCup from "./components/CricketWorldCup";
import DestinationExplorer from "./components/DestinationExplorer";
import FeaturedRetreats from "./components/FeaturedRetreats";
import QuizCTA from "./components/QuizCTA";

export default function LandingPage() {
  return (
    <main className="w-full overflow-hidden bg-slate-950">
      {/* Floating Navigation Header */}
      <Header />

      {/* Hero Section */}
      <HeroSection />

      {/* Destination Explorer */}
      <DestinationExplorer />

      {/* Featured Retreats */}
      <FeaturedRetreats />

      {/* Cricket World Cup 2026 */}
      <CricketWorldCup />

      {/* Combine Retreat Section */}
      <CombineRetreat />

      {/* Quiz CTA Section */}
      <QuizCTA />

      {/* Footer */}
      <Footer />
    </main>
  );
}
