"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Search,
  BookOpen,
  User,
  ChevronRight,
  Clock,
  Star,
  GraduationCap,
  Users,
  BookOpenCheck,
  BookOpenIcon,
} from "lucide-react";

const courses = [
  {
    id: 1,
    title: "Introduction to Python",
    description: "Learn the basics of Python programming.",
    provider: "KurazTech",
    instructor: "Tito Frezer",
    thumbnail: "/intro-python.png",
    duration: "8 weeks",
    rating: 4.8,
    students: 1200,
    level: "Beginner",
    modules: 12,
  },
  {
    id: 2,
    title: "MYSQL For Beginners",
    description: "Dive deep into MYSQL concepts.",
    provider: "KurazTech",
    instructor: "Fitsum Kassaye",
    thumbnail: "/mysql.png",
  },
  {
    id: 3,
    title: "Introduction to Git",
    description: "Learn how to use Git for version control.",
    provider: "KurazTech",
    instructor: "Tito Frezer",
    thumbnail: "/git.png",
  },
];

export default function CourseCatalogPage() {
  const [searchRef, searchInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [searchQuery, setSearchQuery] = useState("");

  const filteredCourses = courses.filter(
    (course) =>
      course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen px-4 py-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-6"
      >
        <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-4">
          <div className="text-blue-500 p-4 rounded-full sm:hidden">
            <BookOpenIcon className="w-8 h-8" />
          </div>
          <div className="hidden sm:block p-4 rounded-full">
            <BookOpenIcon className="w-10 h-10 text-blue-500" />
          </div>
          <div className="text-center sm:text-left">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-gray-100 leading-snug">
              Course Catalog
            </h1>
            <p className="text-sm sm:text-lg text-gray-600 dark:text-gray-400 mt-2">
              Explore curated courses to enhance your skills
            </p>
          </div>
        </div>

        <Card className="text-white">
          <div className="p-4 sm:p-6">
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <div className="relative flex-1 w-full">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  type="search"
                  placeholder="Search courses..."
                  className="pl-9 bg-white/10 border-white/20 text-white placeholder:text-gray-300 w-full"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <Button
                variant="secondary"
                className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white border-white/20"
                onClick={() => setSearchQuery("")}
              >
                Clear
              </Button>
            </div>
          </div>
        </Card>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredCourses.map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="group h-full overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="relative aspect-video">
                  <Image
                    src={course.thumbnail}
                    alt={course.title}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 " />
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white"></div>
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-gray-100 line-clamp-1">
                    {course.title}
                  </h3>

                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                    {course.description}
                  </p>

                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                      <div className="flex-shrink-0">
                        <User className="h-4 w-4 mr-2 text-blue-500" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900 dark:text-gray-100">
                          Instructor
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                        {course.instructor} 

                        </p>
                      </div>
                    </div>

                    <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                      <div className="flex-shrink-0">
                        <Users className="h-4 w-4 mr-2 text-blue-500" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900 dark:text-gray-100">
                          Provider
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          {course.provider}
                        </p>
                      </div>
                    </div>
                  </div>

                  <Button className="w-full group  text-white"
                  variant="secondary">
                    <span className="flex items-center">
                      Enroll Now
                      <ChevronRight className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-0.5" />
                    </span>
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {filteredCourses.length === 0 && (
          <Card className="p-12 text-center">
            <GraduationCap className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-600 dark:text-gray-400">
              No courses match your search criteria.
            </p>
            <Button
              variant="outline"
              className="mt-4"
              onClick={() => setSearchQuery("")}
            >
              Clear Search
            </Button>
          </Card>
        )}
      </motion.div>
    </div>
  );
}
