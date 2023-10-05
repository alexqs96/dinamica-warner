import WarnerLogo from '@/components/Logo'
import './globals.css'
import { Inter } from 'next/font/google'
import Link from 'next/link'

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

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={inter.className+ " max-w-screen-2xl mx-auto w-[95%]"}>
        <header className='py-4 sticky top-0 backdrop-blur-md'>
          <Link href="/">
            <WarnerLogo styles={"w-[128px] lg:w-[256px]"}/>
          </Link>
        </header>
        <main>
        {children}
        </main>
        <footer>
          <span>Desarrollado por Alumnos de Pescar ~ Santader ©2023</span>
        </footer>
      </body>
    </html>
  )
}
