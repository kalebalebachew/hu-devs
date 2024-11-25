"use client";

import { useState } from "react";
import {
  Divider,
  Tab,
  TabGroup,
  TabList,
  TabPanels,
  TabPanel,
  TextInput,
} from "@tremor/react";

export default function Settings() {
  const [studentId, setStudentId] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleStudentIdUpdate = (e) => {
    e.preventDefault();
    console.log("Updated Student ID:", studentId);
  };

  const handleEmailUpdate = (e) => {
    e.preventDefault();
    console.log("Updated Email:", email);
  };

  const handlePasswordUpdate = (e) => {
    e.preventDefault();
    console.log("Updated Password:", password);
  };

  return (
    <div className="p-6 bg-gray-900">
      <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
        Settings
      </h3>
      <p className="mt-2 text-gray-600 dark:text-gray-300">
        Manage your student account details and preferences for HUDC.
      </p>

      <TabGroup className="mt-6">
        <TabList>
          <Tab className="text-gray-300 dark:text-gray-400 hover:text-gray-100 focus:text-gray-100">
            Account Details
          </Tab>
        </TabList>
        <TabPanels className="mt-8">
          <TabPanel>
            <form onSubmit={handleStudentIdUpdate} className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Student ID
                </h4>
                <p className="mt-1 text-gray-600 dark:text-gray-300">
                  Update your university-assigned Student ID.
                </p>
                <label
                  htmlFor="student-id"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mt-4"
                >
                  Student ID
                </label>
                <TextInput
                  type="text"
                  id="student-id"
                  value={studentId}
                  onChange={(e) => setStudentId(e.target.value)}
                  placeholder="e.g., HU20210001"
                  className="mt-2 w-full max-w-md"
                />
              </div>
              <button
                type="submit"
                className="mt-4 px-4 py-2 text-sm font-medium text-gray-300 border border-purple-600 rounded-md shadow hover:text-gray-100 hover:border-gray-400"
              >
                Update Student ID
              </button>
            </form>

            <Divider className="my-8" />

            <form onSubmit={handleEmailUpdate} className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Email Address
                </h4>
                <p className="mt-1 text-gray-600 dark:text-gray-300">
                  Update your email address
                </p>
                <TextInput
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="e.g., student@haramaya.edu.et"
                  className="mt-2 w-full max-w-md"
                />
              </div>
              <button
                type="submit"
                className="mt-4 px-4 py-2 text-sm font-medium text-gray-300 border border-purple-600 rounded-md shadow hover:text-gray-100 hover:border-gray-400"
              >
                Update Email
              </button>
            </form>

            <Divider className="my-8" />

            <form onSubmit={handlePasswordUpdate} className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Password
                </h4>
                <p className="mt-1 text-gray-600 dark:text-gray-300">
                  Update your password to keep your account secure.
                </p>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mt-4"
                >
                  New Password
                </label>
                <TextInput
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter new password"
                  className="mt-2 w-full max-w-md"
                />
              </div>
              <button
                type="submit"
                className="mt-4 px-4 py-2 text-sm font-medium text-gray-300 border border-purple-600 rounded-md shadow hover:text-gray-100 hover:border-gray-400"
              >
                Update Password
              </button>
            </form>
          </TabPanel>
        </TabPanels>
      </TabGroup>
    </div>
  );
}
