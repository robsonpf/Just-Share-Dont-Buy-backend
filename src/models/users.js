const user = require('../../query/users.js')

getAll = (fn) => {
  user.getAllUsers()
  .then((res, err) => {
    if(err)
      return fn(null, err)
    console.log("getAll: QueryResult: " + JSON.stringify(res));
    return fn(res, null)
  })
}


getById = (id, fn) => {
  user.getById(id)
  .then((res, err) => {
    if (err) {
      return fn(null, err)
    }
    console.log("getById: QueryResult: " + JSON.stringify(res));
    return fn(res, null)
  })
}

module.exports = {
  getAll,
  getById
}
