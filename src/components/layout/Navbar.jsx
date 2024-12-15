"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X, Sun, Moon, ArrowRight } from "lucide-react";
import { LoginDialog } from "../LoginDialog";

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
  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

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
      <nav className="bg-background/90 backdrop-blur-lg shadow-lg rounded-lg max-w-6xl w-11/12 border border-border">
        <div className="px-4">
          <div className="flex items-center justify-between h-14">
            <Link
              href="/"
              className="text-2xl font-bold bg-clip-text bg-gradient-to-r from-primary to-muted"
            >
              HUDC
            </Link>

            <div className="hidden md:flex md:items-center md:space-x-6">
              {["Home", "Courses", "Features", "Join", "Contact"].map(
                (item, index) => (
                  <button
                    key={index}
                    onClick={() => scrollToSection(`#${item.toLowerCase()}`)}
                    className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item}
                  </button>
                )
              )}
            </div>

            <div className="flex items-center space-x-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                onClick={toggleTheme}
                className="text-muted-foreground hover:text-foreground p-2 rounded-lg transition-colors"
                aria-label="Toggle Theme"
              >
                {theme === "dark" ? (
                  <Sun className="h-5 w-5" />
                ) : (
                  <Moon className="h-5 w-5" />
                )}
              </motion.button>

              <Button
                onClick={toggleLogin}
                variant="ghost"
                className="hidden md:inline-flex px-6 py-2 h-9 bg-primary text-primary-foreground border border-border hover:bg-primary/90 transition-all duration-300"
              >
                Sign in
              </Button>

              <Button
                onClick={() => scrollToSection("#community")}
                variant="ghost"
                className="hidden md:inline-flex px-6 py-2 h-9 bg-foreground text-background border border-border hover:bg-foreground/90 transition-all duration-300"
              >
                Membership
              </Button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                className="md:hidden text-muted-foreground hover:text-foreground p-2 rounded-lg transition-colors"
                onClick={toggleMenu}
                aria-label="Toggle menu"
              >
                {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
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
              {["Home", "Courses", "Benefits", "Join", "Contact"].map(
                (item, index) => (
                  <button
                    key={index}
                    onClick={() => scrollToSection(`#${item.toLowerCase()}`)}
                    className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item}
                  </button>
                )
              )}
              <Button
                onClick={toggleLogin}
                variant="ghost"
                className="w-full px-6 py-2 h-9 bg-primary text-primary-foreground border border-border hover:bg-secondary/90 transition-all duration-300"
              >
                Sign in
              </Button>
              <Button
                onClick={() => scrollToSection("#community")}
                variant="ghost"
                className="w-full px-6 py-2 h-9 bg-foreground text-background border border-border hover:bg-secondary/90 transition-all duration-300"
              >
                Membership
              </Button>
            </div>
          </motion.div>
        )}
      </nav>

      <LoginDialog isOpen={isLoginOpen} onClose={toggleLogin} />
    </motion.div>
  );
}
