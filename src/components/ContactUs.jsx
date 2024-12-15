"use client";

import { useState } from "react";
import { motion } from "framer-motion";
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
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { SendIcon } from "lucide-react";

export const ContactForm = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    setFormState({ name: "", email: "", message: "" });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-md mx-auto"
    >
      <Card className="bg-card backdrop-blur-sm border border-border">
        <form onSubmit={handleSubmit}>
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-primary">
              Get in Touch
            </CardTitle>
            <CardDescription className="text-sm text-muted-foreground">
              Have questions? We&apos;d love to hear from you.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {[
              {
                id: "name",
                label: "Name",
                type: "text",
                placeholder: "Your full name",
              },
              {
                id: "email",
                label: "Email",
                type: "email",
                placeholder: "you@example.com",
              },
            ].map(({ id, label, type, placeholder }, index) => (
              <motion.div
                key={id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 * (index + 1) }}
                className="space-y-2"
              >
                <Label htmlFor={id} className="text-muted-foreground text-sm">
                  {label}
                </Label>
                <Input
                  id={id}
                  type={type}
                  placeholder={placeholder}
                  value={formState[id]}
                  onChange={(e) =>
                    setFormState({ ...formState, [id]: e.target.value })
                  }
                  className="bg-muted/10 border border-border text-primary placeholder:text-muted-foreground"
                  required
                />
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="space-y-2"
            >
              <Label
                htmlFor="message"
                className="text-muted-foreground text-sm"
              >
                Message
              </Label>
              <Textarea
                id="message"
                placeholder="Your message..."
                value={formState.message}
                onChange={(e) =>
                  setFormState({ ...formState, message: e.target.value })
                }
                className="min-h-[100px] bg-muted/10 border border-border text-primary placeholder:text-muted-foreground"
                required
              />
            </motion.div>
          </CardContent>
          <CardFooter>
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
              aria-live="polite"
            >
              {isSubmitting ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex items-center space-x-2"
                >
                  <span>Sending...</span>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex items-center space-x-2"
                >
                  <SendIcon className="w-4 h-4" />
                  <span>Send Message</span>
                </motion.div>
              )}
            </Button>
          </CardFooter>
        </form>
      </Card>
    </motion.div>
  );
};
