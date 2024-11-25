"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LogOut, Search, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function SidebarNavigation({ navItems, onLogout, isLoading }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const pathname = usePathname();

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  const filteredNavItems = navItems.filter((item) =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <div className="lg:hidden fixed top-4 left-4 z-50">
        <Button
          variant="ghost"
          size="icon"
          className="text-gray-900 dark:text-white"
          onClick={toggleSidebar}
          aria-label="Toggle sidebar"
        >
          {isSidebarOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>

      <div
        className={`fixed inset-y-0 left-0 z-40 w-64 bg-gray-900 text-white shadow-lg transition-transform duration-300 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 lg:static`}
      >
        <div className="border-b border-gray-700 p-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-3">
              <div
                className="h-10 w-10 rounded-full bg-purple-600 flex items-center justify-center"
                aria-hidden="true"
              >
                <span className="text-white font-bold text-lg">S</span>
              </div>
              <span className="font-semibold text-lg text-white">
                Student Dashboard
              </span>
            </Link>
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden text-white"
              onClick={toggleSidebar}
            >
              <X className="h-5 w-5" />
            </Button>
          </div>
          <div className="mt-4 relative">
            <Search
              className="absolute left-2 top-2.5 h-4 w-4 text-gray-400"
              aria-hidden="true"
            />
            <Input
              type="search"
              placeholder="Search..."
              className="pl-9 bg-gray-800 text-white placeholder-gray-400 border-gray-700 rounded-md focus:ring-2 focus:ring-purple-500"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              aria-label="Search navigation items"
            />
          </div>
        </div>

        <ScrollArea className="h-[calc(100vh-13rem)] px-2">
          <nav>
            {filteredNavItems.map((item) => (
              <Link
                key={item.title}
                href={item.url}
                className={`flex items-center gap-4 py-2 px-4 rounded-md transition-all duration-200 hover:bg-gray-800 hover:text-purple-400 ${
                  pathname === item.url ? "bg-gray-800 text-purple-400" : ""
                }`}
                aria-current={pathname === item.url ? "page" : undefined}
              >
                {item.icon &&
                  React.createElement(item.icon, {
                    className: "h-5 w-5 text-purple-400",
                    "aria-hidden": "true",
                  })}
                <span className="text-white">{item.title}</span>
              </Link>
            ))}
          </nav>
        </ScrollArea>

        <div className="border-t border-gray-700 p-4">
          <Button
            variant="ghost"
            className="w-full justify-start text-gray-400 hover:bg-gray-800 hover:text-red-500 transition-all duration-200"
            onClick={onLogout}
            disabled={isLoading}
          >
            <LogOut className="mr-2 h-5 w-5" aria-hidden="true" />
            {isLoading ? "Logging out..." : "Logout"}
          </Button>
        </div>
      </div>

      {isSidebarOpen && (
        <div
          className="fixed inset-0 z-30 bg-black bg-opacity-50 lg:hidden"
          onClick={toggleSidebar}
        />
      )}
    </div>
  );
}
