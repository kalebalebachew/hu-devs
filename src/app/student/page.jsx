"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { ChevronRight, Calendar } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Dashboard() {
  const [stats, setStats] = useState([]);
  const [courses, setCourses] = useState([]);
  const [events, setEvents] = useState([]);
  const [featuredProjects, setFeaturedProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  const API_BASE_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem("auth_token");

      if (!token) {
        console.error("Authentication token is missing!");
        setLoading(false);
        return;
      }

      try {
        const headers = {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        };

        const [statsData, coursesData, eventsData, projectsData] =
          await Promise.all([
            fetch(`${API_BASE_URL}/api/stats`, { headers }).then((res) =>
              res.json()
            ),
            fetch(`${API_BASE_URL}/api/courses`, { headers }).then((res) =>
              res.json()
            ),
            fetch(`${API_BASE_URL}/api/events`, { headers }).then((res) =>
              res.json()
            ),
            fetch(`${API_BASE_URL}/user/approved-projects`, { headers }).then(
              (res) => res.json()
            ),
          ]);

        setStats(statsData);
        setCourses(coursesData);
        setEvents(eventsData);
        setFeaturedProjects(projectsData.projects || []);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
        <p className="text-lg text-gray-600 dark:text-gray-300"></p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6 py-8 space-y-8">
        <header className="flex justify-between items-start">
          <div className="space-y-2">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
              Welcome, Student!{" "}
              <span className="wave inline-block animate-wave">👋</span>
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Your learning journey continues. Keep up the great work!
            </p>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card key={index} className="relative overflow-hidden">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="p-2 bg-primary/10 rounded-lg text-primary">
                    {React.createElement(stat.icon, { className: "h-6 w-6" })}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                      {stat.title}
                    </p>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                      {stat.value}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                      {stat.change}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Featured Projects
          </h2>
          {featuredProjects.length === 0 ? (
            <p className="text-gray-600 dark:text-gray-400">
              No featured projects to display.
            </p>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {featuredProjects.map((project) => (
                <Card
                  key={project._id}
                  className="bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-all duration-200 rounded-lg overflow-hidden group"
                >
                  <div className="relative aspect-video">
                    <Image
                      src={project.image || "/placeholder-image.jpg"}
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
                      as="a"
                      href={project.projectUrl}
                      target="_blank"
                      className="mt-4 w-full"
                    >
                      View Project
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>

        <Tabs defaultValue="courses" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3 lg:w-[400px]">
            <TabsTrigger value="courses">My Courses</TabsTrigger>
            <TabsTrigger value="events">Events</TabsTrigger>
            <TabsTrigger value="progress">Progress</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
    </div>
  );
}
