"use client";

import React, { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { toast } from "sonner";
import { Github, Globe, Rocket, Stars } from "lucide-react";
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

  const API_BASE_URL = process.env.NEXT_PUBLIC_BACKEND_URL;
  const getAuthToken = () => {
    return localStorage.getItem("auth_token");
  };

  async function onSubmit(values) {
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
      toast.error(
        error.message || "Failed to submit project. Please try again."
      );
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20 px-4 py-12">
      <div className="container mx-auto max-w-4xl">
        <div className="space-y-6 text-center mb-12">
          <Rocket className="h-12 w-12 mx-auto text-primary animate-bounce" />
          <h1 className="text-4xl font-bold tracking-tight">
            Submit Your Project
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Share your amazing project with our developer community. We'd love
            to see what you've built!
          </p>
        </div>
        <div className="mb-6 text-center">
          <SubmissionGuidelinesModal />
        </div>

        <Card className="p-6 md:p-8 backdrop-blur-sm bg-card/50">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-8 animate-in fade-in-50"
            >
              <FormField
                control={form.control}
                name="projectName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex items-center gap-2">
                      <Stars className="h-4 w-4" />
                      Project Name
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter your project name"
                        {...field}
                        className="transition-all duration-300 focus:scale-[1.002]"
                      />
                    </FormControl>
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
                    <FormControl>
                      <Textarea
                        placeholder="Tell us about your project..."
                        className="min-h-[120px] resize-none transition-all duration-300 focus:scale-[1.002]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="grid gap-6 md:grid-cols-2">
                <FormField
                  control={form.control}
                  name="projectUrl"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="flex items-center gap-2">
                        <Globe className="h-4 w-4" />
                        Live Demo URL
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="https://your-project.com"
                          {...field}
                          className="transition-all duration-300 focus:scale-[1.002]"
                        />
                      </FormControl>
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
                        <Github className="h-4 w-4" />
                        GitHub Repository
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="https://github.com/username/repo"
                          {...field}
                          className="transition-all duration-300 focus:scale-[1.002]"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="flex justify-end">
                <Button
                  type="submit"
                  size="lg"
                  className="w-full md:w-auto group"
                >
                  Submit Project
                  <Rocket className="ml-2 h-4 w-4 group-hover:animate-bounce" />
                </Button>
              </div>
            </form>
          </Form>
        </Card>
      </div>
    </div>
  );
}
