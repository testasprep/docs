import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TestAS Mastery — Official Documentation",
  description:
    "Official documentation for TestAS Mastery: a free, all-in-one prep platform for the TestAS exam.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
