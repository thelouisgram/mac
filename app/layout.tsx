import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Geist_Mono } from "next/font/google";
import "./globals.css";

// Configure Plus Jakarta Sans
const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"], // Captures both text and bold headings
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MAC - Forward Thinking Digital Marketing Agency",
  description: "An award-winning SEO agency focused on understanding you.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${plusJakartaSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      {/* 
        Applying `font-sans` here sets Plus Jakarta Sans as the global fallback 
        for everything nested inside the body.
      */}
      <body className="min-h-full flex flex-col font-sans">
        {children}
      </body>
    </html>
  );
}