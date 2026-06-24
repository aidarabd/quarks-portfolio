import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "Quarks Code — Custom Software for Businesses & Government",
    template: "%s | Quarks Code",
  },
  description:
    "Quarks Code develops custom software solutions that automate processes, integrate systems, and build digital platforms for businesses and government agencies. Based in Bishkek, Kyrgyzstan.",
  keywords: [
    "custom software development",
    "business automation",
    "government software",
    "web application development",
    "system integration",
    "Bishkek",
    "Kyrgyzstan",
    "process automation",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Quarks Code",
    title: "Quarks Code — Custom Software for Businesses & Government",
    description:
      "Custom software solutions that automate processes and build digital platforms for businesses and government agencies.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Quarks Code — Custom Software Development",
    description:
      "Custom software solutions that automate processes and build digital platforms.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
