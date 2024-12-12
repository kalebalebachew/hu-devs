"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Search,
  BookOpenIcon,
  User,
  ChevronRight,
  GraduationCap,
  Users,
} from "lucide-react";

const courses = [
  {
    id: 1,
    title: "Introduction to Python",
    description: "Learn the basics of Python programming.",
    provider: "KurazTech",
    instructor: "Tito Frezer",
    thumbnail: "/intro-python.png",
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
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCourses = courses.filter(
    (course) =>
      course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen px-4 py-4 bg-background text-foreground">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-6"
      >
        <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-4">
          <div className="text-primary p-4 rounded-full sm:hidden">
            <BookOpenIcon className="w-8 h-8" />
          </div>
          <div className="hidden sm:block p-4 rounded-full">
            <BookOpenIcon className="w-10 h-10 text-primary" />
          </div>
          <div className="text-center sm:text-left">
            <h1 className="text-2xl sm:text-3xl font-extrabold leading-snug">
              Course Catalog
            </h1>
            <p className="text-sm sm:text-lg mt-2 text-muted-foreground">
              Explore curated courses to enhance your skills
            </p>
          </div>
        </div>

        <Card>
          <div className="p-4 sm:p-6">
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <div className="relative flex-1 w-full">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search courses..."
                  className="pl-9"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <Button variant="outline" onClick={() => setSearchQuery("")}>
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
              <Card className="group h-full overflow-hidden hover:shadow-lg transition-all duration-300">
                <div className="relative aspect-video bg-muted">
                  <Image
                    src={course.thumbnail}
                    alt={course.title}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold mb-2 line-clamp-1">
                    {course.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {course.description}
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="flex items-center gap-2">
                      <User className="h-4 w-4 text-primary" />
                      <span className="text-sm">{course.instructor}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-primary" />
                      <span className="text-sm">{course.provider}</span>
                    </div>
                  </div>
                  <Button variant="secondary" className="w-full">
                    <span className="flex items-center">
                      Enroll Now
                      <ChevronRight className="h-4 w-4 ml-1" />
                    </span>
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {filteredCourses.length === 0 && (
          <Card className="p-12 text-center">
            <GraduationCap className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
            <p className="text-muted-foreground">
              No courses match your search criteria.
            </p>
            <Button variant="outline" className="mt-4" onClick={() => setSearchQuery("")}>
              Clear Search
            </Button>
          </Card>
        )}
      </motion.div>
    </div>
  );
}
