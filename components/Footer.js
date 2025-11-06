import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative bg-dark-950 text-white overflow-hidden border-t border-dark-800">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* About section */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/images/logo-white.svg"
                alt="Sportogalia Logo"
                width={36}
                height={36}
              />
              <h3 className="text-2xl font-bold text-white">
                Sportogalia
              </h3>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Vaikų ir šeimos sporto akademija. Kineziterapija ir sportas vaikams.
              Judėjimas - tai džiaugsmas, o ne pareiga.
            </p>
            <div className="mt-6 flex space-x-3">
              {/* Social media icons */}
              <a href="#" className="w-10 h-10 rounded-lg bg-dark-800 hover:bg-primary-600 flex items-center justify-center transition-all hover:scale-110" aria-label="Facebook">
                <Image src="/images/icons/facebook.svg" alt="Facebook" width={20} height={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-dark-800 hover:bg-primary-600 flex items-center justify-center transition-all hover:scale-110" aria-label="Instagram">
                <Image src="/images/icons/instagram.svg" alt="Instagram" width={20} height={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-dark-800 hover:bg-primary-600 flex items-center justify-center transition-all hover:scale-110" aria-label="YouTube">
                <Image src="/images/icons/youtube.svg" alt="YouTube" width={20} height={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-dark-800 hover:bg-primary-600 flex items-center justify-center transition-all hover:scale-110" aria-label="LinkedIn">
                <Image src="/images/icons/linkedin.svg" alt="LinkedIn" width={20} height={20} />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Nuorodos</h3>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li>
                <Link href="/apie-mus" className="hover:text-primary-400 transition-colors inline-flex items-center group">
                  <span className="mr-2 text-primary-600 group-hover:translate-x-1 transition-transform">→</span>
                  Apie mus
                </Link>
              </li>
              <li>
                <Link href="/paslaugos" className="hover:text-primary-400 transition-colors inline-flex items-center group">
                  <span className="mr-2 text-primary-600 group-hover:translate-x-1 transition-transform">→</span>
                  Paslaugos
                </Link>
              </li>
              <li>
                <Link href="/treneriai" className="hover:text-primary-400 transition-colors inline-flex items-center group">
                  <span className="mr-2 text-primary-600 group-hover:translate-x-1 transition-transform">→</span>
                  Treneriai
                </Link>
              </li>
              <li>
                <Link href="/kontaktai" className="hover:text-primary-400 transition-colors inline-flex items-center group">
                  <span className="mr-2 text-primary-600 group-hover:translate-x-1 transition-transform">→</span>
                  Kontaktai
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Kontaktai</h3>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li className="flex items-start gap-2">
                <Image src="/images/icons/envelope.svg" alt="" width={18} height={18} className="mt-0.5" />
                <a href="mailto:info@sportogalia.lt" className="hover:text-primary-400 transition-colors">
                  info@sportogalia.lt
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Image src="/images/icons/telephone.svg" alt="" width={18} height={18} className="mt-0.5" />
                <a href="tel:+37060000000" className="hover:text-primary-400 transition-colors">
                  +370 600 00000
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-dark-800 text-center">
          <p className="text-gray-500 text-sm">
            &copy; {currentYear} Sportogalia. Visos teisės saugomos.
          </p>
        </div>
      </div>
    </footer>
  )
}
