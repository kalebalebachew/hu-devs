import localFont from "next/font/local";
import { Nunito } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";

const nunito = Nunito({
  subsets: ["latin"],
  display: "swap",
});

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Haramaya University devs",
  description: "Built by student devs at Haramaya University",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={nunito.className}>
      <head></head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider attribute="class">{children}</ThemeProvider>
      </body>
    </html>
  );
}
