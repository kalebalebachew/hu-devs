"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { useRegistration } from "@/hooks/useRegistration";
import { ArrowRight } from "lucide-react";

export function CommunityTabsComponent() {
  const { isLoading, registerMembership } = useRegistration();
  const { toast } = useToast();

  const handleMembershipSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = {
      email: form.email.value,
      studentId: form.studentId.value,
      password: form.password.value,
    };

    try {
      const success = await registerMembership(data);
      toast({
        title: success ? "Registration Successful" : "Registration Failed",
        description: success
          ? "Welcome to the HUDC Community!"
          : "Please try again later.",
        variant: success ? "success" : "destructive",
      });

      if (success) {
        form.reset();
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "An unexpected error occurred. Please try again.",
        variant: "destructive",
      });
    }
  };

  const timelineData = [
    {
      step: 1,
      title: "Register for Membership",
      description:
        "Sign up to gain exclusive access to resources, premium courses, and a thriving network of developers.",
      content: (
        <form onSubmit={handleMembershipSubmit} className="space-y-6">
          <div>
            <Label htmlFor="email" className="text-sm">
              Email
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="your.name@hu.edu.et"
              className="w-full mt-1"
            />
          </div>
          <div>
            <Label htmlFor="studentId" className="text-sm">
              Student ID
            </Label>
            <Input
              id="studentId"
              name="studentId"
              type="text"
              placeholder="Enter your Student ID"
              className="w-full mt-1"
            />
          </div>
          <div>
            <Label htmlFor="password" className="text-sm">
              Password
            </Label>
            <Input
              id="password"
              name="password"
              type="password"
              placeholder="Create a secure password"
              className="w-full mt-1"
            />
          </div>
          <Button
            type="submit"
            disabled={isLoading}
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
          >
            {isLoading ? "Registering..." : "Create Account"}
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </form>
      ),
    },
    {
      step: 2,
      title: "Connect with Developers",
      description:
        "Join our active discussions on LinkedIn, Telegram, and GitHub to network with like-minded individuals.",
      content: (
        <div className="space-y-4">
          {[
            {
              name: "LinkedIn",
              href: "https://www.linkedin.com/company/haramaya-university-developers-community",
              description: "Professional networking and updates",
            },
            {
              name: "Telegram",
              href: "https://t.me/hudevhub",
              description: "Community chat and discussions",
            },
            {
              name: "GitHub",
              href: "https://github.com/hudevhub",
              description: "Open source collaborations",
            },
          ].map((platform) => (
            <a
              key={platform.name}
              href={platform.href}
              target="_blank"
              rel="noopener noreferrer"
              className="block px-4 py-2 rounded-lg bg-muted/10 hover:bg-muted/20 transition"
            >
              <div className="flex justify-between items-center">
                <div>
                  <h4 className="text-lg font-semibold">{platform.name}</h4>
                  <p className="text-sm text-muted-foreground">
                    {platform.description}
                  </p>
                </div>
                <ArrowRight className="w-4 h-4 text-primary" />
              </div>
            </a>
          ))}
        </div>
      ),
    },
    {
      step: 3,
      title: "Join Organizer's Team",
      description: "",
      content: (
        <div className="text-center space-y-4">
          <p className="text-sm text-muted-foreground">
            Applications for 2024 organizers open soon! Stay tuned for
            announcements.
          </p>
        </div>
      ),
    },
  ];

  return (
    <section className="bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative border-l-2 border-muted/30">
          {timelineData.map((item, index) => (
            <motion.div
              key={index}
              className="relative mb-12 ml-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <div className="absolute -left-4 flex items-center justify-center h-8 w-8 rounded-full bg-primary text-secondary text-sm font-medium shadow-lg">
                {item.step}
              </div>

              <Card className="shadow-md bg-card border border-muted/30">
                <CardHeader className="bg-muted/10 py-4">
                  <CardTitle className="text-lg font-semibold">
                    {item.title}
                  </CardTitle>
                  <CardDescription>{item.description}</CardDescription>
                </CardHeader>
                <CardContent>{item.content}</CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
