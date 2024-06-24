import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "../components/providers";
import Provider from "jotai";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ComponentCity",
  description: "Components and shit",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
