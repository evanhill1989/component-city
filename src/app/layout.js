import { Inter } from "next/font/google";
import "./globals.css";
import { JotaiProviders } from "../components/providers";
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
        <Header />
        <ScrollNav />
        <JotaiProviders>{children}</JotaiProviders>
      </body>
    </html>
  );
}
