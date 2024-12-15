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
  CheckCircle2,
  Lock,
  Sparkles,
  Bell,
} from "lucide-react";
import { useRegistration } from "@/hooks/useRegistration";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";

const tabVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
  exit: { opacity: 0, x: 20, transition: { duration: 0.3, ease: "easeIn" } },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.4, ease: "easeOut" }
  },
  hover: { 
    scale: 1.02,
    transition: { duration: 0.2 }
  }
};

const socialLinks = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/haramaya-university-developers-community",
    icon: LinkedinIcon,
    description: "Professional networking and updates",
    color: "bg-[#0077B5]/10 hover:bg-[#0077B5]/20",
    iconColor: "text-[#0077B5]",
  },
  {
    name: "Telegram",
    href: "https://t.me/hudevhub",
    icon: SendIcon,
    description: "Community chat and discussions",
    color: "bg-[#0088cc]/10 hover:bg-[#0088cc]/20",
    iconColor: "text-[#0088cc]",
  },
  {
    name: "GitHub",
    href: "https://github.com/hudevhub",
    icon: GithubIcon,
    description: "Open source collaborations",
    color: "bg-gray-800/10 hover:bg-gray-800/20",
    iconColor: "text-gray-800 dark:text-white",
  },
];

const features = [
  { icon: CheckCircle2, text: "Access to exclusive workshops" },
  { icon: Lock, text: "Private networking events" },
  { icon: Sparkles, text: "Early access to new resources" },
];

export function CommunityTabsComponent() {
  const [membershipForm, setMembershipForm] = useState({
    email: "",
    studentId: "",
    password: "",
  });
  const [activeTab, setActiveTab] = useState("exclusive");
  const { isLoading, registerMembership } = useRegistration();
  const { toast } = useToast();

  const handleMembershipSubmit = async (e) => {
    e.preventDefault();
    try {
      const success = await registerMembership(membershipForm);
      toast({
        title: success ? "Welcome Aboard! 🎉" : "Registration Failed",
        description: success
          ? "You're now part of our exclusive developer community!"
          : "Please check your details and try again.",
        variant: success ? "success" : "destructive",
      });
      if (success) {
        setMembershipForm({ email: "", studentId: "", password: "" });
      }
    } catch (error) {
      toast({
        title: "System Error",
        description: "We're experiencing technical difficulties. Please try again later.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background/80 p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
        </motion.div>
 <Tabs 
          value={activeTab} 
          onValueChange={setActiveTab}
          className="w-full"
        >
          <TabsList className="grid w-full grid-cols-3 p-1 bg-muted/5 backdrop-blur-sm rounded-2xl mb-8 border border-muted/20">
            {[
              { value: "exclusive", label: "Join Us", icon: BookOpenIcon },
              { value: "social", label: "Connect", icon: Users2Icon },
              { value: "organizers", label: "Lead", icon: RocketIcon }
            ].map(({ value, label, icon: Icon }) => (
              <TabsTrigger
                key={value}
                value={value}
                className={cn(
                  "relative px-6 py-3 rounded-xl transition-all duration-300",
                  "data-[state=active]:bg-primary data-[state=active]:text-primary-foreground",
                  "data-[state=active]:shadow-lg data-[state=active]:scale-105"
                )}
              >
                <span className="flex items-center gap-2">
                  <Icon className="w-5 h-5" />
                  <span className="hidden sm:inline font-medium">{label}</span>
                </span>
              </TabsTrigger>
            ))}
          </TabsList>

          <AnimatePresence mode="wait">
            <TabsContent value="exclusive">
              <motion.div
                variants={tabVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <Card className="border border-muted/20 bg-card/95 backdrop-blur-sm">
                  <form onSubmit={handleMembershipSubmit}>
                    <CardHeader>
                      <CardTitle className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                        Exclusive Membership
                      </CardTitle>
                      <CardDescription className="text-base">
                        Unlock premium developer resources and opportunities
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid gap-6">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                          {features.map(({ icon: Icon, text }, index) => (
                            <motion.div
                              key={index}
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: index * 0.1 }}
                              className="flex items-center gap-2 p-3 rounded-lg bg-muted/10"
                            >
                              <Icon className="w-5 h-5 text-primary" />
                              <span className="text-sm font-medium">{text}</span>
                            </motion.div>
                          ))}
                        </div>
                        <div className="space-y-4">
                          {[
                            { id: "email", type: "email", label: "Email Address", placeholder: "you@example.com" },
                            { id: "studentId", type: "text", label: "Student ID", placeholder: "Enter your student ID" },
                            { id: "password", type: "password", label: "Password", placeholder: "Create a secure password" }
                          ].map(({ id, type, label, placeholder }) => (
                            <div key={id} className="space-y-2">
                              <Label htmlFor={id} className="text-sm font-medium">
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
                                className="bg-background/50 border-muted/30 focus:border-primary"
                              />
                            </div>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button
                        type="submit"
                        disabled={isLoading}
                        className="w-70 bg-primary hover:bg-primary/90 text-primary-foreground font-medium py-6"
                      >
                        {isLoading ? (
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                            className="mr-2"
                          >
                            ⚡
                          </motion.div>
                        ) : (
                          "Register"
                        )}
                        <ArrowRight className="w-5 h-5 ml-2" />
                      </Button>
                    </CardFooter>
                  </form>
                </Card>
              </motion.div>
            </TabsContent>

            <TabsContent value="social">
              <motion.div
                variants={tabVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <Card className="border border-muted/20 bg-card/95 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                      Connect & Collaborate
                    </CardTitle>
                    <CardDescription className="text-base">
                      Join our vibrant developer community across platforms
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="grid gap-4">
                    {socialLinks.map((link, index) => (
                      <motion.a
                        key={link.name}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        variants={cardVariants}
                        initial="hidden"
                        animate="visible"
                        whileHover="hover"
                        transition={{ delay: index * 0.1 }}
                        className={cn(
                          "group flex items-center justify-between p-4 rounded-xl",
                          "transition-all duration-300",
                          link.color
                        )}
                      >
                        <div className="flex items-center gap-4">
                          <div className={cn(
                            "p-3 rounded-lg transition-colors",
                            "bg-background/80",
                            link.iconColor
                          )}>
                            <link.icon className="w-6 h-6" />
                          </div>
                          <div className="flex flex-col">
                            <span className="text-base font-semibold">
                              {link.name}
                            </span>
                            <span className="text-sm text-muted-foreground">
                              {link.description}
                            </span>
                          </div>
                        </div>
                        <ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-2 transition-all duration-300" />
                      </motion.a>
                    ))}
                  </CardContent>
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
                <Card className="border border-muted/20 bg-card/95 backdrop-blur-sm overflow-hidden">
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                      Become an Organizer
                    </CardTitle>
                    <CardDescription className="text-base">
                      Lead initiatives and shape our community`&apos;`s future
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="relative">
                    <div className="text-center py-12">
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 200, damping: 15 }}
                        className="w-24 h-24 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center"
                      >
                        <RocketIcon className="w-12 h-12 text-primary" />
                      </motion.div>
                      <h3 className="text-xl font-bold text-primary mb-2">
                        Applications Opening Soon
                      </h3>
                      <p className="text-muted-foreground max-w-md mx-auto">
                        We`&apos;`re preparing an exciting opportunity for passionate developers to join our organizing team. Stay tuned!
                      </p>
                    </div>
                    <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-background/20 to-transparent" />
                  </CardContent>
                </Card>
              </motion.div>
            </TabsContent>
          </AnimatePresence>
        </Tabs>
      </div>
    </div>
  );
}