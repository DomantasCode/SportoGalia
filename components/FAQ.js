'use client'

import { useState } from 'react'

export default function FAQ({ items, title }) {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <div className="w-full">
      {title && (
        <h2 className="text-3xl font-bold text-primary-900 mb-8 text-center font-display">
          {title}
        </h2>
      )}
      <div className="space-y-5 max-w-3xl mx-auto">
        {items.map((item, index) => (
          <div
            key={index}
            className={`group relative border-2 rounded-3xl overflow-hidden transition-all duration-300 ${
              openIndex === index
                ? 'bg-gradient-to-br from-secondary-50 to-white border-secondary-400 shadow-xl'
                : 'bg-white border-cream-200 hover:border-secondary-300 hover:shadow-lg'
            }`}
          >
            {/* Number Badge */}
            <div className={`absolute left-6 top-6 w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-300 ${
              openIndex === index
                ? 'bg-secondary-500 text-white scale-110'
                : 'bg-cream-100 text-primary-500 group-hover:bg-secondary-100'
            }`}>
              {index + 1}
            </div>

            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full pl-20 pr-6 py-6 text-left flex items-center justify-between transition-all"
            >
              <span className={`font-bold text-lg pr-4 transition-colors duration-300 ${
                openIndex === index
                  ? 'text-secondary-700'
                  : 'text-primary-800 group-hover:text-secondary-600'
              }`}>
                {item.question}
              </span>

              {/* Animated Icon */}
              <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                openIndex === index
                  ? 'bg-secondary-500 rotate-180'
                  : 'bg-cream-100 group-hover:bg-secondary-100'
              }`}>
                <svg
                  className={`w-5 h-5 transition-colors duration-300 ${
                    openIndex === index ? 'text-white' : 'text-secondary-500'
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </button>

            <div
              className={`transition-all duration-500 ease-in-out overflow-hidden ${
                openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <div className="pl-20 pr-6 pb-6">
                <div className="pt-2 pb-4 border-t-2 border-secondary-200/30">
                  <p className="text-primary-700 leading-relaxed text-base mt-4">
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
