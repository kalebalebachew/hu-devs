"use client"
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { LoginDialog } from "./components/LoginDialog";
import { useAuth } from "@/hooks/useAuth";

const withProtectedRoute = (WrappedComponent) => {
  const ProtectedComponent = (props) => {
    const [showDialog, setShowDialog] = useState(false);
    const { isAuthenticated, userRole, isLoading } = useAuth();
    const router = useRouter();

    useEffect(() => {
      if (isLoading) return; // Do nothing while loading

      if (!isAuthenticated) {
        if (router.pathname !== "/") {
          // Redirect unauthenticated users to the root route
          router.replace("/");
        } else {
          setShowDialog(true);
        }
      } else {
        if (router.pathname === "/") {
          if (userRole === "admin") {
            router.replace("/admin");
          } else if (userRole === "student") {
            router.replace("/student");
          }
        } else {
          setShowDialog(false);
        }
      }
    }, [isAuthenticated, userRole, isLoading, router]);

    if (isLoading) {
      return null; // Render nothing while authentication state is loading
    }

    // Render the wrapped component for authenticated users
    return (
      <>
        {isAuthenticated ? (
          <WrappedComponent {...props} />
        ) : (
          // Show login dialog only on the root route
          router.pathname === "/" && (
            <LoginDialog isOpen={showDialog} onClose={() => setShowDialog(false)} />
          )
        )}
      </>
    );
  };

  ProtectedComponent.displayName = `withProtectedRoute(${getDisplayName(WrappedComponent)})`;

  return ProtectedComponent;
};

const getDisplayName = (WrappedComponent) => {
  return WrappedComponent.displayName || WrappedComponent.name || "Component";
};

export default withProtectedRoute;
