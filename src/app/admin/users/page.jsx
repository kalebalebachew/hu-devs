"use client";

import React from "react";
import { useUsers } from "@/hooks/useUsers";
import { PencilIcon, TrashIcon, BanIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function UsersPage() {
  const { users, updateUser, deleteUser, toggleBanUser } = useUsers();
  const [editingUser, setEditingUser] = React.useState(null);

  const handleUpdate = (e) => {
    e.preventDefault();
    if (editingUser) {
      updateUser(editingUser.id, {
        name: editingUser.name,
        email: editingUser.email,
        studentId: editingUser.studentId,
      });
      setEditingUser(null);
    }
  };

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-2xl font-bold mb-5">User Management</h1>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Email</TableHead>
            <TableHead>Student ID</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users.map((user) => (
            <TableRow key={user.id}>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.studentId}</TableCell>
              <TableCell>{user.banned ? "Banned" : "Active"}</TableCell>
              <TableCell className="text-right">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button
                      variant="outline"
                      size="icon"
                      className="mr-2"
                      onClick={() => setEditingUser(user)}
                    >
                      <PencilIcon className="h-4 w-4" />
                      <span className="sr-only">Edit user</span>
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Edit User</DialogTitle>
                    </DialogHeader>
                    {editingUser && (
                      <form onSubmit={handleUpdate}>
                        <div className="grid gap-4 py-4">
                          <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="name" className="text-right">
                              Name
                            </Label>
                            <Input
                              id="name"
                              value={editingUser.name}
                              onChange={(e) =>
                                setEditingUser({ ...editingUser, name: e.target.value })
                              }
                              className="col-span-3"
                            />
                          </div>
                          <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="email" className="text-right">
                              Email
                            </Label>
                            <Input
                              id="email"
                              value={editingUser.email}
                              onChange={(e) =>
                                setEditingUser({ ...editingUser, email: e.target.value })
                              }
                              className="col-span-3"
                            />
                          </div>
                          <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="studentId" className="text-right">
                              Student ID
                            </Label>
                            <Input
                              id="studentId"
                              value={editingUser.studentId}
                              onChange={(e) =>
                                setEditingUser({
                                  ...editingUser,
                                  studentId: e.target.value,
                                })
                              }
                              className="col-span-3"
                            />
                          </div>
                        </div>
                        <DialogFooter>
                          <Button type="submit">Save changes</Button>
                        </DialogFooter>
                      </form>
                    )}
                  </DialogContent>
                </Dialog>

                <Button
                  variant="outline"
                  size="icon"
                  className="mr-2"
                  onClick={() => deleteUser(user.id)}
                >
                  <TrashIcon className="h-4 w-4" />
                  <span className="sr-only">Delete user</span>
                </Button>

                <Button
                  variant={user.banned ? "destructive" : "outline"}
                  size="icon"
                  onClick={() => toggleBanUser(user.id, user.banned ? "Active" : "Banned")}
                >
                  <BanIcon className="h-4 w-4" />
                  <span className="sr-only">
                    {user.banned ? "Unban user" : "Ban user"}
                  </span>
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      
    </div>
  );
}
