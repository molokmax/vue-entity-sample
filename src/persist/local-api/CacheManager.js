import Dexie from 'dexie'
import LocalStore from './LocalStore'

/*
 * contains array of cache instances for each entity
 * provides methods for interuct with local cache
 */
class CacheManager {

  #db;
  #caches = {};

  constructor(cacheSettings) {
    this.#db = new Dexie('entity-cache')
    let configs = cacheSettings.getConfigList()
    let dbConfig = {}
    for (let cfg of configs) {
      dbConfig[cfg.name] = cfg.schema
    }
    this.#db.version(1).stores(dbConfig)

    for (let cfg of configs) {
      let store = new LocalStore(this.#db, cfg.name)
      this.#caches[cfg.name] = store
    }
  }

  getCache(entityName) {
    if (entityName in this.#caches) {
      return this.#caches[entityName]
    } else {
      console.warn(`Cache for entity '${entityName}' is not found`)
      return null
    }
  }
}

export default CacheManager
