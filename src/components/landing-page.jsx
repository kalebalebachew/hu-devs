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
import CourseCatalogPage from "@/app/student/courseCatalog/page";
import { Courses } from "./Courses";
import DashboardPreview from "./DashboardPreview";

export default function LandingPage() {
  return (
    <div className="relative min-h-screen bg-background">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -left-4 top-0 h-[500px] w-[500px] rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute -right-4 bottom-0 h-[500px] w-[500px] rounded-full bg-secondary/5 blur-3xl" />
      </div>

      {/* Navbar */}
      <header className="fixed top-0 w-full z-50 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <NavBar />
        </div>
      </header>

      <main className="relative">
        {/* Dashboard Preview */}
        <section id="dashboard-preview" className="relative px-8 pt-16">
          <DashboardPreview dashboardImage="/dark-dashboard.png" />
        </section>

        {/* Features Section */}
        <section id="features" className=" relative bg-card">
          <Features />
        </section>
        {/* Community Section */}
        <section id="community" className="pt-16 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-4 mb-4">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-primary">
                How to Join Our Community
              </h2>
              <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
                Connect with like-minded peers and become part of a vibrant
                developer network at HUDC.
              </p>
            </div>
            <div className="space-y-6">
              <CommunityTabsComponent />
            </div>
          </div>
        </section>

        {/* Courses Section */}
        <section id="courses" className="relative px-8 py-16">
          <div className="max-w-7xl mx-auto">
            <Courses />
          </div>
        </section>

        {/* Contact & FAQs Section */}
        <section id="contact" className="relative bg-card py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <ContactForm />
              <FAQs />
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
