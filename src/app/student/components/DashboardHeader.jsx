import React from "react";
import { Button } from "@/components/ui/button";

export function DashboardHeader() {
  return (
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
      <Button variant="outline " className="bg-purple-700">
        View Profile
      </Button>
    </header>
  );
}
