"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
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
import { Eye, EyeOff } from "lucide-react";
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
      <DialogContent className="font-nunito sm:max-w-[350px] bg-black border-purple-500 border-opacity-40 text-white">
        <DialogHeader>
          <DialogTitle className="text-purple-500">
            Log in to your account
          </DialogTitle>
          <DialogDescription className="text-gray-300">
            Enter your email and password to access your account.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={onSubmit}>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="email" className="text-purple-500">
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
                className="bg-gray-800 text-white border-gray-700"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password" className="text-purple-500">
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
                  className="bg-gray-800 text-white border-gray-700"
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                  onClick={() => setShowPassword((prev) => !prev)}
                  disabled={isLoading}
                >
                  {showPassword ? (
                    <EyeOff
                      className="h-4 w-4 focus:bg-purple-500"
                      aria-hidden="true"
                    />
                  ) : (
                    <Eye className="h-4 w-4" aria-hidden="true" />
                  )}
                  <span className="sr-only">
                    {showPassword ? "Hide password" : "Show password"}
                  </span>
                </Button>
              </div>
            </div>
          </div>
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <DialogFooter>
            <Button
              type="submit"
              disabled={isLoading}
              className="w-full bg-purple-500 text-black hover:bg-purple-700"
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
            className="text-purple-500 hover:underline"
            onClick={(e) => e.preventDefault()}
          >
            Forgot password?
          </a>
        </div>
      </DialogContent>
    </Dialog>
  );
}
