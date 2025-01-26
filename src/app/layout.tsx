import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Al Bassir School',
  description: 'Centre de formation professionnelle',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning className="min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  )
}