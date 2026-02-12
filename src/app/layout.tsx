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
    default: "Phuc Le - Researcher, Builder, DeFi Native",
    template: "%s | Phuc Le",
  },
  description:
    "PhD physicist turned cross-chain infrastructure researcher. DeFi native with deep expertise in AMMs, lending markets, MEV, and protocol design. Leading research at Concero.",
  openGraph: {
    title: "Phuc Le - Researcher, Builder, DeFi Native",
    description:
      "PhD physicist turned cross-chain infrastructure researcher. DeFi native with deep expertise in AMMs, lending markets, MEV, and protocol design. Leading research at Concero.",
    siteName: "Phuc Le",
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
