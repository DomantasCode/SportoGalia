'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function AdminPage() {
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [news, setNews] = useState([])
  const [isEditing, setIsEditing] = useState(false)
  const [editingNews, setEditingNews] = useState(null)
  const router = useRouter()

  // Check if already authenticated
  useEffect(() => {
    const auth = localStorage.getItem('admin_auth')
    if (auth === 'true') {
      setIsAuthenticated(true)
      loadNews()
    }
  }, [])

  const loadNews = async () => {
    try {
      const response = await fetch('/api/admin/news')
      const data = await response.json()
      setNews(data)
    } catch (error) {
      console.error('Error loading news:', error)
    }
  }

  const handleLogin = (e) => {
    e.preventDefault()
    // Simple password check (in production, use proper authentication)
    if (password === 'admin123') {
      localStorage.setItem('admin_auth', 'true')
      setIsAuthenticated(true)
      setError('')
      loadNews()
    } else {
      setError('Neteisingas slaptažodis')
    }
  }

  const handleLogout = () => {
    localStorage.removeItem('admin_auth')
    setIsAuthenticated(false)
    setPassword('')
  }

  const handleEdit = (newsItem) => {
    setEditingNews(newsItem)
    setIsEditing(true)
  }

  const handleDelete = async (id) => {
    if (!confirm('Ar tikrai norite ištrinti šią naujieną?')) return

    try {
      const response = await fetch('/api/admin/news', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id }),
      })

      if (response.ok) {
        loadNews()
      }
    } catch (error) {
      console.error('Error deleting news:', error)
    }
  }

  const handleSave = async (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const data = {
      id: editingNews?.id || Date.now().toString(),
      slug: formData.get('slug'),
      title: formData.get('title'),
      excerpt: formData.get('excerpt'),
      content: formData.get('content'),
      author: formData.get('author'),
      date: editingNews?.date || new Date().toISOString().split('T')[0],
      image: null,
    }

    try {
      const response = await fetch('/api/admin/news', {
        method: editingNews ? 'PUT' : 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        setIsEditing(false)
        setEditingNews(null)
        loadNews()
      }
    } catch (error) {
      console.error('Error saving news:', error)
    }
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
        <div className="max-w-md w-full bg-white rounded-lg shadow-md p-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Admin Prisijungimas
          </h1>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                Slaptažodis
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                placeholder="Įveskite slaptažodį"
                required
              />
            </div>
            {error && (
              <div className="p-3 bg-red-50 text-red-800 rounded-md text-sm">
                {error}
              </div>
            )}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md font-semibold hover:bg-blue-700 transition"
            >
              Prisijungti
            </button>
            <p className="text-sm text-gray-500 text-center mt-4">
              Demo slaptažodis: admin123
            </p>
          </form>
        </div>
      </div>
    )
  }

  if (isEditing) {
    return (
      <div className="min-h-screen bg-gray-100 py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-2xl font-bold text-gray-900">
                {editingNews ? 'Redaguoti naujieną' : 'Nauja naujiena'}
              </h1>
              <button
                onClick={() => {
                  setIsEditing(false)
                  setEditingNews(null)
                }}
                className="text-gray-600 hover:text-gray-900"
              >
                Atgal
              </button>
            </div>
            <form onSubmit={handleSave} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Pavadinimas
                </label>
                <input
                  type="text"
                  name="title"
                  defaultValue={editingNews?.title}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Slug (URL)
                </label>
                <input
                  type="text"
                  name="slug"
                  defaultValue={editingNews?.slug}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Santrauka
                </label>
                <textarea
                  name="excerpt"
                  rows={3}
                  defaultValue={editingNews?.excerpt}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Turinys
                </label>
                <textarea
                  name="content"
                  rows={12}
                  defaultValue={editingNews?.content}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Autorius
                </label>
                <input
                  type="text"
                  name="author"
                  defaultValue={editingNews?.author || 'Sportogalia Komanda'}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-md font-semibold hover:bg-blue-700"
              >
                Išsaugoti
              </button>
            </form>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-lg shadow-md p-8">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold text-gray-900">Naujienų valdymas</h1>
            <div className="flex gap-4">
              <button
                onClick={() => setIsEditing(true)}
                className="bg-blue-600 text-white py-2 px-4 rounded-md font-semibold hover:bg-blue-700"
              >
                + Nauja naujiena
              </button>
              <button
                onClick={handleLogout}
                className="bg-gray-600 text-white py-2 px-4 rounded-md font-semibold hover:bg-gray-700"
              >
                Atsijungti
              </button>
            </div>
          </div>

          <div className="space-y-4">
            {news.map((item) => (
              <div key={item.id} className="border border-gray-200 rounded-lg p-4 flex justify-between items-start">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                  <p className="text-gray-600 text-sm mt-1">{item.excerpt}</p>
                  <p className="text-gray-500 text-xs mt-2">
                    {item.date} • {item.author}
                  </p>
                </div>
                <div className="flex gap-2 ml-4">
                  <button
                    onClick={() => handleEdit(item)}
                    className="text-blue-600 hover:text-blue-800 px-3 py-1 rounded border border-blue-600 hover:bg-blue-50"
                  >
                    Redaguoti
                  </button>
                  <button
                    onClick={() => handleDelete(item.id)}
                    className="text-red-600 hover:text-red-800 px-3 py-1 rounded border border-red-600 hover:bg-red-50"
                  >
                    Ištrinti
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
