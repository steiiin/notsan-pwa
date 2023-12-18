import { setCacheNameDetails } from 'workbox-core'
import { precacheAndRoute } from 'workbox-precaching'
import { registerRoute } from 'workbox-routing'
import { NetworkFirst } from 'workbox-strategies'

// Set the cache name
setCacheNameDetails({ prefix: 'notsan-pwa' })

// Precaching assets - This will be replaced with the list of assets to precache by Workbox
precacheAndRoute(self.__WB_MANIFEST)

// Network First strategy with a 3-second network timeout
registerRoute(
  ({ request }) => request.destination !== 'document',
  new NetworkFirst({
    networkTimeoutSeconds: 3
  })
)

// message-listener
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting()
  }
})
