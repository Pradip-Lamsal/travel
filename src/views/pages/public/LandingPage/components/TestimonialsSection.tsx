"use client";

import useEmblaCarousel from "embla-carousel-react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

interface Testimonial {
  id: number;
  name: string;
  location: string;
  avatar: string;
  text: string;
  rating: number;
  destination: string;
}

interface TestimonialsSectionProps {
  testimonials: Testimonial[];
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({
  testimonials,
}) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    slidesToScroll: 1,
  });

  const [currentIndex, setCurrentIndex] = useState(0);

  const onSelect = () => {
    if (!emblaApi) return;
    setCurrentIndex(emblaApi.selectedScrollSnap());
  };

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);

    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi]);

  const scroll = (direction: "prev" | "next") => {
    if (!emblaApi) return;
    direction === "prev" ? emblaApi.scrollPrev() : emblaApi.scrollNext();
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="w-full py-20 sm:py-28 lg:py-36 bg-gradient-to-b from-slate-950 via-slate-900 to-black text-white relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          variants={itemVariants}
          className="text-center mb-14 sm:mb-18 lg:mb-24"
        >
          <span className="inline-flex items-center gap-2 bg-gradient-to-r from-accent/20 to-orange-500/20 text-accent px-5 sm:px-7 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-bold mb-5 sm:mb-6 border-2 border-accent/30 backdrop-blur-xl">
            Success Stories
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-7xl font-black mb-4 sm:mb-6 leading-[1.1]">
            <span className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
              What Our Travelers Say
            </span>
          </h2>
          <p className="text-white/70 text-base sm:text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed font-light">
            Real experiences from our valued customers who&apos;ve explored the
            world with us.
          </p>
        </motion.div>

        {/* Testimonials Carousel */}
        <motion.div variants={itemVariants} className="relative mb-8 sm:mb-12">
          <div ref={emblaRef} className="overflow-hidden">
            <div className="flex gap-4 sm:gap-6">
              {testimonials.map((testimonial) => (
                <motion.div
                  key={testimonial.id}
                  variants={itemVariants}
                  className="flex-[0_0_100%] min-w-0 sm:flex-[0_0_50%] lg:flex-[0_0_33.333%]"
                >
                  <div className="h-full bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8 hover:bg-white/10 transition-colors">
                    {/* Stars */}
                    <div className="flex gap-1 mb-4">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          size={18}
                          className={`sm:w-5 sm:h-5 ${
                            i < Math.floor(testimonial.rating)
                              ? "fill-accent text-accent"
                              : "text-white/30"
                          }`}
                        />
                      ))}
                    </div>

                    {/* Quote */}
                    <p className="text-sm sm:text-base text-white/90 mb-6 leading-relaxed italic">
                      &quot;{testimonial.text}&quot;
                    </p>

                    {/* Author */}
                    <div className="flex items-center gap-3 sm:gap-4 pt-6 border-t border-white/10">
                      <div className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden flex-shrink-0">
                        <Image
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-white text-sm sm:text-base">
                          {testimonial.name}
                        </h4>
                        <p className="text-xs sm:text-sm text-white/70">
                          {testimonial.location} • {testimonial.destination}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <motion.button
            onClick={() => scroll("prev")}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="absolute left-0 sm:left-4 top-1/2 -translate-y-1/2 -translate-x-6 sm:translate-x-0 bg-accent hover:bg-accent/90 text-white p-2 sm:p-3 rounded-full transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={20} className="sm:w-6 sm:h-6" />
          </motion.button>

          <motion.button
            onClick={() => scroll("next")}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="absolute right-0 sm:right-4 top-1/2 -translate-y-1/2 translate-x-6 sm:translate-x-0 bg-accent hover:bg-accent/90 text-white p-2 sm:p-3 rounded-full transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight size={20} className="sm:w-6 sm:h-6" />
          </motion.button>
        </motion.div>

        {/* Indicators */}
        <motion.div
          variants={itemVariants}
          className="flex justify-center gap-2"
        >
          {testimonials.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => emblaApi?.scrollTo(index)}
              className={`h-2 rounded-full transition-all ${
                index === currentIndex
                  ? "bg-accent w-8"
                  : "bg-white/30 hover:bg-white/50 w-2"
              }`}
              whileHover={{ scale: 1.2 }}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};
