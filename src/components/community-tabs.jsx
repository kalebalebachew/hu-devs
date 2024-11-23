"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LinkedinIcon, SendIcon } from "lucide-react";
import { useRegistration } from "@/hooks/useRegistration";
import { Toast } from "@/components/ui/toast"; // Adjust the import based on your structure

export function CommunityTabsComponent() {
  const [membershipForm, setMembershipForm] = useState({
    email: "",
    studentId: "",
    password: "",
  });

  const { isLoading, registerMembership } = useRegistration();

  const [toast, setToast] = useState({
    isVisible: false,
    type: "success", // 'success' or 'error'
    message: "",
  });

  const handleMembershipSubmit = async (e) => {
    e.preventDefault();
    const success = await registerMembership(membershipForm);
    setToast({
      isVisible: true,
      type: success ? "success" : "error",
      message: success
        ? "Membership registration successful!"
        : "Failed to register. Please try again.",
    });

    if (success) {
      setMembershipForm({ email: "", studentId: "", password: "" });
    }

    // Auto-dismiss the toast after 5 seconds
    setTimeout(() => {
      setToast({ ...toast, isVisible: false });
    }, 5000);
  };

  return (
    <>
      {/* Toast Notification */}
      {toast.isVisible && (
        <Toast
          type={toast.type}
          message={toast.message}
          onDismiss={() => setToast({ ...toast, isVisible: false })}
        />
      )}

      <Tabs defaultValue="social" className="w-[700]">
        <TabsList className="grid w-full grid-cols-3 gap-4 bg-gray-900 font-semibold border border-purple-500 border-opacity-40 text-purple-500">
          <TabsTrigger
            value="social"
            className="hover:bg-purple-500 hover:text-black focus:bg-purple-500 focus:text-black"
          >
            Connect
          </TabsTrigger>
          <TabsTrigger
            value="exclusive"
            className="hover:bg-purple-500 hover:text-black focus:bg-purple-500 focus:text-black"
          >
            Membership
          </TabsTrigger>
          <TabsTrigger
            value="organizers"
            className="hover:bg-purple-500 hover:text-black focus:bg-purple-500 focus:text-black"
          >
            Organizers
          </TabsTrigger>
        </TabsList>

        {/* Connect Tab */}
        <TabsContent value="social">
          <Card className="bg-black text-white p-4 border border-purple-500 border-opacity-35">
            <CardHeader>
              <CardTitle className="text-purple-500">
                Connect with Our Community
              </CardTitle>
              <CardDescription className="text-gray-300">
                Follow us on social media and join our groups.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <a
                  href="https://www.linkedin.com/company/haramaya-university-developers-community"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-purple-500 text-black hover:bg-purple-700 inline-flex items-center justify-center px-4 py-2 rounded-md font-semibold"
                >
                  <LinkedinIcon className="mr-2 h-4 w-4" />
                  Follow us on LinkedIn
                </a>
              </div>
              <div className="space-y-2">
                <a
                  href="https://t.me/hudevhub"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-purple-500 text-black hover:bg-purple-700 inline-flex items-center justify-center px-4 py-2 rounded-md font-semibold"
                >
                  <SendIcon className="mr-2 h-4 w-4" />
                  Join our Telegram
                </a>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Membership Tab */}
        <TabsContent value="exclusive">
          <Card className="bg-black text-white border-purple-500 border-opacity-40">
            <form onSubmit={handleMembershipSubmit}>
              <CardHeader>
                <CardTitle className="text-purple-500">
                  Membership Registration
                </CardTitle>
                <CardDescription className="text-gray-300">
                  Register for exclusive access to resources, events, and more.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Your email address"
                    value={membershipForm.email}
                    onChange={(e) =>
                      setMembershipForm({
                        ...membershipForm,
                        email: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="student-id">Student ID</Label>
                  <Input
                    id="student-id"
                    placeholder="Your student ID number"
                    value={membershipForm.studentId}
                    onChange={(e) =>
                      setMembershipForm({
                        ...membershipForm,
                        studentId: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="Enter your password"
                    value={membershipForm.password}
                    onChange={(e) =>
                      setMembershipForm({
                        ...membershipForm,
                        password: e.target.value,
                      })
                    }
                  />
                </div>
              </CardContent>
              <CardFooter>
                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-purple-500 text-black hover:bg-purple-700"
                >
                  {isLoading ? "Submitting..." : "Register Now"}
                </Button>
              </CardFooter>
            </form>
          </Card>
        </TabsContent>

        {/* Organizers Tab */}
        <TabsContent value="organizers">
          <Card className="bg-black text-white border-purple-500 border-opacity-40">
            <CardHeader>
              <CardTitle className="text-purple-500">
                Join the Organizers Team
              </CardTitle>
              <CardDescription className="text-gray-300">
                Applications coming soon. Stay tuned!
              </CardDescription>
            </CardHeader>
          </Card>
        </TabsContent>
      </Tabs>
    </>
  );
}
