"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { ChevronRight, Lock, Mail, IdCard } from "lucide-react";

export default function Settings() {
  const [studentId, setStudentId] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleStudentIdUpdate = (e) => {
    e.preventDefault();
    console.log("Updated Student ID:", studentId);
  };

  const handleEmailUpdate = (e) => {
    e.preventDefault();
    console.log("Updated Email:", email);
  };

  const handlePasswordUpdate = (e) => {
    e.preventDefault();
    console.log("Updated Password:", password);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container max-w-4xl mx-auto px-4 py-12">
        <div className="space-y-4 mb-8">
          <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
          <p className="text-muted-foreground">Manage your student account details here.</p>
        </div>

        <Card className="p-6 bg-card border-muted">
          <Tabs defaultValue="account" className="space-y-8">
            <TabsList className="flex justify-start space-x-4">
              <TabsTrigger
                value="account"
                className="data-[state=active]:text-primary"
              >
                Account Details
              </TabsTrigger>
            </TabsList>

            <TabsContent value="account" className="space-y-8">
              <form onSubmit={handleStudentIdUpdate} className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <IdCard className="h-5 w-5 text-muted-foreground" />
                    <h2 className="text-xl font-semibold">Student ID</h2>
                  </div>
                  <p className="text-muted-foreground">
                    Update your university-assigned Student ID.
                  </p>
                </div>
                <Input
                  type="text"
                  value={studentId}
                  onChange={(e) => setStudentId(e.target.value)}
                  placeholder="e.g., HU20210001"
                  className="bg-input border-input text-foreground placeholder:text-muted-foreground"
                />
                <Button
                  type="submit"
                  className="group relative bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  <span className="relative z-10 flex items-center">
                    Update Student ID
                    <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
                  </span>
                </Button>
              </form>

              <Separator className="bg-muted" />

              <form onSubmit={handleEmailUpdate} className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Mail className="h-5 w-5 text-muted-foreground" />
                    <h2 className="text-xl font-semibold">Email Address</h2>
                  </div>
                  <p className="text-muted-foreground">Update your email address.</p>
                </div>
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="e.g., student@haramaya.edu.et"
                  className="bg-input border-input text-foreground placeholder:text-muted-foreground"
                />
                <Button
                  type="submit"
                  className="group relative bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  <span className="relative z-10 flex items-center">
                    Update Email
                    <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
                  </span>
                </Button>
              </form>

              <Separator className="bg-muted" />

              <form onSubmit={handlePasswordUpdate} className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Lock className="h-5 w-5 text-muted-foreground" />
                    <h2 className="text-xl font-semibold">Password</h2>
                  </div>
                  <p className="text-muted-foreground">
                    Update your password to keep your account secure.
                  </p>
                </div>
                <Input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter new password"
                  className="bg-input border-input text-foreground placeholder:text-muted-foreground"
                />
                <Button
                  type="submit"
                  className="group relative bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  <span className="relative z-10 flex items-center">
                    Update Password
                    <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
                  </span>
                </Button>
              </form>
            </TabsContent>
          </Tabs>
        </Card>
      </div>
    </div>
  );
}
