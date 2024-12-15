"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { LoginDialog } from "@/components/LoginDialog"; 
import { useAuth } from "@/hooks/useAuth";

const courses = [
  {
    id: 1,
    title: "Master Python",
    category: "Programming",
    thumbnail: "/intro-python.png",
  },
  {
    id: 2,
    title: "MYSQL Mastery",
    category: "Databases",
    thumbnail: "/mysql.png",
  },
  {
    id: 3,
    title: "Git & GitHub Pro",
    category: "Version Control",
    thumbnail: "/git.png",
  },
];

export function Courses() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });
  
    const { isAuthenticated } = useAuth(); 
    const [isLoginOpen, setIsLoginOpen] = useState(false); 
    const router = useRouter();
  
    const handleCourseClick = () => {
      if (isAuthenticated) {
        router.push("/student/courseCatalog");
      } else {
        setIsLoginOpen(true); 
      }
    };

  return (
    <>
      <section className="py-8 bg-gradient-to-br from-background via-background to-primary/5 mb-8" ref={ref}>
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-primary text-center mb-4">
              Premium Courses
            </h2>
            <p className="max-w-2xl mx-auto text-lg text-muted-foreground text-center mb-8">
              Explore courses curated by our partner companies to enhance your
              skills and knowledge.
            </p>
          </motion.div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 justify-center mb-4">
            {courses.map((course, index) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 group bg-card">
                  <div className="relative aspect-[16/9]">
                    <Image
                      src={course.thumbnail}
                      alt={course.title}
                      layout="fill"
                      objectFit="cover"
                      className="transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                      <Badge variant="secondary" className="text-xs font-medium">
                        {course.category}
                      </Badge>
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors duration-300">
                      {course.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-3 line-clamp-2">
                      Ready to transform your skills? This course is your gateway to excellence.
                    </p>
                    <Button
                      variant="outline"
                      className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
                      onClick={handleCourseClick}
                    >
                      Explore Course
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="text-center"
          >
            <Button
              variant="default"
              size="lg"
              className="group relative overflow-hidden px-6 py-3 text-base font-semibold"
              onClick={handleCourseClick}
            >
              <span className="relative z-10 flex items-center">
                Discover All Courses
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 ml-2 transition-transform group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-primary via-primary to-primary-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Login Dialog */}
      <LoginDialog isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
    </>
  );
}
