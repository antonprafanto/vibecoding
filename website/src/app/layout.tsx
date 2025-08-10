import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "VibeCoding - AI-First Development Learning Platform",
  description: "Belajar membuat aplikasi dan website dengan bantuan AI. Platform pembelajaran interaktif untuk pemula yang ingin menguasai AI-first development.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className="font-sans antialiased bg-gray-50">
        {children}
      </body>
    </html>
  );
}
