"use client";

import { useState, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";

export function useUsers() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const fetchUsers = async () => {
    setIsLoading(true);
    try {
      const token = localStorage.getItem("auth_token");
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/admin/users`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (!response.ok) throw new Error("Failed to fetch users");
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      toast({ title: "Error", description: error.message });
    } finally {
      setIsLoading(false);
    }
  };

  const updateUser = async (id, updatedData) => {
    try {
      const token = localStorage.getItem("auth_token");
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/admin/users/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(updatedData),
        }
      );
      if (!response.ok) throw new Error("Failed to update user");
      const updatedUser = await response.json();
      setUsers((prev) =>
        prev.map((user) => (user.id === id ? updatedUser : user))
      );
      toast({ title: "Success", description: "User updated successfully." });
    } catch (error) {
      toast({ title: "Error", description: error.message });
    }
  };

  const deleteUser = async (id) => {
    try {
      const token = localStorage.getItem("auth_token");
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/admin/users/${id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (!response.ok) throw new Error("Failed to delete user");
      setUsers((prev) => prev.filter((user) => user.id !== id));
      toast({ title: "Success", description: "User deleted successfully." });
    } catch (error) {
      toast({ title: "Error", description: error.message });
    }
  };

  const toggleBanUser = async (id, currentStatus) => {
    try {
      const token = localStorage.getItem("auth_token");
      const newStatus = currentStatus === "Banned" ? "Active" : "Banned";
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/admin/users/${id}/ban`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ status: newStatus }),
        }
      );
      if (!response.ok) throw new Error("Failed to update user status");
      setUsers((prev) =>
        prev.map((user) =>
          user.id === id ? { ...user, status: newStatus } : user
        )
      );
      toast({
        title: "Success",
        description: `User ${newStatus === "Banned" ? "banned" : "unbanned"} successfully.`,
      });
    } catch (error) {
      toast({ title: "Error", description: error.message });
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return { users, isLoading, fetchUsers, updateUser, deleteUser, toggleBanUser };
}
