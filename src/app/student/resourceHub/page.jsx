"use client";
import React, { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FaPlay, FaFilePdf, FaFilePowerpoint, FaExternalLinkAlt } from "react-icons/fa";

const resourcesData = require("../../../../public/data/resources.json");

export default function ResourcesHub() {
  const [filters, setFilters] = useState({
    searchTerm: "",
    selectedCategory: "All",
    selectedType: "All",
  });

  const [resources, setResources] = useState([]);

  useEffect(() => {
    setResources(resourcesData);
  }, []);

  const clearFilters = () => {
    setFilters({ searchTerm: "", selectedCategory: "All", selectedType: "All" });
  };

  const uniqueCategories = ["All", ...new Set(resourcesData.map((r) => r.category))];

  const filteredResources = resources.filter((resource) => {
    return (
      (filters.selectedCategory === "All" || resource.category === filters.selectedCategory) &&
      (filters.selectedType === "All" || resource.fileType.toLowerCase() === filters.selectedType.toLowerCase()) &&
      resource.title.toLowerCase().includes(filters.searchTerm.toLowerCase())
    );
  });

  const renderThumbnail = (fileType) => {
    switch (fileType) {
      case "Video":
        return <FaPlay className="text-red-500 w-14 h-14" />;
      case "Slides":
        return <FaFilePowerpoint className="text-blue-500 w-14 h-14" />;
      case "PDF":
        return <FaFilePdf className="text-yellow-500 w-14 h-14" />;
      case "Link":
        return <FaExternalLinkAlt className="text-green-500 w-14 h-14" />;
      default:
        return (
          <div className="w-full h-full bg-gray-600 text-white flex items-center justify-center">
            No Thumbnail
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-black text-white">
      <header className="py-4">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-extrabold">Resource Hub</h1>
          <p className="text-gray-400 mt-2">
            Explore free resources to enhance your skills and knowledge.
          </p>
        </div>
      </header>
      <main className="container mx-auto px-6 space-y-10">
        <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
          <div className="flex flex-wrap items-center gap-4">
            <Input
              type="search"
              placeholder="Search resources..."
              className="flex-1 bg-gray-900 text-white border-gray-700"
              value={filters.searchTerm}
              onChange={(e) => setFilters({ ...filters, searchTerm: e.target.value })}
            />
            <select
              className="bg-gray-900 text-white border border-gray-700 p-2 rounded-lg"
              value={filters.selectedCategory}
              onChange={(e) => setFilters({ ...filters, selectedCategory: e.target.value })}
            >
              {uniqueCategories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
            <select
              className="bg-gray-900 text-white border border-gray-700 p-2 rounded-lg"
              value={filters.selectedType}
              onChange={(e) => setFilters({ ...filters, selectedType: e.target.value })}
            >
              <option value="All">All</option>
              <option value="PDF">PDF</option>
              <option value="Video">Video</option>
              <option value="Slides">Slides</option>
              <option value="Link">Link</option>
            </select>
            <Button onClick={clearFilters} className="bg-purple-600 hover:bg-purple-700">
              Clear Filters
            </Button>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {filteredResources.length > 0 ? (
            filteredResources.map((resource) => (
              <div
                key={resource.id}
                className="bg-gray-900 border border-gray-800 rounded-lg shadow-lg overflow-hidden flex flex-col justify-between transform hover:scale-105 transition-transform duration-200"
              >
                <div className="relative h-40 bg-gray-800 flex items-center justify-center aspect-w-16 aspect-h-9">
                  {renderThumbnail(resource.fileType)}
                </div>
                <div className="p-4 flex-grow">
                  <h2 className="text-lg font-semibold text-white line-clamp-2">
                    {resource.title}
                  </h2>
                  <p className="text-sm text-gray-400 mt-2 line-clamp-3">
                    {resource.description}
                  </p>
                  <p className="text-sm text-purple-500 mt-1">Type: {resource.fileType}</p>
                </div>
                <div className="p-4">
                  <a
                    href={resource.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-center bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 rounded-lg"
                  >
                    {resource.fileType === "Link" ? "Visit" : "Download"}
                  </a>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500 col-span-full">
              No resources match your search criteria.
            </p>
          )}
        </div>

      </main>
    </div>
  );
}
