"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
import {
  LinkedinIcon,
  SendIcon,
  Users2Icon,
  GithubIcon,
  ArrowRight,
  BookOpenIcon,
  RocketIcon,
} from "lucide-react";
import { useRegistration } from "@/hooks/useRegistration";
import { useToast } from "@/hooks/use-toast";

const tabVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.3, ease: "easeIn" } },
};

const socialLinks = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/haramaya-university-developers-community",
    icon: LinkedinIcon,
    description: "Professional networking and updates",
  },
  {
    name: "Telegram",
    href: "https://t.me/hudevhub",
    icon: SendIcon,
    description: "Community chat and discussions",
  },
  {
    name: "GitHub",
    href: "https://github.com/hudevhub",
    icon: GithubIcon,
    description: "Open source collaborations",
  },
];

export function CommunityTabsComponent() {
  const [membershipForm, setMembershipForm] = useState({
    email: "",
    studentId: "",
    password: "",
  });

  const { isLoading, registerMembership } = useRegistration();
  const { toast } = useToast();

  const handleMembershipSubmit = async (e) => {
    e.preventDefault();

    try {
      const success = await registerMembership(membershipForm);
      console.log("API Call Success:", success);

      toast({
        title: success ? "Success" : "Error",
        description: success
          ? "Membership registration successful!"
          : "Failed to register. Please try again.",
        variant: success ? "success" : "destructive",
      });

      if (success) {
        setMembershipForm({ email: "", studentId: "", password: "" });
      }
    } catch (error) {
      console.error("Error during membership submission:", error);
      toast({
        title: "Error",
        description: "An unexpected error occurred. Please try again later.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <Tabs defaultValue="social" className="w-full">
        <TabsList className="grid w-full grid-cols-3 p-1 bg-black/20 backdrop-blur-sm rounded-xl mb-6">
          {[
            { value: "social", label: "Connect", icon: Users2Icon },
            { value: "exclusive", label: "Membership", icon: BookOpenIcon },
            { value: "organizers", label: "Organizers", icon: RocketIcon },
          ].map(({ value, label, icon: Icon }) => (
            <TabsTrigger
              key={value}
              value={value}
              className="relative px-6 py-2 rounded-lg data-[state=active]:bg-white data-[state=active]:text-black transition-all duration-300"
            >
              <span className="flex items-center gap-2">
                <Icon className="w-4 h-4" />
                <span className="hidden sm:inline">{label}</span>
              </span>
            </TabsTrigger>
          ))}
        </TabsList>

        <AnimatePresence mode="wait">
          <TabsContent value="social">
            <motion.div
              variants={tabVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <Card className="border-0 bg-black/20 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-gradient">
                    Connect with Our Community
                  </CardTitle>
                  <CardDescription className="text-zinc-400">
                    Join our growing network of developers
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  {socialLinks.map((link) => (
                    <motion.a
                      key={link.name}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-between p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                      whileHover={{ y: -1 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className="flex items-center gap-3">
                        <link.icon className="w-5 h-5 text-zinc-400 group-hover:text-white transition-colors" />
                        <div className="flex flex-col">
                          <span className="text-sm font-medium text-white">
                            {link.name}
                          </span>
                          <span className="text-xs text-zinc-400">
                            {link.description}
                          </span>
                        </div>
                      </div>
                      <ArrowRight className="w-4 h-4 text-zinc-400 group-hover:text-white transition-all transform group-hover:translate-x-1" />
                    </motion.a>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          </TabsContent>

          <TabsContent value="exclusive">
            <motion.div
              variants={tabVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <Card className="border-0 bg-black/20 backdrop-blur-sm">
                <form onSubmit={handleMembershipSubmit}>
                  <CardHeader>
                    <CardTitle className="text-xl font-semibold text-gradient">
                      Membership Registration
                    </CardTitle>
                    <CardDescription className="text-zinc-400">
                      Get exclusive access to resources and events
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {[
                      {
                        id: "email",
                        type: "email",
                        label: "Email",
                        placeholder: "your.email@example.com",
                      },
                      {
                        id: "studentId",
                        type: "text",
                        label: "Student ID",
                        placeholder: "Enter your student ID",
                      },
                      {
                        id: "password",
                        type: "password",
                        label: "Password",
                        placeholder: "Create a secure password",
                      },
                    ].map(({ id, type, label, placeholder }) => (
                      <div key={id} className="space-y-2">
                        <Label htmlFor={id} className="text-zinc-200">
                          {label}
                        </Label>
                        <Input
                          id={id}
                          type={type}
                          placeholder={placeholder}
                          value={membershipForm[id]}
                          onChange={(e) =>
                            setMembershipForm({
                              ...membershipForm,
                              [id]: e.target.value,
                            })
                          }
                          className="bg-white/5 border-white/10 text-white placeholder:text-zinc-500 focus:border-white/20 focus:ring-white/20"
                        />
                      </div>
                    ))}
                  </CardContent>

                  <CardFooter>
                    <Button
                      type="submit"
                      disabled={isLoading}
                      className="w-full bg-white hover:bg-zinc-100 text-black transition-all duration-300"
                    >
                      {isLoading ? "Processing..." : "Register for Membership"}
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </CardFooter>
                </form>
              </Card>
            </motion.div>
          </TabsContent>

          <TabsContent value="organizers">
            <motion.div
              variants={tabVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <Card className="border-0 bg-black/20 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-gradient">
                    Join the Organizers Team
                  </CardTitle>
                  <CardDescription className="text-zinc-400">
                    Help shape the future of our developer community
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center py-8">
                  <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Users2Icon className="w-16 h-16 mx-auto mb-4 text-white/20" />
                    <h3 className="text-lg font-semibold mb-2 text-gradient">
                      Applications Opening Soon
                    </h3>
                    <p className="text-zinc-400 text-sm max-w-md mx-auto">
                      We are looking for passionate developers to join our
                      organizing team. Stay tuned for upcoming opportunities!
                    </p>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          </TabsContent>
        </AnimatePresence>
      </Tabs>
    </div>
  );
}
