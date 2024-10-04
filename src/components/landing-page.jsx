"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Code,
  Users,
  Zap,
  ChevronRight,
  BookOpen,
  Globe,
  Rocket,
} from "lucide-react";
import Link from "next/link";

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-black font-nunito">
      <header className="px-4 lg:px-6 h-16 flex items-center bg-blue-800 text-white">
        <a className="flex items-center justify-center" href="#">
          <Code className="h-6 w-6" />
          <span className="ml-2 text-lg font-bold">Haramaya Developers</span>
        </a>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <a
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#features"
          >
            why join us
          </a>
          <a
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#about"
          >
            About
          </a>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-blue-800 text-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-4xl font-extrabold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none">
                  Haramaya University Developers Community
                </h1>
                <p className="mx-auto max-w-[700px] text-xl md:text-2xl font-light">
                  Connecting, learning, and building together. Join our vibrant
                  community of student developers.
                </p>
              </div>
              <div className="space-x-4">
                <a
                  href="https://t.me/hudevhub"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="bg-white text-blue-600 hover:bg-blue-50 font-semibold text-lg px-6 py-3 rounded-lg">
                    Become a member
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>
        <section
          id="features"
          className="w-full py-12 md:py-24 lg:py-32 bg-white"
        >
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-blue-600">
              Why Join Us?
            </h2>
            <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
              <div className="flex flex-col items-center space-y-2 p-6 bg-blue-50 rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-105">
                <Users className="h-12 w-12 text-blue-600" />
                <h3 className="text-xl font-bold text-black">Networking</h3>
                <p className="text-sm text-gray-600 text-center">
                  Connect with like-minded developers and build lasting
                  relationships.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 p-6 bg-blue-50 rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-105">
                <Zap className="h-12 w-12 text-blue-600" />
                <h3 className="text-xl font-bold text-black">
                  Skill Development
                </h3>
                <p className="text-sm text-gray-600 text-center">
                  Enhance your coding skills through workshops, projects, and
                  mentorship.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 p-6 bg-blue-50 rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-105">
                <Code className="h-12 w-12 text-blue-600" />
                <h3 className="text-xl font-bold text-black">
                  Project Collaboration
                </h3>
                <p className="text-sm text-gray-600 text-center">
                  Work on real-world projects and build your portfolio.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section
          id="about"
          className="w-full py-12 md:py-24 lg:py-32 bg-blue-800"
        >
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-white">
              About Us
            </h2>
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-center space-y-2 text-center">
                <BookOpen className="h-12 w-12 text-white  mb-4" />
                <h3 className="text-xl font-bold text-white">Our Mission</h3>
                <p className="text-white">
                  To create a collaborative environment where student developers
                  can learn, grow, and innovate together.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 text-center">
                <Globe className="h-12 w-12 text-white mb-4" />
                <h3 className="text-xl font-bold text-white">Our Community</h3>
                <p className="text-white">
                  A diverse group of developers from haramaya university
                  with a passion for tech and innovation
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 text-center">
                <Rocket className="h-12 w-12 text-white mb-4" />
                <h3 className="text-xl font-bold text-white">Our Vision</h3>
                <p className="text-white">
                  To become a platform for tech innovation and talent
                  development in Haramaya University and beyond.
                </p>
              </div>
            </div>{" "}
          </div>
        </section>
        <section
          id="join"
          className="w-full py-12 md:py-24 lg:py-32 bg-white text-blue-600"
        >
          <div className="container px-4 md:px-6 flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-xl font-bold tracking-tighter sm:text-2xl md:text-2xl">
              Scan this QR code to join our Telegram group or click the
              button below!
              </h1>
            </div>

            <img
              src="/qr-code.png"
              alt="Telegram QR Code"
              className="w-64 h-64 object-contain"
            />


            <a
              href="https://t.me/hudevhub"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-blue-600 text-white hover:bg-blue-700">
                Join our Telegram Group
              </Button>
            </a>
          </div>
        </section>
      </main>
      <footer className="py-6 w-full px-4 md:px-6 bg-blue-800 text-white">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-white mb-4 md:mb-0">
            © 2024 Haramaya University Developers Community. All rights
            reserved.
          </p>
          <nav className="flex gap-4">
            <a
              className="text-sm hover:text-blue-600 transition-colors"
              href="#"
            >
              Contact Us
            </a>
          </nav>
        </div>
      </footer>
    </div>
  );
}
