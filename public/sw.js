const CACHE_NAME = "orin-v2";
const CRITICAL_RESOURCES = [
  "/",
  "/src/index.tsx",
  "/src/index.css",
  "/favicon.svg",
  "/logo.png",
  "/tree.png",
];

// Install event
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(CRITICAL_RESOURCES);
    })
  );
  self.skipWaiting();
});

// Activate event
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// Fetch event with stale-while-revalidate strategy
self.addEventListener("fetch", (event) => {
  // Skip non-GET requests
  if (event.request.method !== "GET") return;

  // Skip external requests
  if (!event.request.url.startsWith(self.location.origin)) return;

  // Skip GIF files from caching to avoid cache bloat
  if (event.request.url.includes(".gif")) return;

  event.respondWith(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.match(event.request).then((cachedResponse) => {
        const fetchPromise = fetch(event.request).then((networkResponse) => {
          // Update cache with fresh content
          cache.put(event.request, networkResponse.clone());
          return networkResponse;
        });

        // Return cached version immediately, update in background
        return cachedResponse || fetchPromise;
      });
    })
  );
});
