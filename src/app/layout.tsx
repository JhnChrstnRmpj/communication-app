"use client";

import { Geist, Geist_Mono } from "next/font/google";
import { usePathname } from "next/navigation";
import { ReactNode, useEffect } from "react";
import Navbar from "../components/navbar";
import "./globals.css";

// Define the fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  const pathname = usePathname();

  useEffect(() => {
    console.log("Current pathname:", pathname);
  }, [pathname]);

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div className="flex flex-col min-h-screen">
          {pathname !== "/" && <Navbar />}

          <main className="flex-1 p-4 bg-gray-100">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
