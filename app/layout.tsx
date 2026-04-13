import type { Metadata } from "next";
import { Header } from "@/components/layout";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI with CARE — Prompting for real life",
  description:
    "A warm, practical guide to using AI for daily life, studies, and early career. Built for the AI Workshop for Young Women.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="antialiased min-h-screen">
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
