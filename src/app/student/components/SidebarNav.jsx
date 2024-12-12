"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { LogOut, Search, Menu, X, Sparkles, Code, Bell, GraduationCap, GraduationCapIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function Navigation({ onLogout, isLoading, navItems }) {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState(null);
  const pathname = usePathname();

  const filteredNavItems =
    navItems?.filter((item) =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase())
    ) || [];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const SidebarContent = () => (
    <div className="flex flex-col h-full">
      <div className="p-6 border-b border-gray-800/50">
        <Link href="/student" className="flex items-center space-x-3">
          <div className="relative h-10 w-10 rounded-xl flex items-center justify-center">
            <GraduationCapIcon className="h-5 w-5 text-white" />
          </div>
          <div>
            <h3 className="font-semibold text-white">HUDC </h3>
            <p className="text-xs text-gray-400">Student Dashboard</p>
          </div>
        </Link>
      </div>

      <div className="p-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
          <Input
            type="search"
            placeholder="Search menu..."
            className="pl-9 bg-gray-900/50 border-gray-800/50 focus:ring-blue-500/20 focus:border-blue-500/40"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      <ScrollArea className="flex-1 px-3">
        <nav className="space-y-1">
          {filteredNavItems.map((item) => (
            <Link
              key={item.title}
              href={item.url}
              className={`group flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                pathname === item.url
                  ? "bg-gradient-to-r from-blue-600/20 to-purple-600/20 text-white"
                  : "text-gray-400 hover:bg-gray-800/30 hover:text-white"
              }`}
              onMouseEnter={() => setActiveSection(item.title)}
              onMouseLeave={() => setActiveSection(null)}
            >
              <div className={`relative ${pathname === item.url ? "text-blue-500" : "text-gray-500 group-hover:text-blue-500"}`}>
                <item.icon className="h-5 w-5" />
                {activeSection === item.title && (
                  <motion.div
                    layoutId="highlight"
                    className="absolute -inset-1 rounded-lg bg-blue-500/10"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </div>
              <span className="text-sm font-medium">{item.title}</span>
              {pathname === item.url && (
                <div className="ml-auto flex items-center space-x-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-blue-500"></span>
                </div>
              )}
            </Link>
          ))}
        </nav>
      </ScrollArea>

      <div className="p-4 mt-auto border-t border-gray-800/50">
        <Button
          variant="ghost"
          className="w-full justify-start text-gray-400 hover:text-red-400 hover:bg-red-500/10 rounded-xl py-6"
          onClick={onLogout}
          disabled={isLoading}
        >
          <LogOut className="mr-2 h-4 w-4" />
          <span>{isLoading ? "Logging out..." : "Logout"}</span>
        </Button>
      </div>
    </div>
  );

  return (
    <>
      <div className="hidden lg:block  inset-y-0 left-0 w-80 bg-gray-900/95 backdrop-blur-xl shadow-2xl border-r border-gray-800/50 z-50">
        <SidebarContent />
      </div>

      <div
        className={`fixed top-0 left-0 right-0 z-50 lg:hidden transition-all duration-300 ease-in-out ${
          isScrolled ? "bg-gray-900/95 backdrop-blur-xl shadow-xl" : "bg-transparent"
        }`}
      >
        <div className="flex items-center justify-between p-4">
          <Link href="/student" className="flex items-center space-x-3">
            <div className="relative h-9 w-9 rounded-xl 0 flex items-center justify-center">
            <GraduationCapIcon className="h-5 w-5 text-white" />
            </div>
            <span className="font-semibold text-white">HUDC</span>
          </Link>
          <Button
            variant="ghost"
            size="icon"
            className="text-gray-400 hover:text-white hover:bg-gray-800/50 rounded-xl"
            onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
          >
            {isMobileNavOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileNavOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
              onClick={() => setIsMobileNavOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ type: "spring", bounce: 0.2 }}
              className="fixed top-20 left-4 right-4 p-4 bg-gray-900/95 backdrop-blur-xl rounded-2xl border border-gray-800/50 shadow-2xl z-50 lg:hidden"
            >
              <div className="space-y-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
                  <Input
                    type="search"
                    placeholder="Search menu..."
                    className="pl-9 bg-gray-900/50 border-gray-800/50"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                <nav className="space-y-1">
                  {filteredNavItems.map((item) => (
                    <Link
                      key={item.title}
                      href={item.url}
                      onClick={() => setIsMobileNavOpen(false)}
                      className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                        pathname === item.url
                          ? "bg-gradient-to-r from-blue-600/20 to-purple-600/20 text-white"
                          : "text-gray-400 hover:bg-gray-800/30 hover:text-white"
                      }`}
                    >
                      <item.icon className={`h-5 w-5 ${pathname === item.url ? "text-blue-500" : ""}`} />
                      <span className="text-sm font-medium">{item.title}</span>
                      {pathname === item.url && (
                        <div className="ml-auto">
                          <span className="h-1.5 w-1.5 rounded-full bg-blue-500"></span>
                        </div>
                      )}
                    </Link>
                  ))}
                </nav>
                <div className="pt-4 border-t border-gray-800/50">
                  <Button
                    variant="ghost"
                    className="w-full justify-start text-gray-400 hover:text-red-400 hover:bg-red-500/10 rounded-xl"
                    onClick={onLogout}
                    disabled={isLoading}
                  >
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>{isLoading ? "Logging out..." : "Logout"}</span>
                  </Button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}