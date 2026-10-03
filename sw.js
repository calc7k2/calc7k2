/* Cache hors-ligne : l'application et les bibliothèques libres (PDF, Excel, lecture d'images) téléchargées une fois restent sur l'appareil. */
var CACHE = 'snatch-1791036821914';
var CORE = ['./', 'index.html', 'manifest.webmanifest', 'icon.svg', 'icon-192.png', 'icon-512.png', 'apple-touch-icon.png'];
self.addEventListener('install', function (e) {
  e.waitUntil(caches.open(CACHE).then(function (c) { return c.addAll(CORE); }).then(function () { return self.skipWaiting(); }));
});
self.addEventListener('activate', function (e) {
  e.waitUntil(caches.keys().then(function (ks) {
    return Promise.all(ks.filter(function (k) { return k.indexOf('snatch-') === 0 && k !== CACHE && k !== 'snatch-libs'; }).map(function (k) { return caches.delete(k); }));
  }).then(function () { return self.clients.claim(); }));
});
self.addEventListener('fetch', function (e) {
  var req = e.request;
  if (req.method !== 'GET') return;
  var url = new URL(req.url);
  var same = url.origin === self.location.origin;
  var lib = /(^|\.)cdnjs\.cloudflare\.com$|(^|\.)cdn\.jsdelivr\.net$|tessdata\.projectnaptha\.com$/.test(url.hostname);
  if (!same && !lib) return;
  if (lib) {
    // bibliothèques libres : cache d'abord, téléchargées une seule fois
    e.respondWith(caches.open('snatch-libs').then(function (c) {
      return c.match(req).then(function (hit) {
        return hit || fetch(req).then(function (r) { if (r && (r.ok || r.type === 'opaque')) c.put(req, r.clone()); return r; });
      });
    }));
    return;
  }
  // l'application : réseau d'abord (version à jour), sinon copie locale
  e.respondWith(fetch(req).then(function (r) {
    if (r && r.ok) { var cp = r.clone(); caches.open(CACHE).then(function (c) { c.put(req, cp); }); }
    return r;
  }).catch(function () { return caches.match(req).then(function (h) { return h || caches.match('index.html'); }); }));
});
