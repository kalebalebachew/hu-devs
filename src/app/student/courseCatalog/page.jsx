"use client";

import Image from "next/image";
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
} from "lucide-react";

const courses = [
  {
    id: 1,
    title: "Introduction to Python",
    description: "Learn the basics of Python programming language",
    provider: "KurazTech",
    instructor: "Tito Frezer",
    thumbnail: "/intro-python.png",
    duration: "8 weeks",
    rating: 4.8,
    students: 1200,
  },
  {
    id: 2,
    title: "MYSQL For Beginners",
    description: "Dive deep into MYSQL concepts and master database.",
    provider: "KurazTech",
    instructor: "Fitsum Kassaye",
    thumbnail: "/mysql.png",
    duration: "6 weeks",
    rating: 4.9,
    students: 850,
  },
  {
    id: 3,
    title: "Introduction to Git",
    description: "Learn how to use Git for version control.",
    provider: "KurazTech",
    instructor: "Tito Frezer",
    thumbnail: "/git.png",
    duration: "4 weeks",
    rating: 4.7,
    students: 950,
  },
];

export default function CourseCatalogPage() {
  const [searchRef, searchInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="min-h-screen">
      <header className="relative ">
        <div className="absolute inset-0" />
        <div className="relative container">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl font-bold text-center"
          >
            Course Catalog
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-3 text-center text-muted-foreground text-lg max-w-2xl mx-auto"
          >
            Explore curated courses to enhance your skills
          </motion.p>
        </div>
      </header>

      <main className="container pb-6">
        <motion.div
          ref={searchRef}
          initial={{ opacity: 0, y: 20 }}
          animate={searchInView ? { opacity: 1, y: 0 } : {}}
          className="relative mb-8"
        >
          <form className="flex gap-2 w-full max-w-lg mx-auto">
            <Input
              type="search"
              placeholder="Search courses..."
              className="h-10"
              aria-label="Search courses"
            />
            <Button
              type="ghost"
              size="icon"
              className="h-10 w-10 bg-transparent hover:bg-transparent "
            >
              <Search className="h-4 w-4" />
            </Button>
          </form>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="group h-full overflow-hidden">
                <div className="relative aspect-video">
                  <Image
                    src={course.thumbnail}
                    alt={course.title}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2 line-clamp-1">
                    {course.title}
                  </h3>

                  <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                    {course.description}
                  </p>

                  <div className="space-y-1 mb-4">
                    <div className="flex items-center text-xs text-muted-foreground">
                      <User className="h-3 w-3 mr-1" />
                      <span>{course.instructor}</span>
                    </div>
                    <div className="flex items-center text-xs text-muted-foreground">
                      <BookOpen className="h-3 w-3 mr-1" />
                      <span>{course.provider}</span>
                    </div>
                  </div>

                  <Button
                    className="w-full group bg-gradient-to-r from-gray-700 to-gray-600 hover:from-gray-600 hover:to-gray-700 text-gray-100 border border-gray-600"
                    variant="default"
                  >
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
      </main>
    </div>
  );
}
