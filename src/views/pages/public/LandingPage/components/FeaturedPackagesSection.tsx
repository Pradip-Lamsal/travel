"use client";

import { Package, PackageCard } from "@/components/PackageCard";
import Link from "next/link";

interface FeaturedPackagesSectionProps {
  packages: Package[];
  onViewAll?: () => void;
  onPackageClick?: (packageId: number) => void;
}

export const FeaturedPackagesSection: React.FC<
  FeaturedPackagesSectionProps
> = ({ packages, onPackageClick }) => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-800 mb-4">
            Featured Packages
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Discover our most popular travel packages, carefully curated for
            unforgettable experiences
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {packages.map((pkg) => (
            <PackageCard key={pkg.id} package={pkg} onClick={onPackageClick} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/packages"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105"
          >
            View All Packages
          </Link>
        </div>
      </div>
    </section>
  );
};
