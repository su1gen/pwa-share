'use client'

import { useEffect, useState } from 'react'

interface SharedDataType {
  title?: string
  text?: string
  url?: string
  files?: File[]
}

export default function SharedData() {
  const [sharedData, setSharedData] = useState<SharedDataType | null>(null)

  useEffect(() => {
    const fetchSharedData = async () => {
      const response = await fetch('/api/share-target')
      if (response.ok) {
        const data = await response.json()
        setSharedData(data)
      }
    }

    fetchSharedData()
  }, [])

  if (!sharedData) {
    return <p>No shared data available.</p>
  }

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold">Shared Data:</h2>
      {sharedData.title && <p><strong>Title:</strong> {sharedData.title}</p>}
      {sharedData.text && <p><strong>Text:</strong> {sharedData.text}</p>}
      {sharedData.url && (
        <p>
          <strong>URL:</strong>{' '}
          <a href={sharedData.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
            {sharedData.url}
          </a>
        </p>
      )}
      {sharedData.files && sharedData.files.length > 0 && (
        <div>
          <strong>Files:</strong>
          <ul className="list-disc list-inside">
            {sharedData.files.map((file, index) => (
              <li key={index}>{file.name} ({file.type})</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

