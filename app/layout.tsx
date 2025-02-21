import Navbar from "@/components/Navbar";
import "./globals.css";
import { Roboto } from 'next/font/google';
import { Metadata } from "next";

const roboto = Roboto({ weight: ['400'] })
export const metadata: Metadata = {
  title: 'Learning Next.js',
  description: 'This is a project made with Next.js, Typescript and Tailwind CSS.',
  keywords: 'Next.js, Typescript, Tailwind CSS'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Navbar />
        <main className="max-w-3xl mx-auto py-20">
          {children}
        </main>
      </body>
    </html>
  );
}
