import type { NextConfig } from 'next'
import withPWA from 'next-pwa'

const nextConfig: NextConfig = {
  output: 'export',  // Включаем статический экспорт
  reactStrictMode: true,
  images: {
    unoptimized: true // Необходимо для статического экспорта
  }
}

const withPWAConfig = withPWA({
  dest: 'public',
  register: true,
  skipWaiting: true,
})

export default withPWAConfig(nextConfig)