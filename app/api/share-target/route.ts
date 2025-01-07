import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  const formData = await request.formData()
  const title = formData.get('title') as string
  const text = formData.get('text') as string
  const url = formData.get('url') as string
  const files = formData.getAll('files') as File[]

  // Здесь вы можете сохранить данные в базе данных или обработать их как-либо еще

  const sharedData = {
    title,
    text,
    url,
    files: files.map(file => ({
      name: file.name,
      type: file.type,
      size: file.size,
    })),
  }

  return NextResponse.json(sharedData)
}

export async function GET() {
  // Возвращаем пустой объект, если нет сохраненных данных
  return NextResponse.json({})
}

