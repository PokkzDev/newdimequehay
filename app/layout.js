import "./globals.css";
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";
import { Inter } from "next/font/google";
import { Providers } from "./providers";

// Initialize the Inter font with Latin subset
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata = {
  title: "DimeQueHay",
  description: "Descubre eventos y lugares cercanos",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={inter.variable}>
      <body className={inter.className}>
        <Providers>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
