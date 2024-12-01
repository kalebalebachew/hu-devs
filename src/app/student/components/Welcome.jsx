"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  X,
  Sparkles,
  BookOpen,
  Users,
  Trophy,
  Github,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  {
    icon: BookOpen,
    title: "Premium Courses",
    description: "Access industry-standard premium courses",
  },
  {
    icon: Users,
    title: "Mentorship",
    description: "Connect with experienced mentors who can help you.",
  },
  {
    icon: Trophy,
    title: "Events",
    description:
      "Participate in tech events to enhance your skills and network",
  },

  {
    icon: Github,
    title: "Open source projects",
    description: "contribute to open source projects through hudc",
  },
];

export default function WelcomeHUDC() {
  const [isOpen, setIsOpen] = useState(true);

  if (!isOpen) return null;

  return (
    <div className="relative w-full max-w-5xl mx-auto">
      <div className="relative rounded-lg border border-neutral-800 bg-black overflow-hidden">
        <div className="p-6 sm:p-8">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="space-y-6">
              <div className="inline-flex items-center justify-center p-3 rounded-lg bg-neutral-900 border border-neutral-800">
                <Sparkles className="h-6 w-6 text-white" />
              </div>

              <div className="space-y-3">
                <h3 className="text-2xl font-bold text-white">
                  Welcome to HUDC
                </h3>
                <p className="text-neutral-400 text-sm leading-relaxed">
                  A place where tech students and professionals come together to
                  share knowledge, access curated resources, and support each
                  other&apos;s growth.
                </p>
              </div>

              <Button
                asChild
                variant="outline"
                className="border-neutral-800 bg-black hover:bg-neutral-900 text-white"
              >
                <a
                  href="/student/courseCatalog"
                  className="inline-flex items-center gap-2"
                >
                  Explore Courses
                  <ExternalLink className="h-4 w-4" />
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-neutral-800 bg-black hover:bg-neutral-900 text-white"
              >
                <a
                  href="/student/resourceHub"
                  className="inline-flex items-center gap-2"
                >
                  Resource Hub
                  <ExternalLink className="h-4 w-4" />
                </a>
              </Button>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="group rounded-lg border border-neutral-800 bg-neutral-900/50 p-4 transition-colors hover:border-neutral-700 hover:bg-neutral-900"
                >
                  <feature.icon className="h-5 w-5 text-white mb-3" />
                  <h4 className="text-sm font-medium text-white mb-1">
                    {feature.title}
                  </h4>
                  <p className="text-xs text-neutral-400">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
