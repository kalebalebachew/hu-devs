"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react"; // Add hamburger and close icons

export function SidebarNavigation({ navItems }) {
  const [active, setActive] = useState("Dashboard");
  const [isOpen, setIsOpen] = useState(false); // State to control sidebar visibility

  return (
    <div className="relative">
      {/* Hamburger Icon for smaller screens */}
      <div className="lg:hidden fixed top-4 left-4 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white p-2 bg-gray-900 rounded-md"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-screen w-64 bg-gray-900 shadow-lg transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static`}
      >
        <div className="flex items-center justify-center h-20 border-b">
          <h1 className="text-2xl font-bold text-purple-600">HUDC</h1>
        </div>
        <ul className="mt-4">
          {navItems.map((item) => (
            <li key={item.title} className="my-2">
              <Link href={item.url}>
                <div
                  onClick={() => {
                    setActive(item.title);
                    setIsOpen(false); // Close sidebar on link click (for smaller screens)
                  }}
                  className={`flex items-center gap-6 p-4 cursor-pointer ${
                    active === item.title
                      ? "bg-purple-500 rounded-r-xl mr-4 text-white font-bold"
                      : "text-white rounded-r-xl mr-4 hover:bg-purple-300"
                  }`}
                >
                  <span className="text-xl">{item.icon}</span>
                  <span>{item.title}</span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default SidebarNavigation;