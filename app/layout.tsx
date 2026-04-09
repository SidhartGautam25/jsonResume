import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "codeResume",
  description: "A code-first resume builder with templates, variables, and live preview.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
