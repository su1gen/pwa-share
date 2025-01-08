"use client"

import { useEffect, useState } from 'react';
import Head from 'next/head'

export default function Home() {
  const [sharedData, setSharedData] = useState<{
    title?: string,
    text?: string,
    url?: string,
    files?: File[]
  }>({})

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Получаем параметры из URL при шеринге
      const urlParams = new URLSearchParams(window.location.search)
      const title = urlParams.get('title') ?? undefined
      const text = urlParams.get('text') ?? undefined
      const url = urlParams.get('url') ?? undefined

      if (title || text || url) {
        setSharedData({ title, text, url })
      }
    }
  }, [])

  return (
    <div className="p-4">
      <Head>
        <title>Share Target Demo</title>
      </Head>

      <h1 className="text-2xl font-bold mb-4">Shared Content</h1>

      {Object.keys(sharedData).length > 0 ? (
        <div className="space-y-2">
          {sharedData.title && (
            <p><strong>Title:</strong> {sharedData.title}</p>
          )}
          {sharedData.text && (
            <p><strong>Text:</strong> {sharedData.text}</p>
          )}
          {sharedData.url && (
            <p><strong>URL:</strong> {sharedData.url}</p>
          )}
        </div>
      ) : (
        <p>No shared content yet. Try sharing something to this app!</p>
      )}
    </div>
  )
}

