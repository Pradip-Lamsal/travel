"use client";

import { PointerHighlight } from "@/components/ui/pointer-highlight";
import destinations from "@/lib/destinations.json";
import { motion } from "framer-motion";
import { Calendar, MapPin, Star, Users } from "lucide-react";
import { useState } from "react";

export default function FeaturedRetreats() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

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

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
    hover: {
      y: -12,
      transition: { duration: 0.3 },
    },
  };

  return (
    <section className="min-h-screen bg-slate-900 px-4 py-20 md:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          className="mb-8 flex items-center justify-between gap-4 md:mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex-1 max-w-4xl">
            <PointerHighlight>
              <h2 className="text-3xl font-bold text-white md:text-4xl mb-3">
                Featured Retreats
              </h2>
            </PointerHighlight>
            <p className="text-sm md:text-base text-gray-400 mb-4">
              Discover unique locations, engaging activities, and expert-led
              workshops designed to inspire and refresh your spirit.
            </p>
            <p className="text-xs md:text-sm text-gray-500">
              Handpicked experiences from world-class retreat centers and travel
              experts
            </p>
          </div>
          <motion.button
            className="inline-block rounded-full border border-teal-500 px-6 py-2 font-semibold text-teal-400 transition-all duration-300 hover:bg-teal-500/10 whitespace-nowrap"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            See all
          </motion.button>
        </motion.div>

        {/* Featured Image Banner */}
        <motion.div
          className="mb-12 rounded-2xl overflow-hidden h-64 md:h-72 relative group"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <img
            src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=300&fit=crop"
            alt="Featured retreat experience"
            className="w-full h-full object-cover"
          />

          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-all duration-300" />

          {/* Baku Banner Content */}
          <div className="absolute inset-0 flex flex-col items-start justify-end p-6 md:p-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="w-full"
            >
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                Travel to <span className="text-yellow-300">BAKU</span>
              </h3>
              <p className="text-white/90 text-sm md:text-base mb-4 max-w-xl">
                Discover the enchanting capital of Azerbaijan. Experience modern
                architecture, ancient culture, and world-class hospitality in
                this vibrant city where East meets West.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-2 bg-white text-slate-900 font-bold rounded-full hover:bg-yellow-300 transition-all"
              >
                Book Now
              </motion.button>
            </motion.div>
          </div>
        </motion.div>

        {/* Retreats Grid */}
        <motion.div
          className="grid gap-8 md:grid-cols-2"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {destinations.featuredRetreats.map((retreat) => (
            <motion.div
              key={retreat.id}
              className="group overflow-hidden rounded-xl bg-slate-800 transition-all duration-300 relative border border-slate-700 hover:border-teal-500/50"
              variants={cardVariants}
              onHoverStart={() => setHoveredId(retreat.id)}
              onHoverEnd={() => setHoveredId(null)}
              whileHover="hover"
            >
              {/* Animated border shimmer on hover */}
              <motion.div
                className="absolute inset-0 rounded-xl pointer-events-none"
                initial={{ opacity: 0 }}
                animate={
                  hoveredId === retreat.id ? { opacity: 1 } : { opacity: 0 }
                }
                transition={{ duration: 0.3 }}
                style={{
                  background:
                    "linear-gradient(90deg, transparent, rgba(20, 184, 166, 0.5), transparent)",
                  animation:
                    hoveredId === retreat.id
                      ? "border-shimmer 3s infinite"
                      : "none",
                  border: "1px solid transparent",
                  backgroundClip: "padding-box",
                  borderImage:
                    "linear-gradient(90deg, transparent, rgba(20, 184, 166, 0.8), transparent) 1",
                }}
              />
              <div className="grid gap-0 sm:grid-cols-2">
                {/* Image Section */}
                <div className="relative h-64 overflow-hidden bg-slate-700 sm:h-full">
                  <motion.img
                    src={retreat.image}
                    alt={retreat.title}
                    className="h-full w-full object-cover"
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.15 }}
                    transition={{ duration: 0.4 }}
                  />

                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-60" />

                  {/* Price Tag */}
                  <motion.div
                    className="absolute top-4 right-4 rounded-lg bg-white px-3 py-1 font-bold text-slate-900"
                    initial={{ opacity: 0, x: 20 }}
                    animate={
                      hoveredId === retreat.id
                        ? { opacity: 1, x: 0 }
                        : { opacity: 0, x: 20 }
                    }
                    transition={{ duration: 0.3 }}
                  >
                    from ${retreat.price.toLocaleString()}
                  </motion.div>
                </div>

                {/* Content Section */}
                <div className="flex flex-col justify-between p-6">
                  {/* Header */}
                  <div className="mb-4">
                    <h3 className="mb-2 text-xl font-bold text-white line-clamp-2">
                      {retreat.title}
                    </h3>

                    {/* Location */}
                    <div className="mb-4 flex items-start gap-2 text-sm text-gray-400">
                      <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-teal-400" />
                      <span>{retreat.location}</span>
                    </div>

                    {/* Rating */}
                    <div className="mb-4 flex items-center gap-2">
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${
                              i < Math.floor(retreat.rating)
                                ? "fill-yellow-400 text-yellow-400"
                                : "text-gray-600"
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-gray-400">
                        {retreat.rating} ({retreat.reviews} reviews)
                      </span>
                    </div>
                  </div>

                  {/* Details Grid */}
                  <div className="mb-6 grid grid-cols-2 gap-3 text-sm">
                    <motion.div
                      className="rounded-lg bg-slate-700/50 p-3"
                      initial={{ opacity: 0 }}
                      animate={
                        hoveredId === retreat.id
                          ? { opacity: 1 }
                          : { opacity: 0 }
                      }
                      transition={{ delay: 0.1 }}
                    >
                      <div className="flex items-center gap-1 text-gray-400 mb-1">
                        <Calendar className="h-3 w-3" />
                        <span className="text-xs">Duration</span>
                      </div>
                      <p className="font-semibold text-white">
                        {retreat.duration}
                      </p>
                    </motion.div>

                    <motion.div
                      className="rounded-lg bg-slate-700/50 p-3"
                      initial={{ opacity: 0 }}
                      animate={
                        hoveredId === retreat.id
                          ? { opacity: 1 }
                          : { opacity: 0 }
                      }
                      transition={{ delay: 0.15 }}
                    >
                      <div className="flex items-center gap-1 text-gray-400 mb-1">
                        <Users className="h-3 w-3" />
                        <span className="text-xs">Guests</span>
                      </div>
                      <p className="font-semibold text-white">
                        {retreat.guests} guests
                      </p>
                    </motion.div>
                  </div>

                  {/* Activities */}
                  <motion.div
                    className="mb-6 flex flex-wrap gap-2"
                    initial={{ opacity: 0 }}
                    animate={
                      hoveredId === retreat.id ? { opacity: 1 } : { opacity: 0 }
                    }
                    transition={{ delay: 0.2 }}
                  >
                    {retreat.activities.map((activity, idx) => (
                      <span
                        key={idx}
                        className="inline-block rounded-full bg-teal-500/20 px-3 py-1 text-xs text-teal-300"
                      >
                        {activity}
                      </span>
                    ))}
                  </motion.div>

                  {/* CTA Buttons */}
                  <motion.div
                    className="flex gap-3"
                    initial={{ opacity: 0 }}
                    animate={
                      hoveredId === retreat.id
                        ? { opacity: 1 }
                        : { opacity: 0.5 }
                    }
                    transition={{ duration: 0.3 }}
                  >
                    <button className="flex-1 rounded-lg bg-teal-500 py-2 font-semibold text-white transition-all duration-300 hover:bg-teal-600">
                      Book Now
                    </button>
                    <button className="flex-1 rounded-lg border border-teal-500/50 py-2 font-semibold text-teal-400 transition-all duration-300 hover:bg-teal-500/10">
                      Details
                    </button>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
