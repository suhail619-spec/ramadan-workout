self.addEventListener("install", event => {
  event.waitUntil(
    caches.open("ramadan-workout-cache").then(cache => {
      return cache.addAll([
        "./",
        "./index.html",
        "./style.css",
        "./script.js",
        "./workouts.json"
      ]);
    })
  );
});