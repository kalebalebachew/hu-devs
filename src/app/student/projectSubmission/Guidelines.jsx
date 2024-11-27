"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, FileCode, Globe2, BookOpen, FileText } from "lucide-react";

export default function SubmissionGuidelinesModal() {
  const [agreed, setAgreed] = useState(false);
  const [open, setOpen] = useState(false);

  const guidelines = [
    {
      title: "Eligibility Requirements",
      icon: <CheckCircle className="h-5 w-5" />,
      content: [
        "Open to all HUDC members.",
        "Original work or team collaborations only.",
        "Projects must align with HUDC's learning goals.",
      ],
    },
    {
      title: "Submission Details",
      icon: <FileCode className="h-5 w-5" />,
      content: [
        "Provide a working live demo URL.",
        "Share a public GitHub repository.",
        "Include a detailed project description.",
      ],
    },
    {
      title: "Documentation",
      icon: <BookOpen className="h-5 w-5" />,
      content: ["README file with setup instructions.", "API documentation (if applicable)."],
    },
    {
      title: "Review Process",
      icon: <Globe2 className="h-5 w-5" />,
      content: [
        "HUDC admins will review all submissions for quality and adherence.",
        "Incomplete submissions may be returned for updates.",
        "Approved projects will be showcased on HUDC platforms.",
      ],
    },
  ];

  const termsAndConditions = [
    "Your project may be featured on HUDC platforms (website, social media, etc.).",
    "You retain full ownership but grant HUDC the right to showcase it.",
    "You confirm that your submission is your original work or a collaborative project with proper acknowledgment of team members.",
    "Incomplete or non-compliant projects may be rejected or removed.",
    "Your submission may be used in HUDC training materials, workshops, or presentations to further community learning.",
    "HUDC will credit you or your team as the creators of the project wherever it is showcased, unless requested otherwise.",
  ];

  const handleAgreement = () => {
    if (agreed) {
      setOpen(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          size="lg"
          className="bg-gradient-to-r from-gray-700 to-gray-600 hover:from-gray-600 hover:to-gray-700 text-gray-100 border border-gray-600"
        >
          Terms and Conditions
          <ArrowRight className="h-4 w-4" />
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-3xl">
        <DialogHeader>
          <DialogTitle className="text-2xl font-medium tracking-tight ">
            Project Submission Guidelines
          </DialogTitle>
        </DialogHeader>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="relative max-h-[60vh] overflow-y-auto space-y-6 py-4"
        >
          <div className="rounded-lg border border-blue-500/10 bg-blue-500/5 p-4">
            <p className="text-sm text-muted-foreground">
              Please review our guidelines and agree to the terms before submitting your project.
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {guidelines.map((section, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border rounded-lg px-4 data-[state=open]:bg-gray-400/40 transition-colors"
              >
                <AccordionTrigger className="hover:no-underline py-4">
                  <div className="flex items-center gap-3">
                    <div className="text-primary">{section.icon}</div>
                    <span className="font-medium">{section.title}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="space-y-3 pb-4">
                    {section.content.map((item, idx) => (
                      <motion.li
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        key={idx}
                        className="flex items-center gap-3 text-sm text-muted-foreground"
                      >
                        <div className="h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="rounded-lg border bg-card p-4">
            <h3 className="text-lg font-medium mb-3 flex items-center gap-2">
              <FileText className="h-4 w-4" />
              Terms and Conditions
            </h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {termsAndConditions.map((term, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  {term}
                </li>
              ))}
            </ul>
            <div className="mt-4 flex items-start gap-3">
              <Checkbox
                id="agree"
                checked={agreed}
                onCheckedChange={(checked) => setAgreed(checked )}
                className="mt-1"
              />
              <label
                htmlFor="agree"
                className="text-sm text-muted-foreground cursor-pointer"
              >
                I have read and agree to the guidelines and terms.
              </label>
            </div>
          </div>
        </motion.div>

        <div className="flex justify-end items-center pt-4 border-t">
          <Button
            disabled={!agreed}
            onClick={handleAgreement}
            className="bg-black text-white hover:bg-black/90 dark:bg-white dark:text-black dark:hover:bg-white/90"
          >
            Continue
            <ArrowRight className="h-4 w-4 ml-2" />
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}