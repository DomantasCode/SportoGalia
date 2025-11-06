import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

const newsFilePath = path.join(process.cwd(), 'data', 'news.json')

function readNews() {
  try {
    const fileContents = fs.readFileSync(newsFilePath, 'utf8')
    return JSON.parse(fileContents)
  } catch (error) {
    return []
  }
}

function writeNews(news) {
  fs.writeFileSync(newsFilePath, JSON.stringify(news, null, 2), 'utf8')
}

// GET - Read all news
export async function GET() {
  try {
    const news = readNews()
    return NextResponse.json(news)
  } catch (error) {
    return NextResponse.json({ error: 'Error reading news' }, { status: 500 })
  }
}

// POST - Create new news
export async function POST(request) {
  try {
    const newNews = await request.json()
    const news = readNews()
    news.push(newNews)
    writeNews(news)
    return NextResponse.json({ success: true, news: newNews })
  } catch (error) {
    return NextResponse.json({ error: 'Error creating news' }, { status: 500 })
  }
}

// PUT - Update existing news
export async function PUT(request) {
  try {
    const updatedNews = await request.json()
    let news = readNews()
    const index = news.findIndex(item => item.id === updatedNews.id)

    if (index !== -1) {
      news[index] = updatedNews
      writeNews(news)
      return NextResponse.json({ success: true, news: updatedNews })
    }

    return NextResponse.json({ error: 'News not found' }, { status: 404 })
  } catch (error) {
    return NextResponse.json({ error: 'Error updating news' }, { status: 500 })
  }
}

// DELETE - Delete news
export async function DELETE(request) {
  try {
    const { id } = await request.json()
    let news = readNews()
    news = news.filter(item => item.id !== id)
    writeNews(news)
    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json({ error: 'Error deleting news' }, { status: 500 })
  }
}
