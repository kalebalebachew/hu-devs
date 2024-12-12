"use client";

import { useAuth } from "@/hooks/useAuth";
import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";

const withAuth = (WrappedComponent, allowedRoles = []) => {
  return (props) => {
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
    }, [isAuthenticated, userRole, isLoading, router, pathname, allowedRoles]);

    if (isLoading || !isAuthenticated) {
      return <div></div>; 
    }

    return <WrappedComponent {...props} />;
  };
};

export default withAuth;
