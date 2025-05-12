import type { Metadata } from 'next'
import { Archivo } from 'next/font/google'
import './globals.css'

const archivo = Archivo({
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: 'BudgetBeacon',
  description: 'Budget Tracking App'
}

export default function RootLayout ({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' className={archivo.className}>
      <body>{children}</body>
    </html>
  )
}
