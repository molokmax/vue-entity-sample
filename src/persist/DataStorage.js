// import EntityConfig from './settings/EntityConfig'

class DataStorage {

  constructor(config, cacheManager) {
    this.#config = config
    this.#localStorage = cacheManager.getCache(config.name)
    // TODO: init remote storage
  }

  #config;
  #localStorage;
  #remoteStorage;

  async get(query) {
    let store = this.getStorage()
    if (store) {
      return await store.get(query)
    }
  }
  async getById(id) {
    let store = this.getStorage()
    if (store) {
      return await store.getById(id)
    }
  }
  async add(entity) {
    let store = this.getStorage()
    if (store) {
      return await store.add(entity)
    }
  }
  async update(entity) {
    let store = this.getStorage()
    if (store) {
      return await store.update(entity)
    }
  }
  async delete(entity) {
    let store = this.getStorage()
    if (store) {
      return await store.delete(entity)
    }
  }

  getStorage() {
    // TODO: check internet access or strategy or some thing else
    return this.#localStorage
  }

}

export default DataStorage
