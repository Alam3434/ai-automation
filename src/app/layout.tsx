import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://omni-automation.vercel.app"), // change to your custom domain later
  title: "Omni Automations — AI that saves hours every week",
  description:
    "Workflow automations, voice agents, websites, and knowledgebases for local businesses.",
  icons: [
    { rel: "icon", url: "/favicon.ico" },
    { rel: "apple-touch-icon", url: "/apple-touch-icon.png" },
  ],
  openGraph: {
    title: "Omni Automations",
    description:
      "Done-for-you AI automations that save 4–10 hours per employee per week.",
    url: "https://omni-automation.vercel.app",
    siteName: "Omni Automations",
    images: ["/og.png"], // 1200x630 recommended
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Omni Automations",
    description:
      "Done-for-you AI automations that save hours every week.",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
