import Link from 'next/link'
import Image from 'next/image'
import FAQ from '@/components/FAQ'
import trainersData from '@/data/trainers.json'

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

  const trainers = trainersData

  return (
    <main className="min-h-screen selection:bg-secondary-200 selection:text-primary-900 overflow-x-hidden bg-cream-50">
      {/* Hero Section - Friendly & Welcoming */}
      <section className="relative min-h-screen flex items-center justify-center pt-24 pb-20 bg-gradient-to-b from-white via-cream-50 to-cream-100">
        {/* Soft Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-secondary-100 rounded-full blur-3xl opacity-40"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-100 rounded-full blur-3xl opacity-30"></div>
        </div>

        <div className="w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            {/* Text Content */}
            <div className="flex-1 text-center lg:text-left space-y-8">
              <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-white rounded-full shadow-sm border-2 border-secondary-100">
                <div className="w-2 h-2 rounded-full bg-secondary-500 animate-pulse"></div>
                <span className="text-sm font-bold text-primary-700 tracking-wide">VAIKŲ IR ŠEIMOS SPORTO AKADEMIJA</span>
              </div>

              <h1 className="text-5xl lg:text-6xl font-bold text-primary-900 leading-tight font-display">
                Augame sveiki ir <br className="hidden lg:block" />
                <span className="relative inline-block mt-2">
                  <span className="relative z-10 text-secondary-600">laimingi kartu</span>
                  <svg className="absolute -bottom-2 left-0 w-full h-4" viewBox="0 0 200 12" preserveAspectRatio="none">
                    <path d="M0 8 Q 100 0, 200 8" fill="none" stroke="currentColor" strokeWidth="6" className="text-secondary-200" />
                  </svg>
                </span>
              </h1>

              <p className="text-lg lg:text-xl text-primary-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Kineziterapija ir sportas, kuris padeda vaikams augti sveikiems, stipriems ir laimingiems. Prisijunkite prie mūsų draugiškos sporto bendruomenės!
              </p>

              <div className="flex items-center justify-center lg:justify-start gap-4 flex-wrap pt-4">
                <Link
                  href="/registracija"
                  className="group px-8 py-4 text-base font-bold text-white bg-secondary-600 rounded-full shadow-md hover:bg-secondary-700 hover:shadow-lg transition-all duration-200 flex items-center gap-2"
                >
                  Pradėti dabar
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
                <Link
                  href="/apie-mus"
                  className="px-8 py-4 text-base font-bold text-primary-700 bg-white border-2 border-primary-200 rounded-full hover:bg-primary-50 hover:border-primary-300 transition-all duration-200"
                >
                  Apie mus
                </Link>
              </div>
            </div>

            {/* Hero Image */}
            <div className="flex-1 relative w-full max-w-lg">
              <div className="relative">
                {/* Decorative circles */}
                <div className="absolute -top-6 -left-6 w-24 h-24 bg-secondary-200 rounded-full"></div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary-200 rounded-full"></div>

                {/* Main image */}
                <div className="relative aspect-square rounded-[3rem] overflow-hidden border-8 border-white shadow-2xl">
                  <Image
                    src="/images/IRNL3777.jpg"
                    alt="Laimingi vaikai sportuoja"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>

                {/* Stats badge */}
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-white px-8 py-4 rounded-full shadow-xl border-4 border-cream-50">
                  <div className="flex items-center gap-6">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-secondary-600">500+</div>
                      <div className="text-xs font-medium text-primary-600">Laimingų vaikų</div>
                    </div>
                    <div className="w-px h-10 bg-cream-300"></div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-secondary-600">10+</div>
                      <div className="text-xs font-medium text-primary-600">Metų patirtis</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-12">
          <div className="bg-gradient-to-br from-primary-700 to-primary-900 rounded-[2.5rem] p-12 md:p-16 text-center relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-secondary-400/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary-500/10 rounded-full blur-3xl"></div>

            <div className="relative z-10 max-w-4xl mx-auto">
              <div className="w-16 h-16 mx-auto mb-6 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-3xl">
                ✨
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 font-display leading-tight">
                SportoGalia – tai <span className="text-secondary-300">šeima</span>
              </h2>
              <p className="text-lg md:text-xl text-cream-100 leading-relaxed">
                Mes kuriame aplinką, kurioje vaikai sportuoja su šypsena. Čia vaikai susiranda draugų,
                mokosi komandinio darbo ir stiprina sveikatą per džiaugsmą ir judėjimą.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-20 bg-cream-50">
        <div className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm border border-secondary-100 mb-4">
              <span className="text-2xl">🎥</span>
              <span className="text-sm font-bold text-primary-700 uppercase tracking-wide">Pamatykite mus veikime</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 font-display mb-4">
              Kaip atrodo mūsų <span className="text-secondary-600">treniruotės</span>
            </h2>
            <p className="text-lg text-primary-600 max-w-2xl mx-auto">
              Pažvelkite, kaip vaikai mėgaujasi judėjimu ir auga kartu su mumis
            </p>
          </div>

          <div className="relative rounded-[2rem] overflow-hidden shadow-2xl bg-primary-900 aspect-video">
            {/* Video placeholder - replace with actual video */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary-800 to-primary-900 flex items-center justify-center">
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border-4 border-white/20">
                  <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
                <p className="text-white font-medium">Video turinys čia</p>
                <p className="text-cream-200 text-sm mt-2">Pridėkite video URL arba įterptąjį kodą</p>
              </div>
            </div>
            {/* Uncomment and use this for actual video:
            <iframe
              className="w-full h-full"
              src="YOUR_VIDEO_URL"
              title="SportoGalia treniruočių video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            */}
          </div>
        </div>
      </section>

      {/* Trainers Section - Enhanced Design */}
      <section className="py-24 bg-gradient-to-b from-white via-cream-50 to-cream-100 relative overflow-hidden">
        {/* Background Decorations */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-secondary-100 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-100 rounded-full blur-3xl opacity-20"></div>

        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-white rounded-full shadow-lg border-2 border-secondary-200 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-secondary-400 to-secondary-600 rounded-full flex items-center justify-center text-white text-xl">
                👥
              </div>
              <span className="text-sm font-bold text-primary-700 uppercase tracking-wide">Mūsų Profesionalai</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-primary-900 font-display mb-6 leading-tight">
              Susipažinkite su mūsų <br className="hidden md:block" />
              <span className="relative inline-block mt-2">
                <span className="relative z-10 text-secondary-600">ekspertų komanda</span>
                <div className="absolute -bottom-2 left-0 w-full h-3 bg-secondary-200 rounded-full -z-10"></div>
              </span>
            </h2>
            <p className="text-lg md:text-xl text-primary-600 max-w-3xl mx-auto leading-relaxed">
              Kiekvienas mūsų specialistas turi didžiulę patirtį ir nuoširdžiai rūpinasi jūsų vaikų sveikata bei gerove
            </p>
          </div>

          {/* Enhanced Carousel Container */}
          <div className="relative">
            <div className="flex overflow-x-auto gap-8 pb-8 snap-x snap-mandatory" style={{ scrollBehavior: 'smooth' }}>
              {trainers.map((trainer, index) => (
                <div
                  key={index}
                  className="group flex-none w-[320px] md:w-[380px] snap-center relative"
                >
                  {/* Number Badge */}
                  <div className="absolute -top-4 -left-4 z-20 w-12 h-12 bg-gradient-to-br from-secondary-500 to-secondary-700 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-xl border-4 border-white group-hover:scale-110 transition-transform duration-300">
                    {index + 1}
                  </div>

                  {/* Card */}
                  <div className="bg-white rounded-[2.5rem] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-cream-200 group-hover:border-secondary-400 group-hover:-translate-y-3 relative">
                    {/* Gradient Overlay on top corner */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-secondary-200/20 to-transparent rounded-bl-[3rem] z-10"></div>

                    {/* Image Section */}
                    <div className="relative h-96 overflow-hidden">
                      <Image
                        src={trainer.image}
                        alt={trainer.name}
                        fill
                        className="object-cover object-center transform group-hover:scale-110 transition-transform duration-700"
                      />
                      {/* Gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-primary-900/95 via-primary-900/40 to-transparent"></div>

                      {/* Specialization Badge on hover */}
                      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                        <div className="bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full border-2 border-secondary-300 shadow-lg">
                          <p className="text-secondary-700 font-bold text-xs uppercase tracking-wider">
                            ⭐ {trainer.specialization}
                          </p>
                        </div>
                      </div>

                      {/* Info at bottom */}
                      <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20">
                          <h3 className="text-2xl font-bold text-white mb-1 font-display">{trainer.name}</h3>
                          <p className="text-secondary-300 font-bold text-sm uppercase tracking-wider">{trainer.role}</p>
                        </div>
                      </div>
                    </div>

                    {/* Description Section */}
                    <div className="p-6 bg-gradient-to-b from-cream-50 to-white">
                      <div className="flex items-start gap-3 mb-3">
                        <div className="flex-shrink-0 w-8 h-8 bg-secondary-100 rounded-full flex items-center justify-center text-lg">
                          📋
                        </div>
                        <p className="text-primary-700 text-sm leading-relaxed line-clamp-3 flex-1">
                          {trainer.description}
                        </p>
                      </div>

                      {/* Qualification badge */}
                      <div className="mt-4 pt-4 border-t border-cream-300 flex items-center gap-2">
                        <div className="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center text-sm">
                          🎓
                        </div>
                        <p className="text-xs text-primary-600 font-medium">{trainer.qualification}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Gradient Masks */}
            <div className="absolute top-0 left-0 w-24 h-full bg-gradient-to-r from-cream-100 via-cream-100/80 to-transparent pointer-events-none z-10"></div>
            <div className="absolute top-0 right-0 w-24 h-full bg-gradient-to-l from-cream-100 via-cream-100/80 to-transparent pointer-events-none z-10"></div>
          </div>

          {/* Scroll Hint with Animation */}
          <div className="text-center mt-8 flex items-center justify-center gap-4">
            <div className="flex items-center gap-2 text-primary-500 animate-pulse">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              <span className="text-sm font-medium">Slinkite</span>
            </div>
            <div className="flex gap-2">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="w-2 h-2 bg-secondary-400 rounded-full opacity-30"></div>
              ))}
            </div>
            <div className="flex items-center gap-2 text-primary-500 animate-pulse">
              <span className="text-sm font-medium">Daugiau</span>
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center mt-12">
            <Link
              href="/apie-mus"
              className="group inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-primary-700 to-primary-900 text-white font-bold rounded-full hover:from-primary-800 hover:to-primary-950 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105"
            >
              <span>Susipažinti su visa komanda</span>
              <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Activities Section - Redesigned */}
      <section className="py-20 bg-cream-50">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm border border-secondary-100 mb-4">
              <span className="text-2xl">🎯</span>
              <span className="text-sm font-bold text-primary-700 uppercase tracking-wide">Ką siūlome</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4 font-display">
              Mūsų <span className="text-secondary-600">veiklos</span>
            </h2>
            <p className="text-lg text-primary-600 max-w-2xl mx-auto">
              Įvairiapusės treniruotės ir užsiėmimai kiekvienam vaikui
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Grupinė kineziterapija', sub: '2-3 kartus/sav', img: '/images/news-images/naujienos-10-card.jpg', emoji: '🤸', link: '/paslaugos#paslauga-1' },
              { title: 'Individuali kineziterapija', sub: '1-2 kartus/sav', img: '/images/news-images/naujienos-11-card.jpg', emoji: '⭐', link: '/paslaugos#paslauga-2' },
              { title: 'Funkcinės treniruotės', sub: '2-3 kartus/sav', img: '/images/news-images/naujienos-13-card.jpg', emoji: '💪', link: '/paslaugos#paslauga-3' },
              { title: 'Šeimos treniruotės', sub: 'Savaitgaliais', img: '/images/news-images/naujienos-14-card.jpg', emoji: '👨‍👩‍👧', link: '/paslaugos#paslauga-4' },
            ].map((item, index) => (
              <Link
                key={index}
                href={item.link}
                className="group relative rounded-[2rem] overflow-hidden bg-white border-2 border-cream-200 hover:border-secondary-300 hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-900/90 via-primary-900/50 to-transparent"></div>

                  {/* Emoji badge */}
                  <div className="absolute top-4 right-4 w-12 h-12 bg-white rounded-full flex items-center justify-center text-2xl shadow-lg">
                    {item.emoji}
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-xl font-bold text-white mb-1 font-display">{item.title}</h3>
                    <p className="text-secondary-200 font-medium text-sm">{item.sub}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/paslaugos"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary-700 font-bold rounded-full shadow-md hover:shadow-lg hover:bg-primary-50 border-2 border-cream-200 transition-all"
            >
              Visos paslaugos
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-3xl px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-cream-100 rounded-full border border-secondary-100 mb-4">
              <span className="text-2xl">❓</span>
              <span className="text-sm font-bold text-primary-700 uppercase tracking-wide">DUK</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4 font-display">
              Dažniausiai užduodami klausimai
            </h2>
          </div>
          <FAQ items={homeFaqs} />
        </div>
      </section>

      {/* Contact Section - Friendly */}
      <section className="py-20 bg-cream-50">
        <div className="mx-auto max-w-5xl px-6 sm:px-8 lg:px-12">
          <div className="bg-gradient-to-br from-primary-700 to-primary-900 rounded-[2.5rem] p-12 md:p-16 text-center relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-secondary-400/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary-500/10 rounded-full blur-3xl"></div>

            <div className="relative z-10">
              <div className="w-16 h-16 mx-auto mb-6 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-4xl">
                👋
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-display">
                Pasiruošę pradėti?
              </h2>
              <p className="text-lg text-cream-100 mb-12 max-w-2xl mx-auto">
                Susisiekite su mumis ir mes padėsime išsirinkti tinkamiausią programą jūsų vaikui
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto mb-12">
                {[
                  { icon: '✉️', text: 'info@sportogalia.lt', href: 'mailto:info@sportogalia.lt' },
                  { icon: '📞', text: '+370 600 00000', href: 'tel:+37060000000' },
                  { icon: '⏰', text: 'Pr-Pn: 9:00 - 20:00', href: null }
                ].map((item, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border-2 border-white/20 hover:border-secondary-300 hover:bg-white/15 transition-all">
                    <div className="text-4xl mb-3">{item.icon}</div>
                    {item.href ? (
                      <a href={item.href} className="text-base font-semibold text-white hover:text-secondary-200 transition-colors block">{item.text}</a>
                    ) : (
                      <p className="text-base font-semibold text-white">{item.text}</p>
                    )}
                  </div>
                ))}
              </div>

              <Link
                href="/registracija"
                className="inline-flex items-center gap-2 px-10 py-5 text-lg font-bold text-primary-900 bg-white rounded-full hover:bg-cream-50 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Registruotis dabar
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
