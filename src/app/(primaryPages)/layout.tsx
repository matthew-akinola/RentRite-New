import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "@/app/globals.css";
import NavBar from "@/components/common/topnav/NavBar";
import Footer from "@/components/common/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

const outfit = Outfit({ subsets: ['latin'], variable: '--font-outfit'});

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
      <main className={`${outfit.variable} bg-white`}>{children}</main>
      <Footer/>
      </body>
    </html>
  );
}
