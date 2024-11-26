"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { LogOut, Search, Menu, X, ChevronRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function SidebarNavigation({ navItems, onLogout, isLoading }) {
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const pathname = usePathname();

  const toggleMobileSidebar = () => setIsMobileSidebarOpen(!isMobileSidebarOpen);

  const filteredNavItems = navItems.filter((item) =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const sidebarContent = (
    <div className="flex flex-col h-full">
      <div className="border-b border-gray-800 p-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-3">
            <div
              className="relative h-10 w-10 rounded-lg bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center overflow-hidden group"
              aria-hidden="true"
            >
              <span className="relative z-10 text-white font-bold text-lg">S</span>
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
            </div>
            <span className="font-semibold text-lg text-gray-100">
              Student Dashboard
            </span>
          </Link>
        </div>
        <div className="mt-6 relative">
          <Search
            className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500"
            aria-hidden="true"
          />
          <Input
            type="search"
            placeholder="Search navigation..."
            className="pl-10 bg-gray-900 border-gray-700 text-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            aria-label="Search navigation items"
          />
        </div>
      </div>

      <ScrollArea className="flex-grow px-3">
        <nav className="space-y-1 py-3">
          {filteredNavItems.map((item) => (
            <Link
              key={item.title}
              href={item.url}
              className={`group flex items-center gap-3 py-2 px-3 rounded-lg transition-all duration-200 hover:bg-gray-800 ${
                pathname === item.url 
                  ? "bg-gray-800 text-white" 
                  : "text-gray-400 hover:text-white"
              }`}
              aria-current={pathname === item.url ? "page" : undefined}
            >
              {item.icon &&
                React.createElement(item.icon, {
                  className: `h-4 w-4 ${
                    pathname === item.url 
                      ? "text-white" 
                      : "text-gray-500 group-hover:text-white"
                  }`,
                  "aria-hidden": "true",
                })}
              <span className="text-sm font-medium">{item.title}</span>
              {pathname === item.url && (
                <ChevronRight className="ml-auto h-4 w-4 text-white" />
              )}
            </Link>
          ))}
        </nav>
      </ScrollArea>

      <div className="border-t border-gray-800 p-4">
        <Button
          variant="ghost"
          className="w-full justify-start text-gray-400 hover:text-red-400 hover:bg-gray-800 transition-all duration-200"
          onClick={onLogout}
          disabled={isLoading}
        >
          <LogOut className="mr-2 h-4 w-4" aria-hidden="true" />
          <span className="text-sm font-medium">
            {isLoading ? "Logging out..." : "Logout"}
          </span>
        </Button>
      </div>
    </div>
  );

  return (
    <>
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white p-2 rounded-md z-50">
        Skip to main content
      </a>

      <Button
        variant="ghost"
        size="icon"
        className="fixed top-4 left-4 z-50 lg:hidden bg-black/50 backdrop-blur-lg border border-gray-800 shadow-lg rounded-full w-10 h-10"
        onClick={toggleMobileSidebar}
        aria-label="Toggle sidebar"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={isMobileSidebarOpen ? "close" : "open"}
            initial={{ opacity: 0, rotate: -180 }}
            animate={{ opacity: 1, rotate: 0 }}
            exit={{ opacity: 0, rotate: 180 }}
            transition={{ duration: 0.2 }}
          >
            {isMobileSidebarOpen ? <X className="h-4 w-4 text-gray-300" /> : <Menu className="h-4 w-4 text-gray-300" />}
          </motion.div>
        </AnimatePresence>
      </Button>

      <div className="hidden lg:block  inset-y-0 left-0 z-40 w-72 bg-black/80 backdrop-blur-lg border-r border-gray-800 shadow-lg">
        {sidebarContent}
      </div>

      <AnimatePresence>
        {isMobileSidebarOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-30 bg-black/50 backdrop-blur-sm lg:hidden"
              onClick={toggleMobileSidebar}
            />
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed inset-y-0 left-0 z-40 w-72 bg-black/80 backdrop-blur-lg border-r border-gray-800 shadow-lg lg:hidden"
            >
              {sidebarContent}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

