import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ClientLayout from "@/components/layout/ClientLayout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "The Zenith | Luxury Automotive Digital Showroom",
  description: "A Rolls Royce-inspired digital showroom for the ultimate automotive experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#0a0a0a]`}>
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}
