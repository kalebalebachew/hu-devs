/* eslint-disable @next/next/no-img-element */
"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { LinkedinIcon, SendIcon } from "lucide-react";
import { CommunityTabsComponent } from "./community-tabs";
import { NavBar } from "./layout/Navbar";
import { Label } from "@radix-ui/react-label";
import { Footer } from "./layout/Footer";
import { Contributors } from "./contributors";
import { UpcomingEventsTab } from "./UpcomingEvents";
import { CTA } from "./CTA";
import { ContactForm } from "./ContactUs";

export default function LandingPage() {
  return (
    <div
      className="min-h-screen bg-black text-white font-nunito bg-opacity-90 h-full w-full"
      style={{
        backgroundImage: "radial-gradient(#5a3fff 0.5px, #141414 0.5px)",
        backgroundSize: "10px 10px",
      }}
    >
      <header
        className=" text-purple-500 py-4"
        style={{
          backgroundImage: "radial-gradient(#5a3fff 0.5px, #141414 0.5px)",
          backgroundSize: "10px 10px",
        }}
      >
        <div className="w-5/6 mx-auto flex items-center justify-between">
          <NavBar></NavBar>
        </div>
      </header>

      <main className="flex-1 ">
        <section
          id="home"
          className="pt-36 pb-18 md:pb-4 lg:pb-8 xl:pb-8 text-white bg-opacity-90 bg-black w-full"
          style={{
            backgroundImage: "radial-gradient(#5a3fff 0.5px, #141414 0.5px)",
            backgroundSize: "10px 10px",
          }}
        >
          <div className="flex flex-col items-center justify-center gap-y-8 h-full">
            <div className="space-y-4 text-center">
              <h1 className="text-4xl font-extrabold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                Haramaya University <br /> Developers Community
              </h1>
              <p className="mx-auto max-w-[700px] text-xl md:text-xl font-light text-gray-300">
                Learning and building together at Haramaya University and beyond{" "}
                <br /> join our growing community of student developers.
              </p>
            </div>
            <div className="space-y-4">
              <a
                href="https://t.me/hudevhub"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-transparent text-white hover:bg-black text-lg px-6 py-3 rounded-3xl flex items-center justify-center space-x-2 border border-purple-500  "
              >
                <SendIcon className="h-5 w-5" />
                <span>Telegram Channel</span>
              </a>
            </div>
          </div>
        </section>
        <section
          id="join"
          className=" bg-black text-white font-nunito flex items-center justify-center bg-opacity-90 p-12 w-full"
          style={{
            backgroundImage: "radial-gradient(#5a3fff 0.5px, #141414 0.5px)",
            backgroundSize: "10px 10px",
          }}
        >
          <div className="w-full max-w-6xl text-center px-2">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold ">
              Join Our Community
            </h2>
            <p className="text-lg md:text-xl font-light mb-4 text-gray-300">
              Be a part of something bigger. Connect with fellow developers and
              learn together!
            </p>

            <div className="flex justify-center ">
              <CommunityTabsComponent />
            </div>
            <div className="flex justify-center ">
              <UpcomingEventsTab />
            </div>
          </div>
        </section>

        <section
          id="contact"
          className="bg-black text-white"
          style={{
            backgroundImage: "radial-gradient(#5a3fff 0.5px, #141414 0.5px)",
            backgroundSize: "10px 10px",
          }}
        >
          <div className="flex flex-col md:flex-row gap-20 w-5/6 mx-auto items-start">
            <div className="flex-1">
              <ContactForm />
            </div>
            <div className="flex-1">
              <CTA />
            </div>
          </div>
        </section>
      </main>

      <div className="flex items-center justify-center">
        <div className="p-8 bg-transparent shadow-lg">
          <Contributors className="flex items-center justify-center"></Contributors>
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
}
