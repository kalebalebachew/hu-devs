"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import jwtDecode from "jwt-decode";

// ProtectedRoute Component
export default function ProtectedRoute({ children, requiredRole }) {
  const [isAuthenticated, setIsAuthenticated] = useState(null); // Initialize to null to show loading state initially
  const [userRole, setUserRole] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("auth_token");

    // If there's no token, redirect to login immediately
    if (!token) {
      router.push("/login");
      return;
    }

    try {
      const decoded = jwtDecode(token);
      const role = decoded?.role;

      if (!role) {
        // Redirect if no valid role is present in the token
        router.push("/login");
        return;
      }

      setIsAuthenticated(true);
      setUserRole(role);
    } catch (error) {
      // If there's an error decoding the token, redirect to login
      router.push("/login");
    }
  }, [router]);

  // Show loading state until we verify if the user is authenticated
  if (isAuthenticated === null) {
    return <div>Loading...</div>;
  }

  // Check if the user has the required role
  if (isAuthenticated && userRole !== requiredRole) {
    router.push("/unauthorized"); // Redirect if the user doesn't have the correct role
    return null; // Return nothing until redirected
  }

  // Render the protected content
  return <>{children}</>;
}
