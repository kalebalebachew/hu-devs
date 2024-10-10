/* eslint-disable @next/next/no-img-element */
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
  InstagramIcon,
} from "lucide-react";
import { LinkedinIcon, SendIcon } from "lucide-react";
import { CommunityTabsComponent } from "./community-tabs";

export default function LandingPage() {
  return (
    <div
      className="min-h-screen bg-black text-white font-nunito bg-opacity-90 h-full w-full"
      style={{
        backgroundImage: "radial-gradient(#5a3fff 0.5px, #141414 0.5px)",
        backgroundSize: "10px 10px",
      }}
    >
      <header className="bg-black text-purple-500 py-4">
        <div className="w-5/6 mx-auto flex items-center justify-between">
          <div>
            <a className="flex gap-x-2" href="/">
              <Code className="h-6 w-6 text-purple-500" />
              <p className="text-lg font-bold">HUDC</p>
            </a>
          </div>
          <nav className="space-x-4 sm:space-x-6">
            <a
              className="font-bold hover:underline underline-offset-4 text-purple-500"
              href="#features"
            >
              Why join us
            </a>
            <a
              className="font-bold hover:underline underline-offset-4 text-purple-500"
              href="#about"
            >
              About
            </a>
            <a
              className="font-bold hover:underline underline-offset-4 text-purple-500"
              href="#contact"
            >
              Contact
            </a>
          </nav>
        </div>
      </header>

      <main className="flex-1  ">
        <section
          className="py-12 md:py-24 lg:py-32 xl:py-48 text-white bg-opacity-90 bg-black h-full w-full"
          style={{
            backgroundImage: "radial-gradient(#5a3fff 0.5px, #141414 0.5px)",
            backgroundSize: "10px 10px",
          }}
        >
          <div className="flex flex-col items-center gap-y-8">
            <div className="space-y-2 text-center">
              <h1 className="text-4xl font-extrabold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                Haramaya University Developers <br></br> Community
              </h1>
              <p className="mx-auto max-w-[700px] text-xl md:text-2xl font-light text-gray-300">
                Learning and building together at Haramaya University. Join our
                growing community of student developers.
              </p>
            </div>
            <div>
              <a
                href="https://t.me/hudevhub"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="bg-purple-500 text-black hover:bg-purple-700 font-semibold text-lg px-6 py-3 rounded-lg">
                  Become a member
                </div>
              </a>
            </div>
          </div>
        </section>

        <section
          id="combined"
          className="py-12 md:py-24 lg:py-8 bg-black text-white"
        >
          <div className="w-5/6 mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-purple-500"></h2>

            <div className="flex flex-col md:flex-row gap-12">
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold mb-6 text-purple-500">
                    Why Join Us?
                  </h3>
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <Users className="h-8 w-8 text-purple-500" />
                      <div>
                        <h4 className="text-xl font-bold">Networking</h4>
                        <p className="text-gray-300">
                          Connect and Network with student developers at
                          Haramaya University and build lasting relationships.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <Zap className="h-8 w-8 text-purple-500" />
                      <div>
                        <h4 className="text-xl font-bold">Skill Development</h4>
                        <p className="text-gray-300">
                          Enhance your coding skills through workshops,
                          hackathons projects, and our mentorship programs
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <Code className="h-8 w-8 text-purple-500" />
                      <div>
                        <h4 className="text-xl font-bold">
                          Project Collaboration
                        </h4>
                        <p className="text-gray-300">
                          Work on real-world open-source projects with student
                          developers in our community.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-purple-500">
                    About Us
                  </h3>
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <BookOpen className="h-8 w-8 text-purple-500 mb-4" />
                      <div>
                        <h4 className="text-xl font-bold">Our Mission</h4>
                        <p className="text-gray-300">
                          To create a collaborative environment where student
                          developers can learn & innovate together.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <Globe className="h-8 w-8 text-purple-500 mb-4" />
                      <div>
                        <h4 className="text-xl font-bold">Our Community</h4>
                        <p className="text-gray-300">
                          A diverse group of developers from Haramaya University
                          with a passion for tech and innovation.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <Rocket className="h-8 w-8 text-purple-500 mb-4" />
                      <div>
                        <h4 className="text-xl font-bold">Our Vision</h4>
                        <p className="text-gray-300">
                          To become a platform for tech and talent development
                          in Haramaya University and beyond.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="join"
          className="py-12 md:py-24 lg:py-8 bg-black text-purple-500 flex items-center justify-center"
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
          </div>
        </section>

        <section
          id="contact"
          className="py-12 md:py-24 lg:py-32 bg-black text-white"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 w-5/6 mx-auto">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-purple-500">
                We would love to hear from you.
              </h2>
              <form>
                <div className="mb-4">
                  <label
                    className="block text-lg font-medium mb-2 text-white"
                    htmlFor="firstName"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    className="w-full px-2 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 bg-gray-800 text-white"
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block text-lg font-medium mb-2 text-white"
                    htmlFor="phoneNumber"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phoneNumber"
                    name="phoneNumber"
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 bg-gray-800 text-white"
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block text-lg font-medium mb-2 text-white"
                    htmlFor="email"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 bg-gray-800 text-white"
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block text-lg font-medium mb-2 text-white"
                    htmlFor="message"
                  >
                    Leave Us a Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 bg-gray-800 text-white"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-purple-500 text-black font-semibold py-2 px-4 rounded-md hover:bg-purple-700 transition duration-200"
                >
                  Send Message
                </button>
              </form>
            </div>
            <div>
              <iframe
                title="Haramaya University Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3935.9816181743527!2d42.034773374830586!3d9.423014382697337!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1631a5a8e441e64d%3A0xdafe11071687f9d!2sHaramaya%20University!5e0!3m2!1sen!2set!4v1728500560513!5m2!1sen!2set"
                width="100%"
                height="100%"
                className="rounded-md border-0"
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-6 w-full px-4 md:px-6 bg-gray-900 text-white">
        <div className="container mx-auto flex flex-col justify-center items-center">
          <p className="text-sm text-purple-500 mb-4 md:mb-0">
            © 2024 Haramaya University Developers Community. All rights
            reserved.
          </p>
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
        </div>
      </footer>
    </div>
  );
}
