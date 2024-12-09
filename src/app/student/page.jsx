"use client";

import React, { useState, useEffect } from "react";
import { format } from "date-fns";
import { motion, AnimatePresence } from "framer-motion";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import {
  AlertCircle,
  Calendar,
  MapPin,
  ArrowRight,
  RefreshCcw,
} from "lucide-react";
import { DashboardHeader } from "./components/DashboardHeader";
import { DashboardTabs } from "./components/DashboardTabs";
import Welcome from "./components/Welcome";

const placeholderData = {
  pastEvents: [
    {
      title: "Stories from gugt podcast, Freelancing and AASTU",
      time: "2024-11-16T14:30:00",
      location: "HUDC Telegram Channel",
      audio: "/biruk-record.ogg",
      img: "/biruk.jpg",
      description:
        "This time, we're hosting Brook Belihu, the former co-host of Gugut Podcast —a name many of you already know and love! Now making waves with PulseERP, we will start right from the AASTU days, dive into his freelancing journey, and cover everything in between!",
    },
    {
      title: "Campus Innovation the Kuraztech's Journey",
      time: "2024-11-09T14:30:00",
      location: "HUDC Telegram Channel",
      audio: "/tito-record.ogg",
      img: "/tito.jpg",
      description:
        "HUDC is excited to bring you a special live session featuring Tito Frezer, one of the key figures behind KurazTech —a company that started as a university club and grew into a successful tech company.",
    },
    {
      title: "A Journey started in Haramaya University",
      time: "2024-10-20T14:30:00",
      location: "HUDC Telegram Channel",
      audio: "/yohannes-record.ogg",
      img: "/john.jpg",
      description:
        "We're excited to have Yohannes, a former Haramaya lecturer, student, and now a Senior Data Engineer at Excellerent Solutions.\n\nYohannes went from sitting in the same classrooms you're in as a student, to teaching in them as a lecturer, and now he's working in the tech industry.\n\nIn this session, he'll share:\n\n• How he moved from learning and teaching to tech.\n• The challenges he faced along the way.\n• Practical tips for anyone wanting to start in tech.",
    },
  ],
  featuredProjects: [],
};

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
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
  const [isRefreshing, setIsRefreshing] = useState(false);

  const API_BASE_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

  const handleRefresh = async () => {
    setIsRefreshing(true);
    await fetchData();
    setIsRefreshing(false);
  };

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

      setCourses(placeholderData.courses);
      setEvents(placeholderData.events);
      setFeaturedProjects(placeholderData.featuredProjects);
    } catch (err) {
      setError("Error fetching data. Some information may not be up to date.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const renderEventCard = (event, index) => (
    <motion.div
      variants={itemVariants}
      className="group relative"
      key={event.title}
    >
      <Card className="overflow-hidden bg-black/40 backdrop-blur-sm border-gray-800/50 hover:border-gray-700/50 transition-all duration-300">
        <div className="relative aspect-video">
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20 z-10" />
          <img
            src={event.img}
            alt={event.title}
            className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
          />
        </div>
        <div className="relative z-20 p-6 -mt-20 space-y-4">
          <div className="space-y-2">
            <h3 className="text-xl font-semibold text-white line-clamp-2">
              {event.title}
            </h3>
            <div className="flex flex-col space-y-2 text-sm text-gray-400">
              <div className="flex items-center space-x-2">
                <Calendar className="h-4 w-4" />
                <time dateTime={event.time}>
                  {format(new Date(event.time), "EEEE, MMMM d 'at' h:mm a")}
                </time>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>{event.location}</span>
              </div>
            </div>
          </div>
          <p className="text-sm text-gray-400 line-clamp-3">
            {event.description}
          </p>
          <Button
            variant="ghost"
            className="w-full justify-between group/btn hover:bg-white/10"
          >
            View Details
            <ArrowRight className="h-4 w-4 transform group-hover/btn:translate-x-1 transition-transform" />
          </Button>
        </div>
      </Card>
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6 sm:space-y-8">
        {error && (
          <Alert
            variant="destructive"
            className="mb-6 border-red-900/50 bg-red-950/50 backdrop-blur-sm"
          >
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}

        <DashboardHeader />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid gap-6 md:gap-8"
        >
          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3].map((n) => (
                <Card key={n} className="overflow-hidden">
                  <Skeleton className="h-48" />
                  <div className="p-6 space-y-4">
                    <Skeleton className="h-4 w-3/4" />
                    <Skeleton className="h-4 w-1/2" />
                    <Skeleton className="h-20" />
                  </div>
                </Card>
              ))}
            </div>
          ) : (
            <DashboardTabs
              defaultTab="events"
              courses={courses}
              events={events}
              pastEvents={pastEvents}
              featuredProjects={featuredProjects}
              renderEventCard={renderEventCard}
            />
          )}
        </motion.div>
      </div>
    </div>
  );
}
