"use client";

export const WorldCupCTA: React.FC = () => {
  const handleBookNow = () => {
    // Add booking logic here
    console.log("World Cup 2026 booking initiated");
  };

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden mt-12 mb-12">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-teal-700 via-teal-600 to-teal-700 opacity-90" />

      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />
      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left side - Text Content */}
          <div className="text-white">
            <div className="mb-4">
              <span className="inline-block bg-yellow-400 text-teal-700 px-4 py-2 rounded-full text-sm font-bold mb-4">
                ⚽ LIMITED TIME OFFER
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              Experience the FIFA World Cup 2026
            </h2>

            <p className="text-teal-100 text-lg mb-6">
              Join us for an unforgettable journey to witness the most
              spectacular football event on the planet. VIP packages include
              premium accommodations, match tickets, and exclusive experiences.
            </p>

            {/* Key Features */}
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-8 w-8 rounded-md bg-yellow-400 text-blue-900 font-bold">
                    ✓
                  </div>
                </div>
                <div>
                  <p className="font-semibold text-white">
                    Premium Stadium Access
                  </p>
                  <p className="text-blue-100 text-sm">
                    Best seating positions for all matches
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-8 w-8 rounded-md bg-yellow-400 text-blue-900 font-bold">
                    ✓
                  </div>
                </div>
                <div>
                  <p className="font-semibold text-white">
                    5-Star Accommodations
                  </p>
                  <p className="text-blue-100 text-sm">
                    Luxury hotels in prime locations
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-8 w-8 rounded-md bg-yellow-400 text-blue-900 font-bold">
                    ✓
                  </div>
                </div>
                <div>
                  <p className="font-semibold text-white">Guided City Tours</p>
                  <p className="text-blue-100 text-sm">
                    Explore local attractions with expert guides
                  </p>
                </div>
              </div>
            </div>

            {/* Remaining Rooms Alert */}
            <div className="bg-orange-500 bg-opacity-20 border-l-4 border-orange-400 p-4 mb-8 rounded">
              <p className="text-orange-200 font-semibold text-lg">
                ⚠️ Only 150 rooms remaining!
              </p>
              <p className="text-orange-100 text-sm mt-1">
                Don't miss out on this once-in-a-lifetime opportunity
              </p>
            </div>
          </div>

          {/* Right side - Price Card */}
          <div className="relative">
            <div className="bg-white rounded-3xl shadow-2xl p-8 transform hover:scale-105 transition-transform duration-300">
              {/* Badge */}
              <div className="absolute -top-4 right-6 bg-yellow-400 text-teal-700 px-4 py-2 rounded-full font-bold text-sm">
                SPECIAL DEAL
              </div>

              <div className="mb-6">
                <p className="text-slate-600 text-sm font-semibold mb-2">
                  WORLD CUP 2026 PACKAGE
                </p>
                <h3 className="text-3xl font-bold text-slate-800 mb-4">
                  Ultimate Fan Experience
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  7 nights / 8 days all-inclusive package with match tickets and
                  VIP experiences
                </p>
              </div>

              {/* Price Section */}
              <div className="bg-gradient-to-r from-teal-50 to-teal-100 rounded-2xl p-6 mb-6">
                <p className="text-slate-600 text-sm mb-2">Starting from</p>
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-5xl font-bold text-teal-600">
                    $4,999
                  </span>
                  <span className="text-slate-400 line-through text-xl">
                    $6,999
                  </span>
                </div>
                <p className="text-green-600 font-semibold text-sm">
                  Save $2,000 (28% OFF)
                </p>
              </div>

              {/* Package Includes */}
              <div className="mb-8 space-y-3">
                <p className="font-semibold text-slate-800 text-sm mb-4">
                  PACKAGE INCLUDES:
                </p>
                <div className="space-y-2 text-sm text-slate-700">
                  <p className="flex items-center gap-2">
                    <span className="text-blue-600 font-bold">•</span> 7 nights
                    luxury accommodation
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="text-blue-600 font-bold">•</span> 3 premium
                    match tickets
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="text-blue-600 font-bold">•</span> Daily
                    gourmet breakfast & dinner
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="text-blue-600 font-bold">•</span> Private
                    airport transfers
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="text-blue-600 font-bold">•</span>{" "}
                    Professional tour guide
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="text-blue-600 font-bold">•</span> VIP
                    lounge access
                  </p>
                </div>
              </div>

              {/* CTA Button */}
              <button
                onClick={handleBookNow}
                className="w-full bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 text-white px-6 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:shadow-lg active:scale-95"
              >
                🎫 Book Now - Secure Your Spot!
              </button>

              <p className="text-center text-slate-500 text-xs mt-4">
                Limited availability • Non-refundable deposits required
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="grid grid-cols-3 gap-4 mt-16 pt-8 border-t border-teal-500">
          <div className="text-center">
            <p className="text-4xl font-bold text-yellow-400 mb-2">32</p>
            <p className="text-blue-100 text-sm">Teams Competing</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-yellow-400 mb-2">64</p>
            <p className="text-blue-100 text-sm">Matches</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-yellow-400 mb-2">3</p>
            <p className="text-blue-100 text-sm">Countries Hosting</p>
          </div>
        </div>
      </div>
    </section>
  );
};
