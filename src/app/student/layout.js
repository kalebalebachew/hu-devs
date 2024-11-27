"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function StudentLayout({ children }) {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("auth-token");

    if (!token) {
      router.replace("/"); // Redirect to the home page if not authenticated
    } else {
      setIsAuthenticated(true); // Set authentication state
    }
  }, [router]);

  if (!isAuthenticated) {
    return null; // Or show a loading spinner
  }

  return <>{children}</>;
}
