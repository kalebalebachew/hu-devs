"use client";

import React, { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { FileText, Video, PresentationFile, Link2, Search } from "lucide-react";

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
    const iconClass = "w-8 h-8";
    switch (fileType) {
      case "Video":
        return <Video className={`${iconClass} text-blue-500`} />;
      case "Slides":
        return <PresentationFile className={`${iconClass} text-blue-500`} />;
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
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight">
            Resources Hub
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Discover and access our curated collection of learning materials
          </p>
        </div>

        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search resources..."
                  className="pl-9"
                  value={filters.searchTerm}
                  onChange={(e) => setFilters({ ...filters, searchTerm: e.target.value })}
                />
              </div>
              <Select
                value={filters.selectedCategory}
                onValueChange={(value) => setFilters({ ...filters, selectedCategory: value })}
              >
                <SelectTrigger className="w-full md:w-[180px]">
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
                onValueChange={(value) => setFilters({ ...filters, selectedType: value })}
              >
                <SelectTrigger className="w-full md:w-[180px]">
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
                variant="outline"
                onClick={clearFilters}
                className="md:w-[120px]"
              >
                Clear
              </Button>
            </div>
          </CardContent>
        </Card>

        {filteredResources.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredResources.map((resource) => (
              <Card 
                key={resource.id} 
                className="overflow-hidden hover:shadow-lg transition-shadow flex flex-col h-[400px]"
              >
                <CardHeader className="p-6 bg-muted/50 flex items-center justify-center h-[100px] shrink-0">
                  {renderThumbnail(resource.fileType)}
                </CardHeader>
                <CardContent className="p-6 flex-1 flex flex-col">
                  <h3 className="font-semibold tracking-tight mb-2 text-lg line-clamp-2 h-[56px]">
                    {resource.title}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-3 mb-3 flex-1">
                    {resource.description}
                  </p>
                  <div className="flex items-center gap-2 text-sm mt-auto">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary">
                      {resource.fileType}
                    </span>
                    <span className="text-muted-foreground">•</span>
                    <span className="text-muted-foreground">{resource.category}</span>
                  </div>
                </CardContent>
                <CardFooter className="p-6 pt-0 mt-auto border-t">
                  <Button
                    asChild
                    className="w-full"
                    variant="secondary"
                  >
                    <a
                      href={resource.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {resource.fileType === "Link" ? "Visit Resource" : "Download"}
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        ) : (
          <Card className="p-12 text-center">
            <p className="text-muted-foreground">
              No resources match your search criteria.
            </p>
          </Card>
        )}
      </div>
    </div>
  );
}