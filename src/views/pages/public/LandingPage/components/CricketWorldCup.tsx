"use client";

import { PointerHighlight } from "@/components/ui/pointer-highlight";
import { motion } from "framer-motion";

export default function CricketWorldCup() {
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
                Cricket World Cup 2026
              </h2>
            </PointerHighlight>
            <p className="text-sm md:text-base text-gray-400 mb-4">
              Experience the most anticipated cricket event of the decade. VIP
              packages include premium seating, luxury accommodations, and
              exclusive experiences.
            </p>
            <p className="text-xs md:text-sm text-gray-500">
              Limited availability • Early bird discounts up to 32% off
            </p>
          </div>
          <motion.button
            className="inline-block rounded-full border border-teal-500 px-6 py-2 font-semibold text-teal-400 transition-all duration-300 hover:bg-teal-500/10 whitespace-nowrap"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore
          </motion.button>
        </motion.div>

        {/* Cricket World Cup Banner */}
        <motion.div
          className="flex justify-center"
          variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div
            className="w-full max-w-[83rem] rounded-2xl overflow-hidden h-[345px] md:h-[540px] relative group"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
            viewport={{ once: true }}
          >
            <img
              src="https://images.unsplash.com/photo-1624526267942-ab67cb775590?w=1200&h=600&fit=crop"
              alt="Cricket World Cup 2026"
              className="w-full h-full object-cover"
            />

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-all duration-300" />

            {/* Logo with hover effect */}
            <motion.img
              src="https://upload.wikimedia.org/wikipedia/en/1/11/ICC_Cricket_World_Cup_2026_logo.png"
              alt="Cricket World Cup 2026"
              className="absolute top-6 right-6 h-16 md:h-20 w-auto z-20"
              initial={{ scale: 0, rotate: -180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
              whileHover={{ scale: 1.1, rotate: 5 }}
              viewport={{ once: true }}
            />

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-all duration-300" />

            {/* Cricket World Cup Content */}
            <div className="absolute inset-0 flex flex-col justify-between p-6 md:p-12">
              {/* Top Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                whileHover={{ y: -5 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <motion.span
                    className="inline-block px-4 py-2 bg-yellow-400 text-slate-900 font-bold rounded-full text-sm md:text-base"
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0 0 20px rgba(250, 204, 21, 0.5)",
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    LIMITED TIME OFFER
                  </motion.span>
                </div>
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                  Experience the Cricket
                  <br />
                  <span className="text-yellow-300">World Cup 2026</span>
                </h2>
              </motion.div>

              {/* Middle Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                whileHover={{ y: -8 }}
                viewport={{ once: true }}
                className="flex flex-col md:flex-row gap-8 items-start"
              >
                {/* Left - Features */}
                <div className="flex-1">
                  <h3 className="text-lg md:text-xl font-bold text-white mb-3">
                    Ultimate Fan Experience
                  </h3>
                  <p className="text-white/80 mb-4 text-xs md:text-sm leading-tight">
                    7 nights / 8 days all-inclusive package with match tickets
                    and VIP experiences
                  </p>

                  <div className="space-y-2 mb-6 columns-2 gap-4">
                    {[
                      "Premium Stadium Access",
                      "5-Star Accommodations",
                      "3 Premium Match Tickets",
                      "Daily Gourmet Breakfast & Dinner",
                      "Private Airport Transfers",
                      "Professional Tour Guide",
                      "VIP Lounge Access",
                    ].map((feature, idx) => (
                      <motion.div
                        key={idx}
                        className="flex items-start gap-2 text-white/90 text-xs md:text-sm break-inside-avoid"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 + idx * 0.05 }}
                        viewport={{ once: true }}
                      >
                        <span className="text-yellow-400 font-bold text-base flex-shrink-0">
                          ✓
                        </span>
                        <span className="leading-snug">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Right - Pricing & Button */}
                <motion.div
                  className="bg-gradient-to-br from-yellow-500/20 via-white/10 to-teal-500/20 backdrop-blur-lg rounded-2xl p-4 md:p-6 min-w-fit border border-white/30 shadow-lg hover:shadow-2xl transition-shadow"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  whileHover={{
                    scale: 1.05,
                    borderColor: "rgba(20, 184, 166, 0.8)",
                    boxShadow:
                      "0 0 40px rgba(20, 184, 166, 0.4), inset 0 0 20px rgba(250, 204, 21, 0.1)",
                  }}
                  viewport={{ once: true }}
                >
                  <p className="text-white/70 text-xs md:text-sm mb-1">
                    Starting from
                  </p>
                  <motion.div className="mb-3" whileHover={{ scale: 1.05 }}>
                    <span className="text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-400">
                      $4,999
                    </span>
                    <span className="text-white/50 line-through ml-2 text-sm md:text-base">
                      $6,999
                    </span>
                  </motion.div>
                  <motion.p
                    className="text-yellow-300 font-bold text-xs md:text-sm mb-4"
                    whileHover={{
                      scale: 1.05,
                      textShadow: "0 0 20px rgba(250, 204, 21, 0.5)",
                    }}
                  >
                    💰 Save $2,000 (28% OFF)
                  </motion.p>

                  <motion.button
                    whileHover={{
                      scale: 1.08,
                      boxShadow: "0 0 25px rgba(255, 255, 255, 0.5)",
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full px-4 py-2 md:py-3 bg-gradient-to-r from-yellow-300 to-yellow-400 text-slate-900 font-bold rounded-full hover:shadow-lg transition-all mb-3 text-sm md:text-base"
                  >
                    📅 Book Now - Secure Your Spot!
                  </motion.button>

                  <p className="text-white/60 text-xs text-center leading-tight">
                    Limited availability • Non-refundable deposits required
                  </p>
                </motion.div>
              </motion.div>

              {/* Bottom Stats */}
              <motion.div
                className="flex gap-8 md:gap-12 justify-start text-left"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <div>
                  <p className="text-2xl md:text-3xl font-bold text-yellow-300">
                    32
                  </p>
                  <p className="text-white/80 text-xs md:text-sm">
                    Teams Competing
                  </p>
                </div>
                <div>
                  <p className="text-2xl md:text-3xl font-bold text-yellow-300">
                    64
                  </p>
                  <p className="text-white/80 text-xs md:text-sm">Matches</p>
                </div>
                <div>
                  <p className="text-2xl md:text-3xl font-bold text-yellow-300">
                    3
                  </p>
                  <p className="text-white/80 text-xs md:text-sm">
                    Countries Hosting
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
