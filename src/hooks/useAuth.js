import {jwtDecode} from "jwt-decode"; 
import { useState } from "react";
import { useRouter } from "next/navigation";

export function useAuth() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const login = async (email, password, onClose) => {
    setError("");
    setIsLoading(true);

    if (!email || !password) {
      setError("Email and password are required.");
      setIsLoading(false);
      return;
    }

    try {
      const response = await fetch(
        "https://hu-devs-backend.onrender.com/auth/login",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, password }),
        }
      );

      if (!response.ok) {
        throw new Error("Invalid credentials");
      }

      const { token } = await response.json();
      localStorage.setItem("auth_token", token);

      const decodedToken = jwtDecode(token);
      const role = decodedToken?.role;

      if (!role) {
        throw new Error("Invalid token. Role is missing.");
      }

      if (role === "student") {
        router.push("/student");
      } else if (role === "admin") {
        router.push("/admin");
      }

      onClose();
    } catch (err) {
      setError(err.message || "Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return { login, isLoading, error, setError };
}
