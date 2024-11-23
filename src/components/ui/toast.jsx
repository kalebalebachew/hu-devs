"use client";

import { ToastProvider, Toast, ToastTitle, ToastDescription } from "@radix-ui/react-toast";
import { useState } from "react";
import { CheckCircle, AlertCircle } from "lucide-react";

export function ToastNotification({ isVisible, type, message, onDismiss }) {
  return (
    <ToastProvider swipeDirection="right">
      {isVisible && (
        <Toast
          className={`fixed bottom-4 left-4 bg-black border ${
            type === "success"
              ? "border-green-500 text-green-500"
              : "border-red-500 text-red-500"
          } p-4 rounded-md shadow-md`}
          onOpenChange={onDismiss}
          duration={5000}
        >
          <div className="flex items-center space-x-3">
            {type === "success" ? (
              <CheckCircle className="h-5 w-5 text-green-500" />
            ) : (
              <AlertCircle className="h-5 w-5 text-red-500" />
            )}
            <div>
              <ToastTitle className="font-bold">
                {type === "success" ? "Success" : "Error"}
              </ToastTitle>
              <ToastDescription>{message}</ToastDescription>
            </div>
          </div>
        </Toast>
      )}
    </ToastProvider>
  );
}
