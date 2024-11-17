"use client";
import React from "react";
import Course from "../../../public/data/course.json";
import Image from "next/image";
import Cards  from "../../../public/data/cards.json";

export default function Student() {
  return (
    <div className="h-screen">
      <div className="flex flex-col lg:flex-row bg-black p-6 gap-6">
        {/* Left Section: Text and Illustration */}
        <div className="bg-black border-purple-300 border rounded-lg shadow-md my-5 py-6 md:pl-6 flex flex-col sm:flex-row items-center space-x-0 sm:space-x-1 lg:w-3/4 w-full">
          {/* Text Section */}
          <div className="flex-1 text-center sm:text-left">
            <h1 className="text-2xl font-bold text-white">
              Hi, John <span className="wave">👋</span>
            </h1>
            <h2 className="text-xl text-white mt-2">
              What do you want to learn today with your partner?
            </h2>
            <p className="text-white mt-4">
              Discover courses, track progress, and achieve your learning goals
              seamlessly.
            </p>
            <button className="mt-6 px-6 py-2 bg-purple-500 text-white rounded-lg shadow-md hover:bg-purple-600">
              Explore Courses
            </button>
          </div>

          {/* Illustration Section */}
          <div className="mt-6 sm:mt-0 flex-shrink-0">
            <Image
              src="/images/student.jpg"
              alt="Learning Illustration"
              className="w-72 md:rounded-l-3xl"
              width={500}
              height={500}
            />
          </div>
        </div>

        {/* Right Section: Course Overview */}
        <div className="md:p-6 md:w-1/2">
          <div className="flex flex-wrap w-full gap-6 justify-end">
            {/* Card Items */}
            {Cards.map((Cards) => (
              <div
                key={Cards.id}
                className={`p-6 rounded-lg  shadow-md ${Cards.bgColor} ${Cards.border} basis-full sm:basis-[calc(50%-12px)] lg:basis-[calc(50%-12px)] max-w-full sm:max-w-[calc(50%-12px)]`}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`text-2xl font-bold ${Cards.textColor}`}>
                    {Cards.value}
                  </div>
                  {Cards.icon}
                </div>
                <div className="text-sm text-white font-medium">
                  {Cards.title}
                </div>
                <button className="mt-4 text-sm text-white flex items-center gap-1 hover:underline">
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
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-black p-6 h-screen">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-xl font-bold">Recent Enrolled Course (12)</h1>
          <button className="text-purple-500 hover:underline">View All</button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {Course.map((Course) => (
            <div
              key={Course.id}
              className="bg-balck border rounded-lg shadow-md overflow-hidden"
            >
              <div className="relative">
                <Image
                  src={Course.image}
                  alt={Course.title}
                  className="w-full h-40 object-cover"
                  width={1000}
                  height={500}
                />
                <Image
                  src={Course.platformLogo}
                  alt="Platform Logo"
                  className="absolute top-4 left-4 w-10 h-10 rounded-full bg-white p-1"
                  width={100}
                  height={100}
                />
              </div>
              <div className="p-4">
                <p className="text-sm text-white">
                  A Course by {Course.instructor}
                </p>
                <h2 className="font-semibold text-white mt-1">
                  {Course.title}
                </h2>
                <div className="flex justify-between items-center mt-4">
                  <p className="text-sm text-white">{Course.progress}%</p>
                  <p className="text-sm text-white">{Course.lessons}</p>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                  <div
                    className="bg-purple-500 h-2 rounded-full"
                    style={{ width: `${Course.progress}%` }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
