"use client";

import { InstagramIcon, LinkedinIcon, SendIcon } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-12 bg-background text-foreground">
      <div className="container mx-auto flex flex-col items-center justify-center space-y-6 px-4">
        {/* Divider */}
        <div className="w-full border-t border-border"></div>
        
        {/* Social Links */}
        <div className="flex space-x-6">
          <a
            href="https://www.linkedin.com/company/haramaya-university-developers-community"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-primary transition-colors duration-200"
          >
            <LinkedinIcon size={24} />
          </a>
          <a
            href="https://t.me/hudevhub"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Telegram"
            className="hover:text-primary transition-colors duration-200"
          >
            <SendIcon size={24} />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="hover:text-primary transition-colors duration-200"
          >
            <InstagramIcon size={24} />
          </a>
        </div>

        {/* Footer Text */}
        <p className="text-center text-sm text-muted-foreground">
          © 2024 Haramaya University Developers Community. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
