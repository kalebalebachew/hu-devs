"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { InstagramIcon, LinkedinIcon, SendIcon } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-6 w-full px-4 md:px-6 bg-black text-white">
    <div className="container mx-auto flex flex-col justify-center items-center">
    <div className="flex justify-center mt-8 space-x-6">
        <a
          href="https://www.linkedin.com/company/haramaya-university-developers-community"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedinIcon
            size={30}
            className="text-purple-500 hover:text-white"
          />
        </a>
        <a
          href="https://t.me/hudevhub"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SendIcon
            size={30}
            className="text-purple-500 hover:text-white"
          />
        </a>
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <InstagramIcon
            size={30}
            className="text-purple-500 hover:text-white"
          />
        </a>
      </div>
      <p className="text-sm font-medium text-purple-500 mb-4 md:mb-0 p-2">
        © 2024 Haramaya University Developers Community. All rights
        reserved.
      </p>
     
    </div>
  </footer>
  );
}
