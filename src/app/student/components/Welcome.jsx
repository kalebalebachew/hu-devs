"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  BookOpen,
  Code,
  Calendar,
  Lightbulb,
  ChevronRight,
  ChevronLeft,
  Sparkles,
  ArrowRight,
  CheckCircle,
  XCircle,
  Check,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const quickLinks = [
  {
    title: "Premium Courses",
    description: "Access premium resources",
    icon: BookOpen,
    href: "/student/courseCatalog",
  },
  {
    title: "Resources Hub",
    description: "Learning materials",
    icon: Code,
    href: "/student/resourceHub",
  },
  {
    title: "Project Showcase",
    description: "Showcase your work",
    icon: Calendar,
    href: "/student/projectSubmission",
  },
];

export default function Dashboard() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setProgress(65), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full">
      <div className="max-w-7xl mx-auto px-4  sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-6"
        >
          <div className="text-center sm:text-left">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
              Welcome, Student | Developer
            </h1>
            <p className="text-gray-600 dark:text-gray-400 mt-2 text-base sm:text-lg">
              Your HUDC learning journey starts here.
            </p>
          </div>
        
          <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
            <CardContent className="p-4 sm:p-6 flex flex-col sm:flex-row items-center justify-between">
              <div>
                <h2 className="text-xl font-semibold mb-2 flex items-center">
                  <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 mr-2" />
                  Backend Development Course
                </h2>
                <p className="text-sm sm:text-base max-w-md">
                  No experience needed—core knowledge to get started.
                </p>
              </div>
              <Button
                variant="outline"
                className="w-full sm:w-auto flex items-center justify-center mt-4 sm:mt-0"
              >
                <a
                  href="https://forms.gle/h1fAvVD5DRJNKqjJA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center"
                >
                  Enroll Now <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </Button>
            </CardContent>
          </Card>

          <div className="grid gap-6 sm:grid-cols-2">
            <Card>
              <CardContent className="p-6 flex flex-col">
                <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
                  Quick Access
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {quickLinks.map((link) => (
                    <motion.a
                      key={link.title}
                      href={link.href}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex flex-col items-center justify-center p-3 rounded-lg bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
                    >
                      <link.icon className="w-5 h-5 sm:w-6 sm:h-6 text-blue-500 mb-2" />
                      <span className="text-xs sm:text-sm text-center text-gray-700 dark:text-gray-300">
                        {link.title}
                      </span>
                      
                    </motion.a>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
                  Announcements
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="p-2 bg-blue-100 dark:bg-blue-800 rounded-full">
                      <Calendar className="w-5 h-5 text-blue-500" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100">
                        New Course Available
                      </h4>
                      <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                        🎉 Introduction backend development course registration started.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="p-2 bg-green-100 dark:bg-green-800 rounded-full">
                      <Check className="w-5 h-5 text-green-500" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100">
                        Project Submission
                      </h4>
                      <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                        📅 Submit your project for review.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
