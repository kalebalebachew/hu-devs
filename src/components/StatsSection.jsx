"use client";

import React from "react";
import { motion } from "framer-motion";
import { Users, Calendar, Handshake, Code2, Rocket, Globe } from "lucide-react";

const stats = [
  {
    id: 1,
    name: "Members",
    value: "600+",
    icon: Users,
    description: "Active community members",
  },
  {
    id: 2,
    name: "Events",
    value: "3+",
    icon: Calendar,
    description: "Tech events organized",
  },
  {
    id: 3,
    name: "Partners",
    value: "5+",
    icon: Handshake,
    description: "Partnerships with companies",
  },
];

const fadeInVariants = {
  initial: { opacity: 0, y: 20 },
  animate: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1 * index,
      duration: 0.5,
    },
  }),
};

export function StatsSection() {
  return (
    <section className="relative pb-20 ">
      <div className="absolute inset-0 bg-grid-gray-900/[0.04] bg-[size:60px_60px]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl text-center font-bold tracking-tight sm:text-4xl text-gradient mb-4">
            Our Achievements
          </h2>
          <p className="text-center text-lg text-zinc-400 mb-6">
           What we achieved so far as a community
          </p>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.id}
                custom={index}
                variants={fadeInVariants}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="relative group"
              >
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r  opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative flex flex-col items-center p-6  rounded-lg border border-gray-700 transition duration-300 group-hover:border-gray-600">
                  <div className="mb-4 p-3 rounded-full">
                    <stat.icon className="h-6 w-6 text-gray-300" />
                  </div>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                    className="text-center"
                  >
                    <dt className="text-3xl font-bold text-white mb-2">
                      {stat.value}
                    </dt>
                    <dd className="text-lg font-medium text-gray-300 mb-1">
                      {stat.name}
                    </dd>
                    <dd className="text-sm text-gray-400">
                      {stat.description}
                    </dd>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Add this to your global CSS file
const styles = `
.bg-grid-gray-900 {
  background-image: linear-gradient(to right, #1f2937 1px, transparent 1px),
    linear-gradient(to bottom, #1f2937 1px, transparent 1px);
}
`;
