"use client";

import { useEffect, useState } from "react";
import {
  RiBookOpenLine,
  RiCloseLine,
  RiExternalLinkLine,
} from "@remixicon/react";
import { Card } from "@tremor/react";

export default function WelcomeHUDC() {
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    let timeoutId;

    if (!isOpen) {
      timeoutId = setTimeout(() => {
        setIsOpen(true);
      }, 1000);
    }
    return () => clearTimeout(timeoutId);
  }, [isOpen]);

  return isOpen ? (
    <>
      <Card className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md">
        <div className="absolute right-0 top-0 pr-3 pt-3">
        </div>
        <div className="sm:flex sm:items-start sm:space-x-6">
          <div className="inline-flex shrink-0 rounded-full bg-purple-200 p-2 dark:bg-purple-600/80">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-600 text-white">
              <RiBookOpenLine className="h-5 w-5" aria-hidden={true} />
            </span>
          </div>
          <div className="mt-4 sm:mt-0">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
              Welcome to HUDC
            </h3>
            <p className="mt-2 text-gray-700 dark:text-gray-300 leading-6">
              Explore free access to premium courses, mentorship programs,
              internship opportunities, and a thriving community of developers
              at Haramaya University. Begin your journey today and make the
              most of the resources we’ve curated for your growth.
            </p>
            <div className="mt-6 flex items-center space-x-6">
              <a
                href="/student/courseCatalog"
                className="inline-flex items-center gap-1.5 text-purple-600 font-medium hover:underline dark:text-purple-400"
              >
                Access Free Courses
                <RiExternalLinkLine className="h-4 w-4" aria-hidden={true} />
              </a>
            </div>
          </div>
        </div>
      </Card>
    </>
  ) : null;
}
