"use client";

import { useEffect, useState } from "react";
import { ExternalLink, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

export default function WelcomeHUDC() {
  const [isOpen, setIsOpen] = useState(true);

  // useEffect(() => {
  
  //   if (!isOpen) {
  //     timeoutId = setTimeout(() => {
  //       setIsOpen(true);
  //     }, 1000);
  //   }
  //   return () => clearTimeout(timeoutId);
  // }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="relative overflow-hidden rounded-lg border border-gray-800 bg-black/80 backdrop-blur-lg shadow-lg"
        >
          <div
            className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-600/10"
            aria-hidden="true"
          />
          <div className="relative p-6">
            <div className="sm:flex sm:items-start sm:space-x-6">
              <div className="mb-4 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-purple-600 sm:mb-0">
                <svg
                  className="h-6 w-6 text-white"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-300">
                  Welcome to HUDC
                </h3>
                <p className="mt-2 text-gray-400 leading-6">
                  Explore free access to premium courses, mentorship programs,
                  internship opportunities, and a thriving community of
                  developers at Haramaya University. Begin your journey today
                  and make the most of the resources we&apos;ve curated for your
                  growth.
                </p>
                <div className="mt-6">
                  <a
                    href="/student/courseCatalog"
                    className="inline-flex items-center gap-1.5 text-blue-400 font-medium hover:text-blue-300 transition-colors"
                  >
                    Access Free Courses
                    <ExternalLink className="h-4 w-4" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
