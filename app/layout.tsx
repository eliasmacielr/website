import type { Metadata } from 'next'
import React from 'react'

import './globals.css'

import Header from '../components/Header'
import Footer from '../components/Footer'
import XAxis from '../components/XAxis'
import YAxis from '../components/YAxis'

import 'computer-modern/index.css'

export const metadata: Metadata = {
  title: "Elias Maciel's Home Page",
  description: 'Home Page of Elias Maciel',
  keywords: [
    'Elias Maciel',
    'Elias',
    'Maciel',
    'Computer Science',
    'Computer',
    'Science',
    'Web Development',
    'Web',
    'Development',
    'Lambda',
    'Sigma',
  ],
  authors: [{ name: 'Elias Maciel', url: 'eliasmacielr.org' }],
  creator: 'Elias Maciel',
  publisher: 'Elias Maciel',
  icons: {
    icon: '/favicon.svg',
  },
  verification: {
    google: 'FrZcpKTMcwGimHMN3SklTRWHn6f_70mft1wwDln8Cas',
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  colorScheme: 'light',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body>
        <Header />
        <div className='mx-auto w-full max-w-screen-xl py-16 lg:px-8'>
          {children}
        </div>
        <Footer />
        <XAxis />
        <YAxis />
        <div id='overlay-x-axis'></div>
        <div id='overlay-y-axis'></div>
      </body>
    </html>
  )
}
