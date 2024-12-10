"use client";

import { NavBar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { StatsSection } from "@/components/StatsSection";
import { CommunityTabsComponent } from "@/components/community-tabs";
import { UpcomingEventsTab } from "@/components/UpcomingEvents";
import { ContactForm } from "@/components/ContactUs";
import FAQs from "@/components/FAQ";

export default function LandingPage() {
  return (
    <div className="relative min-h-screen bg-black">
      <div className="fixed inset-0 -z-10 h-full w-full bg-grid-pattern">
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/0"></div>
      </div>

      <header className="fixed top-0 w-full z-50 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <NavBar />
        </div>
      </header>

      <main className="relative">
        <section id="hero" className="py-16 relative">
          <Hero />
        </section>


        <section id="features" className="py-8 relative">
          <Features />
        </section>

        <section id="community" className="py-16 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-4 mb-4">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-gradient">
                How to join?
              </h2>
              <p className="max-w-2xl mx-auto text-lg text-zinc-400">
                Stay connected and engaged with our vibrant developer community
              </p>
            </div>
            <div className="space-y-6">
              <CommunityTabsComponent />
            </div>
          </div>
        </section>
        <section id="stats" className="relative px-8 mb-8">
          <StatsSection />
        </section>

        <section id="contact" className="relative bg-black/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <ContactForm />
              <FAQs />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}