"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { FixedSizeList as List } from "react-window";
import projectShowcase from "@/data/projectShowcase.json";
import Projects from "@/data/projects.json";
import { debounce } from "lodash";

export default function SubmissionPage() {
  const ITEMS_PER_PAGE = 8;
  const [filters, setFilters] = useState({
    searchTerm: "",
    selectedTechnology: "All",
    selectedDifficulty: "All",
  });
  const [formData, setFormData] = useState({
    developerName: "",
    projectTitle: "",
    technologyUsed: "",
    description: "",
    date: "",
    file: null,
  });
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [visibleProjects, setVisibleProjects] = useState([]);

  useEffect(() => {
    const filtered = Projects.filter((project) => {
      return (
        (filters.selectedTechnology === "All" ||
          project.tech === filters.selectedTechnology) &&
        (filters.selectedDifficulty === "All" ||
          project.difficulty === filters.selectedDifficulty) &&
        project.name.toLowerCase().includes(filters.searchTerm.toLowerCase())
      );
    });
    setFilteredProjects(filtered);
  }, [filters]);

  useEffect(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    const end = start + ITEMS_PER_PAGE;
    setVisibleProjects(filteredProjects.slice(0, end));
  }, [currentPage, filteredProjects]);

  const handleInputChange = debounce((e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }, 300);

  const handleFileChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      file: e.target.files[0],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Project submitted successfully!");
  };

  const loadMore = () => {
    setCurrentPage((prev) => prev + 1);
  };

  return (
    <div className="p-6 mt-6 min-h-screen w-full">
      <div className="flex items-center justify-center w-full">
        <h1 className="font-bold text-3xl">
          Explore the amazing projects built by our community!
        </h1>
      </div>

      <div className="py-12">
        <div className="container mx-auto px-2 lg:px-5">
          <h1 className="text-xl font-bold text-start bg-gradient-to-r from-purple-300 via-pink-500 to-red-500 bg-clip-text text-transparent mb-6">
            Explore Featured Projects
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
            {projectShowcase.map((project, index) => (
              <a
                href={project.link}
                key={index}
                className="group relative bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  width={400}
                  height={200}
                  className="w-full h-40 object-cover"
                />
                <div className="p-6">
                  <h2 className="text-2xl font-semibold text-white group-hover:text-purple-500 transition duration-300">
                    {project.title}
                  </h2>
                  <p className="text-gray-400 mt-2">{project.description}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Submission Form */}
      <div className="flex justify-start items-center mt-7">
        <form
          className="shadow-md rounded-lg p-6 w-full max-w-4xl"
          onSubmit={handleSubmit}
        >
          <h1 className="text-2xl font-bold mb-6 bg-gradient-to-r from-purple-300 via-pink-500 to-red-500 bg-clip-text text-transparent">
            Project Submission Form
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div>
              <label className="block text-sm font-medium text-purple-500">
                Developer Name
              </label>
              <input
                type="text"
                name="developerName"
                onChange={handleInputChange}
                className="mt-1 p-2 w-full border rounded shadow-sm focus:ring focus:ring-purple-300"
                placeholder="Enter your name"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-purple-500">
                Project Title
              </label>
              <input
                type="text"
                name="projectTitle"
                onChange={handleInputChange}
                className="mt-1 p-2 w-full border rounded shadow-sm focus:ring focus:ring-purple-300"
                placeholder="Enter the project title"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-purple-500">
                Technology Used
              </label>
              <select
                name="technologyUsed"
                onChange={handleInputChange}
                className="mt-1 p-2 w-full border rounded shadow-sm focus:ring focus:ring-purple-300"
                required
              >
                <option value="">Select Technology</option>
                <option value="React">React</option>
                <option value="Next.js">Next.js</option>
                <option value="Vue">Vue</option>
                <option value="Angular">Angular</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-purple-500">
                Description
              </label>
              <textarea
                name="description"
                onChange={handleInputChange}
                className="mt-1 p-2 w-full border rounded shadow-sm focus:ring focus:ring-purple-300"
                placeholder="Briefly describe your project"
                rows="4"
                required
              ></textarea>
            </div>
            <div>
              <label className="block text-sm font-medium text-purple-500">
                Upload File
              </label>
              <input
                type="file"
                onChange={handleFileChange}
                className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:border file:border-gray-300 file:rounded file:text-sm file:font-semibold file:bg-purple-50 file:text-purple-700 hover:file:bg-purple-100"
                required
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-full md:w-1/3 py-2 px-4 bg-purple-600 text-white rounded-lg shadow hover:bg-purple-700"
          >
            Submit Project
          </button>
        </form>
      </div>
    </div>
  );
}
