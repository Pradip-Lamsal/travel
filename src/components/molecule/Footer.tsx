"use client";

import { PointerHighlight } from "@/components/ui/pointer-highlight";
import { motion } from "framer-motion";
import {
  Dribbble,
  Facebook,
  Mail,
  MapPin,
  Phone,
  Twitter,
  Youtube,
} from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import toast from "react-hot-toast";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast.error("Please enter your email");
      return;
    }

    setIsLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      toast.success("Thank you for subscribing!");
      setEmail("");
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const quickLinks = [
    { label: "Home", href: "#home" },
    { label: "Destinations", href: "#explore" },
    { label: "Travel Packages", href: "#packages" },
    { label: "About Us", href: "#about" },
    { label: "Contact Us", href: "#contact" },
    { label: "Travel Blog", href: "#blog" },
  ];

  const services = [
    { label: "Visa Assistance", href: "#" },
    { label: "Flight Booking", href: "#" },
    { label: "Hotel Reservations", href: "#" },
    { label: "Travel Insurance", href: "#" },
    { label: "Guided Tours", href: "#" },
    { label: "Custom Packages", href: "#" },
  ];

  const socialLinks = [
    { icon: Facebook, label: "Facebook", href: "#" },
    { icon: Twitter, label: "Twitter", href: "#" },
    { icon: Dribbble, label: "Dribbble", href: "#" },
    { icon: Youtube, label: "YouTube", href: "#" },
  ];

  const footerLinks = [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Cookie Policy", href: "#" },
    { label: "Sitemap", href: "#" },
  ];

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

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <footer className="relative text-gray-300 overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-linear-to-t from-teal-900/10 via-transparent to-transparent pointer-events-none" />

      {/* Animated top border */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(20, 184, 166, 0.8), transparent)",
          animation: "border-shimmer 3s infinite",
          boxShadow: "0 0 20px rgba(20, 184, 166, 0.4)",
        }}
      />

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Brand Section */}
            <motion.div variants={itemVariants} className="lg:col-span-1">
              <div className="mb-6">
                <div className="inline-flex items-center justify-center h-12 w-12 rounded-lg bg-teal-600 text-white font-bold text-lg mb-3">
                  ✈️
                </div>
                <h3 className="text-white font-bold text-lg mb-2">Devaaya</h3>
                <p className="text-gray-400 text-sm mb-4">HOLIDAYS</p>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Your trusted travel partner for international adventures from
                Nepal. Creating unforgettable memories worldwide since 2014.
              </p>
              {/* Social Icons */}
              <div className="flex gap-4">
                {socialLinks.map((social, idx) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={idx}
                      href={social.href}
                      whileHover={{ scale: 1.1, y: -3 }}
                      whileTap={{ scale: 0.95 }}
                      className="h-10 w-10 rounded-full bg-slate-800 hover:bg-teal-600 flex items-center justify-center transition-colors duration-300 group"
                    >
                      <Icon className="h-5 w-5 text-gray-400 group-hover:text-white transition-colors" />
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div variants={itemVariants} className="lg:col-span-1">
              <div className="mb-6">
                <PointerHighlight containerClassName="inline-block">
                  <h4 className="text-white font-bold text-lg">Quick Links</h4>
                </PointerHighlight>
              </div>
              <ul className="space-y-3">
                {quickLinks.map((link, idx) => (
                  <motion.li
                    key={idx}
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-teal-400 transition-colors duration-300 text-sm"
                    >
                      {link.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Our Services */}
            <motion.div variants={itemVariants} className="lg:col-span-1">
              <div className="mb-6">
                <PointerHighlight containerClassName="inline-block">
                  <h4 className="text-white font-bold text-lg">Our Services</h4>
                </PointerHighlight>
              </div>
              <ul className="space-y-3">
                {services.map((service, idx) => (
                  <motion.li
                    key={idx}
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Link
                      href={service.href}
                      className="text-gray-400 hover:text-teal-400 transition-colors duration-300 text-sm"
                    >
                      {service.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div variants={itemVariants} className="lg:col-span-1">
              <div className="mb-6">
                <PointerHighlight containerClassName="inline-block">
                  <h4 className="text-white font-bold text-lg">Contact Info</h4>
                </PointerHighlight>
              </div>
              <ul className="space-y-4">
                <li className="flex gap-3 items-start">
                  <MapPin className="h-5 w-5 text-teal-500 mt-0.5 shrink-0" />
                  <span className="text-gray-400 text-sm">
                    Thamel, Kathmandu
                    <br />
                    Nepal
                  </span>
                </li>
                <li className="flex gap-3 items-center">
                  <Phone className="h-5 w-5 text-teal-500 shrink-0" />
                  <a
                    href="tel:+9771-4123456"
                    className="text-gray-400 hover:text-teal-400 transition-colors text-sm"
                  >
                    +977-1-4123456
                  </a>
                </li>
                <li className="flex gap-3 items-center">
                  <Mail className="h-5 w-5 text-teal-500 shrink-0" />
                  <a
                    href="mailto:info@devaayaholidays.com"
                    className="text-gray-400 hover:text-teal-400 transition-colors text-sm"
                  >
                    info@devaayaholidays.com
                  </a>
                </li>
              </ul>
            </motion.div>

            {/* Newsletter */}
            <motion.div variants={itemVariants} className="lg:col-span-1">
              <div className="mb-6">
                <h4 className="text-white font-bold text-lg mb-1">
                  Subscribe to
                </h4>
                <h4 className="text-white font-bold text-lg">Newsletter</h4>
              </div>
              <form onSubmit={handleNewsletterSubmit} className="space-y-3">
                <input
                  type="email"
                  placeholder="Your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={isLoading}
                  className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 text-white placeholder-gray-500 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-all text-sm disabled:opacity-50"
                />
                <motion.button
                  type="submit"
                  disabled={isLoading}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-4 py-3 rounded-lg bg-linear-to-r from-teal-500 to-teal-600 text-white font-semibold hover:shadow-lg hover:shadow-teal-500/30 transition-all text-sm disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? "Subscribing..." : "Subscribe"}
                </motion.button>
              </form>
            </motion.div>
          </motion.div>

          {/* Divider */}
          <div className="h-px bg-linear-to-r from-transparent via-slate-700 to-transparent my-8" />

          {/* Bottom Footer */}
          <motion.div
            className="flex flex-col md:flex-row items-center justify-between gap-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.p variants={itemVariants} className="text-gray-400 text-sm">
              © {currentYear} Devaaya Holidays. All rights reserved.
            </motion.p>
            <motion.div
              variants={itemVariants}
              className="flex gap-6 flex-wrap justify-center md:justify-end"
            >
              {footerLinks.map((link, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-teal-400 transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};
