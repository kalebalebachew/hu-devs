"use client"
import { SidebarProvider } from "@/components/ui/sidebar";
import SidebarNavigation from "./components/SidebarNav";
import {
  BookOpen,
  Code,
  LayoutDashboard,
  Library,
  Upload,
  LogOut,
} from "lucide-react";
import { Nunito } from "next/font/google";
import { useLogout } from "@/hooks/useLogout";
import { ToastNotification } from "@/components/ui/toast";
import { useState } from "react";

const nunito = Nunito({
  subsets: ["latin"],
  display: "swap",
});

const data = {
  user: {
    name: "Kaleb",
    email: "kaleb@haramaya.edu.et",
  },
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
  const { logout, isLoading, message, setMessage } = useLogout();
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
      message: message,
    });

    if (success) {
      window.location.href = "/"; 
    }
  };

  return (
    <SidebarProvider>
      <ToastNotification
        isVisible={toast.isVisible}
        type={toast.type}
        message={toast.message}
        onDismiss={() => setToast({ ...toast, isVisible: false })}
      />
      <div className="flex h-screen font-nunito w-full">
        <SidebarNavigation
          navItems={data.navMain}
          user={data.user}
          onLogout={handleLogout} // Pass the logout function to SidebarNavigation
          isLoading={isLoading} // Pass loading state for better feedback
        />
        <main className="w-full overflow-y-scroll">
          <div>{children}</div>
        </main>
      </div>
    </SidebarProvider>
  );
}
