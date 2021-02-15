import CacheSettings from "./settings/CacheSettings";
import DataStorage from "./DataStorage"
import CacheManager from "./local-api/CacheManager"

class DataManager {
  constructor() {

    // initialize settings
    this.#settings = new CacheSettings()

    // create DataStorage for each entity
    let cacheManager = new CacheManager(this.#settings)
    for (let cfg of this.#settings.getConfigList()) {
      this.#stores[cfg.name] = new DataStorage(cfg, cacheManager)
    }
  }

  #settings;
  // #cacheManager;
  #stores = {};

  async get(entityName, query) {
    let store = this.getStorage(entityName)
    if (store) {
      return await store.get(query)
    }
  }
  async getById(entityName, id) {
    let store = this.getStorage(entityName)
    if (store) {
      return await store.getById(id)
    }
  }
  async add(entityName, record) {
    let store = this.getStorage(entityName)
    if (store) {
      return await store.add(record)
    }
  }
  async update(entityName, record) {
    let store = this.getStorage(entityName)
    if (store) {
      return await store.update(record)
    }
  }
  async delete(entityName, record) {
    let store = this.getStorage(entityName)
    if (store) {
      return await store.delete(record)
    }
  }
  
  getStorage(entityName) {
    if (entityName in this.#stores) {
      return this.#stores[entityName]
    } else {
      console.warn(`Store for entity '${entityName}' is not found`)
      return null
    }
  }

}

export default DataManager
