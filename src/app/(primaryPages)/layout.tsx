import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/globals.css";
import NavBar from "@/components/common/topnav/NavBar";
import Footer from "@/components/common/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rentrite",
  description: "We connect you with best home services",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
      <header className="bg-white">
        <NavBar/>
      </header>
      <main className={`${inter.className} bg-white`}>{children}</main>
      <Footer/>
      </body>
    </html>
  );
}
