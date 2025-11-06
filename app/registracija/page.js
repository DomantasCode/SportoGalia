import Script from 'next/script'
import Image from 'next/image'

export const metadata = {
  title: 'Registracija - Sportogalia',
  description: 'Užsiregistruokite į Sportogalia programas',
}

export default function RegistracijaPage() {
  return (
    <div className="bg-white">
      {/* Header with Image */}
      <div className="relative bg-dark-900 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/news-images/naujienos-20-card.jpg"
            alt="Registracija"
            fill
            className="object-cover opacity-30"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-dark-900 via-dark-900/90 to-dark-900/70"></div>
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Registracija
            </h1>
            <p className="mt-4 text-xl text-gray-200">
              Pasirinkite norimą būrelį ir užsiregistruokite į užsiėmimus
            </p>
          </div>
        </div>
      </div>

      {/* Registration Content */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        {/* Exoclass Iframe */}
        <div className="mb-16 bg-white rounded-2xl shadow-lg p-6 lg:p-8">
          <div className="mb-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">
              Pasirinkite būrelį
            </h2>
            <p className="text-gray-600">
              Pasirinkite norimą būrelį ir užsiregistruokite į užsiėmimus
            </p>
          </div>
          <div className="w-full">
            <iframe
              id="bureliai-iframe"
              src="https://embed.exoclass.com/lt/embed/provider/cc909582-9556-49fb-ae29-4ded9b2fee2e/group-management?color=3d1172"
              className="w-full min-h-[600px] border-0 rounded-lg"
              title="Būrelių registracija"
            />
            <Script
              src="https://exoclass.com/embed/js/resizer/embed-resizer.js"
              strategy="afterInteractive"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Info Section */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Kaip vyksta registracija?
            </h2>
            <div className="space-y-6">
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-full bg-primary-600 text-white font-bold">
                    1
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-900">Pasirinkite būrelį</h3>
                  <p className="mt-2 text-gray-600">
                    Aukščiau esančiame lange pasirinkite norimą būrelį ir užsiregistruokite į užsiėmimus.
                  </p>
                </div>
              </div>

              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-full bg-primary-600 text-white font-bold">
                    2
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-900">Patvirtinkite registraciją</h3>
                  <p className="mt-2 text-gray-600">
                    Per 1-2 darbo dienas su jumis susisieks mūsų specialistas ir patvirtins registraciją.
                  </p>
                </div>
              </div>

              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-full bg-primary-600 text-white font-bold">
                    3
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-900">Pirmasis vizitas</h3>
                  <p className="mt-2 text-gray-600">
                    Pirmojo vizito metu susipažįstame, įvertiname vaiko būklę ir aptariame treniruočių planą.
                  </p>
                </div>
              </div>

              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-full bg-primary-600 text-white font-bold">
                    4
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-900">Pradedame treniruotes</h3>
                  <p className="mt-2 text-gray-600">
                    Pradedame reguliarias treniruotes pagal sudarytą planą ir stebime progresą.
                  </p>
                </div>
              </div>
            </div>

            {/* Additional Info */}
            <div className="mt-10 p-6 bg-primary-50 rounded-lg border border-primary-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Svarbi informacija</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">•</span>
                  <span>Pirmasis bandomasis užsiėmimas yra nemokamas</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">•</span>
                  <span>Galite rinktis tarp grupinių ir individualių užsiėmimų</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">•</span>
                  <span>Treniruotės vyksta patogiu jums laiku</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">•</span>
                  <span>Galite bet kada konsultuotis su treneriais</span>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="mt-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Turite klausimų?</h3>
              <p className="text-gray-600 mb-2">
                Susisiekite su mumis telefonu ar el. paštu:
              </p>
              <div className="space-y-1">
                <p className="text-gray-700">
                  <strong>Tel:</strong>{' '}
                  <a href="tel:+37060000000" className="text-primary-600 hover:underline">
                    +370 600 00000
                  </a>
                </p>
                <p className="text-gray-700">
                  <strong>El. paštas:</strong>{' '}
                  <a href="mailto:info@sportogalia.lt" className="text-primary-600 hover:underline">
                    info@sportogalia.lt
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Additional Contact */}
          <div>
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Kiti klausimai?
              </h2>
              <p className="text-gray-600 mb-6">
                Jei turite klausimų ar reikia pagalbos registruojantis, nedvejodami susisiekite su mumis telefonu ar el. paštu.
              </p>
              <div className="space-y-3">
                <a
                  href="tel:+37060000000"
                  className="flex items-center gap-3 text-gray-700 hover:text-primary-600 transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>+370 600 00000</span>
                </a>
                <a
                  href="mailto:info@sportogalia.lt"
                  className="flex items-center gap-3 text-gray-700 hover:text-primary-600 transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>info@sportogalia.lt</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
