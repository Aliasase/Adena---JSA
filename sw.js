/* Adena JSA — Service Worker
 * Revision A-1 (v1.1.0)
 * Cache-first offline strategy.
 *
 * Offline reliability depends on successful installation and caching after
 * the first online load. iOS browser storage eviction may occur under
 * storage pressure; users should load the app while online at least once
 * after each device restart to repopulate the cache.
 */

var CACHE_PREFIX = 'adena-jsa-';
var CACHE_NAME = 'adena-jsa-v1.1.0';
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
      console.log('[Adena JSA SW] Install complete');
      return self.skipWaiting();
    }).catch(function(err) {
      console.error('[Adena JSA SW] Install failed:', err);
      throw err;
    })
  );
});

self.addEventListener('activate', function(event) {
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.filter(function(name) {
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
  if (event.request.method !== 'GET') return;
  var url = new URL(event.request.url);
  if (url.origin !== location.origin) return;

  event.respondWith(
    caches.match(event.request).then(function(cached) {
      if (cached) return cached;
      return fetch(event.request).then(function(response) {
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
