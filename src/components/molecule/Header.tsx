"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

interface HeaderProps {
  menuItems?: Array<{ label: string; href: string }>;
  logoUrl?: string;
}

export const Header: React.FC<HeaderProps> = ({
  menuItems = [
    { label: "Home", href: "/" },
    { label: "Packages", href: "/packages" },
    { label: "Destinations", href: "/destinations" },
    { label: "About", href: "/about-us" },
    { label: "Contact", href: "/contact" },
  ],
  logoUrl = "Devaaya",
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: 0 }}
      animate={{
        y: 0,
        backgroundColor: isScrolled ? "rgba(15, 23, 42, 0.98)" : "transparent",
        boxShadow: isScrolled
          ? "0 10px 30px rgba(0, 0, 0, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.1)"
          : "none",
        borderBottom: isScrolled
          ? "1px solid rgba(255, 255, 255, 0.08)"
          : "none",
      }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
            >
              {logoUrl}
            </motion.div>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {menuItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <Button
                  variant="ghost"
                  className={`text-sm lg:text-base transition-colors ${
                    isScrolled
                      ? "text-white hover:bg-white/10"
                      : "text-white hover:bg-white/20"
                  }`}
                >
                  {item.label}
                </Button>
              </Link>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-2 lg:gap-3">
            <Link href="/contact">
              <Button
                variant="outline"
                className={`text-sm ${
                  isScrolled
                    ? "border-white text-white hover:bg-white/10"
                    : "border-white/50 text-white hover:bg-white/10"
                }`}
              >
                Contact Us
              </Button>
            </Link>
            <Link href="/packages">
              <Button className="bg-accent hover:bg-accent/90 text-white text-sm">
                Book Now
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white p-2"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{
            opacity: mobileMenuOpen ? 1 : 0,
            height: mobileMenuOpen ? "auto" : 0,
          }}
          transition={{ duration: 0.2 }}
          className="md:hidden overflow-hidden"
        >
          <nav className="flex flex-col gap-2 py-4 border-t border-white/10">
            {menuItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <Button
                  variant="ghost"
                  className="w-full justify-start text-white hover:bg-white/10"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Button>
              </Link>
            ))}
            <div className="flex flex-col gap-2 pt-2 border-t border-white/10">
              <Link href="/contact" className="w-full">
                <Button
                  variant="outline"
                  className="w-full border-white text-white hover:bg-white/10"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact Us
                </Button>
              </Link>
              <Link href="/packages" className="w-full">
                <Button
                  className="w-full bg-accent hover:bg-accent/90 text-white"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Book Now
                </Button>
              </Link>
            </div>
          </nav>
        </motion.div>
      </div>
    </motion.header>
  );
};
