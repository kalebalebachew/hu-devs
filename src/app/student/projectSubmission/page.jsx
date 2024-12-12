"use client";

import React from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Form, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { ChevronRight, Rocket, Stars, Github, Globe } from "lucide-react";
import { motion } from "framer-motion";
import { toast } from "sonner";
import SubmissionGuidelinesModal from "./Guidelines";

const formSchema = z.object({
  projectName: z
    .string()
    .min(3, "Project name must be at least 3 characters")
    .max(50, "Project name must be less than 50 characters"),
  description: z
    .string()
    .min(10, "Description must be at least 10 characters")
    .max(500, "Description must be less than 500 characters"),
  projectUrl: z.string().url("Please enter a valid URL"),
  githubRepoUrl: z.string().url("Please enter a valid GitHub repository URL"),
});

export default function SubmitProject() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      projectName: "",
      description: "",
      projectUrl: "",
      githubRepoUrl: "",
    },
  });

  async function onSubmit(values) {
    const API_BASE_URL = process.env.NEXT_PUBLIC_BACKEND_URL;
    const getAuthToken = () => localStorage.getItem("auth_token");

    try {
      const token = getAuthToken();
      const response = await fetch(`${API_BASE_URL}/user/submit-project`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        toast.success(
          <>
            <p>Your project has been successfully submitted!</p>
            <p>
              It is now under review. HUDC admins will evaluate your submission
              based on the provided guidelines.
            </p>
          </>
        );
        form.reset();
      } else {
        const error = await response.json();
        throw new Error(error.message || "Failed to submit project.");
      }
    } catch (error) {
      toast.error(error.message || "Failed to submit project. Please try again.");
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container px-4 py-8 mx-auto max-w-5xl">
       
          <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-4">
            <div className="text-primary p-4 rounded-full sm:hidden">
              <Rocket className="w-8 h-8" />
            </div>
            <div className="hidden sm:block p-4 rounded-full">
              <Rocket className="w-10 h-10 text-primary" />
            </div>
            <div className="text-center sm:text-left">
              <h1 className="text-2xl sm:text-3xl font-extrabold text-foreground">
                Submit Your Project
              </h1>
              <p className="text-sm sm:text-lg text-muted-foreground mt-2">
                Share your innovative project with our developer community.
              </p>
            </div>
          </div>

          <Card className="bg-card shadow-md">
            <CardContent className="flex items-center justify-between p-6">
              <div className="text-foreground">
                <h2 className="text-lg font-semibold">Submission Guidelines</h2>
                <p className="text-sm text-muted-foreground">
                  Ensure your project meets our quality standards.
                </p>
              </div>
              <SubmissionGuidelinesModal />
            </CardContent>
          </Card>

          <Card className="p-4 sm:p-6 bg-card/50 backdrop-blur-md">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                  control={form.control}
                  name="projectName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="flex items-center gap-2">
                        <Stars className="h-4 w-4 text-primary" />
                        Project Name
                      </FormLabel>
                      <Input
                        placeholder="Enter your project name"
                        {...field}
                        className="transition-transform duration-300 focus:scale-105"
                      />
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Project Description</FormLabel>
                      <Textarea
                        placeholder="Describe your project..."
                        className="min-h-[100px] resize-none transition-transform duration-300 focus:scale-105"
                        {...field}
                      />
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="grid gap-6 sm:grid-cols-2">
                  <FormField
                    control={form.control}
                    name="projectUrl"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="flex items-center gap-2">
                          <Globe className="h-4 w-4 text-primary" />
                          Live Demo URL
                        </FormLabel>
                        <Input
                          placeholder="https://your-project.com"
                          {...field}
                          className="transition-transform duration-300 focus:scale-105"
                        />
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="githubRepoUrl"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="flex items-center gap-2">
                          <Github className="h-4 w-4 text-primary" />
                          GitHub Repository
                        </FormLabel>
                        <Input
                          placeholder="https://github.com/username/repo"
                          {...field}
                          className="transition-transform duration-300 focus:scale-105"
                        />
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="flex justify-end">
                  <Button variant="secondary" className="transition-transform duration-300">
                    Submit
                    <ChevronRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </form>
            </Form>
          </Card>
      </div>
    </div>
  );
}
