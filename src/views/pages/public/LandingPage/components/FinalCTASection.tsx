"use client";

export const FinalCTASection = () => {
  return (
    <section className="py-20 bg-slate-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold mb-6">
          Ready for Your Next Adventure?
        </h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
          Let our expert travel consultants create a custom itinerary tailored
          just for you
        </p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105">
          Plan Your Trip Today
        </button>
      </div>
    </section>
  );
};
