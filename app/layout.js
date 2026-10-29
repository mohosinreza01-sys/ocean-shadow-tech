
import { Manrope } from "next/font/google";
import "./globals.css";
import Navbar from "./components/layouts/Navbar";
import Footer from "./components/layouts/Footer";
import WhatsAppFloat from "./components/layouts/WhatsAppFloat";
import BottomNav from "./components/layouts/BottomNav";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Ocean Shadow Tech | Digital Solutions",
  description:
    "Modern websites, e-commerce platforms and digital solutions for growing businesses.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${manrope.variable} h-full antialiased`}>
      <body className={`${manrope.className} min-h-full flex flex-col`}>
        <Navbar />

        <main className="flex-1">
          {children}
        </main>

        <Footer />
        <WhatsAppFloat />
        <BottomNav />
      </body>
    </html>
  );
}
