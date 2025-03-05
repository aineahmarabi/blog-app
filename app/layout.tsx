import { Metadata } from 'next'
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
  title: {
    default: 'Jewel in the Mines',
    template: '%s | Jewel in the Mines'
  },
  description: 'Discover insights and stories about mining, precious stones, and mineral exploration',
  keywords: ['mining', 'jewels', 'precious stones', 'mineral exploration', 'gems', 'mining industry'],
  robots: {
    index: true,
    follow: true
  },
  openGraph: {
    title: 'Jewel in the Mines',
    description: 'Discover insights and stories about mining, precious stones, and mineral exploration',
    url: 'https://your-domain.com',
    siteName: 'Jewel in the Mines',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jewel in the Mines',
    description: 'Discover insights and stories about mining, precious stones, and mineral exploration',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="light">
      <head>
        <link 
          rel="canonical" 
          href={`https://your-domain.com${window.location.pathname}`} 
        />
      </head>
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
