// Service worker mínimo — necessário no Chrome/Android para o navegador considerar
// o site "instalável" e disparar o evento beforeinstallprompt (botão "Criar atalho").
// Não faz cache agressivo: o sistema depende de dados sempre atualizados do Supabase.

self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

// Necessário existir um handler de fetch (mesmo que "passthrough") para o
// site ser considerado instalável em navegadores baseados em Chromium.
self.addEventListener('fetch', (event) => {
  event.respondWith(fetch(event.request));
});
