import { useState } from "react";

export function useLogout() {
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");

  const logout = async () => {
    setIsLoading(true);
    setMessage("");

    try {
      const token = localStorage.getItem("auth_token");

      if (!token) {
        throw new Error("No token found. Please log in.");
      }

      const response = await fetch(
        "https://hu-devs-backend.onrender.com/auth/logout",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to log out.");
      }

      localStorage.removeItem("auth_token");

      setMessage("Logout successful!");
      return true;
    } catch (error) {
      setMessage(error.message || "Something went wrong.");
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, message, setMessage, logout };
}
