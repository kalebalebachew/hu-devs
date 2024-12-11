"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  BookOpen,
  Code,
  Calendar,
  ExternalLink,
  Lightbulb,
  ChevronRight,
  ChevronLeft,
  Terminal,
  Play,
  Check,
  RefreshCw,
  ArrowRight,
  LinkedinIcon,
  SendIcon,
  GithubIcon,
} from "lucide-react";
import { Card } from "@tremor/react";
import { CardContent } from "@/components/ui/card";
const socialLinks = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/haramaya-university-developers-community",
    icon: LinkedinIcon,
  },
  {
    name: "Telegram",
    href: "https://t.me/hudevhub",
    icon: SendIcon,
  },
  {
    name: "GitHub",
    href: "https://github.com/hudevhub",
    icon: GithubIcon,
  },
];

const quickLinks = [
  {
    title: "Premium Courses",
    description: "Access premium resources",
    icon: BookOpen,
    href: "/student/courseCatalog",
  },
  {
    title: "Resources Hub",
    description: "Access learning materials",
    icon: Code,
    href: "/student/resourceHub",
  },
  {
    title: "Project Showcase",
    description: "Project submission",
    icon: Calendar,
    href: "/student/projectSubmission",
  },
];

const studyTips = [
  {
    tip: "Implement pagination for APIs returning large datasets using tools like Laravel's `paginate()` or Sequelize's `limit` and `offset`.",
    category: "API Development",
  },
  {
    tip: "Debug performance bottlenecks by using profiling tools like `console.time()` and `console.timeEnd()`.",
    category: "Debugging",
  },
  {
    tip: "Minimize bundle size in React applications by using dynamic imports to load components only when needed.",
    category: "Frontend Optimization",
  },
];

export default function Dashboard() {
  const [currentTipIndex, setCurrentTipIndex] = useState(0);

  const nextTip = () => {
    setCurrentTipIndex((prevIndex) => (prevIndex + 1) % studyTips.length);
  };

  const prevTip = () => {
    setCurrentTipIndex(
      (prevIndex) => (prevIndex - 1 + studyTips.length) % studyTips.length
    );
  };

  return (
    <div className=" w-full bg-white dark:bg-black">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-7xl mx-auto px-4 py-8"
      >
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="rounded-lg border border-gray-200 dark:border-gray-800 overflow-hidden bg-white dark:bg-gray-900"
            >
              <div className="p-6 sm:p-8">
                <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                  Welcome to Your HUDC Student Dashboard
                </h1>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  Explore, learn, and grow with our resources
                </p>

                <div className="grid sm:grid-cols-3 gap-4">
                  {quickLinks.map((link) => (
                    <motion.a
                      key={link.title}
                      href={link.href}
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      className="group relative p-4 rounded-lg bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
                    >
                      <div className="flex flex-col items-center text-center gap-2">
                        <div className="p-2 rounded-full bg-gray-200 dark:bg-gray-700">
                          <link.icon className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                        </div>
                        <div>
                          <h3 className="font-medium text-gray-900 dark:text-gray-100">
                            {link.title}
                          </h3>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            {link.description}
                          </p>
                        </div>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="rounded-lg border border-gray-200 dark:border-gray-800 p-6 bg-white dark:bg-gray-900"
            >
              <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
                Introduction to Backend Development
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Enhance your skills with our comprehensive backend development
                course prepared by HUDC. Join a community of learners and build
                the foundation for your tech career.
              </p>
              <motion.a
                href="https://forms.gle/jVTpbrsSbv2sRD4s6"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-4 py-2  border-transparent text-sm font-medium shadow-sm text-whitedark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800 p-6 transition-colors duration-200"
              >
                Register Now <ExternalLink className="ml-2 -mr-1 w-4 " />
              </motion.a>
            </motion.div>
          </div>

          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800 p-6"
            >
              <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100 flex items-center">
                <Lightbulb className="w-5 h-5 mr-2 text-yellow-500" /> Daily Dev
                Tip
              </h2>
              <div className="relative">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentTipIndex}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.2 }}
                    className="mb-4"
                  >
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {studyTips[currentTipIndex].tip}
                    </p>
                    <span className="text-xs text-gray-500 dark:text-gray-400 mt-2 inline-block">
                      Category: {studyTips[currentTipIndex].category}
                    </span>
                  </motion.div>
                </AnimatePresence>
                <div className="flex justify-between mt-4">
                  <button
                    onClick={prevTip}
                    className="p-1 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
                  >
                    <ChevronLeft className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                  </button>
                  <button
                    onClick={nextTip}
                    className="p-1 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
                  >
                    <ChevronRight className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                  </button>
                </div>
              </div>
            </motion.div>
            <Card className="shadow-lg rounded-lg overflow-hidden">
              <CardContent className="grid grid-cols-1 gap-3 overflow-auto pb-4  ">
                {socialLinks.map((link) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between p-4 rounded-lg bg-gray-800 hover:bg-gray-700 transition-all transform hover:scale-105"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-full bg-gray-700">
                        <link.icon className="w-5 h-5 text-gray-300  transition-colors" />
                      </div>
                      <div>
                        <h3 className="text-sm font-medium text-white">
                          {link.name}
                        </h3>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-gray-400  transition-all transform group-hover:translate-x-1" />
                  </motion.a>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
