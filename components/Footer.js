import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative bg-primary-900 text-white overflow-hidden pt-20">
      {/* Wave Shape */}
      <div className="absolute top-0 left-0 right-0 h-16 bg-cream rounded-b-[50%] transform -translate-y-1/2 scale-x-110"></div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* About section */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="relative w-12 h-12 bg-white rounded-full p-1">
                <Image
                  src="/images/logo.png"
                  alt="Sportogalia Logo"
                  fill
                  className="object-contain p-1"
                />
              </div>
              <h3 className="text-2xl font-bold text-white font-display">
                Sporto<span className="text-secondary-500">Galia</span>
              </h3>
            </div>
            <p className="text-primary-100 text-sm leading-relaxed max-w-xs">
              Vaikų ir šeimos sporto akademija. Kineziterapija ir sportas vaikams.
              Judėjimas - tai džiaugsmas, o ne pareiga.
            </p>
            <div className="mt-6 flex space-x-3">
              {/* Social media icons */}
              {['facebook', 'instagram', 'youtube', 'linkedin'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-10 h-10 rounded-full bg-primary-800 hover:bg-secondary-500 hover:text-white flex items-center justify-center transition-all hover:scale-110 group shadow-lg"
                  aria-label={social}
                >
                  <Image
                    src={`/images/icons/${social}.svg`}
                    alt={social}
                    width={20}
                    height={20}
                    className="group-hover:brightness-0 group-hover:invert transition-all"
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white font-display">Nuorodos</h3>
            <ul className="space-y-3 text-primary-100 text-sm">
              {[
                { name: 'Apie mus', href: '/apie-mus' },
                { name: 'Paslaugos', href: '/paslaugos' },
                { name: 'Treneriai', href: '/treneriai' },
                { name: 'Kontaktai', href: '/kontaktai' },
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="hover:text-secondary-400 transition-colors inline-flex items-center group">
                    <span className="mr-2 text-secondary-500 group-hover:translate-x-1 transition-transform">→</span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white font-display">Kontaktai</h3>
            <ul className="space-y-3 text-primary-100 text-sm">
              <li className="flex items-start gap-3">
                <div className="mt-0.5 p-2 bg-primary-800 rounded-full">
                  <Image src="/images/icons/envelope.svg" alt="" width={14} height={14} />
                </div>
                <a href="mailto:info@sportogalia.lt" className="hover:text-secondary-400 transition-colors self-center">
                  info@sportogalia.lt
                </a>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-0.5 p-2 bg-primary-800 rounded-full">
                  <Image src="/images/icons/telephone.svg" alt="" width={14} height={14} />
                </div>
                <a href="tel:+37060000000" className="hover:text-secondary-400 transition-colors self-center">
                  +370 600 00000
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-800 text-center flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-300 text-sm">
            &copy; {currentYear} Sportogalia. Visos teisės saugomos.
          </p>
          <div className="text-primary-300 text-xs">
            Designed with <span className="text-secondary-500">Energy</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
