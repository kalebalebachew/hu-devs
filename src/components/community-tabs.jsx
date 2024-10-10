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
import { LinkedinIcon, SendIcon } from "lucide-react";

export function CommunityTabsComponent() {
  return (
    <Tabs defaultValue="social" className="w-[700] ">
      <TabsList className="grid w-full grid-cols-3 bg-gray-900 font-semibold border border-purple-500 border-opacity-40 text-purple-500">
        <TabsTrigger
          value="social"
          className=" hover:bg-purple-500 hover:text-black focus:bg-purple-500 focus:text-black"
        >
          Connect
        </TabsTrigger>
        <TabsTrigger
          value="exclusive"
          className="hover:bg-purple-500 hover:text-black focus:bg-purple-500 focus:text-black"
        >
          Membership
        </TabsTrigger>
        <TabsTrigger
          value="organizers"
          className="hover:bg-purple-500 hover:text-black focus:bg-purple-500 focus:text-black"
        >
          Join Organizers
        </TabsTrigger>
      </TabsList>

      <TabsContent value="social">
        <Card className="bg-black text-white p-4 border border-purple-500 border-opacity-35">
          <CardHeader>
            <CardTitle className="text-purple-500">
              Connect with Our Community
            </CardTitle>
            <CardDescription className="text-gray-300">
              Follow us on social media and join our groups.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4 ">
            <div className="space-y-2">
              <a
                href="https://www.linkedin.com/company/haramaya-university-developers-community"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-purple-500 text-black hover:bg-purple-700 inline-flex items-center justify-center px-4 py-2 rounded-md font-semibold"
              >
                <LinkedinIcon className="mr-2 h-4 w-4" />
                Follow us on LinkedIn
              </a>
            </div>

            <div className="space-y-2">
              <a
                href="https://t.me/hudevhub"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-purple-500 text-black hover:bg-purple-700 inline-flex items-center justify-center px-4 py-2 rounded-md font-semibold"
              >
                <SendIcon className="mr-2 h-4 w-4" />
                Join our Telegram
              </a>
            </div>

            <div className="flex flex-col items-center space-y-4 p-4">
              <img
                src="/qr-code.jpg"
                alt="Telegram QR Code"
                className="w-32 h-32 object-contain"
              />
              <h2 className="text-gray-300 font-semi">
                Scan this QR code to join our Telegram group!
              </h2>
            </div>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="exclusive">
        <Card className="bg-black text-white">
          <CardHeader>
            <CardTitle className="text-purple-500">
              Exclusive Membership Registration
            </CardTitle>
            <CardDescription className="text-gray-300">
              Register for exclusive access to resources, events, and more.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-purple-500">
                Name
              </Label>
              <Input
                id="name"
                placeholder="Your full name"
                className="bg-gray-800 text-white border-gray-700"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="text-purple-500">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="Your email address"
                className="bg-gray-800 text-white border-gray-700"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="student-id" className="text-purple-500">
                Student ID
              </Label>
              <Input
                id="student-id"
                placeholder="Your student ID number"
                className="bg-gray-800 text-white border-gray-700"
              />
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full bg-purple-500 text-black hover:bg-purple-700">
              Register Now
            </Button>
          </CardFooter>
        </Card>
      </TabsContent>

      <TabsContent value="organizers">
        <Card className="bg-black text-white">
          <CardHeader>
            <CardTitle className="text-purple-500">
              Join the Organizers Team
            </CardTitle>
            <CardDescription className="text-gray-300">
              Fill out this form to become part of our organizing team.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-purple-500">
                Name
              </Label>
              <Input
                id="name"
                placeholder="Your full name"
                className="bg-gray-800 text-white border-gray-700"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="text-purple-500">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="Your email address"
                className="bg-gray-800 text-white border-gray-700"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="department" className="text-purple-500">
                Department
              </Label>
              <Input
                id="department"
                placeholder="Which department are you in?"
                className="bg-gray-800 text-white border-gray-700"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="year" className="text-purple-500">
                Year of Study
              </Label>
              <Input
                id="year"
                placeholder="Year of study"
                className="bg-gray-800 text-white border-gray-700"
              />
            </div>
            <div className="space-y-2 mb-4">
              <Label htmlFor="resume" className="text-purple-500">
                Upload Resume
              </Label>
              <div className="flex items-center space-x-4">
                <label
                  htmlFor="resume"
                  className="bg-gray-700 border-purple-500 text-purple-500 px-4 py-2 rounded-md cursor-pointer hover:bg-purple-700 transition duration-200"
                >
                  Choose File
                </label>
                <span id="file-selected" className="text-gray-400 text-sm">
                  No file chosen
                </span>
                <Input
                  id="resume"
                  type="file"
                  accept=".pdf,.doc,.docx"
                  className="hidden"
                  onChange={(e) => {
                    const fileName =
                      e.target.files[0]?.name || "No file chosen";
                    document.getElementById("file-selected").textContent =
                      fileName;
                  }}
                />
              </div>
              <span className="text-gray-400 text-sm">
                PDF, DOC, or DOCX
              </span>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full bg-purple-500 text-black hover:bg-purple-700">
              Submit Application
            </Button>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  );
}
