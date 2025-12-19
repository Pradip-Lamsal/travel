"use client";

import { PointerHighlight } from "@/components/ui/pointer-highlight";
import destinations from "@/lib/destinations.json";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { useState } from "react";

export default function DestinationExplorer() {
  const [selectedRegion, setSelectedRegion] = useState("Europe");
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const regions = ["Europe", "Asia", "South America", "USA"];
  const filteredCountries = destinations.countries.filter(
    (country) => country.region === selectedRegion
  );

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4 },
    },
    hover: {
      y: -10,
      transition: { duration: 0.3 },
    },
  };

  return (
    <section
      id="explore"
      className="min-h-screen bg-slate-900 px-4 py-20 md:px-8"
    >
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <PointerHighlight>
            <h2 className="mb-4 text-4xl font-bold text-white md:text-5xl">
              Explore by Destination
            </h2>
          </PointerHighlight>
          <p className="text-gray-400">
            Discover your next adventure across the globe
          </p>
        </motion.div>

        {/* Region Tabs */}
        <motion.div
          className="mb-12 flex flex-wrap justify-center gap-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {regions.map((region) => (
            <motion.button
              key={region}
              onClick={() => setSelectedRegion(region)}
              className={`rounded-full px-6 py-2 font-semibold transition-all duration-300 ${
                selectedRegion === region
                  ? "bg-teal-500 text-white shadow-lg shadow-teal-500/50"
                  : "border border-teal-500/30 text-teal-400 hover:border-teal-500 hover:bg-teal-500/10"
              }`}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {region}
            </motion.button>
          ))}
        </motion.div>

        {/* Destinations Grid */}
        <motion.div
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {filteredCountries.map((country) => (
            <motion.div
              key={country.id}
              className="group relative overflow-hidden rounded-xl bg-slate-800"
              variants={cardVariants}
              onHoverStart={() => setHoveredId(country.id)}
              onHoverEnd={() => setHoveredId(null)}
              whileHover="hover"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden bg-slate-700">
                <motion.img
                  src={country.image}
                  alt={country.name}
                  className="h-full w-full object-cover"
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.4 }}
                />

                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>

              {/* Content */}
              <motion.div
                className="p-6"
                initial={{ y: 0 }}
                animate={hoveredId === country.id ? { y: -10 } : { y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="mb-2 text-xl font-bold text-white">
                  {country.name}
                </h3>
                <p className="mb-4 line-clamp-2 text-sm text-gray-300">
                  {country.description}
                </p>

                {/* Highlights */}
                <motion.div
                  className="mb-4 flex flex-wrap gap-2"
                  initial={{ opacity: 0 }}
                  animate={
                    hoveredId === country.id ? { opacity: 1 } : { opacity: 0 }
                  }
                  transition={{ duration: 0.3 }}
                >
                  {country.highlights.map((highlight, idx) => (
                    <span
                      key={idx}
                      className="inline-block rounded-full bg-teal-500/20 px-3 py-1 text-xs text-teal-300"
                    >
                      {highlight}
                    </span>
                  ))}
                </motion.div>

                {/* Stats */}
                <div className="mb-4 flex items-center justify-between text-sm text-gray-400">
                  <span>{country.retreats} retreats</span>
                  <motion.div
                    animate={hoveredId === country.id ? { x: 5 } : { x: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronRight className="h-4 w-4 text-teal-400" />
                  </motion.div>
                </div>

                {/* CTA Button */}
                <motion.button
                  className="w-full rounded-lg bg-teal-500 py-2 font-semibold text-white transition-all duration-300 hover:bg-teal-600"
                  initial={{ opacity: 0 }}
                  animate={
                    hoveredId === country.id ? { opacity: 1 } : { opacity: 0 }
                  }
                  transition={{ duration: 0.3 }}
                >
                  Explore
                </motion.button>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
