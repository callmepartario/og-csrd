const cacheName = 'OG-CSRD';
const cacheFiles = [
    'index.html',
    'og-dd.html',
    'css/og-csrd.css',
    'css/og-dd.css',
    'scripts/og-csrd-randomizer.js',
    'scripts/og-dd-randomizer.js',
    'db/og-csrd.json',
    'db/og-dd.json',
    'icon/android-chrome-192x192.png',
    'icon/android-chrome-512x512.png',
    'icon/apple-touch-icon.png',
    'icon/favicon.ico'
]

self.addEventListener('install', (e) => {
    e.waitUntil(
        (async () => {
            const cache = await caches.open(cacheName);
            console.log("[Service Worker] Caching all: app shell and content");
            await cache.addAll(cacheFiles)
        })
    )
})

self.addEventListener("fetch", (e) => {
    e.respondWith(
        (async () => {
            const r = await caches.match(e.request);
            console.log(`[Service Worker] Fetching resource: ${e.request.url}`);
            if (r) {
                return r;
            }
            const response = await fetch(e.request);
            const cache = await caches.open(cacheName);
            console.log(`[Service Worker] Caching new resource: ${e.request.url}`);
            cache.put(e.request, response.clone());
            return response;
        })()
    );
});