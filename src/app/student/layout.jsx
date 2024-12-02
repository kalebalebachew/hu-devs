"use client";

import { useState, useEffect } from "react";
import { SidebarProvider } from "@/components/ui/sidebar";
import SidebarNavigation from "./components/SidebarNav";
import { BookOpen, LayoutDashboard, Library, Settings, Settings2, Upload } from 'lucide-react';
import { Nunito } from "next/font/google";
import { useLogout } from "@/hooks/useLogout";
import withProtectedRoute from "@/protectedRoute";
import {
  Toast,
  ToastTitle,
  ToastDescription,
  ToastClose,
  ToastProvider,
  ToastViewport,
} from "@/components/ui/toast";
import { GeistSans } from 'geist/font/sans';



const navItems = [
  {
    title: "Dashboard",
    url: "/student",
    icon: LayoutDashboard,
  },
  {
    title: "Resource Hub",
    url: "/student/resourceHub",
    icon: Library,
  },
  {
    title: "Project Showcase",
    url: "/student/projectSubmission",
    icon: Upload,
  },
  {
    title: "Course Catalog",
    url: "/student/courseCatalog",
    icon: BookOpen,
  },
  {
    title: "Profile",
    url: "/student/profile",
    icon: Settings,
  },
];

function StudentLayout({ children }) {
  const { logout, isLoading, message } = useLogout();
  const [toast, setToast] = useState({
    isVisible: false,
    type: "success",
    message: "",
  });

  const handleLogout = async () => {
    const success = await logout();
    setToast({
      isVisible: true,
      type: success ? "success" : "error",
      message: success ? "Logout successful!" : message || "Failed to log out.",
    });

    if (success) {
      window.location.href = "/";
    }
  };

  useEffect(() => {
    if (toast.isVisible) {
      const timer = setTimeout(() => {
        setToast((prevToast) => ({ ...prevToast, isVisible: false }));
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [toast.isVisible]);

  return (
  
    <SidebarProvider>
      <ToastProvider>
        <div className={`flex h-screen ${GeistSans.className} w-full bg-background text-foreground`}>
          <SidebarNavigation
            navItems={navItems}
            onLogout={handleLogout}
            isLoading={isLoading}
          />
          <main className="flex-1 overflow-y-auto">
            <div className="container mx-auto px-4 py-8">{children}</div>
          </main>
        </div>
        {toast.isVisible && (
          <Toast variant={toast.type}>
            <ToastTitle>
              {toast.type === "success" ? "Success" : "Error"}
            </ToastTitle>
            <ToastDescription>{toast.message}</ToastDescription>
            <ToastClose
              onClick={() => setToast((prevToast) => ({ ...prevToast, isVisible: false }))}
            />
          </Toast>
        )}
        <ToastViewport />
      </ToastProvider>
    </SidebarProvider>
  );
}


export default withProtectedRoute(StudentLayout);

