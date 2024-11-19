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
    title: "Introduction to Git",
    description: "Learn the basics of Git",
    provider: "KurazTech",
    instructor: "Tito Frezer",
    thumbnail: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 2,
    title: "Advanced JavaScript",
    description: "Deep dive into JavaScript concepts",
    provider: "KurazTech",
    instructor: "Tito Frezer",
    thumbnail: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 3,
    title: "Graphics Design Fundamentals",
    description: "Master the principles of graphics design",
    provider: "KurazTech",
    instructor: "Mahlet ",
    thumbnail: "/placeholder.svg?height=200&width=300",
  },
];

export default function CourseCatalogPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <header className=" text-white py-6">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold">Course Catalog</h1>
        </div>
      </header>
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <form className="flex gap-4">
            <Input
              type="search"
              placeholder="Search courses..."
              className="max-w-sm bg-gray-800 text-white border-gray-700"
              aria-label="Search courses"
            />
            <Button
              type="submit"
              className="bg-black border border-purple-500 border-opacity-45"
            >
              <Search className="mr-2 h-4 w-4  " />
              Search
            </Button>
          </form>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => (
            <Card key={course.id} className="bg-gray-800 border-gray-700">
              <CardHeader>
                <Image
                  src={course.thumbnail}
                  alt={`Thumbnail for ${course.title}`}
                  width={300}
                  height={200}
                  className="rounded-t-lg"
                />
              </CardHeader>
              <CardContent>
                <CardTitle className="text-xl mb-2">{course.title}</CardTitle>
                <p className="text-gray-300 mb-2">{course.description}</p>
                <p className="text-sm text-purple-400">
                  Provider: {course.provider}
                </p>
                <p className="text-sm text-purple-400">
                  Instructor: {course.instructor}
                </p>
              </CardContent>
              <CardFooter>
                <Button
                  asChild
                  className="w-full bg-purple-500 hover:bg-purple-600"
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
