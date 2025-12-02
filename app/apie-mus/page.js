import Image from 'next/image'
import trainersData from '@/data/trainers.json'
import ContactForm from '@/components/ContactForm'

export const metadata = {
  title: 'Apie mus - Sportogalia',
  description: 'Sužinokite daugiau apie Sportogalia - vaikų ir šeimos sporto akademiją',
}

export default function ApieMusPage() {
  const trainers = trainersData

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="relative bg-primary-900 text-white py-24 overflow-hidden">
        {/* Background Blobs */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
          <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-secondary-500/20 rounded-full blur-[100px] animate-blob"></div>
          <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary-500/20 rounded-full blur-[100px] animate-blob animation-delay-2000"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6 font-display">Apie SportoGalia</h1>
          <p className="text-xl text-primary-100 max-w-2xl mx-auto leading-relaxed">
            Mūsų istorija, vertybės ir žmonės, kurie kasdien rūpinasi jūsų vaikų sveikata.
          </p>
        </div>
      </div>

      {/* Mission Section */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="animate-fade-in-up">
            <h2 className="text-4xl font-bold text-primary-900 mb-6 font-display">
              Mūsų <span className="text-secondary-500">Misija</span>
            </h2>
            <p className="text-lg text-primary-700 mb-6 leading-relaxed">
              Sportogalia - tai vaikų ir šeimos sporto akademija, kurioje judėjimas yra džiaugsmas, o ne pareiga.
              Mūsų tikslas - padėti vaikams augti sveikiems, stipriems ir laimingiems per kūno kultūrą ir kineziterapiją.
            </p>
            <p className="text-lg text-primary-700 mb-8 leading-relaxed">
              Darbą su vaikais grindžiame šiuolaikinėmis kineziterapijos metodikomis, individualiu požiūriu ir
              pozityvia atmosfera, kurioje kiekvienas jaučiasi svarbus ir pastebėtas.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { title: 'Profesionalumas', desc: 'Patyre treneriai', icon: '🎓' },
                { title: 'Džiaugsmas', desc: 'Sportas turi teikti džiaugsmą', icon: '😄' },
                { title: 'Dėmesys', desc: 'Individualus požiūris', icon: '⭐' },
                { title: 'Bendruomenė', desc: 'Kuriame stiprius ryšius', icon: '🤝' },
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-3 bg-primary-50 p-4 rounded-xl border border-primary-100 hover:shadow-md transition-shadow">
                  <span className="text-2xl">{item.icon}</span>
                  <div>
                    <h4 className="font-bold text-primary-900">{item.title}</h4>
                    <p className="text-sm text-primary-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative animate-scale-in">
            <div className="absolute -inset-4 bg-secondary-100 rounded-[2rem] transform rotate-3"></div>
            <div className="absolute -inset-4 bg-primary-100 rounded-[2rem] transform -rotate-2 scale-95"></div>
            <div className="relative h-[500px] rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white">
              <Image
                src="/images/news-images/naujienos-3-card.jpg"
                alt="Vaikai sportuoja"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Team Section with Carousel */}
      <section className="py-24 bg-cream-100 relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary-900 font-display">Mūsų Komanda</h2>
            <p className="mt-4 text-primary-600 max-w-2xl mx-auto text-lg">
              Patyrę specialistai, kineziterapeutai ir treneriai, pasirengę padėti jūsų vaikui.
            </p>
          </div>

          {/* Carousel Container */}
          <div className="relative group">
            <div className="flex overflow-x-auto gap-6 pb-12 snap-x snap-mandatory hide-scrollbar" style={{ scrollBehavior: 'smooth' }}>
              {trainers.map((trainer, index) => (
                <div
                  key={index}
                  className="flex-none w-[300px] md:w-[350px] snap-center bg-white rounded-[2rem] overflow-hidden hover:shadow-xl transition-all duration-300 border border-cream-300 hover:-translate-y-2"
                >
                  <div className="h-80 overflow-hidden relative">
                    <Image
                      src={trainer.image}
                      alt={trainer.name}
                      fill
                      className="object-cover object-center transform hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary-900/90 via-primary-900/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                      <span className="text-secondary-300 font-medium">
                        {trainer.specialization}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-primary-900 mb-1 font-display">{trainer.name}</h3>
                    <p className="text-secondary-600 font-bold text-xs mb-3 uppercase tracking-wider">{trainer.role}</p>
                    <p className="text-primary-600 text-sm leading-relaxed line-clamp-3">
                      {trainer.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Gradient Masks */}
            <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-cream-100 to-transparent pointer-events-none z-10"></div>
            <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-cream-100 to-transparent pointer-events-none z-10"></div>
          </div>

          <div className="text-center mt-4 text-primary-400 text-sm animate-pulse">
            ← Slinkite norėdami pamatyti daugiau →
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary-900 mb-4 font-display">Susisiekite su mumis</h2>
            <p className="text-lg text-primary-600 max-w-2xl mx-auto">
              Mielai atsakysime į visus jūsų klausimus
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="bg-primary-50 p-8 rounded-[2rem] border border-primary-100">
                <div className="space-y-6">
                  {/* Email */}
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-2xl shadow-sm">✉️</div>
                    <div>
                      <p className="text-sm text-primary-500 font-bold uppercase tracking-wider">El. paštas</p>
                      <a href="mailto:info@sportogalia.lt" className="text-lg font-bold text-primary-900 hover:text-secondary-600 transition-colors">info@sportogalia.lt</a>
                    </div>
                  </div>
                  {/* Phone */}
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-2xl shadow-sm">📞</div>
                    <div>
                      <p className="text-sm text-primary-500 font-bold uppercase tracking-wider">Telefonas</p>
                      <a href="tel:+37060000000" className="text-lg font-bold text-primary-900 hover:text-secondary-600 transition-colors">+370 600 00000</a>
                    </div>
                  </div>
                  {/* Address */}
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-2xl shadow-sm">📍</div>
                    <div>
                      <p className="text-sm text-primary-500 font-bold uppercase tracking-wider">Adresas</p>
                      <p className="text-lg font-bold text-primary-900">Sporto g. 1, Vilnius</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Socials */}
              <div>
                <h3 className="text-xl font-bold text-primary-900 mb-4 font-display">Sekite mus</h3>
                <div className="flex space-x-4">
                  {['facebook', 'instagram', 'youtube', 'linkedin'].map((social) => (
                    <a key={social} href="#" className="w-12 h-12 bg-primary-900 text-white rounded-full flex items-center justify-center hover:bg-secondary-500 transition-colors hover:scale-110 shadow-md">
                      <Image
                        src={`/images/icons/${social}.svg`}
                        alt={social}
                        width={20}
                        height={20}
                        className="brightness-0 invert"
                      />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-8 rounded-[2rem] shadow-xl border border-cream-200">
              <h3 className="text-2xl font-bold text-primary-900 mb-6 font-display">
                Rašykite mums
              </h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('/images/pattern.svg')]"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-display">
            Norite susipažinti asmeniškai?
          </h2>
          <p className="text-xl text-primary-200 mb-10">
            Užsiregistruokite pirmai bandomajai treniruotei ir susipažinkite su mūsų komanda
          </p>
          <a
            href="/registracija"
            className="inline-block rounded-full bg-secondary-500 px-10 py-4 text-lg font-bold text-white shadow-lg hover:bg-secondary-600 hover:scale-105 transition-all duration-300"
          >
            Registruotis dabar
          </a>
        </div>
      </section>
    </div>
  )
}
