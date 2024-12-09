"use client";
import React, { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FaPlay, FaFilePdf, FaFilePowerpoint, FaExternalLinkAlt } from "react-icons/fa";

const resourcesData = require('../../../../public/data/resources.json');

export default function ResourcesHub() {
  const [filters, setFilters] = useState({
    searchTerm: "",
    selectedCategory: "All",
    selectedType: "All",
  });

  const [resources, setResources] = useState([]);

  // Load resources data
  useEffect(() => {
    setResources(resourcesData);
  }, []);

  const clearFilters = () => {
    setFilters({ searchTerm: "", selectedCategory: "All", selectedType: "All" });
  };

  // Get unique categories from the resources
  const uniqueCategories = ["All", ...new Set(resourcesData.map((r) => r.category))];

  // Filter resources based on selected category, type, and search term
  const filteredResources = resources.filter((resource) => {
    return (
      (filters.selectedCategory === "All" || resource.category === filters.selectedCategory) &&
      (filters.selectedType === "All" || resource.fileType.toLowerCase() === filters.selectedType.toLowerCase()) &&
      resource.title.toLowerCase().includes(filters.searchTerm.toLowerCase())
    );
  });

  // Function to render thumbnails based on the file type
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
    <div className="min-h-screen bg-black text-white">
      <header className="py-6">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold">Resource Hub</h1>
        </div>
      </header>
      <main className="container mx-auto px-4 py-8">
        {/* Filters */}
        <div className="mb-8">
          <div className="flex gap-4 flex-wrap">
            {/* Search Input */}
            <Input
              type="search"
              placeholder="Search resources..."
              className="max-w-sm bg-gray-800 text-white border-gray-700"
              value={filters.searchTerm}
              onChange={(e) => setFilters({ ...filters, searchTerm: e.target.value })}
            />
            {/* Category Dropdown */}
            <select
              className="bg-gray-800 text-white border border-gray-700 p-2 rounded"
              value={filters.selectedCategory}
              onChange={(e) => setFilters({ ...filters, selectedCategory: e.target.value })}
            >
              {uniqueCategories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
            {/* Type Dropdown */}
            <select
              className="bg-gray-800 text-white border border-gray-700 p-2 rounded"
              value={filters.selectedType}
              onChange={(e) => setFilters({ ...filters, selectedType: e.target.value })}
            >
              <option value="All">All Types</option>
              <option value="PDF">PDF</option>
              <option value="Video">Video</option>
              <option value="Slides">Slides</option>
              <option value="Link">Link</option>
            </select>
            {/* Clear Filters Button */}
            <Button onClick={clearFilters} className="bg-purple-500 hover:bg-purple-600">
              Clear Filters
            </Button>
          </div>
        </div>

        {/* Resources Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {filteredResources.length > 0 ? (
            filteredResources.map((resource) => (
              <div
                key={resource.id}
                className="bg-gray-800 border border-gray-700 rounded-lg p-4 flex flex-col h-full"
              >
                <div className="w-full h-40 bg-gray-800 flex items-center justify-center rounded-t-lg">
                  {renderThumbnail(resource.fileType)}
                </div>
                <div className="mt-4">
                  <h2 className="text-xl font-semibold text-white break-words">
                    {resource.title}
                  </h2>
                </div>
                <div className="mt-2 flex-1">
                  <p className="text-gray-300">{resource.description}</p>
                  <p className="text-sm text-purple-400 mt-1">Category: {resource.category}</p>
                  <p className="text-sm text-purple-400 mt-1">Type: {resource.fileType}</p>
                </div>
                <div className="mt-4">
                  <a
                    href={resource.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-center bg-purple-500 hover:bg-purple-600 text-white font-medium py-2 rounded-lg"
                  >
                    {resource.fileType === "Link" ? "Visit" : "Download"}
                  </a>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500">No resources found.</p>
          )}
        </div>
      </main>
    </div>
  );
}
