import Image from 'next/image'

export const metadata = {
  title: 'Paslaugos - Sportogalia',
  description: 'Mūsų teikiamos kineziterapijos ir sporto paslaugos vaikams ir šeimoms',
}

export default function PaslaugosPage() {
  const services = [
    {
      title: 'Grupinė kineziterapija vaikams',
      description: 'Grupinės kineziterapijos užsiėmimai vaikams nuo 5 iki 12 metų. Treniruotės vyksta mažose grupėse (iki 8 vaikų), kad kiekvienas sulauktų individualaus dėmesio.',
      features: [
        'Laikysenos korekcija',
        'Pėdų stiprinimas',
        'Koordinacijos lavinimas',
        'Raumenų stiprinimas',
        'Funkcinio judėjimo treniruotės',
      ],
      duration: '60 min',
      frequency: '2-3 kartus per savaitę',
    },
    {
      title: 'Individuali kineziterapija',
      description: 'Individuali kineziterapija skirta vaikams, kuriems reikalingas ypatingas dėmesys. Programa pritaikoma pagal individualius vaiko poreikius.',
      features: [
        'Individualus užsiėmimų planas',
        'Intensyvus darbas su problema',
        'Tėvų konsultacijos',
        'Namų darbų programa',
        'Reguliarus progreso vertinimas',
      ],
      duration: '45 min',
      frequency: '1-2 kartus per savaitę',
    },
    {
      title: 'Funkcinės treniruotės',
      description: 'Funkcinės treniruotės, skirtos vaiko fiziniam pajėgumui ugdyti. Dėmesys skiriamas judėjimo kokybei ir kūno valdymui.',
      features: [
        'Jėgos lavinimas',
        'Ištvermės ugdymas',
        'Lankstumo didinimas',
        'Koordinacijos gerinimas',
        'Žaismingi pratimai',
      ],
      duration: '60 min',
      frequency: '2-3 kartus per savaitę',
    },
    {
      title: 'Šeimos treniruotės',
      description: 'Bendros treniruotės tėvams ir vaikams. Puiki galimybė praleisti laiką kartu ir kartu rūpintis sveikata.',
      features: [
        'Treniruotės visai šeimai',
        'Vienas ar abu tėvai + vaikai',
        'Linksma ir draugiška atmosfera',
        'Bendri iššūkiai',
        'Stipresni šeimos ryšiai',
      ],
      duration: '60 min',
      frequency: '1-2 kartus per savaitę',
    },
  ]

  return (
    <div className="bg-white">
      {/* Header with Image */}
      <div className="relative bg-dark-900 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/news-images/naujienos-17-card.jpg"
            alt="Paslaugos"
            fill
            className="object-cover opacity-30"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-dark-900 via-dark-900/90 to-dark-900/70"></div>
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Mūsų paslaugos
            </h1>
            <p className="mt-4 text-xl text-gray-200">
              Profesionali kineziterapija ir sporto užsiėmimai vaikams bei šeimoms
            </p>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-white to-gray-50 border-2 border-primary-100 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:border-primary-300 overflow-hidden"
            >
              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary-100 to-primary-200 rounded-bl-full opacity-50 group-hover:opacity-100 transition-opacity duration-300"></div>

              {/* Icon circle */}
              <div className="relative inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-600 text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl font-bold">{index + 1}</span>
              </div>

              <h3 className="relative text-2xl font-bold text-gray-900 mb-4 group-hover:text-primary-700 transition-colors">
                {service.title}
              </h3>
              <p className="relative text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>

              <div className="relative mb-6 p-4 bg-white rounded-xl border border-primary-100">
                <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                  <span className="w-1 h-5 bg-primary-600 rounded mr-2"></span>
                  Ką apima:
                </h4>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <svg className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative flex gap-6 text-sm bg-gradient-to-r from-primary-50 to-primary-100 rounded-xl p-4">
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-primary-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="font-semibold text-gray-900">{service.duration}</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-primary-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span className="font-semibold text-gray-900">{service.frequency}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Additional Info */}
      <div className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Kaip vyksta užsiėmimai?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-primary-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Registracija</h3>
              <p className="text-gray-600 text-sm">
                Užsiregistruokite per mūsų svetainę arba paskambinkite
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Pirmasis vizitas</h3>
              <p className="text-gray-600 text-sm">
                Susipažįstame, įvertiname vaiko būklę ir poreikius
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Plano sudarymas</h3>
              <p className="text-gray-600 text-sm">
                Parengiame individualią treniruočių programą
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Treniruotės</h3>
              <p className="text-gray-600 text-sm">
                Pradedame reguliarias treniruotes ir stebime progresą
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Norite sužinoti daugiau?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Susisiekite su mumis arba užsiregistruokite pirmam bandomajam užsiėmimui
          </p>
          <div className="flex gap-4 justify-center">
            <a
              href="/registracija"
              className="inline-block rounded-md bg-primary-600 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-primary-700 transition-colors"
            >
              Registruotis
            </a>
            <a
              href="/kontaktai"
              className="inline-block rounded-md bg-white px-6 py-3 text-base font-semibold text-gray-900 shadow-sm border border-gray-300 hover:bg-gray-50 transition-colors"
            >
              Susisiekti
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
