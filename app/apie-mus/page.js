import Image from 'next/image'

export const metadata = {
  title: 'Apie mus - Sportogalia',
  description: 'Sužinokite daugiau apie Sportogalia - vaikų ir šeimos sporto akademiją',
}

export default function ApieMusPage() {
  return (
    <div className="bg-white">
      {/* Header Section with Image */}
      <div className="relative bg-dark-900 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/news-images/naujienos-2-card.jpg"
            alt="Sportogalia"
            fill
            className="object-cover opacity-30"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-dark-900 via-dark-900/90 to-dark-900/70"></div>
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Apie mus
            </h1>
            <p className="mt-4 text-xl text-gray-200">
              Sportogalia - tai daugiau nei sporto klubas
            </p>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Mūsų misija
            </h2>
            <div className="space-y-4 text-gray-600 text-lg">
              <p>
                Sportogalia - tai vaikų ir šeimos sporto akademija, kurioje judėjimas yra džiaugsmas, o ne pareiga.
              </p>
              <p>
                Mūsų tikslas - padėti vaikams augti sveikiems, stipriems ir laimingais per kūno kultūrą ir kineziterapiją.
                Tikime, kad kiekvienas vaikas turi unikalių gebėjimų ir mūsų užduotis - juos atskleisti.
              </p>
              <p>
                Darbą su vaikais grindžiame šiuolaikinėmis kineziterapijos metodikomis, individualiu požiūriu ir
                pozityvia atmosfera, kurioje kiekvienas jaučiasi svarbus ir pastebėtas.
              </p>
            </div>
          </div>

          <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/images/news-images/naujienos-3-card.jpg"
              alt="Vaikai sportuoja"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Values Section */}
        <div className="mt-16 bg-primary-50 rounded-2xl p-8 border border-primary-200">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Mūsų vertybės</h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <li className="flex items-start">
              <span className="text-primary-600 font-bold mr-3 text-xl">✓</span>
              <span className="text-gray-700">Profesionalumas ir atsakingumas</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary-600 font-bold mr-3 text-xl">✓</span>
              <span className="text-gray-700">Individualus dėmesys kiekvienam vaikui</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary-600 font-bold mr-3 text-xl">✓</span>
              <span className="text-gray-700">Šiuolaikinės ir įrodymus pagrįstos metodikos</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary-600 font-bold mr-3 text-xl">✓</span>
              <span className="text-gray-700">Pozityvi ir draugiška atmosfera</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary-600 font-bold mr-3 text-xl">✓</span>
              <span className="text-gray-700">Bendradarbiavimas su tėvais</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Philosophy Section */}
      <div className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Mūsų filosofija
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Judėjimas - džiaugsmas
              </h3>
              <p className="text-gray-600">
                Tikime, kad sportas turi būti malonus ir įdomus. Todėl mūsų treniruotės yra
                įvairios, žaismingos ir pritaikytos vaikų amžiui bei gebėjimams.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Sveikata - prioritetas
              </h3>
              <p className="text-gray-600">
                Kineziterapija padeda formuoti tinkamą laikyseną, stiprina raumenų sistemą ir
                lavina koordinaciją. Tai investicija į vaiko sveikatą ateityje.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Bendruomenė - stiprybė
              </h3>
              <p className="text-gray-600">
                Kuriame draugišką bendruomenę, kur vaikai mokosi bendradarbiauti, palaikyti
                vienas kitą ir džiaugtis bendromis pergalėmis.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Team Intro Section */}
      <div className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Mūsų komanda
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Su vaikais dirba aukštos kvalifikacijos kineziterapijos specialistai ir sporto treneriai,
            turintys didelę patirtį dirbant su vaikais.
          </p>
          <a
            href="/treneriai"
            className="inline-block rounded-md bg-primary-600 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-primary-700 transition-colors"
          >
            Susipažinkite su treneriais
          </a>
        </div>
      </div>
    </div>
  )
}
