'use client'

import { useState } from 'react'

export default function RegistrationForm() {
  const [formData, setFormData] = useState({
    parentName: '',
    email: '',
    phone: '',
    childName: '',
    childAge: '',
    service: '',
    message: '',
  })
  const [status, setStatus] = useState({ type: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setStatus({ type: '', message: '' })

    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        setStatus({ type: 'success', message: 'Registracija sėkminga! Netrukus su jumis susisieksime.' })
        setFormData({
          parentName: '',
          email: '',
          phone: '',
          childName: '',
          childAge: '',
          service: '',
          message: '',
        })
      } else {
        setStatus({ type: 'error', message: data.error || 'Klaida registruojantis. Bandykite dar kartą.' })
      }
    } catch (error) {
      setStatus({ type: 'error', message: 'Klaida registruojantis. Bandykite dar kartą.' })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Parent name */}
      <div>
        <label htmlFor="parentName" className="block text-sm font-medium text-gray-700 mb-2">
          Tėvų/Globėjų vardas ir pavardė *
        </label>
        <input
          type="text"
          id="parentName"
          name="parentName"
          required
          value={formData.parentName}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
          placeholder="Jūsų vardas ir pavardė"
        />
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
          El. paštas *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
          placeholder="jusu@email.lt"
        />
      </div>

      {/* Phone */}
      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
          Telefonas *
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          required
          value={formData.phone}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
          placeholder="+370 600 00000"
        />
      </div>

      {/* Child name */}
      <div>
        <label htmlFor="childName" className="block text-sm font-medium text-gray-700 mb-2">
          Vaiko vardas ir pavardė *
        </label>
        <input
          type="text"
          id="childName"
          name="childName"
          required
          value={formData.childName}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
          placeholder="Vaiko vardas ir pavardė"
        />
      </div>

      {/* Child age */}
      <div>
        <label htmlFor="childAge" className="block text-sm font-medium text-gray-700 mb-2">
          Vaiko amžius *
        </label>
        <input
          type="number"
          id="childAge"
          name="childAge"
          required
          min="3"
          max="18"
          value={formData.childAge}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
          placeholder="Pvz., 8"
        />
      </div>

      {/* Service selection */}
      <div>
        <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
          Pasirinkite paslaugą *
        </label>
        <select
          id="service"
          name="service"
          required
          value={formData.service}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
        >
          <option value="">Pasirinkite...</option>
          <option value="group-kinesiotherapy">Grupinė kineziterapija vaikams</option>
          <option value="individual-kinesiotherapy">Individuali kineziterapija</option>
          <option value="functional-training">Funkcinės treniruotės</option>
          <option value="family-training">Šeimos treniruotės</option>
        </select>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
          Papildoma informacija
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition resize-none"
          placeholder="Jei turite papildomų klausimų ar pastabų..."
        />
      </div>

      {/* Status message */}
      {status.message && (
        <div
          className={`p-4 rounded-md ${
            status.type === 'success'
              ? 'bg-green-50 text-green-800 border border-green-200'
              : 'bg-red-50 text-red-800 border border-red-200'
          }`}
        >
          {status.message}
        </div>
      )}

      {/* Submit button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-blue-600 text-white py-3 px-6 rounded-md font-semibold hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition"
      >
        {isSubmitting ? 'Siunčiama...' : 'Registruotis'}
      </button>

      <p className="text-sm text-gray-600 text-center">
        Pateikę registracijos formą, netrukus sulauksite mūsų skambučio ar el. laiško.
      </p>
    </form>
  )
}
