import { IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import { JotaiProviders } from "../components/providers";
import Provider from "jotai";
import ScrollNav from "../components/ScrollNav";

import Header from "../components/Header";

const ibm = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "ComponentCity",
  description: "Components and shit",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${ibm.className} relative`}>
        <Header />

        <JotaiProviders>{children}</JotaiProviders>
      </body>
    </html>
  );
}
