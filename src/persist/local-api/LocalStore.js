class LocalStore {
  constructor(database, tableName) {
    this.db = database
    this.table = this.db.table(tableName)

  }

  table;
  db;

  async get(query) {
    return this.table; // TODO: use query
  }
  async getById(id) {
    return this.table.get(id)
  }
  async add(entity) {
    let me = this;
    return new Promise((resolve, reject) => {
      me.db.transaction('rw', me.table, async tx => {
        delete entity.id
        await me.table.add(entity);
        resolve(entity)
      }).catch(function(err) {
        reject(err)
      });
    })
  }
  async update(entity) {
    let me = this;
    return new Promise((resolve, reject) => {
      me.db.transaction('rw', me.table, async tx => {
        await me.table.put(entity);
        resolve(entity)
      }).catch(function(err) {
        reject(err)
      });
    })
  }
  async delete(entity) {
    let me = this;
    return new Promise((resolve, reject) => {
      me.db.transaction('rw', me.table, async tx => {
        await me.table.delete(entity.id);
        resolve(entity)
      }).catch(function(err) {
        reject(err)
      });
    })
  }
}

export default LocalStore
