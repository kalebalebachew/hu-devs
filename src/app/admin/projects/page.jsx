"use client";

import React, { useState, useEffect } from "react";
import { useProjects } from "@/hooks/useProjects";
import { CheckIcon, XIcon, EyeIcon, TagIcon } from "lucide-react";
import { format } from "date-fns";

import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";

export default function AdminProjectManagementPage() {
  const { projects, updateProject, fetchProjects } = useProjects();
  const [selectedProject, setSelectedProject] = useState(null);
  const [category, setCategory] = useState("");

  useEffect(() => {
    fetchProjects();
  }, [fetchProjects]);

  const handleStatusChange = async (projectId, newStatus) => {
    await updateProject(projectId, { status: newStatus });
    fetchProjects();
  };

  const handleCategoryChange = async (projectId, newCategory) => {
    if (!newCategory) return;
    await updateProject(projectId, { category: newCategory });
    fetchProjects();
    setCategory("");
  };

  const getStatusBadgeColor = (status) => {
    const statusColors = {
      pending: "bg-yellow-200 text-yellow-800",
      approved: "bg-green-200 text-green-800",
      rejected: "bg-red-200 text-red-800",
    };
    return statusColors[status] || "bg-gray-200 text-gray-800";
  };

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-2xl font-bold mb-5">Project Management</h1>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Project Name</TableHead>
            <TableHead>Submitted By</TableHead>
            <TableHead>Submitted At</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Category</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {projects.map((project) => (
            <TableRow key={project._id}>
              <TableCell>{project.projectName}</TableCell>
              <TableCell>{project.userId?.name || "Unknown User"}</TableCell>
              <TableCell>
                {format(new Date(project.submittedAt), "PPP")}
              </TableCell>
              <TableCell>
                <Badge className={getStatusBadgeColor(project.status)}>
                  {project.status.charAt(0).toUpperCase() +
                    project.status.slice(1)}
                </Badge>
              </TableCell>
              <TableCell>{project.category || "Uncategorized"}</TableCell>
              <TableCell className="text-right">
                {/* Review Project Dialog */}
                <Dialog>
                  <DialogTrigger asChild>
                    <Button
                      variant="outline"
                      size="icon"
                      className="mr-2"
                      onClick={() => setSelectedProject(project)}
                    >
                      <EyeIcon className="h-4 w-4" />
                      <span className="sr-only">Review project</span>
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-3xl">
                    <DialogHeader>
                      <DialogTitle>
                        Review Project: {selectedProject?.projectName || "N/A"}
                      </DialogTitle>
                    </DialogHeader>
                    {selectedProject && (
                      <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-4 items-center gap-4">
                          <Label htmlFor="projectName" className="text-right">
                            Project Name
                          </Label>
                          <Input
                            id="projectName"
                            value={selectedProject.projectName}
                            readOnly
                            className="col-span-3"
                          />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                          <Label htmlFor="description" className="text-right">
                            Description
                          </Label>
                          <Textarea
                            id="description"
                            value={selectedProject.description}
                            readOnly
                            className="col-span-3"
                          />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                          <Label htmlFor="projectUrl" className="text-right">
                            Project URL
                          </Label>
                          <Input
                            id="projectUrl"
                            value={selectedProject.projectUrl}
                            readOnly
                            className="col-span-3"
                          />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                          <Label htmlFor="githubRepoUrl" className="text-right">
                            GitHub Repo URL
                          </Label>
                          <Input
                            id="githubRepoUrl"
                            value={selectedProject.githubRepoUrl}
                            readOnly
                            className="col-span-3"
                          />
                        </div>
                      </div>
                    )}
                    <DialogFooter>
                      <Button
                        onClick={() =>
                          handleStatusChange(selectedProject._id, "approved")
                        }
                        className="bg-green-500 hover:bg-green-600"
                      >
                        <CheckIcon className="mr-2 h-4 w-4" /> Approve
                      </Button>
                      <Button
                        onClick={() =>
                          handleStatusChange(selectedProject._id, "rejected")
                        }
                        variant="destructive"
                      >
                        <XIcon className="mr-2 h-4 w-4" /> Reject
                      </Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>

                {/* Categorize Project Dialog */}
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline" size="icon">
                      <TagIcon className="h-4 w-4" />
                      <span className="sr-only">Categorize project</span>
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Categorize Project</DialogTitle>
                      <DialogDescription>
                        Assign a category to the project: {project.projectName}
                      </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="category" className="text-right">
                          Category
                        </Label>
                        <Select onValueChange={(value) => setCategory(value)}>
                          <SelectTrigger className="col-span-3">
                            <SelectValue placeholder="Select a category" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="web">Web Development</SelectItem>
                            <SelectItem value="mobile">Mobile App</SelectItem>
                            <SelectItem value="data">Data Science</SelectItem>
                            <SelectItem value="ai">
                              Artificial Intelligence
                            </SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <DialogFooter>
                      <Button
                        onClick={() =>
                          handleCategoryChange(project._id, category)
                        }
                      >
                        Assign Category
                      </Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
