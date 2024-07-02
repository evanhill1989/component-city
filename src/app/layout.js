import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "../components/providers";
import Provider from "jotai";
import ScrollNav from "../components/ScrollNav";

import Header from "../components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ComponentCity",
  description: "Components and shit",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} relative`}>
        <ScrollNav />
        <Header></Header>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
