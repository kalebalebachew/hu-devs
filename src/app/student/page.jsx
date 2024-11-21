"use client";

import React from "react";
import Course from "@/data/course.json";
import Image from "next/image";
import Cards from "@/data/cards.json";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { ChevronRight } from "lucide-react";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto p-6 space-y-8">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Welcome back, John{" "}
            <span className="wave inline-block animate-wave">👋</span>
          </h1>
          <p className="text-gray-600 dark:text-gray-300 mt-2">
            Let's continue your learning journey
          </p>
        </header>

        <div className="grid lg:grid-cols-4 gap-6">
          {Cards.map((card) => (
            <Card key={card.id} className="bg-white dark:bg-gray-800 shadow-sm">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-gray-600 dark:text-gray-300">
                  {card.title}
                </CardTitle>
                {card.icon && React.cloneElement(card.icon, { className: "h-4 w-4 text-gray-600 dark:text-gray-300" })}

              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-gray-900 dark:text-white">
                  {card.value}
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  +2.5% from last month
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Recent Courses
            </h2>
            <Button
              variant="ghost"
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
            >
              View All <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {Course.slice(0, 4).map((course) => (
              <Card
                key={course.id}
                className="bg-white dark:bg-gray-800 shadow-sm overflow-hidden"
              >
                <div className="relative aspect-video">
                  <Image
                    src={course.image}
                    alt={course.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-2 left-2 bg-white rounded-full p-1">
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
                  <h3 className="font-semibold text-gray-900 dark:text-white line-clamp-1">
                    {course.title}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                    by {course.instructor}
                  </p>
                  <div className="flex justify-between items-center mt-4 text-sm text-gray-600 dark:text-gray-300">
                    <span>{course.progress}% Complete</span>
                    <span>{course.lessons} lessons</span>
                  </div>
                  <Progress value={course.progress} className="mt-2" />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
