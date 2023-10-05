import './globals.css'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import Image from 'next/image'
import { Header } from '@/components/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Dinamica Warner 2023',
  description: 'Juga a esta dinamica con tematica de Warner Studios.',
  metadataBase: new URL('https://dinamicawarner.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph:{
    authors: ["Alumnos de Fundación Pescar 2023"],
    type: "website",
    url: "https://dinamicawarner.vercel.app",
    title: "Dinamica Warner 2023",
    siteName: "Dinamica Warner 2023",
    description: 'Juga a esta dinamica con tematica de Warner Studios.',
    images: "/og_image.png"
  }
}

export default function RootLayout({ children}) {
  return (
    <html lang="es">
      <body className={inter.className+ " max-w-screen-2xl mx-auto w-[90%] lg:w-[95%]"}>
        <Header />
        <main>
        {children}
        </main>
        <footer className='py-4 font-medium'>
          <span>© 2023 hecho con ❤️ por estudiantes de Pescar.</span>
        </footer>
      </body>
    </html>
  )
}
