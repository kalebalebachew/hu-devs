"use client";

import { useState } from "react";
import { GeistSans } from "geist/font/sans";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Icons } from "./ui/icons";
import { Eye, EyeOff } from 'lucide-react';
import { useAuth } from "@/hooks/useAuth";

export function LoginDialog({ isOpen, onClose }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const { login, isLoading, error, setError } = useAuth();

  const onSubmit = (event) => {
    event.preventDefault();
    login(email, password, onClose);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className={`sm:max-w-[400px] ${GeistSans.className} bg-black border border-gray-800 text-gray-100 shadow-2xl`}>
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400">
            Log in to your account
          </DialogTitle>
          <DialogDescription className="text-gray-400">
            Enter your email and password to access your account.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={onSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email" className="text-gray-300">
              Email
            </Label>
            <Input
              id="email"
              placeholder="student@hu.com"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              disabled={isLoading}
              className="bg-gray-900 text-gray-100 border-gray-700 focus:ring-2 focus:ring-gray-600 placeholder-gray-500"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password" className="text-gray-300">
              Password
            </Label>
            <div className="relative">
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoCapitalize="none"
                autoComplete="current-password"
                autoCorrect="off"
                disabled={isLoading}
                className="bg-gray-900 text-gray-100 border-gray-700 focus:ring-2 focus:ring-gray-600"
              />
              <Button
                type="button"
                variant="ghost"
                size="sm"
                className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-gray-800"
                onClick={() => setShowPassword((prev) => !prev)}
                disabled={isLoading}
              >
                {showPassword ? (
                  <EyeOff className="h-4 w-4 text-gray-400" aria-hidden="true" />
                ) : (
                  <Eye className="h-4 w-4 text-gray-400" aria-hidden="true" />
                )}
                <span className="sr-only">
                  {showPassword ? "Hide password" : "Show password"}
                </span>
              </Button>
            </div>
          </div>
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <DialogFooter>
            <Button
              type="submit"
              disabled={isLoading}
              className="w-full bg-white text-black hover:bg-gray-200 focus:ring-2 focus:ring-gray-400 transition-colors"
            >
              {isLoading && (
                <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
              )}
              Log In
            </Button>
          </DialogFooter>
        </form>
        <div className="mt-4 text-center text-sm">
          <a
            href="#"
            className="text-gray-400 hover:text-gray-200 transition-colors"
            onClick={(e) => e.preventDefault()}
          >
            Forgot password?
          </a>
        </div>
      </DialogContent>
    </Dialog>
  );
}

