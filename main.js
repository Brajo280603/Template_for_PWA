if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./service-worker.js'); //registering a Service worker is mandatory for PWA installation
}