"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  BookOpen,
  Code,
  Calendar,
  Sparkles,
  ArrowRight,
  GraduationCap,
  Bell,
  Check,
  Clock,
  Sun,
  Moon,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import Banner from "./Banner";

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
    description:
      "🎉 Introduction to backend development course registration started",
    icon: Calendar,
    type: "info",
    date: "Today",
    bgColor: "bg-primary/10",
    iconColor: "text-primary",
  },
  {
    title: "Project Submission",
    description: "📅 Submit your project for review before the deadline",
    icon: Check,
    type: "success",
    date: "Anytime",
    bgColor: "bg-success/10",
    iconColor: "text-success",
  },
  {
    title: "Upcoming Live Session",
    description: "⏰ Join our live session this weekend",
    icon: Clock,
    type: "reminder",
    date: "This Weekend",
    bgColor: "bg-warning/10",
    iconColor: "text-warning",
  },
];

export default function Dashboard() {
  const [progress, setProgress] = useState(0);
  const [selectedAnnouncement, setSelectedAnnouncement] = useState(null);
  const { theme, setTheme } = useTheme();

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
          <div className="flex justify-between items-center">
            <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-4">
              <div className="text-primary p-4 rounded-full sm:hidden">
                <GraduationCap className="w-8 h-8" />
              </div>
              <div className="hidden sm:block p-4 rounded-full">
                <GraduationCap className="w-10 h-10 text-primary" />
              </div>

              <div className="text-center sm:text-left">
                <h1 className="text-xl sm:text-2xl font-extrabold text-foreground leading-snug">
                  Welcome, Student
                </h1>
                <p className="text-sm sm:text-base text-muted-foreground">
                  Start your HUDC learning journey today and achieve your goals.
                </p>
              </div>
            </div>

            <div>
              <Button
                variant="outline"
                className="rounded-full p-2"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              >
                {theme === "dark" ? (
                  <Sun className="w-5 h-5 text-primary" />
                ) : (
                  <Moon className="w-5 h-5 text-primary" />
                )}
              </Button>
            </div>
          </div>
          <Banner></Banner>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <Card>
              <CardContent className="p-6">
                <h2 className="text-lg font-semibold text-foreground mb-4">
                  Quick Access
                </h2>
                <div className="space-y-2">
                  {quickLinks.map((link) => (
                    <motion.a
                      key={link.title}
                      href={link.href}
                      whileHover={{ x: 4 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex items-center p-3 rounded-lg hover:bg-muted/30 transition-all duration-200 group"
                    >
                      <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-muted">
                        <link.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div className="ml-4 flex-grow">
                        <h3 className="text-sm font-medium text-foreground">
                          {link.title}
                        </h3>
                        <p className="text-xs text-muted-foreground">
                          {link.description}
                        </p>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-lg font-semibold text-foreground">
                    Announcements
                  </h2>
                  <div className="relative">
                    <Bell className="w-5 h-5 text-muted-foreground" />
                    <span className="absolute -top-1 -right-1 w-2 h-2 bg-primary rounded-full"></span>
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
                          ? "bg-muted/20"
                          : ""
                      } hover:bg-muted/30 transition-all duration-200`}
                    >
                      <div
                        className={`p-2 ${announcement.bgColor} rounded-full`}
                      >
                        <announcement.icon
                          className={`w-4 h-4 ${announcement.iconColor}`}
                        />
                      </div>
                      <div className="flex-grow min-w-0">
                        <div className="flex items-center justify-between">
                          <h4 className="text-sm font-semibold text-foreground truncate">
                            {announcement.title}
                          </h4>
                          <span className="text-xs text-muted-foreground ml-2 flex-shrink-0">
                            {announcement.date}
                          </span>
                        </div>
                        <p className="text-xs text-muted-foreground mt-1">
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
