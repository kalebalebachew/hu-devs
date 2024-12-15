import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, BarChart3, Clock, Layout } from "lucide-react";
import { cn } from "@/lib/utils";
import GlowingButton from "./GlowingButton";

const DashboardPreview = ({ dashboardImage }) => {
  return (
    <div className="relative bg-background overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -left-4 top-0 h-[500px] w-[500px] rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute -right-4 bottom-0 h-[500px] w-[500px] rounded-full bg-secondary/5 blur-3xl" />
      </div>

      <div className="container relative mx-auto px-4 py-24">
        <div className="relative z-10 mx-auto max-w-[1200px]">
          <div className="mb-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center rounded-full border border-border bg-background/95 px-4 py-1.5 text-sm font-medium text-foreground backdrop-blur-sm"
            >
              <span className="relative flex h-2 w-2 mr-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary"></span>
              </span>
              Unlock the HUDC Dashboard – Built for Innovators Like You
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="mt-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl"
            >
              Empowering Students
              <span className="block text-primary">Through Technology</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground"
            >
              Be part of Haramaya University developer community, where you
              can access premium courses and the powerful
              HUDC Student Dashboard — your central hub for innovation and
              growth.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="relative mx-auto"
          >
            <div className="overflow-hidden rounded-xl bg-card shadow-2xl ring-1 ring-border/5">
              <div className="relative bg-muted px-6 py-3">
                <div className="flex items-center space-x-2">
                  <div className="h-3 w-3 rounded-full bg-destructive/60" />
                  <div className="h-3 w-3 rounded-full bg-primary/60" />
                  <div className="h-3 w-3 rounded-full bg-secondary/60" />
                </div>
              </div>

              <div className="relative">
                <img
                  src={dashboardImage}
                  alt="HUDC Student Dashboard Interface"
                  className="w-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-background/10 to-transparent" />
                <div className="absolute inset-0 ring-1 ring-inset ring-border/10" />
              </div>
            </div>

          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPreview;
