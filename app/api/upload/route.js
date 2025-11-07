import { NextResponse } from 'next/server'
import { writeFile, mkdir } from 'fs/promises'
import path from 'path'
import { existsSync } from 'fs'

export async function POST(request) {
  try {
    const formData = await request.formData()
    const file = formData.get('file')

    if (!file) {
      return NextResponse.json({ error: 'Failas nerastas' }, { status: 400 })
    }

    // Convert file to buffer
    const bytes = await file.arrayBuffer()
    const buffer = Buffer.from(bytes)

    // Create unique filename with timestamp
    const timestamp = Date.now()
    const originalName = file.name.replace(/\s+/g, '-').toLowerCase()
    const filename = `${timestamp}-${originalName}`

    // Define upload directory
    const uploadDir = path.join(process.cwd(), 'public', 'images', 'uploads')

    // Create directory if it doesn't exist
    if (!existsSync(uploadDir)) {
      await mkdir(uploadDir, { recursive: true })
    }

    // Save file
    const filepath = path.join(uploadDir, filename)
    await writeFile(filepath, buffer)

    // Return public URL
    const publicUrl = `/images/uploads/${filename}`

    return NextResponse.json({
      success: true,
      url: publicUrl,
      filename: filename
    })
  } catch (error) {
    console.error('Upload error:', error)
    return NextResponse.json({ error: 'Nepavyko įkelti failo' }, { status: 500 })
  }
}
