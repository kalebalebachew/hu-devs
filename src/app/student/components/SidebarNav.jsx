"use client";
import { useState } from "react";

export function SidebarNavigation({ navItems }) {
  const [active, setActive] = useState("Dashboard");


  return (
    <div className="h-screen w-64 bg-gray-900 shadow-lg">
      <div className="flex items-center justify-center h-20 border-b">
        <h1 className="text-2xl font-bold text-purple-600">HUDC</h1>
      </div>
      <ul className="mt-4">
        {navItems.map((item) => (
          <li
            key={item.title}
            onClick={() => setActive(item.title)}
            className={`flex items-center gap-6 p-4 my-2 cursor-pointer ${
              active === item.title
                ? "bg-purple-500 rounded-r-xl mr-4 text-white font-bold"
                : "text-white rounded-r-xl mr-4 hover:bg-purple-300"
            }`}
          >
            <span className="text-xl">{item.icon}</span>
            <span>{item.title}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SidebarNavigation;
