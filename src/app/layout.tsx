import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import { cn } from "@/lib/utils";
import { title } from "./home/data";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: title,
  description: "Experienced & adaptable maker with over 29 years in propmaking for film/TV in the UK.",
  metadataBase: new URL("https://peterleepropmaker.com")
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Script src="https://identity.netlify.com/v1/netlify-identity-widget.js" defer/>
      <body className={cn(inter.className, "bg-neutral-50")}>{children}</body>
    </html>
  );
}
