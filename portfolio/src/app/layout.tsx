import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Your Name — Full-Stack Engineer",
  description: "Personal portfolio of Your Name. Full-stack engineer focused on AI products.",
  keywords: ["developer", "portfolio", "full-stack", "AI", "engineer"],
  authors: [{ name: "Your Name" }],
  openGraph: {
    title: "Your Name — Full-Stack Engineer",
    description: "Personal portfolio of Your Name. Full-stack engineer focused on AI products.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Your Name — Full-Stack Engineer",
    description: "Personal portfolio of Your Name. Full-stack engineer focused on AI products.",
  },
};

export const viewport = {
  themeColor: "#0a0a0a",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1 max-w-5xl mx-auto px-6 w-full">
          {children}
        </main>
      </body>
    </html>
  );
}