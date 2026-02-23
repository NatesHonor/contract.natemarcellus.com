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
  title: "Hire Nathaniel Marcellus | Freelance Software Engineer & Technical Support",

  description:
    "Hire Nathaniel Marcellus for freelance software engineering, full-stack development, automation, and technical support. Secure contracts available via Upwork or direct engagement.",

  keywords: [
    "Hire Nathaniel Marcellus",
    "Nathaniel Marcellus freelance",
    "Freelance Software Engineer",
    "Full Stack Developer for hire",
    "Technical Support Specialist",
    "Automation Developer",
    "Upwork Software Engineer",
    "Remote Software Engineer",
    "Contract Developer",
  ],

  authors: [{ name: "Nathaniel Marcellus" }],
  creator: "Nathaniel Marcellus",

  openGraph: {
    title: "Hire Nathaniel Marcellus | Freelance Software Engineer",
    description:
      "Freelance software engineering and technical support. Contract Nathaniel Marcellus for secure, professional development services.",
    url: "https://contract.natemarcellus.com/",
    siteName: "Nathaniel Marcellus",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Hire Nathaniel Marcellus",
    description:
      "Freelance software engineering & technical support. Available for contract work.",
  },

  alternates: {
    canonical: "https://contract.natemarcellus.com/",
  },

  robots: {
    index: true,
    follow: true,
  },

  category: "technology",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-zinc-100`}
      >
        {children}
      </body>
    </html>
  );
}
