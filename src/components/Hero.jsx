"use client";

import { motion } from "framer-motion";
import { ArrowRight, SendIcon, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Hero() {
  return (
    <section className="relative pt-32 pb-16 sm:pt-40 sm:pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative z-10 max-w-3xl mx-auto text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h1
              className={cn(
                "text-4xl sm:text-5xl lg:text-6xl font-extrabold",
                "tracking-tight text-transparent bg-clip-text",
                "bg-gradient-to-b from-white to-[#AAAAAA]",
                "pb-2"
              )}
            >
              Haramaya University Developers Community
            </h1>

            <p className=" text-xl text-zinc-400">
              Learning and building together at Haramaya University and beyond.
              Join our growing community of student developers.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
              asChild
              size="lg"
              className="bg-white text-black hover:bg-zinc-100 group"
            >
              <a
                href="https://t.me/hudevhub"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SendIcon className="w-4 h-4 mr-2" />
                Join Telegram Channel
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-zinc-800 hover:bg-zinc-900"
            >
              <a
                href="https://github.com/HUDC-Haramaya"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-4 h-4 mr-2" />
                View on GitHub
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-1/2 left-1/2 -translate-x-1/2 w-[800px] h-[800px] opacity-20">
          <div className="absolute inset-0 rotate-45 bg-gradient-radial from-teal-500/30 via-transparent to-transparent blur-2xl"></div>
        </div>
      </div>
    </section>
  );
}
