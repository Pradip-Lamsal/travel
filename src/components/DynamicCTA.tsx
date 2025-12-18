"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Image from "next/image";

interface DynamicCTAProps {
  headline: string;
  description: string;
  image: string;
  ctaButtonText: string;
  ctaAction: string;
  badgeText?: string;
  layout?: "left" | "center" | "right";
  className?: string;
}

export const DynamicCTA: React.FC<DynamicCTAProps> = ({
  headline,
  description,
  image,
  ctaButtonText,
  ctaAction,
  badgeText,
  layout = "center",
  className = "",
}) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const getLayoutClasses = () => {
    switch (layout) {
      case "left":
        return "flex-row";
      case "right":
        return "flex-row-reverse";
      case "center":
      default:
        return "flex-col";
    }
  };

  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className={`relative w-full py-20 sm:py-28 lg:py-36 overflow-hidden ${className}`}
    >
      {/* Premium Gradient Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950" />
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 via-purple-900/10 to-transparent opacity-70" />
        <Image
          src={image}
          alt={headline}
          fill
          className="object-cover opacity-20 mix-blend-luminosity"
          quality={80}
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/98 via-slate-900/90 to-slate-950/95" />

        {/* Animated background elements */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-3xl opacity-40 animate-pulse" />
        <div
          className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/20 rounded-full blur-3xl opacity-40 animate-pulse"
          style={{ animationDelay: "1s" }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`flex items-center justify-between gap-8 lg:gap-12 ${getLayoutClasses()}`}
        >
          {/* Content */}
          <motion.div
            variants={containerVariants}
            className="flex-1 min-w-full sm:min-w-0 md:min-w-[45%] text-white"
          >
            {badgeText && (
              <motion.div variants={itemVariants} className="mb-6 sm:mb-8">
                <span className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/20 via-purple-500/15 to-accent/20 backdrop-blur-xl text-white px-5 sm:px-7 py-2.5 sm:py-3.5 rounded-full text-xs sm:text-sm font-bold border-2 border-blue-400/40 shadow-lg shadow-blue-500/20">
                  <span className="flex h-2.5 w-2.5 rounded-full bg-green-400 animate-pulse" />
                  {badgeText}
                </span>
              </motion.div>
            )}

            <motion.h2
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl font-black mb-5 lg:mb-7 leading-[1.1] tracking-tight"
            >
              {headline}
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg lg:text-xl text-white/85 mb-8 lg:mb-10 leading-relaxed font-light max-w-2xl"
            >
              {description}
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 sm:gap-5"
            >
              <Button
                onClick={() => (window.location.href = ctaAction)}
                className="group bg-gradient-to-r from-accent to-orange-600 hover:from-orange-600 hover:to-accent text-white font-bold px-8 sm:px-10 py-3 sm:py-4 text-base sm:text-lg rounded-full shadow-2xl hover:shadow-accent/50 transition-all duration-300"
              >
                <span className="flex items-center gap-2">
                  {ctaButtonText}
                  <svg
                    className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </span>
              </Button>
              <Button
                variant="outline"
                className="border-2 border-white/40 text-white hover:bg-white/10 font-bold px-8 sm:px-10 py-3 sm:py-4 text-base sm:text-lg rounded-full backdrop-blur-sm"
              >
                Learn More
              </Button>
            </motion.div>
          </motion.div>

          {/* Decorative Elements */}
          {layout !== "center" && (
            <motion.div
              variants={itemVariants}
              className="hidden md:block flex-1 min-w-[45%] relative h-64 lg:h-80 rounded-2xl overflow-hidden"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-accent/20 to-secondary/20 backdrop-blur-sm"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  animate={{ scale: [1, 1.1, 1], rotate: [0, 5, 0] }}
                  transition={{ duration: 6, repeat: Infinity }}
                  className="text-7xl lg:text-8xl"
                >
                  🌍
                </motion.div>
              </div>
            </motion.div>
          )}
        </div>

        {/* Floating Stats (optional decoration) */}
        <motion.div
          variants={containerVariants}
          className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 mt-14 lg:mt-20"
        >
          {[
            { label: "5000+", value: "Happy Travelers" },
            { label: "50+", value: "Destinations" },
            { label: "10K+", value: "Reviews" },
            { label: "24/7", value: "Support" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.05 }}
              className="bg-white/5 backdrop-blur-md border border-white/20 rounded-2xl p-5 sm:p-6 text-center hover:bg-white/10 transition-all duration-300 shadow-xl hover:shadow-2xl"
            >
              <p className="text-2xl sm:text-3xl lg:text-4xl font-black bg-gradient-to-r from-accent to-orange-400 bg-clip-text text-transparent mb-2">
                {stat.label}
              </p>
              <p className="text-xs sm:text-sm text-white/80 font-medium">
                {stat.value}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};
