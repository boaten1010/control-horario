const CACHE='horario-v4';
self.addEventListener('install',e=>{self.skipWaiting();});
self.addEventListener('activate',e=>{self.clients.claim();});
self.addEventListener('fetch',e=>{
  if(e.request.method!=='GET')return;
  e.respondWith(
    caches.match(e.request).then(r=>{
      if(r)return r;
      return fetch(e.request).then(res=>{
        if(!res||res.status!==200)return res;
        var c=res.clone();
        caches.open(CACHE).then(ca=>ca.put(e.request,c));
        return res;
      });
    })
  );
});
