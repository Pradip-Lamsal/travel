"use client";

import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { useEffect, useState } from "react";

interface CarouselSlide {
  id: number;
  destination: string;
  image: string;
  title: string;
  description: string;
}

interface HeroCarouselProps {
  slides: CarouselSlide[];
  autoplayInterval?: number;
}

export const HeroCarousel: React.FC<HeroCarouselProps> = ({
  slides,
  autoplayInterval = 5000,
}) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
    },
    [Autoplay({ delay: autoplayInterval, stopOnInteraction: false })]
  );

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

  if (!slides || slides.length === 0) {
    return null;
  }

  return (
    <section className="relative h-screen bg-slate-900 text-white overflow-hidden">
      <div ref={emblaRef} className="h-full w-full">
        <div className="flex h-full">
          {slides.map((slide) => (
            <div
              key={slide.id}
              className="relative flex-[0_0_100%] h-full w-full"
            >
              <Image
                src={slide.image}
                alt={slide.destination}
                fill
                className="object-cover"
                priority={slide.id === 1}
              />
              <div className="absolute inset-0 bg-black/40"></div>

              {/* Content */}
              <div className="relative h-full flex flex-col items-center justify-center container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-4 leading-tight">
                  Your Journey Beyond Nepal Begins Here
                </h1>
                <p className="text-xl sm:text-2xl mb-8 max-w-2xl mx-auto opacity-90">
                  {slide.description}
                </p>

                <div className="flex flex-col sm:flex-row gap-6 mb-12">
                  <button className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105">
                    Explore Destinations
                  </button>
                  <button className="border-2 border-white text-white hover:bg-white hover:text-teal-600 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300">
                    Plan Your Trip
                  </button>
                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 14l-7 7m0 0l-7-7m7 7V3"
                    />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
