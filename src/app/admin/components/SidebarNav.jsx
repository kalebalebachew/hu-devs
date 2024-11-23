"use client";

import { LayoutDashboard, Users, FileText, Settings } from "lucide-react";
import { Label } from "@/components/ui/label";
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
  SidebarRail,
} from "@/components/ui/sidebar";

const adminNav = [
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
        title: "Users Management",
        url: "/admin/users",
      },
    ],
  },
  {
    title: "Projects",
    url: "/admin/projects",
    icon: FileText,
    items: [
      {
        title: "Manage Projects",
        url: "/admin/projects",
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
    ],
  },
];

export default function SidebarNavigation() {
  return (
    <Sidebar>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" className="w-full justify-start">
              <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <LayoutDashboard className="size-4" />
              </div>
              <div className="flex flex-col items-start gap-0.5 leading-none">
                <span className="font-semibold">Admin Dashboard</span>
                <span className="text-xs text-muted-foreground">
                  Manage the platform
                </span>
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
            </SidebarGroupContent>
          </SidebarGroup>
        </form>
      </SidebarHeader>
      <SidebarContent>
        {adminNav.map((item) => (
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
  );
}
