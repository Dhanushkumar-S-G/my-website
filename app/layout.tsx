import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { GoogleTagManager } from '@next/third-parties/google';
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dhanushkumar S G",
  description: "Software Engineer, Distributed Systems, F1 Enthusiast, SIM Racer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
      // Google Analytics
      <GoogleTagManager gtmId="G-XQZ9W51EBZ" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <div className="relative min-h-screen">
          <div className="absolute inset-0 -z-10 
            bg-[radial-gradient(circle,_black_1px,_transparent_1px)] 
            dark:bg-[radial-gradient(circle,_white_1px,_transparent_1px)] 
            opacity-15 
            [background-size:20px_20px]"
          />
          {children}
        </div>

        </ThemeProvider>
      </body>
    </html>
  );
}
