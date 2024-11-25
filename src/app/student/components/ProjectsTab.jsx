import React from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function ProjectsTab({ featuredProjects }) {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Featured Projects</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {featuredProjects.map((project) => (
          <Card
            key={project._id}
            className="bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-all duration-200 rounded-lg overflow-hidden group"
          >
            <div className="relative aspect-video">
              <Image
                src={project.image || "/placeholder.svg?height=200&width=300"}
                alt={project.projectName}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-200"
              />
            </div>
            <CardContent className="p-4">
              <h3 className="font-semibold text-lg text-gray-900 dark:text-white line-clamp-1">
                {project.projectName}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1 line-clamp-2">
                {project.description}
              </p>
              <Button
                asChild
                className="mt-4 w-full"
              >
                <a href={project.projectUrl} target="_blank" rel="noopener noreferrer">
                  View Project
                </a>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

