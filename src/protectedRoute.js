import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { LoginDialog } from "./components/LoginDialog";
import { useAuth } from "@/hooks/useAuth";

const withProtectedRoute = (WrappedComponent) => {
  return (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const { isAuthenticated, userRole, isLoading } = useAuth();
    const router = useRouter();

    useEffect(() => {
      if (isAuthenticated) {
        if (userRole === "admin") {
          router.replace("/admin");
        } else if (userRole === "student") {
          router.replace("/student");
        }
      } else {
        setIsOpen(true);
      }
    }, [isAuthenticated, userRole, router]);

    if (isLoading) {
      return <div></div>;
    }

    return (
      <>
        {isAuthenticated ? (
          <WrappedComponent {...props} />
        ) : (
          <LoginDialog isOpen={isOpen} onClose={() => setIsOpen(false)} />
        )}
      </>
    );
  };
};

export default withProtectedRoute;
