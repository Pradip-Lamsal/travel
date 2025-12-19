"use client";

import { FloatingNav } from "@/components/ui/floating-navbar";
import { motion } from "framer-motion";
import { Compass, Home, Mail, Package, Users } from "lucide-react";
import { useEffect, useState } from "react";
import { BookingModal } from "../BookingModal";

export const Header: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    {
      name: "Home",
      link: "#home",
      icon: <Home className="h-4 w-4" />,
    },
    {
      name: "Destinations",
      link: "#explore",
      icon: <Compass className="h-4 w-4" />,
    },
    {
      name: "Packages",
      link: "#packages",
      icon: <Package className="h-4 w-4" />,
    },
    {
      name: "About",
      link: "#about",
      icon: <Users className="h-4 w-4" />,
    },
    {
      name: "Contact",
      link: "#contact",
      icon: <Mail className="h-4 w-4" />,
    },
  ];

  return (
    <>
      <motion.div
        className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
          isVisible
            ? "backdrop-blur-md bg-slate-950/70 border-b border-teal-500/20"
            : "bg-transparent"
        }`}
        initial={false}
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: -100 }}
        transition={{ duration: 0.3 }}
      >
        <FloatingNav navItems={navItems} />
        <motion.div
          className="absolute right-8 top-3"
          initial={false}
          animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          {isVisible && <BookingModal />}
        </motion.div>
      </motion.div>
    </>
  );
};
