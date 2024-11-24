import { useState } from "react";

export function useRegistration() {
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");

  const registerMembership = async (formData) => {
    setIsLoading(true);
    setMessage("");

    try {
      const response = await fetch(
        "https://hu-devs-backend.onrender.com/auth/register",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok)
        throw new Error("Failed to register. Please try again.");

      setMessage("Registration successful! Please check your email.");
      return true;
    } catch (error) {
      setMessage(error.message || "Something went wrong.");
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, message, setMessage, registerMembership };
}
