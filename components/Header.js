'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navigation = [
    { name: 'Pagrindinis', href: '/' },
    { name: 'Apie mus', href: '/apie-mus' },
    { name: 'Naujienos', href: '/naujienos' },
    { name: 'Paslaugos', href: '/paslaugos' },
    { name: 'Treneriai', href: '/treneriai' },
    { name: 'Kontaktai', href: '/kontaktai' },
    { name: 'Registracija', href: '/registracija' },
  ]

  return (
    <header className="bg-dark-900/95 backdrop-blur-md shadow-lg sticky top-0 z-50 border-b border-dark-800">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="flex w-full items-center justify-between py-4 lg:py-5">
          <div className="flex items-center">
            <Link href="/" className="group flex items-center gap-3">
              <Image
                src="/images/logo-white.svg"
                alt="Sportogalia Logo"
                width={40}
                height={40}
                className="group-hover:scale-110 transition-transform"
              />
              <span className="text-2xl font-bold text-white group-hover:text-primary-300 transition-colors">
                Sportogalia
              </span>
            </Link>
          </div>

          {/* Desktop navigation */}
          <div className="ml-10 hidden space-x-1 lg:flex lg:items-center">
            {navigation.slice(0, -1).map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="px-4 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-dark-800 rounded-lg transition-all"
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/registracija"
              className="ml-4 px-6 py-2.5 text-base font-semibold text-white bg-gradient-to-r from-primary-600 to-primary-700 rounded-lg shadow-md shadow-primary-600/30 hover:shadow-lg hover:shadow-primary-600/50 hover:scale-105 transition-all"
            >
              Registracija
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-lg p-2.5 text-gray-300 hover:bg-dark-800 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Atidaryti meniu</span>
              {mobileMenuOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-dark-800 py-4 space-y-1">
            {navigation.slice(0, -1).map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="block rounded-lg px-4 py-3 text-base font-medium text-gray-300 hover:bg-dark-800 hover:text-white transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/registracija"
              className="block mx-2 mt-4 px-4 py-3 text-center text-base font-semibold text-white bg-gradient-to-r from-primary-600 to-primary-700 rounded-lg shadow-md hover:shadow-lg transition-all"
              onClick={() => setMobileMenuOpen(false)}
            >
              Registracija
            </Link>
          </div>
        )}
      </nav>
    </header>
  )
}
