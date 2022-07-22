const cacheName = "dev.finance$";
const version = "v0.0.1";

self.addEventListener("install", function (event) {
  event.waitUntil(
    (async () => {
      const cache = await caches.open(version + cacheName);

      return cache.addAll(["/"]);
    })()
  );

  self.skipWaiting();
});

self.addEventListener("activate", function (event) {
  event.waitUntil(
    (async () => {
      if ("navigationPreload" in self.registration) {
        await self.registration.navigationPreload.enable();
      }

      const keys = await caches.keys();

      return Promise.all(
        keys
          .filter(function (key) {
            return key.indexOf(version) !== 0;
          })
          .map(function (key) {
            return caches.delete(key);
          })
      );
    })()
  );

  self.clients.claim();
});

self.addEventListener("fetch", function (event) {
  const request = event.request;

  if (event.request.mode === "navigate") {
    event.respondWith(
      (async () => {
        try {
          // First, try to use the navigation preload response if it's
          // supported.
          const preloadResponse = await event.preloadResponse;
          if (preloadResponse) {
            return preloadResponse;
          }

          // Always try the network first.
          const networkResponse = await fetch(event.request);
          return networkResponse;
        } catch (error) {
          // catch is only triggered if an exception is thrown, which is
          // likely due to a network error.
          // If fetch() returns a valid HTTP response with a response code in
          // the 4xx or 5xx range, the catch() will NOT be called.
          // console.log("Fetch failed; returning offline page instead.", error);
          // const cache = await caches.open(cacheName);
          // const cachedResponse = await cache.match(OFFLINE_URL);
          // return cachedResponse;
        }
      })()
    );
  }

  // Always fetch non-GET requests from the network
  if (request.method !== "GET") {
    event.respondWith(
      fetch(request).catch(function () {
        return caches.match("/offline");
      })
    );
    return;
  }

  if (
    request.headers.get("Accept")?.indexOf("text/html") !== -1 &&
    request.url.startsWith(this.origin)
  ) {
    // The request is text/html, so respond by caching the
    // item or showing the /offline offline
    event.respondWith(
      fetch(request)
        .then(function (response) {
          // Stash a copy of this page in the cache
          const copy = response.clone();
          caches.open(version + cacheName).then(function (cache) {
            cache.put(request, copy);
          });
          return response;
        })
        .catch(function () {
          return caches.match(request).then(function (response) {
            // return the cache response or the /offline page.
            return response || caches.match("/offline");
          });
        })
    );
    return;
  }

  if (
    request.headers.get("Accept")?.indexOf("text/plain") === -1 &&
    request.url.startsWith(this.origin)
  ) {
    event.respondWith(
      caches.match(request).then(function (response) {
        return (
          response ||
          fetch(request)
            .then(function (response) {
              const copy = response.clone();

              if (
                copy.headers.get("Content-Type")?.indexOf("text/plain") === -1
              ) {
                caches.open(version + cacheName).then(function (cache) {
                  cache.put(request, copy);
                });
              }

              return response;
            })
            .catch(function () {
              // you can return an image placeholder here with
              if (request.headers.get("Accept")?.indexOf("image") !== -1) {
              }
            })
        );
      })
    );
    return;
  }
});

self.addEventListener("periodicsync", (event) => {
  if (event.tag === "content-sync") {
    // See the "Think before you sync" section for
    // checks you could perform before syncing.
    event.waitUntil(syncContent());
  }
  // Other logic for different tags as needed.
});
