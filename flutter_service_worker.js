'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "0b1d98ffda6b28ecd5001ae955ef1712",
".vercel/project.json": "8ded91811f228bdc4ade021416eaecde",
".vercel/README.txt": "2b13c79d37d6ed82a3255b83b6815034",
"version.json": "74e38a88e18e14a30e084974d0e35a18",
"index.html": "11caa450d1cd2467055aa18c4d280273",
"/": "11caa450d1cd2467055aa18c4d280273",
"vercel.json": "61bd31a2b0ac08f10f13c932b32d6ca1",
"main.dart.js": "e4e3d0ddfcbd2146950ff5a6d2a33274",
"sqlite3.wasm": "fa7637a49a0e434f2a98f9981856d118",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"drift_worker.js": "aed79dced4c5163db8bdd796010b83c0",
"drift_worker.js.deps": "c50e13bc247b9ac4185e792b2bd1e7bb",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "517f932c324f31d55a29a898a13cae0b",
".git/config": "653930e89cefd63171303f58d1aa597c",
".git/objects/92/65271423f84461d77884d2951fb8bc3d1fd82a": "b19ea62170f08eea8d0867d33c16947d",
".git/objects/0c/723e1df1d019e919c1c3fd48c3989cc07d350a": "f7f9c7aca20da7abe5c9d8fe58205e6c",
".git/objects/3e/715eb4f641dfbea892426228cde8d69ba1c9c7": "0b2194bea3a1568c0fca5ad6317fbac6",
".git/objects/68/43fddc6aef172d5576ecce56160b1c73bc0f85": "2a91c358adf65703ab820ee54e7aff37",
".git/objects/68/3fffff3821ba65c73d99553eb4f276dc871fe0": "afe369352103abb710efd0d287bcc09a",
".git/objects/6f/7661bc79baa113f478e9a717e0c4959a3f3d27": "985be3a6935e9d31febd5205a9e04c4e",
".git/objects/6f/c6961d448a341461f39e1a61ba966b1523080c": "4b95fb07daf1dc631f440f86181f6c21",
".git/objects/69/b2023ef3b84225f16fdd15ba36b2b5fc3cee43": "6ccef18e05a49674444167a08de6e407",
".git/objects/51/c2391dd83129e625932606e25d5a3c6fb3564c": "434d99fc8fdf4b023646f6cfc31dd4ac",
".git/objects/51/03e757c71f2abfd2269054a790f775ec61ffa4": "d437b77e41df8fcc0c0e99f143adc093",
".git/objects/0b/4af91f32f589adb87e5f320fa05a1ef817b546": "e16923393775c1d7657f20a50d39e6f4",
".git/objects/93/b363f37b4951e6c5b9e1932ed169c9928b1e90": "c8d74fb3083c0dc39be8cff78a1d4dd5",
".git/objects/5f/2b1f8c4642eb2e27b141bc1a23ab45441890f0": "e77da6f76a12df8a73cceebbc2d3d08b",
".git/objects/a4/5c7ed3603f4ba905fcef073befb5f23a2d72f9": "acbbc06f749d8c9b394232d60f134206",
".git/objects/d9/5b1d3499b3b3d3989fa2a461151ba2abd92a07": "a072a09ac2efe43c8d49b7356317e52e",
".git/objects/ad/988ceaba04e8801b58be4b49d6568788ace351": "02d5222266569088bf9787963c2dc8d7",
".git/objects/ad/ced61befd6b9d30829511317b07b72e66918a1": "37e7fcca73f0b6930673b256fac467ae",
".git/objects/be/71fe4b2c81a6306153abdff0da1745c73e328f": "ef6671b85ff87f39704bf64d8a30d523",
".git/objects/d6/e89e21497a31cef4d896ff0e42081b808ac623": "487c9660d8754a7cba2183b6b6a8977d",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/e2/e0427151fb1475abaaf9f847ff52284d270cfb": "1ba39c97754536801c380531f419687a",
".git/objects/f3/3e0726c3581f96c51f862cf61120af36599a32": "afcaefd94c5f13d3da610e0defa27e50",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/fd/05cfbc927a4fedcbe4d6d4b62e2c1ed8918f26": "5675c69555d005a1a244cc8ba90a402c",
".git/objects/f5/2f76fb05130fa995a935cc086d796ce7e904c6": "3b27742691d31faa270e3de515185805",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/cf/89df668b682df6029e5b051cc5316e42333563": "e86a32fbeb0b6f84d1fad1746170c3cb",
".git/objects/c8/3af99da428c63c1f82efdcd11c8d5297bddb04": "144ef6d9a8ff9a753d6e3b9573d5242f",
".git/objects/fb/cc59e912f46ae02856e616c667f13a93dc63be": "2be94f0cfa41e5030c640af1215286f4",
".git/objects/7c/3463b788d022128d17b29072564326f1fd8819": "37fee507a59e935fc85169a822943ba2",
".git/objects/1f/b787562fb5858d0fa88072650bcd86d52ca448": "2d97fb18e24425520f9772780da0cfd1",
".git/objects/17/7524af2fbf483e870ad857608f8216141c2f6b": "76d1e364635f6b3eea39e5be38c19438",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/81/88fa61e6bd1b13c89375ff9b624bf4ffa450a0": "168450f4e5e923522a962e39ba399f6a",
".git/objects/88/69666f245c6f474b98024327df7082e4c868b8": "7095b3dcb6dc4423eaf9bbae7242b8d0",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/91/62b40816f81a2419a2e46157f889c85781bd03": "3196bf435aa3501e3b1ea367ef1dbcb4",
".git/objects/3a/8cda5335b4b2a108123194b84df133bac91b23": "1636ee51263ed072c69e4e3b8d14f339",
".git/objects/54/d53eefacf0ba6e6f5a3b41a7ae23ab48b5cb2a": "27119a1d383a46ad91c7a3d4c81d08ca",
".git/objects/3f/9310c96e772354c43957a88c6cade2ba520a58": "732587e22ba6adea606c30beab645aad",
".git/objects/08/27c17254fd3959af211aaf91a82d3b9a804c2f": "360dc8df65dabbf4e7f858711c46cc09",
".git/objects/08/3d3f66cbcc179096346bcc56bee140d23d7dd3": "36c1ea52f6e0747c8adaf8b7231fdc5f",
".git/objects/64/46c41bdd399f5237713c692e21013327a81638": "b36d92a33349e70ad8ea0921b388f868",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/dd/ee473e02035bfce6244746d5d2a281616f7ff8": "6672076e8683e676df5110479b3b1df4",
".git/objects/dc/30cc03cabb1f6fc5f548c3fb5ebf3bab03bcab": "5114909039cf2a94a45f872701c0fc2e",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/3e39bd49dfaf9e225bb598cd9644f833badd9a": "666b0d595ebbcc37f0c7b61220c18864",
".git/objects/e6/eb8f689cbc9febb5a913856382d297dae0d383": "466fce65fb82283da16cdd7c93059ff3",
".git/objects/f6/e6c75d6f1151eeb165a90f04b4d99effa41e83": "95ea83d65d44e4c524c6d51286406ac8",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/e9/85853ed84acf10f62f639a4733083229c5a55d": "0fa4c11ffb67d2134def6bc8d43a77d3",
".git/objects/cb/5d768e8ab022017eaafcbb59c805dab96c0e0e": "233c7b366fccebd6db72d00c6058505c",
".git/objects/41/de173d9014b38f8290acf270c490b37fc79a60": "d2a9d01215e9d65fd0456ded49e98878",
".git/objects/1e/67616cb6b1424b8ebee0b265a03897417ca1e4": "da2387c800452856cfbb9174fba39362",
".git/objects/8d/6c7493f5c20c8262a16a58341d13a1b09ddf6b": "cdbc9940c1390aba43701adc58dcb832",
".git/objects/85/63aed2175379d2e75ec05ec0373a302730b6ad": "997f96db42b2dde7c208b10d023a5a8e",
".git/objects/13/23cdac34c6ae8f7e1f8a2f3adc299eae7bdcea": "14c53dcf389f9fd3a26d012494e074b7",
".git/objects/25/cbaf1432e1dcda1a758dd5f2c50a5dc0c6540a": "d17e3dc7e437edd9646693cdada61b2b",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "b54fbc1772446ea9de9d536d15bef4a8",
".git/logs/refs/heads/main": "b54fbc1772446ea9de9d536d15bef4a8",
".git/logs/refs/remotes/origin/main": "1a3a89699203d059a8538d21e109a052",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "f899190aef28bb9fefeef1235bf8607c",
".git/refs/remotes/origin/main": "f899190aef28bb9fefeef1235bf8607c",
".git/index": "49f92c568c0321d6cfd7ff066e4d24d9",
".git/COMMIT_EDITMSG": "2cb16514fca26aa1782822b393012510",
"assets/NOTICES": "2a5f90073b068c84020bfcc8d0f2cc60",
"assets/FontManifest.json": "fecbb22128a5fd46f1bdcba33a32093f",
"assets/AssetManifest.bin.json": "3dfe076aa109d624df0e338f5dfff0f8",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/fluent_ui/fonts/FluentIcons.ttf": "f3c4f09a37ace3246250ff7142da5cdd",
"assets/packages/fluent_ui/fonts/SegoeIcons.ttf": "5c053a34db297a1a533e62815a9b8827",
"assets/packages/fluent_ui/assets/AcrylicNoise.png": "81f27726c45346351eca125bd062e9a7",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"assets/AssetManifest.bin": "00428ba05689822d0a008c2d814ee808",
"assets/fonts/MaterialIcons-Regular.otf": "1a19420fdc2d4c9a71923cd801961de4",
"assets/assets/fonts/Roboto-Regular.ttf": "8f793587dcf03f31c551c5b60d175fc2",
"assets/assets/fonts/Roboto-Bold.ttf": "a68db3b33213fa138e6f72a5b76ac632",
"drift_worker.js.map": "7f78aaa604ae7a53ba5360723b303c5c",
"drift_worker.dart": "eb8219d0cb3e6396dee4f89b6f833ecc",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
