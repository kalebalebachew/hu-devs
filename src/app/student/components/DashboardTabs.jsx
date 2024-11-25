import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { EventsTab } from "./EventsTab";
import { ProjectsTab } from "./ProjectsTab";

export function DashboardTabs({
  events,
  pastEvents,
  featuredProjects,
}) {
  return (
    <Tabs defaultValue="events" className="space-y-6">
      <TabsList className="grid w-full grid-cols-2 sm:grid-cols-2 lg:w-[600px]">
        <TabsTrigger value="events">Events</TabsTrigger>
        <TabsTrigger value="projects">Projects</TabsTrigger>
      </TabsList>

      <TabsContent value="events">
        <EventsTab events={events} pastEvents={pastEvents} />
      </TabsContent>

      <TabsContent value="projects">
        <ProjectsTab featuredProjects={featuredProjects} />
      </TabsContent>
    </Tabs>
  );
}

