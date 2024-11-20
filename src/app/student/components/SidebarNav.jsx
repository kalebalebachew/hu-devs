"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react"; 

export function SidebarNavigation({ navItems }) {
  const [active, setActive] = useState("Dashboard");
  const [isOpen, setIsOpen] = useState(false); 

  return (
    <div className="relative">
      <div className="lg:hidden fixed top-4 left-4 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white p-2 bg-gray-900 rounded-md"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <div
        className={`fixed top-0 left-0 h-screen w-56 bg-gray-900 shadow-lg transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static`}
      >
        <div className="flex items-center justify-center h-16 border-b border-gray-800">
          <h1 className="text-xl font-bold text-purple-600">HUDC</h1>
        </div>
        
        <ul className="mt-4">
          {navItems.map((item) => (
            <li key={item.title} className="my-1">
              <Link href={item.url}>
                <div
                  onClick={() => {
                    setActive(item.title);
                    setIsOpen(false); 
                  }}
                  className={`flex items-center gap-4 p-3 cursor-pointer ${
                    active === item.title
                      ? "bg-purple-500 text-white font-bold rounded-r-md"
                      : "text-white hover:bg-purple-300 rounded-r-md"
                  }`}
                >
                  <span className="text-lg">{item.icon}</span>
                  <span className="text-sm">{item.title}</span>
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
