// Service worker: menyimpan cangkang aplikasi saja. Data dan kredensial selalu lewat jaringan.
const VER = 'mk-v13';
const SHELL = ['/', '/manifest.webmanifest', '/icons/icon-192.png', '/icons/icon-512.png'];
const CDN = ['cdn.jsdelivr.net', 'fonts.googleapis.com', 'fonts.gstatic.com'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(VER).then(c => c.addAll(SHELL)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys()
    .then(ks => Promise.all(ks.filter(k => k !== VER).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);

  if (url.origin === location.origin) {
    if (url.pathname.startsWith('/api/')) return; // kredensial: selalu dari jaringan
    if (req.mode === 'navigate') { // halaman: jaringan dulu supaya update langsung terlihat
      e.respondWith(fetch(req).then(r => {
        if (r.ok) { const cp = r.clone(); caches.open(VER).then(c => c.put('/', cp)); }
        return r;
      }).catch(() => caches.match('/')));
      return;
    }
    e.respondWith(caches.match(req).then(hit => {
      const net = fetch(req).then(r => {
        if (r.ok) { const cp = r.clone(); caches.open(VER).then(c => c.put(req, cp)); }
        return r;
      }).catch(() => hit);
      return hit || net;
    }));
    return;
  }

  if (CDN.includes(url.hostname)) { // library dan font: cache dulu
    e.respondWith(caches.match(req).then(hit => hit || fetch(req).then(r => {
      if (r.ok || r.type === 'opaque') { const cp = r.clone(); caches.open(VER).then(c => c.put(req, cp)); }
      return r;
    })));
  }
  // permintaan data ke layanan cloud tidak disentuh
});
