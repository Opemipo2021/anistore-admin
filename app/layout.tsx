import { ClerkProvider } from '@clerk/nextjs'
import './globals.css'
import type { Metadata } from 'next'
import { Urbanist } from 'next/font/google'
import { ModalProvider } from '@/providers/modal-provider'
import { ToasterProvider } from '@/providers/toast-provider'



const ubranist = Urbanist({ 
  subsets: ['latin'],
  variable: '--font-ubranist'
})

export const metadata: Metadata = {
  title: 'Admin Dashboard',
  description: 'Admin Dashboard',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${ubranist.variable} font-sans`}>
          <ToasterProvider />
          <ModalProvider />
          {children}
          </body>
      </html>
    </ClerkProvider>
  )
}
