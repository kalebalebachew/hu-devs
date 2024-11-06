import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { SidebarNavigation } from "./components/SidebarNav"
import { BreadcrumbNavigation } from "./components/Breadcrumb"
import { Separator } from "@/components/ui/separator"
import { BookOpen, Code, LayoutDashboard, Library, Upload } from "lucide-react"

const data = {
    user: {
      name: "Kaleb",
      email: "kaleb@haramaya.edu.et",
    },
    navMain: [
      { title: "Dashboard", url: "/student/dashboard", icon: <LayoutDashboard /> },
      { title: "Resource Hub", url: "/student/resource-hub", icon: <Library /> },
      // { title: "Project Showcase", url: "/dashboard/project-showcase", icon: <Code /> },
      { title: "Project Submission", url: "/student/project-submission", icon: <Upload /> },
      { title: "Course Catalog", url: "/student/course-catalog", icon: <BookOpen /> },
    ],
  }

export default function Student({ children }) {
  return (
    <SidebarProvider>
      <SidebarNavigation user={data.user} navMain={data.navMain} />
      <main className="flex flex-col flex-1">
        <header className="flex h-16 items-center gap-2 px-4">
          <SidebarTrigger className="-ml-1" />
          <Separator orientation="vertical" className="mr-2 h-4" />
          <BreadcrumbNavigation />
        </header>
        <div className="flex-1 p-4">{children}</div>
      </main>
    </SidebarProvider>
  )
}
