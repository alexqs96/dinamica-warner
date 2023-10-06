'use client'
 
import { usePathname } from 'next/navigation'
import Image from "next/image";
import Link from "next/link";
import { useState } from 'react';

export function Header() {
  const pathname = usePathname()
  const [openMenu, setOpenMenu] = useState(false)

  const navigation = [
    { name: 'Votar', href: '/vota' },
    { name: 'Estadisticas', href: '/stats' },
    { name: 'Estudiantes', href: '/estudiantes' },
    { name: 'Contacto', href: '/contacto' },
  ]

  return (
    <>
      <header className='flex max-md:flex-col md:items-center md:gap-10 z-50 py-2 mx-auto'>
        <div className='md:w-fit w-full flex items-center justify-between md:min-h-[70px]'>
          <Link href="/" className="w-fit block" onClick={() => setOpenMenu(false)}>
            <Image
              src="/img/pescar.png"
              alt="Pescar Logo"
              width={128.1}
              height={64}
              className="w-48"
              unoptimized
              priority
            />
          </Link>

          <button onClick={() => setOpenMenu(!openMenu)} className={"md:hidden hamburger block" + (openMenu ? " is-active" : "")}>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

        <nav
          className={
            "transition-height md:flex gap-3 md:gap-5 md:mt-1 overflow-hidden max-md:w-full max-md:flex-col max-md:order-3 max-md:text-2xl font-medium" +
            (openMenu
              ? " max-md:pt-5 max-md:h-[300px] flex"
              : " max-md:h-0")
          }
        >
          {navigation.map((e) => (
            <Link
              key={e.name}
              href={e.href}
              aria-current={e.name}
              onClick={() => setOpenMenu(false)}
              className={
                "border-b-2 hover:border-b-orange-600 transition w-fit" +
                (pathname === e.href
                  ? " border-b-orange-600 font-bold"
                  : " border-b-transparent") +
                (openMenu ? "" : " max-md:hidden")
              }
            >
              {e.name}
            </Link>
          ))}
        </nav>
      </header>
    </>
  );
}
