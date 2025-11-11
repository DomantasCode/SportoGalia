import Image from 'next/image'
import trainersData from '@/data/trainers.json'

export const metadata = {
  title: 'Treneriai - Sportogalia',
  description: 'Susipažinkite su mūsų profesionalia trenerių komanda',
}

export default function TreneriaiPage() {
  const trainers = trainersData

  return (
    <div className="bg-white">
      {/* Header with Image */}
      <div className="relative bg-dark-900 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/news-images/naujienos-18-card.jpg"
            alt="Treneriai"
            fill
            className="object-cover opacity-30"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-dark-900 via-dark-900/90 to-dark-900/70"></div>
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Mūsų treneriai
            </h1>
            <p className="mt-4 text-xl text-gray-200">
              Profesionalūs ir patyrę specialistai, kuriems rūpi jūsų vaikų sveikata
            </p>
          </div>
        </div>
      </div>

      {/* Trainers Grid */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {trainers.map((trainer, index) => (
            <div
              key={index}
              className="group relative bg-white border-2 border-gray-100 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:border-primary-300"
            >
              {/* Trainer Photo */}
              <div className="relative h-96 overflow-hidden">
                <Image
                  src={trainer.image}
                  alt={trainer.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900/95 via-dark-900/50 to-transparent"></div>

                {/* Experience badge */}
                <div className="absolute top-4 right-4">
                  <div className="bg-primary-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg backdrop-blur-sm">
                    Treneris #{index + 1}
                  </div>
                </div>

                {/* Trainer info overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <div className="mb-3">
                    <span className="inline-block bg-primary-600/90 backdrop-blur-sm px-4 py-1.5 rounded-full text-sm font-semibold">
                      {trainer.role}
                    </span>
                  </div>
                  <h3 className="text-4xl font-bold mb-2 group-hover:text-primary-300 transition-colors">
                    {trainer.name}
                  </h3>
                  <p className="text-gray-300 text-sm font-medium flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                    {trainer.qualification}
                  </p>
                </div>
              </div>

              <div className="p-8 bg-gradient-to-br from-white to-gray-50">
                <div className="mb-6 p-4 bg-primary-50 rounded-xl border-l-4 border-primary-600">
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    <div>
                      <span className="text-sm font-semibold text-gray-900 block mb-1">Specializacija:</span>
                      <span className="text-sm text-gray-700 font-medium">{trainer.specialization}</span>
                    </div>
                  </div>
                </div>

                <p className="text-gray-700 leading-relaxed">
                  {trainer.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Team Info */}
      <div className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Kodėl mūsų komanda ypatinga?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-4xl mb-4">🎓</div>
              <h3 className="font-semibold text-gray-900 mb-2">Aukšta kvalifikacija</h3>
              <p className="text-gray-600 text-sm">
                Visi mūsų treneriai turi aukštąjį išsilavinimą ir nuolat tobulėja
              </p>
            </div>

            <div className="text-center">
              <div className="text-4xl mb-4">❤️</div>
              <h3 className="font-semibold text-gray-900 mb-2">Meilė vaikams</h3>
              <p className="text-gray-600 text-sm">
                Dirbame su nuoširdžia meile vaikams ir džiaugsmu
              </p>
            </div>

            <div className="text-center">
              <div className="text-4xl mb-4">🌟</div>
              <h3 className="font-semibold text-gray-900 mb-2">Individualus požiūris</h3>
              <p className="text-gray-600 text-sm">
                Kiekvienas vaikas yra unikalus ir sulaukia individualaus dėmesio
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Norite susipažinti asmeniškai?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Užsiregistruokite pirmai bandomajai treniruotei ir susipažinkite su mūsų komanda
          </p>
          <a
            href="/registracija"
            className="inline-block rounded-md bg-primary-600 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-primary-700 transition-colors"
          >
            Registruotis
          </a>
        </div>
      </div>
    </div>
  )
}
