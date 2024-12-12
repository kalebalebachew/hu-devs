"use client";

import { SidebarProvider } from "@/components/ui/sidebar";
import SidebarNavigation from "./components/SidebarNav";
import { Nunito } from "next/font/google";
import withAuth from "../utils/withAuth";

const nunito = Nunito({
  subsets: ["latin"],
  display: "swap",
});

 function AdminLayout({ children }) {
  return (
   
    <SidebarProvider>
      <div className={`flex h-screen w-full ${nunito.className}`}>
        <SidebarNavigation />
        <main className="flex-1 overflow-y-auto p-6 bg-gray-50 dark:bg-gray-900">
          {children}
        </main>
      </div>
    </SidebarProvider>
  
  );
}

export default withAuth(AdminLayout);
