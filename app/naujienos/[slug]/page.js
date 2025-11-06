import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import newsData from '@/data/news.json'

export async function generateStaticParams() {
  return newsData.map((news) => ({
    slug: news.slug,
  }))
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const news = newsData.find((item) => item.slug === slug)

  if (!news) {
    return {
      title: 'Naujiena nerasta - Sportogalia',
    }
  }

  return {
    title: `${news.title} - Sportogalia`,
    description: news.excerpt,
  }
}

export default async function NewsArticlePage({ params }) {
  const { slug } = await params
  const news = newsData.find((item) => item.slug === slug)

  if (!news) {
    notFound()
  }

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
      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <nav className="flex text-sm">
            <Link href="/" className="text-gray-500 hover:text-gray-700">
              Pagrindinis
            </Link>
            <span className="mx-2 text-gray-400">/</span>
            <Link href="/naujienos" className="text-gray-500 hover:text-gray-700">
              Naujienos
            </Link>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-gray-900">{news.title}</span>
          </nav>
        </div>
      </div>

      {/* Article */}
      <article className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
        {/* Image */}
        {news.image ? (
          <div className="relative h-96 rounded-2xl overflow-hidden mb-8 shadow-xl">
            <Image
              src={news.image}
              alt={news.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        ) : (
          <div className="bg-gradient-to-br from-primary-100 to-primary-200 rounded-lg h-96 flex items-center justify-center mb-8">
            <div className="text-9xl">📰</div>
          </div>
        )}

        {/* Meta info */}
        <div className="mb-6 pb-6 border-b border-gray-200">
          <div className="flex items-center justify-between text-sm text-gray-600">
            <span>
              <strong>Autorius:</strong> {news.author}
            </span>
            <span>{formatDate(news.date)}</span>
          </div>
        </div>

        {/* Title */}
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          {news.title}
        </h1>

        {/* Excerpt */}
        <div className="text-xl text-gray-600 mb-8 pb-8 border-b border-gray-200">
          {news.excerpt}
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          {news.content.split('\n').map((paragraph, index) => (
            paragraph.trim() ? (
              <p key={index} className="mb-4 text-gray-700 leading-relaxed">
                {paragraph}
              </p>
            ) : (
              <br key={index} />
            )
          ))}
        </div>

        {/* Back button */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <Link
            href="/naujienos"
            className="inline-flex items-center text-primary-600 hover:text-primary-700 font-semibold transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Atgal į naujienas
          </Link>
        </div>
      </article>
    </div>
  )
}
