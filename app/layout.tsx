import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TestAS Exam Free Prep for German University Admission: The Complete TestAS Mastery Guide",
  description:
    "Official publication-grade documentation for TestAS Mastery: procedural logic labs, subject-specific modules (Engineering & Medicine), time-bound exam simulator, and AI tutor for international students.",
  keywords: [
    "TestAS Exam Prep",
    "TestAS Mastery",
    "German University Admission",
    "Latin Square TestAS",
    "Figure Sequences TestAS",
    "TestAS Engineering Lab",
    "TestAS Medicine Lab",
    "TestAS Exam Simulator",
  ],
  authors: [{ name: "TestAS Mastery Academic Team" }],
  openGraph: {
    title: "TestAS Exam Free Prep: The Complete TestAS Mastery Guide",
    description: "Publication-grade walkthrough of every module, interactive feature, and design philosophy behind TestAS Mastery.",
    url: "https://testasprepdocs.vercel.app",
    siteName: "TestAS Mastery Official Documentation",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="dark">
      <body>{children}</body>
    </html>
  );
}
