"use client"
import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X, Sun, Moon, ChevronRight } from "lucide-react";
import { LoginDialog } from "../LoginDialog";
import { HUDCNavigationMenu } from "./About";

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

  const scrollToSection = (id) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false); 
  };


  
  return (
    <motion.div
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-4 left-0 right-0 z-50 flex justify-center"
      
    >
      <nav className="bg-background/80 backdrop-blur-lg shadow-lg rounded-2xl max-w-4xl w-11/12 border border-border">
        <div className="px-4">
          <div className="flex items-center justify-between h-16">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center"
            >
              <Link
                href="/"
                className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300"
              >
                HUDC
              </Link>
            </motion.div>
            <div className="hidden md:flex md:items-center md:space-x-6">
              <button
                onClick={() => scrollToSection("#hero")}
                className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("#community")}
                className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
              >
                Join
              </button>
              <button
                onClick={() => scrollToSection("#contact")}
                className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
              >
                Contact
              </button>
              <HUDCNavigationMenu />
            </div>

            <div className="flex items-center space-x-4">
              {/* <motion.button
                whileHover={{ scale: 1.05 }}
                onClick={toggleTheme}
                className="text-foreground/80 hover:text-foreground p-2 rounded-lg transition-colors"
              >
                {theme === "dark" ? (
                  <Sun className="h-5 w-5" />
                ) : (
                  <Moon className="h-5 w-5" />
                )}
              </motion.button> */}

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative group"
              >
                <Button
                  onClick={toggleLogin}
                  variant="ghost"
                  className="relative overflow-hidden group px-6 py-2 h-9 bg-gradient-to-r from-neutral-950 to-neutral-800 hover:from-neutral-900 hover:to-neutral-700 text-white border border-neutral-800 hover:border-neutral-700 transition-all duration-300"
                >
                  <span className="relative z-10 flex items-center text-sm font-medium">
                    Sign in
                    <ChevronRight className="h-4 w-4 ml-1 group-hover:translate-x-0.5 transition-transform duration-300" />
                  </span>
                </Button>
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
              </motion.div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                className="md:hidden text-foreground/80 hover:text-foreground p-2 rounded-lg transition-colors"
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

        {isOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={menuVariants}
            className="md:hidden"
          >
            <div className="flex flex-col items-center space-y-4 py-4">
              <button
                onClick={() => scrollToSection("#hero")}
                className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("#community")}
                className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
              >
                Join
              </button>
              <button
                onClick={() => scrollToSection("#contact")}
                className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
              >
                Contact
              </button>
              <HUDCNavigationMenu />
            </div>
          </motion.div>
        )}
      </nav>

      <LoginDialog isOpen={isLoginOpen} onClose={toggleLogin} />
    </motion.div>
  );
}
