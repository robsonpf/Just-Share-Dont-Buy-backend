const db = require('../../query/db')


getById = (id, fn) => {
  // console.log('inside model:', id, 'db:', db, 'find:', db.find)

  console.log("getById: ID = " + id)

  db.select('*')
    .from('categories')
    .where('id', id)
    .then((res, err) => {
      if (err) {
        return fn(null, err)
      }
      console.log("getById: QueryResult: " + JSON.stringify(res));
      return fn(res, null)
    })
};

module.exports = { getById }
