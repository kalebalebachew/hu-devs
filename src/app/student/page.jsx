"use client";

import React, { useState, useEffect } from "react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";
import { DashboardHeader } from "./components/DashboardHeader";
import { DashboardTabs } from "./components/DashboardTabs";
import Welcome from "./components/Welcome";

const placeholderData = {
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
    {
      title: "A Journey started in Haramaya University",
      time: "Sunday, October 20 2:30 LT",
      location: "HUDC Telegram Channel",
      img: "/john.jpg",
      description:
        "We’re excited to have Yohannes, a former Haramaya lecturer, student, and now a Senior Data Engineer at Excellerent Solutions.\n\nYohannes went from sitting in the same classrooms you're in as a student, to teaching in them as a lecturer, and now he’s working in the tech industry.\n\nIn this session, he’ll share:\n\n• How he moved from learning and teaching to tech.\n• The challenges he faced along the way.\n• Practical tips for anyone wanting to start in tech.",
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

        // const [eventsResponse, projectsResponse] = await Promise.all([
        //   fetch(`${API_BASE_URL}/user/approved-projects`, { headers }),
        // ]);

        // const eventsData = await eventsResponse.json();
        // const projectsData = await projectsResponse.json();

        setCourses(placeholderData.courses);
        setEvents(placeholderData.events);
        setFeaturedProjects(
           placeholderData.featuredProjects
        );
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
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6 sm:space-y-8">
        {error && (
          <Alert variant="destructive" className="mb-6">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}
        <DashboardHeader />
        <div className="grid gap-6 md:gap-8">
          <DashboardTabs
            defaultTab="events" 
            courses={courses}
            events={events}
            pastEvents={pastEvents}
            featuredProjects={featuredProjects}
          />
        </div>
      </div>
    </div>
  );
}
