import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Wasit Ali — Sr. Software Engineer | Full-Stack Developer",
  description:
    "Sr. Software Engineer with 7+ years of experience building scalable SaaS platforms, REST APIs, e-commerce systems, Shopify applications, and business software using React, Next.js, Node.js, Laravel, Python, and Go.",
  keywords: [
    "Full Stack Developer",
    "Software Engineer",
    "SaaS Developer",
    "React Developer",
    "Next.js Developer",
    "Laravel Developer",
    "Node.js Developer",
    "FastAPI Developer",
    "Shopify Developer",
    "API Developer",
    "Wasit Ali",
    "Wasit Mirani",
  ],
  authors: [{ name: "Wasit Ali" }],
  creator: "Wasit Ali",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Wasit Ali — Sr. Software Engineer",
    description:
      "Sr. Software Engineer with 7+ years of experience building scalable SaaS platforms, APIs, and business applications.",
    siteName: "Wasit Ali",
  },
  twitter: {
    card: "summary_large_image",
    title: "Wasit Ali — Sr. Software Engineer",
    description:
      "Sr. Software Engineer with 7+ years of experience building scalable SaaS platforms, APIs, and business applications.",
    creator: "@wasitmirani1",
  },
  robots: {
    index: true,
    follow: true,
  },
};

// Runs before first paint so the stored theme is applied without a flash of light.
const themeScript = `(function(){try{var t=localStorage.getItem("theme");if(!t){t=window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}document.documentElement.classList.toggle("dark",t==="dark");document.documentElement.style.colorScheme=t}catch(e){}})()`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="min-h-full flex flex-col font-sans">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
