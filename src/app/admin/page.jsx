"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function AdminPage() {
  return (
    <div className="p-6 space-y-6">
      <header>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Welcome, Admin
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mt-2">
          Manage HUDC responsibly
        </p>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="bg-gray-50 dark:bg-gray-900 shadow-md">
          <CardHeader>
            <CardTitle className="text-lg font-semibold">Manage Users</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              View, update, and ban user accounts.
            </p>
            <Link href="/admin/users">
              <Button variant="default" className="w-full">
                Go to Users
              </Button>
            </Link>
          </CardContent>
        </Card>

        <Card className="bg-gray-50 dark:bg-gray-900 shadow-md">
          <CardHeader>
            <CardTitle className="text-lg font-semibold">Manage Projects</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Approve or reject pending projects.
            </p>
            <Link href="/admin/projects/pending">
              <Button variant="default" className="w-full">
                Review Projects
              </Button>
            </Link>
          </CardContent>
        </Card>

        <Card className="bg-gray-50 dark:bg-gray-900 shadow-md">
          <CardHeader>
            <CardTitle className="text-lg font-semibold">Settings</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Configure platform settings.
            </p>
            <Link href="/admin/settings">
              <Button variant="default" className="w-full">
                Go to Settings
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
