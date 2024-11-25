"use client";

import React, { useState, useEffect } from "react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";
import { DashboardHeader } from "./components/DashboardHeader";
import { DashboardTabs } from "./components/DashboardTabs";
import { Achievements } from "./components/Achievements";
import { Community } from "./components/Community";

const placeholderData = {
  stats: [
    { title: "Courses Completed", value: 0, change: "+0% from last month" },
    { title: "Hours Studied", value: 0, change: "+0% from last month" },
    { title: "Achievements", value: 0, change: "+0 new" },
    { title: "Current Streak", value: "0 days", change: "Keep it up!" },
  ],
  courses: [
    { id: 1, title: "Introduction to React", progress: 0 },
    { id: 2, title: "Advanced JavaScript", progress: 0 },
  ],
  events: [
    { id: 1, title: "Web Development Workshop", date: "2023-12-01" },
    { id: 2, title: "AI in Education Seminar", date: "2023-12-15" },
  ],
  pastEvents: [
    {
      title: "Stories from gugt podcast, Freelancing and AASTU",
      time: "Saturday, November 16 2:30 LT",
      location: "HUDC Telegram Channel",
      img: "/biruk.jpg",
      description:
        "This time, we're hosting Brook Belihu, the former co-host of Gugut Podcast —a name many of you already know and love! Now making waves with PulseERP, we will start right from the AASTU days, dive into his freelancing journey, and cover everything in between!",
    },
    {
      title: "Campus Innovation the Kuraztech's Journey",
      time: "Saturday, November 9 2:30 LT",
      location: "HUDC Telegram Channel",
      img: "/tito.jpg",
      description:
        "HUDC is excited to bring you a special live session featuring Tito Frezer, one of the key figures behind KurazTech —a company that started as a university club and grew into a successful tech company.",
    },
  ],
  featuredProjects: [
    {
      _id: "1",
      projectName: "Personal Portfolio",
      description: "Showcase your skills",
      image: "/placeholder.svg",
      projectUrl: "https://portfolio.com",
    },
    {
      _id: "2",
      projectName: "E-commerce Site",
      description: "Build an online store",
      image: "/placeholder.svg",
      projectUrl: "https://ecommerce.com",
    },
  ],
  learningPath: [
    { title: "HTML Basics", description: "Learn the fundamentals of HTML" },
    { title: "CSS Styling", description: "Master CSS styling techniques" },
  ],
};

export default function Dashboard() {
  const [stats, setStats] = useState(placeholderData.stats);
  const [courses, setCourses] = useState(placeholderData.courses);
  const [events, setEvents] = useState(placeholderData.events);
  const [pastEvents, setPastEvents] = useState(placeholderData.pastEvents);
  const [featuredProjects, setFeaturedProjects] = useState(
    placeholderData.featuredProjects
  );
  const [learningPath, setLearningPath] = useState(
    placeholderData.learningPath
  );
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API_BASE_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem("auth_token");

      if (!token) {
        setError("Authentication token is missing!");
        setLoading(false);
        return;
      }

      try {
        const headers = {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        };

        const [
          statsResponse,
          coursesResponse,
          eventsResponse,
          projectsResponse,
          learningPathResponse,
        ] = await Promise.all([
          fetch(`${API_BASE_URL}/api/stats`, { headers }),
          fetch(`${API_BASE_URL}/api/courses`, { headers }),
          fetch(`${API_BASE_URL}/api/events`, { headers }),
          fetch(`${API_BASE_URL}/user/approved-projects`, { headers }),
          fetch(`${API_BASE_URL}/api/learning-path`, { headers }),
        ]);

        const statsData = await statsResponse.json();
        const coursesData = await coursesResponse.json();
        const eventsData = await eventsResponse.json();
        const projectsData = await projectsResponse.json();
        const learningPathData = await learningPathResponse.json();

        setStats(statsData || placeholderData.stats);
        setCourses(coursesData || placeholderData.courses);
        setEvents(eventsData || placeholderData.events);
        setFeaturedProjects(
          projectsData.projects || placeholderData.featuredProjects
        );
        setLearningPath(learningPathData || placeholderData.learningPath);
      } catch (err) {
        setError(
          "Error fetching data. Some information may not be up to date."
        );
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-8 space-y-8">
        {error && (
          <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}
        <DashboardHeader />
        <DashboardTabs
          courses={courses}
          events={events}
          pastEvents={pastEvents}
          featuredProjects={featuredProjects}
          learningPath={learningPath}
        />
        {/* <div className="grid sm:grid-cols-2 gap-6">
          <Achievements />
          <Community />
        </div> */}
      </div>
    </div>
  );
}
