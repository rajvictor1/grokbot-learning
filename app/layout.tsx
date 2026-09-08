import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GrokBot Learning — Rajesh Kumar",
  description: "A world-class learning guide created from a live GrokBot session: architecture, bot design, Chief of Staff routing, and hands-on specialist bots.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
