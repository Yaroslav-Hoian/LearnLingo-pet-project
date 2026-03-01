import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "modern-normalize/modern-normalize.css";
import Header from "@/components/Header/Header";
import TanStackProvider from "@/components/TanStackProvider/TanStackProvider";
import { Toaster } from "react-hot-toast";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Travel Trucks",
  description:
    "Travel Trucks is a rental app for adventure trucks and RV-style vehicles, making it easy to find, book, and hit the road in a home on wheels. Explore freely with fully equipped trucks built for travel.",
  openGraph: {
    title: "Travel Trucks",
    description:
      "Travel Trucks is a rental app for adventure trucks and RV-style vehicles, making it easy to find, book, and hit the road in a home on wheels. Explore freely with fully equipped trucks built for travel.",
    url: "https://08-zustand-orcin-five.vercel.app",
    images: [
      {
        url: "/images/homePage/Picture-1x.png",
        width: 1200,
        height: 630,
        alt: "Travel Trucks",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable}`}>
        <TanStackProvider>
          <Header />
          <Toaster toastOptions={{ duration: 3500 }} />
          <main>{children}</main>
        </TanStackProvider>
      </body>
    </html>
  );
}
