"use client";

import { PointerHighlight } from "@/components/ui/pointer-highlight";
import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Choose Retreat",
    description: "Browse and select from our curated collection",
    icon: "🏖️",
  },
  {
    number: "02",
    title: "Match Boutique Stay",
    description: "Find the perfect accommodation for your needs",
    icon: "🏨",
  },
  {
    number: "03",
    title: "Add Transfers & Extras",
    description: "Customize with additional services and activities",
    icon: "✈️",
  },
  {
    number: "04",
    title: "Secure Payment",
    description: "Complete your booking with secure checkout",
    icon: "💳",
  },
];

export default function CombineRetreatSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
      },
    }),
    hover: {
      y: -8,
      boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)",
      transition: { duration: 0.3 },
    },
  };

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-slate-950 py-20 px-4">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&h=900&fit=crop)",
            opacity: 0.15,
          }}
        />
        <div className="absolute inset-0 bg-linear-to-b from-transparent via-slate-950/70 to-slate-950" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          className="mb-12 text-center md:mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <PointerHighlight>
            <h2 className="mb-4 text-4xl font-bold text-white md:text-5xl">
              Combine Retreat
            </h2>
          </PointerHighlight>
          <p className="mx-auto max-w-2xl text-gray-300">
            Combine Retreat into one seamless checkout. Instant confirmations
            where available, or concierge support for bespoke itineraries.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left Side - CTA and Features */}
          <motion.div
            className="flex flex-col justify-center"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="mb-8">
              <h3 className="mb-4 text-3xl font-bold text-white">+Stay</h3>
              <h3 className="mb-4 text-3xl font-bold text-white">+Transfers</h3>
              <h3 className="mb-12 text-3xl font-bold text-white">+Extras</h3>
            </div>

            <p className="mb-8 text-gray-300">
              Combine Retreat into one seamless checkout. Instant confirmations
              where available, or concierge support for bespoke itineraries.
            </p>

            <motion.button
              className="inline-block w-fit rounded-full bg-white px-8 py-3 font-semibold text-slate-900 transition-all duration-300 hover:bg-teal-400 hover:shadow-lg hover:shadow-teal-400/50"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Combine Retreat
            </motion.button>
          </motion.div>

          {/* Right Side - Steps */}
          <motion.div
            className="grid grid-cols-2 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                className="group relative overflow-hidden rounded-lg border border-teal-500/20 bg-linear-to-br from-slate-900 to-slate-800 p-6 transition-all duration-300 hover:border-teal-500/50 hover:bg-linear-to-br hover:from-slate-800 hover:to-teal-900/20"
                custom={index}
                variants={cardVariants}
                whileHover="hover"
              >
                {/* Glow Effect */}
                <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="absolute inset-0 bg-linear-to-br from-teal-500/10 to-transparent" />
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <div className="mb-4 text-4xl">{step.icon}</div>
                  <div className="mb-3 flex items-baseline gap-2">
                    <span className="text-2xl font-bold text-teal-400">
                      {step.number}
                    </span>
                    <h4 className="text-lg font-semibold text-white">
                      {step.title}
                    </h4>
                  </div>
                  <p className="text-sm text-gray-400">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
