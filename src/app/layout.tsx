import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Silver Princess K | Architect of the Digital Era",
  description: "Portfolio of Silver Princess K - Web Designer and Developer. Neoclassical Greek meets Cyberpunk Minimalism.",
  keywords: ["Web Design", "Web Development", "React", "Next.js", "UI/UX", "Portfolio"],
  authors: [{ name: "Silver Princess K" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-obsidian text-marble antialiased">
        {children}
      </body>
    </html>
  );
}
