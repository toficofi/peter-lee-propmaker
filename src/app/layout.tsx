import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Peter Lee Propmaker",
  description: "Experienced & adaptable maker with over 29 years in propmaking for film/TV in the UK.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Script src="https://identity.netlify.com/v1/netlify-identity-widget.js" defer/>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
