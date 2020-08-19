/*
 *
 *  Web Color Typer
 *  https://github.com/techaurelian/webcolortyper
 * 
 *  Copyright (c) 2020 techaurelian. All rights reserved. 
 *  Licensed under the MIT license.
 *
 */

const version = "2";
const cacheName = `webcolortyper-${version}`;
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(cacheName).then(cache => {
      return cache.addAll([
        `/`,
        `/index.html`,
        `/css/modern-normalize.css`,
        `/css/main.css`,
        `/js/main.js`
      ])
        .then(() => self.skipWaiting());
    })
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.open(cacheName)
      .then(cache => cache.match(event.request, { ignoreSearch: true }))
      .then(response => {
        return response || fetch(event.request);
      })
  );
});