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
    <section className=" relative" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-4 mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-gradient">
            Why join our community?
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-zinc-400">
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
              <Card className="group relative p-2 bg-zinc-900/50 border-zinc-800/50 hover:border-zinc-700/50 transition-all duration-300 h-full flex flex-col">
                <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative flex-1 flex flex-col">
                  <feature.icon className="w-8 h-8 mb-4 text-white/80 group-hover:text-white transition-colors duration-300 flex-shrink-0" />
                  <h3 className="text-xl font-semibold mb-2 text-gradient flex-shrink-0">
                    {feature.title}
                  </h3>
                  <p className="text-zinc-400 group-hover:text-zinc-300 transition-colors duration-300">
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
