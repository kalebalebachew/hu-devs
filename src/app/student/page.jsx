"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import {
  ChevronRight,
  BookOpen,
  Clock,
  Trophy,
  Calendar,
  BarChart2,
  Target,
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Dashboard() {
  const [stats, setStats] = useState([]);
  const [courses, setCourses] = useState([]);
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const statsData = await fetch("/api/stats").then((res) => res.json());
        const coursesData = await fetch("/api/courses").then((res) =>
          res.json()
        );
        const eventsData = await fetch("/api/events").then((res) => res.json());

        setStats(statsData);
        setCourses(coursesData);
        setEvents(eventsData);
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

        <Tabs defaultValue="courses" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3 lg:w-[400px]">
            <TabsTrigger value="courses">My Courses</TabsTrigger>
            <TabsTrigger value="events">Events</TabsTrigger>
            <TabsTrigger value="progress">Progress</TabsTrigger>
          </TabsList>

          <TabsContent value="courses" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                Recent Courses
              </h2>
              <Button
                variant="ghost"
                className="flex items-center text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
              >
                View All <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {courses.map((course) => (
                <Card
                  key={course.id}
                  className="bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-all duration-200 rounded-lg overflow-hidden group"
                >
                  <div className="relative aspect-video">
                    <Image
                      src={course.image}
                      alt={course.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-200"
                    />
                    <div className="absolute top-2 left-2 bg-white dark:bg-gray-700 rounded-full p-1 shadow">
                      <Image
                        src={course.platformLogo}
                        alt="Platform Logo"
                        width={24}
                        height={24}
                        className="rounded-full"
                      />
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-lg text-gray-900 dark:text-white line-clamp-1">
                      {course.title}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                      by {course.instructor}
                    </p>
                    <div className="flex justify-between items-center mt-4 text-sm text-gray-600 dark:text-gray-300">
                      <span>{course.progress}% Complete</span>
                      <span>{course.lessons} lessons</span>
                    </div>
                    <Progress
                      value={course.progress}
                      className="mt-2 h-2 bg-gray-200 dark:bg-gray-700"
                    />
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="events">
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                Upcoming Events
              </h2>
              <div className="grid gap-4">
                {events.map((event, index) => (
                  <Card key={index}>
                    <CardContent className="flex items-center justify-between p-4">
                      <div className="flex items-center space-x-4">
                        <div className="p-2 bg-primary/10 rounded-lg">
                          <Calendar className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900 dark:text-white">
                            {event.title}
                          </h3>
                          <p className="text-sm text-gray-500 dark:text-gray-400">
                            {event.date}
                          </p>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">
                        Add to Calendar
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
