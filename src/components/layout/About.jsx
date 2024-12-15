"use client";

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Lightbulb, Rocket, Heart } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const ListItem = React.forwardRef(
  ({ className, title, children, icon, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              className
            )}
            {...props}
          >
            <div className="flex items-center gap-2 text-sm font-medium leading-none">
              {icon}
              {title}
            </div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground mt-1">
              {children}
            </p>
          </a>
        </NavigationMenuLink>
      </li>
    );
  }
);

ListItem.displayName = "ListItem";

export function HUDCNavigationMenu() {
  return (
    <NavigationMenu className="inline-flex w-full">
      <NavigationMenuList className="">
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            About
          </NavigationMenuTrigger>
          <NavigationMenuContent className="mt-2 w-full md:w-auto">
            <ul className="grid gap-3 p-4 sm:p-6 grid-cols-1 sm:grid-cols-[.75fr_1fr] w-full md:w-[400px] lg:w-[500px]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a className="flex flex-col h-full w-full select-none justify-end rounded-md b p-4 m:p-6 no-underline outline-none focus:shadow-md">
                    <Rocket className="h-6 w-6 text-primary" />
                    <div className="mb-2 mt-4 text-lg font-medium text-primary">
                      Haramaya University Developer Community
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Learning and building together at Haramaya University and
                      beyond
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem
                title="Our Vision"
                icon={<Lightbulb className="h-4 w-4 text-primary-foreground" />}
              >
                Giving students access to modern tools and technologies.
              </ListItem>
              <ListItem
                title="Our Mission"
                icon={<Heart className="h-4 w-4 text-primary-foreground" />}
              >
                Every student can access quality education and resources.
              </ListItem>
              <ListItem
                title="Our Goal"
                icon={<Rocket className="h-4 w-4 text-primary-foreground" />}
              >
                To lead in university-industry collaboration for student
                opportunities.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
