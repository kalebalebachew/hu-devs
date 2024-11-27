"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, X } from "lucide-react";

export default function WelcomeHUDC() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{
            duration: 0.3,
            type: "spring",
            stiffness: 100,
          }}
          className="relative overflow-hidden w-full max-w-6xl mx-auto rounded-xl bg-gradient-to-br from-white to-neutral-50 dark:from-neutral-900 dark:to-neutral-800 shadow-lg border border-neutral-200/50 dark:border-neutral-700/50"
        >
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 p-1.5 rounded-lg hover:bg-neutral-200/50 dark:hover:bg-neutral-700/50 transition-colors"
          >
            <X className="h-5 w-5 text-neutral-600 dark:text-neutral-400" />
          </motion.button>

          <div className="relative p-6 sm:p-8">
            <div className="flex flex-col sm:flex-row items-start gap-6">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative shrink-0 p-4 rounded-xl bg-gradient-to-br from-violet-500/10 to-indigo-500/10 dark:from-violet-500/20 dark:to-indigo-500/20"
              >
                <svg
                  className="h-8 w-8 text-violet-500 dark:text-violet-400"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
              </motion.div>

              <div className="space-y-4">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-2"
                >
                  <h3 className="text-2xl font-semibold text-neutral-900 dark:text-neutral-100">
                    Welcome to HUDC
                  </h3>
                  <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-3xl">
                    Explore free access to premium courses and mentorship
                    programs. Begin your journey today and make the most of the
                    resources we&apos;ve curated for your growth.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="flex flex-wrap gap-4"
                >
                  <a
                    href="/student/courseCatalog"
                    className="inline-flex items-center gap-2 px-4 py-2 underline  text-blue-700 rounded-lg font-medium shadow  transition"
                  >
                     Free Courses
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
