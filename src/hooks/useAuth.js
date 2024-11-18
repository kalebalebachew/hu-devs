import { useEffect, useState, useRef } from "react";
import { useRouter } from "next/navigation";

export const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const alreadyRedirected = useRef(false);

  useEffect(() => {
    const token = localStorage.getItem("auth_token");

    if (!token) {
      if (!alreadyRedirected.current) {
        alreadyRedirected.current = true;
        router.push("/login");
      }
      setIsAuthenticated(false);
      setLoading(false);
      return;
    }

    setIsAuthenticated(true);
    setLoading(false);
  }, [router]);

  return { isAuthenticated, loading };
};
