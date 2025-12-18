"use client";

export const NewsletterSection = () => {
  return (
    <section className="py-20 bg-blue-600 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Subscribe for Travel Inspiration
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Get exclusive deals, travel tips, and destination guides delivered
            to your inbox
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 rounded-full text-slate-800 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="bg-slate-800 hover:bg-slate-900 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
