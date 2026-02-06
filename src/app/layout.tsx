import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ThemeProvider from "@/components/ThemeProvider";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: {
    default: "Dr. Phuc Le | Head of Research",
    template: "%s | Dr. Phuc Le",
  },
  description:
    "Portfolio of Dr. Phuc Le - Head of Research & Content at Concero, PhD in Applied Physics.",
  openGraph: {
    title: "Dr. Phuc Le | Head of Research",
    description:
      "Portfolio of Dr. Phuc Le - Head of Research & Content at Concero, PhD in Applied Physics.",
    siteName: "Dr. Phuc Le",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@phuchoanglevn",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${outfit.variable} font-sans antialiased`}>
        <ThemeProvider>
          <Navbar />
          <main className="pt-16">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
