self.addEventListener('install', (event) => {
    self.skipWaiting()
})

self.addEventListener('activate', (event) => {
    event.waitUntil(clients.claim())
})

self.addEventListener('fetch', (event) => {
    if (event.request.method !== 'POST') {
        return
    }

    if (event.request.url.endsWith('/api/share-target')) {
        event.respondWith(
            (async () => {
                const formData = await event.request.formData()
                const client = await self.clients.get(event.resultingClientId)
                const data = {}

                for (const [key, value] of formData.entries()) {
                    data[key] = value
                }

                client.postMessage({
                    action: 'share-target',
                    data: data,
                })

                return Response.redirect('/')
            })()
        )
    }
})

