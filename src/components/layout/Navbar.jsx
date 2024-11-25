"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X, User, Sun, Moon, Github } from "lucide-react";
import { LoginDialog } from "../LoginDialog";
import { ThemeToggle } from "../ThemeToggle";

const menuVariants = {
  hidden: { opacity: 0, y: -5 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -5 },
};

export function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [theme, setTheme] = useState("dark");

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleLogin = () => setIsLoginOpen(!isLoginOpen);
  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Join", href: "#join" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.div
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-4 left-0 right-0 z-50 flex justify-center"
    >
      <nav className="bg-gray-900/30 backdrop-blur-lg shadow-lg rounded-2xl max-w-4xl w-11/12 border border-white/10">
        <div className="px-4">
          <div className="flex items-center justify-between h-16">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center"
            >
              <Link
                href="/"
                className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400"
              >
                HUDC
              </Link>
            </motion.div>

            <div className="hidden md:block">
              <div className="flex items-center space-x-4">
                {navItems.map((item) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    whileHover={{ scale: 1.05 }}
                    className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
                  >
                    {item.name}
                  </motion.a>
                ))}
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <motion.button
                whileHover={{ scale: 1.05 }}
                onClick={toggleTheme}
                className="text-gray-300 hover:text-white p-2 rounded-lg transition-colors"
              >
                {theme === "dark" ? (
                  <Sun className="h-5 w-5" />
                ) : (
                  <Moon className="h-5 w-5" />
                )}
              </motion.button>

              <motion.div whileHover={{ scale: 1.05 }}>
                <Button
                  onClick={toggleLogin}
                  className="bg-white text-gray-900 hover:bg-gray-200 transition-colors"
                >
                  <User className="h-4 w-4 mr-2" />
                  Login
                </Button>
              </motion.div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                className="md:hidden text-gray-300 hover:text-white p-2 rounded-lg transition-colors"
                onClick={toggleMenu}
                aria-label="Toggle menu"
              >
                {isOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </motion.button>
            </div>
          </div>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="md:hidden"
            >
              <div className="px-2 pt-2 pb-3 space-y-1 bg-gray-900/50 backdrop-blur-lg rounded-lg mt-2">
                {navItems.map((item) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    whileHover={{ scale: 1.02, x: 5 }}
                    className="block text-gray-300 hover:text-white hover:bg-gray-800/50 px-3 py-2 rounded-md text-base font-medium transition-colors"
                    onClick={toggleMenu}
                  >
                    {item.name}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <LoginDialog isOpen={isLoginOpen} onClose={toggleLogin} />
    </motion.div>
  );
}
