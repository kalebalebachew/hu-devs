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
import { Search } from "lucide-react";

const courses = [
  {
    id: 1,
    title: "Introduction to Python",
    description: "Learn the basics of Python",
    provider: "KurazTech",
    instructor: "Tito Frezer",
    thumbnail: "/intro-python.png",
  },
  {
    id: 2,
    title: "MYSQL For Beginners",
    description: "Deep dive into MYSQL concepts",
    provider: "KurazTech",
    instructor: "Fitsum Kassaye",
    thumbnail: "/mysql.png",
  },
  {
    id: 3,
    title: "Introduction to Git",
    description: "Learn how to use git in your projects",
    provider: "KurazTech",
    instructor: "Tito Frezer",
    thumbnail: "/git.png",
  },
];

export default function CourseCatalogPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <header className="py-6">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-extrabold text-center text-white">
            Course Catalog
          </h1>
          <p className="text-center text-gray-400 mt-2">
            Explore Amazing Courses Provided by HUDC and Its Partners
          </p>
        </div>
      </header>
      <main className="container mx-auto px-4 ">
        <div className="mb-8 flex justify-center">
          <form className="flex gap-4 w-full max-w-lg">
            <Input
              type="search"
              placeholder="Search courses..."
              className="bg-gray-800 text-white border border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none"
              aria-label="Search courses"
            />
            <Button
              type="submit"
              className="bg-purple-500 hover:bg-purple-600 rounded-lg flex items-center justify-center"
            >
              <Search className="h-5 w-5" />
            </Button>
          </form>
        </div>
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => (
            <Card
              key={course.id}
              className="bg-gray-800 border-gray-700 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              <CardHeader className="p-0">
                <Image
                  src={course.thumbnail}
                  alt={`Thumbnail for ${course.title}`}
                  width={400}
                  height={200}
                  className="w-full h-52 object-cover"
                />
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle className="text-2xl font-bold mb-3 text-white relative">
                  {course.title}
                  <span className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 rounded"></span>
                </CardTitle>
                <p className="text-gray-200 text-base leading-relaxed mb-4">
                  {course.description}
                </p>
                <p className="text-sm text-gray-400">
                  <span className="font-medium text-white">Provider:</span>{" "}
                  {course.provider}
                </p>
                <p className="text-sm text-gray-400">
                  <span className="font-medium text-white">Instructor:</span>{" "}
                  {course.instructor}
                </p>
              </CardContent>
              <CardFooter className="">
                <Button
                  asChild
                  className="w-full bg-purple-500 hover:bg-purple-600 text-white font-medium py-2 px-4 rounded-lg"
                >
                  <Link href={`/courses/${course.id}`}>Enroll</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
}
