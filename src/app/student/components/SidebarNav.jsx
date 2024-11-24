"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, LogOut, Bell, Settings } from "lucide-react";

export function SidebarNavigation({ navItems, user, onLogout, isLoading }) {
  const [active, setActive] = useState("Dashboard");
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <div className="relative">
      <div className="lg:hidden fixed top-4 left-4 z-50">
        <button
          onClick={toggleSidebar}
          className="text-white p-2 bg-purple-600 rounded-md hover:bg-purple-700 transition duration-200"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <div
        className={`fixed top-0 left-0 h-screen w-64 bg-gray-900 shadow-lg transform transition-transform duration-500 ease-in-out lg:translate-x-0 lg:static ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Header */}
        <div className=" ">
          <div className="flex items-center gap-4">
            {/* <div className="w-12 h-12  flex items-center justify-center text-purple-600 text-medium font-semi">
             HUDC 
            </div> */}
          </div>
       
        </div>

        <nav className="mt-6">
          <ul>
            {navItems.map((item) => (
              <li key={item.title} className="my-1">
                <Link href={item.url}>
                  <div
                    onClick={() => {
                      setActive(item.title);
                      setIsOpen(false);
                    }}
                    className={`flex items-center gap-3 p-4 cursor-pointer transition-all duration-200 ${
                      active === item.title
                        ? "bg-purple-600 text-white font-medium rounded-lg"
                        : "text-gray-300 hover:bg-purple-500 hover:text-white rounded-lg"
                    }`}
                  >
                    <span className="text-lg">{item.icon}</span>
                    <span className="text-sm">{item.title}</span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="absolute bottom-6 left-0 w-full px-4">
          <button
            onClick={onLogout}
            disabled={isLoading}
            className={`flex items-center gap-3 w-full p-4 text-left transition-all duration-200 rounded-lg ${
              isLoading
                ? "bg-gray-700 text-gray-500 cursor-not-allowed"
                : "text-gray-300 hover:bg-red-600 hover:text-white"
            }`}
          >
            <LogOut className="text-lg" />
            {isLoading ? "Logging out..." : "Logout"}
          </button>
        </div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={toggleSidebar}
          aria-hidden="true"
        ></div>
      )}
    </div>
  );
}

export default SidebarNavigation;
