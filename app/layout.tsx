import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
});

export const metadata: Metadata = {
  title: {
    default: "Moiz Bookwala",
    template: "%s | Moiz Bookwala",
  },
  description:
    "Backend Developer specializing in FastAPI, React and scalable web applications.",
  keywords: [
    "Moiz Bookwala",
    "Portfolio",
    "Backend Developer",
    "FastAPI",
    "Python",
    "React",
    "Next.js",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`dark ${inter.variable} ${spaceGrotesk.variable} scroll-smooth`}
    >
      <body className="bg-background text-foreground antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}