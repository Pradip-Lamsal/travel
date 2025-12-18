"use client";

import { motion } from "framer-motion";

interface SkeletonLoaderProps {
  sections?: number;
  fullPage?: boolean;
}

export const SkeletonLoader: React.FC<SkeletonLoaderProps> = ({
  sections = 5,
  fullPage = false,
}) => {
  const shimmerVariants = {
    animate: {
      backgroundPosition: ["200% 0", "-200% 0"],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "linear" as const,
      },
    },
  };

  const containerClasses = fullPage ? "min-h-screen" : "w-full";

  return (
    <div className={`${containerClasses} bg-slate-50`}>
      {Array.from({ length: sections }).map((_, sectionIndex) => (
        <div key={sectionIndex} className="w-full">
          {/* Section Header */}
          <motion.div
            variants={shimmerVariants}
            animate="animate"
            className="h-8 bg-gradient-to-r from-slate-200 via-slate-100 to-slate-200 m-6 sm:m-8 rounded w-1/3 bg-[length:200%_100%]"
          />

          {/* Card Grid Skeleton */}
          <div className="px-4 sm:px-6 lg:px-8 pb-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {Array.from({ length: 4 }).map((_, cardIndex) => (
                <motion.div
                  key={cardIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: cardIndex * 0.1 }}
                  className="rounded-lg overflow-hidden shadow-md"
                >
                  {/* Image Skeleton */}
                  <motion.div
                    variants={shimmerVariants}
                    animate="animate"
                    className="h-40 sm:h-48 bg-gradient-to-r from-slate-300 via-slate-200 to-slate-300 bg-[length:200%_100%]"
                  />

                  {/* Content Skeleton */}
                  <div className="p-4 sm:p-6 bg-white space-y-3 sm:space-y-4">
                    {/* Title */}
                    <motion.div
                      variants={shimmerVariants}
                      animate="animate"
                      className="h-5 bg-gradient-to-r from-slate-200 via-slate-100 to-slate-200 rounded w-3/4 bg-[length:200%_100%]"
                    />

                    {/* Subtitle */}
                    <motion.div
                      variants={shimmerVariants}
                      animate="animate"
                      className="h-4 bg-gradient-to-r from-slate-200 via-slate-100 to-slate-200 rounded w-1/2 bg-[length:200%_100%]"
                    />

                    {/* Tags */}
                    <div className="flex gap-2 pt-2">
                      {[1, 2].map((tag) => (
                        <motion.div
                          key={tag}
                          variants={shimmerVariants}
                          animate="animate"
                          className="h-6 bg-gradient-to-r from-slate-200 via-slate-100 to-slate-200 rounded-full w-16 bg-[length:200%_100%]"
                        />
                      ))}
                    </div>

                    {/* Rating and Price */}
                    <div className="space-y-2 pt-2 border-t border-slate-200">
                      <motion.div
                        variants={shimmerVariants}
                        animate="animate"
                        className="h-4 bg-gradient-to-r from-slate-200 via-slate-100 to-slate-200 rounded w-1/3 bg-[length:200%_100%]"
                      />
                      <motion.div
                        variants={shimmerVariants}
                        animate="animate"
                        className="h-6 bg-gradient-to-r from-slate-200 via-slate-100 to-slate-200 rounded w-1/2 bg-[length:200%_100%]"
                      />
                    </div>

                    {/* Button */}
                    <motion.div
                      variants={shimmerVariants}
                      animate="animate"
                      className="h-10 bg-gradient-to-r from-slate-200 via-slate-100 to-slate-200 rounded-lg w-full bg-[length:200%_100%]"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      ))}

      {/* Pulse Animation at bottom */}
      <motion.div
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="h-1 bg-primary/30 w-full"
      />
    </div>
  );
};
