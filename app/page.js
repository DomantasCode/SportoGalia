import Link from 'next/link'
import Image from 'next/image'
import FAQ from '@/components/FAQ'

export default function Home() {
  const homeFaqs = [
    {
      question: 'Nuo kokio amžiaus vaikai gali lankyti treniruotes?',
      answer: 'Priimame vaikus nuo 3 metų amžiaus. Kiekvienam amžiui turime pritaikytas programas ir grupes.',
    },
    {
      question: 'Ar galima ateiti į bandomąją treniruotę?',
      answer: 'Taip, siūlome pirmą bandomąją treniruotę, kad vaikas galėtų susipažinti su treneriu ir aplinka.',
    },
    {
      question: 'Ką reikia atsinešti į treniruotę?',
      answer: 'Patogius sportinius drabužius, sportinę avalynę (švarią), vandens buteliuką ir gerą nuotaiką!',
    },
    {
      question: 'Kas yra kineziterapija?',
      answer: 'Kineziterapija - tai gydymas judesiu. Ji padeda formuoti tinkamą laikyseną, stiprinti raumenis, lavinti koordinaciją ir pusiausvyrą.',
    },
  ]

  const features = [
    {
      title: 'Kineziterapija',
      description: 'Profesionali kineziterapija vaikams ir suaugusiems. Tinkama laikysena ir sveikas judėjimas.',
      icon: '🏃',
    },
    {
      title: 'Grupinės treniruotės',
      description: 'Įdomios ir prasmingos grupinės treniruotės, kurios stiprina kūną ir gerina nuotaiką.',
      icon: '👥',
    },
    {
      title: 'Individualus dėmesys',
      description: 'Kiekvienas vaikas sulaukia individualaus dėmesio ir pritaikytos treniruočių programos.',
      icon: '⭐',
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-dark-900 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/IRNL3777.jpg"
            alt="Sports Training"
            fill
            className="object-cover opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-dark-900 via-dark-900/80 to-transparent"></div>
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 sm:py-32 lg:py-40">
          <div className="max-w-3xl">
            <div className="inline-flex items-center rounded-full px-4 py-1.5 mb-8 bg-primary-600/20 border border-primary-500/30 backdrop-blur-sm">
              <span className="text-sm font-medium text-primary-200">Vaikų ir šeimos sporto akademija</span>
            </div>
            <h1 className="text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
              Judėjimas - tai džiaugsmas
            </h1>
            <p className="mt-6 text-xl leading-8 text-gray-300 max-w-2xl">
              Kineziterapija ir sportas vaikams ir šeimoms. Padedame vaikams augti sveikiems,
              stipriems ir laimingiems.
            </p>
            <div className="mt-10 flex items-center gap-x-6 flex-wrap gap-y-4">
              <Link
                href="/registracija"
                className="group relative inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-primary-600 to-primary-700 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-primary-600/50 hover:shadow-xl hover:shadow-primary-600/60 hover:scale-105 transition-all duration-200"
              >
                <span className="relative">Registruotis dabar</span>
              </Link>
              <Link
                href="/apie-mus"
                className="group inline-flex items-center text-base font-semibold text-gray-200 hover:text-white transition-colors"
              >
                Sužinoti daugiau
                <span className="ml-2 group-hover:translate-x-1 transition-transform" aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 sm:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Kodėl pasirinkti mus?
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              Mūsų misija - padėti vaikams atrasti judėjimo džiaugsmą
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="group relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 hover:border-primary-500 hover:-translate-y-2"
              >
                {/* Gradient background on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <div className="relative">
                  <div className="text-6xl mb-6 transform group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-primary-700 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-24 sm:py-32 bg-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-4">
              Mūsų pasiekimai
            </h2>
            <p className="text-xl text-gray-600">
              Skaičiai, kuriais didžiuojamės
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary-100 mb-4 group-hover:bg-primary-200 transition-all duration-300 group-hover:scale-110">
                <span className="text-3xl">🏆</span>
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">10+</div>
              <div className="text-gray-600 font-medium">Metų patirtis</div>
            </div>

            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary-100 mb-4 group-hover:bg-primary-200 transition-all duration-300 group-hover:scale-110">
                <span className="text-3xl">👨‍👩‍👧‍👦</span>
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">500+</div>
              <div className="text-gray-600 font-medium">Laimingų vaikų</div>
            </div>

            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary-100 mb-4 group-hover:bg-primary-200 transition-all duration-300 group-hover:scale-110">
                <span className="text-3xl">⭐</span>
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">4.9/5</div>
              <div className="text-gray-600 font-medium">Tėvų įvertinimas</div>
            </div>

            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary-100 mb-4 group-hover:bg-primary-200 transition-all duration-300 group-hover:scale-110">
                <span className="text-3xl">🎯</span>
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">15+</div>
              <div className="text-gray-600 font-medium">Treniruočių programų</div>
            </div>
          </div>
        </div>
      </section>

      {/* Activities Gallery Section */}
      <section className="py-24 sm:py-32 bg-gradient-to-b from-gray-50 to-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-4">
              Mūsų veiklos
            </h2>
            <p className="text-xl text-gray-600">
              Įvairiapusės treniruotės ir užsiėmimai
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/paslaugos#paslauga-1" className="relative h-80 rounded-2xl overflow-hidden group cursor-pointer shadow-xl hover:shadow-2xl transition-all duration-300">
              <Image
                src="/images/news-images/naujienos-10-card.jpg"
                alt="Grupinė kineziterapija vaikams"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-900/90 via-dark-900/40 to-transparent"></div>
              <div className="absolute inset-0 bg-primary-600/0 group-hover:bg-primary-600/20 transition-colors duration-300"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-2xl font-bold text-white mb-2">Grupinė kineziterapija vaikams</h3>
                <p className="text-gray-200 text-sm">2-3 kartus per savaitę, 60 min</p>
              </div>
            </Link>

            <Link href="/paslaugos#paslauga-2" className="relative h-80 rounded-2xl overflow-hidden group cursor-pointer shadow-xl hover:shadow-2xl transition-all duration-300">
              <Image
                src="/images/news-images/naujienos-11-card.jpg"
                alt="Individuali kineziterapija"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-900/90 via-dark-900/40 to-transparent"></div>
              <div className="absolute inset-0 bg-primary-600/0 group-hover:bg-primary-600/20 transition-colors duration-300"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-2xl font-bold text-white mb-2">Individuali kineziterapija</h3>
                <p className="text-gray-200 text-sm">1-2 kartus per savaitę, 45 min</p>
              </div>
            </Link>

            <Link href="/paslaugos#paslauga-3" className="relative h-80 rounded-2xl overflow-hidden group cursor-pointer shadow-xl hover:shadow-2xl transition-all duration-300">
              <Image
                src="/images/news-images/naujienos-13-card.jpg"
                alt="Funkcinės treniruotės"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-900/90 via-dark-900/40 to-transparent"></div>
              <div className="absolute inset-0 bg-primary-600/0 group-hover:bg-primary-600/20 transition-colors duration-300"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-2xl font-bold text-white mb-2">Funkcinės treniruotės</h3>
                <p className="text-gray-200 text-sm">2-3 kartus per savaitę, 60 min</p>
              </div>
            </Link>

            <Link href="/paslaugos#paslauga-4" className="relative h-80 rounded-2xl overflow-hidden group cursor-pointer shadow-xl hover:shadow-2xl transition-all duration-300">
              <Image
                src="/images/news-images/naujienos-14-card.jpg"
                alt="Šeimos treniruotės"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-900/90 via-dark-900/40 to-transparent"></div>
              <div className="absolute inset-0 bg-primary-600/0 group-hover:bg-primary-600/20 transition-colors duration-300"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-2xl font-bold text-white mb-2">Šeimos treniruotės</h3>
                <p className="text-gray-200 text-sm">1-2 kartus per savaitę, 60 min</p>
              </div>
            </Link>
          </div>

          <div className="text-center mt-12">
            <Link
              href="/paslaugos"
              className="inline-flex items-center text-primary-600 hover:text-primary-700 font-semibold text-lg transition-colors"
            >
              Peržiūrėti visas paslaugas
              <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 sm:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FAQ items={homeFaqs} />
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 sm:py-32 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-4">
              Susisiekite su mumis
            </h2>
            <p className="text-xl text-gray-600">
              Mielai atsakysime į visus jūsų klausimus
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-100 mb-4 group-hover:bg-primary-200 transition-all duration-300">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">El. paštas</h3>
              <a href="mailto:info@sportogalia.lt" className="text-primary-600 hover:text-primary-700 transition-colors">
                info@sportogalia.lt
              </a>
            </div>

            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-100 mb-4 group-hover:bg-primary-200 transition-all duration-300">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Telefonas</h3>
              <a href="tel:+37060000000" className="text-primary-600 hover:text-primary-700 transition-colors">
                +370 600 00000
              </a>
            </div>

            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-100 mb-4 group-hover:bg-primary-200 transition-all duration-300">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Darbo laikas</h3>
              <p className="text-gray-600 text-sm">
                Pr-Pn: 9:00 - 20:00<br />
                Š: 10:00 - 16:00
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative bg-gradient-to-r from-primary-600 to-primary-700 py-20 overflow-hidden">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Pradėkite savo kelionę jau šiandien
          </h2>
          <p className="text-xl text-primary-100 mb-10 max-w-2xl mx-auto">
            Prisijunkite prie mūsų bendruomenės ir atraskite judėjimo džiaugsmą kartu su profesionaliais treneriais
          </p>
          <Link
            href="/registracija"
            className="inline-flex items-center rounded-xl bg-white px-10 py-4 text-lg font-semibold text-primary-700 shadow-2xl hover:bg-gray-50 hover:scale-105 transition-all duration-200"
          >
            Registruotis dabar
            <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  )
}
