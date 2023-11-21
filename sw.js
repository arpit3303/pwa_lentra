/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

workbox.core.skipWaiting();

workbox.core.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "assets/copy-logo.png",
    "revision": "35a8bd8a600fe72e2b8d9e4eca5ca6ef"
  },
  {
    "url": "assets/customer.png",
    "revision": "a7d2760ba48bd2a24d6e0c22856b8b18"
  },
  {
    "url": "assets/home/home-logo.png",
    "revision": "cbfb4a890ec935b31d3d82d375468549"
  },
  {
    "url": "assets/icon/favicon.ico",
    "revision": "e95a3bb5acc239c567c382c85f400153"
  },
  {
    "url": "assets/login_bg.png",
    "revision": "dafdc98164fd89f5946d84502c26cf3d"
  },
  {
    "url": "assets/logo.png",
    "revision": "a6236d782b92c316e0afe35a8ce3d7bb"
  },
  {
    "url": "assets/products/AGL.png",
    "revision": "f047a59c196853df8ce78a0eada2a489"
  },
  {
    "url": "assets/products/AL.png",
    "revision": "985a62e21f85636d2fe31c90850e9ebc"
  },
  {
    "url": "assets/products/BL.png",
    "revision": "7688c41bbf58d67b5fccf26dcb32058b"
  },
  {
    "url": "assets/products/CL.png",
    "revision": "74bbc79b8a59aab1dfb2b4af1069de7a"
  },
  {
    "url": "assets/products/EL.png",
    "revision": "4d8e13e2fc457a4d06fc0831a66ce5a2"
  },
  {
    "url": "assets/products/GL.png",
    "revision": "93675bbf740df636adcfa6d94054d78e"
  },
  {
    "url": "assets/products/Header.png",
    "revision": "f0ceec8e77d99a9f8e44eccc3f025741"
  },
  {
    "url": "assets/products/HL.png",
    "revision": "1d2258e982fbedf5f0981aaeae2296e4"
  },
  {
    "url": "assets/products/KCC.png",
    "revision": "40474c37f6262fc2f6a54d9d33f66d95"
  },
  {
    "url": "assets/products/LAP.png",
    "revision": "fda87e70b6487cc360a76c1531b62b4f"
  },
  {
    "url": "assets/products/PL.png",
    "revision": "cd06e811d00d56e585fc36cbc216eef5"
  },
  {
    "url": "assets/products/TW.png",
    "revision": "d8751816064ede30440d579f59f3983a"
  },
  {
    "url": "build/index.esm.js",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "build/journey-assets/common-images/spinner.png",
    "revision": "e8852e6982ec532a040bf825bf7aa904"
  },
  {
    "url": "build/journey-assets/fonts/inter/inter.css",
    "revision": "4ebb717e6657163dfed4fac4bcd66b2e"
  },
  {
    "url": "build/journey-assets/fonts/mat-fonts/material-icons.css",
    "revision": "3ee11322600684151eec01ccec98d78b"
  },
  {
    "url": "build/journey-assets/self-serve/help.png",
    "revision": "3034edb2f88f78c24c6a6c40fd756123"
  },
  {
    "url": "build/journey-assets/self-serve/logo.png",
    "revision": "d6b9be7112ee9b8933214b33c06c3afd"
  },
  {
    "url": "build/journey-assets/self-serve/rupee-man.png",
    "revision": "01bbdae099cfac3f0603dcde1e5c4dc8"
  },
  {
    "url": "build/journey-assets/skin/i18n/hi.css",
    "revision": "e5a506350838b5966835573296ed07d9"
  },
  {
    "url": "build/journey-assets/skin/skin-casual.css",
    "revision": "1142899843e18c638b26d2a35fad6ee0"
  },
  {
    "url": "build/journey-assets/skin/skin-premium.css",
    "revision": "58bec846b712ad1753da7ec8adf40b6e"
  },
  {
    "url": "build/journey-assets/skin/skin-professional.css",
    "revision": "2222ea6612ad1368bd05fd121c98f53a"
  },
  {
    "url": "build/journey-assets/worker/pdfjs/3.3.122/pdf.worker.min.js",
    "revision": "6e528b9357ecc71bc55de97b0771c9b2"
  },
  {
    "url": "build/p-0190baae.entry.js"
  },
  {
    "url": "build/p-01ecc714.js"
  },
  {
    "url": "build/p-033458d3.entry.js"
  },
  {
    "url": "build/p-062ef91a.js"
  },
  {
    "url": "build/p-07943a84.js"
  },
  {
    "url": "build/p-08ed1f22.entry.js"
  },
  {
    "url": "build/p-09bfed58.js"
  },
  {
    "url": "build/p-09ecce48.entry.js"
  },
  {
    "url": "build/p-0a84aa67.entry.js"
  },
  {
    "url": "build/p-0b444fd8.js"
  },
  {
    "url": "build/p-0c13d934.entry.js"
  },
  {
    "url": "build/p-110fb15f.entry.js"
  },
  {
    "url": "build/p-120f2456.entry.js"
  },
  {
    "url": "build/p-14b0f282.entry.js"
  },
  {
    "url": "build/p-14b4bf0f.entry.js"
  },
  {
    "url": "build/p-15008122.js"
  },
  {
    "url": "build/p-19c537d1.entry.js"
  },
  {
    "url": "build/p-1f4eaa90.js"
  },
  {
    "url": "build/p-23af8ce5.entry.js"
  },
  {
    "url": "build/p-24c8bfc2.js"
  },
  {
    "url": "build/p-28998740.js"
  },
  {
    "url": "build/p-2a551782.js"
  },
  {
    "url": "build/p-2b0fd4d1.entry.js"
  },
  {
    "url": "build/p-2c2ea88a.entry.js"
  },
  {
    "url": "build/p-2f9f0cea.entry.js"
  },
  {
    "url": "build/p-332c85d3.js"
  },
  {
    "url": "build/p-36b298a1.entry.js"
  },
  {
    "url": "build/p-370d8dd0.js"
  },
  {
    "url": "build/p-37c9ef27.entry.js"
  },
  {
    "url": "build/p-42b07e80.js"
  },
  {
    "url": "build/p-4393af84.entry.js"
  },
  {
    "url": "build/p-4847df84.js"
  },
  {
    "url": "build/p-4d67e14a.js"
  },
  {
    "url": "build/p-4e26e6e5.js"
  },
  {
    "url": "build/p-4e893233.entry.js"
  },
  {
    "url": "build/p-4f90cdd7.js"
  },
  {
    "url": "build/p-50afd7b3.entry.js"
  },
  {
    "url": "build/p-510a982a.entry.js"
  },
  {
    "url": "build/p-51d8f9e5.js"
  },
  {
    "url": "build/p-53c8d06b.entry.js"
  },
  {
    "url": "build/p-540dd48c.js"
  },
  {
    "url": "build/p-54a52bae.js"
  },
  {
    "url": "build/p-55b70433.entry.js"
  },
  {
    "url": "build/p-56094eec.entry.js"
  },
  {
    "url": "build/p-579db402.js"
  },
  {
    "url": "build/p-5d722613.entry.js"
  },
  {
    "url": "build/p-603e8be3.js"
  },
  {
    "url": "build/p-60cb03f7.entry.js"
  },
  {
    "url": "build/p-62007d46.js"
  },
  {
    "url": "build/p-6233e201.js"
  },
  {
    "url": "build/p-6558b247.entry.js"
  },
  {
    "url": "build/p-65743ac2.entry.js"
  },
  {
    "url": "build/p-687e0b07.entry.js"
  },
  {
    "url": "build/p-6919e988.entry.js"
  },
  {
    "url": "build/p-6a362238.entry.js"
  },
  {
    "url": "build/p-6a4f5a43.entry.js"
  },
  {
    "url": "build/p-6aadf227.js"
  },
  {
    "url": "build/p-6c5b82cd.js"
  },
  {
    "url": "build/p-6d50242a.js"
  },
  {
    "url": "build/p-7127aed1.js"
  },
  {
    "url": "build/p-717f35d3.entry.js"
  },
  {
    "url": "build/p-7191d367.entry.js"
  },
  {
    "url": "build/p-76d0a1e2.entry.js"
  },
  {
    "url": "build/p-7d53cb73.entry.js"
  },
  {
    "url": "build/p-7db33970.entry.js"
  },
  {
    "url": "build/p-7df989e2.js"
  },
  {
    "url": "build/p-801bdd42.js"
  },
  {
    "url": "build/p-802ed3d9.entry.js"
  },
  {
    "url": "build/p-80d980b0.js"
  },
  {
    "url": "build/p-82693b31.js"
  },
  {
    "url": "build/p-83bd7d58.js"
  },
  {
    "url": "build/p-84bf9600.entry.js"
  },
  {
    "url": "build/p-84cb9c9e.js"
  },
  {
    "url": "build/p-89f196b9.js"
  },
  {
    "url": "build/p-8a4cb137.js"
  },
  {
    "url": "build/p-8bc95ed4.entry.js"
  },
  {
    "url": "build/p-8d5b608d.js"
  },
  {
    "url": "build/p-8f50020c.entry.js"
  },
  {
    "url": "build/p-909e85e3.js"
  },
  {
    "url": "build/p-962914cf.entry.js"
  },
  {
    "url": "build/p-98330aaf.js"
  },
  {
    "url": "build/p-99cf98bd.entry.js"
  },
  {
    "url": "build/p-9b6b7db3.js"
  },
  {
    "url": "build/p-9c5a12aa.entry.js"
  },
  {
    "url": "build/p-9c6e94a8.entry.js"
  },
  {
    "url": "build/p-9eedcceb.entry.js"
  },
  {
    "url": "build/p-a0160cec.entry.js"
  },
  {
    "url": "build/p-a2db75c3.css"
  },
  {
    "url": "build/p-a3434340.entry.js"
  },
  {
    "url": "build/p-a6548c36.entry.js"
  },
  {
    "url": "build/p-a6e04801.entry.js"
  },
  {
    "url": "build/p-a7283059.js"
  },
  {
    "url": "build/p-a750b6d0.js"
  },
  {
    "url": "build/p-a8351f2d.js"
  },
  {
    "url": "build/p-ac3471de.js"
  },
  {
    "url": "build/p-b3ec17ea.entry.js"
  },
  {
    "url": "build/p-b4fc5e3b.js"
  },
  {
    "url": "build/p-b5e4cbcd.entry.js"
  },
  {
    "url": "build/p-b9dc946c.js"
  },
  {
    "url": "build/p-bd1467b9.entry.js"
  },
  {
    "url": "build/p-be608c40.entry.js"
  },
  {
    "url": "build/p-bf5b2e13.js"
  },
  {
    "url": "build/p-bfe09e70.js"
  },
  {
    "url": "build/p-c1ef9731.entry.js"
  },
  {
    "url": "build/p-c2694435.js"
  },
  {
    "url": "build/p-c33623d5.js"
  },
  {
    "url": "build/p-c59ac6bd.entry.js"
  },
  {
    "url": "build/p-c671d0ad.entry.js"
  },
  {
    "url": "build/p-c6d49aea.entry.js"
  },
  {
    "url": "build/p-cacd9512.entry.js"
  },
  {
    "url": "build/p-d08c24f0.entry.js"
  },
  {
    "url": "build/p-d141449f.js"
  },
  {
    "url": "build/p-d2919f91.js"
  },
  {
    "url": "build/p-d34f273a.js"
  },
  {
    "url": "build/p-d376b0e0.js"
  },
  {
    "url": "build/p-d56bf3a6.js"
  },
  {
    "url": "build/p-d8d4ae0f.entry.js"
  },
  {
    "url": "build/p-dbf92fdd.js"
  },
  {
    "url": "build/p-decfbdb1.js"
  },
  {
    "url": "build/p-ded6d570.js"
  },
  {
    "url": "build/p-e1fe357d.js"
  },
  {
    "url": "build/p-e398c0e4.entry.js"
  },
  {
    "url": "build/p-e3abceac.entry.js"
  },
  {
    "url": "build/p-e4a15a9d.js"
  },
  {
    "url": "build/p-e52e75ed.entry.js"
  },
  {
    "url": "build/p-e595bba5.js"
  },
  {
    "url": "build/p-e795b79b.entry.js"
  },
  {
    "url": "build/p-e9b4cc65.entry.js"
  },
  {
    "url": "build/p-ea6b15f1.js"
  },
  {
    "url": "build/p-ec03668c.entry.js"
  },
  {
    "url": "build/p-ec49075e.js"
  },
  {
    "url": "build/p-ed070db2.entry.js"
  },
  {
    "url": "build/p-eff834f0.js"
  },
  {
    "url": "build/p-f00e4d49.entry.js"
  },
  {
    "url": "build/p-f316492f.entry.js"
  },
  {
    "url": "build/p-f379ce76.js"
  },
  {
    "url": "build/p-f55657fd.js"
  },
  {
    "url": "build/p-f69c9006.entry.js"
  },
  {
    "url": "build/p-f70c4c59.js"
  },
  {
    "url": "build/p-f80096c9.entry.js"
  },
  {
    "url": "build/p-fb03409c.js"
  },
  {
    "url": "build/p-fdb40926.js"
  },
  {
    "url": "build/p-ffd65c36.entry.js"
  },
  {
    "url": "index.html",
    "revision": "6c10dde822304aefcd046ba1fbd33852"
  },
  {
    "url": "manifest.json",
    "revision": "5348651e96cea0311f701d21c56f834f"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/^.*\/portal\/\?instId=9425/, new workbox.strategies.CacheFirst({ "cacheName":"login-cache", plugins: [new workbox.expiration.Plugin({ maxAgeSeconds: 2592000, purgeOnQuotaError: false })] }), 'GET');
workbox.routing.registerRoute(/^.*\/ui\/portal-slugs\/9425\/9425-portal-config\.json(?:\?.*)?$/, new workbox.strategies.CacheFirst({ "cacheName":"cdn-assets", plugins: [new workbox.expiration.Plugin({ maxEntries: 50, purgeOnQuotaError: false })] }), 'GET');
