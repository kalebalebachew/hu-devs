"use client"

import React from "react"
import Course from "@/data/course.json"
import Image from "next/image"
import Cards from "@/data/cards.json"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"

export default function Student() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="container mx-auto p-6 space-y-8">
        <div className="grid lg:grid-cols-3 gap-6">
          <Card className="lg:col-span-2 bg-gray-800 border-purple-500">
            <CardContent className="p-6">
              <div className="flex flex-col sm:flex-row items-center gap-6">
                <div className="flex-1 space-y-4">
                  <h1 className="text-3xl font-bold">
                    Hi, John <span className="wave inline-block animate-wave">👋</span>
                  </h1>
                  <h2 className="text-xl">
                    What do you want to learn today with your partner?
                  </h2>
                  <p className="text-gray-300">
                    Discover courses, track progress, and achieve your learning goals seamlessly.
                  </p>
                  <Button className="bg-purple-600 hover:bg-purple-700 text-white">
                    Explore Courses
                  </Button>
                </div>
                <div className="flex-shrink-0">
                  <Image
                    src="/images/student.jpg"
                    alt="Learning Illustration"
                    width={300}
                    height={300}
                    className="rounded-lg object-cover"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid sm:grid-cols-2 gap-4">
            {Cards.map((card) => (
              <Card key={card.id} className={`${card.bgColor} ${card.border}`}>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className={`text-2xl font-bold ${card.textColor}`}>
                    {card.value}
                  </CardTitle>
                  {card.icon}
                </CardHeader>
                <CardContent>
                  <p className="text-sm font-medium text-gray-300">{card.title}</p>
                  <button className="mt-4 text-sm text-gray-300 flex items-center gap-1 hover:text-white transition-colors">
                    See Details
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Recent Enrolled Course (12)</h2>
            <Button variant="link" className="text-purple-400 hover:text-purple-300">
              View All
            </Button>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {Course.map((course) => (
              <Card key={course.id} className="bg-gray-800 border-gray-700 overflow-hidden">
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
                      width={32}
                      height={32}
                      className="rounded-full"
                    />
                  </div>
                </div>
                <CardContent className="p-4">
                  <p className="text-sm text-gray-400">A Course by {course.instructor}</p>
                  <h3 className="font-semibold mt-1 line-clamp-2">{course.title}</h3>
                  <div className="flex justify-between items-center mt-4 text-sm text-gray-400">
                    <span>{course.progress}%</span>
                    <span>{course.lessons}</span>
                  </div>
                  <Progress value={course.progress} className="mt-2" />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}