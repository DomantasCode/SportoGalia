'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function AdminPage() {
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [activeTab, setActiveTab] = useState('news')
  const [news, setNews] = useState([])
  const [trainers, setTrainers] = useState([])
  const [editingNews, setEditingNews] = useState(null)
  const [editingTrainer, setEditingTrainer] = useState(null)
  const [showNewsForm, setShowNewsForm] = useState(false)
  const [showTrainerForm, setShowTrainerForm] = useState(false)
  const [message, setMessage] = useState('')

  // Check if already authenticated
  useEffect(() => {
    const auth = localStorage.getItem('admin_auth')
    if (auth === 'true') {
      setIsAuthenticated(true)
      loadNews()
      loadTrainers()
    }
  }, [])

  const handleLogin = (e) => {
    e.preventDefault()
    if (password === 'admin123') {
      localStorage.setItem('admin_auth', 'true')
      setIsAuthenticated(true)
      setError('')
      loadNews()
      loadTrainers()
    } else {
      setError('Neteisingas slaptažodis')
    }
  }

  const handleLogout = () => {
    localStorage.removeItem('admin_auth')
    setIsAuthenticated(false)
    setPassword('')
  }

  const loadNews = async () => {
    try {
      const response = await fetch('/api/admin/news')
      const data = await response.json()
      setNews(data)
    } catch (error) {
      console.error('Error loading news:', error)
    }
  }

  const loadTrainers = async () => {
    try {
      const response = await fetch('/api/admin/trainers')
      const data = await response.json()
      setTrainers(data)
    } catch (error) {
      console.error('Error loading trainers:', error)
    }
  }

  const showMessage = (msg) => {
    setMessage(msg)
    setTimeout(() => setMessage(''), 3000)
  }

  // NEWS CRUD OPERATIONS
  const handleNewsSubmit = async (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)

    const newsData = {
      title: formData.get('title'),
      slug: formData.get('slug'),
      excerpt: formData.get('excerpt'),
      content: formData.get('content'),
      author: formData.get('author'),
      date: formData.get('date'),
      image: formData.get('image'),
    }

    try {
      if (editingNews) {
        newsData.id = editingNews.id
        const response = await fetch('/api/admin/news', {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(newsData),
        })
        if (response.ok) {
          showMessage('✅ Naujiena atnaujinta!')
          setEditingNews(null)
        }
      } else {
        const response = await fetch('/api/admin/news', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(newsData),
        })
        if (response.ok) {
          showMessage('✅ Naujiena pridėta!')
        }
      }
      loadNews()
      setShowNewsForm(false)
      e.target.reset()
    } catch (error) {
      showMessage('❌ Klaida! Nepavyko išsaugoti.')
    }
  }

  const handleDeleteNews = async (id) => {
    if (!confirm('Ar tikrai norite ištrinti šią naujieną?')) return

    try {
      const response = await fetch(`/api/admin/news?id=${id}`, {
        method: 'DELETE',
      })
      if (response.ok) {
        showMessage('✅ Naujiena ištrinta!')
        loadNews()
      }
    } catch (error) {
      showMessage('❌ Klaida! Nepavyko ištrinti.')
    }
  }

  const startEditNews = (newsItem) => {
    setEditingNews(newsItem)
    setShowNewsForm(true)
  }

  // TRAINERS CRUD OPERATIONS
  const handleTrainerSubmit = async (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)

    const trainerData = {
      name: formData.get('name'),
      role: formData.get('role'),
      qualification: formData.get('qualification'),
      specialization: formData.get('specialization'),
      description: formData.get('description'),
      image: formData.get('image'),
    }

    try {
      if (editingTrainer) {
        trainerData.id = editingTrainer.id
        const response = await fetch('/api/admin/trainers', {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(trainerData),
        })
        if (response.ok) {
          showMessage('✅ Treneris atnaujintas!')
          setEditingTrainer(null)
        }
      } else {
        const response = await fetch('/api/admin/trainers', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(trainerData),
        })
        if (response.ok) {
          showMessage('✅ Treneris pridėtas!')
        }
      }
      loadTrainers()
      setShowTrainerForm(false)
      e.target.reset()
    } catch (error) {
      showMessage('❌ Klaida! Nepavyko išsaugoti.')
    }
  }

  const handleDeleteTrainer = async (id) => {
    if (!confirm('Ar tikrai norite ištrinti šį trenerį?')) return

    try {
      const response = await fetch(`/api/admin/trainers?id=${id}`, {
        method: 'DELETE',
      })
      if (response.ok) {
        showMessage('✅ Treneris ištrintas!')
        loadTrainers()
      }
    } catch (error) {
      showMessage('❌ Klaida! Nepavyko ištrinti.')
    }
  }

  const startEditTrainer = (trainer) => {
    setEditingTrainer(trainer)
    setShowTrainerForm(true)
  }

  // LOGIN SCREEN
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-primary-600 to-primary-800 flex items-center justify-center px-4">
        <div className="max-w-md w-full bg-white rounded-2xl shadow-2xl p-8">
          <div className="text-center mb-8">
            <div className="w-20 h-20 bg-primary-100 rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-4xl">🔐</span>
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Admin Panelė</h1>
            <p className="text-gray-600">Prisijunkite norėdami valdyti turinį</p>
          </div>
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
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent outline-none"
                placeholder="Įveskite slaptažodį"
                required
              />
            </div>
            {error && (
              <div className="p-3 bg-red-50 border border-red-200 text-red-800 rounded-lg text-sm flex items-center gap-2">
                <span>❌</span>
                {error}
              </div>
            )}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-primary-600 to-primary-700 text-white py-3 px-4 rounded-lg font-semibold hover:from-primary-700 hover:to-primary-800 transition shadow-lg"
            >
              Prisijungti
            </button>
            <p className="text-sm text-gray-500 text-center mt-4">
              Demo slaptažodis: <span className="font-mono font-bold">admin123</span>
            </p>
          </form>
        </div>
      </div>
    )
  }

  // ADMIN DASHBOARD
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-dark-900 to-dark-950 text-white py-6 shadow-xl">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold flex items-center gap-3">
              <span>⚙️</span>
              Admin Panelė
            </h1>
            <p className="text-gray-300 mt-1">Valdykite svetainės turinį</p>
          </div>
          <button
            onClick={handleLogout}
            className="bg-red-600 hover:bg-red-700 px-6 py-2 rounded-lg font-semibold transition flex items-center gap-2"
          >
            <span>🚪</span>
            Atsijungti
          </button>
        </div>
      </div>

      {/* Success Message */}
      {message && (
        <div className="max-w-7xl mx-auto px-4 mt-6">
          <div className="bg-green-50 border-l-4 border-green-500 text-green-800 px-6 py-4 rounded-lg shadow-md animate-pulse">
            {message}
          </div>
        </div>
      )}

      {/* Tabs */}
      <div className="max-w-7xl mx-auto px-4 mt-6">
        <div className="border-b-2 border-gray-200">
          <div className="flex space-x-8">
            <button
              onClick={() => {
                setActiveTab('news')
                setShowNewsForm(false)
                setShowTrainerForm(false)
              }}
              className={`py-4 px-2 border-b-4 font-semibold text-base transition flex items-center gap-2 ${
                activeTab === 'news'
                  ? 'border-primary-600 text-primary-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              <span className="text-2xl">📰</span>
              Naujienos
              <span className="bg-primary-100 text-primary-600 px-2 py-0.5 rounded-full text-xs font-bold">
                {news.length}
              </span>
            </button>
            <button
              onClick={() => {
                setActiveTab('trainers')
                setShowNewsForm(false)
                setShowTrainerForm(false)
              }}
              className={`py-4 px-2 border-b-4 font-semibold text-base transition flex items-center gap-2 ${
                activeTab === 'trainers'
                  ? 'border-primary-600 text-primary-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              <span className="text-2xl">👥</span>
              Treneriai
              <span className="bg-primary-100 text-primary-600 px-2 py-0.5 rounded-full text-xs font-bold">
                {trainers.length}
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* NEWS TAB */}
        {activeTab === 'news' && (
          <div>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-3xl font-bold text-gray-900">Naujienos</h2>
              <button
                onClick={() => {
                  setShowNewsForm(!showNewsForm)
                  setEditingNews(null)
                }}
                className="bg-primary-600 text-white px-6 py-3 rounded-xl hover:bg-primary-700 transition shadow-lg hover:shadow-xl flex items-center gap-2 font-semibold"
              >
                {showNewsForm ? '❌ Atšaukti' : '➕ Pridėti naują'}
              </button>
            </div>

            {/* News Form */}
            {showNewsForm && (
              <div className="bg-white rounded-xl shadow-xl p-8 mb-8 border-2 border-primary-100">
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  {editingNews ? '✏️ Redaguoti naujieną' : '➕ Nauja naujiena'}
                </h3>
                <form onSubmit={handleNewsSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Pavadinimas *
                      </label>
                      <input
                        type="text"
                        name="title"
                        defaultValue={editingNews?.title}
                        required
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-primary-600 transition"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Slug (URL) *
                      </label>
                      <input
                        type="text"
                        name="slug"
                        defaultValue={editingNews?.slug}
                        required
                        placeholder="pvz: vasaros-stovykla-2024"
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-primary-600 transition"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Trumpas aprašymas *
                    </label>
                    <textarea
                      name="excerpt"
                      rows="3"
                      defaultValue={editingNews?.excerpt}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-primary-600 transition"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Turinys *
                    </label>
                    <textarea
                      name="content"
                      rows="8"
                      defaultValue={editingNews?.content}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-primary-600 transition"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Autorius *
                      </label>
                      <input
                        type="text"
                        name="author"
                        defaultValue={editingNews?.author || 'Sportogalia'}
                        required
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-primary-600 transition"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Data *
                      </label>
                      <input
                        type="date"
                        name="date"
                        defaultValue={editingNews?.date || new Date().toISOString().split('T')[0]}
                        required
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-primary-600 transition"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Nuotrauka (URL) *
                      </label>
                      <input
                        type="text"
                        name="image"
                        defaultValue={editingNews?.image}
                        placeholder="/images/news-images/..."
                        required
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-primary-600 transition"
                      />
                    </div>
                  </div>

                  <div className="flex gap-4 pt-4">
                    <button
                      type="submit"
                      className="bg-primary-600 text-white px-8 py-3 rounded-xl hover:bg-primary-700 transition shadow-lg font-semibold"
                    >
                      {editingNews ? '💾 Atnaujinti' : '➕ Pridėti'}
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setShowNewsForm(false)
                        setEditingNews(null)
                      }}
                      className="bg-gray-300 text-gray-700 px-8 py-3 rounded-xl hover:bg-gray-400 transition font-semibold"
                    >
                      ❌ Atšaukti
                    </button>
                  </div>
                </form>
              </div>
            )}

            {/* News List */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {news.map((item) => (
                <div key={item.id} className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 border-gray-100 hover:border-primary-300">
                  {item.image && (
                    <div className="relative h-48 w-full bg-gray-200">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}
                  <div className="p-5">
                    <h3 className="font-bold text-lg mb-2 line-clamp-2">{item.title}</h3>
                    <p className="text-gray-600 text-sm mb-3 line-clamp-2">{item.excerpt}</p>
                    <p className="text-xs text-gray-500 mb-4 flex items-center gap-2">
                      <span>📅</span>
                      {item.date}
                    </p>
                    <div className="flex gap-2">
                      <button
                        onClick={() => startEditNews(item)}
                        className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition text-sm font-semibold"
                      >
                        ✏️ Redaguoti
                      </button>
                      <button
                        onClick={() => handleDeleteNews(item.id)}
                        className="flex-1 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition text-sm font-semibold"
                      >
                        🗑️ Ištrinti
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {news.length === 0 && !showNewsForm && (
              <div className="text-center py-16 bg-white rounded-xl shadow">
                <span className="text-6xl mb-4 block">📰</span>
                <p className="text-gray-500 text-lg">Naujienų dar nėra</p>
                <button
                  onClick={() => setShowNewsForm(true)}
                  className="mt-4 text-primary-600 font-semibold hover:underline"
                >
                  Pridėti pirmą naujieną
                </button>
              </div>
            )}
          </div>
        )}

        {/* TRAINERS TAB */}
        {activeTab === 'trainers' && (
          <div>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-3xl font-bold text-gray-900">Treneriai</h2>
              <button
                onClick={() => {
                  setShowTrainerForm(!showTrainerForm)
                  setEditingTrainer(null)
                }}
                className="bg-primary-600 text-white px-6 py-3 rounded-xl hover:bg-primary-700 transition shadow-lg hover:shadow-xl flex items-center gap-2 font-semibold"
              >
                {showTrainerForm ? '❌ Atšaukti' : '➕ Pridėti naują'}
              </button>
            </div>

            {/* Trainer Form */}
            {showTrainerForm && (
              <div className="bg-white rounded-xl shadow-xl p-8 mb-8 border-2 border-primary-100">
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  {editingTrainer ? '✏️ Redaguoti trenerį' : '➕ Naujas treneris'}
                </h3>
                <form onSubmit={handleTrainerSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Vardas Pavardė *
                      </label>
                      <input
                        type="text"
                        name="name"
                        defaultValue={editingTrainer?.name}
                        required
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-primary-600 transition"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Pareigos *
                      </label>
                      <input
                        type="text"
                        name="role"
                        defaultValue={editingTrainer?.role}
                        required
                        placeholder="pvz: Sporto treneris"
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-primary-600 transition"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Kvalifikacija *
                    </label>
                    <input
                      type="text"
                      name="qualification"
                      defaultValue={editingTrainer?.qualification}
                      required
                      placeholder="pvz: Kūno kultūros magistras, 8 metų patirtis"
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-primary-600 transition"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Specializacija *
                    </label>
                    <input
                      type="text"
                      name="specialization"
                      defaultValue={editingTrainer?.specialization}
                      required
                      placeholder="pvz: Funkcinės treniruotės, jėgos lavinimas"
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-primary-600 transition"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Aprašymas *
                    </label>
                    <textarea
                      name="description"
                      rows="5"
                      defaultValue={editingTrainer?.description}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-primary-600 transition"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Nuotrauka (URL) *
                    </label>
                    <input
                      type="text"
                      name="image"
                      defaultValue={editingTrainer?.image}
                      placeholder="/images/news-images/..."
                      required
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-primary-600 transition"
                    />
                  </div>

                  <div className="flex gap-4 pt-4">
                    <button
                      type="submit"
                      className="bg-primary-600 text-white px-8 py-3 rounded-xl hover:bg-primary-700 transition shadow-lg font-semibold"
                    >
                      {editingTrainer ? '💾 Atnaujinti' : '➕ Pridėti'}
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setShowTrainerForm(false)
                        setEditingTrainer(null)
                      }}
                      className="bg-gray-300 text-gray-700 px-8 py-3 rounded-xl hover:bg-gray-400 transition font-semibold"
                    >
                      ❌ Atšaukti
                    </button>
                  </div>
                </form>
              </div>
            )}

            {/* Trainers List */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {trainers.map((trainer) => (
                <div key={trainer.id} className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 border-gray-100 hover:border-primary-300">
                  {trainer.image && (
                    <div className="relative h-48 w-full bg-gray-200">
                      <Image
                        src={trainer.image}
                        alt={trainer.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}
                  <div className="p-5">
                    <h3 className="font-bold text-lg mb-1">{trainer.name}</h3>
                    <p className="text-primary-600 text-sm font-semibold mb-2">{trainer.role}</p>
                    <p className="text-gray-600 text-xs mb-2">{trainer.qualification}</p>
                    <p className="text-gray-500 text-xs mb-4 line-clamp-2">
                      <span className="font-semibold">Specializacija:</span> {trainer.specialization}
                    </p>
                    <div className="flex gap-2">
                      <button
                        onClick={() => startEditTrainer(trainer)}
                        className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition text-sm font-semibold"
                      >
                        ✏️ Redaguoti
                      </button>
                      <button
                        onClick={() => handleDeleteTrainer(trainer.id)}
                        className="flex-1 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition text-sm font-semibold"
                      >
                        🗑️ Ištrinti
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {trainers.length === 0 && !showTrainerForm && (
              <div className="text-center py-16 bg-white rounded-xl shadow">
                <span className="text-6xl mb-4 block">👥</span>
                <p className="text-gray-500 text-lg">Trenerių dar nėra</p>
                <button
                  onClick={() => setShowTrainerForm(true)}
                  className="mt-4 text-primary-600 font-semibold hover:underline"
                >
                  Pridėti pirmą trenerį
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
