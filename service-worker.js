const CACHE_NAME = "quran-mp3-cache-v1";
const urlsToCache = [
  "./",
  "./index.html",
  "./assets/images/quran.png",
  "./assets/css/style.css",
  "./assets/js/script.js",
  // أضف هنا أي ملفات أخرى تريد تخزينها مؤقتًا
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(urlsToCache))
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches
      .match(event.request)
      .then((response) => response || fetch(event.request))
  );
});
