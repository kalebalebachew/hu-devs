import Image from "next/image";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, BookOpen, User, ChevronRight } from "lucide-react";

const courses = [
  {
    id: 1,
    title: "Introduction to Python",
    description: "Learn the basics of Python programming language",
    provider: "KurazTech",
    instructor: "Tito Frezer",
    thumbnail: "/intro-python.png",
  },
  {
    id: 2,
    title: "MYSQL For Beginners",
    description: "Dive deep into MYSQL concepts and master database.",
    provider: "KurazTech",
    instructor: "Fitsum Kassaye",
    thumbnail: "/mysql.png",
  },
  {
    id: 3,
    title: "Introduction to Git",
    description: "Learn how to use Git for version control and collaboration.",
    provider: "KurazTech",
    instructor: "Tito Frezer",
    thumbnail: "/git.png",
  },
];

export default function CourseCatalogPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <header className=" bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl sm:text-5xl md:text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-gray-200 via-gray-100 to-gray-300">
            Course catalog
          </h1>
          <p className="text-center text-gray-400  text-lg max-w-2xl mx-auto">
            Explore courses provided by HUDC
          </p>
        </div>
      </header>
      <main className="container mx-auto ">
        <div className="mb-12 flex justify-center">
          <form className="flex gap-4 w-full max-w-2xl">
            <Input
              type="search"
              placeholder="Search courses..."
              className="bg-gray-900 text-white border border-gray-800 rounded-lg focus:ring-2 focus:ring-gray-700 focus:border-transparent"
              aria-label="Search courses"
            />
            <Button
              type="submit"
              className="bg-gray-800 hover:bg-gray-700 text-white rounded-lg flex items-center justify-center transition-colors duration-300"
            >
              <Search className="h-5 w-5" />
            </Button>
          </form>
        </div>
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => (
            <Card
              key={course.id}
              className="bg-gray-900 border-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <CardHeader className="p-0">
                <div className="relative h-48 w-full">
                  <Image
                    src={course.thumbnail}
                    alt={`Thumbnail for ${course.title}`}
                    layout="fill"
                    objectFit="cover"
                    className="transition-opacity duration-300 hover:opacity-80"
                  />
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle className="text-2xl font-bold mb-3 text-gray-100">
                  {course.title}
                </CardTitle>
                <p className="text-gray-300 text-base leading-relaxed mb-4">
                  {course.description}
                </p>
                <div className="flex items-center text-sm text-gray-400 mb-2">
                  <BookOpen className="h-4 w-4 mr-2 text-gray-500" />
                  <span className="font-medium text-gray-300">Provider:</span>
                  <span className="ml-1">{course.provider}</span>
                </div>
                <div className="flex items-center text-sm text-gray-400">
                  <User className="h-4 w-4 mr-2 text-gray-500" />
                  <span className="font-medium text-gray-300">Instructor:</span>
                  <span className="ml-1">{course.instructor}</span>
                </div>
              </CardContent>
              <CardFooter className=" p-4">
                <Button
                  variant="custom"
                  className="group relative overflow-hidden bg-gradient-to-r from-gray-700 to-gray-600 hover:from-gray-600 hover:to-gray-700 text-gray-100 border border-gray-600">
                  <span className="relative z-10 flex items-center text-sm font-medium tracking-wide">
                    Enroll
                    <ChevronRight className="h-4 w-4 ml-1.5 transform transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                  <div className="absolute inset-0 -z-10 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-shimmer transition-opacity" />
                  <div className="absolute inset-0 -z-20 bg-gradient-to-r from-primary/50 via-primary to-primary/50 blur-sm group-hover:blur-md transition-all duration-500" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
}
