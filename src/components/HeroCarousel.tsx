"use client";

import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Link from "next/link";

export default function HeroSection() {
  const words = [
    { text: "Travel", className: "text-teal-400" },
    { text: "with", className: "text-teal-400" },
    { text: "purpose.", className: "text-teal-400" },
    { text: "Book", className: "text-teal-400" },
    { text: "retreats,", className: "text-teal-400" },
    { text: "active", className: "text-teal-400" },
    { text: "tours,", className: "text-teal-400" },
    { text: "and", className: "text-teal-400" },
    { text: "boutique", className: "text-teal-400" },
    { text: "stays", className: "text-teal-400" },
    { text: "in", className: "text-teal-400" },
    { text: "one", className: "text-teal-400" },
    { text: "place.", className: "text-teal-400" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
      },
    },
  };

  const scrollVariants = {
    animate: {
      y: [0, 10, 0],
      transition: {
        duration: 2,
        repeat: Infinity,
      },
    },
  };

  return (
    <>
      {/* Top Header Section */}
      <section className="relative backdrop-blur-sm bg-black/10 py-5 border-b border-teal-500/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3"
          >
            <img
              src="/logo.jpeg"
              alt="Devaaya Logo"
              className="h-10 w-10 rounded-lg object-cover shadow-lg"
            />
            <div>
              <h1 className="text-lg font-bold text-white">Devaaya</h1>
              <p className="text-xs text-teal-400 font-semibold">HOLIDAYS</p>
            </div>
          </motion.div>

          {/* Navigation Links */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="hidden md:flex items-center gap-8"
          >
            <a
              href="#home"
              className="text-gray-300 hover:text-teal-400 text-sm transition-colors duration-300"
            >
              Home
            </a>
            <a
              href="#explore"
              className="text-gray-300 hover:text-teal-400 text-sm transition-colors duration-300"
            >
              Destinations
            </a>
            <a
              href="#packages"
              className="text-gray-300 hover:text-teal-400 text-sm transition-colors duration-300"
            >
              Packages
            </a>
            <a
              href="#about"
              className="text-gray-300 hover:text-teal-400 text-sm transition-colors duration-300"
            >
              About
            </a>
            <a
              href="#contact"
              className="text-gray-300 hover:text-teal-400 text-sm transition-colors duration-300"
            >
              Contact
            </a>
          </motion.div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden bg-linear-to-b from-slate-900 via-teal-900 to-slate-900">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&h=900&fit=crop)",
            opacity: 0.3,
          }}
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-linear-to-b from-black/40 via-black/50 to-slate-900/70" />

        {/* Content */}
        <motion.div
          className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Main Heading with Typewriter Effect */}
          <div className="mb-8">
            <TypewriterEffect words={words} />
          </div>

          {/* Search/Filter Info */}
          <motion.div
            className="mb-12 flex flex-col gap-4 md:flex-row md:gap-8"
            variants={itemVariants}
          >
            <div className="text-center">
              <p className="text-sm font-semibold text-teal-400">
                Activity / Goal
              </p>
              <p className="text-gray-300">Yoga, Surf, Cycling</p>
            </div>
            <div className="text-center">
              <p className="text-sm font-semibold text-teal-400">Location</p>
              <p className="text-gray-300">Where to</p>
            </div>
            <div className="text-center">
              <p className="text-sm font-semibold text-teal-400">
                Dates / Duration
              </p>
              <p className="text-gray-300">3 months / 14 days</p>
            </div>
          </motion.div>

          {/* CTA Button */}
          <motion.div variants={itemVariants} className="mb-16">
            <Link
              href="#explore"
              className="inline-block rounded-full bg-white px-8 py-3 font-semibold text-slate-900 transition-all duration-300 hover:bg-teal-400 hover:shadow-xl hover:shadow-teal-400/50"
            >
              Explore Now
            </Link>
          </motion.div>

          {/* Customize Your Journey Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="w-full max-w-4xl mx-auto bg-white/15 backdrop-blur-2xl rounded-2xl p-6 shadow-2xl mb-8 border border-white/20"
          >
            <h3 className="text-xl md:text-2xl font-bold text-white mb-1">
              Customize Your Journey
            </h3>
            <p className="text-white/70 mb-5 text-sm">
              Find your perfect retreat
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Destination */}
              <div className="flex flex-col">
                <label className="text-xs font-semibold text-white/90 mb-2 uppercase tracking-wider">
                  Activity / Goal
                </label>
                <input
                  type="text"
                  placeholder="Yoga, Surf, Cycling"
                  className="px-3 py-2 rounded-lg bg-white/20 border-2 border-white/30 focus:border-teal-400 focus:outline-none transition-all text-white placeholder-white/50 backdrop-blur-sm font-medium hover:bg-white/25 text-sm"
                />
              </div>

              {/* Duration */}
              <div className="flex flex-col">
                <label className="text-xs font-semibold text-white/90 mb-2 uppercase tracking-wider">
                  Location
                </label>
                <input
                  type="text"
                  placeholder="Where to"
                  className="px-3 py-2 rounded-lg bg-white/20 border-2 border-white/30 focus:border-teal-400 focus:outline-none transition-all text-white placeholder-white/50 backdrop-blur-sm font-medium hover:bg-white/25 text-sm"
                />
              </div>

              {/* Budget */}
              <div className="flex flex-col">
                <label className="text-xs font-semibold text-white/90 mb-2 uppercase tracking-wider">
                  Dates / Duration
                </label>
                <input
                  type="text"
                  placeholder="3 months / 14 days"
                  className="px-3 py-2 rounded-lg bg-white/20 border-2 border-white/30 focus:border-teal-400 focus:outline-none transition-all text-white placeholder-white/50 backdrop-blur-sm font-medium hover:bg-white/25 text-sm"
                />
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-5 w-full md:w-auto px-6 py-2 bg-white text-slate-900 font-semibold rounded-full hover:bg-teal-50 transition-all shadow-lg text-sm"
            >
              Explore Now
            </motion.button>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            className="absolute bottom-8"
            variants={scrollVariants}
            animate="animate"
          >
            <ChevronDown className="h-8 w-8 text-white" />
          </motion.div>
        </motion.div>
      </section>
    </>
  );
}
