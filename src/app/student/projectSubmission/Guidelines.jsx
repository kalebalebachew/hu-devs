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
import { Badge } from "@/components/ui/badge";
import { CheckCircle, FileCode, Globe2, BookOpen, FileText } from "lucide-react";
import { Nunito } from "next/font/google";

const nunito = Nunito({
  subsets: ["latin"],
  display: "swap",
});

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
      <DialogTrigger className={nunito.className} asChild>
        <Button variant="outline" className="gap-2">
          <FileText className="h-4 w-4" />
          Submission Guidelines
        </Button>
      </DialogTrigger>
      <DialogContent className={`max-w-3xl ${nunito.className}`}>
        <DialogHeader>
          <DialogTitle className="text-2xl flex items-center gap-2">
            <FileText className="h-6 w-6 text-primary" />
            Project Submission Guidelines
          </DialogTitle>
        </DialogHeader>

        <div className="relative max-h-[60vh] overflow-y-auto p-4 rounded-lg">
          <div className="bg-primary/10 rounded-lg p-4 mb-6">
            <p className="text-sm text-muted-foreground leading-relaxed">
              Please review our guidelines and agree to the terms before submitting your project.
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {guidelines.map((section, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border rounded-lg px-4"
              >
                <AccordionTrigger className="hover:no-underline">
                  <div className="flex items-center gap-3">
                    <div className="text-primary">{section.icon}</div>
                    <span>{section.title}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="space-y-3 pt-2">
                    {section.content.map((item, idx) => (
                      <li
                        key={idx}
                        className="flex items-center gap-2 text-sm text-muted-foreground"
                      >
                        <Badge
                          variant="secondary"
                          className="w-6 h-6 flex items-center justify-center p-0"
                        >
                          {idx + 1}
                        </Badge>
                        {item}
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="bg-secondary/10 p-4 mt-6 border rounded-lg">
            <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
              <FileText className="h-4 w-4" />
              Terms and Conditions
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-sm text-muted-foreground">
              {termsAndConditions.map((term, index) => (
                <li key={index}>{term}</li>
              ))}
            </ul>
            <div className="mt-4 flex items-center">
              <Checkbox
                id="agree"
                checked={agreed}
                onCheckedChange={(checked) => setAgreed(checked)}
              />
              <label
                htmlFor="agree"
                className="text-sm text-muted-foreground ml-2 cursor-pointer"
              >
                I have read and agree to the guidelines and terms.
              </label>
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center mt-6 pt-4 border-t">
          <p className="text-sm text-muted-foreground"></p>
          <Button disabled={!agreed} onClick={handleAgreement}>
            I Understand
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
