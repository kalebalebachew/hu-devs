import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { SidebarNavigation } from "./components/SidebarNav";
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
  return (
    <SidebarProvider>
      <div className="flex h-screen font-nunito w-full">
          <SidebarNavigation
            navItems={data.navMain} 
            user={data.user} 
          />
        
        <main className="w-full overflow-y-scroll">
          <div className="">{children}</div>
        </main>
      </div>
    </SidebarProvider>
  );
}
