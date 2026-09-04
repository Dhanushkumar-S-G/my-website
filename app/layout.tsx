import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { GoogleTagManager } from '@next/third-parties/google';
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider"
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

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
      <GoogleTagManager gtmId="G-XQZ9W51EBZ" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <div className="relative min-h-screen">
          <div className="absolute inset-0 -z-10 
            bg-[radial-gradient(circle,_var(--foreground)_1px,_transparent_1px)] 
            opacity-[0.09] 
            [background-size:22px_22px]"
          />
          {children}
        </div>

        </ThemeProvider>
      </body>
    </html>
  );
}
