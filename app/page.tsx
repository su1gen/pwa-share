'use client'

import { useState, useEffect } from 'react'

export default function Home() {
  const [sharedData, setSharedData] = useState<string | null>(null)

  useEffect(() => {
    if (typeof navigator.share !== 'undefined') {
      navigator.serviceWorker.addEventListener('message', (event) => {
        if (event.data.action === 'share-target') {
          setSharedData(JSON.stringify(event.data.data, null, 2))
        }
      })
    }
  }, [])

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold mb-8">Share Data Viewer</h1>
      {sharedData ? (
        <div className="bg-gray-100 p-4 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Received Shared Data:</h2>
          <pre className="whitespace-pre-wrap">{sharedData}</pre>
        </div>
      ) : (
        <p>No shared data received yet. Try sharing something to this app!</p>
      )}
    </main>
  )
}

