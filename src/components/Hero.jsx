"use client";

import { motion } from "framer-motion";
import { ArrowRight, SendIcon, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { GridPattern } from "./GridPattern";

export function Hero() {
  return (
    <section className="relative pt-32 pb-16 sm:pt-40 sm:pb-20 overflow-hidden">
     <div class="absolute -bottom-12 -top-20 left-0 right-1/2 z-10 w-screen  text-primary/15 md:bottom-8 lg:-inset-y-32">
    <svg aria-hidden="true" class="absolute inset-0 h-screen w-screen">
      <defs>
        <pattern id=":S2:" width="128" height="128" patternUnits="userSpaceOnUse" x="100%" y="100%" patternTransform="translate(112 64)">
          <path d="M0 128V.5H128" fill="none" stroke="currentColor"></path>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#:S2:)"></rect>
    </svg>
  </div>
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
                "text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight",
                "bg-gradient-to-b from-foreground to-muted bg-clip-text text-transparent",
                "pb-2"
              )}
            >
              Haramaya University Developers Community
            </h1>

            <p className="text-xl text-muted-foreground">
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
              className="bg-primary text-primary-foreground hover:bg-primary/90 group"
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
              className="border-muted hover:bg-muted/10 text-muted-foreground"
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
          <div className="absolute inset-0 rotate-45 bg-gradient-radial from-accent/30 via-transparent to-transparent blur-2xl"></div>
        </div>
      </div>
    </section>
  );
}
