import { Metadata } from 'next'
import SharedData from '@/components/SharedData';

export const metadata: Metadata = {
  title: 'Share Target PWA',
  description: 'A simple PWA that can receive shared data',
  manifest: '/manifest.json',
  themeColor: '#000000',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
  icons: [
    { rel: 'icon', url: '/favicon.ico' },
    { rel: 'apple-touch-icon', url: '/icon-192x192.png' },
  ],
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold mb-8">Share Target PWA</h1>
      <SharedData />
    </main>
  )
}

