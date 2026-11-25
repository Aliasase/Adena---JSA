/* Adena JSA — Service Worker
 * Revision A-3 (v1.3.0-dev1)
 * Cache-first offline strategy.
 *
 * Offline reliability depends on successful installation and caching after
 * the first online load. iOS may evict Service Worker caches under storage
 * pressure; loading the app while online after any eviction will repopulate
 * the cache.
 *
 * Cache history:
 *   adena-jsa-v1.1.0    — A-1 production
 *   adena-jsa-v1.2.0    — A-2 initial deploy
 *   adena-jsa-v1.2.0-p1 — A-2 patch: scroll preservation + reversible selection
 *   adena-jsa-v1.3.0-dev1 — A-3 dev1: Document Integrity initial build
 *   adena-jsa-v1.3.0-dev2 — A-3 dev2: AC001 — per-signer ack, conditions material, PDF integrity
 *   adena-jsa-v1.3.0-dev3 — A-3 dev3: PO-006 — tap-to-confirm re-ack (supervisor_reack / crew_reack)
 *   adena-jsa-v1.3.0-dev4 — A-3 dev4: clickable banner, inline I Acknowledge button, ACK statement at tab top
 */

/* GOVERNING REQUIREMENT (PO-006 / 2026-11-25):
 * Every deployment that changes cached resources MUST update CACHE_NAME below.
 * This applies to: app logic changes, library updates, UI corrections,
 * intermediate test builds, and production releases — even when APP_VERSION
 * in adena-jsa.html does not change. The APP_BUILD constant in adena-jsa.html
 * MUST be set to the suffix of CACHE_NAME (the part after 'adena-jsa-') so the
 * running build is identifiable from the application information panel.
 * Example: CACHE_NAME = 'adena-jsa-v1.2.0-p2'  →  APP_BUILD = 'p2'
 * Active JSA data lives in localStorage and is unaffected by cache changes.
 */
var CACHE_PREFIX = 'adena-jsa-';
var CACHE_NAME = 'adena-jsa-v1.3.0-dev4'; /* APP_BUILD = 'dev4' in adena-jsa.html */
var PRECACHE_URLS = [
  './adena-jsa.html',
  './manifest.json',
  './icons/icon-192.png',
  './icons/icon-512.png'
];

self.addEventListener('install', function(event) {
  console.log('[Adena JSA SW] Installing cache:', CACHE_NAME);
  event.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
      return cache.addAll(PRECACHE_URLS);
    }).then(function() {
      console.log('[Adena JSA SW] Install complete, scope: ' + self.registration.scope);
      return self.skipWaiting();
    }).catch(function(err) {
      console.error('[Adena JSA SW] Install FAILED:', err);
      throw err;
    })
  );
});

self.addEventListener('activate', function(event) {
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.filter(function(name) {
          // Only delete caches belonging to this app — preserves any other
          // app caches on the same origin (Correction 002).
          return name.startsWith(CACHE_PREFIX) && name !== CACHE_NAME;
        }).map(function(name) {
          console.log('[Adena JSA SW] Deleting old cache:', name);
          return caches.delete(name);
        })
      );
    }).then(function() {
      return self.clients.claim();
    })
  );
});

self.addEventListener('fetch', function(event) {
  // Only handle GET requests
  if (event.request.method !== 'GET') return;

  // Only handle same-origin requests
  var url = new URL(event.request.url);
  if (url.origin !== location.origin) return;

  event.respondWith(
    caches.match(event.request).then(function(cached) {
      if (cached) return cached;

      return fetch(event.request).then(function(response) {
        // Only cache valid same-origin responses
        if (!response || response.status !== 200 || response.type !== 'basic') {
          return response;
        }
        var responseToCache = response.clone();
        caches.open(CACHE_NAME).then(function(cache) {
          cache.put(event.request, responseToCache);
        });
        return response;
      }).catch(function() {
        console.warn('[Adena JSA SW] Fetch failed for:', event.request.url);
        return new Response('Offline — resource not cached', {
          status: 503,
          statusText: 'Service Unavailable'
        });
      });
    })
  );
});
