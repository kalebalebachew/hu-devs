"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  BookOpen,
  Code,
  Calendar,
  Lightbulb,
  ChevronRight,
  Sparkles,
  ArrowRight,
  GraduationCap,
  Bell,
  Check,
  Clock,
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

const announcements = [
  {
    title: "New Course Available",
    description: "🎉 Introduction to backend development course registration started",
    icon: Calendar,
    type: "info",
    date: "Today",
    bgColor: "bg-blue-100 dark:bg-blue-800",
    iconColor: "text-blue-500",
  },
  {
    title: "Project Submission",
    description: "📅 Submit your project for review before the deadline",
    icon: Check,
    type: "success",
    date: "Anytime",
    bgColor: "bg-green-100 dark:bg-green-800",
    iconColor: "text-green-500",
  },
  {
    title: "Upcoming Live Session",
    description: "⏰ Join our live session this weekend",
    icon: Clock,
    type: "reminder",
    date: "This Weekend",
    bgColor: "bg-orange-100 dark:bg-orange-800",
    iconColor: "text-orange-500",
  },
];

export default function Dashboard() {
  const [progress, setProgress] = useState(0);
  const [selectedAnnouncement, setSelectedAnnouncement] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => setProgress(65), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-6"
        >
          <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-4">
            <div className="text-blue-500 p-4 rounded-full sm:hidden">
              <GraduationCap className="w-8 h-8" />
            </div>
            <div className="hidden sm:block p-4 rounded-full">
              <GraduationCap className="w-10 h-10 text-blue-500" />
            </div>

            <div className="text-center sm:text-left">
              <h1 className="text-xl sm:text-2xl font-extrabold text-gray-900 dark:text-gray-100 leading-snug">
                Welcome, Student
              </h1>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
                Start your HUDC learning journey today and achieve your goals.
              </p>
            </div>
          </div>

          <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
            <CardContent className="p-4 sm:p-6 flex flex-col sm:flex-row items-center justify-between">
              <div>
                <h2 className="text-lg sm:text-xl font-semibold mb-2 flex items-center">
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

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <Card>
              <CardContent className="p-6">
                <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
                  Quick Access
                </h2>
                <div className="space-y-2">
                  {quickLinks.map((link) => (
                    <motion.a
                      key={link.title}
                      href={link.href}
                      whileHover={{ x: 4 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex items-center p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-200 group"
                    >
                      <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-blue-50 dark:bg-blue-900/20">
                        <link.icon className="w-5 h-5 text-blue-500" />
                      </div>
                      <div className="ml-4 flex-grow">
                        <h3 className="text-sm font-medium text-gray-900 dark:text-gray-100">
                          {link.title}
                        </h3>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          {link.description}
                        </p>
                      </div>
                      <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-blue-500 transition-colors duration-200" />
                    </motion.a>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                    Announcements
                  </h2>
                  <div className="relative">
                    <Bell className="w-5 h-5 text-gray-400" />
                    <span className="absolute -top-1 -right-1 w-2 h-2 bg-blue-500 rounded-full"></span>
                  </div>
                </div>
                <div className="space-y-3">
                  {announcements.map((announcement, index) => (
                    <motion.div
                      key={index}
                      initial={false}
                      whileHover={{ scale: 1.02 }}
                      onClick={() => setSelectedAnnouncement(announcement)}
                      className={`flex items-start space-x-3 p-3 rounded-lg cursor-pointer ${
                        selectedAnnouncement === announcement
                          ? "bg-gray-50 dark:bg-gray-800"
                          : ""
                      } hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-200`}
                    >
                      <div className={`p-2 ${announcement.bgColor} rounded-full`}>
                        <announcement.icon
                          className={`w-4 h-4 ${announcement.iconColor}`}
                        />
                      </div>
                      <div className="flex-grow min-w-0">
                        <div className="flex items-center justify-between">
                          <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100 truncate">
                            {announcement.title}
                          </h4>
                          <span className="text-xs text-gray-500 dark:text-gray-400 ml-2 flex-shrink-0">
                            {announcement.date}
                          </span>
                        </div>
                        <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                          {announcement.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
