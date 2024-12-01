"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { LogOut, Search, Menu, X, ChevronRight, Sparkles, Layers } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar } from "@/components/ui/avatar";

export default function SidebarNavigation({ navItems, onLogout, isLoading }) {
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const pathname = usePathname();

  const toggleMobileSidebar = () => setIsMobileSidebarOpen(!isMobileSidebarOpen);

  const filteredNavItems = navItems?.filter((item) =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  ) || [];

  const sidebarContent = (
    <div className="flex flex-col h-full bg-black">
      <div className="relative border-b border-gray-800/50">
        <div className="p-6 space-y-6">
          <Link href="/student" className="flex items-center space-x-3 group">
            <div className="relative flex items-center justify-center">
              <div className="absolute inset-0 rounded-xl bg-black-to-r from-blue-500/20 to-purple-500/20 blur-xl group-hover:from-blue-500/30 group-hover:to-purple-500/30 transition-all duration-300" />
              <div className="relative h-12 w-12 rounded-xl bg-gray-900 flex items-center justify-center">
                <Layers className="h-6 w-6 text-gray-400 group-hover:scale-110 transition-all duration-300" />
              </div>
            </div>
            <div className="space-y-1">
              <h1 className="font-bold text-xl bg-clip-text text-center text-transparent bg-gradient-to-r text-white transition-all duration-300">
                        HUDC
              </h1>
              <p className="text-xs flex items-center text-gray-400">
                <Sparkles className="h-3 w-3 mr-1" />
                Student Dashboard
              </p>
            </div>
          </Link>

          <div className="relative group">
            <div className="absolute inset-0 bg-black rounded-lg blur group-hover:opacity-75 transition-opacity duration-300" />
            <div className="relative">
              <Search
                className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500"
                aria-hidden="true"
              />
              <Input
                type="search"
                placeholder="Search navigation..."
                className="pl-10 bg-gray-900/50 border-gray-700/50 text-gray-300 rounded-lg focus:ring-2  transition-all duration-300"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                aria-label="Search navigation items"
              />
            </div>
          </div>
        </div>
      </div>

      <ScrollArea className="flex-grow px-3">
        <nav className="space-y-1 py-3">
          {filteredNavItems.map((item) => (
            <Link
              key={item.title}
              href={item.url}
              className={`group flex items-center gap-3 py-3 px-4 rounded-lg transition-all duration-300 ${
                pathname === item.url 
                  ? "bg-black text-white" 
                  : "text-gray-400 hover:bg-gray-800/50 hover:text-white"
              }`}
              aria-current={pathname === item.url ? "page" : undefined}
            >
              {item.icon &&
                React.createElement(item.icon, {
                  className: `h-5 w-5 ${
                    pathname === item.url 
                      ? "text-gray-400" 
                      : "text-gray-500 group-hover:text-gray-400"
                  } transition-colors duration-300`,
                  "aria-hidden": "true",
                })}
              <span className="text-sm font-medium">{item.title}</span>
              {pathname === item.url && (
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="ml-auto"
                >
                  <ChevronRight className="h-4 w-4 " />
                </motion.div>
              )}
            </Link>
          ))}
        </nav>
      </ScrollArea>

      <div className="border-t border-gray-800/50 p-4 bg-gradient-to-t from-gray-900 to-transparent">
        <Button
          variant="ghost"
          className="w-full justify-start text-gray-400 hover:text-red-400 hover:bg-gray-800/50 transition-all duration-300 group"
          onClick={onLogout}
          disabled={isLoading}
        >
          <LogOut className="mr-2 h-4 w-4 group-hover:rotate-12 transition-transform duration-300" aria-hidden="true" />
          <span className="text-sm font-medium">
            {isLoading ? "Logging out..." : "Logout"}
          </span>
        </Button>
      </div>
    </div>
  );

  return (
    <>
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4  text-white p-2 rounded-md z-50">
        Skip to main content
      </a>

      <Button
        variant="ghost"
        size="icon"
        className="fixed top-4 left-4 z-50 lg:hidden bg-black shadow-lg rounded-full w-10 h-10 hover:bg-gray-800/90 transition-all duration-300"
        onClick={toggleMobileSidebar}
        aria-label="Toggle sidebar"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={isMobileSidebarOpen ? "close" : "open"}
            initial={{ opacity: 0, rotate: -180 }}
            animate={{ opacity: 1, rotate: 0 }}
            exit={{ opacity: 0, rotate: 180 }}
            transition={{ duration: 0.3 }}
          >
            {isMobileSidebarOpen ? <X className="h-4 w-4 text-gray-300" /> : <Menu className="h-4 w-4 text-gray-300" />}
          </motion.div>
        </AnimatePresence>
      </Button>

      <div className="hidden lg:block  inset-y-0 left-0 z-40 w-72 bg-gray-900/95 backdrop-blur-xl border-r border-gray-800/50 shadow-2xl">
        {sidebarContent}
      </div>

      <AnimatePresence>
        {isMobileSidebarOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-30 bg-black/60 backdrop-blur-sm lg:hidden"
              onClick={toggleMobileSidebar}
            />
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed inset-y-0 left-0 z-40 w-72 bg-gray-900/95 backdrop-blur-xl border-r border-gray-800/50 shadow-2xl lg:hidden"
            >
              {sidebarContent}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}