"use client";

import React, { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  FileText,
  Video,
  PresentationIcon,
  Link2,
  Search,
  Sparkles,
  BookOpen,
  ChevronRight,
  Library,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const resourcesData = require("../../../../public/data/resources.json");

export default function ResourcesHub() {
  const [filters, setFilters] = useState({
    searchTerm: "",
    selectedCategory: "All",
    selectedType: "All",
  });

  const [resources, setResources] = useState([]);
  const [selectedResource, setSelectedResource] = useState(null);

  useEffect(() => {
    setResources(resourcesData);
  }, []);

  const clearFilters = () => {
    setFilters({
      searchTerm: "",
      selectedCategory: "All",
      selectedType: "All",
    });
  };

  const uniqueCategories = [
    "All",
    ...new Set(resourcesData.map((r) => r.category)),
  ];

  const filteredResources = resources.filter((resource) => {
    return (
      (filters.selectedCategory === "All" ||
        resource.category === filters.selectedCategory) &&
      (filters.selectedType === "All" ||
        resource.fileType.toLowerCase() ===
          filters.selectedType.toLowerCase()) &&
      resource.title.toLowerCase().includes(filters.searchTerm.toLowerCase())
    );
  });

  const renderThumbnail = (fileType) => {
    const iconClass = "w-8 h-8";
    switch (fileType) {
      case "Video":
        return <Video className={`${iconClass} text-blue-500`} />;
      case "Slides":
        return <PresentationIcon className={`${iconClass} text-blue-500`} />;
      case "PDF":
        return <FileText className={`${iconClass} text-blue-500`} />;
      case "Link":
        return <Link2 className={`${iconClass} text-blue-500`} />;
      default:
        return <FileText className={`${iconClass} text-blue-500`} />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container px-4 py-4 mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-6"
        >
          <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-4 mb-8">
            <div className="text-blue-500 p-4 rounded-full sm:hidden">
              <Library className="w-8 h-8" />
            </div>
            <div className="hidden sm:block p-4 rounded-full">
              <Library className="w-10 h-10 text-blue-500" />
            </div>
            <div className="text-center sm:text-left">
              <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-gray-100 leading-snug">
                Resources Hub
              </h1>
              <p className="text-sm sm:text-lg text-gray-600 dark:text-gray-400 mt-2">
                Discover and access our curated collection of learning materials
              </p>
            </div>
          </div>

          <Card className="0 text-white mb-8">
            <CardContent className="p-4 sm:p-6">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    type="search"
                    placeholder="Search resources..."
                    className="pl-9 bg-white/10 border-white/20 text-white placeholder:text-gray-300"
                    value={filters.searchTerm}
                    onChange={(e) =>
                      setFilters({ ...filters, searchTerm: e.target.value })
                    }
                  />
                </div>
                <Select
                  value={filters.selectedCategory}
                  onValueChange={(value) =>
                    setFilters({ ...filters, selectedCategory: value })
                  }
                >
                  <SelectTrigger className="w-full md:w-[180px] bg-white/10 border-white/20 text-white">
                    <SelectValue placeholder="Category" />
                  </SelectTrigger>
                  <SelectContent>
                    {uniqueCategories.map((category) => (
                      <SelectItem key={category} value={category}>
                        {category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Select
                  value={filters.selectedType}
                  onValueChange={(value) =>
                    setFilters({ ...filters, selectedType: value })
                  }
                >
                  <SelectTrigger className="w-full md:w-[180px] bg-white/10 border-white/20 text-white">
                    <SelectValue placeholder="Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="All">All Types</SelectItem>
                    <SelectItem value="PDF">PDF</SelectItem>
                    <SelectItem value="Video">Video</SelectItem>
                    <SelectItem value="Slides">Slides</SelectItem>
                    <SelectItem value="Link">Link</SelectItem>
                  </SelectContent>
                </Select>
                <Button
                  variant="secondary"
                  onClick={clearFilters}
                  className="md:w-[120px] bg-white/10 hover:bg-white/20 text-white border-white/20"
                >
                  Clear
                </Button>
              </div>
            </CardContent>
          </Card>

          <AnimatePresence>
            {filteredResources.length > 0 ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
              >
                {filteredResources.map((resource) => (
                  <motion.div
                    key={resource.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", bounce: 0.2 }}
                  >
                    <Card
                      className="overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col h-[400px] cursor-pointer"
                      onClick={() => setSelectedResource(resource)}
                    >
                      <CardHeader className="p-6 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800/50 dark:to-gray-900/50 flex items-center justify-center h-[100px] shrink-0">
                        {renderThumbnail(resource.fileType)}
                      </CardHeader>
                      <CardContent className="p-6 flex-1 flex flex-col">
                        <h3 className="font-semibold tracking-tight mb-2 text-lg line-clamp-2 h-[56px] text-gray-900 dark:text-gray-100">
                          {resource.title}
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-3 mb-3 flex-1">
                          {resource.description}
                        </p>
                        <div className="flex items-center gap-2 text-sm mt-auto">
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-500/10 text-blue-500">
                            {resource.fileType}
                          </span>
                          <span className="text-gray-400">•</span>
                          <span className="text-gray-600 dark:text-gray-400">
                            {resource.category}
                          </span>
                        </div>
                      </CardContent>
                      <CardFooter className="p-6 pt-0 mt-auto border-t">
                        <Button asChild className="w-full" variant="ghost">
                          <a
                            href={resource.link}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {resource.fileType === "Link"
                              ? "Visit Resource"
                              : "Download"}
                            <ChevronRight className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-0.5" />
                          </a>
                        </Button>
                      </CardFooter>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <Card className="p-12 text-center">
                  <div className="flex flex-col items-center gap-4">
                    <Sparkles className="w-12 h-12 text-gray-400" />
                    <p className="text-gray-600 dark:text-gray-400">
                      No resources match your search criteria.
                    </p>
                    <Button variant="outline" onClick={clearFilters}>
                      Clear Filters
                    </Button>
                  </div>
                </Card>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}
