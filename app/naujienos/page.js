import Link from 'next/link'
import Image from 'next/image'
import newsData from '@/data/news.json'

export const metadata = {
  title: 'Naujienos - Sportogalia',
  description: 'Aktualijos ir naujienos iš Sportogalia akademijos',
}

export default function NaujienosPage() {
  // Sort news by date (newest first)
  const sortedNews = [...newsData].sort((a, b) => new Date(b.date) - new Date(a.date))

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('lt-LT', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  return (
    <div className="bg-white">
      {/* Header with Image */}
      <div className="relative bg-dark-900 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/news-images/naujienos-16-card.jpg"
            alt="Naujienos"
            fill
            className="object-cover opacity-30"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-dark-900 via-dark-900/90 to-dark-900/70"></div>
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Naujienos
            </h1>
            <p className="mt-4 text-xl text-gray-200">
              Aktualijos ir naujienos iš Sportogalia akademijos
            </p>
          </div>
        </div>
      </div>

      {/* News Grid */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        {sortedNews.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">Kol kas naujienų nėra</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sortedNews.map((news, index) => (
              <Link
                key={news.id}
                href={`/naujienos/${news.slug}`}
                className="group"
              >
                <article className="relative bg-white border-2 border-gray-100 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-full flex flex-col group-hover:-translate-y-2 group-hover:border-primary-300">
                  {/* Image */}
                  <div className="relative h-56 overflow-hidden">
                    {news.image ? (
                      <Image
                        src={news.image}
                        alt={news.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    ) : (
                      <div className="bg-gradient-to-br from-primary-100 to-primary-200 h-full flex items-center justify-center">
                        <div className="text-6xl">📰</div>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>

                  <div className="p-6 flex-1 flex flex-col bg-gradient-to-br from-white to-gray-50">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-3">
                        <svg className="w-4 h-4 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <time className="text-sm text-primary-600 font-semibold">
                          {formatDate(news.date)}
                        </time>
                      </div>
                      <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors leading-tight">
                        {news.title}
                      </h2>
                      <p className="text-gray-600 line-clamp-3 leading-relaxed">
                        {news.excerpt}
                      </p>
                    </div>

                    <div className="mt-4 pt-4 border-t border-gray-200 flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                        <span>{news.author}</span>
                      </div>
                      <div className="text-primary-600 font-semibold text-sm flex items-center group-hover:gap-2 transition-all">
                        Skaityti
                        <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
