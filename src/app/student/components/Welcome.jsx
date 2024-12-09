"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  X,
  Sparkles,
  BookOpen,
  Users,
  Trophy,
  Github,
  ChevronRight,
  Menu,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  {
    icon: BookOpen,
    title: "Premium Courses",
    description: "Access industry-standard premium courses",
    color: "from-blue-500/20 to-purple-500/20",
  },
  {
    icon: Users,
    title: "Mentorship",
    description: "Connect with experienced mentors who can help you.",
    color: "from-green-500/20 to-emerald-500/20",
  },
  {
    icon: Trophy,
    title: "Events",
    description: "Participate in tech events to enhance your skills and network",
    color: "from-yellow-500/20 to-orange-500/20",
  },
  {
    icon: Github,
    title: "Open source projects",
    description: "Contribute to open source projects through HUDC",
    color: "from-pink-500/20 to-rose-500/20",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

export default function WelcomeHUDC() {
  const [isOpen, setIsOpen] = useState(true);
  const [showMobileFeatures, setShowMobileFeatures] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  if (!isOpen) return null;

  return (
    <div className="relative w-full max-w-5xl mx-auto p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative rounded-xl border border-neutral-800 bg-background overflow-hidden backdrop-blur-sm"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-neutral-900/50 to-black/50 z-0" />

        <div className="relative z-10 p-4 sm:p-6 md:p-8 w-full">
          <div className="flex items-center justify-between mb-6">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="inline-flex items-center justify-center p-3 rounded-lg bg-gradient-to-br from-neutral-800 to-neutral-900 border border-neutral-700/50 shadow-lg"
            >
              <Sparkles className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
            </motion.div>
            
          </div>

          <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="space-y-6"
            >
              <motion.div variants={itemVariants} className="space-y-3">
                <h3 className="text-2xl sm:text-3xl font-bold text-white">
                  Welcome to HUDC
                </h3>
                <p className="text-sm sm:text-base text-neutral-400 leading-relaxed max-w-md">
                  A place where tech students and professionals come together to share knowledge,
                  access curated resources, and support each other&apos;s growth.
                </p>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="flex flex-col sm:flex-row gap-3"
              >
                <Button
                  asChild
                  variant="outline"
                  className="group w-full sm:w-auto border-neutral-700/50 bg-neutral-900/80 hover:bg-neutral-800 text-white transition-all hover:scale-102 backdrop-blur-sm"
                >
                  <a
                    href="/student/courseCatalog"
                    className="inline-flex items-center justify-center gap-2"
                  >
                    Explore Courses
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="group w-full sm:w-auto border-neutral-700/50 bg-neutral-900/80 hover:bg-neutral-800 text-white transition-all hover:scale-102 backdrop-blur-sm"
                >
                  <a
                    href="/student/resourceHub"
                    className="inline-flex items-center justify-center gap-2"
                  >
                    Resource Hub
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
                  </a>
                </Button>
              </motion.div>
            </motion.div>

            <AnimatePresence mode="wait">
              {(showMobileFeatures || !isMobile) && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="grid grid-cols-1 sm:grid-cols-2 gap-3 overflow-hidden"
                >
                  {features.map((feature, index) => (
                    <motion.div
                      key={feature.title}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.02 }}
                      className="group relative rounded-lg border border-neutral-800 bg-neutral-900/50 p-4 transition-all hover:border-neutral-700 backdrop-blur-sm overflow-hidden"
                    >
                      <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-10 group-hover:opacity-20 transition-opacity`} />
                      <div className="relative z-10">
                        <feature.icon className="h-5 w-5 text-white mb-2 sm:mb-3" />
                        <h4 className="text-sm font-medium text-white mb-1">
                          {feature.title}
                        </h4>
                        <p className="text-xs text-neutral-400 line-clamp-2 sm:line-clamp-none">
                          {feature.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.div>
    </div>
  );
}