import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { ToastProvider } from "@/components/ui/toast";
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono'


export const metadata = {
  title: "Haramaya University Developers Community",
  description: "Built by student developers at Haramaya University",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en' suppressHydrationWarning className={GeistSans.className}>
      <head>
      </head>
      <body>
        <ThemeProvider attribute="class">
          <ToastProvider>
            {children}
          </ToastProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
