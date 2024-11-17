import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { SidebarNavigation } from "./components/SidebarNav";
import { BreadcrumbNavigation } from "./components/Breadcrumb";
import { Separator } from "@/components/ui/separator";
import { BookOpen, Code, LayoutDashboard, Library, Upload } from "lucide-react";
import { Nunito } from "next/font/google";

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
      url: "/student/dashboard",
      icon: <LayoutDashboard />,
    },
    { title: "Resource Hub", url: "/student/resource-hub", icon: <Library /> },
    {
      title: "Project Showcase Submission",
      url: "/student/project-submission",
      icon: <Upload />,
    },
    {
      title: "Course Catalog",
      url: "/student/course-catalog",
      icon: <BookOpen />,
    },
  ],
};

export default function Student({ children }) {
  return (
    <SidebarProvider>
      <div className="flex h-screen font-nunito">
        {/* Sidebar */}
        <aside className="w-64 bg-white border-r">
          <SidebarNavigation
            navItems={data.navMain} // Pass your navigation data
            user={data.user} // Pass user info if needed
          />
        </aside>

        {/* Main Content */}
        <main className="flex-1 flex flex-col">
          <div className="flex-1">{children}</div>
        </main>
      </div>
    </SidebarProvider>
  );
}
