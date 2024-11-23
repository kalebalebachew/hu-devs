"use client"

import * as React from "react"
import { LayoutDashboard, Users, BookOpen, FileText, Settings, PieChart, Search } from 'lucide-react'

import { Label } from "@/components/ui/label"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInput,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarRail,
} from "@/components/ui/sidebar"

const data = {
  navMain: [
    {
      title: "Dashboard",
      url: "/admin/dashboard",
      icon: LayoutDashboard,
    },
    {
      title: "Users",
      url: "/admin/users",
      icon: Users,
      items: [
        {
          title: "All Users",
          url: "/admin/users",
        },
        {
          title: "Add New User",
          url: "/admin/users/new",
        },
        {
          title: "User Roles",
          url: "/admin/users/roles",
        },
      ],
    },
    {
      title: "Courses",
      url: "/admin/courses",
      icon: BookOpen,
      items: [
        {
          title: "All Courses",
          url: "/admin/courses",
        },
        {
          title: "Add New Course",
          url: "/admin/courses/new",
        },
        {
          title: "Categories",
          url: "/admin/courses/categories",
        },
      ],
    },
    {
      title: "Resources",
      url: "/admin/resources",
      icon: FileText,
      items: [
        {
          title: "All Resources",
          url: "/admin/resources",
        },
        {
          title: "Add New Resource",
          url: "/admin/resources/new",
        },
        {
          title: "Resource Types",
          url: "/admin/resources/types",
        },
      ],
    },
    {
      title: "Reports",
      url: "/admin/reports",
      icon: PieChart,
      items: [
        {
          title: "User Activity",
          url: "/admin/reports/user-activity",
        },
        {
          title: "Course Progress",
          url: "/admin/reports/course-progress",
        },
        {
          title: "Resource Usage",
          url: "/admin/reports/resource-usage",
        },
      ],
    },
    {
      title: "Settings",
      url: "/admin/settings",
      icon: Settings,
      items: [
        {
          title: "General Settings",
          url: "/admin/settings/general",
        },
        {
          title: "Appearance",
          url: "/admin/settings/appearance",
        },
        {
          title: "Notifications",
          url: "/admin/settings/notifications",
        },
      ],
    },
  ],
}

export default function AdminPage() {
  return (
    <SidebarProvider>
      <Sidebar>
        <SidebarHeader>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton
                size="lg"
                className="w-full justify-start"
              >
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                  <LayoutDashboard className="size-4" />
                </div>
                <div className="flex flex-col items-start gap-0.5 leading-none">
                  <span className="font-semibold">Admin Dashboard</span>
                  <span className="text-xs text-muted-foreground">Manage your student platform</span>
                </div>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
          <form>
            <SidebarGroup className="py-0">
              <SidebarGroupContent className="relative">
                <Label htmlFor="search" className="sr-only">
                  Search
                </Label>
                <SidebarInput
                  id="search"
                  placeholder="Search..."
                  className="pl-8"
                />
                <Search className="pointer-events-none absolute left-2 top-1/2 size-4 -translate-y-1/2 select-none opacity-50" />
              </SidebarGroupContent>
            </SidebarGroup>
          </form>
        </SidebarHeader>
        <SidebarContent>
          {data.navMain.map((item) => (
            <SidebarGroup key={item.title}>
              <SidebarGroupLabel>
                <item.icon className="mr-2 size-4" />
                {item.title}
              </SidebarGroupLabel>
              {item.items && (
                <SidebarGroupContent>
                  <SidebarMenu>
                    {item.items.map((subItem) => (
                      <SidebarMenuItem key={subItem.title}>
                        <SidebarMenuButton asChild>
                          <a href={subItem.url}>{subItem.title}</a>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    ))}
                  </SidebarMenu>
                </SidebarGroupContent>
              )}
            </SidebarGroup>
          ))}
        </SidebarContent>
        <SidebarRail />
      </Sidebar>
    </SidebarProvider>
  )
}

