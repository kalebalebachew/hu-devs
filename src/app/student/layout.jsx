"use client";

import { SidebarProvider } from "@/components/ui/sidebar";
import SidebarNavigation from "./components/SidebarNav";
import { BookOpen, LayoutDashboard, Library, Upload } from "lucide-react";
import { Nunito } from "next/font/google";
import { useLogout } from "@/hooks/useLogout";
import {
  Toast,
  ToastTitle,
  ToastDescription,
  ToastClose,
} from "@/components/ui/toast";
import { useState } from "react";

const nunito = Nunito({
  subsets: ["latin"],
  display: "swap",
});

const data = {
  navMain: [
    {
      title: "Dashboard",
      url: "/student",
      icon: <LayoutDashboard />,
    },
    { title: "Resource Hub", url: "/student/resourceHub", icon: <Library /> },
    {
      title: "Project Showcase",
      url: "/student/projectSubmission",
      icon: <Upload />,
    },
    {
      title: "Course Catalog",
      url: "/student/courseCatalog",
      icon: <BookOpen />,
    },
  ],
};

export default function Student({ children }) {
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

  return (
    <SidebarProvider>
      {toast.isVisible && (
        <Toast variant={toast.type}>
          <ToastTitle>
            {toast.type === "success" ? "Success" : "Error"}
          </ToastTitle>
          <ToastDescription>{toast.message}</ToastDescription>
          <ToastClose
            onClick={() => setToast({ ...toast, isVisible: false })}
          />
        </Toast>
      )}

      <div className={`flex h-screen ${nunito.className} w-full`}>
        <SidebarNavigation
          navItems={data.navMain}
          onLogout={handleLogout}
          isLoading={isLoading}
        />
        <main className="w-full overflow-y-scroll">
          <div>{children}</div>
        </main>
      </div>
    </SidebarProvider>
  );
}
