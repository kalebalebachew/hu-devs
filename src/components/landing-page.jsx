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
import { NavBar } from "./layout/Navbar";

export default function LandingPage() {
  return (
    <div
      className="min-h-screen bg-black text-white font-nunito bg-opacity-90 h-full w-full"
      style={{
        backgroundImage: "radial-gradient(#5a3fff 0.5px, #141414 0.5px)",
        backgroundSize: "10px 10px",
      }}
    >
      <header className=" text-purple-500 py-4" style={{
        backgroundImage: "radial-gradient(#5a3fff 0.5px, #141414 0.5px)",
        backgroundSize: "10px 10px",
      }}>
        <div className="w-5/6 mx-auto flex items-center justify-between">
         
         <NavBar></NavBar>
        </div>
      </header>

      <main className="flex-1 ">
        <section id="home"
          className="py-24 md:py-36 lg:py-40 xl:py-24 text-white bg-opacity-90 bg-black w-full"
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
              <p className="mx-auto max-w-[700px] text-xl md:text-2xl font-light text-gray-300">
                Learning and building together at Haramaya university <br/> join our
                growing community of student developers.
              </p>
            </div>
            <div className="space-y-4">
              <a
                href="https://t.me/hudevhub"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-purple-500 text-black hover:bg-purple-700 font-semibold text-lg px-6 py-3 rounded-lg flex items-center justify-center space-x-2"
              >
                <SendIcon className="h-5 w-5" />
                <span>Join our Telegram Channel</span>
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
          </div>
        </section>

        <section
          id="contact"
          className="py-12 md:py-24 lg:py-12 bg-black text-white"
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
                    className="w-3/4 px-2 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 bg-gray-800 text-white"
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
                    className="w-3/4 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 bg-gray-800 text-white"
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
                    className="w-3/4 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 bg-gray-800 text-white"
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
                    className="w-3/4 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 bg-gray-800 text-white"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-3/4 bg-purple-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-purple-700 transition duration-200"
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
