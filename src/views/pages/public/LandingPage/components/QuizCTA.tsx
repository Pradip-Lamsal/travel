"use client";

import { PointerHighlight } from "@/components/ui/pointer-highlight";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import Image from "next/image";

export default function QuizCTASection() {
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

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const polaroidVariants = {
    hidden: { opacity: 0, rotate: -10, scale: 0.8 },
    visible: (i: number) => ({
      opacity: 1,
      rotate: [-15, -10, -5][i],
      scale: 1,
      transition: {
        delay: i * 0.15,
        duration: 0.6,
      },
    }),
    hover: {
      y: -10,
      rotate: [-15 + 5, -10 + 5, -5 + 5][0],
      transition: { duration: 0.3 },
    },
  };

  const images = [
    "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=300&h=350&fit=crop",
    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=350&fit=crop",
    "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=300&h=350&fit=crop",
  ];

  return (
    <section className="relative min-h-screen w-full bg-linear-to-b from-slate-950 to-slate-900 px-4 py-20">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 h-80 w-80 rounded-full bg-teal-500/5 blur-3xl" />
        <div className="absolute -bottom-40 -right-40 h-80 w-80 rounded-full bg-teal-500/5 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl">
        <motion.div
          className="grid gap-12 lg:grid-cols-2 lg:items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Left Side - Polaroid Images */}
          <motion.div
            className="relative h-96 lg:h-full"
            variants={itemVariants}
          >
            <div className="relative mx-auto h-full max-w-md">
              {images.map((img, index) => (
                <motion.div
                  key={index}
                  className="absolute flex flex-col items-center rounded-lg bg-white p-2 shadow-2xl"
                  style={{
                    width: "200px",
                    left: `${index * 60}px`,
                    top: `${index * 40}px`,
                    zIndex: index,
                  }}
                  custom={index}
                  variants={polaroidVariants}
                  whileHover="hover"
                >
                  <Image
                    src={img}
                    alt={`Destination ${index + 1}`}
                    width={200}
                    height={160}
                    className="h-40 w-full object-cover"
                  />
                  <div className="w-full px-2 py-1 text-center">
                    <div className="h-2 w-2/3 rounded bg-gray-200" />
                  </div>
                </motion.div>
              ))}

              {/* Map background element */}
              <motion.div
                className="absolute inset-0 -z-10 bg-linear-to-br from-slate-800/50 to-teal-900/50 rounded-3xl"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
              />
            </div>
          </motion.div>

          {/* Right Side - Text Content */}
          <motion.div
            className="flex flex-col justify-center"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div
              variants={itemVariants}
              className="mb-2 flex items-center gap-2"
            >
              <Sparkles className="h-5 w-5 text-teal-400" />
              <span className="text-sm font-semibold text-teal-400">
                FIND YOUR PERFECT RETREAT
              </span>
            </motion.div>

            <motion.h2
              variants={itemVariants}
              className="mb-4 text-4xl font-bold leading-tight text-white md:text-5xl"
            >
              <PointerHighlight>
                Can&apos;t find the perfect retreat?
              </PointerHighlight>
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="mb-8 text-xl text-gray-300"
            >
              Our 1-minute quick quiz will help you find the perfect retreat for
              you.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="mb-8 flex flex-col gap-4"
            >
              <div className="flex items-start gap-4">
                <motion.div
                  className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-teal-500"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: 0.3, type: "spring" }}
                >
                  <span className="text-white font-bold text-sm">✓</span>
                </motion.div>
                <p className="text-gray-300">Personalized recommendations</p>
              </div>
              <div className="flex items-start gap-4">
                <motion.div
                  className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-teal-500"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: 0.4, type: "spring" }}
                >
                  <span className="text-white font-bold text-sm">✓</span>
                </motion.div>
                <p className="text-gray-300">
                  Expert advice tailored to your interests
                </p>
              </div>
              <div className="flex items-start gap-4">
                <motion.div
                  className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-teal-500"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: 0.5, type: "spring" }}
                >
                  <span className="text-white font-bold text-sm">✓</span>
                </motion.div>
                <p className="text-gray-300">
                  Save time and discover hidden gems
                </p>
              </div>
            </motion.div>

            <motion.button
              variants={itemVariants}
              className="inline-block w-fit rounded-full bg-teal-500 px-8 py-3 font-semibold text-white transition-all duration-300 hover:bg-teal-600 hover:shadow-lg hover:shadow-teal-500/50"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Inspire Me
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
