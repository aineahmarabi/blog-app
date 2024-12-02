import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat' 
})

export const metadata: Metadata = {
  title: "JewelInTheMines",
  description: "JewelInTheMines explores hidden gems and untold stories from unexpected places, shining a light on beauty, resilience, and inspiration in life's overlooked corners.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="light">
      <body suppressHydrationWarning={true} className={`${montserrat.className} bg-white text-black`}>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
