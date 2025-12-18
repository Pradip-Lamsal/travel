"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import toast from "react-hot-toast";

interface FooterProps {
  contactInfo?: {
    phone: string;
    email: string;
    address: string;
    hours: string;
  };
  socialLinks?: Array<{
    platform: string;
    url: string;
    icon: string;
  }>;
  companyName?: string;
  tagline?: string;
}

export const Footer: React.FC<FooterProps> = ({
  contactInfo = {
    phone: "+977-1-4700000",
    email: "hello@devaaya.com",
    address: "Thamel, Kathmandu, Nepal",
    hours: "Mon - Fri: 9AM - 6PM (Nepal Time)",
  },
  socialLinks = [
    { platform: "facebook", url: "https://facebook.com/devaaya", icon: "f" },
    { platform: "instagram", url: "https://instagram.com/devaaya", icon: "📷" },
    { platform: "whatsapp", url: "https://wa.me/977", icon: "💬" },
    { platform: "youtube", url: "https://youtube.com/@devaaya", icon: "▶️" },
  ],
  companyName = "Devaaya Holidays",
  tagline = "Your Journey Beyond Nepal Begins Here",
}) => {
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
      // Simulate API call - Phase 2 will implement backend
      await new Promise((resolve) => setTimeout(resolve, 1000));
      toast.success("Thank you for subscribing!");
      setEmail("");
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

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
    <footer className="bg-gradient-to-b from-slate-900 to-black text-white py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-r from-primary to-secondary/50 rounded-lg p-6 sm:p-8 mb-12 sm:mb-16"
        >
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-8">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold mb-2">
                Stay Updated
              </h3>
              <p className="text-white/80">
                Get exclusive travel deals and destination tips delivered to
                your inbox
              </p>
            </div>
            <form
              onSubmit={handleNewsletterSubmit}
              className="w-full sm:w-auto flex gap-2"
            >
              <Input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={isLoading}
                className="bg-white/20 border-white/30 text-white placeholder:text-white/50 flex-1 sm:flex-none"
              />
              <Button
                type="submit"
                disabled={isLoading}
                className="bg-accent hover:bg-accent/90 text-white px-4 sm:px-6"
              >
                <Send size={18} />
              </Button>
            </form>
          </div>
        </motion.div>

        {/* Main Footer Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-6 mb-8 sm:mb-12"
        >
          {/* Company Info */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg sm:text-xl font-bold mb-4">{companyName}</h3>
            <p className="text-white/70 text-sm mb-4">{tagline}</p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.platform}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-accent flex items-center justify-center transition-colors text-lg"
                  aria-label={social.platform}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              {[
                { label: "About Us", href: "/about-us" },
                { label: "Our Packages", href: "/packages" },
                { label: "Destinations", href: "/destinations" },
                { label: "Blog", href: "/blog" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Support Links */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-sm">
              {[
                { label: "Contact Us", href: "/contact" },
                { label: "FAQ", href: "/faq" },
                { label: "Booking Terms", href: "/terms" },
                { label: "Privacy Policy", href: "/privacy" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-3 text-sm">
              <div className="flex gap-3 items-start">
                <Phone size={16} className="mt-1 flex-shrink-0 text-accent" />
                <a
                  href={`tel:${contactInfo.phone}`}
                  className="text-white/70 hover:text-white transition-colors"
                >
                  {contactInfo.phone}
                </a>
              </div>
              <div className="flex gap-3 items-start">
                <Mail size={16} className="mt-1 flex-shrink-0 text-accent" />
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="text-white/70 hover:text-white transition-colors"
                >
                  {contactInfo.email}
                </a>
              </div>
              <div className="flex gap-3 items-start">
                <MapPin size={16} className="mt-1 flex-shrink-0 text-accent" />
                <p className="text-white/70">{contactInfo.address}</p>
              </div>
              <p className="text-white/60 text-xs">{contactInfo.hours}</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="border-t border-white/10 pt-6 sm:pt-8"
        >
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-white/70">
            <p>&copy; 2024 {companyName}. All rights reserved.</p>
            <div className="flex gap-4">
              <Link
                href="/privacy"
                className="hover:text-white transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="hover:text-white transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};
