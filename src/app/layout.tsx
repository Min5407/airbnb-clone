import './globals.css'
import type { Metadata } from 'next'
import { Nunito } from 'next/font/google'
import { Navbar } from '@/components/navigation/Navbar'
import Head from 'next/head'
import { cn } from '@/lib/tailwind'

const font = Nunito({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Airbnb',
  description: 'Airbnb Clone Project',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="theme-default">
      <Head>
        <meta name="viewport" content="viewport-fit=cover" />
      </Head>
      <body
        className={cn([
          font.className,
          'text-[12px] sm:text-[14px] lg:text-[16px]',
        ])}
      >
        <Navbar />
        {children}
      </body>
    </html>
  )
}
