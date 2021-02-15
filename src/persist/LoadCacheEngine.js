
// TODO: make singleton

/*
 * The main responsibility it is looking for invalidated caches and reload them
 * On startup app engine should run caches loading if it is necessary
 */
class LoadCacheEngine {
  constructor(cacheManager, cacheSettings, remoteApiManager) {
    this.#cacheManager = cacheManager
    this.#cacheSettings = cacheSettings
    this.#remoteApiManager = remoteApiManager
  }

  #cacheManager = null;
  #cacheSettings = null;
  #remoteApiManager = null;
  #interval = 10; // in seconds
  #reloadTask = null; // ref to loop task

  start() {
    console.log('LoadCacheEngine start')
    this.#reloadTask = setInterval(this.checkCaches, this.#interval);
  }
  stop() {
    console.log('LoadCacheEngine stop')
    if (this.#reloadTask) {
      clearInterval(this.#reloadTask)
    }
  }

  checkCaches() {
    console.trace('checkCaches begin')
    // TODO: foreach over an array of caches

    console.trace('checkCaches finish')
  }
}

export default LoadCacheEngine;
