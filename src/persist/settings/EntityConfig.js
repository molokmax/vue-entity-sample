class EntityConfig {

  constructor(config) {
    this.name = config.name
    this.schema = config.schema
    // TODO: cacheStrategy
  }

  name;
  schema;
  cacheStrategy;
}

export default EntityConfig;
