import React from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Trophy, Book, Layout, GraduationCap } from 'lucide-react'

export function ProgressTab({ learningPath }) {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white">My Learning Path</h2>
      <div className="space-y-4">
        {learningPath.map((item, index) => (
          <Card key={index} className="flex items-center p-4 space-x-4">
            <div className="flex-shrink-0">
              {item.completed ? (
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <Trophy className="w-6 h-6 text-green-600" />
                </div>
              ) : (
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  {item.type === 'course' && <Book className="w-6 h-6 text-blue-600" />}
                  {item.type === 'project' && <Layout className="w-6 h-6 text-blue-600" />}
                  {item.type === 'assessment' && <GraduationCap className="w-6 h-6 text-blue-600" />}
                </div>
              )}
            </div>
            <div className="flex-grow">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{item.title}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">{item.description}</p>
            </div>
            <Button variant={item.completed ? "outline" : "default"} size="sm">
              {item.completed ? "Review" : "Start"}
            </Button>
          </Card>
        ))}
      </div>
    </div>
  )
}

