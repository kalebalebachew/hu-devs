import React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"

export function CoursesTab({ courses }) {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white">My Courses</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <Card key={course.id} className="flex flex-col">
            <CardHeader className="flex-grow">
              <CardTitle>{course.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                Progress: {course.progress}%
              </p>
              <Progress value={course.progress} className="w-full" />
              <Button className="w-full mt-4" asChild>
                <a href={`/courses/${course.id}`}>Continue Learning</a>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

