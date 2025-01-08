declare module 'next-pwa' {
  import { NextConfig } from 'next'

  interface PWAConfig {
    dest?: string
    disable?: boolean
    register?: boolean
    scope?: string
    sw?: string
    skipWaiting?: boolean
    runtimeCaching?: any[]
    publicExcludes?: string[]
    buildExcludes?: string[]
    fallbacks?: {
      [key: string]: string
    }
    cacheOnFrontEndNav?: boolean
    reloadOnOnline?: boolean
    customWorkerDir?: string
    dynamicStartUrl?: boolean
  }

  function withPWA(config: PWAConfig): (nextConfig: NextConfig) => NextConfig
  export default withPWA
}