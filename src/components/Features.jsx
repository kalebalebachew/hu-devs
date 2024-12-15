"use client";

import { motion } from "framer-motion";
import { Code2, Users, BookOpen, Calendar, Github, Laptop } from "lucide-react";
import { Card } from "@/components/ui/card";

const features = [
  {
    icon: Code2,
    title: "Hands-on Projects",
    description:
      "Build real-world projects and gain practical experience through collaborative development.",
  },
  {
    icon: Users,
    title: "Peer Learning",
    description:
      "Learn from and with fellow developers through code reviews, pair programming, and knowledge sharing.",
  },
  {
    icon: BookOpen,
    title: "Learning Resources",
    description:
      "Access curated learning materials, tutorials, and documentation to support your growth.",
  },
  {
    icon: Calendar,
    title: "Regular Events",
    description:
      "Participate in workshops, hackathons, and tech talks to enhance your skills and network.",
  },
  {
    icon: Github,
    title: "Open Source",
    description:
      "Contribute to open source projects and build your portfolio while helping others.",
  },
  {
    icon: Laptop,
    title: "Tech Stack",
    description:
      "Learn modern technologies and best practices used in the industry.",
  },
];

export function Features() {
  return (
    <section className="relative" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-4 mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
            Why Join Our Community?
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
            Discover the benefits of being part of HUDC
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="h-full"
            >
              <Card className="group relative p-6 bg-card border border-border hover:border-muted transition-all duration-300 h-full flex flex-col">
                <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative flex-1 flex flex-col">
                  <feature.icon className="w-8 h-8 mb-4 text-muted-foreground group-hover:text-primary transition-colors duration-300 flex-shrink-0" />
                  <h3 className="text-xl font-semibold mb-2 text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                    {feature.description}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
