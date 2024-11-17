import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export const ContactForm = () => {
  return (
    <Card className="bg-transparent text-white border border-purple-500 border-opacity-35">
      <CardHeader>
        <CardTitle className="text-purple-500">We would love to hear from you</CardTitle>
        <CardDescription className="text-gray-300">
          Leave us a message and we will get back to you.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="name" className="text-purple-500">Name</Label>
          <Input
            id="name"
            placeholder="Your full name"
            className="bg-gray-800 text-white border-gray-700"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email" className="text-purple-500">Email</Label>
          <Input
            id="email"
            type="email"
            placeholder="Your email address"
            className="bg-gray-800 text-white border-gray-700"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="message" className="text-purple-500">Message</Label>
          <Input
            id="message"
            placeholder="Your message"
            className="bg-gray-800 text-white border-gray-700"
          />
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full bg-purple-500 text-black hover:bg-purple-700"
        >Send</Button>
      </CardFooter>
    </Card>
  );
};
