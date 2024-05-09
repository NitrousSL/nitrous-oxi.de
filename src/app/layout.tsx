import './globals.css'

import type { Metadata } from 'next'
import      { Inter    } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Nitrous™',
  description: 'flagship open source osint tool with an open api written for research purposes',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
