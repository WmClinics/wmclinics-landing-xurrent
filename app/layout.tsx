import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'WMClinics - La voz del cliente',
  description:
    'WM Clinics, líder europeo en salud y belleza, ofrece tratamientos innovadores en medicina estética y bienestar. 20 años de experiencia y un equipo médico experto.',
  openGraph: {
    title: 'WMClinics - La voz del cliente',
    description:
      'WM Clinics, líder europeo en salud y belleza, ofrece tratamientos innovadores en medicina estética y bienestar. 20 años de experiencia y un equipo médico experto.',
    url: 'https://lavozdelcliente.wmclinics.es/',
    siteName: 'WMClinics',
    locale: 'es_ES',
    type: 'website',
    images: [
      {
        url: '/images/logo.png',
        width: 1000,
        height: 750,
        alt: 'WMClinics Logo',
      },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
    </html>
  )
}
