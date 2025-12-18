"use client";

import Image from "next/image";

export interface Package {
  id: number;
  title: string;
  destination: string;
  image: string;
  duration: string;
  durationDays: number;
  originalPrice: number;
  discountedPrice: number;
  currency: string;
  rating: number;
  reviews: number;
  highlights: string[];
  badge?: string;
  description: string;
}

interface PackageCardProps {
  package: Package;
  onClick?: (packageId: number) => void;
}

export const PackageCard: React.FC<PackageCardProps> = ({
  package: pkg,
  onClick,
}) => {
  return (
    <div
      onClick={() => onClick?.(pkg.id)}
      className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-gray-100 cursor-pointer"
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={pkg.image}
          alt={pkg.title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-700"
        />
        {pkg.originalPrice > pkg.discountedPrice && (
          <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
            Sale
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <p className="text-sm text-blue-600 font-semibold mb-2">
          {pkg.destination}
        </p>
        <h3 className="text-lg font-bold text-slate-800 mb-3 group-hover:text-blue-600 transition-colors">
          {pkg.title}
        </h3>

        {/* Duration */}
        <div className="flex items-center gap-2 text-slate-600 mb-4">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v2h16V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
              clipRule="evenodd"
            />
          </svg>
          <span>{pkg.duration}</span>
        </div>

        {/* Rating */}
        <div className="flex items-center gap-2 mb-4">
          <div className="flex text-yellow-400">
            {"★".repeat(Math.round(pkg.rating))}
          </div>
          <span className="text-sm text-slate-600">
            {pkg.rating} ({pkg.reviews} reviews)
          </span>
        </div>

        {/* Highlights */}
        <div className="mb-6">
          <div className="flex flex-wrap gap-2">
            {pkg.highlights.slice(0, 2).map((highlight, index) => (
              <span
                key={index}
                className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full"
              >
                {highlight}
              </span>
            ))}
          </div>
        </div>

        {/* Price and CTA */}
        <div className="pt-4 border-t border-gray-200">
          <div className="flex items-baseline gap-2 mb-4">
            <span className="text-2xl font-bold text-blue-600">
              ${pkg.discountedPrice.toLocaleString()}
            </span>
            {pkg.originalPrice > pkg.discountedPrice && (
              <span className="text-lg text-slate-400 line-through">
                ${pkg.originalPrice.toLocaleString()}
              </span>
            )}
          </div>
          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-full font-semibold transition-all duration-300">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};
