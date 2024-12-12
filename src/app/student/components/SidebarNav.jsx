"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { LogOut, Search, Menu, X, Sparkles, Code } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function Navigation({ onLogout, isLoading, navItems }) {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);
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
      <div className="p-4 border-b border-gray-800/50">
        <Link href="/student" className="flex items-center space-x-3"></Link>
      </div>
      <div className="p-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
          <Input
            type="search"
            placeholder="Search..."
            className="pl-9 bg-gray-900/50 border-gray-800/50"
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
              className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-all ${
                pathname === item.url
                  ? "bg-gray-800/50 text-white"
                  : "text-gray-400 hover:bg-gray-800/30 hover:text-white"
              }`}
            >
              <item.icon className="h-4 w-4" />
              <span className="text-sm">{item.title}</span>
            </Link>
          ))}
        </nav>
      </ScrollArea>
      <div className="p-4 border-t border-gray-800/50">
        <Button
          variant="ghost"
          className="w-full justify-start text-gray-400 hover:text-red-400"
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
      <div className="hidden lg:block  inset-y-0 left-0 w-98 bg-background shadow-xl z-50 transition-all duration-300 ease-in-out">
        <SidebarContent />
      </div>

      <div
        className={`fixed  top-0 left-0 right-0 z-50 lg:hidden transition-all duration-300 ease-in-out ${
          isScrolled ? "bg-gray-900/95 shadow-md" : "bg-transparent"
        }`}
      >
        <div className="flex items-center justify-between p-4  mb-24">
          <Link href="/student" className="flex items-center space-x-2 ">
            <div className="relative  h-8 w-8 rounded-xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center">
              <Sparkles className="h-4 w-4 text-white" />
            </div>
            <span className="font-semibold text-white">HUDC</span>
          </Link>
          <Button
            variant="ghost"
            size="icon"
            className="text-gray-400 hover:text-white"
            onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
          >
            <Menu className="h-5 w-5" />
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
              className="fixed top-16 left-4 right-4 p-4  bg-gray-900/95 backdrop-blur-lg rounded-2xl border border-gray-800/50 shadow-xl z-50 lg:hidden"
            >
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-white font-semibold">Menu</h2>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-gray-400 hover:text-white"
                  onClick={() => setIsMobileNavOpen(false)}
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>
              <nav className="space-y-1">
                {filteredNavItems.map((item) => (
                  <Link
                    key={item.title}
                    href={item.url}
                    onClick={() => setIsMobileNavOpen(false)}
                    className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all ${
                      pathname === item.url
                        ? "bg-gray-800/50 text-white"
                        : "text-gray-400 hover:bg-gray-800/30 hover:text-white"
                    }`}
                  >
                    <item.icon className="h-4 w-4" />
                    <span className="text-sm">{item.title}</span>
                  </Link>
                ))}
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
