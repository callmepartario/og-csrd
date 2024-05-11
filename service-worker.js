const cacheFiles = [
    'index.html',
    'og-cspg.html',
    'og-dd.html',
    'css/bootstrap.min.css',
    'css/og-csrd.css',
    'css/og-cspg.css',
    'css/og-dd.css',
    'scripts/bootstrap.bundle.min',
    'scripts/og-csrd-randomizer.js',
    'scripts/og-dd-randomizer.js',
    'scripts/modeswitch.js',
    'scripts/waitload.js',
    'scripts/jquery-3.7.1.min.js',
    'scripts/setup-tooltips.js',
    'fonts/OpenSans-VariableFont_wdth,wght.ttf',
    'fonts/OpenSans-Italic-VariableFont_wdth,wght.ttf',
    'fonts/Teko-VariableFont_wght.ttf',
    'fonts/Orbitron-VariableFont_wght.ttf',
    'fonts/BenchNine-Regular.ttf',
    'fonts/BenchNine-Light.ttf',
    'fonts/BenchNine-Bold.ttf',
    'fonts/fonts/LexendZetta-VariableFont_wght.ttf',
    'fonts/WalterTurncoat-Regular.ttf',
    'images/cypher-system-compatible-white.svg',
    'images/og-csrd-difficulty-dial-light.svg',
    'images/og-csrd-difficulty-dial-dark.svg',
    'images/mode-moon.svg',
    'images/mode-sun.svg',
    'images/og-cspg-cover.webp',
    'images/cypher-system-rulebook-cover.webp',
    'db/og-csrd.json',
    'db/og-dd.json',
    'icon/android-chrome-192x192.png',
    'icon/android-chrome-512x512.png',
    'icon/apple-touch-icon.png',
    'icon/favicon.ico'
]
// the cache version gets updated every time there is a new deployment
const CACHE_VERSION = 1;
const CURRENT_CACHE = `OG-CSRD-${CACHE_VERSION}`;
console.log(CURRENT_CACHE)

// on activation we clean up the previously registered service workers
self.addEventListener('activate', evt =>
  evt.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CURRENT_CACHE) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  )
);

// on install we download the routes we want to cache for offline
self.addEventListener('install', evt =>
  evt.waitUntil(
    caches.open(CURRENT_CACHE).then(cache => {
      return cache.addAll(cacheFiles);
    })
  )
);

// fetch the resource from the network
const fromNetwork = (request, timeout) =>
  new Promise((fulfill, reject) => {
    const timeoutId = setTimeout(reject, timeout);
    fetch(request).then(response => {
      clearTimeout(timeoutId);
      fulfill(response);
      update(request);
    }, reject);
  });

// fetch the resource from the browser cache
const fromCache = request =>
  caches
    .open(CURRENT_CACHE)
    .then(cache =>
      cache
        .match(request)
        .then(matching => matching)
    );

// cache the current page to make it available for offline
const update = request =>
  caches
    .open(CURRENT_CACHE)
    .then(cache =>
      fetch(request).then(response => cache.put(request, response))
    );

// general strategy when making a request (eg if online try to fetch it
// from the network with a timeout, if something fails serve from cache)
self.addEventListener('fetch', evt => {
  evt.respondWith(
    fromNetwork(evt.request, 10000).catch(() => fromCache(evt.request))
  );
  evt.waitUntil(update(evt.request));
});