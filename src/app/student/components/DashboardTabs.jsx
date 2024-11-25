import React from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CoursesTab } from "./CoursesTab"
import { EventsTab } from "./EventsTab"
import { ProjectsTab } from "./ProjectsTab"
import { ProgressTab } from "./ProgressTab"

export function DashboardTabs({ courses, events, featuredProjects, learningPath }) {
  return (
    <Tabs defaultValue="courses" className="space-y-6">
      <TabsList className="grid w-full grid-cols-4 lg:w-[600px]">
        <TabsTrigger value="courses">My Courses</TabsTrigger>
        <TabsTrigger value="events">Events</TabsTrigger>
        <TabsTrigger value="projects">Projects</TabsTrigger>
        <TabsTrigger value="progress">Progress</TabsTrigger>
      </TabsList>

      <TabsContent value="courses">
        <CoursesTab courses={courses} />
      </TabsContent>

      <TabsContent value="events">
        <EventsTab events={events} />
      </TabsContent>

      <TabsContent value="projects">
        <ProjectsTab featuredProjects={featuredProjects} />
      </TabsContent>

      <TabsContent value="progress">
        <ProgressTab learningPath={learningPath} />
      </TabsContent>
    </Tabs>
  )
}

