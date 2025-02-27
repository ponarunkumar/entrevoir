import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import 'font-awesome/css/font-awesome.min.css';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Entrevoir",
  description: "Share, Listen, Interact and Tune (SLIT)",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
