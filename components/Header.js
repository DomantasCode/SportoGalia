'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navigation = [
    { name: 'Apie mus', href: '/apie-mus' },
    { name: 'Naujienos', href: '/naujienos' },
    { name: 'Paslaugos', href: '/paslaugos' },
    { name: 'Registracija', href: '/registracija' },
  ]

  return (
    <header className="glass-header sticky top-0 z-50 transition-all duration-300">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="flex w-full items-center justify-between py-4">
          <div className="flex items-center">
            <Link href="/" className="group flex items-center gap-3">
              <div className="relative w-12 h-12 group-hover:scale-110 transition-transform duration-300">
                <Image
                  src="/images/logo.png"
                  alt="Sportogalia Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-2xl font-bold font-display tracking-tight text-primary-700 group-hover:text-secondary-600 transition-colors">
                Sporto<span className="text-secondary-600">Galia</span>
              </span>
            </Link>
          </div>

          {/* Desktop navigation */}
          <div className="ml-10 hidden space-x-1 lg:flex lg:items-center">
            {navigation.slice(0, -1).map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-primary-700 hover:text-secondary-600 hover:bg-primary-50 rounded-full transition-all duration-200"
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/registracija"
              className="ml-4 px-6 py-2.5 text-sm font-bold text-white bg-secondary-500 hover:bg-secondary-600 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
            >
              Registracija
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-lg p-2.5 text-primary-700 hover:bg-primary-50 transition-colors"
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
          <div className="lg:hidden border-t border-secondary-200 py-4 space-y-1 animate-fade-in-up bg-cream/95 backdrop-blur-md absolute left-0 right-0 px-4 shadow-xl rounded-b-3xl">
            {navigation.slice(0, -1).map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="block rounded-xl px-4 py-3 text-base font-medium text-primary-700 hover:bg-primary-50 hover:text-secondary-600 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/registracija"
              className="block mx-2 mt-4 px-4 py-3 text-center text-base font-bold text-white bg-secondary-500 hover:bg-secondary-600 rounded-xl shadow-md transition-all"
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
