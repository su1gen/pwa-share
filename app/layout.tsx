import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Share Data Viewer',
  description: 'A simple PWA to view shared data',
}

export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
    <head>
      <link rel="manifest" href="/manifest.json" />
    </head>
    <body className={inter.className}>
    {children}
    <script
      dangerouslySetInnerHTML={{
        __html: `
              if ('serviceWorker' in navigator) {
                window.addEventListener('load', function() {
                  navigator.serviceWorker.register('/sw.js');
                });
              }
            `,
      }}
    />
    </body>
    </html>
  )
}

