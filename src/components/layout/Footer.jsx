"use client";

import { InstagramIcon, LinkedinIcon, SendIcon } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-12 bg-black text-white">
      <div className="container mx-auto flex flex-col items-center justify-center space-y-6 px-4">
      <div className="w-full border-t border-gray-700"></div>
        <div className="flex space-x-6">
          <a
            href="https://www.linkedin.com/company/haramaya-university-developers-community"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <LinkedinIcon
              size={24}
              className="hover:text-purple-500 transition-colors duration-200"
            />
          </a>
          <a
            href="https://t.me/hudevhub"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Telegram"
          >
            <SendIcon
              size={24}
              className="hover:text-purple-500 transition-colors duration-200"
            />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <InstagramIcon
              size={24}
              className="hover:text-purple-500 transition-colors duration-200"
            />
          </a>
        </div>

        

        <p className="text-center text-sm text-gray-400">
          © 2024 Haramaya University Developers Community. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
