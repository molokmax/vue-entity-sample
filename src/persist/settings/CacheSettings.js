import config from './entity-config.json';
import EntityConfig from './EntityConfig'

class CacheSettings {

  constructor() {
    for (let entity of config) {
      let entityCfg = new EntityConfig(entity)
      this.#settings[entityCfg.name] = entityCfg
    }
  }

  #settings = {};

  getEntityConfig(entityName) {
    if (entityName in this.#settings) {
      return this.#settings[entityName]
    } else {
      console.warn(`Config for entity '${entityName}' is not found`)
      return null
    }
  }
  getConfigList() {
    return Object.values(this.#settings)
  }
}

export default CacheSettings;
