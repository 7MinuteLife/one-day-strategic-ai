import './globals.css'
import type { Metadata } from 'next'
import Layout from '@/components/layout/Layout'

export const metadata: Metadata = {
  title: 'Strategic AI Training',
  description: 'One-Day Strategic AI Training for your team',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white">
        <Layout>
          {children}
        </Layout>
      </body>
    </html>
  )
}
