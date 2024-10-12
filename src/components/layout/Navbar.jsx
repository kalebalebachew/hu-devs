"use client";
import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { LoginDialog } from "../LoginDialog";

export function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false); 

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleLogin = () => setIsLoginOpen(!isLoginOpen); 
  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Join", href: "#join" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <div className="fixed top-4 left-0 right-0 z-50 flex justify-center">
      <nav className="bg-black/10 backdrop-blur-lg shadow-md rounded-2xl max-w-3xl w-11/12 border border-purple-500 border-opacity-35">
        <div className="px-4">
          <div className="flex items-center justify-between h-14">
            <div className="flex items-center">
              <Link
                href="/"
                className="text-lg font-semibold text-purple-500 hover:text-purple-400 transition-colors"
              >
                HUDC
              </Link>
            </div>
            <div className="hidden sm:block">
              <div className="flex items-center space-x-2">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-gray-300 hover:text-purple-500 px-2 py-1 rounded-md text-sm font-medium transition-colors"
                    onClick={toggleMenu}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Button className="text-black font-medium" onClick={toggleLogin}>Login</Button> 
              <Button
                variant="ghost"
                className="sm:hidden text-gray-300 hover:text-purple-500"
                onClick={toggleMenu}
                aria-label="Toggle menu"
              >
                {isOpen ? <X size={20} /> : <Menu size={20} />}
              </Button>
            </div>
          </div>
        </div>
        {isOpen && (
          <div className="sm:hidden bg-black/95 mt-2 py-2 rounded-lg absolute left-0 right-0 top-full">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block text-gray-300 hover:text-purple-500 px-4 py-2 text-sm font-medium transition-colors"
                onClick={toggleMenu}
              >
                {item.name}
              </a>
            ))}
          </div>
        )}
      </nav>

      <LoginDialog isOpen={isLoginOpen} onClose={toggleLogin} />
    </div>
  );
}
