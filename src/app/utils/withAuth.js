"use client";

import { useAuth } from "@/hooks/useAuth";
import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";

const withAuth = (WrappedComponent, allowedRoles = []) => {
  const RequiresAuth = (props) => {
    const { isAuthenticated, userRole, isLoading } = useAuth();
    const pathname = usePathname();
    const router = useRouter();

    useEffect(() => {
      if (!isLoading) {
        if (!isAuthenticated) {
          router.push("/"); 
        } else if (allowedRoles.length > 0 && !allowedRoles.includes(userRole)) {
          router.push("/unauthorized"); 
        }
      }
    }, [isAuthenticated, userRole, isLoading, pathname, router]);

    if (isLoading) {
      return <div className="h-screen flex items-center justify-center">Loading...</div>;
    }

    if (!isAuthenticated) {
      return null; 
    }

    return <WrappedComponent {...props} />;
  };

  RequiresAuth.displayName = `withAuth(${WrappedComponent.displayName || WrappedComponent.name || "Component"})`;

  return RequiresAuth;
};

export default withAuth;
