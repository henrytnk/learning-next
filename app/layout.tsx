import Navbar from "@/components/Navbar";
import "./globals.css";
import { Roboto } from 'next/font/google';

const roboto = Roboto({ weight: ['400'] })

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
