import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { LoginDialog } from "./LoginDialog";
import { useAuth } from "@/hooks/useAuth";

const withProtectedRoute = (WrappedComponent) => {
  const ProtectedComponent = (props) => {
    const [showDialog, setShowDialog] = useState(false);
    const { isAuthenticated, userRole, isLoading } = useAuth();
    const router = useRouter();

    useEffect(() => {
      if (isLoading) return; 

      if (!isAuthenticated) {
        if (router.pathname !== "/") {
          router.replace("/"); 
        } else {
          setShowDialog(true);
        }
      } else {
        setShowDialog(false); 
        if (userRole === "admin") {
          router.replace("/admin");
        } else if (userRole === "student") {
          router.replace("/student");
        }
      }
    }, [isAuthenticated, userRole, isLoading, router]);

    if (isLoading) {
      return null;
    }

    return (
      <>
        {isAuthenticated ? (
          <WrappedComponent {...props} />
        ) : (
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
