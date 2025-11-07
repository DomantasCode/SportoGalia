import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

const trainersFilePath = path.join(process.cwd(), 'data', 'trainers.json')

// GET - Gauti visus trenerius
export async function GET() {
  try {
    const fileContents = fs.readFileSync(trainersFilePath, 'utf8')
    const trainers = JSON.parse(fileContents)
    return NextResponse.json(trainers)
  } catch (error) {
    return NextResponse.json({ error: 'Nepavyko nuskaityti trenerių' }, { status: 500 })
  }
}

// POST - Pridėti naują trenerį
export async function POST(request) {
  try {
    const newTrainer = await request.json()

    // Nuskaitome esamą failą
    const fileContents = fs.readFileSync(trainersFilePath, 'utf8')
    const trainers = JSON.parse(fileContents)

    // Sugeneruojame naują ID
    const maxId = trainers.length > 0
      ? Math.max(...trainers.map(t => parseInt(t.id)))
      : 0
    newTrainer.id = String(maxId + 1)

    // Pridedame naują trenerį
    trainers.push(newTrainer)

    // Įrašome atgal į failą
    fs.writeFileSync(trainersFilePath, JSON.stringify(trainers, null, 2))

    return NextResponse.json({ success: true, trainer: newTrainer })
  } catch (error) {
    console.error('Error adding trainer:', error)
    return NextResponse.json({ error: 'Nepavyko pridėti trenerio' }, { status: 500 })
  }
}

// PUT - Atnaujinti trenerį
export async function PUT(request) {
  try {
    const updatedTrainer = await request.json()

    // Nuskaitome esamą failą
    const fileContents = fs.readFileSync(trainersFilePath, 'utf8')
    let trainers = JSON.parse(fileContents)

    // Randame ir atnaujiname trenerį
    const index = trainers.findIndex(t => t.id === updatedTrainer.id)
    if (index === -1) {
      return NextResponse.json({ error: 'Treneris nerastas' }, { status: 404 })
    }

    trainers[index] = updatedTrainer

    // Įrašome atgal į failą
    fs.writeFileSync(trainersFilePath, JSON.stringify(trainers, null, 2))

    return NextResponse.json({ success: true, trainer: updatedTrainer })
  } catch (error) {
    console.error('Error updating trainer:', error)
    return NextResponse.json({ error: 'Nepavyko atnaujinti trenerio' }, { status: 500 })
  }
}

// DELETE - Ištrinti trenerį
export async function DELETE(request) {
  try {
    const { searchParams } = new URL(request.url)
    const id = searchParams.get('id')

    if (!id) {
      return NextResponse.json({ error: 'Trenerio ID nerastas' }, { status: 400 })
    }

    // Nuskaitome esamą failą
    const fileContents = fs.readFileSync(trainersFilePath, 'utf8')
    let trainers = JSON.parse(fileContents)

    // Filtruojame trenerius
    const filteredTrainers = trainers.filter(t => t.id !== id)

    if (filteredTrainers.length === trainers.length) {
      return NextResponse.json({ error: 'Treneris nerastas' }, { status: 404 })
    }

    // Įrašome atgal į failą
    fs.writeFileSync(trainersFilePath, JSON.stringify(filteredTrainers, null, 2))

    return NextResponse.json({ success: true, message: 'Treneris ištrintas' })
  } catch (error) {
    console.error('Error deleting trainer:', error)
    return NextResponse.json({ error: 'Nepavyko ištrinti trenerio' }, { status: 500 })
  }
}
