const VERSION="fps-konsolu-offline-v1";
const SHELL=VERSION+"-shell";
const IMAGES=VERSION+"-images";
const SHELL_FILES=["./","./index.html","./manifest.webmanifest","./icon.svg"];
const PHOTO_URLS=["https://cdn.cloudflare.steamstatic.com/steam/apps/271590/header.jpg", "https://cdn.cloudflare.steamstatic.com/steam/apps/1174180/header.jpg", "https://cdn.cloudflare.steamstatic.com/steam/apps/1091500/header.jpg", "https://cdn.cloudflare.steamstatic.com/steam/apps/292030/header.jpg", "https://cdn.cloudflare.steamstatic.com/steam/apps/1245620/header.jpg", "https://cdn.cloudflare.steamstatic.com/steam/apps/1086940/header.jpg", "https://cdn.cloudflare.steamstatic.com/steam/apps/990080/header.jpg", "https://cdn.cloudflare.steamstatic.com/steam/apps/2050650/header.jpg", "https://cdn.cloudflare.steamstatic.com/steam/apps/1196590/header.jpg", "https://cdn.cloudflare.steamstatic.com/steam/apps/418370/header.jpg", "https://cdn.cloudflare.steamstatic.com/steam/apps/1551360/header.jpg", "https://cdn.cloudflare.steamstatic.com/steam/apps/1293830/header.jpg", "https://cdn.cloudflare.steamstatic.com/steam/apps/1222680/header.jpg", "https://cdn.cloudflare.steamstatic.com/steam/apps/1262580/header.jpg", "https://cdn.cloudflare.steamstatic.com/steam/apps/1222670/header.jpg", "https://cdn.cloudflare.steamstatic.com/steam/apps/1665460/header.jpg", "https://cdn.cloudflare.steamstatic.com/steam/apps/1259970/header.jpg", "https://cdn.cloudflare.steamstatic.com/steam/apps/1811260/header.jpg", "https://cdn.cloudflare.steamstatic.com/steam/apps/730/header.jpg", "https://cdn.cloudflare.steamstatic.com/steam/apps/1172470/header.jpg", "https://cdn.cloudflare.steamstatic.com/steam/apps/2519060/header.jpg", "https://cdn.cloudflare.steamstatic.com/steam/apps/1962663/header.jpg", "https://cdn.cloudflare.steamstatic.com/steam/apps/1962663/header.jpg", "https://cdn.cloudflare.steamstatic.com/steam/apps/782330/header.jpg", "https://cdn.cloudflare.steamstatic.com/steam/apps/552520/header.jpg", "https://cdn.cloudflare.steamstatic.com/steam/apps/2369390/header.jpg", "https://cdn.cloudflare.steamstatic.com/steam/apps/582160/header.jpg", "https://cdn.cloudflare.steamstatic.com/steam/apps/812140/header.jpg", "https://cdn.cloudflare.steamstatic.com/steam/apps/2208920/header.jpg", "https://cdn.cloudflare.steamstatic.com/steam/apps/203160/header.jpg", "https://cdn.cloudflare.steamstatic.com/steam/apps/391220/header.jpg", "https://cdn.cloudflare.steamstatic.com/steam/apps/750920/header.jpg", "https://cdn.cloudflare.steamstatic.com/steam/apps/1593500/header.jpg", "https://cdn.cloudflare.steamstatic.com/steam/apps/1817070/header.jpg", "https://cdn.cloudflare.steamstatic.com/steam/apps/1817190/header.jpg", "https://cdn.cloudflare.steamstatic.com/steam/apps/212580/header.jpg", "https://cdn.cloudflare.steamstatic.com/steam/apps/239140/header.jpg", "https://cdn.cloudflare.steamstatic.com/steam/apps/534380/header.jpg", "https://cdn.cloudflare.steamstatic.com/steam/apps/264710/header.jpg", "https://cdn.cloudflare.steamstatic.com/steam/apps/648800/header.jpg", "https://cdn.cloudflare.steamstatic.com/steam/apps/892970/header.jpg", "https://cdn.cloudflare.steamstatic.com/steam/apps/242760/header.jpg", "https://cdn.cloudflare.steamstatic.com/steam/apps/1326470/header.jpg", "https://cdn.cloudflare.steamstatic.com/steam/apps/814380/header.jpg", "https://cdn.cloudflare.steamstatic.com/steam/apps/374320/header.jpg", "https://cdn.cloudflare.steamstatic.com/steam/apps/1145360/header.jpg", "https://cdn.cloudflare.steamstatic.com/steam/apps/367520/header.jpg", "https://cdn.cloudflare.steamstatic.com/steam/apps/268910/header.jpg", "https://cdn.cloudflare.steamstatic.com/steam/apps/413150/header.jpg", "https://cdn.cloudflare.steamstatic.com/steam/apps/945360/header.jpg", "https://cdn.cloudflare.steamstatic.com/steam/apps/739630/header.jpg", "https://cdn.cloudflare.steamstatic.com/steam/apps/1966720/header.jpg", "https://cdn.cloudflare.steamstatic.com/steam/apps/238320/header.jpg", "https://cdn.cloudflare.steamstatic.com/steam/apps/424840/header.jpg", "https://cdn.cloudflare.steamstatic.com/steam/apps/1426210/header.jpg", "https://cdn.cloudflare.steamstatic.com/steam/apps/1332010/header.jpg", "https://cdn.cloudflare.steamstatic.com/steam/apps/1151640/header.jpg", "https://cdn.cloudflare.steamstatic.com/steam/apps/1259420/header.jpg", "https://cdn.cloudflare.steamstatic.com/steam/apps/870780/header.jpg", "https://cdn.cloudflare.steamstatic.com/steam/apps/412020/header.jpg", "https://cdn.cloudflare.steamstatic.com/steam/apps/1237970/header.jpg", "https://cdn.cloudflare.steamstatic.com/steam/apps/1238840/header.jpg", "https://cdn.cloudflare.steamstatic.com/steam/apps/1238810/header.jpg", "https://cdn.cloudflare.steamstatic.com/steam/apps/359550/header.jpg", "https://cdn.cloudflare.steamstatic.com/steam/apps/578080/header.jpg", "https://cdn.cloudflare.steamstatic.com/steam/apps/381210/header.jpg", "https://cdn.cloudflare.steamstatic.com/steam/apps/252490/header.jpg", "https://cdn.cloudflare.steamstatic.com/steam/apps/346110/header.jpg", "https://cdn.cloudflare.steamstatic.com/steam/apps/251570/header.jpg", "https://cdn.cloudflare.steamstatic.com/steam/apps/526870/header.jpg", "https://cdn.cloudflare.steamstatic.com/steam/apps/427520/header.jpg", "https://cdn.cloudflare.steamstatic.com/steam/apps/255710/header.jpg", "https://cdn.cloudflare.steamstatic.com/steam/apps/949230/header.jpg", "https://cdn.cloudflare.steamstatic.com/steam/apps/2108330/header.jpg", "https://cdn.cloudflare.steamstatic.com/steam/apps/690790/header.jpg", "https://cdn.cloudflare.steamstatic.com/steam/apps/1778820/header.jpg", "https://cdn.cloudflare.steamstatic.com/steam/apps/1364780/header.jpg", "https://cdn.cloudflare.steamstatic.com/steam/apps/976310/header.jpg"];
self.addEventListener("install",event=>{
 event.waitUntil((async()=>{
   const c=await caches.open(SHELL);
   await c.addAll(SHELL_FILES);
   event.waitUntil?.(Promise.resolve());
   self.skipWaiting();
 })());
});
self.addEventListener("activate",event=>{
 event.waitUntil((async()=>{
   const keys=await caches.keys();
   await Promise.all(keys.filter(k=>!k.startsWith(VERSION)).map(k=>caches.delete(k)));
   await self.clients.claim();
 })());
});
async function cacheResponse(req,promise){
 const c=await caches.open(IMAGES);
 try{
   const r=await promise;
   if(r && (r.ok || r.type==="opaque")) await c.put(req,r.clone());
   return r;
 }catch(e){
   const old=await c.match(req);
   if(old)return old;
   throw e;
 }
}
self.addEventListener("fetch",event=>{
 const req=event.request;
 if(req.method!=="GET")return;
 const url=new URL(req.url);
 if(url.origin===location.origin){
   event.respondWith((async()=>{
     const cached=await caches.match(req);
     if(cached)return cached;
     try{
       const r=await fetch(req);
       const c=await caches.open(SHELL);
       if(r.ok)c.put(req,r.clone());
       return r;
     }catch(e){
       return caches.match("./index.html");
     }
   })());
   return;
 }
 if(req.destination==="image" || url.hostname.includes("steamstatic.com")){
   event.respondWith((async()=>{
     const c=await caches.open(IMAGES);
     const cached=await c.match(req);
     if(cached)return cached;
     try{ return await cacheResponse(req,fetch(req)); }
     catch(e){ return Response.error(); }
   })());
 }
});
