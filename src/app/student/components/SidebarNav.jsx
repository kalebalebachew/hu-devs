"use client";

import React, { useState } from "react";
import Link from "next/link";
import { LogOut, Search, Menu } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function SidebarNavigation({ navItems, onLogout, isLoading }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Sidebar
      className="border-r bg-gray-900 text-white shadow-lg"
      defaultCollapsed={{ mobile: true, desktop: false }}
    >
      {/* Header Section */}
      <SidebarHeader className="border-b border-gray-700 p-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-3">
            <div className="h-10 w-10 rounded-full bg-purple-600 flex items-center justify-center">
              <span className="text-white font-bold text-lg">S</span>
            </div>
            <span className="font-semibold text-lg text-white">
              Student Dashboard
            </span>
          </Link>
          <SidebarTrigger className="lg:hidden">
            <Button variant="ghost" size="icon" className="text-white">
              <Menu className="size-4" />
            </Button>
          </SidebarTrigger>
        </div>
        <div className="mt-4 relative">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-400" />
          <Input
            placeholder="Search..."
            className="pl-9 bg-gray-800 text-white placeholder-gray-400 border-gray-700 rounded-md focus:ring-2 focus:ring-purple-500"
          />
        </div>
      </SidebarHeader>

      {/* Content Section */}
      <SidebarContent>
        <ScrollArea className="h-[calc(100vh-13rem)] px-2">
          <SidebarMenu>
            {navItems.map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton asChild>
                  <Link
                    href={item.url}
                    className="flex items-center gap-4 py-2 px-4 rounded-md transition-all duration-200 hover:bg-gray-800 hover:text-purple-400"
                  >
                    {item.icon &&
                      React.createElement(item.icon, {
                        className: "size-4 text-purple-400",
                      })}
                    <span className="text-white">{item.title}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </ScrollArea>
      </SidebarContent>

      {/* Footer Section */}
      <SidebarFooter className="border-t border-gray-700 p-4">
        <Button
          variant="ghost"
          className="w-full justify-start text-gray-400 hover:bg-gray-800 hover:text-red-500 transition-all duration-200"
          onClick={onLogout}
          disabled={isLoading}
        >
          <LogOut className="mr-2 size-4" />
          {isLoading ? "Logging out..." : "Logout"}
        </Button>
      </SidebarFooter>
    </Sidebar>
  );
}
